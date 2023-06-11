import { useQuery } from '@tanstack/react-query';
import React from 'react';
import InstractorCard from './InstractorCard';
import Loading from '../../Components/Loading';

const Instructors = () => {
    const { data: users = [],isLoading, refetch } = useQuery(["users"], async () => {
        const res = await fetch("https://summer-school-server-inky.vercel.app/users");
        return res.json();
      });
      console.log(users);
      const instructors = users.filter(instructor=> instructor.role ==='instructor')
    return (
        <div>
            <h1>Our Instructors</h1>
           {
            isLoading ? <Loading></Loading> : <div className='md:grid grid-cols-3 gap-5'>
            {
                 instructors.map(instractor=><InstractorCard
                 key={instractor._id}
                 instractor={instractor}
                 ></InstractorCard>)
             }
            </div>
           }
        </div>
    );
};

export default Instructors;