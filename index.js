// require("dotenv").config();
// const mongoose = require('mongoose');
// var cors = require("cors");
// const express = require("express");
// const app = express();



// const route = require('./routes/route');


// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log("Mongoose Connected");
//     }).catch((error) => {
//         console.log(error);
//     });


// app.use(express.json());
// app.use(cors());

// app.use((req, res, next) => {
//     console.log(req.path, req.method);
//     next();
// });


// console.log("----")

// app.use('/api', route);

// // app.get('/', (req, res) => {
// //     res.send('hello world')
// // })





// const server = app.listen(process.env.PORT, async () => {
//     console.log(`Listening on port http://localhost:${process.env.PORT}`);
// });





const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Define the Post schema
const postSchema = new mongoose.Schema({
    userId: Number,
    id: Number,
    title: String,
    body: String,
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

// Create an Express app
const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// GET endpoint to fetch all posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching posts' });
    }
});

app.post('/api/posts', async (req, res) => {
    try {
        const { userId, id, title, body } = req.body;
        const post = new Post({ userId, id, title, body });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ message: 'Error creating post' });
    }
});


// Set the server to listen on a specified port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

