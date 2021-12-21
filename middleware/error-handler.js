// const { Statuscodes } = require('http-status-codes')
const ErrorHandler = require('../utils/errorhandler')

const errorHandlerMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    //Mongoose duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
            // err = new ErrorHandler(message, 400);
        return res.status(400).json({ msg: message })
    }
    return res.status(500).json(err)
}


module.exports = errorHandlerMiddleware