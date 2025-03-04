const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const path = require('path');

// Create a logger instance
const logger = createLogger({
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message.replace(/^\[.*?\] /, '')}`) // Remove duplicate timestamp
    ),
    transports: [
        new DailyRotateFile({
            filename: path.join(__dirname, '../logs/%DATE%.log'),
            datePattern: 'YYYY-MM-DD',
            maxSize: '20m',
            maxFiles: '30d',
            level: 'debug' // Changed to debug to capture all levels
        }),
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message.replace(/^\[.*?\] /, '')}`) // Remove duplicate timestamp
            )
        })
    ]
});

// Function to log messages with timestamp for different levels
const logWithTimestamp = (message) => {
    logger.info(message);
};

const logWithWarn = (message) => {
    logger.warn(message);
};

const logWithError = (message) => {
    logger.error(message);
};

const logWithDebug = (message) => {
    logger.debug(message);
};

// Function to get current time with +8 hour offset
const getCurrentTimeWithOffset = () => {
    const now = new Date();
    const offsetTime = new Date(now.getTime() + 8 * 60 * 60 * 1000); // Add 8 hours
    return offsetTime.toISOString().replace('T', ' ').substring(0, 19); // Format as 'YYYY-MM-DD HH:MM:SS'
};

// Stream for Morgan to use Winston for logging
const stream = {
    write: (message) => {
        logger.info(message.trim());
    }
};

module.exports = {
    logWithTimestamp,
    logWithWarn,
    logWithError,
    logWithDebug,
    getCurrentTimeWithOffset,
    stream
};
