import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivetRout = ({children}) => {
  const {user, loading}=useContext(AuthContext) 
  const location = useLocation()
  if(loading){
    return <Loading></Loading>
  }
  if(user){
    return children
  }
  return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRout;