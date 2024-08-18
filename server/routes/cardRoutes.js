const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// Route to get all cards or filter by title
router.get('/cards', cardController.getAllCards);

// Route to get a card by exact title
router.get('/cards/:title', cardController.getCardByTitle);

router.post('/cards', cardController.createCard);

module.exports = router;
