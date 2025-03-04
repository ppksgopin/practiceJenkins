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
 * /api/companyUserAuth:
 *   post:
 *     tags: [系統]
 *     summary: 取得後台使用者的場區授權
 *     description: 使用 POST 方法，透過 user_id 取得後台使用者的場區授權
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Authorized store locations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ouid:
 *                     type: string
 *                   ratepo_id:
 *                     type: string
 *                   storeshop_id:
 *                     type: string
 *                   name:
 *                     type: string
 *       400:
 *         description: Invalid request format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: No authorized store locations found
 */
router.post('/', withDatabase, async (req, res) => {
    const { user_id } = req.body;
    const client = req.dbClient;

    if (!user_id) {
        logWithWarn('Request received without user_id');
        return res.status(400).json({ error: 'User ID is required' });
    }

    try {
        // Step 1: Find company_user_ouid using user_id
        const userQuery = `
            SELECT ouid 
            FROM company_user 
            WHERE user_id = $1`;
        
        logWithDebug(`Executing SQL: ${userQuery} with params: [${user_id}]`);
        const userResult = await client.query(userQuery, [user_id]);
        logWithDebug(`Query Result: ${JSON.stringify(userResult.rows)}`);
        
        if (userResult.rows.length === 0) {
            logWithWarn(`No user found for user_id: ${user_id}`);
            return res.status(404).json({ error: '找不到符合條件的用戶' });
        }
        const companyUserOuid = userResult.rows[0].ouid;

        // Step 2: Find storeshop_ouid using company_user_ouid
        const authQuery = `
            SELECT storeshop_ouid 
            FROM storeshop_company_user_auth 
            WHERE company_user_ouid = $1 
            AND status_flag = 'Y'`;
        
        logWithDebug(`Executing SQL: ${authQuery} with params: [${companyUserOuid}]`);
        const authResult = await client.query(authQuery, [companyUserOuid]);
        logWithDebug(`Query Result: ${JSON.stringify(authResult.rows)}`);
        
        if (authResult.rows.length === 0) {
            logWithWarn(`No auth found for companyUserOuid: ${companyUserOuid}`);
            return res.status(404).json({ error: '找不到授權的站區' });
        }
        const storeshopOuids = authResult.rows.map(row => row.storeshop_ouid);

        // Step 3: Find store details using storeshop_ouid
        const storeQuery = `
            SELECT 
                ouid,
                ratepo_id,
                storeshop_id,
                name 
            FROM storeshop 
            WHERE ouid = ANY($1) 
            AND status_flag = 'Y'`;

        logWithDebug(`Executing SQL: ${storeQuery} with params: ${JSON.stringify(storeshopOuids)}`);
        const storeResult = await client.query(storeQuery, [storeshopOuids]);
        logWithTimestamp(`Store details found: ${JSON.stringify(storeResult.rows)}`);
        
        if (storeResult.rows.length === 0) {
            logWithWarn(`No active stores found for storeshopOuids: ${JSON.stringify(storeshopOuids)}`);
            return res.status(404).json({ error: '找不到符合條件的站區' });
        }

        logWithDebug(`Successfully retrieved store details for user: ${user_id}`);
        res.json(storeResult.rows);
    } catch (error) {
        logWithError(`Database query error: ${error.message}`);
        logWithDebug(`Error stack: ${error.stack}`);
        res.status(500).json({ error: '資料庫查詢失敗' });
    }
});

module.exports = router;
