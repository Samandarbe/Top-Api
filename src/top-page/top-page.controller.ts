import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  HttpCode,
} from '@nestjs/common';
import { FindPageDto } from './dto/top-page.dto';
import { TopPageModel } from './top-page.model';
import { TopPageService } from './top-page.service';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly topPageServise: TopPageService) {}
  @Post('create')
  async create(@Body() dto: FindPageDto) {
    return this.topPageServise.create(dto);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Get('')
  async getAll() {
    return this.topPageServise.getAll();
  }

  @HttpCode(200)
  @Post()
  async findProduct(@Body() dto: FindPageDto) {}
}
