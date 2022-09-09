import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { calendarApi } from '../api/calendarApi';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    const startLogin = async({ nombreUsuario, password }) => {

        dispatch( onChecking() );
        try {
            const { data } = await calendarApi.post('/auth/loginFit',{ nombreUsuario,password });
            
            if(data.authorities[0].authority==='ROLE_ADMIN'){
                localStorage.setItem('token', data.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
                
                localStorage.setItem('nombreUsuario', nombreUsuario );
                localStorage.setItem('password', password );
                dispatch( onLogin({ name: data.nombreUsuario, authorities: data.authorities }) );
            }
            else if(data.authorities[1].authority==='ROLE_ADMIN'){
                localStorage.setItem('token', data.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
                
                localStorage.setItem('nombreUsuario', nombreUsuario );
                localStorage.setItem('password', password );
                dispatch( onLogin({ name: data.nombreUsuario, authorities: data.authorities }) );
            }else{
                Swal.fire('Acceso no Autorizado','No tiene permitido acceder','error');
                dispatch( onLogout() );
            }

            
            
        } catch (error) {
            
            Swal.fire('Credenciales incorrectas','Error en las credenciales','error');
            dispatch( onLogout() );
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        const nombreUsuario = localStorage.getItem('nombreUsuario');
        const password = localStorage.getItem('password');
        if ( !token ) return dispatch( onLogout() );

        try {
            const { data } = await calendarApi.post('auth/loginFit',{ nombreUsuario,password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.nombreUsuario, authorities: data.authorities }) );
        } catch (error) {
            console.log(error);
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }



    return {
        //* Propiedades
        errorMessage,
        status, 
        user, 

        //* Métodos
        checkAuthToken,
        startLogin,
        startLogout
    }

}