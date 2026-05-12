import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowLeft, BedDouble, Calendar, ChevronRight, Home } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { localizedRoom, roomBySlug } from '../lib/rooms';
import { IconSeal } from '../components/BrandIcon';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function RoomDetail() {
  const { slug } = useParams();
  const { lang, t } = useApp();
  const definition = roomBySlug(slug);

  if (!definition) return <Navigate to="/accommodation" replace />;

  const room = localizedRoom(definition, t.roomsData);
  const sleeping =
    room.slug === 'poseidon-hera'
      ? [
          lang === 'el' ? 'Υπνοδωμάτιο 1: 1 διπλό κρεβάτι & 1 μονό κρεβάτι' : 'Bedroom 1: 1 double bed and 1 single bed',
          lang === 'el' ? 'Υπνοδωμάτιο 2: 1 διπλό κρεβάτι & 1 κρεβάτι-συρτάρι' : 'Bedroom 2: 1 double bed and 1 drawer bed',
        ]
      : [
          room.beds,
          lang === 'el' ? 'Ιδιωτικός χώρος ύπνου' : 'Private sleeping area',
        ];

  const amenities = [
    { icon: 'wifi' as const, label: 'WiFi' },
    { icon: 'wind' as const, label: 'A/C' },
    { icon: 'temple' as const, label: 'Smart TV' },
    { icon: 'kitchen' as const, label: lang === 'el' ? 'Κουζίνα' : 'Kitchen' },
    { icon: 'scroll' as const, label: t.about.renovated },
    { icon: 'arch' as const, label: t.about.standalone },
  ];

  return (
    <div className="bg-alabaster pt-24 text-obsidian">
      <section className="px-6 md:px-12 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <Link to="/accommodation" className="mb-10 inline-flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.24em] text-divine">
            <ArrowLeft className="h-4 w-4" />
            {t.nav.rooms}
          </Link>

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <IconSeal name={room.icon} className="mb-8 h-20 w-20" />
              <span className="overline">{room.greekName}</span>
              <h1 className="mt-5 font-serif text-6xl leading-[0.95] md:text-8xl">
                {room.name}
              </h1>
              <p className="mt-8 max-w-2xl text-lg italic leading-8 text-obsidian/72">{room.desc}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[room.price, room.sleeps, room.beds, room.baths].map((item) => (
                  <span key={item} className="rounded-full border border-divine/25 px-4 py-2 font-mythic text-[10px] uppercase tracking-[0.2em] text-obsidian/70">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="temple-card relative h-[560px] overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.src = room.fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/88 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="meander-divider mx-6 md:mx-16" />

      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
            <div>
              <span className="overline">{t.rooms.olympianExp}</span>
              <p className="mt-5 text-lg leading-8 text-obsidian/72">{room.longDesc}</p>
            </div>

            <div className="border-t border-divine/20 pt-8">
              <h2 className="font-serif text-3xl">{lang === 'el' ? 'Πού θα κοιμηθείτε' : "Where you'll sleep"}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {sleeping.map((item) => (
                  <div key={item} className="border border-obsidian/10 bg-marble-shadow/45 p-6">
                    <BedDouble className="mb-4 h-6 w-6 text-divine" />
                    <p className="text-sm leading-7 text-obsidian/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h2 className="font-serif text-3xl">{t.rooms.roomAmenities}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {amenities.map((amenity) => (
                <div key={amenity.label} className="border border-obsidian/10 bg-alabaster p-6">
                  <IconSeal name={amenity.icon} className="mb-4 h-12 w-12" />
                  <p className="font-mythic text-[10px] uppercase tracking-[0.22em] text-obsidian/76">{amenity.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-divine/20 pt-8 text-sm leading-7 text-obsidian/62">
              <p>{t.amenitiesList.bathroom}, {t.amenitiesList.laundry}</p>
              <p className="mt-2">{t.amenitiesList.kitchen}</p>
              <p className="mt-2">{t.amenitiesList.outdoor}, {t.amenitiesList.parking}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-obsidian text-alabaster">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="overline">{lang === 'el' ? 'Φωτογραφίες' : 'Photo Gallery'}</span>
              <h2 className="mt-4 font-serif text-5xl">{room.name}</h2>
            </div>
            <Link to="/contact" className="summon-button bg-alabaster text-obsidian hover:bg-alabaster">
              {t.home.ctaBook}
              <Calendar className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {room.gallery.map((image, index) => (
              <div key={`${image}-${index}`} className="relative aspect-[4/3] overflow-hidden border border-divine/15">
                <img
                  src={image}
                  alt={`${room.name} ${index + 1}`}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.src = room.fallbackImage;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell text-center">
        <Home className="mx-auto mb-6 h-8 w-8 text-divine" />
        <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-tight">{t.home.ctaTitle}</h2>
        <p className="mx-auto mt-6 max-w-xl text-obsidian/68">{t.home.ctaDesc}</p>
        <Link to="/contact" className="summon-button mt-10">
          {t.contact.title}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
