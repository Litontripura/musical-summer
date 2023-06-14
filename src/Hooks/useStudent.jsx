import { useState } from "react";
import useAuth from "./useAuth";
import { useEffect } from "react";

const useStudent = () => {
  const { user } = useAuth();

  const [isStudent, setIsStudent]= useState()
  useEffect(()=>{
    fetch(`https://summer-school-server-inky.vercel.app/user/user/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setIsStudent(data.admin))
  },[setIsStudent])
     
    return isStudent;
 
};

export default useStudent;
