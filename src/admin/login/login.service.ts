import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginType } from './types/login.type';
import { Login } from './interfaces/login.interface';
import { LoginInput } from './input-login.input';

@Injectable()
export class LoginService {
  constructor(@InjectModel('Login') private itemModel: Model<Login>) {}

  async create(createItemDto: LoginInput): Promise<LoginType> {
    const createdLogin = new this.itemModel(createItemDto);
    return await createdLogin.save();
  }
  async findAll(): Promise<LoginType[]> {
    return await this.itemModel.find().exec();
  }
  async findOne(id: string): Promise<LoginType> {
    return await this.itemModel.findOne({ _id: id });
  }
  //   async delete(id: string): Promise<ItemType> {
  //     return await this.itemModel.findByIdAndRemove(id);
  //   }
  //   async update(id: string, item: Item): Promise<ItemType> {
  //     return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  //   }
}
