import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../Components/Loading';
import AdminAllCassCard from './AdminAllCassCard';
import toast, { Toaster } from 'react-hot-toast';

const AdminAllClasses = () => {
    const aprovedclass = () => toast.success('class aproved successfully');
    const [classes, setClasses]=useState([])
    const [loading, setLoading]=useState(true)
    useEffect(()=>{
        fetch('https://summer-school-server-inky.vercel.app/classes')
        .then(res=>res.json())
        .then(data=>{
          
            setClasses(data)
            setLoading(false)
        })
    },[])
  console.log(classes);
    if(loading){
        return <Loading></Loading>
    }
    const handleAprove =(id)=>{
        console.log(id);
        fetch(`https://summer-school-server-inky.vercel.app/classes/aproved/${id}`, {
            method: "PATCH",
          })
            .then((res) => res.json())
            .then((data) => {
                aprovedclass()
                console.log(data);
            //   instructor();
            //   refetch();
            });
    }
    const handleDeneid =(id)=>{
        console.log(id);
    }
    return (
        <div>
            <h1 className='text-primary text-4xl font-bold text-center py-5'>Manage All Classes</h1>
            <Toaster></Toaster>

          <div className='grid grid-cols-3 gap-3'>
          {
                classes.map(item=><AdminAllCassCard
                key={item._id}
                item={item}
                handleAprove={handleAprove}
                handleDeneid={handleDeneid}
                ></AdminAllCassCard>)
            }
          </div>
        </div>
    );
};

export default AdminAllClasses;