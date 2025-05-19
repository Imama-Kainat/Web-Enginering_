const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/mysql');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use(itemRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send('API is working!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
