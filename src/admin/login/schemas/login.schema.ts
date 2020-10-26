// import { Document } from 'mongoose';
// import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

// @Schema()
// export class Login extends Document {
//   @Prop(
//     raw({
//       qrCode: { type: String },
//     }),
//   )
//   login: any;
// }

// export const LoginSchema = SchemaFactory.createForClass(Login);

import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
  qrCode: String,
});
