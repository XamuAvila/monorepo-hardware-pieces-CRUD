import { Piece } from './../database/entities/piece.entity';
import { DataSource } from 'typeorm';

export const pieceProviders = [
  {
    provide: 'PIECE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Piece),
    inject: ['DATA_SOURCE'],
  },
];
