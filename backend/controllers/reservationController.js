const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Reservation = require('../models/reservations.model')

const createReservation = asyncHandler(async (req, res) => {
    const { userId, vehicleId, startDate, endDate,
        paymentStatus, paymentAmmount, reservationStatus } = req.body

    if (!userId || !vehicleId || !startDate || !endDate || !paymentStatus
        || !paymentAmmount || !reservationStatus) {
        res.status(400)
        throw new Error('Add all fields')
    }

    //Create reservation
    const reservation = await Reservation.create({
        userId,
        vehicleId,
        startDate,
        endDate,
        paymentStatus,
        paymentAmmount,
        reservationStatus
    })

    if (reservation) {
        res.status(201).json({
            message: 'Reservation Created Successfuly!'
        })
    } else {
        res.status(400)
        throw new Error('Invalid reservation data')
    }
})

const getByUserId = asyncHandler(async (req, res) => {
    const { userId } = req.body

    if (!userId) {
        res.status(400)
        throw new Error('No UserID provided')
    }

    const reservations = await Reservation.find({userId: userId.toString()})

    if (reservations) {
        res.status(201).json({
            reservations: reservations
        })
    } else {
        res.status(400)
        throw new Error('Failed')
    }

})

const changeReservationStatus = asyncHandler(async (req, res) => {
    const { userId } = req.body

    if (!userId) {
        res.status(400)
        throw new Error('No UserID provided')
    }

    const reservations = await Reservation.find({userId: userId.toString()})

    if (reservations) {
        res.status(201).json({
            reservations: reservations
        })
    } else {
        res.status(400)
        throw new Error('Failed')
    }

})

module.exports = {
    createReservation,
    getByUserId
}