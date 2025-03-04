const { Pool } = require('pg');
const { 
    logWithTimestamp, 
    logWithWarn, 
    logWithError, 
    logWithDebug 
} = require('../utils/logger');
const { loadEnvConfig } = require('./env');

// Load environment config
const { nodeEnv } = loadEnvConfig();

// Store environment variables in local variables
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDatabase = process.env.DB_DATABASE;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = parseInt(process.env.DB_PORT, 10);

// Create pool configuration
const poolConfig = {
    user: dbUser,
    host: dbHost,
    database: dbDatabase,
    password: dbPassword,
    port: dbPort,
    // Additional options
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
    connectionTimeoutMillis: 2000, // How long to wait for a connection
};

// Create the connection pool
const pool = new Pool(poolConfig);

// Test database connection
const testConnection = async () => {
    try {
        logWithDebug(`Testing database connection with config: ${JSON.stringify({
            host: dbHost,
            port: dbPort,
            database: dbDatabase,
            user: dbUser
        })}`);
        
        logWithTimestamp(`Environment: ${nodeEnv}`);
        logWithDebug(`Attempting to connect to database: ${dbDatabase} at ${dbHost}:${dbPort}`);
        
        const client = await pool.connect();
        client.release();
        
        logWithTimestamp('Database connection successful');
        return true;
    } catch (error) {
        logWithError(`Database connection error: ${error.message}`);
        logWithDebug(`Connection error stack: ${error.stack}`);
        return false;
    }
};

// Event handlers for the pool
pool.on('error', (err, client) => {
    logWithError(`Unexpected error on idle client: ${err.message}`);
    logWithDebug(`Client error stack: ${err.stack}`);
});

pool.on('connect', () => {
    logWithDebug('New client connected to the pool');
});

pool.on('acquire', () => {
    logWithDebug('Client being acquired from pool');
});

pool.on('remove', () => {
    logWithWarn('Client removed from pool');
});

module.exports = {
    pool,
    testConnection
};