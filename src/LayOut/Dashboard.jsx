import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import './Dashboard.css'
import ActiveLink from "../Routes/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const Dashboard = () => {
  const {user}= useContext(AuthContext)
  const navOptions = (
    <>
      <li className="py-2 md:py-0 lg:py-0">
        <ActiveLink exact to="/" activeClassName="text-white">
          Home
        </ActiveLink>
      </li>
      <li className="py-2 md:py-0 lg:py-0">
        <ActiveLink to="/instructors" activeClassName="text-white">
          Instructors
        </ActiveLink>
      </li>
      <li className="py-2 md:py-0 lg:py-0">
        <ActiveLink to="/classes" activeClassName="text-white">
          Classes
        </ActiveLink>
      </li>
   
      <li className="py-2 md:py-0 lg:py-0">
        <ActiveLink to="/dashboard" activeClassName="text-white">
          Dashboard
        </ActiveLink>
      </li>
     {
      user ? <li>
      <button onClick={handleLogout}>Logout</button>
    </li> :  <li className="py-2 md:py-0 lg:py-0">
      <ActiveLink to="/login" activeClassName="text-white">
        Login
      </ActiveLink>
    </li>
     }
      <li className="py-2 md:py-0 lg:py-0">user</li>
    </>
  );
    return (
       
        <div className="p-5 bg-accent">
           <div className="drawer lg:drawer-open bg-primary p-2 radius1">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-secondary radius2">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden right-0"><FaBars></FaBars></label>
          
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full text-base-content">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        
        </div>
      </div>
        </div>
     
    );
};

export default Dashboard;