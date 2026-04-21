import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Personal portrait for About section
import imgProfile from '../assets/man/Profile.photo.png.jpegProfile.photo.png.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const maskRef = useRef(null);
  
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // 1. ScrollTrigger entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline bound to the scroll position
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // triggers when the top of the section hits 75% of the viewport height
          toggleActions: "play none none reverse" // play forwards on scroll down, reverse on scroll out
        }
      });

      // Select all text lines that have the 'stagger-reveal' class
      const textElements = textContainerRef.current.querySelectorAll('.stagger-reveal');
      
      // Select the image container
      const imgElement = imageContainerRef.current;

      tl.fromTo(imgElement, 
        { opacity: 0, x: -50 }, 
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(textElements, 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" },
        "-=0.8" // start before image is fully in
      );
      
    }, sectionRef);

    return () => ctx.revert(); // clean up ScrollTrigger
  }, []);

  // 2. Removed interactive spotlight mask - using simple portrait now

  return (
    <section 
    id='about'
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-black flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay" />
      </div>

      <div className="max-w-[90rem] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Interactive Portrait */}
        <div 
          ref={imageContainerRef}
          className="relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden group shadow-2xl border border-white/5"
        >
          {/* Personal Portrait */}
          <img 
            src={imgProfile} 
            alt="Narayan Behera" 
            className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right Column: Story & Details */}
        <div ref={textContainerRef} className="flex flex-col justify-center space-y-10">
          
          <div className="overflow-hidden">
            <h2 className="stagger-reveal text-5xl md:text-6xl font-bold tracking-tighter text-white font-sans leading-tight">
              The Dual <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-serif italic pr-4">Persona</span>
            </h2>
          </div>

          <div className="overflow-hidden">
            <p className="stagger-reveal text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl">
              There are two sides to every great digital experience: the backend systems that keep services reliable, and the frontend interactions that make them feel human. As an aspiring DevOps & CloudOps engineer, I bridge those worlds by building scalable systems, automated pipelines, and polished UI experiences.
            </p>
            <p className="stagger-reveal text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl mt-6">
              I combine Full Stack development with cloud automation, tackling AWS, Docker, Kubernetes, Jenkins, Linux, GitHub Actions, React, and Python to deliver production-ready solutions.
            </p>
          </div>

          {/* Tech Skills */}
          <div className="overflow-hidden">
            <div className="stagger-reveal grid grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-white/10 max-w-xl">
              {[
                "AWS", 
                "Docker", 
                "Kubernetes", 
                "Jenkins",
                "Linux", 
                "CI/CD", 
                "React", 
                "Python"
              ].map((skill, i) => (
                <div key={i} className="flex items-center space-x-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-red-500 transition-colors duration-300" />
                  <span className="text-gray-300 text-sm md:text-base font-medium tracking-wide uppercase group-hover:text-white transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Block */}
          <div className="overflow-hidden mt-6">
            <blockquote className="stagger-reveal border-l-2 border-red-500/50 pl-6 py-2">
              <p className="text-xl md:text-2xl text-gray-200 font-serif italic">
                “Logic builds the foundation. <br /> Imagination breaks the boundaries.”
              </p>
            </blockquote>
          </div>
          
        </div>

      </div>
    </section>
  );
}
