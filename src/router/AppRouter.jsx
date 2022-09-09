import { Route, Routes,Navigate } from "react-router-dom"
import { DashboardRoutes } from "../dashboard/router/DashboardRoutes"
// import { AuthRoutes } from "./AuthRoutes"
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { startLoadingActividades, startLoadingSalas, startLoadingTecnicos } from "../store/dashboard/thunks";
import { LoginPages } from "../auth/LoginPages";
import { useAuthStore } from "../hooks/useAuthStore";


export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();
    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

    useEffect(() => {
        checkAuthToken();
    }, [])
    


    if ( status === 'checking' ) {
        return (
          <div>
            <div className="loader"></div>
          </div>
        )
    }

    
    return (
        <Routes>
            {
                ( status === 'not-authenticated')  
                    ? (
                        <>
                            <Route path="/auth/*" element={ <LoginPages /> } />
                            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                        </>
                    )
                    : (
                        <>
                                <Route path='/*' element={<DashboardRoutes/>}/>
                        </>
                    )
            }

        </Routes>
    )
}


//   const { status } = useSelector( state => state.auth );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(startLoadingActividades());
//     dispatch(startLoadingTecnicos());
//     dispatch(startLoadingSalas());
    
//   }, []);
//   return (
//     <Routes>
//         <Route path='/*' element={<DashboardRoutes/>}/>
//         <Route path='/auth/*' element={<AuthRoutes/>}/>
//       <Route path='/*' element={<Navigate to='/auth/login'/>}/>

       
//     </Routes>
//   )
// }
