import React from 'react';
import { motion } from 'framer-motion';
// Lucide icons replaced with equivalent Feather icons from react-icons
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube, FiMail, FiMapPin, FiPhone, FiArrowUpRight, FiSend } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: ['CrossFit', 'Powerlifting', 'Yoga Flow', 'Boxing Elite', 'HIIT Cardio'],
    company: ['About Us', 'Our Trainers', 'Membership', 'Success Stories', 'Contact'],
    support: ['Privacy Policy', 'Terms of Service', 'FAQ', 'Help Center']
  };

  return (
    <footer className="w-full bg-[#09090b] pt-24 pb-10 px-6 md:px-12 lg:px-20 overflow-hidden relative">
      
      {/* --- SECTION 1: MASSIVE CTA --- */}
      <div className="max-w-[1600px] mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#f9b917] rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group"
        >
          {/* Background Decorative Text */}
          <div className="absolute -bottom-10 -left-10 text-black/5 text-[150px] md:text-[250px] font-black italic select-none pointer-events-none">
            TITAN
          </div>

          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-4xl md:text-7xl font-[1000] text-black uppercase italic tracking-tighter leading-none mb-6">
              Ready to unleash <br /> your inner titan?
            </h2>
            <p className="text-black/70 font-bold uppercase tracking-widest text-xs md:text-sm">
              Start your 14-day free trial today. No commitments.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 bg-black text-[#f9b917] px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] flex items-center gap-4 shadow-2xl hover:bg-zinc-900 transition-all"
          >
            Join the elite now
            <FiArrowUpRight size={20} strokeWidth={3} />
          </motion.button>
        </motion.div>
      </div>

      {/* --- SECTION 2: MAIN FOOTER CONTENT --- */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
        
        {/* Brand Column */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <div className="text-3xl font-[1000] tracking-tighter italic uppercase text-[#f9b917] mb-8">
            CROSS FIT.
          </div>
          <p className="text-white/40 font-medium text-lg leading-relaxed mb-10 max-w-sm">
            The ultimate destination for those who dare to push their limits and transform their lives through elite fitness.
          </p>
          
          {/* Newsletter Input */}
          <div className="w-full relative group">
             <input 
               type="email" 
               placeholder="Your Email" 
               className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#f9b917] transition-all placeholder:text-white/20 font-bold"
             />
             <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#f9b917] text-black p-3 rounded-xl hover:scale-110 transition-transform">
               <FiSend size={20} />
             </button>
          </div>
        </div>

        {/* Links Columns */}
        <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-black uppercase text-xs tracking-widest border-b border-white/10 pb-4">Programs</h4>
            {footerLinks.programs.map(link => (
              <a key={link} href="#" className="text-white/40 hover:text-[#f9b917] font-bold text-sm transition-colors uppercase tracking-tight">{link}</a>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-black uppercase text-xs tracking-widest border-b border-white/10 pb-4">Company</h4>
            {footerLinks.company.map(link => (
              <a key={link} href="#" className="text-white/40 hover:text-[#f9b917] font-bold text-sm transition-colors uppercase tracking-tight">{link}</a>
            ))}
          </div>
          <div className="hidden md:flex flex-col gap-6">
            <h4 className="text-white font-black uppercase text-xs tracking-widest border-b border-white/10 pb-4">Support</h4>
            {footerLinks.support.map(link => (
              <a key={link} href="#" className="text-white/40 hover:text-[#f9b917] font-bold text-sm transition-colors uppercase tracking-tight">{link}</a>
            ))}
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-3 flex flex-col gap-8">
           <h4 className="text-white font-black uppercase text-xs tracking-widest border-b border-white/10 pb-4">Location</h4>
           <div className="flex items-start gap-4 text-white/40 hover:text-white transition-colors cursor-pointer">
              <FiMapPin className="text-[#f9b917] shrink-0" size={20} />
              <p className="text-sm font-bold leading-tight uppercase">123 Fitness Ave, Iron District,<br/>New York, NY 10001</p>
           </div>
           <div className="flex items-center gap-4 text-white/40 hover:text-white transition-colors cursor-pointer">
              <FiPhone className="text-[#f9b917] shrink-0" size={20} />
              <p className="text-sm font-bold uppercase">+1 (555) 000-8888</p>
           </div>
           <div className="flex items-center gap-4 text-white/40 hover:text-white transition-colors cursor-pointer">
              <FiMail className="text-[#f9b917] shrink-0" size={20} />
              <p className="text-sm font-bold uppercase">hello@crossfit.com</p>
           </div>
        </div>

      </div>

      {/* --- SECTION 3: BOTTOM BAR --- */}
      <div className="max-w-[1600px] mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {[FiInstagram, FiTwitter, FiFacebook, FiYoutube].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ y: -5, color: '#f9b917' }}
              href="#"
              className="bg-white/5 p-4 rounded-2xl text-white/40 transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] text-center">
          © {currentYear} Crew Cross Fit. Designed for those who never quit.
        </div>

        {/* Back to top button (Optional) */}
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          className="text-white/40 hover:text-white text-[10px] font-black uppercase tracking-widest border-b border-white/20"
        >
          Back to top ↑
        </motion.button>
      </div>

    </footer>
  );
};

export default Footer;