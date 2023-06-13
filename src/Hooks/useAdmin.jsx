import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user/admin/${user?.email}`);
      const data = await res.json(); // Extract the data from the response
      return data; // Return the extracted data
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
