const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student_db"
});

db.connect(err => {
    if (err) console.error("Database connection failed:", err);
    else console.log("Connected to MySQL database.");
});

module.exports = db;
