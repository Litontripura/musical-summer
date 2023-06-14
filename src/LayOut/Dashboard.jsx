import { FaBars, FaHome, FaUsersCog, FaUsers } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";

import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import ActiveLink from "../Routes/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Container from "../Shared/Container";
import useAdmin from "../Hooks/useAdmin";
import { Helmet } from "react-helmet-async";
import useInstructor from "../Hooks/useInstructor";
import useStudent from "../Hooks/useStudent";

const Dashboard = () => {
  // TODO

  const isInstructor = useInstructor();
  
  const isAdmin = useAdmin();

 const isStudent = useStudent()

  const navOptions = (
    <>
      {isAdmin == true && (
        <>
          <li className="py-2 md:py-0 lg:py-0 text-white">
            <ActiveLink to="allusers" activeClassName="text-white">
              <FaUsers></FaUsers> Manage users
            </ActiveLink>
          </li>
          <li className="py-2 md:py-0 lg:py-0 text-white">
            <ActiveLink to="allclasses" activeClassName="text-white">
              <MdOutlineClass></MdOutlineClass> Manage classes
            </ActiveLink>
          </li>
        </>
      )}

      {isInstructor == true && (
        <li className="py-2 md:py-0 lg:py-0 text-white">
          <ActiveLink to="myaddedclass" activeClassName="text-white">
            my added class
          </ActiveLink>
          <ActiveLink to="addclass" activeClassName="text-white">
            add classe
          </ActiveLink>
        </li>
      )}
      {isStudent  == true && (
        <>
          <li className="py-2 md:py-0 lg:py-0 text-white">
            <ActiveLink to="myselectedclass" activeClassName="text-white">
              My Selected Classes
            </ActiveLink>
          </li>
          <li className="py-2 md:py-0 lg:py-0 text-white">
            <ActiveLink to="students" activeClassName="text-white">
              my enrolled class
            </ActiveLink>
          </li>
        </>
      )}

      <li className="py-2 md:py-0 lg:py-0 text-white">
        <ActiveLink to="/" activeClassName="text-white">
          <FaHome></FaHome>Back to Home
        </ActiveLink>
      </li>
    </>
  );
  return (
    <Container>
      <Helmet>
        <title>dashboard</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
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
