import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from 'src/schema/auth.shema';
import { AuthDto } from './dto/auth.dto';
import { genSalt, hash } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name)
    private readonly authModel: Model<AuthDocument>,
  ) {}

  async getAll(): Promise<Auth[]> {
    return this.authModel.find().exec();
  }

  async getById(id: string) {
    return this.authModel.findById({ _id: id });
  }
  async findByEmail(email: string) {
    return this.authModel.findOne({ email }).exec();
  }

  async create(product: AuthDto): Promise<Auth> {
    const salt = await genSalt(10);
    const newUser = new this.authModel({
      email: product.login,
      passwordHash: await hash(product.password, salt),
    });

    return newUser.save();
  }
}
