import { CreateUpdateUserRequestDto } from './dto/create-user.request.dto';
import { Repository } from 'typeorm';
import { User } from '@app/database/entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(@Inject('USER_REPOSITORY') private userRepository: Repository<User>) { }

    async findOne(email:string): Promise<User>{
        return this.userRepository.findOne({where:{login:email}})
    }

    async create(user:CreateUpdateUserRequestDto):Promise<User>{
        return this.userRepository.save(user);
    }
}
