import Swal from "sweetalert2";
import { actualizarSala, borrarSala, createNewHorario, createNewSala, loadActividades, loadSalas, loadTecnicos } from "../../helpers/load";
import { addNewSala, onDeleteSala, onUpdateSala, savedNewHorario, savingNewHorario, setActividades, setSalas, setTecnicos } from "./dashboardSlice";


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


export const updateSala=(sala)=>{
    return async(dispatch)=>{
        
        try{
            const salaCreada=await actualizarSala(sala);
            dispatch(onUpdateSala(salaCreada));
            Swal.fire({
                icon: "success",
                title: 'Sala actualizada satisfactoriamente',
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

export const eliminarSala=(req)=>{
    return async(dispatch)=>{
        try{
            const json=await borrarSala(req);
            dispatch(onDeleteSala(req.id));
            Swal.fire({
                icon: "success",
                title: 'Sala actualizada satisfactoriamente',
                text: json.msg,
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