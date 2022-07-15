import React from 'react';
import { useSelector } from "react-redux";
import { Outlet,Navigate,useLocation } from 'react-router-dom';

function ProtectedRoute(props) {
    const temp = useSelector((state) => state);
    const isAuth=temp.auth
    const location=useLocation();
    
    if(isAuth){
        return<Outlet />
    }else{
        return <Navigate to='/login' state={{ from: location}} replace/>
    }
}
export default ProtectedRoute;