import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../Providers/AuthProviders";
import SocialLogin from "../../SocialLogin/SocialLogin";
import axios from "axios";
import './Registration.css'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-right",
        duration: 1500,
        style: {
          backgroundColor: "gray",
          color: "#fff",
        },
      });
      return;
    }

    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email, role:"student",photo:data.photoURL };
            axios.post("https://summer-school-server-inky.vercel.app/users", saveUser, {
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((response) => {
                if (response.data.insertedId) {
                  reset();
                  toast.success("User created successfully.", {
                    position: "top-right",
                    duration: 1500,
                    style: {
                      backgroundColor: "gray",
                      color: "#fff",
                    },
                  });
                  navigate("/");
                }
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className=" min-h-screen py-10">
        <div className="md:w-1/3 mx-auto">
          <div className="rounded shadow-2xl bg-secondary border2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-3xl font-bold text-primary">Sign up now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered text-primary"
                />
                {errors.name && (
                  <span className="text-orange-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered text-primary"
                />
                {errors.photoURL && (
                  <span className="text-orange-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
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
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                  placeholder="password"
                  className="input input-bordered text-primary"
                />
                {errors.password?.type === "required" && (
                  <p className="text-orange-700">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-orange-700">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-orange-700">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-orange-700">
                    Password must have one Uppercase and one special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === password.current || "Passwords do not match",
                  })}
                  placeholder="confirm password"
                  className="input input-bordered text-primary"
                />
                {errors.confirmPassword && (
                  <p className="text-orange-700">{errors.confirmPassword.message}</p>
                )}
              </div>
              <div className="form-control mt-6 w-full">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className="text-center">
              <small className="text-primary">
                Already have an account please <Link to="/login">Login</Link>
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

export default SignUp;
