export interface City{
    name:string;
    weather:{
        description:string,
        main:string;
    };
    main:{
        temp:number,
        temp_min:number,
        temp_max:number,
        pressure:number,
        humidity:number
    };
    wind:{
        speed:number
    };   
}