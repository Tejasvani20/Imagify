import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js' 
import userRouter from './routes/userRoutes.js'  
import imageRouter from './routes/imageRoutes.js'

const app = express()
const PORT = process.env.PORT || 4000

// Middlewares
app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req, res) => {
  res.send('API working fine ')
})

// ✅ Async init function
const init = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(` Server running on PORT ${PORT}`)
    })
  } catch (err) {
    console.error(' Failed to start server:', err)
  }
}

init()
