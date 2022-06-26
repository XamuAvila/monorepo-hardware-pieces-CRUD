import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users", {
    synchronize: false
})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    login: string;

    @Column()
    password: string;

}
