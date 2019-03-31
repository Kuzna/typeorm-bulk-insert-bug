import {Column} from "typeorm";
import Fruit from "./Fruit";
import {ChildEntity} from "typeorm";

@ChildEntity()
export class Orange extends Fruit {

    @Column()
    public ph: string;

}
