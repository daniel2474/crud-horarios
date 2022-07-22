export const crearActividades =(array=[])=>{
    const options=[];
    array.forEach(item => {
        options.push({value:item.id,label:item.nombre+" - Cupo:"+item.max});
    });
    return options;
}

export const crearTecnico =(array=[])=>{
    const options=[];
    array.forEach(item => {
        options.push({value:item.id,label:item.nombre});
    });
    return options;
}

export const crearSalas =(array=[])=>{
    const options=[];
    array.forEach(item => {
        options.push({value:item.id,label:item.club.nombre+" "+item.nombre});
    });
    return options;
}