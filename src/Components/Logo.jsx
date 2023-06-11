import { BsMusicNoteBeamed } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import './Logo.css'


const Logo = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='text-primary bg-secondary p-3'>
      <h1 className='flex justify-center items-center font-bold text-2xl'>
        <span className='text-4xl font-bold text-orange-500'><BsMusicNoteBeamed></BsMusicNoteBeamed></span>
        <span>usical</span>
       
      <span>
   
      </span>
        
        <span className='text-4xl font-bold text-orange-500'>S</span>
        <span>ummer</span>
      </h1>
    </div>
  );
};

export default Logo;
