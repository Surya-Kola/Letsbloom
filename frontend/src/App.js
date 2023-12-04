import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Create this file for custom styling if needed

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', published_year: '' });
  const [updatedBook, setUpdatedBook] = useState({ title: '', author: '', published_year: '' });

  useEffect(() => {
    // Fetch all books when the component mounts
    axios.get('http://localhost:3001/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  const addBook = () => {
    axios.post('http://localhost:3001/api/books', newBook)
      .then(response => {
        console.log(response.data);
        // Fetch all books after adding a new book
        axios.get('http://localhost:3001/api/books')
          .then(response => setBooks(response.data))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  const updateBook = (id) => {
    axios.put(`http://localhost:3001/api/books/${id}`, updatedBook)
      .then(response => {
        console.log(response.data);
        // Fetch all books after updating a book
        axios.get('http://localhost:3001/api/books')
          .then(response => setBooks(response.data))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Library System</h1>

      <Row>
        <Col md={6}>
          <h2>All Books</h2>
          <ListGroup>
            {books.map(book => (
              <ListGroupItem key={book._id}>
                <strong>{book.title}</strong> by {book.author} ({book.published_year})
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>

        <Col md={6}>
          <Form>
            <h2>Add a New Book</h2>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label>Author</Label>
              <Input
                type="text"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label>Published Year</Label>
              <Input
                type="text"
                value={newBook.published_year}
                onChange={(e) => setNewBook({ ...newBook, published_year: e.target.value })}
              />
            </FormGroup>

            <Button color="primary" onClick={()=>{
              addBook();
              setNewBook({ title: '', author: '', published_year: '' });
            }}>Add Book</Button>
          </Form>

          <Form className="mt-4">
            <h2>Update Book Details</h2>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                value={updatedBook.title}
                onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label>Author</Label>
              <Input
                type="text"
                value={updatedBook.author}
                onChange={(e) => setUpdatedBook({ ...updatedBook, author: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label>Published Year</Label>
              <Input
                type="text"
                value={updatedBook.published_year}
                onChange={(e) => setUpdatedBook({ ...updatedBook, published_year: e.target.value })}
              />
            </FormGroup>

            <Button color="info" onClick={() => {
              updateBook(books[0]._id);
              setUpdatedBook({ title: '', author: '', published_year: '' })
            }}>Update Book</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [books, setBooks] = useState([]);
//   const [newBook, setNewBook] = useState({ title: '', author: '', published_year: '' });
//   const [updatedBook, setUpdatedBook] = useState({ title: '', author: '', published_year: '' });

//   useEffect(() => {
//     // Fetch all books when the component mounts
//     axios.get('http://localhost:3001/api/books')
//       .then(response => setBooks(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const addBook = () => {
//     axios.post('http://localhost:3001/api/books', newBook)
//       .then(response => {
//         console.log(response.data);
//         // Fetch all books after adding a new book
//         axios.get('http://localhost:3001/api/books')
//           .then(response => setBooks(response.data))
//           .catch(error => console.error(error));
//       })
//       .catch(error => console.error(error));
//   };

//   const updateBook = (id) => {
//     axios.put(`http://localhost:3001/api/books/${id}`, updatedBook)
//       .then(response => {
//         console.log(response.data);
//         // Fetch all books after updating a book
//         axios.get('http://localhost:3001/api/books')
//           .then(response => setBooks(response.data))
//           .catch(error => console.error(error));
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h1>Library System</h1>

//       {/* Display all books */}
//       <h2>All Books</h2>
//       <ul>
//         {books.map(book => (
//           <li key={book._id}>
//             {book.title} by {book.author} ({book.published_year})
//           </li>
//         ))}
//       </ul>

//       {/* Add a new book */}
//       <h2>Add a New Book</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={newBook.title}
//         onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Author"
//         value={newBook.author}
//         onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Published Year"
//         value={newBook.published_year}
//         onChange={(e) => setNewBook({ ...newBook, published_year: e.target.value })}
//       />
//       <button onClick={()=>{
//         addBook();
//         setNewBook({ ...newBook, title: "" });
//         setNewBook({ ...newBook, author: "" });
//         setNewBook({ ...newBook, published_year: "" });
//       }}>Add Book</button>

//       {/* Update book details */}
//       <h2>Update Book Details</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={updatedBook.title}
//         onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Author"
//         value={updatedBook.author}
//         onChange={(e) => setUpdatedBook({ ...updatedBook, author: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Published Year"
//         value={updatedBook.published_year}
//         onChange={(e) => setUpdatedBook({ ...updatedBook, published_year: e.target.value })}
//       />
//       <button onClick={() => {
//         updateBook(books[0]._id);
//         setUpdatedBook({ ...newBook, author: "" })
//         setUpdatedBook({ ...newBook, title: "" })
//         setUpdatedBook({ ...newBook, published_year: "" })
//       }}>Update Book</button>
//     </div>
//   );
// }

// export default App;
