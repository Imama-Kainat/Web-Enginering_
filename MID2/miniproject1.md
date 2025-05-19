# 🚀 **Complete Guide: Building a CRUD App with Express.js + MongoDB**
This guide will walk you through building a **simple CRUD (Create, Read, Update, Delete) API** using **Express.js, Node.js, and MongoDB** step by step.

---

## 🎯 **What You’ll Learn**
✅ How to **set up an Express.js server**  
✅ How to **connect MongoDB with Mongoose**  
✅ How to **create an API with CRUD operations**  
✅ How to **test API endpoints using Postman**  

---

# 📂 **Project Folder Structure**
```
MiniProjectMongoExpress/
│── models/                  # Mongoose schemas (MongoDB models)
│   └── Student.js           # Student Schema
│── routes/                  # Express routes (API endpoints)
│   └── studentRoutes.js     # CRUD routes for Student
│── config/                  # Database connection
│   └── db.js                # MongoDB connection setup
│── server.js                # Main Express server file
│── .env                     # Environment variables (PORT, MONGO_URI)
│── package.json             # Dependencies & scripts
```

---

# 🛠 **Step 1: Initialize the Project**
Open a terminal and run the following commands:
```sh
mkdir MiniProjectMongoExpress
cd MiniProjectMongoExpress
npm init -y
npm install express mongoose dotenv
```
✅ This will create a **Node.js project** and install necessary dependencies.

---

# 📦 **Step 2: Set Up Environment Variables**
Create a **`.env` file** in the root of your project:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/studentsDB
```
✅ This allows you to configure **MongoDB connection** and **server port**.

---

# 🔗 **Step 3: Connect MongoDB (`config/db.js`)**
Create a folder `config/` and inside it, create `db.js`:
```js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```
✅ This script connects to **MongoDB** and logs a success message.

---

# 📜 **Step 4: Create Student Model (`models/Student.js`)**
Create a folder `models/` and inside it, create `Student.js`:
```js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: { type: String, unique: true }
});

module.exports = mongoose.model('Student', studentSchema);
```
✅ This defines a **MongoDB collection (students)** with `name`, `age`, and `email` fields.

---

# 🛤 **Step 5: Create CRUD Routes (`routes/studentRoutes.js`)**
Create a folder `routes/` and inside it, create `studentRoutes.js`:
```js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// 📌 CREATE (POST /students)
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📌 READ ALL (GET /students)
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// 📌 READ ONE (GET /students/:id)
router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});

// 📌 UPDATE (PUT /students/:id)
router.put('/:id', async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedStudent);
});

// 📌 DELETE (DELETE /students/:id)
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
});

module.exports = router;
```
✅ This file defines **routes to handle CRUD operations**.

---

# 🚀 **Step 6: Set Up Express Server (`server.js`)**
Create `server.js` in the root folder:
```js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();
const app = express();
connectDB();

app.use(express.json()); // Middleware to parse JSON
app.use('/students', studentRoutes); // Mount student routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
```
✅ This file:
- **Loads environment variables**
- **Connects to MongoDB**
- **Initializes Express.js**
- **Mounts the `/students` API**
- **Starts the server on port `5000`**

---

# 🔥 **Step 7: Run the Project**
### 📌 1️⃣ Start MongoDB (If running locally)
```sh
mongod
```
Or if using MongoDB Atlas, **ensure `MONGO_URI` is correctly set** in `.env`.

### 📌 2️⃣ Run the Express Server
```sh
node server.js
```
Or use **nodemon** (auto-restarts on changes):
```sh
npx nodemon server.js
```

You should see:
```
✅ MongoDB Connected Successfully
🚀 Server running on http://localhost:5000
```

---

# 📡 **Step 8: Test the API with Postman**
You can test the API using **Postman** or **Thunder Client (VSCode extension).**

### 🟢 **1. Create a Student (POST)**
```
POST http://localhost:5000/students
Content-Type: application/json
{
  "name": "Ali",
  "age": 21,
  "email": "ali@example.com"
}
```

### 🔵 **2. Get All Students (GET)**
```
GET http://localhost:5000/students
```

### 🟡 **3. Update a Student (PUT)**
```
PUT http://localhost:5000/students/:id
Content-Type: application/json
{
  "age": 22
}
```

### 🔴 **4. Delete a Student (DELETE)**
```
DELETE http://localhost:5000/students/:id
```

✅ **Success Response Example**
```json
{
  "_id": "65a9d51d8d7e2a7b12345678",
  "name": "Ali",
  "age": 22,
  "email": "ali@example.com"
}
```

---

## 🧠 **Final Summary**
| Step | Task |
|------|------|
| 1️⃣ | Initialize Project (`npm init`) |
| 2️⃣ | Install Dependencies (`express, mongoose, dotenv`) |
| 3️⃣ | Set Up MongoDB Connection (`config/db.js`) |
| 4️⃣ | Create Student Model (`models/Student.js`) |
| 5️⃣ | Define CRUD Routes (`routes/studentRoutes.js`) |
| 6️⃣ | Create Express Server (`server.js`) |
| 7️⃣ | Start the Server (`node server.js`) |
| 8️⃣ | Test API Using Postman |

---

