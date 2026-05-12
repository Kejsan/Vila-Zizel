import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Ban, Calendar, ChevronRight, Cigarette, Clock, Home, MapPin, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { localizedRoom, roomDefinitions } from '../lib/rooms';
import { IconSeal } from '../components/BrandIcon';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Accommodation() {
  const { lang, t } = useApp();
  const rooms = roomDefinitions.map((room) => localizedRoom(room, t.roomsData));

  const rules = [
    { icon: Clock, label: t.rooms.checkIn },
    { icon: Clock, label: t.rooms.checkOut },
    { icon: Users, label: t.rooms.maxGuests },
    { icon: Ban, label: t.rooms.noPets },
    { icon: Cigarette, label: t.rooms.smoking },
    { icon: ShieldCheck, label: t.rooms.hostGreets },
    { icon: Calendar, label: t.rooms.longTerm },
  ];

  return (
    <div className="bg-alabaster pt-24 text-obsidian">
      <section className="px-6 md:px-12 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <motion.span initial="hidden" animate="visible" variants={fadeUp} className="overline block">{t.rooms.tag}</motion.span>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h1 className="font-serif text-6xl leading-[0.95] md:text-8xl">
              {t.rooms.title} <span className="italic text-laurel">{t.rooms.highlight}</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-obsidian/70">
              {lang === 'el'
                ? 'Ανακαλύψτε τα πρόσφατα ανακαινισμένα δωμάτιά μας, με χειροποίητο σχεδιασμό εμπνευσμένο από τη μυθολογία.'
                : 'Explore recently renovated rooms and apartments shaped around handmade details, garden privacy, and the quiet ritual of staying near the Messinian coast.'}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="meander-divider mx-6 md:mx-16" />

      <section className="px-6 py-12 md:px-12">
        <div className="mx-auto max-w-7xl overflow-x-auto no-scrollbar border-y border-divine/20 py-6">
          <div className="flex min-w-max items-center gap-10">
            <h2 className="font-mythic text-[10px] uppercase tracking-[0.3em] text-divine">{t.rooms.rulesTitle}</h2>
            {rules.map((rule) => (
              <div key={rule.label} className="flex items-center gap-3 text-obsidian/68">
                <rule.icon className="h-4 w-4 text-divine" />
                <span className="font-mythic text-[10px] uppercase tracking-[0.18em]">{rule.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room, index) => (
            <motion.article key={room.slug} id={room.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index % 3} variants={fadeUp} className="scroll-mt-32">
              <Link to={`/rooms/${room.slug}`} className="temple-card temple-card-hover group relative block h-[520px] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-[1200ms] group-hover:scale-[1.08]"
                  onError={(event) => {
                    event.currentTarget.src = room.fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/48 to-transparent" />
                <div className="absolute left-7 right-7 top-8 flex items-center justify-between">
                  <span className="font-mythic text-[10px] uppercase tracking-[0.3em] text-divine">{room.price}</span>
                  <span className="rounded-full border border-divine/25 px-3 py-1 font-mythic text-[9px] uppercase tracking-[0.2em] text-alabaster/70">{room.sleeps}</span>
                </div>
                <div className="absolute bottom-8 left-7 right-7">
                  <IconSeal name={room.icon} className="mb-5 h-14 w-14 bg-obsidian/50 backdrop-blur-sm" />
                  <p className="font-mythic text-[10px] uppercase tracking-[0.34em] text-divine/80">{room.greekName}</p>
                  <h2 className="mt-3 font-serif text-4xl italic text-alabaster">{room.name}</h2>
                  <p className="mt-4 text-sm leading-7 text-alabaster/68">{room.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {[room.sleeps, room.beds, room.baths].map((item) => (
                      <span key={item} className="rounded-full border border-divine/20 px-3 py-1 font-mythic text-[9px] uppercase tracking-[0.18em] text-alabaster/62">{item}</span>
                    ))}
                  </div>
                  <div className="mt-7 flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.26em] text-divine">
                    {t.rooms.learnMore}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell bg-marble-shadow/45">
        <div className="mx-auto max-w-7xl text-center">
          <span className="overline">{t.amenities.tag}</span>
          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
            {t.amenities.title} <span className="italic text-laurel">{t.amenities.highlight}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-obsidian/68">{t.amenities.desc}</p>
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[
              { icon: MapPin, title: t.amenities.estate, desc: t.amenities.estateDesc },
              { icon: ShieldCheck, title: t.amenities.secure, desc: t.amenities.secureDesc },
              { icon: Home, title: t.amenities.privacy, desc: t.amenities.privacyDesc },
              { icon: Calendar, title: t.amenities.soon, desc: t.amenities.soonDesc },
            ].map((item) => (
              <div key={item.title} className="border border-obsidian/10 bg-alabaster p-8 text-left">
                <item.icon className="mb-8 h-7 w-7 text-divine" />
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-obsidian/64">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
