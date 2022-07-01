const mongoose = require('mongoose');
const roomSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    maxCount: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    rentForDay: {
        type: Number,
        required: true
    },
    imgUrls:[],
    currentBookings: [],
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const roomModal = mongoose.model('rooms', roomSchema);
module.export = roomModal;