export const findSalaById=(id='',array=[])=>{
    console.log('se ha llamado la funcion');
    return array.find(element=>element.id===id);
}