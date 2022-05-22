const router = require('express').Router()
let User = require('../models/user.model')
const { registerUser, loginUser, getMe, logoutUser } = require('../controllers/userController')
const { handleRefreshToken } = require('../controllers/refreshTokenController')
const { protect, verifyJWT } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.get('/refresh', handleRefreshToken)
router.post('/login', loginUser)
router.get('/me', verifyJWT, getMe)
router.get('/logout', logoutUser)


module.exports = router