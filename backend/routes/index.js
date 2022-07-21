import express from 'express'
import factoryRoutes from './factory.js'
import modelRoutes from './model.js'
import userRoutes from './user.js'
import carRoutes from './car.js'

const router = express.Router()

router.use('/factory', factoryRoutes)
router.use('/model', modelRoutes)
router.use('/user', userRoutes)
router.use('/car', carRoutes)

export default router
