import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MyAddClasses = () => {
  const { user } = useContext(AuthContext);
  const [myaddedClasses, setMyAddedClass] = useState([]);

  useEffect(() => {
    fetch(`https://summer-school-server-inky.vercel.app/instructorAddclass?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setMyAddedClass(data));
  }, []);
  console.log(myaddedClasses);



  return (
    <div>
         <Helmet>
        <title>dashboard / my added classes</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className='text-primary font-bold text-center text-4xl'>My Added Classes : {myaddedClasses.length}</h1>
      <div className="grid grid-cols-3 gap-3">
        {myaddedClasses?.map(item => (
          <div key={item._id} className="w-[250px] bg-slate-400 p-3 my-2 rounded text-white">
            <img src={item.img} alt="" />
            <p>Class Name: {item.cours}</p>
            <p>enrolled: {item.enrol}</p>
            <p>Course Price: ${item.price}</p>
            <p>Status: {item.status}</p>


            <Link to={`update/${item._id}`}>
              <button className='px-3 py-1 bg-primary rounded-lg'>update</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddClasses;
