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
 * /api/storeshop:
 *   post:
 *     tags: [場區]
 *     summary: 查詢場區資訊
 *     description: 使用 POST 方法，透過 ouid 查詢場區資訊
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ouid:
 *                 type: string
 *     responses:
 *       200:
 *         description: Store location information
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
 *         description: No store location found
 */
router.post('/', withDatabase, async (req, res) => {
    const { ouid } = req.body;
    const client = req.dbClient;

    if (!ouid) {
        logWithWarn('Request received without ouid');
        return res.status(400).json({ error: 'OUID is required' });
    }

    try {
        const query = `
            SELECT 
                ouid,
                ratepo_id,
                storeshop_id,
                name 
            FROM storeshop 
            WHERE ouid = $1 
            AND status_flag = 'Y'`;

        logWithDebug(`Executing SQL: ${query} with params: [${ouid}]`);
        const { rows } = await client.query(query, [ouid]);
        logWithTimestamp(`Query Result: ${JSON.stringify(rows)}`);

        if (rows.length === 0) {
            logWithWarn(`No store found for ouid: ${ouid}`);
            return res.status(404).json({ error: '找不到符合條件的站區' });
        }

        logWithDebug(`Successfully retrieved store details for ouid: ${ouid}`);
        res.json(rows);
    } catch (error) {
        logWithError(`Database query error: ${error.message}`);
        logWithDebug(`Error stack: ${error.stack}`);
        res.status(500).json({ error: '資料庫查詢失敗' });
    }
});

module.exports = router;
