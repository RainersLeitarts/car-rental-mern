const router = require('express').Router()
let Car = require('../models/cars.model')

router.route('/').get((req, res) => {
    Car.find()
        .then(cars => res.json(cars))
        .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/add').post((req, res) => {
    const make = req.body.make
    const model = req.body.model
    const year = req.body.year
    const seats = req.body.seats
    const doors = req.body.doors
    const transmission = req.body.transmission
    const fuel = req.body.fuel
    const consumption = req.body.consumption
    const ac = req.body.ac
    const available = req.body.available
    const images = req.body.images


    const newCar = new Car({
        make,
        model,
        year,
        seats,
        doors,
        transmission,
        fuel,
        consumption,
        ac,
        available,
        images
    })

    newCar.save()
        .then(() => res.json('Car added!'))
        .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/:id').get((req, res) => {
    Car.findById(req.params.id)
        .then(car => res.json(car))
        .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/:id').delete((req, res) => {
    Car.findByIdAndDelete(req.params.id)
        .then(() => res.json('Car deleted'))
        .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/update/:id').post((req, res) => {
    let body = req.body

    Car.findById(req.params.id)
        .then((car) => {
            car.make = body.make
            car.model = body.model
            car.year = Number(body.year)
            car.seats = Number(body.seats)
            car.doors = Number(body.doors)
            car.transmission = body.transmission
            car.fuel = body.fuel
            car.consumption = body.consumption
            car.ac = Boolean(body.ac)
            car.available = Boolean(body.available)
            car.images = body.images

            car.save()
                .then(() => res.json('Car updated!'))
                .catch(err => res.status(400).json('Error: '+ err))
        })
        .catch(err => res.status(400).json('Error: '+ err))
})


module.exports = router