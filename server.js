const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 10000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = 'your-mongodb-uri-here'; // Replace with your MongoDB URI

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if the connection fails
  }
}

connectToDatabase();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});