const express = require("express");
const errorMiddleware = require("./middleware/error");
const app = express();

app.use(express.json());

// Router import
const productRouter = require("./routers/productRouter");
app.use("/api", productRouter);

// Middlerware for Errors
app.use(errorMiddleware);

module.exports = app;
