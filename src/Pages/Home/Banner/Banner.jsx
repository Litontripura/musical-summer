import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import Container from "../../../Shared/Container";


const Banner = () => {
   
    return (
       <Container>
        <div className="mt-10">
        <Carousel className="">
         
         <div className="relative">
            <img src='https://images.unsplash.com/photo-1519076976365-9c64dbd98317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGlhbm8lMjBsZXNzb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt="" />
            <h1 className="absolute top-24 left-24 z-10 text-5xl font-bold text-primary shadow-lg">Piano Lessons</h1>
         </div>
         <div className="relative">
            <img className="" src='https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt="" />
            <h1 className="absolute top-6 left-5 z-10">Guitar Lesson</h1>
         </div>
      
     </Carousel>
        </div>
       </Container>
    );
};

export default Banner;