const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
const errorMiddleware = require('./middleware/error')

// routes imports
const complaint = require('./routes/complaintRoute.js')
const admin = require('./routes/adminRoute')
app.use('/api/v1/', complaint)
app.use('/api/v1/', admin)
// app.use(errorMiddleware)


module.exports = app