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
        <div className="font-sans bg-[#FCF9F2] text-[#4A453E] min-h-screen selection:bg-rose-200 selection:text-rose-900 flex flex-col overflow-x-hidden">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <WeatherWidget />
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}
