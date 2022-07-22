import { SortOptions } from "./ordenarArray";

export const crearActividades =(array=[])=>{
    const options=[];
    array.forEach(item => {
        options.push({value:item.id,label:item.nombre+" - Cupo:"+item.max});
    });
    const s = options.sort(SortOptions);
    return s;   
}

export const crearTecnico =(array=[])=>{
    const options=[];
    array.forEach(item => {
        options.push({value:item.id,label:item.nombre});
    });
    const s = options.sort(SortOptions);
    return s;
}

export const crearSalas =(array=[])=>{
    const options=[];
    array.forEach(item => {
        options.push({value:item.id,label:item.club.nombre+" "+item.nombre});
    });
    const s = options.sort(SortOptions);
    return s;
}