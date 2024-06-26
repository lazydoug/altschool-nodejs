import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import routes from './src/routes/index.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())

app.use('/api/v1', routes)

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`DB Connected. Server listening on ${PORT}`)
    })
  )
  .catch(err => console.log(err))
