
import useAuth from "./useAuth";

import { useEffect, useState } from "react";

const useAdmin = () => {
    const [isAdmin, setIsAdmin] = useState();
    const { user } = useAuth();
     
    useEffect(() => {
        fetch(`http://localhost:5000/user/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);
   
    return isAdmin; // Add this line to return the isAdmin value
    
};

export default useAdmin;
