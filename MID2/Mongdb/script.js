const express = require('express');
const mongoose = require('mongoose');
//create , update ,delte ,greater than less than 
// email updated at the rate updated
//new : colon true ,used in mongos for it 
mongoose.connect('mongodb://localhost:27017/myfriends', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database is connected'))
.catch(err => console.log(err));

const friendProfileSchema = new mongoose.Schema({
    name: { type: String, required: true, min: 5, max: 20 },
    email: { type: String, unique: true, required: true },
});

const Friend = mongoose.model('friend', friendProfileSchema);

const friendContactHistorySchema = new mongoose.Schema({
    contactDate: { type: Date, default: Date.now },
    contactMessage: { type: String, required: true }
});

const ContactLog = mongoose.model('contactlog', friendContactHistorySchema);

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Create a new friend
app.post('/friends', async (req, res) => {
    const { name, email } = req.body;
    const friend = new Friend({ name, email });
    await friend.save();
    res.status(201).send(friend);
});

// Get all friends
app.get('/friends', async (req, res) => {
    const friends = await Friend.find();
    res.send(friends);
});

// Update a friend's information
app.put('/friends/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const friend = await Friend.findByIdAndUpdate(id, updatedData, { new: true });
    res.send(friend);
});

// Delete a friend
app.delete('/friends/:id', async (req, res) => {
    const { id } = req.params;
    await Friend.findByIdAndDelete(id);
    res.send({ message: 'Friend deleted' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// process list to mongso ke sath , valida te , try catch , postman , function pr return kre , operators , email update with single criteria , 2, name update jaha age 40 se above and email is app and name is esha .3. in ka operator use krna he or run krna he 
// mongo atlast se documenation read krni he or summary krni he
//in sepate router foler ,update ,insert , get wale all roter .
