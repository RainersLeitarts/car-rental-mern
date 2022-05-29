const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reservationsSchema = new Schema ({
    vehicleId: {
        type: String,
        required: true,
        trim: true,
    },
    vehicleMake: {
        type: String,
        required: true,
        trim: true,
    },
    vehicleModel: {
        type: String,
        required: true,
        trim: true,
    },
    vehicleYear: {
        type: String,
        required: true,
        trim: true,
    },
    vehicleImage: {
        type: String,
        required: true,
        trim: true,
    },
    userId: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: String, // change to date
        required: true,
        trim: true,
    },
    endDate: {
        type: String, // change to date
        required: true,
        trim: true,
    },
    paymentStatus: {
        type: String,
        required: true,
    },
    paymentAmmount: {
        type: String,
        required: true,
    },
    reservationStatus: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Reservation = mongoose.model('Reservation', reservationsSchema)

module.exports = Reservation