import { AuthGuard } from '@nestjs/passport';
import { User } from './../../../../libs/database/src/entities/user.entity';
import { UserService } from './user.service';
import { CreateUpdateUserRequestDto } from './dto/create-user.request.dto';
import { Body, Controller, Get, Inject, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Users')
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
