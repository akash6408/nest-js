import { Injectable } from '@nestjs/common';
import { Users } from './users.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users) private userModel: typeof Users
    ){}

    async create(email: string, password: string){
        const user = this.userModel.create({email, password})

        return (await user).save()
    }
}