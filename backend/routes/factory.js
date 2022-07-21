import express from 'express'

import {
  getFactory,
  storeFactory,
  deleteFactory,
  getFactoryById,
  updateFactory,
} from '../controller/FactoryController.js'

const router = express.Router()

router.get('/', getFactory)
router.post('/', storeFactory)
router.get('/:id', getFactoryById)
router.patch('/:id', updateFactory)
router.delete('/:id', deleteFactory)

export default router
