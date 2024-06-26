const express = require('express');
const accountController = require('../controllers/accountController');
const resetController = require('../controllers/resetController');

const router = express.Router();

router.post('/event', accountController.eventsToAccount);
router.get('/balance', accountController.findAccount);

router.post('/reset', resetController.reset);

module.exports = router;
