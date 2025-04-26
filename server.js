const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const savingsRoutes = require('./routes/savingsRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');

app.use('/api/users', userRoutes);
app.use('/api/savings', savingsRoutes);
app.use('/api/chatbot', chatbotRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connected to MongoDB'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));