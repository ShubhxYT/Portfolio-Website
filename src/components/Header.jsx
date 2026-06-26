import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaCoffee } from 'react-icons/fa';
import { useNavbar } from '../contexts/NavbarContext.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { StaggeredMenu } from './StaggeredMenu.jsx';

const CLIP_PATH =
  'polygon(0 0, 100% 0, 100% 85%, 68% 85%, 64% 100%, 36% 100%, 32% 85%, 0 85%)';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '/gallery', label: 'Gallery', isRoute: true },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const { isNavbarVisible, isMenuOpen, setIsMenuOpen } = useNavbar();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    } else if (location.pathname === '/' && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleNavClick = (e, href, isRoute) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (isRoute) navigate(href);
    else if (location.pathname === '/') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    } else navigate('/' + href);
  };

  const NavLink = ({ href, label, isRoute }) => {
    const isActive = isRoute
      ? location.pathname === href.slice(1)
      : location.pathname === '/' && location.hash === href;
    return (
      <li>
        <a
          href={href}
          onClick={(e) => handleNavClick(e, href, isRoute)}
          className={`relative block font-grotesk font-semibold text-sm uppercase tracking-wider py-2 transition-transform duration-200 hover:scale-110 group ${
            isActive ? 'text-primary' : 'text-text'
          }`}
        >
          {label}
          <span
            className={`absolute bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full ${
              isActive ? 'w-full' : 'w-0'
            }`}
          />
        </a>
      </li>
    );
  };

  return (
    <>
      <AnimatePresence>
        {isNavbarVisible && (
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full z-50"
          >
            <header
              style={{
                WebkitClipPath: isMenuOpen ? 'none' : CLIP_PATH,
                clipPath: isMenuOpen ? 'none' : CLIP_PATH,
              }}
              className={`relative z-20 pt-3 pb-5 transition-all duration-300 ${
                isScrolled
                  ? 'bg-bg/85 backdrop-blur-md border-b-neoSm border-border'
                  : 'bg-bg/95 backdrop-blur'
              }`}
            >
              <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Mobile brand + hamburger */}
                <div className="w-full flex items-center justify-between md:hidden">
                  <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2">
                    <span className="w-10 h-10 flex items-center justify-center border-neo border-border bg-primary font-grotesk font-bold text-xl shadow-neoSm text-black">
                      SS
                    </span>
                    <span className="font-grotesk text-sm font-bold text-text">Shubh Somani</span>
                  </a>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-text text-3xl"
                    aria-label="Open menu"
                  >
                    &#9776;
                  </button>
                </div>

                {/* Desktop */}
                <div className="hidden md:grid grid-cols-3 w-full items-center px-8 min-h-[48px]">
                  <ul className="justify-self-start flex items-center list-none gap-8">
                    {NAV_LINKS.slice(0, 3).map((l) => (
                      <NavLink key={l.label} {...l} />
                    ))}
                  </ul>

                  <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="justify-self-center flex items-center gap-2"
                  >
                    <span className="w-12 h-12 flex items-center justify-center border-neo border-border bg-primary font-grotesk font-bold text-xl shadow-neo text-black">
                      SS
                    </span>
                  </a>

                  <div className="justify-self-end flex items-center gap-4">
                    <ul className="flex items-center list-none gap-8">
                      {NAV_LINKS.slice(3).map((l) => (
                        <NavLink key={l.label} {...l} />
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, '#contact')}
                      className="hidden lg:block px-4 py-2 border-neo border-border bg-yellow font-grotesk font-bold text-sm uppercase shadow-neoSm hover:bg-primary hover:-translate-y-0.5 transition-all"
                    >
                      Get in Touch!
                    </a>
                    <button
                      onClick={toggleTheme}
                      className="p-2 border-neo border-border bg-white text-text shadow-neoSm hover:shadow-neo transition-all"
                      aria-label="Toggle theme"
                    >
                      {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                  </div>
                </div>
              </nav>
            </header>
          </motion.div>
        )}
      </AnimatePresence>

      <StaggeredMenu
        isOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
        items={[
          ...NAV_LINKS.map((l) => ({
            label: l.label,
            link: l.href,
            onClick: (e) => handleNavClick(e, l.href, l.isRoute),
          })),
          {
            label: 'Resume',
            link: '/resume',
            onClick: (e) => handleNavClick(e, '/resume', true),
          },
        ]}
        socialItems={[
          { label: 'GitHub', link: 'https://github.com/ShubhxYT' },
          { label: 'LinkedIn', link: 'https://www.linkedin.com/in/shubh-somani' },
          { label: 'Website', link: 'https://shubhsomani.tech' },
        ]}
        displaySocials
        displayItemNumbering
        colors={['#ffd93d', '#66d9ef', '#a8e6cf', '#ff6b9d']}
        accentColor="#ff6b9d"
        menuButtonColor={theme === 'dark' ? '#a8e6cf' : '#000000'}
        openMenuButtonColor="#ffd93d"
      />
    </>
  );
}
