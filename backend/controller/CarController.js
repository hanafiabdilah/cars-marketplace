import mongoose from 'mongoose'

import Car from './../model/Car.js'
import CarAttachment from './../model/CarAttachment.js'
import Model from './../model/Model.js'
import User from './../model/User.js'

export const getCars = async (req, res) => {
  try {
    const detail = req.query.detail

    const cars = await Car.find()
      .select('-__v -user -attachments -createdAt -updatedAt')
      .populate({ path: 'model', select: 'name' })

    const response = {
      total: cars.length,
      data: cars,
    }

    if (detail == 1) {
      const cars = await Car.find()
        .select('-__v -createdAt -updatedAt')
        .populate({
          path: 'model',
          select: '-_id name',
          populate: {
            path: 'factory',
            select: '-_id name',
          },
        })
        .populate({
          path: 'user',
          select: '-_id name phone email username isSeller',
        })
        .populate({
          path: 'attachments',
          select: '-_id name',
        })
      response.data = cars
    }

    res.status(200).json(response)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const getCarById = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Car not found' })
    }
    const car = await Car.findById(id)
      .select('-__v -createdAt -updatedAt')
      .populate({
        path: 'model',
        select: '-_id name',
        populate: {
          path: 'factory',
          select: '-_id name',
        },
      })
      .populate({
        path: 'user',
        select: '-_id name phone email username isSeller',
      })
      .populate({
        path: 'attachments',
        select: '-_id name',
      })
    if (!car) {
      return res.status(404).json({ message: 'Car not found' })
    }
    res.status(200).json(car)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const storeCar = async (req, res) => {
  try {
    const model = await Model.findOne({ _id: req.body.model })
    const user = await User.findOne({ _id: req.body.user })
    const car = new Car(req.body)

    const attachments = []
    for (let i = 0; i < req.body.attachments.length; i++) {
      const carAttachment = new CarAttachment({
        name: req.body.attachments[i],
        car: car._id,
      })
      const savedCarAttachment = await carAttachment.save()
      attachments.push(savedCarAttachment)
    }

    car.attachments = attachments

    const savedCar = await car.save()
    model.cars.push(savedCar)
    user.cars.push(savedCar)
    await model.save()
    await user.save()

    res.status(201).json(savedCar)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
