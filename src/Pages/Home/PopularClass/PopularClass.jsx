import React, { useContext, useEffect, useState } from 'react';
import PopularCard from './PopularCard';
import Container from '../../../Shared/Container';
import { motion } from "framer-motion"
import { AuthContext } from '../../../Providers/AuthProviders';


const PopularClass = () => {
  
    const [popular, setPopular]=useState([])
    useEffect(()=>{
        fetch('https://summer-school-server-inky.vercel.app/classShort')
        .then(res=>res.json())
        .then(data=>setPopular(data))
    },[])


   
 
    const slicedInstructors = popular.slice(0, 6);
   

    return (
      <Container>
          <div className='mt-24 progress-bar'  >
           <motion.h1 
            initial={{x:-1000}}
            animate={{x:-10}}
            transition={{delay: 1, duration:0.3, type:'spring', stiffness:300}}
           className='text-primary font-bold text-4xl text-center'>Our Popular Classes</motion.h1>
           <div className='md:grid md:grid-cols-1  p-5 gap-5'>
           {
                slicedInstructors.map(item=><PopularCard
                key={item._id}
                item={item}
                ></PopularCard>)
            }
           </div>
        </div>
      </Container>
    );
};

export default PopularClass;