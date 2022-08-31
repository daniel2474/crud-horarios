import moment from "moment";
import { useSelector } from "react-redux";


export const HorarioFitness = () => {
    const { collapsed } = useSelector( state => state.dashboard );
    const fechaComoCadena =  moment().format('YYYY-MM-DD');
const dias = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
const numeroDia = new Date(fechaComoCadena).getDay();
const nombreDia = dias[numeroDia];
  
  return (
    <div className={collapsed?'principal-collapsed ':'principal'}>
        <div className="formulario" style={{border: "2px solid rgb(205, 205, 205)",padding:'25px 25px 25px 25px',borderRadius:'5px',
        boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',width:collapsed?'103%':'95%',transitionDuration:'0.1s'}} >
            <h1>Horarios Fitness</h1>
            <form >
                <input type="text" placeholder="Selecciones el club" />
                <input type="date" placeholder="Selecciones una fecha" value={fechaComoCadena}/>
                <button type="submit" className="button-principal"  >Actualizar</button>
            </form>
            <div className="cardsFitness">
                <button>Semana anterior
                
                
                
                </button>
                <div>{dias[1]}
                
                    {/*CARD FITNESS <div className="card">
                    <div className="container">
                        <h4><b>Pole Fitness</b></h4>
                    </div>
                    </div> */}
                </div>
                <div>{dias[2]}
                
                
                
                </div>
                
                <div>{dias[3]}</div>
                <div>{dias[4]}</div>
                <div>{dias[5]}</div>
                <div>{dias[6]}</div>
                <div>{dias[0]}</div>
                <button>Semana siguiente
                
                
                
                </button>

            </div>
            
            <div>
                
            </div>
            

      </div>
    </div>
    
  )
}
