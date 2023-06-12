import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import ActiveLink from "../Routes/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Container from "../Shared/Container";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  // TODO
  const isAdmin=useAdmin()
  
  // const isAdmin = true;
  const isInstructor = true;
  const isStudent = false;
  const { user } = useContext(AuthContext);
  const navOptions = (
    <>
      {isAdmin === true && (
        <>
         
          <li className="py-2 md:py-0 lg:py-0">
            <ActiveLink exact to="adminHome" activeClassName="text-white">
              Admin Home
            </ActiveLink>
          </li>
          <li className="py-2 md:py-0 lg:py-0">
            <ActiveLink to="allusers" activeClassName="text-white">
              Manage users
            </ActiveLink>
           
          </li>
          <li className="py-2 md:py-0 lg:py-0">
            <ActiveLink to="allclasses" activeClassName="text-white">
              Manage classes
            </ActiveLink>
           
          </li>
        </>
      )}
      {isInstructor === true && (
        <li className="py-2 md:py-0 lg:py-0">
          <ActiveLink to="instructorsHome" activeClassName="text-white">
            Instructors Home
          </ActiveLink>
          <ActiveLink to="addclass" activeClassName="text-white">
              add classe
            </ActiveLink>
        </li>
      )}
      {isStudent && (
        <>
          <li className="py-2 md:py-0 lg:py-0">
          <ActiveLink to="myaddclass" activeClassName="text-white">
           My Selected Classes
          </ActiveLink>
        </li>
        <li className="py-2 md:py-0 lg:py-0">
          <ActiveLink to="students" activeClassName="text-white">
            my enrolled class
          </ActiveLink>
        </li>
        </>
      )}

      <li className="py-2 md:py-0 lg:py-0">
        <ActiveLink to="/" activeClassName="text-white">
          Home
        </ActiveLink>
      </li>
    </>
  );
  return (
   <Container>
     <div className="p-5 bg-accent">
      <div className="drawer lg:drawer-open bg-primary p-2 radius1">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-secondary radius2">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden right-0"
          >
            <FaBars></FaBars>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content">
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
   </Container>
  );
};

export default Dashboard;
