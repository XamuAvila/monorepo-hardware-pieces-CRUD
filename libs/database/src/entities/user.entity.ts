import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "users"})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    login: string;

    @Column()
    password: string;

}
