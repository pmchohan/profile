import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: '/profile', label: 'Home' },
    { path: '/profile/about', label: 'About' },
    { path: '/profile/contact', label: 'Contact' },
    { path: '/profile/resume.pdf', label: 'Resume', external: true },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md sm:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-secondary font-bold text-xl">
              <span className="hidden sm:inline">Abdullah Faisal</span>
              <span className="sm:hidden">AF</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-4">
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-3 py-2 text-sm font-medium hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-3 py-2 text-sm font-medium hover:text-secondary transition-colors"
                  >
                    {location.pathname === link.path && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-secondary"
                      />
                    )}
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 rounded-md text-secondary hover:bg-tertiary transition-colors z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-16 right-0 bottom-0 w-64 bg-transparent sm:hidden z-50"
        >
          <div className="flex flex-col p-4 space-y-4">
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 text-sm font-medium hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute left-0 w-1 h-full bg-secondary" />
                  )}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;