const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 Connect to MySQL Database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",    // Change if you have a different username
    password: "",    // Change if you set a password
    database: "student_db"  // Ensure this matches your database name
});

// 🔹 Check MySQL Connection
db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err);
        process.exit(1);
    }
    console.log("✅ Connected to MySQL database.");
});

// 🟢 Check if Email Exists
app.get("/api/check-email", (req, res) => {
    const email = req.query.email;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const sql = "SELECT * FROM students WHERE email = ?";
    db.query(sql, [email], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json({ exists: result.length > 0 });
    });
});

// 🟢 Register New Student
app.post("/api/register", (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "INSERT INTO students (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            console.error("❌ Insert Error:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(201).json({ message: "✅ Registration successful", studentId: result.insertId });
    });
});

// 🟢 Login API
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Both fields are required" });
    }

    const sql = "SELECT * FROM students WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });

        if (result.length > 0) {
            res.json({ success: true, message: "✅ Login successful" });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    });
});

// 🔹 Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
