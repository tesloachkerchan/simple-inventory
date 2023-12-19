const express = require('express');
const router = express.Router();
const add_product = require('../controller/add_product');

// add product
router.post('/', add_product);

// Your other routes and code
module.exports = router;

