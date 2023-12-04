const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3001;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/library');

const Book = mongoose.model('Book', {
  title: String,
  author: String,
  published_year: Number,
});

// Endpoint 1: Retrieve All Books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint 2: Add a New Book
app.post('/api/books', async (req, res) => {
  try {
    const { title, author, published_year } = req.body;
    const newBook = new Book({ title, author, published_year });
    await newBook.save();
    res.json({ message: 'Book added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint 3: Update Book Details
app.put('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    const { title, author, published_year } = req.body;
    book.title = title;
    book.author = author;
    book.published_year = published_year;

    await book.save();
    res.json({ message: 'Book updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
