import { useState } from "react";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
               <Link to='/'>
               <div className="flex-shrink-0">
               <Logo></Logo>
              </div>
               </Link>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="hidden md:block">
                <div className="ml-4 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;