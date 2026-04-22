import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import imgHero from '../assets/spiderman/20260407_055437.png';

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
    
    // Text entrance animation
    gsap.fromTo(textRef.current,
      { opacity: 0, y: -60 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Hero Background Image */}
      <img 
        src={imgHero} 
        alt="Hero" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 z-5" />
      
      {/* Foreground UI Components */}
      <div ref={textRef} className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center mx-auto w-full max-w-[90rem] px-8 lg:px-16 mt-20">
        <div 
          className="w-full flex flex-col md:flex-row justify-between md:items-end transition-all duration-700 ease-out transform gap-10" 
        >
            
          {/* Left Side: Intro and Title */}
          <div className="flex-1 max-w-lg lg:max-w-xl text-left">
            <p className="text-sm md:text-base text-gray-300 font-medium tracking-widest uppercase mb-6 opacity-90 drop-shadow-md">
              Hey, I’m Narayan Behera
            </p>
            
            <h1 className="text-2xl md:text-3xl lg:text-[1rem] xl:text-[3.5rem] font-bold tracking-tighter drop-shadow-2xl leading-[1.05] font-sans">
              Aspiring DevOps & CloudOps<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500 font-serif italic font-light pr-2">Engineer</span>
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-medium tracking-widest uppercase mt-4 opacity-90 drop-shadow-md">
              Full Stack Developer | Open to DevOps & SDE Roles
            </p>
          </div>
          
          {/* Right Side: Description and CTA */}
          <div className=" flex-1 max-w-md text-left md:text-right flex flex-col md:items-end">
            <p className="w-110 text-lg md:text-xl text-gray-300 drop-shadow-xl font-light tracking-wide leading-relaxed mb-8">
              I engineer cloud-ready applications, automated CI/CD pipelines, and responsive interfaces using AWS, Docker, Kubernetes, Jenkins, React, and Python.
            </p>
            
            <button className="pointer-events-auto px-8 py-4 rounded-full border border-white/30 text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-500 backdrop-blur-sm shadow-xl inline-block">
              Explore My Work
            </button>
          </div>
            
        </div>
      </div>
      
      {/* Overlay border/frame for cinematic effect */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
}
