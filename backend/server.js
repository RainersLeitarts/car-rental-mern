const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MondoDB database connection succesful')
})

const carsRouter = require('./routes/cars')
const usersRouter = require('./routes/users')

app.use('/cars', carsRouter)
app.use('/users', usersRouter)
app.use('*', (req, res) => res.status(404).json({"Message": "404"}))



app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})
