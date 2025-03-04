const { generateToken } = require('../utils/jwt');
const jwt = require('jsonwebtoken');
const { loadEnvConfig } = require('../config/env');

const SECRET_KEY = 'test_secret_key'; // Ensure this matches the key used in utils/jwt.js

// Test payload
const payload = { username: 'testuser' };

// Generate token
const token = generateToken(payload);
console.log('Generated Token:', token);

// Verify token
jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
        console.error('Token verification failed:', err);
    } else {
        console.log('Token is valid. Decoded payload:', decoded);
    }
});

const { nodeEnv } = loadEnvConfig();
