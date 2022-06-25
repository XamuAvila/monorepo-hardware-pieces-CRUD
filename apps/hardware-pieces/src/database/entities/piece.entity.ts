import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "pieces"})
export class Piece {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    price: number;

    @Column()
    quantityStock:number

}
