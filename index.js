const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const carsRoutes = require('./routes/cars');
// const indexRoutes = require('./routes/start');

// Variables
const databaseConn="mongodb+srv://PRO:0723557337@cars.ixcz0fo.mongodb.net/test";

const port = process.env.PORT || 8700;

// Connect to the database
mongoose.connect(databaseConn);
const database = mongoose.connection;

database.on('error', (error) => {
    console.error(error);
});

database.once('connected', () => {
    console.log('Database connected');
});

// Create an express app
const app = express();

app.use(express.json());
// app.use('/', indexRoutes);
app.use('/cars', carsRoutes);

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});