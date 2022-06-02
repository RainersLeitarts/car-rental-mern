const router = require('express').Router()
const { handleRefreshToken } = require('../controllers/refreshTokenController')
const { protect, verifyJWT, isAdmin } = require('../middleware/authMiddleware')
const { createReservation, getByUserId, getAllReservations } = require('../controllers/reservationController')

router.post('/create', verifyJWT, createReservation)
router.post('/myReservations', verifyJWT, getByUserId)
router.post('/allReservations', verifyJWT, isAdmin, getAllReservations)


module.exports = router