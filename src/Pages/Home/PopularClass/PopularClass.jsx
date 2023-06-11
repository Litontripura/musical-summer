import React, { useEffect, useState } from 'react';
import PopularCard from './PopularCard';
import Container from '../../../Shared/Container';

const PopularClass = () => {
    const [popular, setPopular]=useState([])
    useEffect(()=>{
        fetch('https://summer-school-server-inky.vercel.app/classShort')
        .then(res=>res.json())
        .then(data=>setPopular(data))
    },[])
    console.log(popular);
    return (
      <Container>
          <div className='mt-24'>
           <h1 className='text-primary font-bold text-4xl text-center'>Our Popular Classes</h1>
           <div className='md:grid md:grid-cols-1  p-5 gap-5'>
           {
                popular.map(item=><PopularCard
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