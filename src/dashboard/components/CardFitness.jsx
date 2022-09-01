import React from 'react'

export const CardFitness = ({card}) => {
  return (
    <div  className="card-fitness animate__animated animate__fadeIn" 
            style={{ border: '2px solid #'+card.color}}>
        <div >
            <h4>{card.nombre}</h4>
            <h5>{card.lugar}</h5>
            <h6>{card.tecnico}</h6>
            <h6>{card.cupo_actual}/{card.cupo_maximo}</h6>
            <h6>{card.rango}</h6>
            {/* <Link className="button"  to={"/editarSala/"+dia.id}><MdOutlineModeEdit/> </Link> */}
            {/* <button className="button" >Editar</button> */}
            {/* <button  className="button-eliminar" onClick={() => deleteSala(dia.id)} ><MdOutlineDeleteOutline/></button> */}
        </div>
    </div>
  )
}
