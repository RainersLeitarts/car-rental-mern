const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Reservation = require('../models/reservations.model')
const User = require('../models/user.model')

const createReservation = asyncHandler(async (req, res) => {
    console.log(req.body)

    const { userId, vehicleId, vehicleMake, vehicleModel, vehicleYear,
        vehicleImage, startDate, endDate, paymentStatus,
        paymentAmmount, reservationStatus } = req.body

    if (!userId || !vehicleId || !startDate || !endDate || !paymentStatus
        || !paymentAmmount || !reservationStatus || !vehicleMake ||
        !vehicleModel || !vehicleYear || !vehicleImage) {
        res.status(400)
        throw new Error('Add all fields')
    }

    //Create reservation
    const reservation = await Reservation.create({
        userId,
        vehicleId,
        vehicleMake,
        vehicleModel,
        vehicleYear,
        vehicleImage,
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
    console.log('Body: ' + req.body.userId)
    if (!userId) {
        res.status(400)
        throw new Error('No UserID provided')
    }

    const reservations = await Reservation.find({userId: userId.toString()})

    if (reservations) {
        res.status(200).json({
            reservations: reservations
        })
    } else {
        res.status(400)
        throw new Error('Failed')
    }

})

const getAllReservations = asyncHandler(async (req, res) => {
    const reservations = await Reservation.find({})

    res.status(200).json({
        reservations: reservations
    })
})


module.exports = {
    createReservation,
    getByUserId,
    getAllReservations
}