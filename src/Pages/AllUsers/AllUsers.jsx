import { useQuery } from "@tanstack/react-query";
import { AiTwotoneDelete } from "react-icons/ai";
import "./alluser.css";
import Loading from "../../Components/Loading";
import toast, { Toaster } from 'react-hot-toast';

const AllUsers = () => {
  const admin = () => toast.success('Add admin successfully');
  const instructor = () => toast.success('Add instructor successfully');
  const userDelete = () => toast.success('User deleted successfully');
  const { data: users = [], isLoading, refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://summer-school-server-inky.vercel.app/users");
    return res.json();
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://summer-school-server-inky.vercel.app/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        admin();
        refetch();
      });
  };
  
  const handleMakeInstructor = (id) => {
    fetch(`https://summer-school-server-inky.vercel.app/users/instructor/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        instructor();
        refetch();
      });
  };

  const handleDeleteUser = (id) => {
    fetch(`https://summer-school-server-inky.vercel.app/deletuser/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        userDelete();
        refetch();
      });
  };
  
  return (
    <div className="overflow-x-auto text-primary">
      <h1 className="text-center font-bold text-2xl">All users</h1>
      
      {isLoading ? (
        <Loading />
      ) : (
        <table className="table radius text-center rounded-lg">
          <Toaster />
          <thead className="text-primary">
            <tr>
              <th>index</th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th></th>
              <th>delete user</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <div className="badge badge-primary cursor-pointer text-white bg-gray-300" disabled>
                      make admin
                    </div>
                  ) : (
                    <div onClick={() => handleMakeAdmin(user._id)} className="badge badge-primary cursor-pointer text-white">
                      make admin
                    </div>
                  )}
                  {user.role === "instructor" ? (
                    <div className="badge badge-primary ml-2 text-white bg-gray-300 cursor-pointer" disabled>
                      make instructor
                    </div>
                  ) : (
                    <div onClick={() => handleMakeInstructor(user._id)} className="badge badge-primary ml-2 text-white cursor-pointer">
                      make instructor
                    </div>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(user._id)} className="btn-accent p-1 rounded-full text-2xl text-orange-700">
                    <AiTwotoneDelete></AiTwotoneDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllUsers;
