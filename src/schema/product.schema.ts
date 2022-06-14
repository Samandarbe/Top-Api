import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  category: string;
  @Prop()
  limit: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
