import mongoose from 'mongoose';

const busStop = new mongoose.Schema(
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
      type: [Number],
      index: '2dsphere',
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Locaation = mongoose.model('User', busStop);
