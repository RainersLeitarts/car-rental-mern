const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

const registerUser = asyncHandler(async (req, res) => {
    const { name, surname, email, username, password} = req.body

    if(!name || !surname || !email || !username || !password){
        res.status(400)
        throw new Error('Add all fields')
    }

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('This e-mail is already registered')
    }

    //hash the ting
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name,
        surname,
        email,
        username,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            message: 'User Created Successfuly!'
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }

})

const loginUser = asyncHandler(async (req, res) => {
    const {username, password} = req.body

    //check if user exists
    const user = await User.findOne({username})

    //check if password matches
    if(user && (await bcrypt.compare(password, user.password))){
        const refreshToken = generateRefreshToken(user._id.toString())

        User.updateOne({$set: {refreshToken}},{upsert: true}).then(res => {
            console.log(res)
        })

        res.status(201).json({
            _id: user.id,
            username: user.username,
            accessToken: generateAccessToken(user._id.toString())
        }).cookie('jwt', refreshToken, {httpOnly: true, maxAge: 1000 * 1000})


    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

const getMe = asyncHandler(async (req, res) => {
    const {_id, username, email} = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        username,
        email
    })
})

const test = asyncHandler(async (req, res) => {
    res.status(201).json({
        "Message": "test"
    })
})

//Generate Access Token
const generateAccessToken = (id) => {
    return jwt.sign({ id },
        process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15s'
    })
}
 
//Generate Refresh Token
const generateRefreshToken = (id) => {
    return jwt.sign({ id },
        process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '1000s'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    test
}