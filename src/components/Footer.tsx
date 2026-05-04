import { Instagram, MapPin, Phone, Mail, Heart, Facebook } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { lang, t } = useApp();
  
  return (
    <footer className="bg-sand-light pt-24 pb-12 border-t border-botanical-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sky/5 -skew-x-12 translate-x-20"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-8">
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase italic font-bold text-gradient">Vila Zizel</Link>
            <p className="text-earth leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/vilazizel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-sky-deep hover:bg-gradient-to-tr hover:from-sky-deep hover:to-floral hover:text-white transition-all shadow-sm group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-sky-deep hover:bg-gradient-to-tr hover:from-sky-deep hover:to-floral hover:text-white transition-all shadow-sm group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-botanical border-b border-botanical-light pb-2">{t.footer.menu}</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-bold text-earth hover:text-sky-deep transition-colors">{t.nav.home}</Link>
              <Link to="/about" className="text-sm font-bold text-earth hover:text-sky-deep transition-colors">{t.nav.about}</Link>
              <Link to="/accommodation" className="text-sm font-bold text-earth hover:text-sky-deep transition-colors">{t.nav.rooms}</Link>
              <Link to="/contact" className="text-sm font-bold text-earth hover:text-sky-deep transition-colors">{t.nav.contact}</Link>
            </nav>
          </div>

          {/* Accommodation */}
          <div className="md:col-span-2 space-y-8">
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-botanical border-b border-botanical-light pb-2">{t.footer.stay}</h4>
             <nav className="flex flex-col space-y-4">
              <Link to="/accommodation" className="text-sm font-bold text-earth hover:text-sky-deep transition-colors">{t.roomsData.aphrodite.name}</Link>
              <Link to="/accommodation" className="text-sm font-bold text-earth hover:text-sky-deep transition-colors">{t.roomsData.hera.name}</Link>
              <Link to="/accommodation" className="text-sm font-bold text-earth hover:text-sky-deep transition-colors">{t.roomsData.poseidonHera.name}</Link>
              <Link to="/accommodation" className="text-sm font-bold text-earth hover:text-sky-deep transition-colors">{t.roomsData.zeus.name}</Link>
              <Link to="/accommodation" className="text-sm font-bold text-earth hover:text-sky-deep transition-colors">{t.roomsData.athina.name}</Link>
              <Link to="/accommodation" className="text-sm font-bold text-earth hover:text-sky-deep transition-colors">{t.roomsData.artemis.name}</Link>
             </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-botanical border-b border-botanical-light pb-2">{t.footer.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-earth group">
                <MapPin className="w-4 h-4 text-sky-deep group-hover:text-floral transition-colors" />
                <span className="text-sm font-medium group-hover:text-sky-deep transition-colors">Analipsi, Messenia, 240 01</span>
              </div>
              <div className="flex items-center gap-3 text-earth group">
                <Phone className="w-4 h-4 text-sky-deep group-hover:text-floral transition-colors" />
                <span className="text-sm font-bold group-hover:text-sky-deep transition-colors">+30 693 715 7283</span>
              </div>
              <div className="flex items-center gap-3 text-earth group">
                <Mail className="w-4 h-4 text-sky-deep group-hover:text-floral transition-colors" />
                <span className="text-sm font-medium group-hover:text-sky-deep transition-colors">hermancoku@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-botanical-light flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-earth font-bold opacity-70">
            © {new Date().getFullYear()} Vila Zizel. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold text-earth uppercase tracking-widest opacity-70">
            {t.footer.madeWith} <Heart className="w-3 h-3 text-floral fill-current animate-pulse" /> in Messenia
          </div>
        </div>
      </div>
    </footer>
  );
}
