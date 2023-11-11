import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter your email'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter your password'],
      trim: true,
    },
    role: {
      type: String,
      enum: ['passenger', 'driver', 'admin', 'bus_admin'],
      default: 'user',
    },
    emailApproved: {
      type: Boolean,
      default: true,
    },
    company: {
      name: {
        type: String,
        default: '',
      },
      logo: {
        type: String,
        default: '',
      },
    },
    terms_agreed: {
      type: Boolean,
      required: true,
      default: true,
    },
    email_key: {
      type: String,
      default: '',
    },
    email_key_success: {
      type: String,
      default: false,
    },
    authMethod: {
      type: String,
      enum: ['email', 'google'],
      default: 'email',
    },
    googleAuthId: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      default: '',
    },
    photoURL: {
      type: String,
      default: '',
    },
    phoneNumber: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
