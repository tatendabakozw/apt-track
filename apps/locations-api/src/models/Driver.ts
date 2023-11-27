import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'Provide driver name'],
    },
    last_name: {
      type: String,
      required: [true, 'prrovide driver last name'],
    },
    phone_number: {
      type: String,
      default: true,
    },
    national_id: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'identity of adder is needed'],
    },
  },
  {
    timestamps: true,
  }
);

export const Driver = mongoose.model('Driver', driverSchema);
