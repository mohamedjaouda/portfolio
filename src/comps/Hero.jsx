import React from 'react'
import { useParallax } from "react-scroll-parallax";



const Hero = () => {

    const { ref } = useParallax({ speed: 8 });

  return (
    <header>
      <div ref={ref} className=" md:w-[50rem] container mx-auto pt-20 md:pt-0 px-4 md:px-16 lg:px-6 md:h-max">
        <div className="mx-auto flex flex-col justify-start space-y-28 md:space-y-56 sm:px-30 md:py-24">
          <h1 id="hero" className="text-white text-8xl md:text-9xl md:tracking-widest">
            HI.
          </h1>
          <div className='flex flex-col md:space-y-2'>
            <h3
              id="my-name"
              className="text-white text-3xl md:text-5xl lg:text-6xl w-max font-bold md:tracking-widest"
            >
              I'M MOHAMED JAOUDA
            </h3>
            <h5 className="text-white tracking-widest text-xl md:text-4xl font-bold ">
              FRONTEND DEVELOPER
            </h5>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero