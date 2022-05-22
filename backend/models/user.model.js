const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    surname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    role: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        default: 'user'
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User