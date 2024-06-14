const express = require('express');
const accountController = require('../controllers/accountController');

const router = express.Router();

router.post('/reset', accountController.reset);

module.exports = router;
