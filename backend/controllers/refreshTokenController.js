const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')
const asyncHandler = require('express-async-handler')

const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(401)
    const refreshToken = cookies.jwt

    const foundUser = await User.findOne({ refreshToken })
    if (!foundUser) return res.sendStatus(403)

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET, //check
        (err, decoded) => {
            if (err) return res.sendStatus(403) //check if
            const accessToken = jwt.sign(
                { 'id': decoded.id.toString() },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15s' }
            )
            res.json({ accessToken })
        }
    )
})

module.exports = {
    handleRefreshToken
}