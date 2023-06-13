import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Loading from "../../Components/Loading";
import MyClassCard from "./MyClassCard";
import { useQuery } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";

const MyClass = () => {
  
  const { user } = useContext(AuthContext);

  const classDelete = () => toast.success('Class deleted successfully');

  const { data: myclass = [], isLoading, refetch } = useQuery(["myclass"], async () => {
    const res = await fetch(`https://summer-school-server-inky.vercel.app/myclass?email=${user?.email}`);
    return res.json();
  });

  if (isLoading) {
    return <Loading />;
  }

  const handlePayment = (item) => {
    console.log(item);
  };

  const handleDeleteClass = (item) => {
    fetch(`https://summer-school-server-inky.vercel.app/myDeletclass/${item._id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        classDelete();
       
      })
      .catch((error) => {
        console.error('Error deleting class:', error);
      });
  };

  return (
    <div>
      <h1 className="text-4xl text-primary text-center font-bold">My selected Classes</h1>
      <Toaster />
      {myclass.map((item) => (
        <MyClassCard
          key={item._id}
          item={item}
          handlePayment={handlePayment}
          handleDeleteClass={handleDeleteClass}
        />
      ))}
    </div>
  );
};

export default MyClass;
