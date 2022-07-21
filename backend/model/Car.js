import mongoose from 'mongoose'

const CarSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    model: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Model',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    attachments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarAttachment',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Car', CarSchema)
