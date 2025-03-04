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
 * /api/storeshopZCoinConfig:
 *   post:
 *     tags: [進貨]
 *     summary: 查詢場區進貨範本的 Z 幣設定
 *     description: 使用 POST 方法，透過 storeshop_ouid 查詢場區進貨範本的 Z 幣設定
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
 *     responses:
 *       200:
 *         description: Z-coin settings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ouid:
 *                     type: string
 *                   purchase_sku_pref_ouid:
 *                     type: string
 *                   member_type_ouid:
 *                     type: string
 *                   exchange_type:
 *                     type: string
 *                   config_value1:
 *                     type: string
 *                   config_value2:
 *                     type: string
 *                   pos_decimal_type:
 *                     type: string
 *                   insufficient_by_percent:
 *                     type: string
 *       400:
 *         description: Invalid request format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: No Z-coin settings found
 */
router.post('/', withDatabase, async (req, res) => {
    const { storeshop_ouid } = req.body;
    const client = req.dbClient;

    if (!storeshop_ouid) {
        logWithWarn('Request received without storeshop_ouid');
        return res.status(400).json({ error: 'Storeshop OUID is required' });
    }

    try {
        // Step 1: Find source_ouid using storeshop_ouid and source_type='L'
        const authQuery = `
            SELECT source_ouid 
            FROM storeshop_pref_auth 
            WHERE storeshop_ouid = $1 
            AND source_type = $2`;

        logWithDebug(`Executing SQL: ${authQuery} with params: [${storeshop_ouid}, 'L']`);
        const authResult = await client.query(authQuery, [storeshop_ouid, 'L']);
        logWithDebug(`Query Result: ${JSON.stringify(authResult.rows)}`);

        if (authResult.rows.length === 0) {
            logWithWarn(`No auth record found for storeshop_ouid: ${storeshop_ouid}`);
            return res.status(404).json({ error: '找不到符合條件的來源' });
        }
        const sourceOuid = authResult.rows[0].source_ouid;

        // Step 2: Find ouid using source_ouid
        const skuPrefQuery = `
            SELECT ouid 
            FROM purchase_sku_pref 
            WHERE ouid = $1 
            AND status_flag = 'Y'`;

        logWithDebug(`Executing SQL: ${skuPrefQuery} with params: [${sourceOuid}]`);
        const skuPrefResult = await client.query(skuPrefQuery, [sourceOuid]);
        logWithDebug(`Query Result: ${JSON.stringify(skuPrefResult.rows)}`);

        if (skuPrefResult.rows.length === 0) {
            logWithWarn(`No SKU preference found for sourceOuid: ${sourceOuid}`);
            return res.status(404).json({ error: '找不到符合條件的範本' });
        }
        const purchaseSkuPrefOuid = skuPrefResult.rows[0].ouid;

        // Step 3: Find Z-coin settings using purchase_sku_pref_ouid
        const zCoinConfigQuery = `
            SELECT 
                ouid,
                purchase_sku_pref_ouid,
                member_type_ouid,
                exchange_type,
                config_value1,
                config_value2,
                pos_decimal_type,
                insufficient_by_percent
            FROM purchase_sku_pref_point_config
            WHERE purchase_sku_pref_ouid = $1`;

        logWithDebug(`Executing SQL: ${zCoinConfigQuery} with params: [${purchaseSkuPrefOuid}]`);
        const zCoinConfigResult = await client.query(zCoinConfigQuery, [purchaseSkuPrefOuid]);
        logWithTimestamp(`Z-coin config found: ${JSON.stringify(zCoinConfigResult.rows)}`);

        if (zCoinConfigResult.rows.length === 0) {
            logWithWarn(`No Z-coin config found for purchaseSkuPrefOuid: ${purchaseSkuPrefOuid}`);
            return res.status(404).json({ error: '找不到符合條件的Z幣設定' });
        }

        logWithDebug('Successfully retrieved Z-coin config');
        res.json(zCoinConfigResult.rows);
    } catch (error) {
        logWithError(`Database query error: ${error.message}`);
        logWithDebug(`Error stack: ${error.stack}`);
        res.status(500).json({ error: '資料庫查詢失敗' });
    }
});

module.exports = router;
