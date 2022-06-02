const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')
require('dotenv').config()

const protect = asyncHandler( async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //get token from the header
            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

            //get user from the token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

const verifyJWT = asyncHandler( async (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader) return res.sendStatus(401)

    const token = authHeader.split(' ')[1]
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        async (err, decoded) => {
            if(err) return res.sendStatus(401)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        })
})

const isAdmin = asyncHandler( async (req, res, next) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(401)
    const refreshToken = cookies.jwt

    const foundUser = await User.findOne({ refreshToken })
    if (!foundUser) {
        return res.sendStatus(401)
    }

    if(foundUser.role !== 'admin'){
        return res.status(403).json({
            message: 'Not an admin'
        })
    }

    req.isAdmin = true
    next()
})

module.exports = {
    protect,
    verifyJWT,
    isAdmin
}