import axios from "axios";


const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
export const loadActividades=async()=>{
    try {
        const resp = await axios.get('http://app.sportsplaza.mx/citas/obtenerActividad?activo=true',{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const loadTecnicos=async()=>{
    try {
        const resp = await axios.get('http://app.sportsplaza.mx/citas/obtenerTecnico?activo=true',{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const loadSalas=async()=>{
    try {
        const resp = await axios.get('http://app.sportsplaza.mx/citas/obtenerSala?activo=true',{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const createNewHorario=async(data)=>{
    try {
        const resp = await axios.post('http://app.sportsplaza.mx/citas/addHorario',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const createNewSala=async(data)=>{
    try {
        const resp = await axios.post('http://app.sportsplaza.mx/citas/crearSala',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const actualizarSala=async(data)=>{
    try {
        const resp = await axios.post('http://app.sportsplaza.mx/citas/actualizarSala',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}
export const borrarSala=async(data)=>{
    try {
        const resp = await axios.post('http://app.sportsplaza.mx/citas/deleteSala',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const createNewTecnico=async(data)=>{
    try {
        const resp = await axios.post('http://app.sportsplaza.mx/citas/crearTecnico',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const actualizarTecnico=async(data)=>{
    try {
        const resp = await axios.put('http://app.sportsplaza.mx/citas/actualizarTecnico',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const borrarTecnico=async(data)=>{
    try {
        const resp = await axios.post('http://app.sportsplaza.mx/citas/deleteTecnico',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}



export const createNewTipoActividad=async(data)=>{
    try {
        const resp = await axios.post('http://app.sportsplaza.mx/citas/crearTipoActividad',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}




export const createNewActividad=async(data)=>{
    try {
        const resp = await axios.post('http://app.sportsplaza.mx/citas/crearActividad',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}



export const actualizarActividad=async(data)=>{
    try {
        const resp = await axios.put('http://app.sportsplaza.mx/citas/actualizarActividad',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}



export const borrarActividad=async(data)=>{
    try {
        const resp = await axios.post('http://app.sportsplaza.mx/citas/deleteActividad',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}


export const loadHorario=async(dia,club)=>{
    try {
        const resp = await axios.get(`http://app.sportsplaza.mx/citas/obtenerClasesFitness?dia=${dia}&club=${club}`,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const editarHorario=async(data)=>{
    try {
        const resp = await axios.post('http://app.sportsplaza.mx/citas/modificarHorario',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}