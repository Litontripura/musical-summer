import React from 'react';

const InstractorCard = ({instractor}) => {
    const {name, email, role, photo}=instractor
    return (
        <div className="card mt-10 md:m-0 bg-primary shadow-xl p-1">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">
         {name}
    </h2>
    <p>{name}'s email: {email}</p>
   
  </div>
</div>
    );
};

export default InstractorCard;