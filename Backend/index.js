const express = require('express')
const app = express()
const errorHandler = require('./middleware/errorMiddleware')
const dotenv = require('dotenv')
const port = process.env.PORT || 3000
const fs = require('fs')
const connectDB = require('./config/db')
dotenv.config({ path: './Backend/.env' })
//app.use() is a middleware function that is executed for every request
app.use(express.json()) // parse application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded if true, you can post nested object data else you can only post string or array data
app.use(errorHandler)

// CRUD operations
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Map all the routes
fs.readdirSync('./Backend/routes').map((file) => {
  app.use('/api/user', require('./routes/' + file))
})
// Connect to MongoDB
connectDB()
// Start the server
app.listen(port, () => {
  console.log('Server is running on port 3000')
})
