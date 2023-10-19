import mongoose from 'mongoose';

const busStopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'provide a name for location'],
    },
    photos: {
      type: [String],
      default: [],
    },
    loc: {
      lon: Number,
      lat: Number,
    },
    addedBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

busStopSchema.index({ loc: "2dsphere" });

export const BusStop = mongoose.model('BusStop', busStopSchema);
