import mongoose from 'mongoose'
import User from './../model/User.js'

export const getUser = async (req, res) => {
  try {
    const cars = req.query.cars
    if (cars == 1) {
      const user = await User.find().populate('cars')
      return res.json(user)
    }
    const user = await User.find()
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id
    const cars = req.query.cars
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'User not found' })
    }
    const user = await User.findById(id).select(
      '-_id -password -__v -createdAt -updatedAt -cars'
    )
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    if (cars == 1) {
      const user = await User.findById(id)
        .populate({
          path: 'cars',
          select: '-_id price',
          populate: [
            {
              path: 'model',
              select: '-_id name',
              populate: {
                path: 'factory',
                select: '-_id name',
              },
            },
            {
              path: 'attachments',
              select: '-_id name',
            },
          ],
        })
        .select('-_id -password -__v -createdAt -updatedAt')
      return res.status(200).json(user)
    }
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const storeUser = async (req, res) => {
  try {
    const user = new User(req.body)
    const savedUser = await user.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'User not found' })
    }
    const check = await User.findById(id)
    if (!check) {
      return res.status(404).json({ message: 'User not found' })
    }
    const user = await User.updateOne({ _id: id }, { $set: req.body })
    res.status(200).json({ user })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'User not found' })
    }
    const check = await User.findById(id)
    if (!check) {
      return res.status(404).json({ message: 'User not found' })
    }
    const user = await User.deleteOne({ _id: id })
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
