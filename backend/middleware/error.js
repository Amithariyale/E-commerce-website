const ErrorHandler = require("../utils/errorHandler");

const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal Server error";

  // console.log("hii", err);
  if (err.name === "CasrError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).send({
    success: false,
    error: err.message,
  });
};

module.exports = errorMiddleware;
