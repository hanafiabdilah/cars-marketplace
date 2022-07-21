import mongoose from 'mongoose'
import Model from '../model/Model.js'
import Factory from '../model/Factory.js'

export const getModels = async (req, res) => {
  try {
    const factory = req.query.factory
    if (factory == 1) {
      const models = await Model.find().populate('factory')
      return res.json(models)
    }
    const models = await Model.find()
    res.json(models)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getModelById = async (req, res) => {
  try {
    const id = req.params.id
    const factory = req.query.factory
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Model not found' })
    }
    const model = await Model.findById(id)
    if (!model) {
      return res.status(404).json({ message: 'Model not found' })
    }
    if (factory == 1) {
      const model = await Model.findById(id).populate('factory')
      return res.status(200).json(model)
    }
    res.status(200).json(model)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const storeModel = async (req, res) => {
  try {
    const factory = await Factory.findOne({ _id: req.body.factory })
    const model = new Model(req.body)
    const savedModel = await model.save()

    factory.models.push(savedModel)
    await factory.save()

    res.status(201).json(savedModel)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const updateModel = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Model not found' })
    }
    const check = await Model.findById(id)
    if (!check) {
      return res.status(404).json({ message: 'Model not found' })
    }
    const model = await Model.updateOne({ _id: id }, { $set: req.body })
    res.status(200).json({ model })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const deleteModel = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Model not found' })
    }
    const check = await Model.findById(id)
    if (!check) {
      return res.status(404).json({ message: 'Model not found' })
    }
    const model = await Model.deleteOne({ _id: id })
    res.status(200).json(model)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
