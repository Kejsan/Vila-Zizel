import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Wifi, Home, Sun, CheckCircle2, Coffee, Tv, Utensils, UtensilsCrossed, Users, Maximize, Clock, Ban, Cigarette, ShieldCheck, ChevronRight, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Accommodation() {
  const { lang, t } = useApp();
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const roomsMap = t.roomsData || {
    zeus: { name: 'Zeus Suite', desc: '', longDesc: '', features: [] },
    hera: { name: 'Hera Room', desc: '', longDesc: '', features: [] },
    poseidon: { name: 'Poseidon Studio', desc: '', longDesc: '', features: [] }
  };

  const rooms = [
    { 
      id: 1, 
      name: roomsMap.zeus.name, 
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
      price: "From €95",
      desc: roomsMap.zeus.desc,
      features: roomsMap.zeus.features,
      longDesc: roomsMap.zeus.longDesc
    },
    { 
      id: 2, 
      name: roomsMap.hera.name, 
      img: "https://images.unsplash.com/photo-1522771731478-44637043a860?w=1200&q=80",
      price: "From €85",
      desc: roomsMap.hera.desc,
      features: roomsMap.hera.features,
      longDesc: roomsMap.hera.longDesc
    },
    { 
      id: 3, 
      name: roomsMap.poseidon.name, 
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
      price: "From €80",
      desc: roomsMap.poseidon.desc,
      features: roomsMap.poseidon.features,
      longDesc: roomsMap.poseidon.longDesc
    }
  ];

  const rules = [
    { icon: <Clock className="w-5 h-5 text-[#E25A89]" />, label: t.rooms.checkIn },
    { icon: <Clock className="w-5 h-5 text-[#E25A89]" />, label: t.rooms.checkOut },
    { icon: <Users className="w-5 h-5 text-[#E25A89]" />, label: t.rooms.maxGuests },
    { icon: <Ban className="w-5 h-5 text-[#E25A89]" />, label: t.rooms.noPets },
    { icon: <Cigarette className="w-5 h-5 text-[#E25A89]" />, label: t.rooms.smoking },
    { icon: <ShieldCheck className="w-5 h-5 text-[#E25A89]" />, label: t.rooms.hostGreets },
    { icon: <Calendar className="w-5 h-5 text-[#E25A89]" />, label: t.rooms.longTerm },
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#FCF9F2] border-b border-[#E8DCC4] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[#E25A89] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">{t.rooms.tag}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-serif text-[#4A453E] mb-8 leading-tight">
            {t.rooms.title} <span className="italic font-light text-[#E25A89]">{t.rooms.highlight}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#8C7B60] max-w-2xl text-lg leading-relaxed font-medium">
            {lang === 'el' ? 'Ανακαλύψτε τα πρόσφατα ανακαινισμένα δωμάτιά μας, με χειροποίητο σχεδιασμό εμπνευσμένο από τη μυθολογία.' : 
             lang === 'it' ? 'Scopri le nostre camere recentemente rinnovate, con design fatti a mano ispirati alla mitologia.' :
             lang === 'de' ? 'Entdecken Sie unsere renovierten Zimmer mit handgefertigtem Design, inspiriert von der Mythologie.' :
             lang === 'es' ? 'Descubra nuestras habitaciones recién renovadas, con diseños hechos a mano inspirados en la mitología.' :
             lang === 'fr' ? 'Découvrez nos chambres récemment rénovées, aux designs artisanaux inspirés de la mythologie.' :
             'Explore our recently renovated rooms, featuring handmade designs inspired by the 12 Gods of Olympus.'}
          </motion.p>
        </div>
      </section>

      {/* House Rules Bar */}
      <section className="py-12 bg-white border-b border-[#E8DCC4] shadow-sm relative z-20">
        <div className="max-w-6xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-12 whitespace-nowrap min-w-max">
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#4A453E] pr-8 border-r border-[#E8DCC4]">{t.rooms.rulesTitle}</h4>
             <div className="flex gap-10">
                {rules.map((rule, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[#8C7B60]">
                    {rule.icon}
                    <span className="text-[10px] font-bold uppercase tracking-widest">{rule.label}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Rooms Slider/List */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-32">
          {rooms.map((room, idx) => (
            <div key={room.id} id={`room-${room.id}`} className="flex flex-col gap-12">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[450px] md:h-[600px] rounded-[4rem] overflow-hidden shadow-2xl"
                  >
                    <img src={room.img} className="w-full h-full object-cover" alt={room.name} />
                    <div className="absolute top-8 left-8 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#E25A89] shadow-lg">
                      {lang === 'el' ? 'Από €80' : 'From €80'}
                    </div>
                  </motion.div>
                </div>
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-[#E25A89] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">{t.about.handmade}</span>
                  <h2 className="text-5xl md:text-6xl font-serif text-[#4A453E] mb-6 leading-tight">{room.name}</h2>
                  <p className="text-[#8C7B60] text-lg leading-relaxed mb-8 italic font-medium">{room.desc}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {room.features.map((feat, i) => (
                      <span key={i} className="px-4 py-2 bg-[#FCF9F2] rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#8C7B60] border border-[#E8DCC4]">
                        {feat}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedRoom(selectedRoom === room.id ? null : room.id)}
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-[#4A453E] text-white rounded-full uppercase tracking-widest text-xs font-bold hover:bg-[#E25A89] transition-all shadow-xl shadow-rose-100"
                  >
                    {selectedRoom === room.id ? (lang === 'el' ? 'Λιγότερα' : lang === 'it' ? 'Meno' : lang === 'fr' ? 'Moins' : 'Show Less') : t.rooms.learnMore}
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedRoom === room.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>
                </div>
              </div>

              {/* Expandable Details Section */}
              <AnimatePresence>
                {selectedRoom === room.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-10 lg:p-16 bg-[#FCF9F2] rounded-[4rem] border border-[#E8DCC4] grid grid-cols-1 md:grid-cols-2 gap-16 shadow-inner">
                      <div className="space-y-6">
                        <h4 className="font-serif text-3xl text-[#E25A89] mb-6 italic">{t.rooms.olympianExp}</h4>
                        <p className="text-[#8C7B60] leading-relaxed text-lg font-medium">{room.longDesc}</p>
                        <div className="space-y-4">
                           <div className="flex items-center gap-4 text-[#4A453E]">
                              <ShieldCheck className="w-6 h-6 text-[#E25A89]" />
                              <span className="font-bold text-sm tracking-wide uppercase">{t.about.renovated}</span>
                           </div>
                           <div className="flex items-center gap-4 text-[#4A453E]">
                              <Maximize className="w-6 h-6 text-[#E25A89]" />
                              <span className="font-bold text-sm tracking-wide uppercase">{t.about.standalone}</span>
                           </div>
                        </div>
                      </div>
                      <div className="space-y-10">
                         <h4 className="font-serif text-3xl text-[#4A453E]">{t.rooms.roomAmenities}</h4>
                         <div className="grid grid-cols-2 gap-6 pb-8 border-b border-[#E8DCC4]">
                            <div className="flex flex-col gap-2 p-6 bg-white rounded-[2rem] border border-[#E8DCC4]">
                               <Wifi className="w-8 h-8 text-[#E25A89] mb-2" />
                               <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A453E]">WiFi</span>
                            </div>
                            <div className="flex flex-col gap-2 p-6 bg-white rounded-[2rem] border border-[#E8DCC4]">
                               <Wind className="w-8 h-8 text-[#E25A89] mb-2" />
                               <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A453E]">A/C</span>
                            </div>
                            <div className="flex flex-col gap-2 p-6 bg-white rounded-[2rem] border border-[#E8DCC4]">
                               <Tv className="w-8 h-8 text-[#E25A89] mb-2" />
                               <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A453E]">Smart TV</span>
                            </div>
                            <div className="flex flex-col gap-2 p-6 bg-white rounded-[2rem] border border-[#E8DCC4]">
                               <Coffee className="w-8 h-8 text-[#E25A89] mb-2" />
                               <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A453E]">Coffee</span>
                            </div>
                         </div>
                         <div className="space-y-4">
                           <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E25A89] mb-4">{t.rooms.amenitiesSubtitle}</p>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-[11px] font-medium text-[#8C7B60] italic">
                              <div className="space-y-2">
                                <p className="font-bold text-[#4A453E] not-italic text-[9px] uppercase tracking-widest">{t.amenitiesList.bathLabel}</p>
                                <p>• {t.amenitiesList.bathroom}, {t.amenitiesList.laundry}</p>
                                <p className="font-bold text-[#4A453E] not-italic text-[9px] uppercase tracking-widest pt-2">{t.amenitiesList.essentialsLabel}</p>
                                <p>• {t.amenitiesList.essentials}</p>
                                <p className="font-bold text-[#4A453E] not-italic text-[9px] uppercase tracking-widest pt-2">{t.amenitiesList.familyLabel}</p>
                                <p>• {t.amenitiesList.family}</p>
                              </div>
                              <div className="space-y-2">
                                <p className="font-bold text-[#4A453E] not-italic text-[9px] uppercase tracking-widest">{t.amenitiesList.kitchenLabel}</p>
                                <p>• {t.amenitiesList.kitchen}</p>
                                <p className="font-bold text-[#4A453E] not-italic text-[9px] uppercase tracking-widest pt-2">{t.amenitiesList.outdoorLabel}</p>
                                <p>• {t.amenitiesList.outdoor}, {t.amenitiesList.parking}</p>
                                <p className="font-bold text-[#4A453E] not-italic text-[9px] uppercase tracking-widest pt-2">{t.amenitiesList.safetyLabel}</p>
                                <p>• {t.amenitiesList.safetyDesc}</p>
                              </div>
                           </div>
                           <div className="pt-6 border-t border-[#E8DCC4] mt-6">
                              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#4A453E] mb-2 opacity-50">{t.rooms.notIncluded}</p>
                              <p className="text-[11px] text-[#8C7B60] opacity-70 italic leading-relaxed">{t.amenitiesList.notIncluded}</p>
                              <p className="text-[9px] text-[#8C7B60] opacity-50 mt-2 italic">{t.rooms.smokeWarning}</p>
                           </div>
                         </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Estate Features */}
      <section className="py-32 px-6 md:px-12 bg-[#FCF9F2] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#E25A89] font-bold text-xs uppercase tracking-[0.4em] mb-4 block underline underline-offset-[12px] decoration-rose-200">{t.amenities.tag}</span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#4A453E]">{t.amenities.title} <span className="italic font-light text-[#E25A89]">{t.amenities.highlight}</span></h2>
            <p className="mt-8 text-[#8C7B60] max-w-2xl mx-auto font-medium text-lg leading-relaxed">{t.amenities.desc}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: <MapPin className="w-8 h-8" />, title: t.amenities.estate, desc: t.amenities.estateDesc, color: 'bg-green-50 text-green-600' },
               { icon: <ShieldCheck className="w-8 h-8" />, title: t.amenities.secure, desc: t.amenities.secureDesc, color: 'bg-blue-50 text-blue-600' },
               { icon: <Home className="w-8 h-8" />, title: t.amenities.privacy, desc: t.amenities.privacyDesc, color: 'bg-rose-50 text-[#E25A89]' },
               { icon: <Sun className="w-8 h-8" />, title: t.amenities.soon, desc: t.amenities.soonDesc, color: 'bg-amber-50 text-amber-600' },
             ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-[#E8DCC4] flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                  <div className={`w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm`}>{item.icon}</div>
                  <h3 className="text-2xl font-serif text-[#4A453E] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#8C7B60] font-bold tracking-tight">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
