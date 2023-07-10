import "reflect-metadata";
import {plainToClass} from "class-transformer";
import {user} from "./controller/user.js";

let json = {
    id: 12666,
    nombre: "vickysiitaa",
    edad: 17
};

let data = plainToClass(user, json, {excludeExtraneousValues: true});
console.log(data.nombreId);