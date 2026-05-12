import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useApp, translations } from '../context/AppContext';
import BrandIcon from './BrandIcon';

export default function Navbar() {
  const { lang, setLang, t } = useApp();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'home', label: t.nav.home, path: '/', icon: 'temple' as const },
    { name: 'about', label: t.nav.about, path: '/about', icon: 'scroll' as const },
    { name: 'rooms', label: t.nav.rooms, path: '/accommodation', icon: 'arch' as const },
    { name: 'contact', label: t.nav.contact, path: '/contact', icon: 'letter' as const },
  ];

  const handleNavClick = (_path: string) => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Navbar Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-alabaster lg:hidden flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-mythic text-xl tracking-[0.28em] uppercase text-obsidian">Vila Zizel</Link>
              <button onClick={toggleMenu} className="p-3 rounded-full border border-divine/25 text-obsidian">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-8 text-3xl font-serif text-obsidian">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="flex items-center justify-between group"
                >
                  <span className="flex items-center gap-4 group-hover:text-divine transition-colors">
                    <BrandIcon name={item.icon} className="h-6 w-6 text-divine" />
                    {item.label}
                  </span>
                  <ChevronRight className="w-6 h-6 text-divine/40 group-hover:text-divine transition-colors" />
                </Link>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-10 border-t border-divine/20">
               {Object.keys(translations).map(l => (
                 <button 
                  key={l}
                  onClick={() => { setLang(l); toggleMenu(); }}
                  className={`px-4 py-2 rounded-full font-mythic text-[10px] uppercase tracking-widest transition-all ${lang === l ? 'bg-obsidian text-divine shadow-divine' : 'bg-marble-shadow/70 text-obsidian hover:border-divine border border-transparent'}`}
                 >
                   {l}
                 </button>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed left-1/2 top-4 z-[150] flex w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full px-4 py-3 glass-nav sm:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-mythic text-sm sm:text-base tracking-[0.28em] uppercase text-obsidian"
        >
          <Link to="/">Vila Zizel</Link>
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-obsidian/78">
          {navItems.map(item => (
            <Link key={item.name} to={item.path} className={`relative whitespace-nowrap transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-divine after:transition-all after:duration-300 hover:text-obsidian hover:after:w-full ${location.pathname === item.path ? 'text-obsidian after:w-full' : 'after:w-0'}`}>{item.label}</Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Selector */}
            <div className="relative hidden md:block">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full text-[10px] font-bold text-obsidian hover:text-divine transition-all border border-divine/20"
              >
                <Globe className="w-3 h-3" />
                <span className="uppercase">{lang}</span>
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-32 bg-alabaster/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-divine/20 overflow-hidden py-2"
                  >
                    {Object.keys(translations).map(l => (
                      <button 
                        key={l}
                        onClick={() => { setLang(l); setIsLangOpen(false); }}
                        className={`w-full text-left px-4 py-2 font-mythic text-[10px] uppercase tracking-widest hover:bg-divine/10 hover:text-obsidian transition-all flex items-center justify-between ${lang === l ? 'text-divine' : 'text-obsidian'}`}
                      >
                        {l}
                        {lang === l && <div className="w-1.5 h-1.5 bg-divine rounded-full" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className="hidden sm:flex items-center gap-2 rounded-full border border-divine/30 bg-obsidian px-5 py-3 font-mythic text-[10px] uppercase tracking-[0.24em] text-divine transition-all hover:border-divine hover:shadow-divine">
                {t.nav.book}
            </Link>
            <button onClick={toggleMenu} className="lg:hidden p-3 rounded-full text-obsidian hover:text-divine border border-divine/20">
              <Menu className="w-6 h-6" />
            </button>
        </div>
      </nav>
    </>
  );
}
