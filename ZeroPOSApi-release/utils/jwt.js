const { loadEnvConfig } = require('../config/env');
const { nodeEnv } = loadEnvConfig();

require('dotenv').config();
const jwt = require('jsonwebtoken');
const { 
    logWithTimestamp, 
    logWithWarn, 
    logWithError, 
    logWithDebug 
} = require('./logger');

const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (payload) => {
    logWithDebug(`Generating token for payload: ${JSON.stringify(payload)}`);
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '30s' });
    logWithTimestamp('Token generated successfully');
    return token;
};

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    logWithDebug(`Processing authorization header: ${authHeader ? 'present' : 'missing'}`);

    if (!authHeader) {
        logWithWarn('No token provided in authorization header');
        return res.status(403).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    logWithDebug('Extracting token from Bearer header');

    if (!token) {
        logWithWarn('Token format is invalid (missing Bearer token)');
        return res.status(403).json({ error: 'Token format is invalid' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            logWithError(`Token verification failed: ${err.message}`);
            logWithDebug(`Verification error details: ${err.stack}`);
            return res.status(401).json({ error: 'Failed to authenticate token' });
        }

        logWithDebug(`Token verification successful for user: ${decoded.username}`);
        logWithTimestamp(`User ${decoded.username} authenticated successfully`);
        req.user = decoded;
        next();
    });
};

module.exports = {
    generateToken,
    verifyToken
};
