const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const { 
    logWithTimestamp, 
    logWithWarn, 
    logWithError, 
    logWithDebug 
} = require('../utils/logger');

let isLoaded = false;

const loadEnvConfig = () => {
    if (isLoaded) {
        logWithDebug('Environment config already loaded, returning cached values');
        return {
            nodeEnv: process.env.NODE_ENV || 'test'
        };
    }

    const nodeEnv = process.env.NODE_ENV || 'test';
    const envFile = `.env.${nodeEnv}`;
    const envPath = path.resolve(process.cwd(), envFile);

    logWithDebug(`Attempting to load environment config from: ${envPath}`);

    try {
        if (!fs.existsSync(envPath)) {
            logWithError(`Environment configuration file ${envFile} not found`);
            process.exit(1);
        }

        logWithDebug(`Found environment file at: ${envPath}`);
        dotenv.config({ path: envFile });
        logWithTimestamp(`Successfully loaded environment configuration from ${envFile}`);
        
        isLoaded = true;
        logWithDebug('Environment configuration cache updated');

        return {
            nodeEnv,
            envFile,
            envPath
        };
    } catch (error) {
        logWithError(`Failed to load environment configuration: ${error.message}`);
        logWithDebug(`Error stack: ${error.stack}`);
        process.exit(1);
    }
};

module.exports = { loadEnvConfig };