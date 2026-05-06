import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import { AppProvider } from './context/AppContext';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="font-sans bg-alabaster text-obsidian min-h-screen selection:bg-divine/25 selection:text-obsidian flex flex-col overflow-x-hidden relative">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.10)_0%,_transparent_48%)]"></div>
          
          <ScrollToTop />
          <SEO />
          <Navbar />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/rooms/:slug" element={<RoomDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/policies" element={<Policies />} />
            </Routes>
          </main>
          <WeatherWidget />
          <div className="relative z-10">
             <Footer />
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}
