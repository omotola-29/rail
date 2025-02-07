const mongoose = require('mongoose');

const railSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    age: {
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

},
{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Rail', railSchema);