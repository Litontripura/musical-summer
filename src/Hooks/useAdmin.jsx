

import useAuth from "./useAuth";
import { useState } from "react";
import { useEffect } from "react";




const useAdmin = () => {
  const { user } = useAuth();

  const [isAdmin, setIsAdmin]= useState()
  useEffect(()=>{
    fetch(`https://summer-school-server-inky.vercel.app/user/admin/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setIsAdmin(data.admin))
  },[setIsAdmin])
     
    return isAdmin;
 
};

export default useAdmin;
