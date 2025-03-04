const express = require('express');
const router = express.Router();

// Sample data for recyclable materials
const materials = [
    { name: '報紙', price: 3 },
    { name: '小清', price: 1 },
    { name: '塑膠瓶', price: 2 },
    { name: '鋁罐', price: 4 }
];

/**
 * @swagger
 * /api/materials:
 *   get:
 *     summary: Retrieve a list of recyclable materials
 *     description: Retrieve a list of recyclable materials and their prices.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of recyclable materials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 *       401:
 *         description: Unauthorized
 */
router.get('/', (req, res) => {
    res.json(materials);
});

module.exports = router;
