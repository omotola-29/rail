const mongoose = require('mongoose');

const railSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Destination: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    nextOfKin: {
        type: String,
        required: true
    },
    nextOfKinPhoneNumber: {
        type: String,
        required: true
    },
    bookingStatus: {
        type: String,
        default: false
    }
},
{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Rail', railSchema);