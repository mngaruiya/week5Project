const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

// Schema
const raceSchema = new mongoose.Schema({
    driverName: {
        required: true,
        type: String,
    },
    vehicleType: {
        required: true,
        type: String,
    },
    vehicleNumber: {
        required: true,
        type: String,
    },
    wonRaces: {
        required: false,
        type: Number,
    },
});

module.exports = mongoose.model('Races', raceSchema);