const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')
const { is } = require('immer/dist/internal')

const registerUser = asyncHandler(async (req, res) => {
    const { name, surname, email, username, password} = req.body

    if(!name || !surname || !email || !username || !password){
        res.status(400)
        //throw new Error('Add all fields')
    }

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        //throw new Error('This e-mail is already registered')
    }

    //hash the ting

    console.log(req.body.name)
    res.json({ message: 'Register User' })
})

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Login User' })
})

module.exports = {
    registerUser,
    loginUser
}