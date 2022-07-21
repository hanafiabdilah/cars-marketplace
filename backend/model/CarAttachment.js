import mongoose from 'mongoose'

const CarAttachmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('CarAttachment', CarAttachmentSchema)
