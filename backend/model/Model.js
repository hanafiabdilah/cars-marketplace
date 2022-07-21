import mongoose from 'mongoose'

const ModelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    factory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Factory',
      required: true,
    },
    cars: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Model', ModelSchema)
