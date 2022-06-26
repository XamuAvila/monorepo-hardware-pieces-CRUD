import { CreateUserRequestDto } from './dto/create-user.request.dto';
import { Repository } from 'typeorm';
import { User } from '@app/database/entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(@Inject('USER_REPOSITORY') private userRepository: Repository<User>) { }

    async findAll(): Promise<User[]>{
        return this.userRepository.find()
    }

    async findOne(email:string): Promise<User>{
        return this.userRepository.findOne({where:{login:email}})
    }

    async create(user:CreateUserRequestDto):Promise<User>{
        return this.userRepository.save(user);
    }
}
