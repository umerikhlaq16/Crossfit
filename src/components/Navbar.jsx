import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Scroll position logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Body Scroll Lock: Jab menu open ho toh peeche ka page scroll na ho (Fixed alignment issue)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PROGRAMS', path: '/programs' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'MEMBERSHIP', path: '/membership' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const menuVariants = {
    closed: { 
      opacity: 0, 
      y: "-100%", 
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } 
    },
    open: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.3 + (i * 0.1), duration: 0.4 }
    })
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
      isScrolled 
      ? "bg-[#f9b917]/80 backdrop-blur-lg text-[#1a1a1a] shadow-2xl border-b-[1px] border-white/20 h-20" 
      : "bg-transparent text-white h-24"
    }`}>
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer z-[1100]"
            >
              <div className="flex flex-col leading-none">
                <span className={`text-2xl font-black tracking-tighter italic uppercase transition-colors duration-500 ${
                  (!isScrolled && !isOpen) ? "text-[#f9b917]" : "text-[#1a1a1a]"
                }`}>
                  CROSS FIT.
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group font-black text-sm tracking-widest overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-[#1a1a1a]" : "bg-[#f9b917]"}`}></span>
              </Link>
            ))}
            
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: isScrolled ? "#1a1a1a" : "#f9b917", color: isScrolled ? "#f9b917" : "#1a1a1a" }}
              whileTap={{ scale: 0.95 }}
              className={`border-2 px-8 py-2 rounded-full font-black uppercase tracking-widest transition-all duration-300 shadow-lg ${
                isScrolled ? "border-[#1a1a1a] text-[#1a1a1a]" : "border-[#f9b917] text-[#f9b917]"
              }`}
            >
              Join Now
            </motion.button>
          </div>

          {/* Animated Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[1100] p-2 focus:outline-none"
            >
              <div className="w-8 h-6 flex flex-col justify-between items-end">
                <motion.span 
                  animate={isOpen ? { rotate: 45, y: 10, width: "100%", backgroundColor: "#1a1a1a" } : { rotate: 0, y: 0, width: "100%", backgroundColor: isScrolled ? "#1a1a1a" : "#f9b917" }}
                  className="h-1 block rounded-full transition-all origin-center"
                />
                <motion.span 
                  animate={isOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: isScrolled ? "#1a1a1a" : "#f9b917" }}
                  className="h-1 w-3/4 block rounded-full transition-all"
                />
                <motion.span 
                  animate={isOpen ? { rotate: -45, y: -10, width: "100%", backgroundColor: "#1a1a1a" } : { rotate: 0, y: 0, width: "100%", backgroundColor: isScrolled ? "#1a1a1a" : "#f9b917" }}
                  className="h-1 block rounded-full transition-all origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE OVERLAY (FIXED ALIGNMENT) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            // "fixed inset-0 h-screen" ensures it's always full screen and centered
            className="fixed inset-0 w-full h-screen bg-[#f9b917] backdrop-blur-2xl z-[1050] flex flex-col items-center justify-center md:hidden text-[#1a1a1a]"
          >
            <div className="flex flex-col space-y-8 text-center px-6">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} custom={i} variants={linkVariants}>
                  <Link
                    to={link.path}
                    className="text-5xl font-[1000] uppercase tracking-tighter hover:italic transition-all active:scale-95 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div custom={navLinks.length} variants={linkVariants} className="pt-6">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="bg-[#1a1a1a] text-[#f9b917] px-12 py-5 rounded-full text-xl font-black uppercase shadow-2xl active:scale-95"
                >
                  Join Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;