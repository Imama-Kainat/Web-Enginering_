const express = require('express');
const db = require('../config/mysql');
const router = express.Router();

// ✅ 1. Insert an Item
router.post('/api/items', (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const sql = 'INSERT INTO items (name, description, price) VALUES (?, ?, ?)';
    db.query(sql, [name, description, price], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Item inserted successfully!', id: result.insertId });
    });
});

// ✅ 2. Fetch an Item by ID
router.get('/api/items/:id', (req, res) => {
    const sql = 'SELECT * FROM items WHERE id = ?';
    db.query(sql, [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Item not found" });
        res.json(results[0]);
    });
});

// ✅ 3. Fetch All Items
router.get('/api/items', (req, res) => {
    const sql = 'SELECT * FROM items';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// ✅ 4. Update an Item
router.put('/api/items/:id', (req, res) => {
    const { name, description, price } = req.body;
    const sql = 'UPDATE items SET name = ?, description = ?, price = ? WHERE id = ?';
    
    db.query(sql, [name, description, price, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: "Item not found" });
        res.json({ message: 'Item updated successfully!' });
    });
});

// ✅ 5. Delete an Item
router.delete('/api/items/:id', (req, res) => {
    const sql = 'DELETE FROM items WHERE id = ?';
    
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: "Item not found" });
        res.json({ message: 'Item deleted successfully!' });
    });
});

module.exports = router;
