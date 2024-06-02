const express = require('express');
const { addProduct, ProductList } = require('../controlers/product');
const router = express.Router();


router.post('/addProduct',addProduct)
router.get('/productList',ProductList)

module.exports = router