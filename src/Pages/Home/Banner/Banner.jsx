import Container from "../../../Shared/Container";

const Banner = () => {
  return (
    <Container>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1519076976365-9c64dbd98317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGlhbm8lMjBsZXNzb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-transparent hover:bg-primary">❮</a>
            <a href="#slide2" className="btn btn-circle bg-transparent hover:bg-primary">❯</a>
          </div>

          <div className="flex flex-col justify-center items-center px-5">
            <h1 className="text-primary font-bold text-4xl">Piano Lessons</h1>
            <p className="text-primary font-bold">
              Learn to play the piano with our experienced instructors. Master classical pieces or explore your own compositions..
            </p>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-transparent hover:bg-primary">❮</a>
            <a href="#slide3" className="btn btn-circle bg-transparent hover:bg-primary">❯</a>
          </div>

          <div className="flex flex-col justify-center items-center px-5">
            <h1 className="text-primary font-bold text-4xl">Guitar Lessons</h1>
            <p className="text-primary font-bold">
              Strum your way through guitar lessons and discover different playing styles like rock, jazz, and classical.
            </p>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmlvbGluJTIwTGVzc29uc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-transparent hover:bg-primary">❮</a>
            <a href="#slide4" className="btn btn-circle bg-transparent hover:bg-primary">❯</a>
          </div>

          <div className="flex flex-col justify-center items-center px-5">
            <h1 className="text-primary font-bold text-4xl">Violin Lessons</h1>
            <p className="text-primary font-bold">
              Experience the beauty of violin playing with our professional instructors. Develop your technique and express yourself through this elegant instrument.
            </p>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHJ1bSUyMExlc3NvbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-transparent hover:bg-primary">❮</a>
            <a href="#slide1" className="btn btn-circle bg-transparent hover:bg-primary">❯</a>
          </div>
          <div className="flex flex-col justify-center items-center px-5">
            <h1 className="text-primary font-bold text-4xl">Drum Lessons</h1>
            <p className="text-primary font-bold">
              Unleash your rhythm and groove with our drum lessons. Learn various beats, fills, and develop your own unique style.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
