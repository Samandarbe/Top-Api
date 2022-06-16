import {
  Body,
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileResponse } from './dto/fileresponse.responses';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly fileServise: FilesService) {}
  @Post('upload')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('files'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File[],
  ): Promise<FileResponse[]> {
    return this.fileServise.saveFiles(file);
  }
}
