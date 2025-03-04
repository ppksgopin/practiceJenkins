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
 * /api/storeshopPurchasePriceCustomer:
 *   post:
 *     tags: [進貨]
 *     summary: 查詢場區進貨價格策略的特定客戶
 *     description: 使用 POST 方法，透過 storeshop_ouid 查詢場區進貨價格策略的特定客戶
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
 *         description: Purchase price strategy for specific customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ouid:
 *                     type: string
 *                   purchase_price_pref_ouid:
 *                     type: string
 *                   sku_ouid:
 *                     type: string
 *                   sku_name:
 *                     type: string
 *                   member_ouid:
 *                     type: string
 *                   member_name:
 *                     type: string
 *                   price:
 *                     type: number
 *       400:
 *         description: Invalid request format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: No purchase price strategy found
 */
router.post('/', withDatabase, async (req, res) => {
    const { storeshop_ouid } = req.body;
    const client = req.dbClient;

    if (!storeshop_ouid) {
        logWithWarn('Request received without storeshop_ouid');
        return res.status(400).json({ error: 'Storeshop OUID is required' });
    }

    try {
        // Step 1: Find source_ouid using storeshop_ouid and source_type='M'
        const authQuery = `
            SELECT source_ouid 
            FROM storeshop_pref_auth 
            WHERE storeshop_ouid = $1 
            AND source_type = $2`;

        logWithDebug(`Executing SQL: ${authQuery} with params: [${storeshop_ouid}, 'M']`);
        const authResult = await client.query(authQuery, [storeshop_ouid, 'M']);
        logWithDebug(`Query Result: ${JSON.stringify(authResult.rows)}`);
        
        if (authResult.rows.length === 0) {
            logWithWarn(`No auth found for storeshop_ouid: ${storeshop_ouid}`);
            return res.status(404).json({ error: '找不到符合條件的來源' });
        }
        const sourceOuid = authResult.rows[0].source_ouid;

        // Step 2: Find ouid using source_ouid and status_flag='Y'
        const pricePrefQuery = `
            SELECT ouid 
            FROM purchase_price_pref 
            WHERE ouid = $1 
            AND status_flag = 'Y'`;

        logWithDebug(`Executing SQL: ${pricePrefQuery} with params: [${sourceOuid}]`);
        const pricePrefResult = await client.query(pricePrefQuery, [sourceOuid]);
        logWithDebug(`Query Result: ${JSON.stringify(pricePrefResult.rows)}`);
        
        if (pricePrefResult.rows.length === 0) {
            logWithWarn(`No price preference found for sourceOuid: ${sourceOuid}`);
            return res.status(404).json({ error: '找不到符合條件的價格策略範本' });
        }
        const purchasePricePrefOuid = pricePrefResult.rows[0].ouid;

        // Step 3: Find purchase price strategy for specific customers
        const customerPriceQuery = `
            SELECT 
                ppm.ouid,
                ppm.purchase_price_pref_ouid,
                ppm.sku_ouid,
                s.name AS sku_name,
                ppm.member_ouid,
                m.name AS member_name,
                ppm.price
            FROM purchase_price_pref_member ppm
            INNER JOIN sku s ON ppm.sku_ouid = s.ouid
            INNER JOIN membr m ON ppm.member_ouid = m.ouid
            WHERE ppm.purchase_price_pref_ouid = $1 
            AND ppm.status_flag = 'Y'`;

        logWithDebug(`Executing SQL: ${customerPriceQuery} with params: [${purchasePricePrefOuid}]`);
        const customerPriceResult = await client.query(customerPriceQuery, [purchasePricePrefOuid]);
        logWithTimestamp(`Customer price strategy found: ${JSON.stringify(customerPriceResult.rows)}`);

        if (customerPriceResult.rows.length === 0) {
            logWithWarn(`No customer price strategy found for purchasePricePrefOuid: ${purchasePricePrefOuid}`);
            return res.status(404).json({ error: '找不到符合條件的進貨價格策略' });
        }

        logWithDebug(`Successfully retrieved customer price strategy for storeshop: ${storeshop_ouid}`);
        res.json(customerPriceResult.rows);
    } catch (error) {
        logWithError(`Database query error: ${error.message}`);
        logWithDebug(`Error stack: ${error.stack}`);
        res.status(500).json({ error: '資料庫查詢失敗' });
    }
});

module.exports = router;
