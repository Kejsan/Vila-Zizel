import { Instagram, MapPin, Phone, Mail, Heart, Facebook } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { lang, t } = useApp();
  
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-[#E8DCC4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-8">
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase italic text-[#E25A89] font-bold">Vila Zizel</Link>
            <p className="text-[#8C7B60] leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/vilazizel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-[#FCF9F2] flex items-center justify-center text-[#E25A89] hover:bg-[#E25A89] hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-[#FCF9F2] flex items-center justify-center text-[#E25A89] hover:bg-[#E25A89] hover:text-white transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#4A453E] border-b border-[#E8DCC4] pb-2">{t.footer.menu}</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-bold text-[#8C7B60] hover:text-[#E25A89] transition-colors">{t.nav.home}</Link>
              <Link to="/about" className="text-sm font-bold text-[#8C7B60] hover:text-[#E25A89] transition-colors">{t.nav.about}</Link>
              <Link to="/accommodation" className="text-sm font-bold text-[#8C7B60] hover:text-[#E25A89] transition-colors">{t.nav.rooms}</Link>
              <Link to="/contact" className="text-sm font-bold text-[#8C7B60] hover:text-[#E25A89] transition-colors">{t.nav.contact}</Link>
            </nav>
          </div>

          {/* Accommodation */}
          <div className="md:col-span-2 space-y-8">
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#4A453E] border-b border-[#E8DCC4] pb-2">{t.footer.stay}</h4>
             <nav className="flex flex-col space-y-4">
              <Link to="/accommodation" className="text-sm font-bold text-[#8C7B60] hover:text-[#E25A89] transition-colors">{t.roomsData.aphrodite.name}</Link>
              <Link to="/accommodation" className="text-sm font-bold text-[#8C7B60] hover:text-[#E25A89] transition-colors">{t.roomsData.hera.name}</Link>
              <Link to="/accommodation" className="text-sm font-bold text-[#8C7B60] hover:text-[#E25A89] transition-colors">{t.roomsData.poseidonHera.name}</Link>
             </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#4A453E] border-b border-[#E8DCC4] pb-2">{t.footer.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#8C7B60]">
                <MapPin className="w-4 h-4 text-[#E25A89]" />
                <span className="text-sm font-medium">Analipsi, Messenia, 240 01</span>
              </div>
              <div className="flex items-center gap-3 text-[#8C7B60]">
                <Phone className="w-4 h-4 text-[#E25A89]" />
                <span className="text-sm font-bold">+30 693 715 7283</span>
              </div>
              <div className="flex items-center gap-3 text-[#8C7B60]">
                <Mail className="w-4 h-4 text-[#E25A89]" />
                <span className="text-sm font-medium">hermancoku@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-[#E8DCC4] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-[#8C7B60] font-bold">
            © {new Date().getFullYear()} Vila Zizel. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold text-[#8C7B60] uppercase tracking-widest">
            {t.footer.madeWith} <Heart className="w-3 h-3 text-[#E25A89] fill-current" /> in Messenia
          </div>
        </div>
      </div>
    </footer>
  );
}
