const express = require("express");
const morgan = require("morgan");
require('dotenv').config();

const port = process.env.PORT || 4000;

const app = express();

// app.use(express.json());

// Use Morgan to log requests to the console
app.use(morgan("dev"));

// Define a simple route
app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

// Define another example route
app.get("/example", (req, res) => {
    res.send("<h1>This is an example route!</h1>");
});

// Catch all route to handle undefined routes
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Resource not found",
    });
});

// Error-handling middleware for other errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "An internal server error occurred",
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});