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
 * /api/members:
 *   post:
 *     tags: [會員]
 *     summary: 查詢會員列表
 *     description: 使用 POST 方法，透過 ouid、會員編號或姓名查詢會員列表。
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
 *               member_no:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: A list of members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ouid:
 *                     type: string
 *                   member_id:
 *                     type: string
 *                   member_no:
 *                     type: string
 *                   mobile:
 *                     type: string
 *                   tel:
 *                     type: string
 *                   name:
 *                     type: string
 *       400:
 *         description: Invalid request format
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: No members found
 */
router.post('/', withDatabase, async (req, res) => {
    const { ouid, member_no, name } = req.body;
    const client = req.dbClient;

    logWithDebug(`Processing member search request with params: ${JSON.stringify({ ouid, member_no, name })}`);

    let query = `
        SELECT 
            ouid,
            member_id,
            member_no,
            mobile,
            tel,
            name 
        FROM membr 
        WHERE status_flag = 'Y'`;

    const params = [];
    let paramIndex = 1;

    if (ouid) {
        query += ` AND ouid = $${paramIndex++}`;
        params.push(ouid);
    }

    if (member_no) {
        query += ` AND member_no = $${paramIndex++}`;
        params.push(member_no);
    }

    if (name) {
        query += ` AND name ILIKE $${paramIndex++}`;
        params.push(`%${name}%`);
    }

    if (params.length === 0) {
        logWithWarn('Search attempt without any search criteria');
    }

    try {
        logWithDebug(`Executing SQL: ${query} with params: ${JSON.stringify(params)}`);
        const { rows } = await client.query(query, params);
        logWithTimestamp(`Query Result: ${JSON.stringify(rows)}`);

        if (rows.length === 0) {
            logWithWarn(`No members found for search criteria: ${JSON.stringify({ ouid, member_no, name })}`);
            return res.status(404).json({ error: '找不到符合條件的會員' });
        }

        logWithDebug(`Successfully retrieved ${rows.length} members`);
        res.json(rows);
    } catch (error) {
        logWithError(`Database query error: ${error.message}`);
        logWithDebug(`Error stack: ${error.stack}`);
        res.status(500).json({ error: '資料庫查詢失敗' });
    }
});

module.exports = router;
