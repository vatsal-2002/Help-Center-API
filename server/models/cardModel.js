const connection = require('../config/db');

const Card = {
    getAll: (title, callback) => {
        let query = 'SELECT * FROM cards';
        let queryParams = [];

        if (title) {
            query += ' WHERE title LIKE ?';
            queryParams.push(`%${title}%`);
        }
        

        connection.query(query, queryParams, callback);
    },

    getByTitle: (title, callback) => {
        connection.query('SELECT * FROM cards WHERE title = ?', [title], callback);
    },

    create: (card, callback) => {
        const { id, title, description, link } = card;
        connection.query(
            'INSERT INTO cards (id, title, description, link) VALUES (?, ?, ?, ?)',
            [id, title, description, link],
            callback
        );
    }
};

module.exports = Card;
