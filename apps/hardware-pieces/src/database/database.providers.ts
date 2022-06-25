import { Piece } from './entities/piece.entity';
import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv'
import { join } from 'path';

dotenv.config({
    path: require.resolve("../../../../.env")
})

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
        username:  process.env.POSTGRES_USER,
        password:  `${process.env.POSTGRES_PASSWORD}`,
        database: process.env.POSTGRES_DB,
        entities:  [Piece],
        synchronize: process.env.POSTGRES_SYNC == "true",
      });

      return dataSource.initialize();
    },
  },
];
