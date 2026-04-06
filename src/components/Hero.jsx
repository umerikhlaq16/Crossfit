import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  // Framer Motion variants for staggered animations
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
    /* Main Wrapper */
    <section className="relative w-full h-screen min-h-[650px] bg-[#09090b] flex flex-col font-sans overflow-hidden">
      
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

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-10 md:pb-20">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end"
        >
          
          {/* Left Side: Typography & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-10">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black text-white leading-[0.9] tracking-tighter uppercase italic"
            >
              Be healthier.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9b917] to-yellow-400">
                Be stronger.
              </span><br/>
              Be confident.
            </motion.h1>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="group relative bg-[#f9b917] text-[#1a1a1a] rounded-[14px] px-8 md:px-10 py-4 md:py-5 font-black flex items-center gap-4 text-xs tracking-widest uppercase transition-all hover:bg-white active:scale-95">
                Start your journey 
                <span className="bg-[#1a1a1a] text-[#f9b917] h-6 w-6 flex items-center justify-center rounded-full group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={14} strokeWidth={3} />
                </span>
              </button>
              
              <button className="bg-white/5 backdrop-blur-md text-white border rounded-[14px] border-white/10 px-8 md:px-10 py-4 md:py-5 font-black text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors active:scale-95">
                Explore Programs
              </button>
            </motion.div>
          </div>

          {/* Right Side: Bento Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            
            <div className="sm:col-span-2 grid grid-cols-2 gap-4">
              {/* Card 1: Members */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 flex flex-col justify-center rounded-[24px] cursor-pointer shadow-2xl min-h-[160px]"
              >
                <div className="flex -space-x-3 mb-3">
                  <img className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/100?img=11" alt="user" />
                  <img className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/100?img=12" alt="user" />
                  <img className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-full" src="https://i.pravatar.cc/100?img=13" alt="user" />
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-[#1a1a1a] tracking-tight flex items-center gap-2">
                  10K+ <Sparkles size={20} className="text-[#f9b917]" />
                </h4>
                <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mt-1">Active Members</p>
              </motion.div>

              {/* Card 2: Promo (FIXED ALIGNMENT) */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-[#f9b917] p-6 rounded-[24px] group cursor-pointer shadow-[0_20px_40px_rgba(249,185,23,0.2)] flex flex-col justify-between min-h-[160px] relative overflow-hidden"
              >
                {/* Icon at top right */}
                <div className="flex justify-end">
                  <div className="bg-[#1a1a1a] text-[#f9b917] p-2 rounded-full group-hover:rotate-12 transition-transform duration-300">
                    <Zap size={16} fill="currentColor" />
                  </div>
                </div>

                {/* Text at bottom */}
                <div className="mt-auto">
                  <span className="text-[10px] font-black text-[#1a1a1a]/60 uppercase tracking-widest mb-1 block">Limited Offer</span>
                  <h3 className="text-lg md:text-xl font-black text-[#1a1a1a] leading-tight uppercase italic">
                    14 Days<br/>Elite Access
                  </h3>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row Card: Quote */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="sm:col-span-2 bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-[24px] border border-white/10 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[160px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div className="bg-[#f9b917] w-12 h-1"></div>
                <div className="text-white/20">
                  <Zap size={20} />
                </div>
              </div>
              <p className="text-white/90 font-bold text-sm md:text-lg leading-tight uppercase italic pr-6 transition-colors group-hover:text-white">
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