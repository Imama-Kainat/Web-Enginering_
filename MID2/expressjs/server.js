// // const express = require("express");
// // const path = require("path");
// // const bodyParser = require("body-parser"); 

// // const app = express();

// // // Middleware to parse JSON and URL-encoded data
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());

// // // Serve the HTML file
// // app.get("/", (req, res) => {
// //     res.sendFile(path.join(__dirname, "index.html"));
// // });

// // About route
// app.get("/about", (req, res) => {
//     res.json({ name: "imama" });
// });

// // // Login route (Handles POST request from form)
// // app.post("/login", (req, res) => {
// //     console.log("Request Body:", req.body);
// //     res.send(`Welcome, ${req.body.username}!`);
// // });

// // // Start the server
// // app.listen(3000, () => {
// //     console.log(`Server running at http://localhost:3000`);
// // });

// // app.use((req,res,next)=>{
// //  console.log("i am middelware ");
// //  next();
// // })

// application.use((req,res,next))=>{
   
   
//     console.log(ref.method)
//     console.log(ref.protocol)
//     console.log(ref.get("host"))
//     console.log(req.orginaluse())
//     next();
// })

// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser"); 

// const app = express();

// // Middleware to parse JSON and URL-encoded data
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Serve the HTML file
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// // About route
// app.get("/about", (req, res) => {
//     res.json({ name: "imama" });
// });

// // Login route (Handles POST request from form)
// app.post("/login", (req, res) => {
//     console.log("Request Body:", req.body);
//     res.send(`Welcome, ${req.body.username}!`);
// });

// // Start the server
// app.listen(3000, () => {
//     console.log(`Server running at http://localhost:3000`);
// });

// // Middleware to log request metadata
// app.use((req, res, next) => {
//     console.log("I am middleware");
//     console.log(req.method);
//     console.log(req.protocol);
//     console.log(req.get("host"));
//     console.log(req.originalUrl());
//     next();
// });
