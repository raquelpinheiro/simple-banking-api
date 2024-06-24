const express = require('express');
const resetController = require('../controllers/resetController');

const router = express.Router();

router.post('/reset', resetController.reset);

module.exports = router;
