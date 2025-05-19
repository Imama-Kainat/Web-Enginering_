// seed.js
const mongoose = require('mongoose');
const Job = require('./models/Job');

mongoose.connect('mongodb://localhost:27017/job-portal')
  .then(async () => {
    await Job.deleteMany(); // Optional: clears existing jobs
    await Job.insertMany([
      { title: "Frontend Developer", description: "Build modern UIs with React and Bootstrap." },
      { title: "Backend Developer", description: "Develop REST APIs using Node.js and MongoDB." }
    ]);
    console.log("✅ Sample jobs added!");
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
