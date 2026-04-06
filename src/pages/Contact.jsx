import React from 'react';
import { motion } from 'framer-motion';
// Replaced Lucide with React Icons (Fi for Feather, Io5 for Ionicons/Send)
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiInstagram, 
  FiTwitter, 
  FiFacebook 
} from 'react-icons/fi';
import { IoSendSharp } from 'react-icons/io5';

const Contact = () => {
  const contactDetails = [
    { icon: <FiPhone size={24} />, label: 'Call Us', value: '+1 (555) 000-8888', color: '#f9b917' },
    { icon: <FiMail size={24} />, label: 'Email Us', value: 'hello@crewfit.com', color: '#f9b917' },
    { icon: <FiMapPin size={24} />, label: 'Location', value: '123 Iron St, New York', color: '#f9b917' },
    { icon: <FiClock size={24} />, label: 'Open Hours', value: '05:00 AM - 11:00 PM', color: '#f9b917' },
  ];

  return (
    <div className="bg-[#09090b] text-white min-h-screen pt-24 pb-20 px-6 md:px-12 lg:px-20 font-sans overflow-hidden relative">
      
      {/* --- Background Decorative Glows --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f9b917]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* --- Header Area --- */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#f9b917] font-black uppercase tracking-[0.5em] text-xs mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-[1000] uppercase italic tracking-tighter leading-none"
          >
            THE CREW <br /> <span className="text-white/20">IS WAITING.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* --- Left Side: Contact Info Grid --- */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(249,185,23,0.1)' }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] transition-all cursor-pointer group"
              >
                <div className="text-[#f9b917] mb-6 bg-white/5 w-fit p-4 rounded-2xl group-hover:bg-[#f9b917] group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <h4 className="text-white/40 font-black uppercase text-[10px] tracking-widest mb-2">{item.label}</h4>
                <p className="text-xl font-black italic uppercase tracking-tight">{item.value}</p>
              </motion.div>
            ))}

            {/* Social Connect Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="sm:col-span-2 bg-[#f9b917] p-8 rounded-[2.5rem] flex items-center justify-between group cursor-pointer overflow-hidden relative"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-black uppercase italic leading-none mb-1">Follow the Crew</h3>
                <p className="text-black/60 text-[10px] font-black uppercase tracking-widest">Connect on social media</p>
              </div>
              <div className="flex gap-4 relative z-10">
                {[FiInstagram, FiTwitter, FiFacebook].map((Icon, i) => (
                  <div key={i} className="bg-black text-[#f9b917] p-3 rounded-full hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                ))}
              </div>
              {/* Animated Pattern background */}
              <div className="absolute top-0 right-0 opacity-10 text-black font-black text-[120px] italic select-none pointer-events-none -translate-y-10 translate-x-10">
                FIT
              </div>
            </motion.div>
          </div>

          {/* --- Right Side: Contact Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <IoSendSharp size={150} />
            </div>

            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#f9b917] transition-all font-bold placeholder:text-white/10"
                  />
                </div>
                {/* Email Input */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#f9b917] transition-all font-bold placeholder:text-white/10"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-4">Subject</label>
                <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#f9b917] transition-all font-bold appearance-none cursor-pointer">
                  <option className="bg-[#111]">Membership Inquiry</option>
                  <option className="bg-[#111]">Personal Training</option>
                  <option className="bg-[#111]">General Question</option>
                  <option className="bg-[#111]">Corporate Deals</option>
                </select>
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-4">Your Message</label>
                <textarea 
                  rows="5"
                  placeholder="How can we help you crush your goals?" 
                  className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5 text-white focus:outline-none focus:border-[#f9b917] transition-all font-bold placeholder:text-white/10 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#f9b917] text-black py-6 rounded-2xl font-[1000] uppercase text-sm tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-white transition-all shadow-2xl shadow-[#f9b917]/20"
              >
                Send Message <IoSendSharp size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* --- MAP PLACEHOLDER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 h-[400px] w-full rounded-[3rem] overflow-hidden grayscale contrast-125 border border-white/10 group"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647214771234!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            className="opacity-50 group-hover:opacity-80 transition-opacity duration-700"
          ></iframe>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;