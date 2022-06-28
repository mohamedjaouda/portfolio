import React, { useEffect, useState } from 'react'
import { useParallax } from "react-scroll-parallax";



const Hero = () => {
  
  const [scale, setScale] = useState(null)
  // const [windowScale, setWindowScale] = useState(window.screen.width)
  // console.log(window.screen.width)

  useEffect(()=>{
    window.screen.width >= '600' ? 
    setScale(25) : 
    setScale(10)
  },[]) 
  const {ref} = useParallax({speed: scale})

  return (
    <header>
      <div className=" md:w-[50rem] container mx-auto my-auto px-10 md:px-16 lg:px-6 h-[25rem] md:h-max">
        <div ref={ref} className="m-auto flex flex-col justify-start space-y-28 md:space-y-56 sm:px-30 py-24 md:py-24">
          <h1 id="hero" className="text-gray-200 text-8xl md:text-9xl md:tracking-widest">
            HI.
          </h1>
          <div className='flex flex-col md:space-y-2'>
            <h3
              id="my-name"
              className="text-gray-200 text-xl tracking-widest md:text-5xl lg:text-6xl w-max font-bold md:tracking-widest"
            >
              I'M MOHAMED JAOUDA
            </h3>
            <h5 className="text-gray-200 tracking-wider text-md md:text-4xl font-bold ">
              FRONTEND DEVELOPER
            </h5>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero