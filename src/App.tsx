import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { MotionConfig, useReducedMotion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WeatherWidget from './components/WeatherWidget';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Contact from './pages/Contact';
import RoomDetail from './pages/RoomDetail';
import Policies from './pages/Policies';
import { AppProvider, useApp } from './context/AppContext';
import { brandAssets, editorial } from './lib/editorial';
import { ActionLink } from './components/Editorial';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const reduced = useReducedMotion();
  const lastPath = useRef(pathname);

  useEffect(() => {
    const changedPage = pathname !== lastPath.current;
    lastPath.current = pathname;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.tabIndex = -1;
        element.focus({ preventScroll: true });
        element.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (changedPage) document.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true });
  }, [pathname, hash, reduced]);

  return null;
}

function Site() {
  const { lang } = useApp();
  const { pathname } = useLocation();
  const copy = editorial(lang);
  const room = pathname.startsWith('/rooms/') ? pathname.split('/')[2] : '';
  const requestTo = room ? `/contact?room=${encodeURIComponent(room)}` : '/contact';

  useEffect(() => {
    const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (icon) icon.href = `${brandAssets}/ionic-olive-mark.svg`;
  }, []);

  return (
    <div className="site">
      <ScrollToTop />
      <SEO />
      <a className="skip-link" href="#main-content">{copy.skip}</a>
      <Navbar />
      <WeatherWidget key={pathname} />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/rooms/:slug" element={<RoomDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </main>
      <Footer />
      {pathname !== '/contact' && <div className="mobile-request"><ActionLink to={requestTo}>{room ? copy.requestRoom : copy.request}</ActionLink></div>}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MotionConfig reducedMotion="user">
        <Router><Site /></Router>
      </MotionConfig>
    </AppProvider>
  );
}
