import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';
import Container from '../../Shared/Container';

const Classes = () => {
    const [classes, setClasses]=useState([])
    useEffect(()=>{
        fetch('https://summer-school-server-inky.vercel.app/classes')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setClasses(data)
        })
    },[])
    return (
       <Container>
         <div className='mx-auto bg-accent'>
          <div className='md:grid grid-cols-3 justify-center items-center mx-auto gap-5'>
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
       </Container>
    );
};

export default Classes;