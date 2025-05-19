const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// 📌 Add Product
app.post("/api/products", (req, res) => {
    const { name, category, price } = req.body;
    if (!name || !category || !price) {
        return res.status(400).json({ error: "All fields are required" });
    }
    db.query("INSERT INTO products (name, category, price) VALUES (?, ?, ?)", [name, category, price], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.status(201).json({ message: "Product added successfully", productId: result.insertId });
    });
});

// 📌 Get All Products
app.get("/api/products", (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(results);
    });
});

// 📌 Update Product
app.put("/api/products/:id", (req, res) => {
    const { name, category, price } = req.body;
    const { id } = req.params;
    db.query("UPDATE products SET name=?, category=?, price=? WHERE id=?", [name, category, price, id], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json({ message: "Product updated successfully" });
    });
});

// 📌 Delete Product
app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM products WHERE id=?", [id], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json({ message: "Product deleted successfully" });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
