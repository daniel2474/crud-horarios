import Swal from "sweetalert2";
import { createNewHorario, createNewSala, loadActividades, loadSalas, loadTecnicos } from "../../helpers/load";
import { addNewSala, savedNewHorario, savingNewHorario, setActividades, setSalas, setTecnicos } from "./dashboardSlice";


export const startNewHorario=(data)=>{
    return async(dispatch)=>{
        dispatch(savingNewHorario());
        
        try{
            const respuesta=await createNewHorario(data);
            Swal.fire({
                icon: "success",
                title: 'Horario Guardado',
                text: respuesta,
              });

        }catch(error){
            Swal.fire({
                icon: "error",
                title: error.status,
                text: error.message,
              });
        }
        
        dispatch(savedNewHorario());
    }
}
export const startLoadingActividades=()=>{
    return async(dispatch)=>{
        const actividades=await loadActividades();
        dispatch(setActividades(actividades));
    }
}

export const startLoadingTecnicos=()=>{
    return async(dispatch)=>{
        const tecnicos=await loadTecnicos();
        dispatch(setTecnicos(tecnicos));
    }
}


export const startLoadingSalas=()=>{
    return async(dispatch)=>{
        const salas=await loadSalas();
        dispatch(setSalas(salas));
    }
}

export const newSala=(nuevaSala)=>{
    return async(dispatch)=>{
        
        try{
            const salaCreada=await createNewSala(nuevaSala);
            dispatch(addNewSala(salaCreada));
            Swal.fire({
                icon: "success",
                title: 'Sala creada Satisfactoriamente',
                text: salaCreada.nombre,
              });
        }catch(error){
            Swal.fire({
                icon: "error",
                title: error.status,
                text: error.message,
              });
        }
    }
}