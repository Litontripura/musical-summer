
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../Components/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div className="flex items-center justify-center md:justify-start">
            <Logo className="text-white text-3xl" />
            <span className="ml-2 text-white text-lg font-bold">Creative Summer</span>
          </div>

        
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2 mb-2">
              <FaPhone className="text-white" />
              <a href="tel:+1234567890" className="text-white hover:text-gray-400">
                +1 234 567 890
              </a>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <FaEnvelope className="text-white" />
              <a
                href="mailto:info@creativesummer.com"
                className="text-white hover:text-gray-400"
              >
                info@creativesummer.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-white" />
              <span className="text-white">
                123 Street, City, Country
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center md:justify-end text-white">
            <p>&copy; {new Date().getFullYear()} Creative Summer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
