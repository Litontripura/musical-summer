import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Container from "./Container";
import { AuthContext } from "../Providers/AuthProviders";
import ActiveLink from "../Routes/ActiveLink";
import Logo from "../Components/Logo";
import { RxAvatar } from "react-icons/rx";
import {motion} from 'framer-motion'
import { Helmet } from "react-helmet-async";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("Logout successful");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const navOptions = (
    <>
        <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <motion.li 
      whileHover={{ color:'#FFFFFF'}}
      className="py-2 md:py-0 lg:py-0 text-primary">
        <ActiveLink exact to="/">
          Home
        </ActiveLink>
      </motion.li>
      <li className="py-2 md:py-0 lg:py-0 text-primary">
        <ActiveLink to="/instructors">
          Instructors
        </ActiveLink>
      </li>
      <li className="py-2 md:py-0 lg:py-0 text-primary">
        <ActiveLink to="/classes">
          Classes
        </ActiveLink>
      </li>
      {user && (
        <li className="py-2 md:py-0 lg:py-0 text-primary">
          <ActiveLink to="/dashboard">
            Dashboard
          </ActiveLink>
        </li>
      )}
      
    </>
  );

  return (
    <Container>
      <nav className="bg-accent fixed top-0 left-0 right-0 z-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <div className="flex-shrink-0">
                  <Logo />
                </div>
              </Link>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="hidden md:block">
                <ul className="ml-4 block md:flex items-center space-x-4 navbar">
                  {navOptions}
                </ul>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <AiOutlineClose className="block h-6 w-6" />
                ) : (
                  <AiOutlineMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
            {user ?  (
              <div className="md:flex  gap-2">
                 
                <img
                  className="h-[40px] w-[40px] rounded-full ml-2"
                  src={user.photoURL}
                  alt=""
                />
                <button className="text-primary" onClick={handleLogout}>Logout</button>
               
              </div>
            ):(<span className="flex items-center gap-2 py-2 md:py-0 lg:py-0 text-primary">
              <RxAvatar className="text-3xl"></RxAvatar>
            <ActiveLink to="/login">
              Login
            </ActiveLink>
               </span>)}
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:hidden transition duration-500 ease-in-out`}>
          <ul className="px-2 flex flex-col pt-2 pb-3 space-y-1 sm:px-3 navbar justify-start">
            {navOptions}
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
