const express = require("express");
const app = express();

// Middleware 1: Log requests
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next(); // Pass to the next middleware
});

// Middleware 2: Parse JSON body (built-in middleware)
app.use(express.json());

// Middleware 3: Authentication Check
app.use((req, res, next) => {
  if (!req.headers["authorization"]) {
    return res.status(403).send("Forbidden: No Authorization Header");
  }
  next(); // Pass to the next middleware
});

// Route handler (Final destination)
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
