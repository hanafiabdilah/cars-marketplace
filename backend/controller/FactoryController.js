import mongoose from 'mongoose'
import Factory from './../model/Factory.js'

export const getFactory = async (req, res) => {
  try {
    const models = req.query.models
    if (models == 1) {
      const factories = await Factory.find().populate('models')
      return res.json(factories)
    }
    const factories = await Factory.find()
    res.json(factories)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getFactoryById = async (req, res) => {
  try {
    const models = req.query.models
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Factory not found' })
    }
    const factory = await Factory.findById(id)
    if (!factory) {
      return res.status(404).json({ message: 'Factory not found' })
    }
    if (models == 1) {
      const factory = await Factory.findById(id).populate('models')
      return res.status(200).json(factory)
    }
    res.status(200).json(factory)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const storeFactory = async (req, res) => {
  try {
    const factory = new Factory(req.body)
    const saveFactory = await factory.save()
    res.status(201).json(saveFactory)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const updateFactory = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Factory not found' })
    }
    const check = await Factory.findById(id)
    if (!check) {
      return res.status(404).json({ message: 'Factory not found' })
    }
    const factory = await Factory.updateOne({ _id: id }, { $set: req.body })
    res.status(200).json({ factory })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const deleteFactory = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Factory not found' })
    }
    const check = await Factory.findById(id)
    if (!check) {
      return res.status(404).json({ message: 'Factory not found' })
    }
    const factory = await Factory.deleteOne({ _id: id })
    res.status(200).json(factory)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
