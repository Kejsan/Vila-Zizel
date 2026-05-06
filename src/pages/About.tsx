import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Camera, Car, ChevronRight, Globe, Heart, Map, MapPin, ShieldCheck, Sun, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function About() {
  const { lang, t } = useApp();

  const details = [
    { icon: Heart, title: t.about.hospitality, desc: t.about.hospitalityDesc },
    { icon: Trees, title: t.about.nature, desc: t.about.natureDesc },
    { icon: Sun, title: t.about.atmosphere, desc: t.about.atmosphereDesc },
  ];

  const localGems = t.about.localGems || [
    { name: 'Analipsi Beach', dist: '2 min walk', desc: 'Pristine waters and golden sand just steps away from your door.', img: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80' },
    { name: 'Ancient Messene', dist: '30 min drive', desc: 'One of the best-preserved archaeological sites in Greece.', img: 'https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80' },
    { name: 'Polylimnio Waterfalls', dist: '25 min drive', desc: 'A hidden natural network of many lakes and waterfalls.', img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80' },
  ];

  return (
    <div className="bg-alabaster pt-24 text-obsidian">
      <section className="px-6 md:px-12 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="overline">{t.about.tag}</span>
            <h1 className="mt-5 font-serif text-6xl leading-[0.95] md:text-8xl">
              {t.nav.about} & <span className="italic text-laurel">{t.about.handmade}</span>
            </h1>
          </motion.div>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-lg leading-8 text-obsidian/72">
            {t.about.desc}
          </motion.p>
        </div>
      </section>

      <div className="meander-divider mx-6 md:mx-16" />

      <section className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="temple-card relative aspect-[4/5] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80" className="h-full w-full object-cover opacity-88" alt="Herman, host at Vila Zizel" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="overline">Host</p>
              <h2 className="mt-3 font-serif text-4xl text-alabaster">{t.about.hostTitle}</h2>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="space-y-6">
            <span className="inline-flex border border-divine/25 px-4 py-2 font-mythic text-[10px] uppercase tracking-[0.24em] text-divine">Superhost · 6 Years</span>
            <p className="text-xl leading-9 text-obsidian/76">{t.about.hostDesc}</p>
            <p className="text-base italic leading-8 text-obsidian/64">{t.about.hostExtra}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.22em] text-obsidian/68"><Globe className="h-4 w-4 text-divine" /> {t.about.speaks}: IT, EL, EN</div>
              <div className="flex items-center gap-2 font-mythic text-[10px] uppercase tracking-[0.22em] text-obsidian/68"><MapPin className="h-4 w-4 text-divine" /> {t.about.schools}</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-obsidian text-alabaster">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            { label: t.about.estateSize, val: '4,000 m2', icon: Map },
            { label: t.about.design, val: lang === 'el' ? 'Χειροποίητο' : 'Handmade', icon: Heart },
            { label: t.about.theme, val: '12 Gods', icon: Sun },
            { label: t.about.buildings, val: lang === 'el' ? 'Ανεξάρτητα' : 'Independent', icon: Trees },
          ].map((item) => (
            <div key={item.label} className="border border-divine/15 p-8 text-center">
              <item.icon className="mx-auto mb-5 h-6 w-6 text-divine" />
              <p className="font-serif text-3xl">{item.val}</p>
              <p className="mt-2 font-mythic text-[10px] uppercase tracking-[0.25em] text-alabaster/52">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {details.map((item, index) => (
            <motion.article key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp} className="border border-obsidian/10 bg-marble-shadow/45 p-8">
              <item.icon className="mb-8 h-7 w-7 text-divine" />
              <h2 className="font-serif text-3xl">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-obsidian/66">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell bg-marble-shadow/45">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="overline">{t.explore.tag}</span>
            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">{t.explore.title} <span className="italic text-laurel">{t.explore.highlight}</span></h2>
            <p className="mt-6 text-lg leading-8 text-obsidian/68">{t.explore.desc}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {localGems.map((gem: any, index: number) => (
              <motion.article key={gem.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp} className="group">
                <div className="temple-card temple-card-hover relative h-[430px] overflow-hidden">
                  <img src={gem.img} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.08]" alt={gem.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent" />
                  <div className="absolute bottom-7 left-7 right-7">
                    <p className="font-mythic text-[10px] uppercase tracking-[0.28em] text-divine">{gem.dist}</p>
                    <h3 className="mt-3 font-serif text-3xl text-alabaster">{gem.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-alabaster/66">{gem.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="overline">{t.about.reachTag}</span>
            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">{t.about.reachTitle} <span className="italic text-laurel">Messenia.</span></h2>
            <div className="mt-10 space-y-5">
              {[
                { icon: Map, title: t.about.reachAir, desc: t.about.reachAirDesc },
                { icon: Car, title: t.about.reachCar, desc: t.about.reachCarDesc },
                { icon: MapPin, title: t.about.reachBeach, desc: t.about.reachBeachDesc },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 border border-obsidian/10 bg-marble-shadow/45 p-6">
                  <item.icon className="mt-1 h-6 w-6 shrink-0 text-divine" />
                  <div>
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-obsidian/66">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[520px] overflow-hidden border border-divine/20 shadow-divine">
            <iframe
              title="Vila Zizel location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d569.9365048221592!2d21.969529643030935!3d37.008445596599785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1361a53d7b7ee5c5%3A0xbf624f39cfcf596e!2sVila%20Zizel!5e1!3m2!1sen!2s!4v1777359928261!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section-shell bg-obsidian text-center text-alabaster">
        <Camera className="mx-auto mb-6 h-8 w-8 text-divine" />
        <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-tight">{t.about.readyDiscover} <span className="italic text-divine">Messenia</span>?</h2>
        <Link to="/accommodation" className="summon-button mt-10 bg-alabaster text-obsidian hover:bg-alabaster">
          {t.about.checkRooms}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
