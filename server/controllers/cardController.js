const Card = require('../models/cardModel');
const generateId = require('../utils/generateId');

exports.getAllCards = (req, res) => {
    const { title } = req.query; // Retrieve the title from query parameters

    Card.getAll(title, (err, results) => {
        if (err) return res.status(500).json({ error: 'Failed to retrieve cards' });
        res.json(results);
    });
};

exports.getCardByTitle = (req, res) => {
    const { title } = req.params;
    Card.getByTitle(title, (err, results) => {
        if (err) return res.status(500).json({ error: 'Failed to retrieve card' });
        if (results.length === 0) return res.status(404).json({ error: 'Card not found' });
        res.json(results[0]);
    });
};

exports.createCard = (req, res) => {
    const { title, description, link } = req.body;
    const newCard = {
        id: generateId(),
        title,
        description,
        link
    };

    Card.create(newCard, (err) => {
        if (err) return res.status(500).json({ error: 'Failed to create card' });
        res.status(201).json(newCard);
    });
};
