import {Column, Entity, PrimaryGeneratedColumn, TableInheritance} from "typeorm";

@Entity("fruit")
@TableInheritance({column: {name: "type"}})
export default abstract class Fruit {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public type: string;

}
