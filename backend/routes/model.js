import express from 'express'

import {
  getModels,
  storeModel,
  getModelById,
  updateModel,
  deleteModel,
} from '../controller/ModelController.js'

const router = express.Router()

router.get('/', getModels)
router.post('/', storeModel)
router.get('/:id', getModelById)
router.patch('/:id', updateModel)
router.delete('/:id', deleteModel)

export default router
