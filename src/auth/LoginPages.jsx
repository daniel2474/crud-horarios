

import { useEffect } from 'react';
import '../auth.css';
import { useAuthStore } from '../hooks/useAuthStore';
import { useForm } from '../hooks/useForm';


const loginFormFields = {
  nombreUsuario:    '',
  password: '',
}


export const LoginPages = () => {
  
  
  const { startLogin, errorMessage } = useAuthStore();

  const { nombreUsuario, password, handleInputChange } = useForm( loginFormFields );
  const loginSubmit = ( event ) => {
      event.preventDefault();
      startLogin({ nombreUsuario, password });
  }



  useEffect(() => {
    if ( errorMessage !== undefined ) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }    
  }, [errorMessage])
  


  return (
    <div className="main">
    <p className="sign" align="center">Iniciar Sesion</p>
    <form className="form1" onSubmit={loginSubmit}>
      <input 
        className="un" 
        name='nombreUsuario' 
        type="text" 
        align="center" 
        value={ nombreUsuario }
        onChange={ handleInputChange }
        placeholder="nombre de usuario"
      />
      <input 
        className="pass" 
        name='password' 
        type="password" 
        align="center" 
        placeholder="Contraseña" 
        value={ password }
        onChange={ handleInputChange }
      />
      <button className="submit" align="center">Iniciar Sesion</button>
    </form>        
                
    </div>
  );
}
