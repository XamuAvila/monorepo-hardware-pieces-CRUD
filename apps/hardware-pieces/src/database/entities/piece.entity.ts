import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "pieces"})
export class Piece {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    price: number;

    @Column()
    quantityStock:number

}
