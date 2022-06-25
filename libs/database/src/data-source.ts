import { join } from "path";
import { DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config({
    path: require.resolve("../../../.env")
})

const config: DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [join(__dirname, './entities/*.entity{.ts,.js}')],
    migrations: [join(__dirname, './migrations/*{.ts,.js}')],
    synchronize: false,
    migrationsTableName: "migrations",
    schema: "public",
}

import "reflect-metadata"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource(config)

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource
