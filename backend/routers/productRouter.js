const express = require("express");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter
  .post("/product/new", createProduct)
  .get("/products", getProducts)
  .post("/product/update/:id", updateProduct)
  .post("/product/delete/:id", deleteProduct)
  .get("/product/details/:id", getProductDetails);

module.exports = productRouter;
