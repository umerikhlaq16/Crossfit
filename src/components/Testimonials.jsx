import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

const Testimonials = () => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const sliderRef = useRef(null);

  const reviews = [
    {
      name: "James Wilson",
      role: "Pro Athlete",
      text: "Joining Titan was the best decision for my career. The intensity here is unmatched, and the community pushes you every single day.",
      img: "https://i.pravatar.cc/150?u=james",
      rating: 5,
      size: "large"
    },
    {
      name: "Sarah Jenkins",
      role: "Mother of 2",
      text: "I lost 15kg in 4 months! The coaches are so supportive and the nutrition plans actually work.",
      img: "https://i.pravatar.cc/150?u=sarah",
      rating: 5,
      size: "small"
    },
    {
      name: "Mike Ross",
      role: "Software Engineer",
      text: "The perfect place to de-stress after work. Premium equipment and great vibes.",
      img: "https://i.pravatar.cc/150?u=mike",
      rating: 4,
      size: "small"
    },
    {
      name: "Elena Gilbert",
      role: "Fitness Influencer",
      text: "The lighting, the gear, the atmosphere... everything about this gym is aesthetic and functional. Love the HIIT classes!",
      img: "https://i.pravatar.cc/150?u=elena",
      rating: 5,
      size: "medium"
    },
    {
      name: "David Goggins",
      role: "Ultra Runner",
      text: "You want to find your limits? This is the place. Stay hard!",
      img: "https://i.pravatar.cc/150?u=david",
      rating: 5,
      size: "small"
    }
  ];

  // Auto-Slider Logic for Mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMobileIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  // Shared Card Component to maintain exact UI
  const TestimonialCard = ({ item, index, isSlider = false }) => (
    <motion.div
      initial={isSlider ? false : { opacity: 0, scale: 0.9 }}
      whileInView={isSlider ? false : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`break-inside-avoid bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] relative group ${isSlider ? 'w-full flex-shrink-0' : ''}`}
    >
      <Quote className="absolute top-6 right-8 text-white/5 group-hover:text-[#f9b917]/20 transition-colors" size={60} />
      <div className="flex gap-1 mb-6">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} size={14} fill="#f9b917" stroke="#f9b917" />
        ))}
      </div>
      <p className={`text-white/80 font-medium leading-relaxed mb-8 italic ${
        item.size === 'large' ? "text-2xl md:text-3xl" : "text-lg"
      }`}>
        "{item.text}"
      </p>
      <div className="flex items-center gap-4 border-t border-white/5 pt-6">
        <div className="relative">
          <img src={item.img} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#f9b917]" />
          <div className="absolute -bottom-1 -right-1 bg-[#f9b917] text-black p-0.5 rounded-full">
            <CheckCircle2 size={14} fill="currentColor" stroke="white" />
          </div>
        </div>
        <div>
          <h4 className="text-white font-black uppercase text-sm tracking-widest">{item.name}</h4>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{item.role}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#f9b917] group-hover:w-1/3 transition-all duration-500 rounded-full" />
    </motion.div>
  );

  return (
    <section className="w-full bg-[#09090b] py-24 px-6 md:px-12 lg:px-20 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f9b917]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-4">
             <div className="h-[2px] w-8 bg-[#f9b917]"></div>
             <h4 className="text-[#f9b917] font-black uppercase tracking-[0.4em] text-xs">Testimonials</h4>
             <div className="h-[2px] w-8 bg-[#f9b917]"></div>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-8xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
            Voice of the <br /> <span className="text-white/20">Crew.</span>
          </motion.h2>
        </div>

        {/* --- DESKTOP: Masonry Grid (Hidden on Mobile) --- */}
        <div className="hidden md:block columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((item, index) => (
            <TestimonialCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* --- MOBILE: Auto-Slider (Visible only on Mobile) --- */}
        <div className="md:hidden overflow-hidden relative">
          <motion.div 
            animate={{ x: `-${activeMobileIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex w-full cursor-grab active:cursor-grabbing"
          >
            {reviews.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <TestimonialCard item={item} index={index} isSlider={true} />
              </div>
            ))}
          </motion.div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setActiveMobileIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${activeMobileIndex === i ? "w-8 bg-[#f9b917]" : "w-2 bg-white/20"}`}
              />
            ))}
          </div>
        </div>

        {/* Global Rating Stats Bar */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-20 py-10 border-y border-white/5 flex flex-wrap justify-center items-center gap-10 md:gap-20">
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-[1000] text-[#f9b917]">4.9/5</h3>
            <p className="text-white/40 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">Average Rating</p>
          </div>
          <div className="text-center border-x border-white/10 px-10 md:px-20">
            <h3 className="text-4xl md:text-6xl font-[1000] text-white">20K+</h3>
            <p className="text-white/40 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">Active Crew</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-[1000] text-white">98%</h3>
            <p className="text-white/40 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">Success Rate</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;