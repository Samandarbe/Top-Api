import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TopPage, TopPageDocument } from 'src/schema/top-page.schme';
import { FindPageDto } from './dto/top-page.dto';
import { TopPageModel } from './top-page.model';

@Injectable()
export class TopPageService {
  constructor(
    @InjectModel(TopPage.name)
    private readonly topPageModel: Model<TopPageDocument>,
  ) {}
  async getAll(): Promise<TopPage[]> {
    return this.topPageModel.find();
  }

  async create(topPage: FindPageDto): Promise<TopPage> {
    const newTopPage = new this.topPageModel(topPage);

    return newTopPage.save();
  }
}
