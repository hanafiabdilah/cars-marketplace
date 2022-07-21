import express from 'express'

import {
  getUser,
  getUserById,
  storeUser,
  updateUser,
  deleteUser,
} from '../controller/UserController.js'

const router = express.Router()

router.get('/', getUser)
router.get('/:id', getUserById)
router.post('/', storeUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
