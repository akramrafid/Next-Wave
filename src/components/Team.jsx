import React from 'react';

const teamMembers = [
  {
    name: "Shahedul Islam",
    role: "Sr. Visualizer",
    desc: "A creative mastermind focused on stunning visuals and intuitive user experiences.",
    imgSrc: "/Meet our team/Shahedul Islam.jpg",
    linkedin: "#",
    twitter: "#",
    email: "mailto:#"
  },
  {
    name: "Mohammad Abdullah Al Kaisar",
    role: "CEO & Founder",
    desc: "Leading the strategic vision and growth of the company with innovative ideas.",
    imgSrc: "/Meet our team/Mohammad Abdullah Al Kaisar.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "mailto:#"
  },
  {
    name: "Sayed Anas Ahamed",
    role: "Media Buying Associate",
    desc: "Data-driven media buyer optimizing campaigns for maximum return on investment.",
    imgSrc: "/Meet our team/Sayed Anas Ahamed.jpg",
    linkedin: "#",
    twitter: "#",
    email: "mailto:#"
  }
];

const Team = () => {
  return (
    <section className="bg-nw-white w-full min-h-[900px] py-24 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Massive Background Text - Pixelbasel Font */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-0 overflow-hidden pt-10">
        <h1 
          className="text-black/5 leading-none text-center select-none whitespace-nowrap"
          style={{ 
            fontFamily: "'Pixelbasel', sans-serif", 
            fontSize: 'clamp(120px, 25vw, 450px)',
            letterSpacing: '-0.02em',
            transform: 'translateY(-20%)'
          }}
        >
          Next Wave
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 w-full mt-8">
        
        {/* Header Block */}
        <div className="mb-16">
          <p className="text-nw-black/50 text-sm mb-4 font-medium tracking-wide">Home / Teams</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter text-nw-black mb-6" style={{ letterSpacing: '-0.04em' }}>Meet our team</h2>
          <p className="text-nw-black/70 max-w-2xl text-base md:text-lg leading-relaxed">
            Meet our exceptional team at Next Wave! Comprising diverse talents and expertise, we are a dedicated group committed to delivering excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="relative group bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden shadow-2xl h-[550px] lg:h-[600px] w-full transition-transform duration-500 hover:-translate-y-2 border-[4px] border-[#222222] will-change-transform"
            >
              {/* Member Image taking full height */}
              <img 
                src={member.imgSrc} 
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top will-change-transform"
              />


              {/* Fading Dark Gradient Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/60 to-transparent pointer-events-none" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 pb-6 z-10">
                
                {/* Name, Verified Badge, and Role */}
                <div className="mb-3">
                  <h3 className="text-white text-xl lg:text-2xl font-bold font-sans tracking-tight mb-1">
                    {member.name}
                    <img 
                      src="/Meet our team/Verified badge sign.png" 
                      alt="Verified" 
                      className="inline-block w-5 h-5 ml-1.5 align-middle -translate-y-0.5 cursor-pointer drop-shadow-sm" 
                    />
                  </h3>
                  <p className="text-[#d0d0d0] text-xs md:text-sm font-semibold tracking-wide">
                    {member.role}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[#a0a0a0] text-xs md:text-sm leading-relaxed mb-5 max-w-[95%]">
                  {member.desc}
                </p>

                {/* Footer: Social Icons & Contact Button */}
                <div className="flex justify-between items-center w-full">
                  
                  {/* Social Icons */}
                  <div className="flex items-center gap-3 text-[#888888]">
                    <a href={member.linkedin} className="hover:text-white transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                    <a href={member.twitter} className="hover:text-white transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                      </svg>
                    </a>
                    <a href={member.email} className="hover:text-white transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </a>
                  </div>

                  {/* Contact Button */}
                  <button className="bg-nw-blue text-white font-semibold text-xs px-4 py-2 rounded-full flex items-center gap-1 hover:opacity-90 transition-opacity shadow-lg">
                    Contact <span className="text-base leading-none ml-1">+</span>
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
