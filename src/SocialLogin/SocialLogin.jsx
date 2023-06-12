import axios from 'axios';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProviders';


const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  
    const handleGoogleSignIn = async () => {
      try {
        const result = await signInWithGoogle();
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email , role:"student", photo: loggedInUser.photoURL};
        await axios.post("https://summer-school-server-inky.vercel.app/users", saveUser, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        navigate(from, { replace: true });
      } catch (error) {
        console.error("Google error:", error);
      }
    }; 
    return (
        <>
        <div className="divider bg-primary h-[1px]"></div>
        <div className="w-full text-center my-4 px-8">
          <button onClick={handleGoogleSignIn} className="btn btn-primary w-full">
            <FaGoogle /> Signup with google
          </button>
        </div>
      </>
    );
};

export default SocialLogin;