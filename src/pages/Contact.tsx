import React, { useState } from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Calendar, Instagram, Mail, MapPin, MessageSquare, Phone, Send, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { localizedRoom, roomDefinitions } from '../lib/rooms';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type FormMode = 'booking-request' | 'info-request';
const FORM_RECEIVER_EMAIL = 'kejsancoku2@gmail.com';

const encodeForm = (data: Record<string, string>) =>
  new URLSearchParams(data).toString();

export default function Contact() {
  const { lang, t } = useApp();
  const rooms = roomDefinitions.map((room) => localizedRoom(room, t.roomsData));
  const [mode, setMode] = useState<FormMode>('booking-request');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    room: 'Not sure yet',
    name: '',
    email: '',
    phone: '',
    message: '',
    botField: '',
  });
  const [infoData, setInfoData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '',
  });

  const submitToNetlify = async (formName: FormMode, data: Record<string, string>) => {
    if (data['bot-field']) return;

    setStatus('submitting');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': formName, ...data }),
      });

      if (!response.ok) throw new Error(`Netlify form failed with ${response.status}`);
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitToNetlify('booking-request', {
      receiver: FORM_RECEIVER_EMAIL,
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      room: bookingData.room,
      checkIn: bookingData.checkIn,
      checkOut: bookingData.checkOut,
      guests: bookingData.guests,
      message: bookingData.message,
      subject: `Booking request from ${bookingData.name || 'Vila Zizel website'}`,
      'bot-field': bookingData.botField,
    });
  };

  const handleInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitToNetlify('info-request', {
      receiver: FORM_RECEIVER_EMAIL,
      name: infoData.name,
      email: infoData.email,
      subject: infoData.subject || `Info request from ${infoData.name || 'Vila Zizel website'}`,
      message: infoData.message,
      'bot-field': infoData.botField,
    });
  };

  const contactItems = [
    { icon: Phone, label: t.contactForm.phone, value: '+30 693 715 7283' },
    { icon: Mail, label: t.contactForm.email, value: 'hermancoku@gmail.com' },
    { icon: Instagram, label: 'Instagram', value: '@vilazizel' },
    { icon: MapPin, label: t.contactForm.location, value: 'Vila Zizel, Analipsi 240 01, Messenia, Greece' },
  ];

  const isSubmitting = status === 'submitting';

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
            Request a stay for owner approval, or send a simpler message for directions, amenities, and local questions.
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
            <div className="border border-divine/20 bg-alabaster p-6 text-sm leading-7 text-obsidian/68">
              Booking requests are reviewed by the owner before confirmation. This avoids double-booking and keeps availability accurate.
            </div>
          </aside>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="lg:col-span-7">
            <div className="border border-divine/20 bg-obsidian p-8 text-alabaster shadow-divine md:p-12">
              <div className="mb-8">
                <span className="overline">{mode === 'booking-request' ? t.booking.tag : 'Message'}</span>
                <h2 className="mt-4 font-serif text-4xl">
                  {mode === 'booking-request' ? (
                    <>
                      {t.booking.title} <span className="italic text-divine">{t.booking.highlight}</span>
                    </>
                  ) : (
                    <>
                      Ask a <span className="italic text-divine">Question.</span>
                    </>
                  )}
                </h2>
              </div>

              <div className="mb-8 grid grid-cols-2 border border-divine/20 p-1">
                {[
                  { id: 'booking-request' as const, label: 'Booking Request' },
                  { id: 'info-request' as const, label: 'Info Request' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setMode(item.id);
                      setStatus('idle');
                    }}
                    className={`px-4 py-3 font-mythic text-[10px] uppercase tracking-[0.2em] transition ${mode === item.id ? 'bg-alabaster text-obsidian' : 'text-alabaster/62 hover:text-divine'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {status === 'success' && (
                <div className="mb-8 border border-divine/30 bg-divine/10 p-4 text-sm text-alabaster">
                  Thank you. Your request has been sent to Vila Zizel and the owner will reply directly.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-8 border border-red-400/40 bg-red-500/10 p-4 text-sm text-alabaster">
                  Something went wrong. Please try again, or contact Vila Zizel directly by email or phone.
                </div>
              )}

              {mode === 'booking-request' ? (
                <form name="booking-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleBookingSubmit}>
                  <input type="hidden" name="form-name" value="booking-request" />
                  <input type="hidden" name="receiver" value={FORM_RECEIVER_EMAIL} />
                  <p className="hidden">
                    <label>Do not fill this out: <input name="bot-field" value={bookingData.botField} onChange={(e) => setBookingData({ ...bookingData, botField: e.target.value })} /></label>
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.22em] text-divine"><Calendar className="h-3.5 w-3.5" /> {t.contactForm.checkIn}</span>
                      <input name="checkIn" type="date" value={bookingData.checkIn} onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })} required className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition focus:border-divine" />
                    </label>
                    <label className="space-y-2">
                      <span className="flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.22em] text-divine"><Calendar className="h-3.5 w-3.5" /> {t.contactForm.checkOut}</span>
                      <input name="checkOut" type="date" value={bookingData.checkOut} onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })} required className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition focus:border-divine" />
                    </label>
                    <label className="space-y-2">
                      <span className="flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.22em] text-divine"><Users className="h-3.5 w-3.5" /> {t.contactForm.guests}</span>
                      <select name="guests" value={bookingData.guests} onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })} className="w-full border border-divine/20 bg-obsidian p-4 text-alabaster outline-none transition focus:border-divine">
                        <option value="1">1 {lang === 'el' ? 'Επισκέπτης' : 'Guest'}</option>
                        <option value="2">2 {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                        <option value="3">3 {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                        <option value="4+">4+ {lang === 'el' ? 'Επισκέπτες' : 'Guests'}</option>
                      </select>
                    </label>
                    <label className="space-y-2">
                      <span className="font-mythic text-[10px] uppercase tracking-[0.22em] text-divine">Preferred Room</span>
                      <select name="room" value={bookingData.room} onChange={(e) => setBookingData({ ...bookingData, room: e.target.value })} className="w-full border border-divine/20 bg-obsidian p-4 text-alabaster outline-none transition focus:border-divine">
                        <option value="Not sure yet">Not sure yet</option>
                        {rooms.map((room) => (
                          <option key={room.slug} value={room.name}>{room.name}</option>
                        ))}
                      </select>
                    </label>
                    <label className="space-y-2">
                      <span className="font-mythic text-[10px] uppercase tracking-[0.22em] text-divine">{t.contactForm.name}</span>
                      <input name="name" type="text" placeholder={t.contactForm.placeholderName} value={bookingData.name} onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} required className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition placeholder:text-alabaster/35 focus:border-divine" />
                    </label>
                    <label className="space-y-2">
                      <span className="font-mythic text-[10px] uppercase tracking-[0.22em] text-divine">Phone / WhatsApp</span>
                      <input name="phone" type="tel" placeholder="+30 ..." value={bookingData.phone} onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })} className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition placeholder:text-alabaster/35 focus:border-divine" />
                    </label>
                  </div>

                  <label className="mt-6 block space-y-2">
                    <span className="font-mythic text-[10px] uppercase tracking-[0.22em] text-divine">{t.contactForm.emailLabel}</span>
                    <input name="email" type="email" placeholder={t.contactForm.placeholderEmail} value={bookingData.email} onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })} required className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition placeholder:text-alabaster/35 focus:border-divine" />
                  </label>

                  <label className="mt-6 block space-y-2">
                    <span className="flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.22em] text-divine"><MessageSquare className="h-3.5 w-3.5" /> {t.contactForm.message}</span>
                    <textarea name="message" rows={5} placeholder={t.contactForm.placeholderMessage} value={bookingData.message} onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })} className="w-full resize-none border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition placeholder:text-alabaster/35 focus:border-divine" />
                  </label>

                  <p className="mt-5 text-xs leading-6 text-alabaster/52">Submitting this form sends an availability request only. A reservation is confirmed after the owner replies.</p>
                  <button type="submit" disabled={isSubmitting} className="summon-button mt-8 w-full bg-alabaster text-obsidian hover:bg-alabaster disabled:cursor-wait disabled:opacity-60">
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Sending...' : t.contactForm.send}
                  </button>
                </form>
              ) : (
                <form name="info-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleInfoSubmit}>
                  <input type="hidden" name="form-name" value="info-request" />
                  <input type="hidden" name="receiver" value={FORM_RECEIVER_EMAIL} />
                  <p className="hidden">
                    <label>Do not fill this out: <input name="bot-field" value={infoData.botField} onChange={(e) => setInfoData({ ...infoData, botField: e.target.value })} /></label>
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="font-mythic text-[10px] uppercase tracking-[0.22em] text-divine">{t.contactForm.name}</span>
                      <input name="name" type="text" placeholder={t.contactForm.placeholderName} value={infoData.name} onChange={(e) => setInfoData({ ...infoData, name: e.target.value })} required className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition placeholder:text-alabaster/35 focus:border-divine" />
                    </label>
                    <label className="space-y-2">
                      <span className="font-mythic text-[10px] uppercase tracking-[0.22em] text-divine">{t.contactForm.emailLabel}</span>
                      <input name="email" type="email" placeholder={t.contactForm.placeholderEmail} value={infoData.email} onChange={(e) => setInfoData({ ...infoData, email: e.target.value })} required className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition placeholder:text-alabaster/35 focus:border-divine" />
                    </label>
                  </div>
                  <label className="mt-6 block space-y-2">
                    <span className="font-mythic text-[10px] uppercase tracking-[0.22em] text-divine">Subject</span>
                    <input name="subject" type="text" placeholder="Question about Vila Zizel" value={infoData.subject} onChange={(e) => setInfoData({ ...infoData, subject: e.target.value })} className="w-full border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition placeholder:text-alabaster/35 focus:border-divine" />
                  </label>
                  <label className="mt-6 block space-y-2">
                    <span className="flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.22em] text-divine"><MessageSquare className="h-3.5 w-3.5" /> {t.contactForm.message}</span>
                    <textarea name="message" rows={6} placeholder={t.contactForm.placeholderMessage} value={infoData.message} onChange={(e) => setInfoData({ ...infoData, message: e.target.value })} required className="w-full resize-none border border-divine/20 bg-alabaster/10 p-4 text-alabaster outline-none transition placeholder:text-alabaster/35 focus:border-divine" />
                  </label>
                  <button type="submit" disabled={isSubmitting} className="summon-button mt-8 w-full bg-alabaster text-obsidian hover:bg-alabaster disabled:cursor-wait disabled:opacity-60">
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
