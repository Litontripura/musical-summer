import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from 'react-icons/fa';
import './Login.css';

import SocialLogin from "../../SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProviders";
import Logo from "../../Components/Logo";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
 const navigate = useNavigate()
 const location = useLocation()
 const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, loading } = useContext(AuthContext);
 

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(data);
    signIn(email, password)
      .then(result => {
        const user = result.user
        Swal.fire({
          title:"User Login successfully",
      
        });
        navigate(from,{replace: true})
        setError('');

        console.log(result);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <>
      <div className="min-h-screen my-10">
        <div className="md:w-1/3 mx-auto">
          <div className="rounded shadow-2xl bg-secondary py-5 border2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <p className="text-orange-700">{error}</p>
              <Logo />
              <h1 className="text-3xl font-bold text-primary text-center my-5">Please Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Email"
                  className="input input-bordered text-primary"
                />
                {errors.email && (
                  <span className="text-orange-700">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary">Password</span>
                </label>
                <div className="password-input relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register("password", { required: true })}
                    placeholder="Password"
                    className=" input input-bordered text-primary w-full"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-4 z-30"
                  >
                    {showPassword ? <FaRegEyeSlash className="bg-primary h-[15px] w-[15px] rounded-full"/> : <FaEye className="bg-primary h-[15px] w-[15px] rounded-full"/>}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-orange-700">Password is required</span>
                )}
              </div>
              <div className="form-control mt-6 w-full">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center">
              <small className="text-primary">
                Don't have an account? <Link to="/registration">Sign up</Link>
              </small>
            </p>
            <div className="w-full">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
