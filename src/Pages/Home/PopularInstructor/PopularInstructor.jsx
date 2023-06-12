import React, { useEffect, useState } from 'react';
import PopularInstractorCard from './PopularInstractorCard';

const PopularInstructor = () => {
    const [instructors, setInstructor]=useState([])
    useEffect(()=>{
        fetch('https://summer-school-server-inky.vercel.app/instructor')
        .then(res=>res.json())
        .then(data=>setInstructor(data))
    },[])
   
    const slicedInstructors = instructors.slice(0, 6);
    return (
        <div className='py-10'>
            <h1 className='text-4xl font-bold text-primary text-center my-10'>Our popular instructors</h1>
            <div>
                {
                    slicedInstructors.map(instuctor=><PopularInstractorCard
                    key={instuctor._id}
                    instuctor={instuctor}

                    ></PopularInstractorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;