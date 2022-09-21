const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/admin");

router.get('/products',productsController.getProducts)

router.get('/add-product',productsController.getAddProduct)

router.post('/add-product',productsController.postAddProduct);

router.get('/edit-product:productid',productsController.getEditProduct)

router.post('/edit-product',productsController.postEditProduct);



module.exports = router;