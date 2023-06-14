import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import toast, { Toaster } from 'react-hot-toast';




const AddClass = () => {
  const notify = () => toast.success('Class added successfully');
  const { user } = useContext(AuthContext);

  
  const addClassMutation = useMutation((classInfo) =>
    fetch('https://summer-school-server-inky.vercel.app/classesadd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(classInfo),
    })
      .then((res) => res.json()),
     
      
  );
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.image.value;
    const cours = form.cours.value;
    const enrol = form.enrol.value;
    const availableSeats = form.availableSeats.value;
    const price = form.price.value;
    const displayName = form.displayName.value;

  
    const classInfo = {
      enrol: enrol,
      img: img,
      cours: cours,
      displayName: displayName,
      availableSeats: availableSeats,
      price: price,
      status: 'pending',
    
      email: user.email,
    };
  
    addClassMutation.mutate(classInfo);
    notify()
    form.reset()
  };
    return (
        <div className="w-full md:w-1/2 mx-auto border-primary">
        <h1 className="text-2xl font-bold text-center my-8">Add New Class</h1>
        <Toaster></Toaster>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-primary font-bold mb-2" htmlFor="image">
              Upload image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              name="image"
              type="text"
              placeholder="Enter the image URL"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary font-bold mb-2" htmlFor="name">
             Class Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="cours"
              type="text"
              placeholder="Enter the class name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary font-bold mb-2" htmlFor="instructor">
              Instructor
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              id="instructor"
           
              type="text"
              defaultValue={user?.displayName}
              name="displayName"
              readOnly
              placeholder="Enter the instructor's name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary font-bold mb-2" htmlFor="instructor">
              email 
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              id="instructor"
              name="email"
              type="text"
              defaultValue={user?.email}
              readOnly
              placeholder="Enter the instructor's name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary font-bold mb-2" htmlFor="availableSeats">
              Available Seats
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              id="availableSeats"
              name="availableSeats"
              type="number"
              placeholder="Enter the number of available seats"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary font-bold mb-2" htmlFor="availableSeats">
             enrol
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              id="availableSeats"
              name="enrol"
              type="number"
              placeholder="Enter the number of available seats"
              required
            />
          </div>
         
          <div className="mb-4">
            <label className="block text-primary font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              name="price"
              type="number"
              placeholder="Enter the price"
              required
            />
          </div>
          <div className="text-center">
            <button 
              className="btn btn-accent text-primary py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddClass;