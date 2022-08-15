import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        isSaving:false,
        message:'',
        actividades:[],
        tecnicos:[],
        salas:[],
        collapsed:false
    },
    reducers: {
        savingNewHorario:(state)=>{
            state.isSaving=true;
        },
        savedNewHorario:(state)=>{
            state.isSaving=false;
        },
        setActividades:(state,action)=>{
            state.actividades=action.payload;
        },
        setTecnicos:(state,action)=>{
            state.tecnicos=action.payload;
        },
        addNewTecnico:(state,action)=>{
            state.tecnicos.push(action.payload);
        },
        onUpdateTecnico:(state,{payload})=>{
            state.tecnicos=state.tecnicos.map(tecnico=>{
                if(tecnico.id===payload.id){
                    return payload;
                }
                return tecnico;
            })
        },
        onDeleteTecnico:(state,action)=>{
            state.tecnicos=state.tecnicos.filter(tecnico=>tecnico.id!==action.payload);
        },
        addNewSala:(state,action)=>{
            state.salas.push(action.payload);
        },
        setSalas:(state,action)=>{
            state.salas=action.payload;
        },
        onUpdateSala:(state,{payload})=>{
            state.salas=state.salas.map(sala=>{
                if(sala.id===payload.id){
                    return payload;
                }
                return sala;
            })
        },onDeleteSala:(state,action)=>{
            state.salas=state.salas.filter(sala=>sala.id!==action.payload);
        },
        addNewActividad:(state,action)=>{
            state.actividades.push(action.payload);
        },
        onUpdateActividad:(state,{payload})=>{
            state.actividades=state.actividades.map(actividad=>{
                if(actividad.id===payload.id){
                    return payload;
                }
                return actividad;
            })
        },
        onDeleteActividad:(state,action)=>{
            state.actividades=state.actividades.filter(sala=>sala.id!==action.payload);
        },
        setCollapsed:(state,action)=>{
            state.collapsed=action.payload;
        }        
    }
});


// Action creators are generated for each case reducer function
export const { 
    setActividades,
    setTecnicos,
    setSalas,
    savingNewHorario,
    savedNewHorario,
    setCollapsed,
    addNewSala,
    onUpdateSala,
    onDeleteSala,
    addNewTecnico,
    onUpdateTecnico,
    onDeleteTecnico,
    addNewActividad,
    onUpdateActividad,
    onDeleteActividad
 } = dashboardSlice.actions;