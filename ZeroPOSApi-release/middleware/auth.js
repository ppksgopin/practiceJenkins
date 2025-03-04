const { loadEnvConfig } = require('../config/env');
const { nodeEnv } = loadEnvConfig();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { 
    logWithTimestamp, 
    logWithWarn, 
    logWithError, 
    logWithDebug 
} = require('../utils/logger');

const SECRET_KEY = process.env.SECRET_KEY;

/**
 * Middleware to verify JWT token
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    logWithDebug(`Received authorization header: ${authHeader ? 'present' : 'missing'}`);

    if (!authHeader) {
        logWithWarn('No token provided in authorization header');
        return res.status(403).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1]; // Remove 'Bearer' prefix
    logWithDebug('Attempting to extract token from authorization header');

    if (!token) {
        logWithWarn('Token format is invalid (missing Bearer token)');
        return res.status(403).json({ error: 'Token format is invalid' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            logWithError(`Token verification failed: ${err.message}`);
            return res.status(401).json({ error: 'Failed to authenticate token' });
        }

        logWithDebug(`Token verified successfully for user: ${decoded.username}`);
        logWithTimestamp(`User ${decoded.username} authenticated successfully`);
        req.user = decoded;
        next();
    });
};

module.exports = {
    verifyToken
};
