import { useState } from "react";
import Modal from "react-modal"
import { useSelector } from "react-redux";
import Select from 'react-select';
import { crearActividades, crearSalas, crearTecnico } from "../../helpers/crearOpciones";
import { useForm } from "../../hooks/useForm";
import { Input } from "./Input";


  Modal.setAppElement('#root');  


export const ModalFitness = () => {
  
  const { actividades,tecnicos,salas,isSaving } = useSelector( state => state.dashboard );
  const [isOpen, setIsOpen] = useState(true)
  const closeModal=()=>{
    console.log('cerrando modal');
    setIsOpen(false);
  }
  
    
  const [selectedActividad, setSelectedActividad] = useState(null);
  const [selectedTecnico, setSelectedTecnico] = useState(null);
  const [selectedSala, setSelectedSala] = useState(null);

  const opcionesActividades=crearActividades(actividades);
  const opcionesTecnicos=crearTecnico(tecnicos);
  const opcionesSalas=crearSalas(salas);

  const {horaInicio,horaFin,handleInputChange}=useForm({
    horaInicio:"",
    horaFin:""
  })
  
  return (    
    <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={300}
    >
      <h1>Modificar horario</h1>
      <hr/>
        
        <Select className="Select" 
            placeholder='Nombre'          
            defaultValue={selectedActividad}
            onChange={setSelectedActividad}
            options={opcionesActividades}                
        />
        <Select className="Select" 
            placeholder='Instructor'          
            defaultValue={selectedTecnico}
            onChange={setSelectedTecnico}
            options={opcionesTecnicos}                
        />
        <Select className="Select" 
            placeholder='Lugar'          
            defaultValue={selectedSala}
            onChange={setSelectedSala}
            options={opcionesSalas}                
        />
        <Input tipo='time' nombre='horaInicio' valor={horaInicio}
                handle={handleInputChange} label=''/>
            
            <Input tipo='time' nombre='horaFin' valor={horaFin}
                handle={handleInputChange} label=''/>
    </Modal>
      )
}
