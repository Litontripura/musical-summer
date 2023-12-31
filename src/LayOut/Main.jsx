
import Container from '../Shared/Container';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async";

const Main = () => {
    return (
        <Container>
        
           <Navbar></Navbar>
     
            <div className='md:mt-[73px]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </Container>
    );
};

export default Main;