import {Expose, Type, Transform} from 'class-transformer';
export class user{
    //Decoradores siempre van encima de los atributos

    @Expose({name:"id"})
    //Expose me dice cómo va a entrar el tipo de dato
    @Transform(({value})=> parseInt(value), {toClassOnly:true}) //toClassOnly se utiloiza para que no se pueda modificar el tipo de dato solo leer
    //@Transform indica que tipo de dato estoy incluyento SOLO SE APLICA PARA LOS NÚMEROS (LIBRERIA)
    ID:number;
    // Al lado del Atributo se debe indicar qué tipo de dato es (TYPESCRIPT)
    @Expose({name:"nombre"})
    @Type(()=> String)
    nom_com:string;
    @Expose({name:"edad"})
    @Transform(({value})=> parseInt(value), {toClassOnly:true})
    eda:number;
    constructor(ID:number, nom_com:string, eda:number){
        //Aquí se definen y se colocan los atributos como van a entrar a la base de datos
        this.ID = ID;
        this.nom_com = nom_com;
        this.eda = eda;
    }
    get nombreId(): string {
        return `${this.ID} ---- ${this.nom_com}`
    }
}