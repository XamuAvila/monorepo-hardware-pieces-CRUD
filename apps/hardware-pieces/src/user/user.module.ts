import { userProviders } from './user.provider';
import { DatabaseModule } from './../../../../libs/database/src/database.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    UserService,
    ...userProviders
  ],
  controllers: [UserController],
  exports: [UserModule, ...userProviders]
})
export class UserModule { }
