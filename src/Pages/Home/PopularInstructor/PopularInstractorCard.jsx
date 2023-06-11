import React from 'react';

const PopularInstractorCard = ({instuctor}) => {
    const {name, role, photo , email}=instuctor
    console.log(instuctor);
    return (
        <div className="md:flex flex-row-reverse items-center w-full md:w-4/5 my-2 mx-auto shadow-lg rounded-lg overflow-hidden p-2 bg-primary">
        <img
          className="md:w-3/5 md:h-96 object-cover object-center"
          src={photo}
          alt="Course"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl text-white mb-2">Instructor: {name}</div>
          <p className="text-white mb-3">email: {email}</p>
        
        </div>
      </div>
    );
};

export default PopularInstractorCard;