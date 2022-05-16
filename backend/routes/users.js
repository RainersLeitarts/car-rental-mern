const router = require('express').Router()
let User = require('../models/user.model')
const { registerUser, loginUser } = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)

module.exports = router