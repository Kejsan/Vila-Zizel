import { useRef, type ReactNode } from 'react';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { brandAssets, editorial } from '../lib/editorial';
import { localizedRoom, type RoomDefinition } from '../lib/rooms';

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className = '', delay = 0 }: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`editorial-reveal ${className}`}
      initial={reduced ? false : { opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxPhoto({ src, alt, className = '', eager = false }: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frame, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-9%', '9%']);

  return (
    <div className={`parallax-photo ${className}`} ref={frame}>
      <motion.img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} style={{ y: reduced ? 0 : y }} />
    </div>
  );
}

export function ActionLink({ to, children, variant = 'dark' }: {
  to: string;
  children: ReactNode;
  variant?: 'dark' | 'stone' | 'outline' | 'text';
}) {
  return <Link to={to} className={`action action--${variant}`}>{children}<ArrowUpRight aria-hidden="true" /></Link>;
}

export function PageIntro({ label, title, accent, children }: {
  label: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <section className="shell page-intro">
      <div className="intro-arrival">
        <p className="eyebrow">{label}</p>
        <h1 className="display">{title}{accent && <> <em>{accent}</em></>}</h1>
      </div>
      {children && <div className="intro-arrival intro-deferred intro-summary">{children}</div>}
    </section>
  );
}

export function RoomCard({ definition, index = 0 }: { definition: RoomDefinition; index?: number }) {
  const { lang, t } = useApp();
  const copy = editorial(lang);
  const room = localizedRoom(definition, t.roomsData);
  const source = room.key === 'poseidonHera' ? '/Images/Rooms/Poseidon-Hera/Dining Area.avif' : room.image;

  return (
    <article className="room-slot" id={room.slug} aria-label={room.name}>
      <Reveal delay={(index % 3) * 0.09}>
        <Link to={`/rooms/${room.slug}`} className="stay-card">
          <div className="stay-card-image">
            <img src={source} alt="" loading="lazy" onError={(event) => {
              const image = event.currentTarget;
              if (!image.src.endsWith(encodeURI(room.fallbackImage))) image.src = room.fallbackImage;
            }} />
            <span className="stay-card-shade" aria-hidden="true" />
            <span className="stay-card-overlay" aria-hidden="true">{t.rooms.learnMore}<ArrowUpRight /></span>
          </div>
          <div className="stay-card-copy">
            <div>
              <p className="eyebrow">{copy[room.kind]}</p>
              <h3>{lang === 'en' ? room.greekName : room.name}</h3>
              <p className="stay-card-facts">{room.capacity} {copy.guests}<span aria-hidden="true"> ·</span> {room.price}</p>
            </div>
            <span className="stay-emblem" aria-hidden="true"><img src={`${brandAssets}/symbol-${room.slug}.svg`} alt="" /></span>
          </div>
          <div className="stay-card-end">
            <p>{room.desc}</p><ArrowUpRight aria-hidden="true" />
          </div>
        </Link>
      </Reveal>
    </article>
  );
}

export function BookingCallout({ to = '/contact' }: { to?: string }) {
  const { lang } = useApp();
  const copy = editorial(lang);
  return (
    <section className="booking-callout">
      <Reveal className="shell">
        <img src={`${brandAssets}/meander.svg`} alt="" width="108" height="24" />
        <h2 className="display">{copy.closing[0]} <em>{copy.closing[1]}</em></h2>
        <p>{copy.requestNote}</p>
        <ActionLink to={to}>{copy.request}</ActionLink>
      </Reveal>
    </section>
  );
}

export function BackToStays({ children }: { children: ReactNode }) {
  return <Link className="back-link" to="/accommodation"><ArrowDownLeft aria-hidden="true" /> {children}</Link>;
}
