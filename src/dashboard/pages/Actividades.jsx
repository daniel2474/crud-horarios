import { useState } from "react";
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SortArray } from "../../helpers/ordenarArray";
import { useForm } from "../../hooks/useForm";
import { Input } from "../components/Input";
const initialState={
  nombre:''
}

export const Actividades = () => {
  const { actividades,collapsed } = useSelector( state => state.dashboard );
  const [formularioActive, setFormularioActive] = useState(true);
  const{nombre,handleInputChange}=useForm(initialState);
  const dispatch=useDispatch();
  const arrayForSort = [...actividades]
  const s = arrayForSort.sort(SortArray);
  
  const onClickNewSala=()=>{
    setFormularioActive(!formularioActive);
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    // dispatch(newTecnico({nombre}));
    console.log('se enviaron datos');
  }
  return (
    <>
    <div className={collapsed?'principal-collapsed':'principal'}>
      <h1>Lista de Actividades</h1>
      <button className="button-principal" onClick={onClickNewSala}>Crear Nueva Actividad</button>
      <form className="formulario animate__animated animate__backInLeft" hidden={formularioActive}  onSubmit={ onSubmit }
      style={{border: "2px solid rgb(205, 205, 205)",padding:'25px 25px 25px 25px',borderRadius:'5px',
      boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}} >
        <h1>Llene los campos para crear una nueva sala</h1>
        <Input tipo='text' nombre='nombre' valor={nombre} handle={handleInputChange} label='Nombre de la nueva sala'/>        
        <button type="submit" className="button-principal"  >Crear</button>
      </form>
      <div className="cards">
    {
      s.map(actividad=>(
          <div key={actividad.id}className="card"  style={{border: "3px solid #"+actividad.tipoActividad.color,borderRadius:'5px'}}>
          <div className="container">
            <h4><b>{actividad.nombre}</b></h4>
            <h4>{actividad.segmentacion?'Cancha':'Actividad'}</h4>
            <h4>{actividad.dificultad}</h4>
            <h4>Cupo: {actividad.max}</h4>            
            <h4>{actividad.paga===0?'Clase de cobro':'Clase sin cobro'}</h4>
            <Link className="button"  to={"/editarActividad/"+actividad.id}><MdOutlineModeEdit/> </Link>
            <button  className="button-eliminar" ><MdOutlineDeleteOutline/></button>
          </div>
        </div>
      ))
  }</div>
  </div>
  </>
  )
}
