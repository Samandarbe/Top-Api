import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import format from 'date-fns/format';
import { ensureDir, writeFile } from 'fs-extra';
import { FileResponse } from './dto/fileresponse.responses';

@Injectable()
export class FilesService {
  async saveFiles(files: Express.Multer.File[]): Promise<FileResponse[]> {
    const dataForm = format(new Date(), 'yyyy-MM-dd');
    const uploadFolder = `${path}/uploads/${dataForm}`;
    await ensureDir(uploadFolder);

    const response: FileResponse[] = [];
    for (const file of files) {
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
      response.push({
        url: `${dataForm}/${file.originalname}`,
        name: file.originalname,
      });
    }
    return response;
  }
}
