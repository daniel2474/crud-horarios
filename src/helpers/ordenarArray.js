
export const SortArray=(x, y)=>{
    if (x.nombre < y.nombre) {return -1;}
    if (x.nombre > y.nombre) {return 1;}
    return 0;
}