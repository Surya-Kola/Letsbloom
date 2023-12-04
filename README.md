# Letsbloom
Assignment

# Create a new folder for your project
mkdir backend
cd backend

# Initialize a new Node.js project
npm init -y

# Install required packages
npm install express mongoose body-parser cors

# Create a new React app
npx create-react-app frontend

# Move into the frontend directory
cd library-frontend

# Install axios for making HTTP requests
npm install axios


In this React component, we use the axios library to make HTTP requests to the Node.js backend. The component fetches all books when it mounts, and you can add a new book or update the details of an existing book.

Make sure to start both the frontend and backend by running npm start in their respective directories. Access the React app at http://localhost:3000 and the Node.js server at http://localhost:3001.

In the server.js file, we're using the mongoose library to connect to a MongoDB database.

Make sure you have MongoDB installed and running on your machine. If not, you can download and install it from the official MongoDB website.

We use mongoose.connect to establish a connection to the MongoDB database named "library" running on the default MongoDB port (mongodb://localhost/library).
We define a Book model using mongoose.model, specifying the schema for our books (title, author, published_year).
Ensure that MongoDB is running, and when you run the Node.js server (npm start in the backend directory), it should connect to the MongoDB database.

To summarize:

Install MongoDB.
Run MongoDB.
Start the Node.js server (npm start).
Start the React app (npm start in the frontend directory).
