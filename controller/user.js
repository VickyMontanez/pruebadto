var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from 'class-transformer';
export class user {
    constructor(ID, nom_com, eda) {
        //Aquí se definen y se colocan los atributos como van a entrar a la base de datos
        this.ID = ID;
        this.nom_com = nom_com;
        this.eda = eda;
    }
    get nombreId() {
        return `${this.ID} ---- ${this.nom_com}`;
    }
}
__decorate([
    Expose({ name: "id" })
    //Expose me dice cómo va a entrar el tipo de dato
    ,
    Transform(({ value }) => parseInt(value), { toClassOnly: true }) //toClassOnly se utiloiza para que no se pueda modificar el tipo de dato solo leer
    //@Transform indica que tipo de dato estoy incluyento SOLO SE APLICA PARA LOS NÚMEROS (LIBRERIA)
    ,
    __metadata("design:type", Number)
], user.prototype, "ID", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Type(() => String),
    __metadata("design:type", String)
], user.prototype, "nom_com", void 0);
__decorate([
    Expose({ name: "edad" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], user.prototype, "eda", void 0);
