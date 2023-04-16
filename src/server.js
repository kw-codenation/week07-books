require('dotenv').config()
require('./db/connection')

const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


const bookRouter = require('./books/routes')
app.use(bookRouter)

app.listen(5001, () => console.log('Server is listening'))