import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Membership from './pages/MemberShip';

// import Programs from './pages/Programs'; // Jab file bana lo to uncomment kar dena

// Scroll to Top Logic (Page change par screen top par chali jaye)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-[#f9b917] selection:text-[#1a1a1a] overflow-x-hidden">
      {/* Scroll fix for route changes */}
      <ScrollToTop />

      {/* Navbar globally fixed top par rahay ga */}
      <Navbar />

      {/* AnimatePresence for smooth page transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Main Home Route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/membership" element={<Membership/>} />
          <Route path="/contact" element={<Contact/>} />
          

        </Routes>
      </AnimatePresence>
      
      {/* Footer yahan add kar saktay ho globally */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;