//Modelo de los dias recibido desde el api
export interface Dias{
    list:{
        main:{
            temp:number
        };
        weather:{
            description:string
        };
    };
}