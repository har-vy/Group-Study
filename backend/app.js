const config = require('./utils/config.js')
const express = require('express')
require('express-async-errors')
const app = express()
const logger = require('./utils/logger.js')
const mongoose = require('mongoose')
const loginRouter = require('./controllers/login.js')
const registerRouter = require('./controllers/register.js')
const cors = require('cors')

logger.info('Connecting to MongoDB')
mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => {
        console.log('Connected to MongoDB')
    }).catch((error) => {console.log('error connecting to MongoDB', error.message)})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use('/login', loginRouter)
app.use('/register', registerRouter)

module.exports = app