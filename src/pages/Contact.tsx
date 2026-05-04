import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Send, Calendar, Users, MapPin, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Contact() {
  const { lang, t } = useApp();
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${bookingData.name}! Your request has been received. We will contact you soon.`);
  };

  return (
    <div className="flex flex-col pt-20 bg-sand-light">
      {/* Hero Section */}
      <section className="relative py-24 bg-sand-light overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sky/10 -skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-floral/5 skew-x-12 -translate-x-20"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-sky-deep font-bold text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            {t.contact.tag}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-serif text-botanical mb-6"
          >
            {t.contact.title} <span className="italic font-light text-floral">{t.contact.highlight}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="text-earth max-w-2xl text-lg font-medium"
          >
            {t.contact.desc}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 bg-sand-light relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-2xl font-serif text-botanical mb-6">{t.contactForm.direct}</h3>
                <div className="space-y-6">
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 text-earth p-6 glass-panel rounded-3xl group">
                    <div className="w-12 h-12 bg-white/80 rounded-2xl flex items-center justify-center text-sky-deep shadow-sm group-hover:text-floral transition-colors duration-300"><Phone className="w-6 h-6" /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">{t.contactForm.phone}</p>
                      <span className="font-bold text-botanical">+30 693 715 7283</span>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 text-earth p-6 glass-panel rounded-3xl group">
                    <div className="w-12 h-12 bg-white/80 rounded-2xl flex items-center justify-center text-sky-deep shadow-sm group-hover:text-floral transition-colors duration-300"><Mail className="w-6 h-6" /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">{t.contactForm.email}</p>
                      <span className="font-bold text-botanical">hermancoku@gmail.com</span>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 text-earth p-6 glass-panel rounded-3xl group">
                    <div className="w-12 h-12 bg-white/80 rounded-2xl flex items-center justify-center text-sky-deep shadow-sm group-hover:text-floral transition-colors duration-300"><Instagram className="w-6 h-6" /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">Instagram</p>
                      <span className="font-bold text-botanical">@vilazizel</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-botanical mb-6">{t.contactForm.location}</h3>
                <div className="flex items-start gap-4 text-earth group cursor-pointer glass-panel p-6 rounded-3xl">
                  <div className="w-12 h-12 bg-white/80 rounded-2xl flex items-center justify-center text-sky-deep shadow-sm shrink-0 group-hover:text-floral transition-colors duration-300">
                    <MapPin className="w-6 h-6 group-hover:animate-bounce" />
                  </div>
                  <p className="font-medium self-center">Vila Zizel, Analipsi 240 01, Messenia, Greece</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="glass-panel p-8 md:p-12 rounded-[4rem]"
              >
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-earth flex items-center gap-2"><Calendar className="w-3 h-3 text-sky-deep" /> {t.contactForm.checkIn}</label>
                       <input type="date" value={bookingData.checkIn} onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})} required className="w-full bg-white/60 backdrop-blur-sm border border-white p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-deep/40 transition-all text-botanical" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-earth flex items-center gap-2"><Calendar className="w-3 h-3 text-sky-deep" /> {t.contactForm.checkOut}</label>
                       <input type="date" value={bookingData.checkOut} onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})} required className="w-full bg-white/60 backdrop-blur-sm border border-white p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-deep/40 transition-all text-botanical" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-earth flex items-center gap-2"><Users className="w-3 h-3 text-sky-deep" /> {t.contactForm.guests}</label>
                       <select value={bookingData.guests} onChange={(e) => setBookingData({...bookingData, guests: e.target.value})} className="w-full bg-white/60 backdrop-blur-sm border border-white p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-deep/40 transition-all text-botanical text-sm">
                         <option value="1">1 {lang === 'el' ? 'Επισκέπτης' : 'Guest'}</option>
                         <option value="2">2 {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                         <option value="3">3 {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                         <option value="4+">4+ {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-earth">{t.contactForm.name}</label>
                       <input type="text" placeholder={t.contactForm.placeholderName} value={bookingData.name} onChange={(e) => setBookingData({...bookingData, name: e.target.value})} required className="w-full bg-white/60 backdrop-blur-sm border border-white p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-deep/40 transition-all text-botanical text-sm" />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-earth">{t.contactForm.emailLabel}</label>
                     <input type="email" placeholder={t.contactForm.placeholderEmail} value={bookingData.email} onChange={(e) => setBookingData({...bookingData, email: e.target.value})} required className="w-full bg-white/60 backdrop-blur-sm border border-white p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-deep/40 transition-all text-botanical text-sm" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-earth flex items-center gap-2"><MessageSquare className="w-3 h-3 text-sky-deep" /> {t.contactForm.message}</label>
                     <textarea rows={4} placeholder={t.contactForm.placeholderMessage} value={bookingData.message} onChange={(e) => setBookingData({...bookingData, message: e.target.value})} className="w-full bg-white/60 backdrop-blur-sm border border-white p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-deep/40 transition-all text-botanical text-sm resize-none" />
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-sky-deep to-floral text-white py-6 rounded-3xl font-bold uppercase tracking-[0.2em] text-xs shadow-xl shadow-sky-deep/30 hover:shadow-floral/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                     <Send className="w-4 h-4" /> {t.contactForm.send}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
