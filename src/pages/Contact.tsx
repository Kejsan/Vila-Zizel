import React, { useState } from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Calendar, Instagram, Mail, MapPin, MessageSquare, Phone, Send, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Contact() {
  const { lang, t } = useApp();
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${bookingData.name}! Your request has been received. We will contact you soon.`);
  };

  const contactItems = [
    { icon: Phone, label: t.contactForm.phone, value: '+30 693 715 7283' },
    { icon: Mail, label: t.contactForm.email, value: 'hermancoku@gmail.com' },
    { icon: Instagram, label: 'Instagram', value: '@vilazizel' },
    { icon: MapPin, label: t.contactForm.location, value: 'Vila Zizel, Analipsi 240 01, Messenia, Greece' },
  ];

  return (
    <div className="bg-alabaster pt-24 text-obsidian">
      <section className="px-6 md:px-12 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="overline">{t.contact.tag}</span>
            <h1 className="mt-5 font-serif text-6xl leading-[0.95] md:text-8xl">
              {t.contact.title} <span className="italic text-laurel">{t.contact.highlight}</span>
            </h1>
          </motion.div>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-lg leading-8 text-obsidian/72">
            {t.contact.desc}
          </motion.p>
        </div>
      </section>

      <div className="meander-divider mx-6 md:mx-16" />

      <section className="section-shell pt-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <aside className="space-y-5 lg:col-span-5">
            <h2 className="font-serif text-4xl">{t.contactForm.direct}</h2>
            {contactItems.map((item) => (
              <motion.div key={item.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-5 border border-obsidian/10 bg-marble-shadow/45 p-6">
                <item.icon className="mt-1 h-6 w-6 shrink-0 text-divine" />
                <div>
                  <p className="font-mythic text-[10px] uppercase tracking-[0.24em] text-obsidian/50">{item.label}</p>
                  <p className="mt-2 text-base font-medium text-obsidian">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </aside>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="lg:col-span-7">
            <form className="border border-divine/20 bg-obsidian p-8 text-alabaster shadow-divine md:p-12" onSubmit={handleSubmit}>
              <div className="mb-10">
                <span className="overline">{t.booking.tag}</span>
                <h2 className="mt-4 font-serif text-4xl">{t.booking.title} <span className="italic text-divine">{t.booking.highlight}</span></h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.22em] text-divine"><Calendar className="h-3.5 w-3.5" /> {t.contactForm.checkIn}</span>
                  <input type="date" value={bookingData.checkIn} onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })} required className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition focus:border-divine" />
                </label>
                <label className="space-y-2">
                  <span className="flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.22em] text-divine"><Calendar className="h-3.5 w-3.5" /> {t.contactForm.checkOut}</span>
                  <input type="date" value={bookingData.checkOut} onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })} required className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition focus:border-divine" />
                </label>
                <label className="space-y-2">
                  <span className="flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.22em] text-divine"><Users className="h-3.5 w-3.5" /> {t.contactForm.guests}</span>
                  <select value={bookingData.guests} onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })} className="w-full border border-divine/20 bg-obsidian p-4 text-alabaster outline-none transition focus:border-divine">
                    <option value="1">1 {lang === 'el' ? 'Επισκέπτης' : 'Guest'}</option>
                    <option value="2">2 {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                    <option value="3">3 {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                    <option value="4+">4+ {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="font-mythic text-[10px] uppercase tracking-[0.22em] text-divine">{t.contactForm.name}</span>
                  <input type="text" placeholder={t.contactForm.placeholderName} value={bookingData.name} onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} required className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition placeholder:text-alabaster/35 focus:border-divine" />
                </label>
              </div>

              <label className="mt-6 block space-y-2">
                <span className="font-mythic text-[10px] uppercase tracking-[0.22em] text-divine">{t.contactForm.emailLabel}</span>
                <input type="email" placeholder={t.contactForm.placeholderEmail} value={bookingData.email} onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })} required className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition placeholder:text-alabaster/35 focus:border-divine" />
              </label>

              <label className="mt-6 block space-y-2">
                <span className="flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.22em] text-divine"><MessageSquare className="h-3.5 w-3.5" /> {t.contactForm.message}</span>
                <textarea rows={5} placeholder={t.contactForm.placeholderMessage} value={bookingData.message} onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })} className="w-full resize-none border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition placeholder:text-alabaster/35 focus:border-divine" />
              </label>

              <button type="submit" className="summon-button mt-8 w-full bg-alabaster text-obsidian hover:bg-alabaster">
                <Send className="h-4 w-4" />
                {t.contactForm.send}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
