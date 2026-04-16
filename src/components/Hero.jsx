import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative w-full min-h-screen lg:h-screen bg-[#09090b] flex flex-col font-sans overflow-hidden">
      
      {/* Immersive Image Container */}
      <div className="absolute inset-0 z-0 bg-[#121215]">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="/Mock/c4.webp" 
          alt="Gym Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent w-full lg:w-2/3"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent h-full"></div>
      </div>

      {/* Content Wrapper - Added more top padding and adjusted bottom justify */}
      <div className="relative z-10 w-full h-full max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 flex flex-col justify-end pt-40 pb-14 md:pb-20">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end"
        >
          
          {/* Left Side: Typography & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-10 text-left">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[120px] font-[1000] text-white leading-[0.95] tracking-tighter uppercase "
            >
              Be healthier.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9b917] to-yellow-400">
                Be stronger.
              </span><br/>
              Be confident.
            </motion.h1>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4">
              <button className="group relative bg-[#f9b917] text-[#1a1a1a] rounded-xl px-6 sm:px-10 py-4 sm:py-5 font-black flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs tracking-widest uppercase transition-all hover:bg-white active:scale-95 shadow-xl shadow-yellow-500/10">
                Start your journey 
                <span className="bg-[#1a1a1a] text-[#f9b917] h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center rounded-full group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={14} strokeWidth={3} />
                </span>
              </button>
              
              <button className="bg-white/5 backdrop-blur-md text-white border rounded-xl border-white/10 px-6 sm:px-10 py-4 sm:py-5 font-black text-[10px] sm:text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors active:scale-95">
                Explore Programs
              </button>
            </motion.div>
          </div>

          {/* Right Side: Bento Grid - Stays at the bottom */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full mt-4 lg:mt-0">
            
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1: Members */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-5 sm:p-6 flex flex-col justify-center rounded-3xl cursor-pointer shadow-2xl min-h-[140px] sm:min-h-[160px]"
              >
                <div className="flex -space-x-2 sm:-space-x-3 mb-3">
                  <img className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/100?img=11" alt="user" />
                  <img className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/100?img=12" alt="user" />
                  <img className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/100?img=13" alt="user" />
                </div>
                <h4 className="text-xl sm:text-3xl font-black text-[#1a1a1a] tracking-tight flex items-center gap-2">
                  10K+ <Sparkles size={18} className="text-[#f9b917]" />
                </h4>
                <p className="text-[8px] sm:text-[9px] text-gray-400 font-black uppercase tracking-widest mt-1">Active Members</p>
              </motion.div>

              {/* Card 2: Promo */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-[#f9b917] p-5 sm:p-6 rounded-3xl group cursor-pointer shadow-[0_20px_40px_rgba(249,185,23,0.2)] flex flex-col justify-between min-h-[140px] sm:min-h-[160px] relative overflow-hidden"
              >
                <div className="flex justify-end">
                  <div className="bg-[#1a1a1a] text-[#f9b917] p-2 rounded-full group-hover:rotate-12 transition-transform duration-300">
                    <Zap size={14} fill="currentColor" />
                  </div>
                </div>
                <div className="mt-auto">
                  <span className="text-[8px] sm:text-[10px] font-black text-[#1a1a1a]/60 uppercase tracking-widest mb-1 block leading-none">Limited Offer</span>
                  <h3 className="text-base sm:text-xl font-black text-[#1a1a1a] leading-tight uppercase italic">
                    14 Days<br/>Elite Access
                  </h3>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row Card: Quote */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="sm:col-span-2 lg:col-span-1 bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[140px] sm:min-h-[160px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div className="bg-[#f9b917] w-8 sm:w-12 h-1"></div>
                <div className="text-white/20">
                  <Zap size={20} />
                </div>
              </div>
              <p className="text-white/90 font-bold text-xs sm:text-lg leading-tight uppercase italic pr-4 transition-colors group-hover:text-white">
                "Your muscles grow while you sleep. Make 7-9 hours your secret weapon for maximum progress."
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
