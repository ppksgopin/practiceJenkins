const express = require('express');
const router = express.Router();
const { generateToken } = require('../utils/jwt');
const { 
    logWithTimestamp, 
    logWithWarn, 
    logWithError, 
    logWithDebug 
} = require('../utils/logger');

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [系統]
 *     summary: 使用者登入
 *     description: 產生使用者的 JWT token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: JWT token generated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    logWithDebug(`Login attempt for username: ${username}`);

    if (!username || !password) {
        logWithWarn('Login attempt with missing credentials');
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Dummy user validation (replace with real validation logic)
    if (username === 'test' && password === 'test') {
        logWithDebug('User credentials validated successfully');
        const token = generateToken({ username });
        logWithTimestamp(`Login successful for user: ${username}`);
        return res.json({ token });
    }

    logWithWarn(`Failed login attempt for user: ${username}`);
    res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;
