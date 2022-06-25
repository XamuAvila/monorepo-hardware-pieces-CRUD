import { User } from './../../../../libs/database/src/entities/user.entity';
import { UserService } from './user.service';
import { CreateUpdateUserRequestDto } from './dto/create-user.request.dto';
import { Body, Controller, Get, Inject, Param, Post, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(@Inject(UserService) private userService:UserService){}

    @Post()
    createUser(@Body() user:CreateUpdateUserRequestDto):Promise<User>{
        return this.userService.create(user);
    }

    @Get()
    getUser(@Query('email') email:string):Promise<User>{
        return this.userService.findOne(email);
    }
}
