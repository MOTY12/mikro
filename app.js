const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const helmet = require('helmet')
const errorHandlerMiddleware = require('./middleware/error-handler')
const contactRouter = require('./router/contact')



const app = express()
dotenv.config()

const apis = process.env.API_URL

app.use(helmet())
app.use(cors())
app.use(errorHandlerMiddleware)
app.use(express.json())
app.use(`${apis}`, contactRouter)

app.get('/', (req, res) => {
    console.log('hello world')
})




module.exports = app