import { useContext, useState } from "react";
import Logo from "../Components/Logo";
import { Link} from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Container from "./Container";
import { AuthContext } from "../Providers/AuthProviders";
import ActiveLink from "../Routes/ActiveLink";

const Navbar = () => {
  const {user,logOut}= useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = ()=>{
    logOut()
    .then((result)=>{
      console.log(result);

    })
    .then((error)=>{
      console.log(error);
    })
  }

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
    <Container>
      <nav className="bg-primary fixed top-0 left-0 right-0 z-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <div className="flex-shrink-0">
                  <Logo></Logo>
                </div>
              </Link>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="hidden md:block">
                <ul className="ml-4 flex items-baseline space-x-4">
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
                aria-expanded="false"
              >
                {isOpen ? (
                  <AiOutlineClose className="block h-6 w-6" />
                ) : (
                  <AiOutlineMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden transition duration-500 ease-in-out`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{navOptions}</ul>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
