import { useMutation } from "@tanstack/react-query";


const AddClass = () => {
  
    const addClassMutation = useMutation((classInfo) =>
    fetch('https://summer-school-server-inky.vercel.app/classesadd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(classInfo),
    }).then((res) => res.json())
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.image.value;
    const classname = form.classname.value;
    const instructor = form.instructor.value;
    const availableSeats = form.availableSeats.value;
    const price = form.price.value;
    const classInfo = {
      img: img,
      classname: classname,
      instructor: instructor,
      availableSeats: availableSeats,
      price: price,
      status: 'pending',
    };

    addClassMutation.mutate(classInfo);
  };

    return (
        <div className="w-full md:w-1/2 mx-auto border-primary">
        <h1 className="text-2xl font-bold text-center my-8">Add New Class</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-primary font-bold mb-2" htmlFor="image">
              Image URL
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
              name="classname"
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
              name="instructor"
              type="text"
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