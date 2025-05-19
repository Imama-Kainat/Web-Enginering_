const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Change if needed
    password: '',      // Your MySQL password
    database: 'inventory_db',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log(' Connected to MySQL Database');
    }
});

module.exports = db;
