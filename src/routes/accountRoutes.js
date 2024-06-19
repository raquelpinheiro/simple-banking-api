const express = require('express');
const accountController = require('../controllers/accountController');

const router = express.Router();

router.post('/reset', accountController.reset);
router.post('/event', accountController.addAccount);

module.exports = router;
