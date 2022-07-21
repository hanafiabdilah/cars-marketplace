import mongoose from 'mongoose'

const FactorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    models: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Model',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Factory', FactorySchema)
