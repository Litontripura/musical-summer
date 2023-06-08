import { FiMusic } from 'react-icons/fi';
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
    <div className='text-white'>
      <h1 className='flex justify-center items-center font-bold text-2xl'>
        <span className='text-4xl font-bold text-orange-500'>M</span>
        <span>usical</span>
        <span className={`icon text-4xl ${isSpinning ? 'spin' : ''}`}><FiMusic /></span>
        <span className='text-4xl font-bold text-orange-500'>S</span>
        <span>ummer</span>
      </h1>
    </div>
  );
};

export default Logo;
