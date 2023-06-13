import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRout = ({children}) => {
    const {user}=useAuth()
    const [isAdmin]=useAdmin();
    const location = useLocation()

    if(user && isAdmin){
        return children
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>

};

export default AdminRout;