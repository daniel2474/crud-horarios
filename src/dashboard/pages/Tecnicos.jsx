import { useSelector } from "react-redux";
import { SortArray } from "../../helpers/ordenarArray";


export const Tecnicos = () => {
  
  const { tecnicos,collapsed } = useSelector( state => state.dashboard );
  
  return (
    <>
    <div className={collapsed?'principal-collapsed':'principal'}>
      <h1>Lista de tecnicos</h1>
      <button className="button">Crear Nuevo Tecnico</button>
      <div className="cards">
    {
      tecnicos.map(tecnico=>(
          <div key={tecnico.id}className="card">
          <div className="container">
            <h4><b>{tecnico.nombre}</b></h4>
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
