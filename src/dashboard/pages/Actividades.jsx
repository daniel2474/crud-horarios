import { useSelector } from "react-redux";


export const Actividades = () => {
  const { actividades,collapsed } = useSelector( state => state.dashboard );
  
  return (
    <>
    <div className={collapsed?'principal-collapsed':'principal'}>
      <h1>Lista de Actividades</h1>
      <button className="button">Crear Nueva Actividad</button>
      <div className="cards">
    {
      actividades.map(actividad=>(
          <div key={actividad.id}className="card">
          <div className="container">
            <h4><b>{actividad.nombre}</b></h4>
            <h4>{actividad.segmentacion?'Cancha':'Actividad'}</h4>
            <h4>{actividad.dificultad}</h4>
            <h4>Cupo: {actividad.max}</h4>            
            <h4>{actividad.paga===0?'Clase de cobro':'Clase sin cobro'}</h4>
            <button className="button" >Editar</button>
            <button  className="button-eliminar" >Eliminar</button>
          </div>
        </div>
      ))
  }</div>
  </div>
  </>
  )
}
