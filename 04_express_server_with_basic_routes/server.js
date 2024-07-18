// Import Express
const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Define the port
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Temporary storage for posts
const posts = [];

// Define a simple GET endpoint at '/'
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define a GET endpoint to retrieve posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// Define a POST endpoint to add a new post
app.post('/posts', (req, res) => {
    const { title } = req.body;
    const newPost = {
        id: posts.length + 1,
        title: title
    };
    posts.push(newPost);
    res.json(newPost);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
