import React from 'react';
import { TbError404 } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
       
         
             <div className=''>
              <div className=''>
              <TbError404 className='text-orange-600 text-[500px]'></TbError404>
              </div>
             <h1 className='text-primary text-[30px] text-center mt-[-100px] font-bold'>Page not found</h1>
             <p className='text-primary font-bold text-center'>go to <Link to='/'>Home</Link></p>
             </div>
       
        </div>
    );
};

export default Error;