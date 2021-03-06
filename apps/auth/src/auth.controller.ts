import { ApiBody, ApiParam, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { AuthRequestDto } from './dto/auth-request.dto';
import { Body, Controller, Get, Inject, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('api/auth')
@ApiTags('Auth')
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Body() user:AuthRequestDto) {
    return this.authService.login(user);
  }
}
