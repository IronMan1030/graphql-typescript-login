import { Document } from 'mongoose';

export interface Login extends Document {
  readonly qrCode: string;
}
