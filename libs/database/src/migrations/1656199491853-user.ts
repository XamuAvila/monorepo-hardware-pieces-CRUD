import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class user1656199491853 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    isPrimary: true,
                    isUnique: true,
                    type: "uuid",
                    generationStrategy: 'uuid',
                    default: `uuid_generate_v4()`
                },
                {
                    name: "login",
                    type: "varchar(200)"
                },
                {
                    name: "password",
                    type: "varchar(25)"
                }
            ],
        }));

        await queryRunner.query(`INSERT INTO users(login, password) VALUES('admin@admin.com', 'password')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("drop table users")
    }

}
