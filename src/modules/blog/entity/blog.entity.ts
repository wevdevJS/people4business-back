
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'blog'})
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    title: string;

    @Column({length: 100})
    author: string;

    @Column()
    date: Date;

    @Column({length: 1000})
    description: string;
}
