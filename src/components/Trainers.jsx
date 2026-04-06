import React from 'react';
import { motion } from 'framer-motion';
import {  Award, Star, Zap } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: 'Ali Raza ',
      role: 'Head CrossFit Coach',
      exp: '12+ Years',
      img: 'Mock/c1.webp',
      specialty: 'Powerlifting'
    },
    {
      name: 'Mr. Bilal',
      role: 'Yoga & Mobility',
      exp: '8+ Years',
      img: 'Mock/c5.webp',
      specialty: 'Nutrition'
    },
    {
      name: 'Junaid Kahn ',
      role: 'Boxing Specialist',
      exp: '15+ Years',
      img: 'Mock/c3.webp',
      specialty: 'HIIT'
    },
    {
      name: 'Usha Kamal',
      role: 'Strength & Conditioning',
      exp: '10+ Years',
      img: 'Mock/c2.webp',
      specialty: 'Bodybuilding'
    }
  ];

  return (
    <section className="w-full bg-[#09090b] py-24 px-6 md:px-12 lg:px-20 overflow-hidden relative">
      
      {/* Background Decorative Text (Modern UI Element) */}
      <div className="absolute top-20 -right-20 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[300px] font-black text-white leading-none italic uppercase">TITANS</h2>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
               <div className="h-1 w-12 bg-[#f9b917]"></div>
               <h4 className="text-[#f9b917] font-black uppercase tracking-[0.4em] text-xs">The Elite Team</h4>
            </div>
            <h2 className="text-6xl md:text-8xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
              Meet the <br /> <span className="text-white/20">Trainers.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden lg:flex flex-col items-center gap-2 border-2 border-white/5 p-6 rounded-[2.5rem]"
          >
            <div className="flex items-center gap-1 text-[#f9b917]">
               <Star fill="currentColor" size={16} />
               <Star fill="currentColor" size={16} />
               <Star fill="currentColor" size={16} />
               <Star fill="currentColor" size={16} />
               <Star fill="currentColor" size={16} />
            </div>
            <p className="text-white font-black text-xs uppercase tracking-widest">Top Rated Worldwide</p>
          </motion.div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className={`group relative overflow-hidden rounded-[3rem] bg-[#111] h-[600px] cursor-pointer ${
                index % 2 !== 0 ? "lg:mt-12" : "" // Staggered Effect
              }`}
            >
              {/* Trainer Image */}
              <img 
                src={coach.img} 
                alt={coach.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Top Floating Tags */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {coach.specialty} Specialist
                </span>
              </div>

              {/* Social Icons (Appear on Hover) */}
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                {[].map((Icon, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2, backgroundColor: '#f9b917', color: '#000' }}
                    className="bg-black/50 backdrop-blur-md text-white p-3 rounded-full opacity-0 translate-x-[20px] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <Icon size={16} />
                  </motion.div>
                ))}
              </div>

              {/* Trainer Info */}
              <div className="absolute bottom-10 left-8 right-8">
                 <div className="mb-2 flex items-center gap-3">
                    <Award className="text-[#f9b917]" size={20} />
                    <span className="text-[10px] font-black text-[#f9b917] uppercase tracking-[0.2em]">{coach.role}</span>
                 </div>
                 <h3 className="text-4xl font-[1000] text-white uppercase italic tracking-tighter leading-none mb-4 group-hover:text-[#f9b917] transition-colors">
                    {coach.name.split(' ')[0]}<br/>{coach.name.split(' ')[1]}
                 </h3>
                 
                 {/* Experience Row */}
                 <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Experience</span>
                       <span className="text-lg font-black text-white uppercase italic">{coach.exp}</span>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                       <Zap size={18} fill="currentColor" />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <p className="text-white/40 font-bold uppercase text-[10px] tracking-[0.3em]">Want to join the team?</p>
          <button className="bg-transparent border-2 border-white/10 px-12 py-5 rounded-full text-white font-black uppercase text-xs tracking-widest hover:bg-[#f9b917] hover:border-[#f9b917] hover:text-black transition-all active:scale-95">
             Apply to Coach
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Trainers;