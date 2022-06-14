import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPage, TopPageSchema } from 'src/schema/top-page.schme';
import { TopPageController } from './top-page.controller';
import { TopPageService } from './top-page.service';

@Module({
  providers: [TopPageService],
  imports: [
    MongooseModule.forFeature([
      {
        name: TopPage.name,
        schema: TopPageSchema,
      },
    ]),
  ],
  controllers: [TopPageController],
})
export class TopPageModule {}
