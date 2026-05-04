import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, Instagram, Wifi, Wind, Trees, Home as HomeIcon, Sun, 
  Star, Calendar, Users, Send, Camera, Droplets, MapPin, Map, Globe, Menu, X, ChevronRight, Heart
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
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

export default function Home() {
  const { lang, t } = useApp();

  const testimonials = t.testimonialsList || [
    { name: "Anna S.", text: "A hidden gem! The garden is breathtaking and the rooms are so peaceful." },
    { name: "Markos K.", text: "Authentic atmosphere. The BBQ area was perfect for our family dinners. Very close to the beach!" },
    { name: "Markos K.", text: "Lovely hosts and beautiful surroundings. The flowers everywhere make it feel like a dream." }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex overflow-hidden pt-20">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 relative w-full">
            {/* Left Branding Section */}
            <div className="lg:col-span-12 xl:col-span-6 px-6 sm:px-12 xl:px-24 flex flex-col justify-center py-16 sm:py-24 relative z-20 bg-gradient-to-b from-sand-light via-sand-light/95 lg:bg-gradient-to-r lg:from-sand-light lg:via-sand-light/95 to-transparent">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-2xl"
                >
                    <motion.div variants={fadeIn} className="flex items-center gap-3 mb-4 sm:mb-6">
                        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-sky-deep" />
                        <span className="block text-sky-deep text-[9px] sm:text-xs uppercase tracking-[0.4em] font-bold">
                            Analipsi • Messenia • 4,000 m²
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeIn} className="text-5xl sm:text-7xl xl:text-8xl font-serif leading-[1] mb-6 sm:mb-8 text-earth">
                        {t.hero.title} <br /> 
                        <span className="italic font-light text-gradient">{t.hero.subtitle}</span>
                    </motion.h1>
                    <motion.p variants={fadeIn} className="text-botanical text-sm sm:text-base md:text-lg leading-relaxed max-w-md mb-8 sm:mb-12 font-medium italic">
                        {t.hero.desc}
                    </motion.p>
                    <motion.div variants={fadeIn} className="flex flex-wrap gap-4 sm:gap-6 items-center">
                        <Link to="/accommodation" className="px-8 sm:px-10 py-4 sm:py-5 bg-sky-deep text-white uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold hover:bg-floral transition-all rounded-full shadow-xl shadow-sky-deep/20">
                            {t.hero.explore}
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-sand-medium flex items-center justify-center text-[7px] font-bold text-floral">Z</div>)}
                            </div>
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-botanical font-bold">{t.hero.loved}</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Right Image Section */}
            <div className="lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-3/5 xl:w-[55%] relative h-[400px] lg:h-auto order-1">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-sand-light via-transparent to-transparent z-10 hidden lg:block"></div>
                    <motion.img 
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80" 
                        alt="Mediterranean paradise" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Estate Teaser */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden glass-panel border-x-0 rounded-none">
        <div className="max-w-6xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                 <span className="text-floral font-bold text-xs uppercase tracking-[0.4em] mb-4 block underline underline-offset-8">Analipsi, Messenia</span>
                 <h2 className="text-5xl md:text-7xl font-serif text-earth leading-tight">
                    4,000 m² of <br/><span className="italic font-light text-gradient">{t.home.botanicalGrace}</span>
                 </h2>
                 <p className="text-botanical text-lg leading-relaxed font-bold italic">
                   {t.about.desc}
                 </p>
                 <div className="grid grid-cols-2 gap-8 py-8 border-y border-sand-medium/50">
                    <div>
                       <h4 className="text-4xl font-serif text-sky-deep mb-1">4.9 ★</h4>
                       <p className="text-[10px] uppercase tracking-widest font-bold text-botanical">{t.home.rating}</p>
                    </div>
                    <div>
                       <h4 className="text-4xl font-serif text-sky-deep mb-1">52</h4>
                       <p className="text-[10px] uppercase tracking-widest font-bold text-botanical">{t.home.reviews}</p>
                    </div>
                 </div>
                 <Link to="/about" className="inline-flex items-center gap-3 text-floral font-bold uppercase tracking-widest text-xs group">
                    {t.home.themeLink} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sky-deep" />
                 </Link>
              </div>
              <div className="relative">
                 <motion.div 
                   whileInView={{ rotate: 0 }}
                   initial={{ rotate: 2 }}
                   viewport={{ once: true }}
                   className="rounded-[4rem] overflow-hidden shadow-2xl relative z-10 aspect-[4/5]"
                 >
                    <img src="https://images.unsplash.com/photo-1542840410-3092f99611a3?w=1000&q=80" className="w-full h-full object-cover" alt="Main Entrance" />
                 </motion.div>
                 <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sand-light rounded-[3rem] border border-white/50 p-8 z-20 shadow-xl flex flex-col justify-center glass-panel">
                    <Heart className="w-10 h-10 text-floral mb-4" />
                    <p className="text-earth font-serif text-xl italic leading-tight">"A heaven for young gods and old friends."</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Rooms Cards */}
      <section className="py-32 px-6 md:px-12 bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <span className="text-sky-deep font-bold text-xs uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 transition-all hover:tracking-[0.6em] cursor-default">{t.home.exploreSuites}</span>
          <h2 className="text-5xl md:text-7xl font-serif text-earth mb-20">{t.rooms.title} <span className="italic font-light text-gradient">{t.rooms.highlight}</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            {[
              { name: t.rooms.aphrodite, img: "/Images/Rooms/Aphrodite/Exterior 1.avif", color: 'rose' },
              { name: t.rooms.hera, img: "/Images/Rooms/Hera/Exterior 1.avif", color: 'amber' },
              { name: t.rooms.poseidonHera, img: "/Images/Rooms/Poseidon-Hera/Bedroom A 1.avif", color: 'emerald' },
              { name: t.rooms.zeus, img: "/Images/Rooms/Zeus/Exterior 1.avif", color: 'blue' },
              { name: t.rooms.athina, img: "/Images/Rooms/Athina/Exterior 1.avif", color: 'purple' },
              { name: t.rooms.artemis, img: "/Images/Rooms/Artemis/Exterior 1.avif", color: 'orange' }
            ].map((room, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12 }}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer border border-white/20"
              >
                <img src={room.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={room.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/90 via-earth/30 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-floral mb-2 block">{t.about.handmade}</span>
                  <h3 className="text-3xl font-serif text-white">{room.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <Link to="/accommodation" className="mt-16 px-12 py-5 border-2 border-floral text-floral rounded-full font-bold uppercase tracking-widest text-xs hover:bg-floral hover:text-white transition-all shadow-lg shadow-floral/20">
             {t.home.showAll}
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden glass-panel border-x-0 rounded-none">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="text-floral font-bold text-xs uppercase tracking-[0.4em] mb-4 block underline underline-offset-8">{t.testimonials.tag}</span>
            <h2 className="text-4xl md:text-6xl font-serif text-earth mb-20">{t.home.guestJourneys}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-sand-light/50 backdrop-blur-sm p-10 rounded-[3rem] shadow-xl border border-white/50 hover:shadow-sky/20 transition-all">
                <div className="flex gap-1 text-sky-deep mb-6 justify-center">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-botanical leading-relaxed mb-8 italic font-medium">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-floral border border-sand-medium">{testimonial.name[0]}</div>
                  <span className="font-bold text-earth tracking-tight">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-40 bg-transparent relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
              <h2 className="text-5xl md:text-8xl font-serif text-earth mb-12 leading-tight">
                  {t.home.mythosBegins}
              </h2>
              <Link to="/contact" className="inline-block px-12 py-6 bg-sky-deep text-white rounded-full font-bold uppercase tracking-widest shadow-2xl hover:bg-sky transition-all scale-110">
                  {t.home.secureStay}
              </Link>
          </div>
          {/* Decore Elements */}
          <Sun className="absolute top-20 left-20 w-32 h-32 text-sky/30 animate-pulse" />
          <Trees className="absolute bottom-20 right-20 w-32 h-32 text-botanical/20 animate-pulse" />
      </section>

      {/* Instagram Social Section */}
      <section className="py-24 bg-botanical text-white overflow-hidden relative border-t-4 border-floral">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-sky-deep)_0%,_transparent_50%)] opacity-30"></div>
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
              <Instagram className="w-12 h-12 mx-auto mb-8 text-sky" />
              <h2 className="text-4xl font-serif mb-12">{t.home.glow}</h2>
              <div className="flex gap-4 overflow-x-auto no-scrollbar pb-12">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="flex-shrink-0 w-64 h-64 rounded-3xl overflow-hidden border border-white/20 shadow-xl group">
                        <img src={`https://images.unsplash.com/photo-1542840410-3092f99611a3?w=400&q=80&sig=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Instagram post" />
                    </div>
                  ))}
              </div>
              <a href="https://instagram.com/vilazizel" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-white/10 backdrop-blur rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/20 hover:text-sky transition-all border border-white/20">
                  @vilazizel
              </a>
          </div>
      </section>
    </div>
  );
}
