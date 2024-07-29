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
app.use(express.json());

// Temporary storage for posts
const posts = [
    {
        "id": "1",
        "title": "ABC",
        "author": "XYZ"
    },
    {
        "id": "2",
        "title": "XYZ",
        "author": "ABC"
    }
];

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
    const { title, author } = req.body;
    const newPost = {
        id: posts.length + 1,
        title: title,
        author: author
    };
    posts.push(newPost);
    res.json(newPost);
});

app.get("/posts/:id", (req, res) => {
    // console.log(req.params); {id: 1}
    const { id } = req.params;
    const title = posts.find((title) => title.id === id);
    if (!title) {
        res
            .status(404)
            .json({ success: false, message: `No data with id ${id} found` });
    }
    return res.status(200).json({ success: true, data: title });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
