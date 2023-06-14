
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';




const useAddClass = () => {
    const {user}=useContext(AuthContext)
   
    const [axiosSecure]= useAxiosSecure()
     console.log(user);
   
     const {refetch, data: myaddclass =[]}= useQuery({
        queryKey: ['myaddclass', user?.email],
      
        queryFn: async ()=>{
            const res = await axiosSecure(`/myaddclass?email=${user?.email}`);
            return res.data
        },
     })


     return [myaddclass, refetch]
  
};

export default useAddClass;