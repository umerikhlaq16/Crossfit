import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, Zap, ChevronRight } from 'lucide-react';

const Classes = () => {
  const fitnessClasses = [
    {
      title: 'Power Lifting',
      time: '60 min',
      intensity: 'High',
      coach: 'Alex Rivera',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
      color: '#f9b917'
    },
    {
      title: 'Yoga Flow',
      time: '45 min',
      intensity: 'Low',
      coach: 'Sarah Chen',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
      color: '#a3e635'
    },
    {
      title: 'HIIT Cardio',
      time: '30 min',
      intensity: 'Extreme',
      coach: 'Marcus Vane',
      img: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1000&auto=format&fit=crop',
      color: '#ef4444'
    },
    {
      title: 'Boxing',
      time: '50 min',
      intensity: 'High',
      coach: 'Mike Tyson',
      img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop',
      color: '#3b82f6'
    }
  ];

  return (
    <section className="w-full bg-[#09090b] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#f9b917] font-black uppercase tracking-[0.3em] text-sm mb-4">Our Programs</h4>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
              Push your <br /> <span className="text-white/20">limits today.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-500 max-w-sm text-sm font-medium leading-relaxed"
          >
            Choose from a variety of professionally designed classes that cater to every fitness level and goal.
          </motion.p>
        </div>

        {/* --- Classes Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fitnessClasses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative h-[550px] group cursor-pointer overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5"
            >
              {/* Image with Zoom Effect */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500" />

              {/* Glassy Intensity Tag */}
              <div className="absolute top-6 left-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: item.color }} />
                  <span className="text-[10px] font-black uppercase text-white tracking-widest">{item.intensity} Intensity</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 transition-all duration-500 transform group-hover:translate-y-[-10px]">
                <h3 className="text-3xl font-black text-white uppercase italic mb-6 leading-none">
                  {item.title}
                </h3>
                
                {/* Info Row */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Clock size={16} className="text-[#f9b917]" />
                    <span className="text-xs font-bold uppercase">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <User size={16} className="text-[#f9b917]" />
                    <span className="text-xs font-bold uppercase">{item.coach}</span>
                  </div>
                </div>

                {/* Hidden Details on Hover */}
                <div className="h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-white font-black uppercase text-[10px] tracking-widest">Join Class Now</span>
                  <div className="bg-[#f9b917] h-10 w-10 rounded-full flex items-center justify-center text-black">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div 
                className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-700" 
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* --- Bottom CTA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 flex justify-center"
        >
          <button className="bg-white/5 backdrop-blur-xl border cursor-pointer border-white/10 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-4 hover:bg-[#f9b917] hover:text-black transition-all">
            View All 40+ Classes <Zap size={18} fill="currentColor" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Classes;