import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const SportCenter = () => {
  const zones = [
    {
      title: 'Power zone',
      desc: 'Space for working with free weights',
      img: 'Mock/c4.webp',
    },
    {
      title: 'Cardio zone',
      desc: 'Space for working with free weights',
      img: 'Mock/c6.webp',
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* --- Left Side Content --- */}
        <div className="lg:col-span-4 flex flex-col items-start gap-8 lg:sticky lg:top-32">
          {/* Tagline Pill */}
          <div className="border text-black border-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-tight">
            Sport center
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-black leading-[1.1] tracking-tight">
            Welcome to the Cross Fit Center, where people work on strengthening both body and mind.
          </h2>

          {/* More Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-3 rounded-full flex items-center gap-4 text-sm font-bold uppercase tracking-widest group transition-all hover:bg-[#f9b917] hover:text-black"
          >
            More 
            <span className="bg-white text-black h-6 w-6 flex items-center justify-center rounded-full group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={14} />
            </span>
          </motion.button>
        </div>

        {/* --- Right Side: Image Cards --- */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            
            {zones.map((zone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative group overflow-hidden rounded-[40px] cursor-pointer ${
                  index === 0 ? "h-[500px] md:h-[600px]" : "h-[450px] md:h-[550px]"
                }`}
              >
                {/* Image */}
                <img 
                  src={zone.img} 
                  alt={zone.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Label Tag */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold shadow-sm">
                    {zone.title}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
                  <p className="text-xl font-bold leading-tight max-w-[200px]">
                    {zone.desc}
                  </p>
                  
                  {/* Arrow Icon Button */}
                  <div className="bg-white/20 backdrop-blur-md h-12 w-12 flex items-center tet justify-center rounded-full border border-white/30 group-hover:bg-[#f9b917] group-hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

          {/* Slider Navigation Buttons (Exact as Image) */}
          <div className="flex justify-end gap-4 mt-8">
            <button className="h-14 w-14 rounded-full border text-black border-black cursor-pointer flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <ArrowLeft size={24} />
            </button>
            <button className="h-14 w-14 rounded-full bg-black text-white cursor-pointer flex items-center justify-center hover:bg-[#f9b917] hover:text-black transition-all">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SportCenter;