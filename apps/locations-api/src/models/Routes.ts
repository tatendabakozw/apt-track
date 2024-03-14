import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter route name'],
    },
    startLocation: {
      type: String,
      required: [true, 'Provide a start location'],
    },
    destinationLocation: {
      type: String,
      required: [true, 'Provide destination location'],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('Route', routeSchema);
