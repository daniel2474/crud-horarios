import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiAkMmEkMTAkbEY5MG1nRkx2eC5lOVcvSnhvbUduZUZEL3hzNG80N2l6YUJlTG5TUGdhbTFMRWUvZXd5eC4ifQ.sbHcP0IfdNJ219L5uY_AOQFJS9AQtG5Ww0yTEWZ6n5O_jyiPYBRm3ZsnulJSZ2qDHGkjwMrUOZ2g8NG8fWr1bA`
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
        console.log(data)
        const resp = await axios.post('http://app.sportsplaza.mx/citas/deleteSala',data,{
            headers
        });
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}