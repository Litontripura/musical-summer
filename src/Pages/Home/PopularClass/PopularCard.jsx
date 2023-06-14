


const PopularCard = ({item}) => {

    const {img,cours,displayName,availableSeats,price,status,enrol}=item

    return (
  
        <div 
     
        className="md:flex items-center w-full md:w-4/5 my-2 mx-auto shadow-lg rounded-lg overflow-hidden p-2 bg-secondary">
      <img
        className="md:w-3/5 md:h-96 object-cover object-center"
        src={img}
        alt="Course"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl text-primary mb-2">{cours}</div>
        <p className="text-primary mb-3">Instractor: {displayName}</p>
        <p className="text-primary mb-3">Available Seats: {availableSeats}</p>
        <p className="text-primary mb-3">Price: ${price}</p>
        <p className="text-primary mb-3">Status: {status}</p>
        <p className="text-primary mb-3">Enrolled: {enrol}</p>
      </div>
    </div>
    );
};

export default PopularCard;