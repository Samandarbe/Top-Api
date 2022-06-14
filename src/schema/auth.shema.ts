import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop({ unique: true })
  password: string;
  @Prop()
  login: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
