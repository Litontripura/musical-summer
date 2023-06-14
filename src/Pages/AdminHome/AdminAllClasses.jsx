import { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const AdminAllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://summer-school-server-inky.vercel.app/classes')
      .then(res => res.json())
      .then(data => {
        setClasses(data);
        setLoading(false);
      });
  }, []);

  const aprovedclass = () => toast.success('Class approved successfully');
  const deneid = () => toast.success('Class deneid successfully');

  const handleApprove = id => {
    fetch(`https://summer-school-server-inky.vercel.app/classes/aproved/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        aprovedclass();
        // Update the status on the UI
        setClasses(prevClasses => {
          return prevClasses.map(item => {
            if (item._id === id) {
              return { ...item, status: 'approved' };
            }
            return item;
          });
        });
      });
  };

  const handleDeny = id => {
    console.log(id);
    fetch(`https://summer-school-server-inky.vercel.app/classes/deneid/${id}`, {
        method: 'PATCH',
      })
        .then(res => res.json())
        .then(data => {
            deneid();
          // Update the status on the UI
          setClasses(prevClasses => {
            return prevClasses.map(item => {
              if (item._id === id) {
                return { ...item, status: 'deneid' };
              }
              return item;
            });
          });
        });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
         <Helmet>
        <title>dashboard | manageclasses</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="text-primary text-4xl font-bold text-center py-5">Manage All Classes</h1>
      <Toaster />

      <div className="grid grid-cols-3 gap-3">
        {classes.map(item => (
          <div key={item._id} className="w-[250px] bg-slate-400 p-3 my-2 rounded text-white">
            <img src={item.img} alt="" />
            <p>Class Name: {item.classname}</p>
            <p>Instructor: {item.instructor}</p>
            <p>Instructor Email: {item.email}</p>
            <p>Available Seats: {item.availableSeats}</p>
            <p>Course Price: ${item.price}</p>
            <p>Status: {item.status}</p>
            <div className="flex justify-between mt-3">
              <button onClick={() => handleApprove(item._id)} className="py-1 rounded px-3 bg-primary text-white">
                Approve
              </button>
              <button onClick={() => handleDeny(item._id)} className="py-1 rounded px-3 bg-primary text-white">
                Deny
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAllClasses;
