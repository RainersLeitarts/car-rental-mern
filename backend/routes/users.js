const router = require('express').Router()
let User = require('../models/user.model')
const { registerUser, loginUser, getMe, test } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.post('/test', test)

module.exports = router