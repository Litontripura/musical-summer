import React from 'react';

const ClassCard = ({ item }) => {


  const { _id, clasname, instructor, description, img, price,availableSeats,status } = item

  return (
    <div className="card bg-primary shadow-xl p-2 h-[500px] my-5 relative">
      <figure><img className='h-[300px]' src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">{clasname}</h2>
        <p className='text-white'> {description}</p>
        <p className='text-white'>Instructor {instructor}</p>
        <p className='text-white'>price ${price}</p>
        <p className='text-white'>Available Seats {availableSeats}</p>
        <div className="card-actions flex justify-center items-center">
          <button className="btn btn-accent text-primary absolute bottom-2 right-2 mx-auto">select</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
