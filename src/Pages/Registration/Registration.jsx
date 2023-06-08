import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Button from "../../Shared/Button";
import toast, { Toaster } from "react-hot-toast";
import Container from "../../Shared/Container";

const Registration = () => {
  const notify = () => toast("user created successfully");
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirmPass.value;
    const photo = form.photo.value;
    console.log(name, email, password, confirmPass, photo);
    const userInfo = {
      name: name,
      email: email,
      photo: photo,
      role: "student",
    };
    createUser(email, password)
      .then((result) => {
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              notify();
            }
            console.log(data);
            form.reset();
          });
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <div className="min-h-screen bg-secondary w-full">
      <div className="hero-content bg-secondary rounded-2xl">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-primary">
          <form onSubmit={handleSubmit} className="card-body text-white">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your Name"
                className="input input-bordered text-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                name="confirmPass"
                type="password"
                placeholder="Enter your confirm password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photo url</span>
              </label>
              <input
                name="photo"
                type="password"
                placeholder="Enter your confirm photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <Toaster></Toaster>
              <Button>
              
                <input className="cursor-pointer" type="submit" value="Register" />
              </Button>
            </div>

            <div className="form-control mt-6">
              <Button>Hi</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Registration;
