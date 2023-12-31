import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';
import Container from '../../Shared/Container';
import Loading from '../../Components/Loading';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
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
    const aprovedClass = classes.filter(item=> item.status === 'approved')
    if(loading){
        return <Loading></Loading>
    }
    return (
       <Container>
           <Helmet>
        <title>Home | classes</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
         <div className='mx-auto bg-accent'>
          <div className='md:grid grid-cols-3 justify-center items-center mx-auto gap-5'>
          {
            aprovedClass.map(item=>
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