// types/User.ts (or inside your model file)
import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'doctor' | 'nurse';
  comparePassword(plainText: string): Promise<boolean>;
}
