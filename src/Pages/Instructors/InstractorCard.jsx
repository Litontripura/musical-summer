import React from 'react';

const InstractorCard = ({instractor}) => {
    const {name, email, role, photo}=instractor
    return (
        <div className="card  bg-primary shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">
         {name}
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default InstractorCard;