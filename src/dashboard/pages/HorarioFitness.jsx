import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtrarByDay } from "../../helpers/filtrarClubSalas";
import { onLimpiarHorario } from "../../store/dashboard/dashboardSlice";
import { loadHorarioInicial } from "../../store/dashboard/thunks";
import { CardFitness } from "../components/CardFitness";

const curr = new Date; // get current date
const first = curr.getDate() - curr.getDay()+1; 
let firstday = moment(curr.setDate(first));

export const HorarioFitness = () => {
    const { collapsed,horario,isLoading } = useSelector( state => state.dashboard );    
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(onLimpiarHorario());
        dispatch(loadHorarioInicial(firstday,'Club Alpha 2'));
    }, [])
    
    
    const semanaAnterior=(event)=>{
        event.preventDefault();
        firstday =  firstday.add(-7,'day');
        console.log(firstday);
      }

      const semanaSiguiente=(event)=>{
        event.preventDefault();
        firstday =  firstday.add(7,'day');
        console.log(firstday);
      }
  return (
    <div className={collapsed?'principal-collapsed ':'principal'}>
        <div className="formulario" style={{border: "2px solid rgb(205, 205, 205)",padding:'25px 25px 25px 25px',borderRadius:'5px',
        boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',width:collapsed?'95%':'95%',transitionDuration:'0.1s'}} >
            <h1>Horarios Fitness</h1>
            <form >
                <input type="text" placeholder="Selecciones el club" />
                <button type="submit" className="button-principal"  >Actualizar</button>
            </form>
            <div className="cards-fitness-grid">
                {/* <button onClick={semanaAnterior}>Semana anterior
                
                
                
                </button> */}
                <div>Lunes 
                {/* CARD FITNESS */}
                {
                    isLoading?(
                        <h1>Cargando...</h1>
                    ):(
                        filtrarByDay(firstday.format('YYYY-MM-DD'),horario).map(element=>(
                            <CardFitness key={element.idApartados} card={element} />
                        ))) 
                    
                }
                </div>
                <div>Martes
                
                {
                    isLoading?(
                        <h1>Cargando...</h1>
                    ):(
                        filtrarByDay(firstday.clone().add(1,'day').format('YYYY-MM-DD'),horario).map(element=>(
                            
                            <CardFitness key={element.idApartados} card={element} />
                        ))) 
                    
                }
                
                </div>
                
                <div>Miercoles
                {
                    isLoading?(
                        <h1>Cargando...</h1>
                    ):(
                        filtrarByDay(firstday.clone().add(2,'day').format('YYYY-MM-DD'),horario).map(element=>(
                            
                            <CardFitness key={element.idApartados} card={element} />
                        ))) 
                    
                }
                </div>
                <div>Jueves
                {
                    isLoading?(
                        <h1>Cargando...</h1>
                    ):(
                        filtrarByDay(firstday.clone().add(3,'day').format('YYYY-MM-DD'),horario).map(element=>(
                            
                            <CardFitness key={element.idApartados} card={element} />
                        ))) 
                    
                }
                </div>
                <div>Viernes
                {
                    isLoading?(
                        <h1>Cargando...</h1>
                    ):(
                        filtrarByDay(firstday.clone().add(4,'day').format('YYYY-MM-DD'),horario).map(element=>(
                            
                            <CardFitness key={element.idApartados} card={element} />
                        ))) 
                    
                }
                </div>
                <div>Sabado
                {
                    isLoading?(
                        <h1>Cargando...</h1>
                    ):(
                        filtrarByDay(firstday.clone().add(5,'day').format('YYYY-MM-DD'),horario).map(element=>(
                            
                            <CardFitness key={element.idApartados} card={element} />
                        ))) 
                    
                }
                </div>
                <div>Domingo
                {
                    isLoading?(
                        <h1>Cargando...</h1>
                    ):(
                        filtrarByDay(firstday.clone().add(6,'day').format('YYYY-MM-DD'),horario).map(element=>(
                            
                            <CardFitness key={element.idApartados} card={element} />
                        ))) 
                    
                }
                </div>
                {/* <button onClick={semanaSiguiente}> Semana siguiente
                
                
                
                </button> */}

            </div>
            
            <div>
                
            </div>
            

      </div>
    </div>
    
  )
}
