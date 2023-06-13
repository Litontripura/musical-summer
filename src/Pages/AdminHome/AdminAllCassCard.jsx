import React from 'react';

const AdminAllCassCard = ({item, handleAprove,handleDeneid}) => {
    const {_id,img,classname, enroled, instructor, price, status, availableSeats, email}=item
    // Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied)
    return (
        <div className='w-[250px] bg-slate-400 p-3 my-2 rounded text-white'>
            <img src={img} alt="" />
            <p>class Name: {classname}</p>
            <p>Instructor : {instructor}</p>
            <p>Instructor email: {email}</p>
            <p>Available Sites: {availableSeats}</p>
            <p>Cours Price: ${price}</p>
            <p>status : {status}</p>
            <div className='flex justify-between mt-3'>
                <button onClick={()=>handleAprove(_id)} className='py-1 rounded px-3 bg-primary text-white'>Approve</button>
                <button onClick={()=>handleDeneid(_id)} className='py-1 rounded px-3 bg-primary text-white'>denied</button>
            </div>
        </div>
    );
};

export default AdminAllCassCard;