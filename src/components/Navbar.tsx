import { useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, useReducedMotion, useScroll } from 'motion/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { brandAssets, editorial } from '../lib/editorial';
import { ActionLink } from './Editorial';

const languages = {
  en: 'English', el: 'Ελληνικά', it: 'Italiano', de: 'Deutsch', es: 'Español', fr: 'Français',
};

export default function Navbar() {
  const { lang, setLang, t } = useApp();
  const copy = editorial(lang);
  const { pathname } = useLocation();
  const menu = useRef<HTMLDialogElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const items = [
    { to: '/accommodation', label: t.nav.rooms },
    { to: '/about', label: t.nav.about },
    { to: '/about#location', label: copy.location },
    { to: '/contact', label: t.nav.contact },
  ];

  function languageSelect(id: string) {
    return (
      <select id={id} className="language-select" value={lang} aria-label={copy.language} onChange={(event) => setLang(event.target.value)}>
        {Object.entries(languages).map(([code, name]) => <option key={code} value={code} lang={code}>{id === 'mobile-language' ? name : code.toUpperCase()}</option>)}
      </select>
    );
  }

  return (
    <header className="masthead">
      <div className="shell nav-inner">
        <Link to="/" className="brand">
          <img src={`${brandAssets}/vila-zizel-horizontal-reversed.svg`} width="184" height="37" alt="Vila Zizel" />
        </Link>
        <nav className="main-nav" aria-label={copy.navigation}>
          {items.map(({ to, label }) => to.includes('#')
            ? <Link key={to} to={to}>{label}</Link>
            : <NavLink key={to} to={to} end className={({ isActive }) => isActive || (to === '/accommodation' && pathname.startsWith('/rooms/')) ? 'current' : undefined}>{label}</NavLink>)}
        </nav>
        <div className="nav-actions">
          {languageSelect('desktop-language')}
          <ActionLink to="/contact" variant="outline">{copy.request}</ActionLink>
        </div>
        <button type="button" className="menu-trigger" aria-haspopup="dialog" aria-controls="mobile-navigation" onClick={() => menu.current?.showModal()}>
          {copy.menu} <Menu aria-hidden="true" />
        </button>
      </div>
      {!reduced && <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX: scrollYProgress }} />}
      <dialog ref={menu} id="mobile-navigation" className="mobile-menu" aria-label={copy.menu}>
        <div className="mobile-menu-top">
          <img src={`${brandAssets}/vila-zizel-horizontal.svg`} width="162" alt="Vila Zizel" />
          <button className="icon-button" type="button" aria-label={copy.close} onClick={() => menu.current?.close()}><X /></button>
        </div>
        <nav aria-label={copy.navigation}>
          {[{ to: '/', label: t.nav.home }, ...items].map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => menu.current?.close()}>{label}<ArrowUpRight aria-hidden="true" /></Link>
          ))}
        </nav>
        {languageSelect('mobile-language')}
      </dialog>
    </header>
  );
}
