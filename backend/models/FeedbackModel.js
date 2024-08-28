const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    comments: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
