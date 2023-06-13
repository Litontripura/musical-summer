import {motion} from 'framer-motion';

const MyClassCard = ({item, handleDeleteClass, handlePayment}) => {
    const { _id, clasname, instructor, description, img, price,availableSeats,status } = item

    const buttonVariants ={
        hover:{
          scale:1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }
      }
    const buttonVariants2 ={
        hover:{
          scale:1.1,
          textShadow: "0px 0px 8px #E88064",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }
      }
    return (
        <div className="card  bg-primary shadow-xl p-2 h-[500px] my-5 relative">
      <figure><img className='h-[300px]' src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">{clasname}</h2>
        <p className='text-white'> {description}</p>
        <p className='text-white'>Instructor {instructor}</p>
        <p className='text-white'>price ${price}</p>
        <p className='text-white'>Available Seats {availableSeats}</p>
        <div className="card-actions flex justify-between items-center">
        <motion.button 
          variants={buttonVariants2}
          whileHover='hover'
          onClick={()=>handleDeleteClass(item)} className="btn bg-orange-700 hover:text-white hover:bg-orange-600 text-primary absolute bottom-2 left-64 mx-auto">delete class</motion.button>
          
        <motion.button 
          variants={buttonVariants}
          whileHover='hover'
          onClick={()=>handlePayment(item)} className="btn btn-accent text-primary absolute bottom-2 right-2 mx-auto">Pay</motion.button>
        </div>
      </div>
    </div>
    );
};

export default MyClassCard;