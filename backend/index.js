import express from 'express'
import cors from 'cors'
import db from './config/database.js'
import factoryRoutes from './routes/factory.js'
import router from './routes/index.js'

const app = express()

db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database Connected'))

app.use(cors())
app.use(express.json())
app.use(router)

app.listen('3001', () => {
  console.log('Server Running at port 3001')
})
