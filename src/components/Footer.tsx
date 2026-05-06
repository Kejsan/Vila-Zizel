import { Instagram, MapPin, Phone, Mail, Facebook } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useApp();
  
  return (
    <footer className="bg-obsidian pt-24 pb-12 text-alabaster relative overflow-hidden">
      <div className="absolute inset-x-8 top-0 meander-divider"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-8">
            <Link to="/" className="font-mythic text-2xl tracking-[0.3em] uppercase text-divine">Vila Zizel</Link>
            <p className="text-alabaster/68 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/vilazizel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-divine/20 flex items-center justify-center text-divine hover:border-divine hover:shadow-divine transition-all group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-divine/20 flex items-center justify-center text-divine hover:border-divine hover:shadow-divine transition-all group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-8">
            <h4 className="font-mythic text-[10px] uppercase tracking-[0.3em] text-divine border-b border-divine/20 pb-2">{t.footer.menu}</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium text-alabaster/66 hover:text-divine transition-colors">{t.nav.home}</Link>
              <Link to="/about" className="text-sm font-medium text-alabaster/66 hover:text-divine transition-colors">{t.nav.about}</Link>
              <Link to="/accommodation" className="text-sm font-medium text-alabaster/66 hover:text-divine transition-colors">{t.nav.rooms}</Link>
              <Link to="/contact" className="text-sm font-medium text-alabaster/66 hover:text-divine transition-colors">{t.nav.contact}</Link>
              <Link to="/policies" className="text-sm font-medium text-alabaster/66 hover:text-divine transition-colors">Policies</Link>
            </nav>
          </div>

          {/* Accommodation */}
          <div className="md:col-span-2 space-y-8">
             <h4 className="font-mythic text-[10px] uppercase tracking-[0.3em] text-divine border-b border-divine/20 pb-2">{t.footer.stay}</h4>
             <nav className="flex flex-col space-y-4">
              <Link to="/rooms/aphrodite" className="text-sm font-medium text-alabaster/66 hover:text-divine transition-colors">{t.roomsData.aphrodite.name}</Link>
              <Link to="/rooms/hera" className="text-sm font-medium text-alabaster/66 hover:text-divine transition-colors">{t.roomsData.hera.name}</Link>
              <Link to="/rooms/poseidon-hera" className="text-sm font-medium text-alabaster/66 hover:text-divine transition-colors">{t.roomsData.poseidonHera.name}</Link>
              <Link to="/rooms/zeus" className="text-sm font-medium text-alabaster/66 hover:text-divine transition-colors">{t.roomsData.zeus.name}</Link>
              <Link to="/rooms/athina" className="text-sm font-medium text-alabaster/66 hover:text-divine transition-colors">{t.roomsData.athina.name}</Link>
              <Link to="/rooms/artemis" className="text-sm font-medium text-alabaster/66 hover:text-divine transition-colors">{t.roomsData.artemis.name}</Link>
             </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="font-mythic text-[10px] uppercase tracking-[0.3em] text-divine border-b border-divine/20 pb-2">{t.footer.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-alabaster/66 group">
                <MapPin className="w-4 h-4 text-divine transition-colors" />
                <span className="text-sm font-medium">Analipsi, Messenia, 240 01</span>
              </div>
              <div className="flex items-center gap-3 text-alabaster/66 group">
                <Phone className="w-4 h-4 text-divine transition-colors" />
                <span className="text-sm font-medium">+30 693 715 7283</span>
              </div>
              <div className="flex items-center gap-3 text-alabaster/66 group">
                <Mail className="w-4 h-4 text-divine transition-colors" />
                <span className="text-sm font-medium">hermancoku@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-divine/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mythic text-[10px] uppercase tracking-widest text-alabaster/50">
            © {new Date().getFullYear()} Vila Zizel. {t.footer.rights}
          </p>
          <div className="font-mythic text-[10px] text-alabaster/50 uppercase tracking-widest">
            Messenia · Greece
          </div>
        </div>
      </div>
    </footer>
  );
}
