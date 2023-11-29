const mongoose = require('mongoose');


const TestingSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    description: { type: String, required: [true, 'Please provide a description'] }
});

module.exports = mongoose.model('Testing', TestingSchema)