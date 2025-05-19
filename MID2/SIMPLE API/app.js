const express = require('express');
const Joi = require('joi'); // Moved Joi import to the top
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const myfriend = [
    { id: 1, name: 'imama', mobile: 7878 } // Initial friend object
];

// Retrieve all friends
app.get('/api/friend', (req, res) => {
    res.json(myfriend);
});

// Retrieve a friend by ID
app.get('/api/friend/:id', (req, res) => {
    const id = req.params.id; // Correctly retrieve the ID from params
    const friend = myfriend.find(friend => friend.id == id); // Correct variable names
    if (!friend) {
        return res.status(404).json({ message: 'Friend not found' }); // Proper error handling
    }
    res.json(friend); // Correct response method
});

// Example of adding a friend (for demonstration purposes)
app.post('/api/friend', (req, res) => {
    const { error } = schema.validate(req.body); // Validate the request body
    if (error) {
        return res.status(400).send(error.details[0].message); // Return error message if validation fails
    }
    const { id, name, phone } = req.body; // Assuming body-parser middleware is used
    myfriend.push({ id, name, phone });
    res.status(201).json({ message: 'Friend added successfully' });
});

const schema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.number().pattern(/^[0-9]+$/).required()
});

app.delete('/api/friend/:id', (req, res) => {

    const paramId = parseInt(req.params.id); // Convert ID from URL to number
    const index = myfriend.findIndex((frnd) => frnd.id === paramId);

    if (index === -1) {
        return res.status(404).json({ error: '❌ Friend not found' });
    }

    // Update friend details, keeping old values if not provided
    myfriend[index] = { ...myfriend[index], ...req.body };

    return res.json({ message: '✅ Friend updated successfully', friend: myfriend[index] });
    myfriend.splice(index, 1); // Remove the friend from the array
    return res.json({ message: '✅ Friend deleted successfully' });
});

app.patch('/api/friend/:id', (req, res) => {
    const paramId = parseInt(req.params.id); // Convert ID from URL to number
    const index = myfriend.findIndex((frnd) => frnd.id === paramId);

    if (index === -1) {
        return res.status(404).json({ error: '❌ Friend not found' });
    }

    // Update friend details, keeping old values if not provided
    myfriend[index] = { ...myfriend[index], ...req.body };

    return res.json({ message: '✅ Friend updated successfully', friend: myfriend[index] });
});
//delete 
//delete all
//upddate fucntions done in 13/3/2025 class 