import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PiecesModule } from './pieces/pieces.module';

@Module({
  imports: [PiecesModule, DatabaseModule],
  controllers: [AppController],
  providers: [DatabaseModule],
})
export class AppModule {}
