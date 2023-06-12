import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const ClassCard = ({ item }) => {
const navigate = useNavigate()
const location = useLocation()
const {user}=useContext(AuthContext)
  const { _id, clasname, instructor, description, img, price,availableSeats,status } = item

  const handleAddClass = add =>{

    if(user && user.email){
      const selectedClass = { classId: _id,classname: clasname,instructor: instructor,description: description,img: img,price: price,availableSeats: availableSeats,status: status , email: user.email}
      fetch('https://summer-school-server-inky.vercel.app/myaddclass',{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(selectedClass)

      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your class has been saved',
            showConfirmButton: false,
            timer: 1500
          })
            
          
        }
      })
    }

    else{
      Swal.fire({
        title: 'please login to select class',
      
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'login now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from: location}})
        }
      })
    }
    console.log(add);
  }

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
          <button onClick={()=>handleAddClass(item)} className="btn btn-accent text-primary absolute bottom-2 right-2 mx-auto">select</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
