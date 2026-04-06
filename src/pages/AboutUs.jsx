import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users2, Target, Zap, ArrowDown } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { label: 'Years of Grind', value: '12+' },
    { label: 'Elite Athletes', value: '500+' },
    { label: 'Transformations', value: '10K+' },
    { label: 'Expert Coaches', value: '45+' },
  ];

  const values = [
    {
      title: "The Community",
      desc: "At Crew, you're not just a member; you're part of a brotherhood that pushes you past your limits.",
      icon: <Users2 size={32} />
    },
    {
      title: "Scientific Approach",
      desc: "We don't just lift; we calculate. Every program is backed by sports science for maximum gains.",
      icon: <Target size={32} />
    },
    {
      title: "Unbreakable Spirit",
      desc: "We build more than just muscles; we forge mental toughness that stays with you outside the gym.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <div className="bg-[#09090b] text-white overflow-hidden font-sans">
      
      {/* --- SECTION 1: CINEMATIC HERO --- */}
      <section className="relative h-screen w-full flex items-center justify-center p-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
            alt="Gym Atmosphere" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#f9b917] font-black uppercase tracking-[0.5em] text-xs md:text-sm mb-6"
          >
            Since 2012 • The Elite Standard
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl lg:text-[180px] font-[1000] leading-none tracking-[0.1em] italic uppercase"
          >
            THE <span className="text-amber-300 border-t border-b border-white/20 px-4">CROSS FIT</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-lg md:text-2xl mt-8 max-w-2xl mx-auto font-medium leading-relaxed italic"
          >
            We don't just train bodies. We forge titans. Join the movement that redefines human potential.
          </motion.p>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16 text-[#f9b917] flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: THE STORY (BENTO GRID) --- */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-[3rem] p-10 md:p-16 border border-white/10 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none mb-8 tracking-tighter">
              Our Story: <br /> <span className="text-[#f9b917]">Born in Iron.</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium mb-10">
              CREW Cross Fit started in a small garage with one barbell and a relentless dream. We wanted to create a sanctuary for those who found peace in the struggle. Today, we are a global community of warriors who believe that greatness is earned, never given.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <h3 className="text-3xl font-black text-[#f9b917]">{stat.value}</h3>
                  <p className="text-[10px] font-black uppercase text-white/40 tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 rounded-[3rem] overflow-hidden min-h-[400px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Coach Training" 
            />
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: CORE VALUES (THE CREW CODE) --- */}
      <section className="py-24 bg-white text-black rounded-[4rem] md:rounded-[6rem] mx-2 md:mx-6">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-20">
            <h4 className="text-black/40 font-black uppercase tracking-[0.4em] text-xs mb-4">The Crew Code</h4>
            <h2 className="text-5xl md:text-7xl font-[1000] uppercase italic tracking-tighter">What we stand for.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {values.map((val, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="bg-[#f9b917] p-6 rounded-[2rem] mb-8 rotate-3 group-hover:rotate-0 transition-transform shadow-xl">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">{val.title}</h3>
                <p className="text-black/60 font-medium leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CALL TO ACTION --- */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        {/* Background Accent Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[200px] md:text-[400px] font-black select-none pointer-events-none italic">
          TITANS
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-8xl font-[1000] uppercase italic leading-none mb-10 tracking-tighter">
            Ready to <span className="text-[#f9b917]">Join the Crew?</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto mb-12 text-lg font-medium">
            Don't wait for Monday. Don't wait for "someday". The Crew is waiting for you to take the first step.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#f9b917] text-black px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white transition-all shadow-[0_20px_40px_rgba(249,185,23,0.3)] active:scale-95">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white/10 text-white px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:border-[#f9b917] transition-all active:scale-95">
              View Class Schedule
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutUs;