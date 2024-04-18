import express from 'express'
import dotenv from 'dotenv'
import { logger } from './src/helpers/logger.helper.js'
import { authorRoute } from './src/routes/author.routes.js'

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

//Middlewares
app.use(express.json())
app.use(logger)

//Routes
app.use('/authors', authorRoute)
//Catch all route
app.all('*', (req, res) => {
  res.status(404).send('Page not found')
})

app.listen(PORT, () => {
  console.log(`Server connected and listening on ${PORT}`)
})
