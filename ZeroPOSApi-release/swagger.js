const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { loadEnvConfig } = require('./config/env');

// Load environment config 
const { nodeEnv } = loadEnvConfig();
const API_URL = process.env.API_URL || `http://localhost:${process.env.PORT || 3000}`;

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Recycling Website API',
            version: '1.0.0',
            description: 'API documentation for the Recycling Website',
        },
        servers: [
            {
                url: API_URL,
                description: `Server running in ${nodeEnv} environment`
            },
        ],
        tags: [
            {
                name: '系統',
                description: '系統相關 API'
            },
            {
                name: '進貨',
                description: '進貨相關 API'
            },
            {
                name: '會員',
                description: '會員相關 API' 
            },
            {
                name: '場區',
                description: '場區相關 API'
            },
            {
                name: '會計',
                description: '會計相關 API'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
