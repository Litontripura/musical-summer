import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MyAddedClassCard from './MyAddedClassCard';

const MyAddClasses = () => {
    const {user}=useContext(AuthContext)
    const [myaddedClasses, setMyAddedClass]=useState([])
    useEffect(()=>{
        fetch(`https://summer-school-server-inky.vercel.app/instructorAddclass?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyAddedClass(data))
    },[])
    console.log(myaddedClasses);
  
    return (
        <div>
            <h1 className='text-primary font-bold text-center text-4xl'>My Added Classes : {myaddedClasses.length}</h1>
            {
                myaddedClasses.map(item=><MyAddedClassCard
                key={item._id}
                item={item}
                ></MyAddedClassCard>)
            }
        </div>
    );
};

export default MyAddClasses;