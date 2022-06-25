import { DatabaseModule } from './../../../../libs/database/src/database.module';
import { pieceProviders } from './piece.provider';
import { Module } from '@nestjs/common';
import { PiecesService } from './pieces.service';
import { PiecesController } from './pieces.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    PiecesService,
    ...pieceProviders
  ],
  controllers: [PiecesController]
})
export class PiecesModule { }
