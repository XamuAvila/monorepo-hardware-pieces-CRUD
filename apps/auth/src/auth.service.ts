import { User } from '@app/database/entities/user.entity';
import { UserService } from './../../hardware-pieces/src/user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) { }

  async login(user) {
    const payload = { sub: user.id, email: user.email }
    return {
      token: this.jwtService.sign(payload)
    }
  }

  async validateUser(email: string, password: string) {
    const user: User = await this.userService.findOne(email);
    if (!user) {
      return null;
    }
    const isPasswordValid = user.password == password;

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

}
