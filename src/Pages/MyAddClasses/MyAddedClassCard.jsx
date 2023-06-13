import React from 'react';

const MyAddedClassCard = ({item}) => {
    const { _id, cours, instructor, description, img, price, availableSeats, status } = item;
    return (
        <div className={`card bg-primary shadow-xl p-2 h-[500px] my-5 relative ${availableSeats === 0 ? 'bg-red-500' : ''}`}>
      <figure>
        <img className="h-[300px]" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">Class Name: {cours}</h2>
        <p className="text-white">About Class {description}</p>
       
        
        <p className="text-white">Price ${price}</p>
        <p className="text-white">Available Seats {availableSeats}</p>
        <div className="card-actions flex justify-center items-center">
          <button
            
            className="btn btn-accent text-primary absolute bottom-2 right-2 mx-auto"
           
          >
         Update
          </button>
        </div>
      </div>
    </div>
    );
};

export default MyAddedClassCard;