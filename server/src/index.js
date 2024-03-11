import { config } from 'dotenv'
import express from 'express'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { logger } from './middleware/logEvents.js'
import errorHandler from './middleware/errorHandler.js'
import corsOptions from './config/corsOptions.js'
import cookieParser from 'cookie-parser'
import credentials from './middleware/credentials.js'
import mongoose from 'mongoose'
import connectDB from './config/dbConn.js'
import registerRoute from './routes/api/register.js'
import authRoute from './routes/api/auth.js'
import refreshRoute from './routes/api/refresh.js'
import logoutRoute from './routes/api/logout.js'
import usersRoute from './routes/api/users.js'
import venuesRoute from './routes/api/venues.js'
import mehendiArtistsRoute from './routes/api/mehendiArtists.js'
import bodyParser from 'body-parser'

const __dirname = dirname(fileURLToPath(import.meta.url))

config()

const PORT = process.env.PORT || 3500
const app = express()

connectDB()

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(credentials)
app.use(cors(corsOptions))
app.use(logger)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.use('/register', registerRoute)
app.use('/auth', authRoute)
app.use('/refresh', refreshRoute)
app.use('/logout', logoutRoute)
app.use('/api/users', usersRoute)
app.use('/venues', venuesRoute)
app.use('/mehendi-artists', mehendiArtistsRoute)

app.all('*', (req, res) => {
  res.status(404)

  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not found' })
  } else {
    res.type('txt').send('404 Not found')
  }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
  })
})
