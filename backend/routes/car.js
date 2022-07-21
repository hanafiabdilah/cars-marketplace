import express from 'express'

import { getCars, getCarById, storeCar } from '../controller/CarController.js'

const router = express.Router()

router.get('/', getCars)
router.get('/:id', getCarById)
router.post('/', storeCar)

export default router
