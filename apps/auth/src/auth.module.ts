import { JwtStrategy } from './strategies/jwt.strategy';
import { userProviders } from './../../hardware-pieces/src/user/user.provider';
import { DatabaseModule } from './../../../libs/database/src/database.module';
import { UserService } from './../../hardware-pieces/src/user/user.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from './../../hardware-pieces/src/user/user.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt';
import { join } from 'path';

import * as dotenv from 'dotenv';
dotenv.config({path: join(__dirname, "../../../.env")})
@Module({
  imports: [
    DatabaseModule,
    UserModule,
    PassportModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY || "gPwjG1GCfzzIdYcHIM4ZjT0sbohPUc66X97duW94blI=",
      signOptions: {expiresIn: '2h'}
    })
  ],
  controllers: [AuthController],
  providers: [LocalStrategy, AuthService, UserService,  ...userProviders, JwtStrategy],
})
export class AuthModule { }
