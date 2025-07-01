const express = require('express');
const router = express.Router();
const { getWallet, recharge } = require('../controllers/walletController');

router.get('/:userId', getWallet);
router.post('/recharge', recharge);

module.exports = router;
