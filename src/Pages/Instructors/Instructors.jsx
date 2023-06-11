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
        <div className='py-10'>
            <h1 className='text-4xl text-primary font-bold py-5 text-center'>Our Instructors</h1>
           {
            isLoading ? <Loading></Loading> : <div className='md:grid md:grid-cols-4 md:gap-5 grid-col-1'>
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