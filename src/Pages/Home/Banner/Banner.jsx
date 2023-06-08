import { useEffect, useState } from "react";
import Container from "../../../Shared/Container";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSpring, animated } from '@react-spring/web'

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const springs = useSpring({
   from: { x: 0 },
   to: { x: 100 },
 })
  useEffect(() => {
    fetch("banner.json")
      .then((response) => response.json())
      .then((data) => setBannerData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <div className="mt-10">
        <Carousel className="">
          {bannerData.map((item, index) => (
            <div className="relative" key={index}>
              <img
                src={item.picture}
                alt={item.title}
                className="banner-image h-50"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="text-5xl font-bold text-white relative z-10">
                  {item.title}
                </h1>
                <p className="text-white font-bold w-30 relative z-10">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Banner;
