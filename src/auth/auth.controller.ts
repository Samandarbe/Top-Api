import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { identity } from 'rxjs';
import { BadRequest } from './auth.constans';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServise: AuthService) {}
  @UsePipes(new ValidationPipe())
  @Post()
  async register(@Body() dto: AuthDto) {
    console.log(dto);
    
    const oldUser = await this.authServise.findByEmail(dto.login);
    console.log(oldUser);
    
    if (oldUser) {
      throw new BadRequestException(BadRequest);
    }
    return this.authServise.create(dto);
  }
  @Get()
  async getUsers() {
    return this.authServise.getAll();
  }
  @Get(':id')
  async getUsersById(@Param('id') id: string) {
    return this.authServise.getById(id);
  }
}
