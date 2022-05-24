const router = require('express').Router()
const { handleRefreshToken } = require('../controllers/refreshTokenController')
const { protect, verifyJWT } = require('../middleware/authMiddleware')
const { createReservation, getByUserId } = require('../controllers/reservationController')

router.post('/create', verifyJWT, createReservation)
router.get('/myReservations', verifyJWT, getByUserId)


module.exports = router