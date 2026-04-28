import { motion } from 'motion/react';
import { Trees, Sun, Heart, MapPin, Car, Camera, Map, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function About() {
  const { lang, t } = useApp();

  const details = [
    { icon: <Heart className="w-6 h-6" />, title: t.about.hospitality, desc: t.about.hospitalityDesc },
    { icon: <Trees className="w-6 h-6" />, title: t.about.nature, desc: t.about.natureDesc },
    { icon: <Sun className="w-6 h-6" />, title: t.about.atmosphere, desc: t.about.atmosphereDesc },
  ];

  const localGems = t.about.localGems || [
    { name: 'Analipsi Beach', dist: '2 min walk', desc: 'Pristine waters and golden sand just steps away from your door.', img: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80' },
    { name: 'Ancient Messene', dist: '30 min drive', desc: 'One of the best-preserved archaeological sites in Greece.', img: 'https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80' },
    { name: 'Polylimnio Waterfalls', dist: '25 min drive', desc: 'A hidden natural network of many lakes and waterfalls.', img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80' },
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#FCF9F2] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[#E25A89] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">{t.about.tag}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-serif text-[#4A453E] mb-8 leading-[1.1]">
            {t.nav.about} & <br/><span className="italic font-light text-[#E25A89]">{t.about.handmade}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#8C7B60] max-w-2xl text-lg leading-relaxed font-bold">
            {t.about.desc}
          </motion.p>
        </div>
      </section>

      {/* Meet the Host */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
           <div className="bg-[#FCF9F2] rounded-[3rem] p-8 md:p-16 border border-[#E8DCC4] flex flex-col md:flex-row items-center gap-12 shadow-2xl shadow-rose-100/50">
              <div className="relative shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  {/* Actual photo placeholder logic - using a generic male face for Herman */}
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" className="w-full h-full object-cover" alt="Herman" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#E25A89] text-white p-3 rounded-full shadow-lg">
                   <ShieldCheck className="w-6 h-6" />
                </div>
              </div>
              <div className="text-center md:text-left space-y-4">
                 <span className="inline-block px-4 py-1 bg-white rounded-full text-[10px] font-bold tracking-widest text-[#E25A89] shadow-sm uppercase border border-[#E8DCC4]">Superhost • 6 Years</span>
                 <h2 className="text-4xl font-serif text-[#4A453E]">{t.about.hostTitle}</h2>
                 <p className="text-[#8C7B60] leading-relaxed font-medium text-lg">{t.about.hostDesc}</p>
                 <p className="text-[#8C7B60] leading-relaxed italic text-base mt-2 opacity-80">{t.about.hostExtra}</p>
                 <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4 text-[#4A453E]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Globe className="w-4 h-4 text-[#E25A89]" /> {t.about.speaks}: IT, EL, EN</div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><MapPin className="w-4 h-4 text-[#E25A89]" /> {t.about.schools}</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Property Details Grid */}
      <section className="py-32 bg-[#4A453E] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
           {[
             { label: t.about.estateSize, val: '4,000 m²', icon: <Map className="w-6 h-6" /> },
             { label: t.about.design, val: lang === 'el' ? 'Χειροποίητο' : 'Handmade', icon: <Heart className="w-6 h-6" /> },
             { label: t.about.theme, val: '12 Gods', icon: <Sun className="w-6 h-6" /> },
             { label: t.about.buildings, val: lang === 'el' ? 'Ανεξάρτητα' : 'Independent', icon: <Trees className="w-6 h-6" /> },
           ].map((item, i) => (
             <div key={i} className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl text-center group hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-[#E25A89] rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-white font-serif text-2xl mb-1">{item.val}</h4>
                <p className="text-[#E8DCC4] text-[10px] uppercase tracking-widest font-bold">{item.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {details.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[3rem] bg-[#FCF9F2] border border-[#E8DCC4] hover:shadow-2xl hover:shadow-rose-100 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#E25A89] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-[#4A453E] mb-4">{item.title}</h3>
                <p className="text-[#8C7B60] leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Surroundings Header */}
      <section className="py-24 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-[#E25A89] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">{t.explore.tag}</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#4A453E] mb-8">{t.explore.title} <span className="italic font-light text-[#E25A89]">{t.explore.highlight}</span></h2>
          <p className="text-[#8C7B60] max-w-2xl mx-auto text-lg leading-relaxed">{t.explore.desc}</p>
        </div>
      </section>

      {/* Local Gems */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localGems.map((gem, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden mb-6 shadow-xl">
                  <img src={gem.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={gem.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A453E]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] text-[#FFB347] font-bold uppercase tracking-widest block mb-2">{gem.dist}</span>
                    <h3 className="text-2xl font-serif">{gem.name}</h3>
                  </div>
                </div>
                <p className="text-[#8C7B60] leading-relaxed font-medium px-4">{gem.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Map Section */}
      <section id="location" className="py-32 px-6 md:px-12 bg-[#FCF9F2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#E25A89] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">{t.about.reachTag}</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#4A453E] mb-8">{t.about.reachTitle} <span className="italic font-light text-[#E25A89]">Messenia.</span></h2>
              <div className="space-y-6">
                <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-[#E8DCC4]">
                   <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center shrink-0"><Map className="w-6 h-6" /></div>
                   <div>
                     <h4 className="font-bold text-[#4A453E] mb-1">{t.about.reachAir}</h4>
                     <p className="text-xs text-[#8C7B60]">{t.about.reachAirDesc}</p>
                   </div>
                </div>
                <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-[#E8DCC4]">
                   <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0"><Car className="w-6 h-6" /></div>
                   <div>
                     <h4 className="font-bold text-[#4A453E] mb-1">{t.about.reachCar}</h4>
                     <p className="text-xs text-[#8C7B60]">{t.about.reachCarDesc}</p>
                   </div>
                </div>
                <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-[#E8DCC4]">
                   <div className="w-12 h-12 bg-rose-50 text-[#E25A89] rounded-2xl flex items-center justify-center shrink-0"><MapPin className="w-6 h-6" /></div>
                   <div>
                     <h4 className="font-bold text-[#4A453E] mb-1">{t.about.reachBeach}</h4>
                     <p className="text-xs text-[#8C7B60]">{t.about.reachBeachDesc}</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white relative">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d569.9365048221592!2d21.969529643030935!3d37.008445596599785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1361a53d7b7ee5c5%3A0xbf624f39cfcf596e!2sVila%20Zizel!5e1!3m2!1sen!2s!4v1777359928261!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-16 px-6">
          <Camera className="w-8 h-8 text-[#E25A89] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A453E] mb-6">{t.about.galleryTitle} <span className="italic font-light text-[#E25A89]">{t.about.galleryHighlight}</span></h2>
          <p className="text-[#8C7B60] max-w-xl mx-auto">{t.about.galleryDesc}</p>
        </div>
        <motion.div 
          className="flex gap-6 px-6 md:px-12 overflow-x-auto pb-12 no-scrollbar"
        >
          {['https://images.unsplash.com/photo-1544085311-11a028465b03?w=800&q=80', 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', 'https://images.unsplash.com/photo-1522771731478-44637043a860?w=800&q=80'].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
              <img src={img} className="w-full h-full object-cover" alt="Messenia landscape" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#4A453E] text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
              {t.about.readyDiscover} <span className="italic font-light text-[#E25A89]">Messenia</span>?
          </h2>
          <Link to="/accommodation" className="inline-flex items-center gap-3 bg-white text-[#4A453E] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#E25A89] hover:text-white transition-all group">
              {t.about.checkRooms} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
      </section>
    </div>
  );
}
