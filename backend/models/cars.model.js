const mongoose = require('mongoose')

const Schema = mongoose.Schema

const carSchema = new Schema ({
    make: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    model: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    year: {
        type: Number,
        required: true,
        trim: true,
        minlength: 4
    },
    seats: {
        type: Number,
        required: true,
        trim: true,
        minlength: 1
    },
    doors: {
        type: Number,
        required: true,
        trim: true,
        minlength: 1
    },
    transmission: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    fuel: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    consumption: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    ac: {
        type: Boolean,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
    images: {
        type: String,
        //required: true,
    }
}, {
    timestamps: true
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car