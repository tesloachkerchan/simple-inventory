const express = require('express');
const router = express.Router();
const registration = require('../controller/registration')

// add product
router.post('/', registration);

// Your other routes and code
module.exports = router;