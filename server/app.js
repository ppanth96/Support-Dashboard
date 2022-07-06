'use strict'
const path = require("path");
const express = require("express")
const app = express()
//const router = express.Router()
const bodyParser = require("body-parser");
const cors = require('cors')
const compression = require('compression')
const port = 8000
const axios = require("axios");


app.set('trust proxy', 1);

//improve the performance of our Node.js applications as our payload size is reduced drastically.
app.use(compression())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Import Routes
const publicRouter = require('./ticketCounts')


// Deep link to Primary Path Routers 
app.use('/',publicRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports = app