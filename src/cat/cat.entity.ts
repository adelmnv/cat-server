import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Cat{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    breed: string;

    @Column()
    age: number;

    @Column()
    photoUrl:string;

    @CreateDateColumn()
    createdAt:Date;
}