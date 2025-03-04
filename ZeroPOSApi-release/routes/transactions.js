const express = require('express');
const router = express.Router();
const { validateWeight, calculateAmount } = require('../utils/calculations');

// Sample data for storing transactions
const transactions = [];

// Sample data for members (temporary, should be moved to a shared data layer)
const members = [
    { id: 1, name: '林玉', recyclingRecords: ['報紙', '小清'] },
    { id: 2, name: '王大明', recyclingRecords: ['塑膠瓶', '鋁罐'] }
];

// Sample data for materials (temporary, should be moved to a shared data layer)
const materials = [
    { name: '報紙', price: 3 },
    { name: '小清', price: 1 },
    { name: '塑膠瓶', price: 2 },
    { name: '鋁罐', price: 4 }
];

/**
 * @swagger
 * /api/transactions/calculate:
 *   post:
 *     summary: Calculate total amount for recyclable materials
 *     description: Calculate the total amount based on the weight and price of recyclable materials.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     materialName:
 *                       type: string
 *                     weight:
 *                       type: number
 *     responses:
 *       200:
 *         description: Calculation result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       materialName:
 *                         type: string
 *                       weight:
 *                         type: number
 *                       price:
 *                         type: number
 *                       amount:
 *                         type: number
 *                 totalAmount:
 *                   type: number
 *                 timestamp:
 *                   type: string
 *       400:
 *         description: Invalid request format
 *       401:
 *         description: Unauthorized
 */
router.post('/calculate', (req, res) => {
    const { items } = req.body;

    // Enhanced input validation
    if (!items) {
        return res.status(400).json({ 
            error: '請求中缺少物料項目',
            timestamp: new Date().toISOString()
        });
    }
    
    if (!Array.isArray(items)) {
        return res.status(400).json({ 
            error: '物料項目必須為陣列格式',
            timestamp: new Date().toISOString()
        });
    }

    if (items.length === 0) {
        return res.status(400).json({ 
            error: '物料項目不能為空',
            timestamp: new Date().toISOString()
        });
    }

    try {
        // Process items in bulk for better performance
        const calculatedItems = items.map(item => {
            // Validate required fields
            if (!item.materialName) {
                throw new Error('物料名稱為必填項目');
            }
            if (!item.weight) {
                throw new Error('物料重量為必填項目');
            }

            // Find material and validate
            const material = materials.find(m => m.name === item.materialName);
            if (!material) {
                throw new Error(`找不到物料：${item.materialName}`);
            }

            // Validate and process weight
            const weight = validateWeight(item.weight, item.materialName);

            // Calculate amount
            const amount = calculateAmount(material.price, weight);

            return {
                materialName: item.materialName,
                weight: weight,
                price: material.price,
                amount: amount
            };
        });

        // Calculate total amount with precision
        const totalAmount = Math.round(
            calculatedItems.reduce((sum, item) => sum + item.amount, 0) * 100
        ) / 100;

        res.json({
            items: calculatedItems,
            totalAmount: totalAmount,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

/**
 * @swagger
 * /api/transactions/checkout:
 *   post:
 *     summary: Process checkout for recyclable materials
 *     description: Process the checkout and store the transaction record.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberId:
 *                 type: integer
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     materialName:
 *                       type: string
 *                     weight:
 *                       type: number
 *                     price:
 *                       type: number
 *                     amount:
 *                       type: number
 *               totalAmount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Checkout successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 transactionId:
 *                   type: integer
 *                 transaction:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     memberId:
 *                       type: integer
 *                     memberName:
 *                       type: string
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           materialName:
 *                             type: string
 *                           weight:
 *                             type: number
 *                           price:
 *                             type: number
 *                           amount:
 *                             type: number
 *                     totalAmount:
 *                       type: number
 *                     timestamp:
 *                       type: string
 *       400:
 *         description: Invalid request format
 *       401:
 *         description: Unauthorized
 */
router.post('/checkout', (req, res) => {
    const { memberId, items, totalAmount } = req.body;

    if (!memberId || !items || !Array.isArray(items) || !totalAmount) {
        return res.status(400).json({ error: '無效的請求格式' });
    }

    try {
        const member = members.find(m => m.id === parseInt(memberId));
        if (!member) {
            throw new Error('找不到會員');
        }

        const transaction = {
            id: transactions.length + 1,
            memberId,
            memberName: member.name,
            items,
            totalAmount,
            timestamp: new Date().toISOString()
        };

        transactions.push(transaction);

        res.json({
            message: '結帳成功',
            transactionId: transaction.id,
            transaction
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
