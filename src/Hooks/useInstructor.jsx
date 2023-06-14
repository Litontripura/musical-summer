import { useState } from "react";
import useAuth from "./useAuth";
import { useEffect } from "react";

const useInstructor = () => {
  const { user } = useAuth();

  const [isInstructor, setIsInstructor]= useState()
  useEffect(()=>{
    fetch(`https://summer-school-server-inky.vercel.app/user/instructor/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setIsInstructor(data.admin))
  },[setIsInstructor])
     
    return isInstructor;
 
};

export default useInstructor;
