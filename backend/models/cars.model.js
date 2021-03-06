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
        trim: true
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
    },
    rating: {
        type: Number,
        trim: true,
    },
    ratedtimes: {
        type: Number,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
        required: true
    },
    ac: {
        type: String,
        required: true,
    },
    dayprice: {
        type: Number,
        required: true,
    },
    weekprice: {
        type: Number,
        required: true,
    },
    monthprice: {
        type: Number,
        required: true,
    },
    safetyprice: {
        type: Number,
        required: true,
    },
    available: {
        type: String,
        required: true,
    },
    images: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car