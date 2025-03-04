const express = require('express');
const router = express.Router();
const { withDatabase } = require('../middleware/database');
const { 
    logWithTimestamp, 
    logWithWarn, 
    logWithError, 
    logWithDebug 
} = require('../utils/logger');

/**
 * @swagger
 * /api/storeshopReceiveType:
 *   post:
 *     tags: [場區]
 *     summary: 查詢場區收付款類別
 *     description: 使用 POST 方法，透過 storeshop_ouid 和收付款方式查詢收付款類別
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               storeshop_ouid:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [R, P]
 *                 description: R-收款, P-付款
  *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Invalid request format
 *       404:
 *         description: No data found 
 */
router.post('/', withDatabase, async (req, res) => {
    const { storeshop_ouid, type } = req.body;
    const client = req.dbClient;

    if (!storeshop_ouid || !type || !['R', 'P'].includes(type)) {
        logWithWarn(`Invalid request parameters: ${JSON.stringify({ storeshop_ouid, type })}`);
        return res.status(400).json({ error: '請提供正確的場區OUID和收付款方式(R/P)' });
    }

    try {
        // Step 1: Find source_ouid from storeshop_pref_auth
        const authQuery = `
            SELECT source_ouid 
            FROM storeshop_pref_auth 
            WHERE storeshop_ouid = $1 
            AND source_type = 'B' 
            AND status_flag = 'Y'`;
        
        logWithDebug(`Executing SQL: ${authQuery} with params: [${storeshop_ouid}]`);
        const authResult = await client.query(authQuery, [storeshop_ouid]);
        logWithDebug(`Auth query result: ${JSON.stringify(authResult.rows)}`);
        
        if (authResult.rows.length === 0) {
            logWithWarn(`No auth template found for storeshop_ouid: ${storeshop_ouid}`);
            return res.status(404).json({ error: '找不到符合條件的範本授權' });
        }

        const sourceOuid = authResult.rows[0].source_ouid;

        // Step 2: Verify receive_type_pref exists
        const prefQuery = `
            SELECT ouid 
            FROM receive_type_pref 
            WHERE ouid = $1 
            AND status_flag = 'Y'`;
        
        logWithDebug(`Executing SQL: ${prefQuery} with params: [${sourceOuid}]`);
        const prefResult = await client.query(prefQuery, [sourceOuid]);
        logWithDebug(`Preference query result: ${JSON.stringify(prefResult.rows)}`);
        
        if (prefResult.rows.length === 0) {
            logWithWarn(`No payment preference found for sourceOuid: ${sourceOuid}`);
            return res.status(404).json({ error: '找不到符合條件的收付款範本' });
        }

        // Step 3: Get receive types based on type (R/P)
        const itemTable = type === 'R' ? 'receive_type_pref_item' : 'receive_type_pref_item_payment';
        const query = `
            SELECT 
                i.ouid,
                i.receive_type_pref_ouid,
                i.receive_type_ouid,
                r.receipt_type,
                r.receive_type_id,
                r.name,
                r.default_value,
                r.invoiced_flag,
                r.change_flag,
                r.change_max_value,
                r.refund_flag,
                r.cash_flag,
                r.discount_flag,
                r.shift_flag
            FROM ${itemTable} i
            INNER JOIN receive_type r ON i.receive_type_ouid = r.ouid
            WHERE i.receive_type_pref_ouid = $1 
            AND i.status_flag = 'Y'
            AND r.status_flag = 'Y'`;

        logWithDebug(`Executing SQL: ${query} with params: [${sourceOuid}]`);
        const result = await client.query(query, [sourceOuid]);
        logWithTimestamp(`Payment types found: ${JSON.stringify(result.rows)}`);

        if (result.rows.length === 0) {
            logWithWarn(`No payment types found for sourceOuid: ${sourceOuid}`);
            return res.status(404).json({ error: '找不到符合條件的收付款類別' });
        }

        logWithDebug(`Successfully retrieved payment types for storeshop: ${storeshop_ouid}`);
        res.json(result.rows);
    } catch (error) {
        logWithError(`Database query error: ${error.message}`);
        logWithDebug(`Error stack: ${error.stack}`);
        res.status(500).json({ error: '資料庫查詢失敗' });
    }
});

module.exports = router;