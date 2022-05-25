const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors({credentials: true, origin: 'http://localhost:3000'})) // add mutiple origins, add default origin
app.use(express.json())
app.use(cookieParser())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MondoDB database connection succesful')
})

const carsRouter = require('./routes/cars')
const usersRouter = require('./routes/users')
const reservationsRouter = require('./routes/reservations')

app.use('/cars', carsRouter)
app.use('/users', usersRouter)
app.use('/reservations', reservationsRouter)
app.use('*', (req, res) => res.status(404).json({"Message": "404"}))



app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})
