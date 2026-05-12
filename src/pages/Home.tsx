import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowDown, ChevronRight, Instagram, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { localizedRoom, roomDefinitions } from '../lib/rooms';
import BrandIcon, { IconSeal } from '../components/BrandIcon';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Home() {
  const { t } = useApp();
  const testimonials = t.testimonialsList || [];
  const rooms = roomDefinitions.map((room) => localizedRoom(room, t.roomsData));

  const features = [
    { icon: 'garden' as const, title: t.home.featureNature, desc: t.home.featureNatureDesc },
    { icon: 'temple' as const, title: t.home.featureHandmade, desc: t.home.featureHandmadeDesc },
    { icon: 'beach' as const, title: t.home.featureSea, desc: t.home.featureSeaDesc },
  ];

  return (
    <div className="flex flex-col bg-alabaster text-obsidian overflow-x-hidden">
      <section className="relative min-h-[94vh] overflow-hidden bg-obsidian text-alabaster">
        <img
          src="/Images/Entry gate.avif"
          alt="Vila Zizel entrance in Analipsi, Messenia"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(212,175,55,0.24),transparent_32%),linear-gradient(180deg,rgba(43,39,35,0.55),rgba(43,39,35,0.96))]" />
        <div className="mythic-orb pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60" />

        <div className="relative z-10 mx-auto flex min-h-[94vh] max-w-7xl flex-col justify-center px-6 pt-28 pb-20 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mx-auto mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-divine/70" />
            <span className="overline">{t.home.heroBadge}</span>
            <span className="h-px w-12 bg-divine/70" />
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mb-7 flex justify-center">
            <IconSeal name="monogram" className="h-16 w-16" />
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1.5} className="mx-auto max-w-6xl font-serif text-6xl leading-[0.92] md:text-8xl lg:text-9xl">
            Vila Zizel
            <span className="block pt-4 text-3xl italic text-divine md:text-5xl">
              {t.hero.title} {t.hero.subtitle}
            </span>
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="mx-auto mt-8 max-w-2xl text-base leading-8 text-alabaster/78 md:text-lg">
            {t.hero.desc}
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/accommodation" className="summon-button">
              {t.hero.explore}
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="summon-button bg-alabaster text-obsidian hover:bg-alabaster">
              {t.home.ctaBook}
            </Link>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4} className="mx-auto mt-16 grid w-full max-w-3xl grid-cols-3 border-y border-divine/20">
            {[
              { val: '500+', label: t.home.statsGuests },
              { val: '4.9', label: t.home.statsAward },
              { val: '6+', label: t.home.statsYears },
            ].map((item) => (
              <div key={item.label} className="px-4 py-6">
                <p className="font-mythic text-3xl text-divine md:text-4xl">{item.val}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-alabaster/54">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.4 }} className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-alabaster/45">
          <span className="font-mythic text-[9px] uppercase tracking-[0.32em]">{t.home.scrollDiscover}</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </section>

      <div className="meander-divider mx-6 my-10 md:mx-16" />

      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="overline">{t.home.featuresTitle}</span>
            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
              {t.about.title} <span className="italic text-laurel">{t.about.highlight}</span>
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="border border-obsidian/10 bg-marble-shadow/45 p-7 transition-all duration-700 hover:-translate-y-2 hover:border-divine/50 hover:bg-alabaster hover:shadow-divine"
              >
                <IconSeal name={feature.icon} className="mb-8 h-14 w-14" />
                <h3 className="font-mythic text-sm uppercase tracking-[0.24em]">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-obsidian/68">{feature.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-obsidian text-alabaster">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="overline">{t.rooms.tag}</span>
            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
              {t.rooms.title} <span className="italic text-divine">{t.rooms.highlight}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-mythic text-[10px] uppercase tracking-[0.28em] text-alabaster/52">{t.home.roomsTagline}</p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {rooms.map((room, index) => (
              <motion.div key={room.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index % 3} variants={fadeUp}>
                <Link to={`/rooms/${room.slug}`} className="temple-card temple-card-hover group relative block h-[470px] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-[1200ms] group-hover:scale-[1.08]"
                    onError={(event) => {
                      event.currentTarget.src = room.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/42 to-transparent" />
                  <div className="absolute left-7 right-7 top-8 flex items-center justify-between">
                    <span className="font-mythic text-[10px] uppercase tracking-[0.3em] text-divine">{room.price}</span>
                    <IconSeal name={room.icon} className="h-12 w-12 bg-obsidian/45 backdrop-blur-sm" />
                  </div>
                  <div className="absolute bottom-8 left-7 right-7">
                    <p className="font-mythic text-[10px] uppercase tracking-[0.34em] text-divine/80">{room.greekName}</p>
                    <h3 className="mt-3 font-serif text-3xl italic text-alabaster">{room.name}</h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-alabaster/68">{room.desc}</p>
                    <div className="mt-6 flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.26em] text-divine opacity-70 transition-opacity group-hover:opacity-100">
                      {t.rooms.learnMore}
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="overline">{t.testimonials.tag}</span>
            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">
              {t.testimonials.title} <span className="italic text-laurel">{t.testimonials.highlight}</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.slice(0, 3).map((item: any, index: number) => (
              <motion.article key={item.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp} className="border border-obsidian/10 bg-marble-shadow/45 p-7">
                <div className="mb-5 flex gap-1 text-divine">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm italic leading-7 text-obsidian/72">"{item.text}"</p>
                <p className="mt-6 font-mythic text-[10px] uppercase tracking-[0.28em] text-obsidian">{item.name}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative overflow-hidden bg-obsidian text-center text-alabaster">
        <img src="https://images.unsplash.com/photo-1469796466635-455ede028aca?w=1600&q=80" alt="Greek sea at dusk" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-obsidian/76" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="overline">{t.booking.tag}</span>
          <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">{t.home.ctaTitle}</h2>
          <p className="mx-auto mt-6 max-w-xl text-alabaster/68">{t.home.ctaDesc}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="summon-button bg-alabaster text-obsidian hover:bg-alabaster">{t.home.ctaBook}</Link>
            <Link to="/about" className="summon-button">{t.home.themeLink}</Link>
          </div>
        </div>
      </section>

      <section className="section-shell bg-alabaster">
        <div className="mx-auto max-w-6xl text-center">
          <Instagram className="mx-auto mb-5 h-9 w-9 text-divine" />
          <h2 className="font-serif text-4xl italic">{t.home.socialTitle}</h2>
          <a href="https://instagram.com/vilazizel" target="_blank" rel="noopener noreferrer" className="summon-button mt-10">
            @vilazizel
          </a>
        </div>
      </section>
    </div>
  );
}
