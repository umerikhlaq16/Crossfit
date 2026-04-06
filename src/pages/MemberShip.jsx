import React from 'react';
import { motion } from 'framer-motion';
// Fixed: FiTrophy replaced with FiAward (Feather Icons equivalent)
import { 
  FiZap, 
  FiStar, 
  FiAward, 
  FiCheck, 
  FiShield, 
  FiArrowRight 
} from 'react-icons/fi';

const Membership = () => {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      features: ['24/7 Gym Access', 'Basic Training Plan', 'Locker Room Access', 'Water & Towel'],
      icon: <FiZap size={24} />,
      popular: false
    },
    {
      name: 'Pro Elite',
      price: '59',
      features: ['Everything in Starter', 'Personal Coach (2 sessions)', 'Nutrition Guide', 'All Group Classes', 'Sauna Access'],
      icon: <FiStar size={24} />,
      popular: true
    },
    {
      name: 'Ultimate',
      price: '99',
      features: ['Everything in Pro', 'Unlimited Personal Training', 'Custom Diet Plans', 'Massage Therapy', 'VIP Lounge'],
      icon: <FiAward size={24} />, // Fixed icon name here
      popular: false
    }
  ];

  return (
    <div className="bg-[#09090b] min-h-screen text-white font-sans overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#f9b917]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[1000px] mx-auto relative z-10"
        >
          <h4 className="text-[#f9b917] font-black uppercase tracking-[0.5em] text-xs mb-6">
            Invest in Yourself
          </h4>
          <h1 className="text-6xl md:text-9xl font-[1000] uppercase italic tracking-tighter leading-none mb-8">
            LEVEL UP <br /> <span className="text-white/20">YOUR LIFE.</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto font-bold uppercase tracking-widest text-sm md:text-base mb-12">
            No long-term contracts. No hidden fees. Just pure sweat and results. Choose a plan that fits your ambition.
          </p>
        </motion.div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="w-full py-12 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${
                  plan.popular 
                  ? "bg-[#f9b917] border-[#f9b917] scale-105 z-10 shadow-[0_30px_60px_rgba(249,185,23,0.2)]" 
                  : "bg-white/5 border-white/10 backdrop-blur-md hover:border-white/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">
                    Most Popular
                  </div>
                )}

                {/* Icon & Name */}
                <div className={`mb-8 flex items-center justify-between ${plan.popular ? "text-black" : "text-[#f9b917]"}`}>
                  <div className={`${plan.popular ? "bg-black/10" : "bg-white/5"} p-4 rounded-2xl`}>
                    {plan.icon}
                  </div>
                  <h3 className={`text-2xl font-black uppercase italic ${plan.popular ? "text-black" : "text-white"}`}>
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className={`text-6xl font-[1000] tracking-tighter ${plan.popular ? "text-black" : "text-white"}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm font-bold ${plan.popular ? "text-black/60" : "text-white/40"}`}>/month</span>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-black/10 text-black" : "bg-[#f9b917]/20 text-[#f9b917]"}`}>
                        <FiCheck size={12} strokeWidth={4} />
                      </div>
                      <span className={`text-sm font-bold ${plan.popular ? "text-black/80" : "text-white/70"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                  plan.popular 
                  ? "bg-black text-[#f9b917] hover:scale-105 active:scale-95 shadow-2xl" 
                  : "bg-white/10 text-white hover:bg-[#f9b917] hover:text-black"
                }`}>
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>

          {/* Money Back Text */}
          <div className="flex flex-col items-center mt-16 gap-4">
            <div className="flex items-center gap-2 text-white/20">
                <FiShield />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  30-Day Money-Back Guarantee. No Hidden Contracts.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST STATS --- */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
                <h5 className="text-4xl md:text-5xl font-black italic text-[#f9b917] mb-2">20+</h5>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Elite Coaches</p>
            </div>
            <div>
                <h5 className="text-4xl md:text-5xl font-black italic text-[#f9b917] mb-2">15+</h5>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Daily Classes</p>
            </div>
            <div>
                <h5 className="text-4xl md:text-5xl font-black italic text-[#f9b917] mb-2">98%</h5>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Success Rate</p>
            </div>
            <div>
                <h5 className="text-4xl md:text-5xl font-black italic text-[#f9b917] mb-2">GLOBAL</h5>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Locations</p>
            </div>
        </div>
      </section>

      {/* --- CTA FOOTER MINI --- */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white/5">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
                <h2 className="text-4xl font-black uppercase italic mb-4">Still got questions?</h2>
                <p className="text-white/40 font-bold uppercase text-xs tracking-widest">Our crew is ready to help you decide.</p>
            </div>
            <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest"
            >
                View Full FAQ <FiArrowRight size={18} />
            </motion.button>
        </div>
      </section>

    </div>
  );
};

export default Membership;