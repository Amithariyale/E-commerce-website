const catchAsyncError = require("../middleware/catchAsyncError");
const ProductModel = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

// Create Product --> Admin
const createProduct = catchAsyncError(async (req, res) => {
  const product = await ProductModel.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});
// Get All Products
const getProducts = catchAsyncError(async (req, res) => {
  const apiFeatures = new ApiFeatures(ProductModel.find(), req.query);
  const products = await ProductModel.find();
  res.status(200).json({
    success: true,
    products,
  });
});
// Get Product Details
const getProductDetails = catchAsyncError(async (req, res, next) => {
  console.log(req.params.id);
  const product = await ProductModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).send({
    success: true,
    product,
  });
});
// Update Product --> Admin
const updateProduct = catchAsyncError(async (req, res, next) => {
  console.log(req.params.id);
  let product = await ProductModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useValidators: true,
    useFindAndModify: false,
  });
  console.log(product);
  res.status(200).send({
    success: true,
    product,
  });
});

// Delete Product -->Admin

const deleteProduct = catchAsyncError(async (req, res, next) => {
  let product = await ProductModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  product = await ProductModel.findByIdAndDelete(req.params.id);

  res.status(200).send({
    success: true,
    product,
  });
});
module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
};
