import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user } = useAuth();

  const { data: isInstructor } = useQuery({
    queryKey: ["instructor", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user/instructor/${user?.email}`);
      const data = await res.json(); // Extract the data from the response
      return data; // Return the extracted data
    },
  });

  return [isInstructor];
};

export default useInstructor;
