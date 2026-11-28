import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { usePrivacy } from '../context/PrivacyContext';
import { brandAssets, directionsUrl, editorial, propertyContact } from '../lib/editorial';
import { privacyCopy } from '../lib/privacy';
import { localizedRoom, roomDefinitions, type RoomKey } from '../lib/rooms';

const olympianOrder: Record<RoomKey, number> = {
  zeus: 1,
  hera: 2,
  poseidonHera: 3,
  athina: 4,
  artemis: 5,
  aphrodite: 6,
};
const footerStays = [...roomDefinitions].sort((first, second) => olympianOrder[first.key] - olympianOrder[second.key]);

export default function Footer() {
  const { lang, t } = useApp();
  const { openPreferences } = usePrivacy();
  const copy = editorial(lang);
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand"><img src={`${brandAssets}/vila-zizel-horizontal-reversed.svg`} alt="Vila Zizel" width="206" /></Link>
          <p>{t.footer.desc}</p>
        </div>
        <div>
          <h2 className="eyebrow">{t.footer.menu}</h2>
          <ul>
            <li><Link to="/">{t.nav.home}</Link></li>
            <li><Link to="/accommodation">{t.nav.rooms}</Link></li>
            <li><Link to="/about">{t.nav.about}</Link></li>
            <li><Link to="/contact">{t.nav.contact}</Link></li>
            <li><Link to="/policies">{copy.policies}</Link></li>
            <li><button type="button" aria-haspopup="dialog" onClick={openPreferences}>{privacyCopy(lang).manage}</button></li>
          </ul>
        </div>
        <div>
          <h2 className="eyebrow">{t.footer.stay}</h2>
          <ul>{footerStays.map((room) => (
            <li key={room.slug}><Link to={`/rooms/${room.slug}`}>{localizedRoom(room, t.roomsData).name}</Link></li>
          ))}</ul>
        </div>
        <div>
          <h2 className="eyebrow">{t.footer.contact}</h2>
          <ul>
            <li><a href={directionsUrl}>Analipsi 240 01, Messenia, Greece <ArrowUpRight aria-hidden="true" /></a></li>
            <li><a href={propertyContact.phoneHref}>{propertyContact.phone}</a></li>
            <li><a href={`mailto:${propertyContact.email}`}>{propertyContact.email}</a></li>
            <li><a href={propertyContact.instagram}>Instagram <ArrowUpRight aria-hidden="true" /></a></li>
          </ul>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Vila Zizel. {t.footer.rights}</p>
        <img src={`${brandAssets}/ionic-olive-mark-reversed.svg`} alt="" width="32" height="36" />
      </div>
    </footer>
  );
}
