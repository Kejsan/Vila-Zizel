import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useApp, translations } from '../context/AppContext';

export default function Navbar() {
  const { lang, setLang, t } = useApp();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'home', label: t.nav.home, path: '/' },
    { name: 'about', label: t.nav.about, path: '/about' },
    { name: 'rooms', label: t.nav.rooms, path: '/accommodation' },
    { name: 'contact', label: t.nav.contact, path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
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
            className="fixed inset-0 z-[200] bg-white lg:hidden flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-serif text-2xl tracking-widest uppercase italic text-[#E25A89] font-bold">Vila Zizel</Link>
              <button onClick={toggleMenu} className="p-2 bg-[#FCF9F2] rounded-full text-[#4A453E]">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-8 text-2xl font-serif text-[#4A453E]">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="flex items-center justify-between group"
                >
                  <span className="group-hover:text-[#E25A89] transition-colors">{item.label}</span>
                  <ChevronRight className="w-6 h-6 text-[#E8DCC4] group-hover:text-[#E25A89] transition-colors" />
                </Link>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-10 border-t border-[#E8DCC4]">
               {Object.keys(translations).map(l => (
                 <button 
                  key={l}
                  onClick={() => { setLang(l); toggleMenu(); }}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest ${lang === l ? 'bg-[#E25A89] text-white' : 'bg-[#FCF9F2] text-[#8C7B60]'}`}
                 >
                   {l}
                 </button>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="p-4 sm:px-12 sm:py-6 flex justify-between items-center z-[150] fixed top-0 left-0 right-0 bg-[#FCF9F2]/80 backdrop-blur-lg border-b border-[#E8DCC4]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-serif text-xl sm:text-2xl tracking-widest uppercase italic text-[#E25A89] font-bold"
        >
          <Link to="/">Vila Zizel</Link>
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6 xl:space-x-10 text-[9px] xl:text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7B60]">
          {navItems.map(item => (
            <Link key={item.name} to={item.path} className={`hover:text-[#E25A89] transition-colors whitespace-nowrap ${location.pathname === item.path ? 'text-[#E25A89]' : ''}`}>{item.label}</Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Selector */}
            <div className="relative hidden md:block">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-sm text-[10px] font-bold text-[#8C7B60] hover:bg-stone-50 transition-all border border-[#E8DCC4]"
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
                    className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-[#E8DCC4] overflow-hidden py-2"
                  >
                    {Object.keys(translations).map(l => (
                      <button 
                        key={l}
                        onClick={() => { setLang(l); setIsLangOpen(false); }}
                        className={`w-full text-left px-4 py-2 text-[10px] uppercase font-bold tracking-widest hover:bg-rose-50 hover:text-[#E25A89] transition-all flex items-center justify-between ${lang === l ? 'text-[#E25A89]' : 'text-[#8C7B60]'}`}
                      >
                        {l}
                        {lang === l && <div className="w-1.5 h-1.5 bg-[#E25A89] rounded-full" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className="hidden sm:flex items-center gap-2 px-6 py-3 bg-[#E25A89] hover:bg-[#C94772] transition-all text-xs uppercase tracking-[0.2em] text-white font-bold rounded-full shadow-lg shadow-rose-200/50">
                {t.nav.book}
            </Link>
            <button onClick={toggleMenu} className="lg:hidden p-3 bg-white rounded-full shadow-md text-[#E25A89]">
              <Menu className="w-6 h-6" />
            </button>
        </div>
      </nav>
    </>
  );
}
