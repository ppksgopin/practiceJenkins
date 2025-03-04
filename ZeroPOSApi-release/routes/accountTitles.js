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
 * /api/account-titles:
 *   post:
 *     tags: [會計科目]
 *     summary: 查詢科目明細
 *     description: 依據交易類型及科目代碼查詢科目明細
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - equation_type
 *             properties:
 *               equation_type:
 *                 type: string
 *                 enum: [E, I]
 *               account_title_ouid:
 *                 type: string
 *     responses:
 *       200:
 *         description: Account title details list
 */
router.post('/', withDatabase, async (req, res) => {
    const { equation_type, account_title_ouid } = req.body;
    const client = req.dbClient;

    if (!equation_type || !['E', 'I'].includes(equation_type)) {
        logWithWarn(`Invalid equation_type provided: ${equation_type}`);
        return res.status(400).json({ error: '請提供有效的交易類型(E或I)' });
    }

    let query = `
        SELECT 
            ati.ouid,
            ati.account_title_ouid,
            ati.name as item_name,
            ati.equation_type,
            ati.reason,
            at.name as title_name,
            at.code
        FROM account_title_item ati
        INNER JOIN account_title at ON ati.account_title_ouid = at.ouid
        WHERE ati.status_flag = 'Y'
        AND ati.equation_type = $1`;

    const params = [equation_type];
    let paramIndex = 2;

    if (account_title_ouid) {
        logWithDebug(`Adding account_title_ouid filter: ${account_title_ouid}`);
        query += ` AND ati.account_title_ouid = $${paramIndex}`;
        params.push(account_title_ouid);
    }

    try {
        logWithDebug(`Executing SQL: ${query} with params: ${JSON.stringify(params)}`);
        const { rows } = await client.query(query, params);
        logWithTimestamp(`Query Result: ${JSON.stringify(rows)}`);

        if (rows.length === 0) {
            logWithWarn(`No account titles found for equation_type: ${equation_type}, account_title_ouid: ${account_title_ouid}`);
            return res.status(404).json({ error: '找不到符合條件的科目明細' });
        }

        logWithDebug(`Successfully retrieved ${rows.length} account titles`);
        res.json(rows);
    } catch (error) {
        logWithError(`Database query error: ${error.message}`);
        logWithDebug(`Error stack: ${error.stack}`);
        res.status(500).json({ error: '資料庫查詢失敗' });
    }
});

module.exports = router;