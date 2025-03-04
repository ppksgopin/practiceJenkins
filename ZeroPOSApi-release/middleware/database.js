// middlewares/database.js
const { pool } = require('../config/database');
const { logWithTimestamp } = require('../utils/logger');

const withDatabase = async (req, res, next) => {
    const client = await pool.connect();
    req.dbClient = client;
    
    // Add cleanup on response finish
    res.on('finish', () => {
        if (req.dbClient) {
            req.dbClient.release();
        }
    });

    next();
};

module.exports = { withDatabase };