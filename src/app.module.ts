import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesModule } from './files/files.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://samandarbek:08021119@cluster0.fnacf.mongodb.net?retryWrites=true&w=majority`,
    ),
    AuthModule,
    TopPageModule,
    ProductModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
