
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';


const useAddClass = () => {
    const {user}=useContext(AuthContext)
    const token = localStorage.getItem('token')
     console.log(user);
   
     const {refetch, data: myaddclass =[]}= useQuery({
        queryKey: ['myaddclass', user?.email],
      
        queryFn: async ()=>{
            const res = await fetch(`https://summer-school-server-inky.vercel.app/myaddclass?email=${user?.email}`,{
                headers:{
                    authorization :`bearer ${token}`
                }
            });
            return res.json()
        },
     })


     return [myaddclass, refetch]
  
};

export default useAddClass;