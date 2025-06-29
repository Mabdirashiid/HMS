// models/User.ts
import mongoose, { Schema, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import type { IUser } from '../types/User.js';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'doctor', 'nurse'],
    default: 'nurse',
  },
});

userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (
  plainText: string
): Promise<boolean> {
  return bcrypt.compare(plainText, this.password);
};

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
export default User;
