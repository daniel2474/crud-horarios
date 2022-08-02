import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SortArray } from "../../helpers/ordenarArray";


export const Tecnicos = () => {
  
  const { tecnicos,collapsed } = useSelector( state => state.dashboard );
  
  return (
    <>
    <div className={collapsed?'principal-collapsed':'principal'}>
      <h1>Lista de tecnicos</h1>
      <button className="button-principal">Crear Nuevo Tecnico</button>
      <div className="cards">
    {
      tecnicos.map(tecnico=>(
          <div key={tecnico.id}className="card">
          <div className="container">
            <h4><b>{tecnico.nombre}</b></h4>
            <Link className="button"  to={"/editarTecnico/"+tecnico.id}><MdOutlineModeEdit/> </Link>
            <button  className="button-eliminar" ><MdOutlineDeleteOutline/></button>
          </div>
        </div>
      ))
  }</div>
  </div>
  </>
  )
}
