const express = require('express');
const router = express.Router();
const { getGames, joinGame } = require('../controllers/gameController');

router.get('/', getGames);
router.post('/join', joinGame);

module.exports = router;
