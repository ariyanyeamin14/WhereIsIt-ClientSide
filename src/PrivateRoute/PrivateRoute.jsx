import React, { useContext } from 'react';
import { AuthContex } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContex) 
    if(loading){
        return (
            <div>
                <div className='flex justify-center items-center min-h-screen'>
                    <span className="loading w-[150px] text-center loading-spinner text-[#ec570d] "></span>
                </div>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;