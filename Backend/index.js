const express = require('express')
const app = express()
const dotenv = require('dotenv')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const fs = require('fs')
dotenv.config({ path: './Backend/.env' })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Map all the routes
fs.readdirSync('./Backend/routes').map((file) => {
  app.use('/api', require('./routes/' + file))
})

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) =>
    console.log({
      message: 'MongoDB Connection Failed',
      error: err.message,
    })
  )

app.listen(port, () => {
  console.log('Server is running on port 3000')
})
