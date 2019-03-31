import {createConnection} from "typeorm";
import {Orange} from "./entity/Orange";

createConnection().then(async connection => {

    const values = [];

    const orange1 = new Orange();
    orange1.name = "orange1";
    orange1.ph = "0,5";
    values.push(orange1);

    const orange2 = new Orange();
    orange2.name = "orange2";
    orange2.ph = "0,6";
    values.push(orange2);

    const orange3 = new Orange();
    orange3.name = "orange3";
    orange3.ph = "0,4";
    values.push(orange3);

    await connection
        .createQueryBuilder()
        .insert()
        .into(Orange)
        .values(values)
        .execute();

}).catch(error => console.log("Error: ", error));
