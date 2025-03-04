require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { 
    getCurrentTimeWithOffset, 
    stream,
    logWithTimestamp,
    logWithWarn,
    logWithError, 
    logWithDebug
} = require('./utils/logger');
const { verifyToken } = require('./middleware/auth');
const metricsMiddleware = require('./middleware/metricsMiddleware');
const metricsRouter = require('./routes/metrics');

// Import routes
const authRouter = require('./routes/auth');
const membersRouter = require('./routes/members');
const materialsRouter = require('./routes/materials');
const transactionsRouter = require('./routes/transactions');
const storeshopRouter = require('./routes/storeshop');
const companyUserAuthRouter = require('./routes/companyUserAuth');
const posUserAuthRouter = require('./routes/posUserAuth');
const storeshopZCoinConfigRouter = require('./routes/storeshopZCoinConfig');
const storeshopPurchasePriceDetailsRouter = require('./routes/storeshopPurchasePriceDetails');
const storeshopPurchasePriceCustomerRouter = require('./routes/storeshopPurchasePriceCustomer');
const storeshopReceiveTypeRouter = require('./routes/storeshopReceiveType');
const accountTitlesRouter = require('./routes/accountTitles');

// Import Swagger setup
const setupSwagger = require('./swagger');

const app = express();
const port = process.env.PORT || 3000;

// CORS Configuration
const allowedOrigins = [
    'http://localhost:3333',
    process.env.API_URL // From environment
].filter(Boolean); // Remove falsy values

logWithDebug(`Configured CORS allowed origins: ${JSON.stringify(allowedOrigins)}`);

const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) {
            logWithDebug('Request without origin accepted');
            return callback(null, true);
        }
        
        if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'test') {
            logWithDebug(`Origin ${origin} allowed by CORS`);
            callback(null, true);
        } else {
            logWithWarn(`CORS blocked origin: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'Accept',
        'Origin'
    ],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    credentials: true,
    maxAge: 86400,
    preflightContinue: false,
    optionsSuccessStatus: 204
};

// Custom Morgan token for timestamp with timezone offset
morgan.token('timestamp', () => {
    return getCurrentTimeWithOffset();
});

// Middleware
logWithDebug('Configuring middleware...');
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable pre-flight for all routes
app.use(morgan('[:timestamp] :method :url :status :res[content-length] - :response-time ms', { stream }));

// Security headers
app.use((req, res, next) => {
    logWithDebug('Adding security headers');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// Setup Swagger without token verification
setupSwagger(app);

// Add metrics middleware and route (no auth required)
app.use(metricsMiddleware);
app.use('/metrics', metricsRouter);

// Authentication route
app.use('/api/auth', authRouter);

// Apply JWT verification middleware to all routes except /api-docs, /api/auth and /metrics
app.use(verifyToken);

// Routes
logWithDebug('Setting up routes...');
app.use('/api/members', membersRouter);
app.use('/api/materials', materialsRouter);
app.use('/api/transactions', transactionsRouter);
app.use('/api/storeshop', storeshopRouter);
app.use('/api/companyUserAuth', companyUserAuthRouter);
app.use('/api/posUserAuth', posUserAuthRouter);
app.use('/api/storeshopZCoinConfig', storeshopZCoinConfigRouter);
app.use('/api/storeshopPurchasePriceDetails', storeshopPurchasePriceDetailsRouter);
app.use('/api/storeshopPurchasePriceCustomer', storeshopPurchasePriceCustomerRouter);
app.use('/api/storeshopReceiveType', storeshopReceiveTypeRouter);
app.use('/api/account-titles', accountTitlesRouter);

// Error handling for CORS
app.use((err, req, res, next) => {
    if (err.message === 'Not allowed by CORS') {
        logWithWarn(`CORS error for origin: ${req.headers.origin}`);
        res.status(403).json({
            error: 'CORS not allowed for this origin'
        });
    } else {
        logWithError(`Unhandled error: ${err.message}`);
        next(err);
    }
});

// Start server
app.listen(port, () => {
    const baseUrl = process.env.API_URL || `http://localhost:${port}`;
    logWithTimestamp(`Server running at ${baseUrl}`);
    logWithDebug(`Environment: ${process.env.NODE_ENV}`);
    logWithTimestamp(`Swagger docs available at ${baseUrl}/api-docs`);
});
