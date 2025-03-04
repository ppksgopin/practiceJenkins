const { loadEnvConfig } = require('../config/env');
const { nodeEnv } = loadEnvConfig();

const { testConnection } = require('../config/database');

// 執行測試連線
testConnection()
    .then(success => {
        if (success) {
            console.log('Database connection test completed successfully');
        } else {
            console.log('Database connection test failed');
        }
        process.exit(0);
    })
    .catch(err => {
        console.error('Error during connection test:', err);
        process.exit(1);
    });
