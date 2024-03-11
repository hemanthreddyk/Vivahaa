import mongoose from 'mongoose'

const { Schema } = mongoose

const venueSchema = new Schema({
  businessName: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  priceQuote: { type: String, required: true },
  description: { type: String, required: true },
  contactInfo: { type: String, required: true },
  seatingCapacity: { type: Number, required: true },
  cuisinesAvailable: { type: [Number], required: true },
  facilitiesAvailable: { type: [Number], required: true },
  pricePerPlateVeg: { type: String, required: true },
  pricePerPlateNonVeg: { type: String, required: true },
  portfolioImages: [{ type: String }],
  venueType: { type: Number, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lastModifiedBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

export default mongoose.model('Venue', venueSchema)
