import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';

const Classes = () => {
    const [classes, setClasses]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setClasses(data)
        })
    },[])
    return (
        <div className='mx-auto'>
            <h1>{classes.length}</h1>
          <div className='grid grid-cols-2 justify-center items-center mx-auto'>
          {
            classes.map(item=>
                <ClassCard
                key={item._id}
                item={item}
                ></ClassCard>
            )
           }
          </div>
        </div>
    );
};

export default Classes;