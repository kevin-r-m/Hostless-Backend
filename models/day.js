const mongoose = require('../db/connection')

const DaySchema = new mongoose.Schema({
    dayOfWeek: {
        type: String,
        required: true
    },
    openTime: {
        type: Date,
        required: true
    },
    closeTime: {
        type: Date,
        required: true
    },
    reservationSlots: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reservationSlot'
    }
})

module.exports = mongoose.model('Day', DaySchema )