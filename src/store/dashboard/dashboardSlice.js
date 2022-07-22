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
        setSalas:(state,action)=>{
            state.salas=action.payload;
        },
        setCollapsed:(state,action)=>{
            state.collapsed=action.payload;
        },
        addNewSala:(state,action)=>{
            state.salas.push(action.payload);
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
    addNewSala
 } = dashboardSlice.actions;