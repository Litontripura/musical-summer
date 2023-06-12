
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
const useAddClass = () => {
    const {user, loading}=useContext(AuthContext)
     const {isLoading,refetch, data: classes =[]}= useQuery({
        queryKey: ['addclass', user.email],
        enabled:!loading,
        queryFn: async ()=>{
            const res = await fetch(`https://summer-school-server-inky.vercel.app?email=${user.email}`)
            return res.json()
        },
     })
     return [classes, refetch]
  
};

export default useAddClass;