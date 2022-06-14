import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { TopLevelCatecory, TopPageModel } from '../top-page/top-page.model';

export type TopPageDocument = TopPage & Document;

@Schema()
export class TopPage {
  @Prop()
  firstLevelCategory: TopLevelCatecory;
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);