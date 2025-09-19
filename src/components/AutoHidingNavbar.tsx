import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  to: string;
  icon: LucideIcon;
}

interface AutoHidingNavbarProps {
  items: NavItem[];
}

const AutoHidingNavbar: React.FC<AutoHidingNavbarProps> = ({ items }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY.current && currentY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    setTimeout(() => {
      if (window.scrollY < 50) {
        setIsHidden(false);
      }
    }, 500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navContainerVariants = {
    hidden: { y: '-70%', opacity: 0.25 },
    visible: { y: 0, opacity: 1 },
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "text-sm font-semibold text-gray-800 hover:text-green-600 transition-colors px-3 py-2 rounded-md",
      isActive && "text-green-700 bg-green-500/10"
    );

  return (
    <>
      {/* Hot zone to reveal nav on hover */}
      <div
        id="nav-hover-zone"
        className="fixed top-0 left-0 right-0 h-3 z-[1003]"
        onMouseEnter={() => setIsHidden(false)}
        aria-hidden="true"
      />

      {/* Navigation Bar */}
      <motion.header
        className="fixed top-2 left-0 right-0 flex justify-center z-[1002]"
        variants={navContainerVariants}
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onMouseLeave={() => {
          if (window.scrollY > 50) setIsHidden(true);
        }}
        onFocus={() => setIsHidden(false)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsHidden(true);
          }
        }}
      >
        <nav className="flex justify-between items-center w-[min(92vw,1280px)] px-4 py-2.5 
        bg-white/90 backdrop-blur-lg rounded-full shadow-lg border border-gray-200">
          {/* Brand/Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 mr-4">
            <img src="/images/logo-podorvert.png" alt="Podor Vert Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-2 list-none m-0 p-0 whitespace-nowrap">
            {items.map((item) => (
              <li key={item.name}>
                <NavLink to={item.to} className={navLinkClass}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA and Mobile Burger */}
          <div className="flex items-center gap-2">
            <Link
              to="/devenir-donateur"
              className="hidden lg:inline-block text-sm font-semibold bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              DON
            </Link>
            <button
              className="lg:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1004] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>
              </div>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={`mobile-${item.name}`}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-4 w-full p-3 rounded-lg text-gray-700 font-semibold",
                          isActive ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
                        )
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Link
                to="/devenir-donateur"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 w-full flex items-center justify-center text-sm font-semibold bg-green-600 text-white px-4 py-3 rounded-full hover:bg-green-700 transition-colors"
              >
                FAIRE UN DON
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AutoHidingNavbar;
