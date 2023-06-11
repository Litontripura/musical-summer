import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './style.css';

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function App() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 h-[600px]" style={{ marginRight: '20px' }}>
            <img src="https://images.unsplash.com/photo-1519076976365-9c64dbd98317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGlhbm8lMjBsZXNzb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="carousel__cell number-slide2" style={{ marginRight: '40px' }}>
            <img src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="carousel__cell number-slide3" style={{ marginRight: '40px' }}>
            <img src="https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmlvbGluJTIwTGVzc29uc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="carousel__cell number-slide4" style={{ marginRight: '40px' }}>
            <img src="https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHJ1bSUyMExlc3NvbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="carousel__cell number-slide5" style={{ marginRight: '40px' }}>
            <img src="https://images.unsplash.com/photo-1530547253710-9bdf4c648014?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rmx1dGUlMjBMZXNzb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="carousel__cell number-slide6">
            <img src="https://images.unsplash.com/photo-1489582636924-5b46e9fa372c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFRydW1wZXQlMjBMZXNzb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
