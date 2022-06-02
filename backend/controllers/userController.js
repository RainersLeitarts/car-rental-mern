const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

const registerUser = asyncHandler(async (req, res) => {
    const { name, surname, email, username, password } = req.body

    if (!name || !surname || !email || !username || !password) {
        res.status(400)
        throw new Error('Add all fields')
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
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

    if (user) {
        res.status(201).json({
            message: 'User Created Successfuly!'
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    //check if user exists
    const user = await User.findOne({ username })

    //check if password matches
    if (user && (await bcrypt.compare(password, user.password))) {
        const refreshToken = generateRefreshToken(user._id.toString())

        user.updateOne({ $set: { refreshToken } }, { upsert: true }).then(res => {

        })

        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 1000 * 10000000 }) //change
        res.status(201).json({
            _id: user.id,
            username: user.username,
            role: user.role,
            accessToken: generateAccessToken(user._id.toString())
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

const logoutUser = asyncHandler(async (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204)
    const refreshToken = cookies.jwt

    const foundUser = await User.findOne({ refreshToken })
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, maxAge: 1000 * 10000000 })
        return res.sendStatus(204)
    }

    await foundUser.updateOne({ $set: { refreshToken: '' } }, { upsert: true }).then(res => {
       
    })

    res.clearCookie('jwt', { httpOnly: true, maxAge: 1000 * 10000000 }) //use secure: true to serve only on https
    res.sendStatus(204)
})

const isAdmin = asyncHandler(async (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(401)
    const refreshToken = cookies.jwt

    const foundUser = await User.findOne({ refreshToken })
    if (!foundUser) {
        return res.sendStatus(401)
    }

    if(foundUser.role !== 'admin'){
        console.log('here')
        return res.sendStatus(401)
    }
    

    return res.sendStatus(204)
})

const getMe = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
    res.status(200).json(user)
})

//Generate Access Token
const generateAccessToken = (id) => {
    return jwt.sign({ id },
        process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1000s' //change
    })
}

//Generate Refresh Token
const generateRefreshToken = (id) => {
    return jwt.sign({ id },
        process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '10000s' //change
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    logoutUser,
    isAdmin
}