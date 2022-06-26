import { AuthGuard } from '@nestjs/passport';
import { User } from './../../../../libs/database/src/entities/user.entity';
import { UserService } from './user.service';
import { CreateUserRequestDto } from './dto/create-user.request.dto';
import { Body, Controller, Get, Inject, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiBearerAuth('token')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Users')
export class UserController {
    constructor(@Inject(UserService) private userService:UserService){}

    @Post()
    createUser(@Body() user:CreateUserRequestDto):Promise<User>{
        return this.userService.create(user);
    }

    @Get()
    getUser(@Query('email') email:string):Promise<User>{
        return this.userService.findOne(email);
    }

    @Get('users')
    getUsers():Promise<User[]>{
        return this.userService.findAll();
    }
}
