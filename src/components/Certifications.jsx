import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import certAWS from '../assets/certificate/AWS.png';
import certDevOps from '../assets/certificate/devops_certi.jpg';
import certGDG from '../assets/certificate/GDG_certi.jpg';
import certNirman from '../assets/certificate/nirman_certi.png';

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATIONS = [
  {
    id: '01',
    name: 'AWS Certification',
    issuer: 'Intellipaat',
    date: '2026',
    image: certAWS,
    link: 'https://intellipaat.com/academy/certificate-link/?Yz0xNjU0JnU9MzM3NTUwJmV4dD0x',
    badge: 'AWS'
  },
  {
    id: '02',
    name: 'DevOps Course Certification',
    issuer: 'Intellipaat',
    date: '2026',
    image: certDevOps,
    link: 'https://intellipaat.com/academy/certificate-link/?Yz0xNjU1JnU9MzM3NTUwJmV4dD0x',
    badge: 'DevOps'
  },
  {
    id: '03',
    name: 'Build And Grow AI Hackathon 2.0',
    issuer: 'GDG Cloud Mumbai',
    date: '2026',
    image: certGDG,
    link: '#',
    badge: 'Hackathon'
  },
  {
    id: '04',
    name: 'Nirman 48 Hours Hackathon',
    issuer: 'Amity University Mumbai',
    date: '2026',
    image: certNirman,
    link: 'https://certificate.givemycertificate.com/c/263e01f4-4ed9-4448-8b91-42871f9995db',
    badge: 'Hackathon'
  }
];

const CertificationCard = ({ cert }) => {
  const cardRef = useRef(null);

  return (
    <div 
      ref={cardRef}
      className="certification-card relative w-full aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300"
    >
      {/* Certificate Image */}
      <img 
        src={cert.image} 
        alt={cert.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
      
      {/* Badge */}
      <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-red-600 rounded-full text-white text-xs font-semibold uppercase">
        {cert.badge}
      </div>
      
      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
        <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
          {cert.name}
        </h3>
        <p className="text-sm text-gray-300 mb-3">{cert.issuer}</p>
        <p className="text-xs text-gray-400 mb-4">{cert.date}</p>
        
        {/* Link Button */}
        <a 
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition-all duration-300 transform group-hover:translate-y-1"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default function Certifications() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate title
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0
      );

      // Animate cards with stagger
      const cards = sectionRef.current.querySelectorAll('.certification-card');
      tl.fromTo(cards,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay" />
      </div>

      <div className="max-w-[90rem] w-full relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Achievements</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Professional credentials and achievements demonstrating expertise in cloud technologies, DevOps, and software development.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
