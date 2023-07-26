import "reflect-metadata";
import {plainToClass} from "class-transformer";
import {user} from "./controller/user.js";



let data = plainToClass(user, json, {excludeExtraneousValues: true});
console.log(data.nombreId);
A<ZSXDCFVGHBNJMK,LÑ.