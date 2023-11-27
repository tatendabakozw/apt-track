import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema(
  {
    plate: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['bus', 'car', 'lorry'],
    },
    icon: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      default: '',
    },
    load:{
        type: String,
        enum: ['cargo', 'passengers']
    }
  },
  {
    timestamps: true,
  }
);

export const Vehicle = mongoose.model('Vehicle', vehicleSchema);
