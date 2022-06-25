import { DatabaseModule } from './../../../libs/database/src/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PiecesModule } from './pieces/pieces.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PiecesModule,UserModule, DatabaseModule ],
  controllers: [AppController],
  providers: [DatabaseModule],
})
export class AppModule {}
