import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product, ProductDocument } from 'src/schema/product.schema';
import { FindProductDto } from './dto/find-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getById(id: string) {
    return this.productModel.findById({ _id: id });
  }

  async create(product: FindProductDto): Promise<Product> {
    const newUser = new this.productModel(product);

    return newUser.save();
  }

  async deleteProduct(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async updateProduct(data: FindProductDto, id: string): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, data);
  }
}
