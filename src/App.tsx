import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WeatherWidget from './components/WeatherWidget';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Contact from './pages/Contact';
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
        <div className="font-sans bg-sand-light text-earth min-h-screen selection:bg-floral/30 selection:text-botanical flex flex-col overflow-x-hidden relative">
          {/* Subtle global gradient background to blend sand and sky */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--color-sky)_0%,_transparent_50%)] opacity-20"></div>
          
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/contact" element={<Contact />} />
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
