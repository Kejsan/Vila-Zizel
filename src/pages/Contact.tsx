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
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#FCF9F2] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-50/50 -skew-x-12 translate-x-20"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-[#E25A89] font-bold text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            {t.contact.tag}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-serif text-[#4A453E] mb-6"
          >
            {t.contact.title} <span className="italic font-light text-[#E25A89]">{t.contact.highlight}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="text-[#8C7B60] max-w-2xl text-lg font-medium"
          >
            {t.contact.desc}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-2xl font-serif text-[#4A453E] mb-6">{t.contactForm.direct}</h3>
                <div className="space-y-6">
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 text-[#8C7B60] p-6 bg-[#FCF9F2] rounded-3xl border border-[#E8DCC4]">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#E25A89] shadow-sm"><Phone className="w-6 h-6" /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">{t.contactForm.phone}</p>
                      <span className="font-bold text-[#4A453E]">+30 693 715 7283</span>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 text-[#8C7B60] p-6 bg-[#FCF9F2] rounded-3xl border border-[#E8DCC4]">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#E25A89] shadow-sm"><Mail className="w-6 h-6" /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">{t.contactForm.email}</p>
                      <span className="font-bold text-[#4A453E]">hermancoku@gmail.com</span>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 text-[#8C7B60] p-6 bg-[#FCF9F2] rounded-3xl border border-[#E8DCC4]">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#E25A89] shadow-sm"><Instagram className="w-6 h-6" /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">Instagram</p>
                      <span className="font-bold text-[#4A453E]">@vilazizel</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-[#4A453E] mb-6">{t.contactForm.location}</h3>
                <div className="flex items-start gap-4 text-[#8C7B60] group cursor-pointer">
                  <MapPin className="w-6 h-6 text-[#E25A89] group-hover:animate-bounce" />
                  <p className="font-medium">Vila Zizel, Analipsi 240 01, Messenia, Greece</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="bg-[#FCF9F2] p-8 md:p-12 rounded-[4rem] border border-[#E8DCC4] shadow-2xl"
              >
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-[#8C7B60] flex items-center gap-2"><Calendar className="w-3 h-3" /> {t.contactForm.checkIn}</label>
                       <input type="date" value={bookingData.checkIn} onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})} required className="w-full bg-white border border-[#E8DCC4] p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E25A89]/20 transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-[#8C7B60] flex items-center gap-2"><Calendar className="w-3 h-3" /> {t.contactForm.checkOut}</label>
                       <input type="date" value={bookingData.checkOut} onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})} required className="w-full bg-white border border-[#E8DCC4] p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E25A89]/20 transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-[#8C7B60] flex items-center gap-2"><Users className="w-3 h-3" /> {t.contactForm.guests}</label>
                       <select value={bookingData.guests} onChange={(e) => setBookingData({...bookingData, guests: e.target.value})} className="w-full bg-white border border-[#E8DCC4] p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E25A89]/20 transition-all text-sm">
                         <option value="1">1 {lang === 'el' ? 'Επισκέπτης' : 'Guest'}</option>
                         <option value="2">2 {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                         <option value="3">3 {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                         <option value="4+">4+ {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-[#8C7B60]">{t.contactForm.name}</label>
                       <input type="text" placeholder={t.contactForm.placeholderName} value={bookingData.name} onChange={(e) => setBookingData({...bookingData, name: e.target.value})} required className="w-full bg-white border border-[#E8DCC4] p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E25A89]/20 transition-all text-sm" />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-[#8C7B60]">{t.contactForm.emailLabel}</label>
                     <input type="email" placeholder={t.contactForm.placeholderEmail} value={bookingData.email} onChange={(e) => setBookingData({...bookingData, email: e.target.value})} required className="w-full bg-white border border-[#E8DCC4] p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E25A89]/20 transition-all text-sm" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-[#8C7B60] flex items-center gap-2"><MessageSquare className="w-3 h-3" /> {t.contactForm.message}</label>
                     <textarea rows={4} placeholder={t.contactForm.placeholderMessage} value={bookingData.message} onChange={(e) => setBookingData({...bookingData, message: e.target.value})} className="w-full bg-white border border-[#E8DCC4] p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E25A89]/20 transition-all text-sm resize-none" />
                  </div>

                  <button type="submit" className="w-full bg-[#E25A89] text-white py-6 rounded-3xl font-bold uppercase tracking-[0.2em] text-xs shadow-xl shadow-rose-200 hover:bg-[#C94772] transition-all flex items-center justify-center gap-3">
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
