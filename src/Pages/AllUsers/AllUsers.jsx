import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"],async()=>{
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  console.log(users);
  return (
    <div className="overflow-x-auto text-primary">
      <p>{users.length}</p>
      <table className="table ">
        {/* head */}
        <thead className="text-primary">
          <tr>
            <th>index</th>
            <th>Name</th>
            <th>email</th>
            <th>role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                
                  <div>
                    <div className="font-bold">{user.name}</div>
                   
                  </div>
                </div>
              </td>
              <td>
             {user.email}
              </td>
              <td>{user.role}</td>
              <th>
                <button className="btn btn-primary text-white">delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
