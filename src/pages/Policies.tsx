import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Calendar, FileText, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const sections = [
  {
    icon: Calendar,
    title: 'Booking and Cancellation',
    body: [
      'Availability, deposits, cancellation windows, and final prices are confirmed directly by the host before a booking is accepted.',
      'Guests should include travel dates, guest count, and preferred room when making a request so the host can provide the clearest answer.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'House Rules',
    body: [
      'Check-in is generally from 2:00 PM to 8:00 PM and checkout is before 11:00 AM, unless another arrangement is confirmed.',
      'Pets are not allowed. Smoking is allowed only where the host permits it and never in a way that affects other guests.',
    ],
  },
  {
    icon: FileText,
    title: 'Privacy',
    body: [
      'Contact form details are used only to answer booking, availability, and guest-service requests.',
      'The site may load third-party services such as Google Maps, weather data, and externally hosted images. Those providers may process technical data according to their own policies.',
    ],
  },
  {
    icon: Sparkles,
    title: 'Accessibility and Accuracy',
    body: [
      'The site is maintained to keep room, amenity, and location information understandable and current, but guests should confirm specific needs before booking.',
      'Guests with mobility, family, safety, or dietary requirements should contact the host directly before arrival.',
    ],
  },
];

export default function Policies() {
  return (
    <div className="bg-alabaster pt-24 text-obsidian">
      <section className="px-6 md:px-12 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-5xl text-center">
          <motion.span initial="hidden" animate="visible" variants={fadeUp} className="overline block">Guest Information</motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mt-5 font-serif text-6xl leading-[0.95] md:text-8xl">
            Policies & <span className="italic text-laurel">Practical Details</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-obsidian/70">
            A concise reference for bookings, house rules, privacy, and guest needs at Vila Zizel.
          </motion.p>
        </div>
      </section>

      <div className="meander-divider mx-6 md:mx-16" />

      <section className="section-shell pt-14">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <motion.article key={section.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp} className="border border-obsidian/10 bg-marble-shadow/45 p-8">
              <section.icon className="mb-8 h-7 w-7 text-divine" />
              <h2 className="font-serif text-3xl">{section.title}</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-obsidian/68">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl border border-divine/20 bg-obsidian p-8 text-center text-alabaster">
          <h2 className="font-serif text-3xl">Need something specific confirmed?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-alabaster/66">
            Direct confirmation is best for current availability, accessibility needs, family equipment, and exact booking conditions.
          </p>
          <Link to="/contact" className="summon-button mt-8 bg-alabaster text-obsidian hover:bg-alabaster">Contact Vila Zizel</Link>
        </div>
      </section>
    </div>
  );
}
