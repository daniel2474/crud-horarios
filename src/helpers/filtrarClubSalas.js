
export const getSalasByClub=(name='',lista=[])=>{
    if(name===''){
        return [];
    }
    return lista.filter(elemento=>elemento.club.nombre.includes(name));
}