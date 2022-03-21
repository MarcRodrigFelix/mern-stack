const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000; //set up PORT from .env

connectDB();

const app = express(); //LOAD UP express

app.use(express.json()); // LETS YOU PASS TEXT BODY WITH POSTMAN
app.use(express.urlencoded({ extended: false })); // LETS YOU PASS TEXT BODY WITH POSTMAN

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler); // PASS ERROR HANDLER

app.listen(port, () => console.log(`Server running on port ${port}`));