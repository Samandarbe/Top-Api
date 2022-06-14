import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  async create(@Body() dto: FindProductDto) {
    return this.productService.create(dto);
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return this.productService.getById(id);
  }
  @Get()
  async getAllProduct() {
     return this.productService.getAll();
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }

  @Patch(':id')
  async patchProduct(@Param('id') id: string, @Body() dto: FindProductDto) {
    this.productService.updateProduct(dto, id);
  }
}
