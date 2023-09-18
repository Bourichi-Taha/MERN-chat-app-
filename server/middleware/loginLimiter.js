const rateLimit = require('express-rate-limit');
const {logEvents} = require('./logger');

const loginLimiter = rateLimit({
    windowMs: 60*1000, //1 minute
    max: 5, //limit each IP to 5 requests per window per minute
    message: {
        message: 'Too many login attempts from this IP, please try again after a 60 second pause'
    },
    handler: (req,res,next,options) => {
        logEvents(`Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,'loginErrLog.log');
        res.status(options.statusCode).send(options.message);
    },
    standardHeaders: true, //return rate limitinfo in the `RateLimit-*` headers
    legacyHeaders: false, // disable the `X-ratelimit-*` headers
});

module.exports = loginLimiter;