

const Registration = () => {
        const handleSubmit =(event)=>{
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const confirmPass = form.confirmPass.value;
            console.log(name, email, password, confirmPass);
        }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Create account to Creative Summer</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Enter your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input name="confirmPass" type="password" placeholder="Enter your confirm password" className="input input-bordered" />
        
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Registration;