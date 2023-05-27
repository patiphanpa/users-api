const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
require('dotenv').config();

app.use(cors());

const db = mysql.createConnection(process.env.DATABASE_URL);

app.get('/', (req, res) => {
    console.log("Hello");
    res.send("Hello");
});

app.get('/users', (req, res) => {
    db.query(
        'SELECT * FROM users',
        function(err, results, fields) {
            res.send(results);
        }
    );
});

app.listen(process.env.PORT || 3000);