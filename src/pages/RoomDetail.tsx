import { useState } from 'react';
import { ArrowLeft, ArrowRight, Bath, BedDouble, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Navigate, useParams } from 'react-router-dom';
import { ActionLink, BackToStays, BookingCallout, Reveal } from '../components/Editorial';
import { useApp } from '../context/AppContext';
import { brandAssets, editorial, roomMotifs } from '../lib/editorial';
import { localizedRoom, roomBySlug, type RoomDefinition } from '../lib/rooms';

function RoomGallery({ room, name }: { room: RoomDefinition; name: string }) {
  const { lang } = useApp();
  const copy = editorial(lang);
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const photos = room.gallery;

  function step(delta: number) {
    setIndex((current) => (current + delta + photos.length) % photos.length);
  }

  function description(photo: string) {
    return lang === 'en' ? `${name} · ${photo.split('/').at(-1)?.replace(/\.(avif|jpe?g|webp)$/i, '')}` : name;
  }

  return (
    <section className="room-gallery" aria-label={copy.gallery}>
      <figure>
        <div className="room-gallery-stage">
          <motion.img
            key={photos[index]}
            src={photos[index]}
            alt={description(photos[index])}
            initial={reduced ? false : { opacity: 0.5, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduced ? 0 : 0.55 }}
          />
        </div>
        <div className="gallery-bar">
          <button type="button" className="icon-button" aria-label={copy.previousPhoto} onClick={() => step(-1)}><ArrowLeft /></button>
          <figcaption aria-live="polite">{index + 1} / {photos.length} <span>· {description(photos[index])}</span></figcaption>
          <button type="button" className="icon-button" aria-label={copy.nextPhoto} onClick={() => step(1)}><ArrowRight /></button>
        </div>
      </figure>
      <div className="gallery-thumbnails">
        {photos.map((photo, position) => (
          <button type="button" key={photo} aria-label={`${copy.showPhoto} ${position + 1}`} aria-pressed={index === position} onClick={() => setIndex(position)}>
            <img src={photo} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
}

export default function RoomDetail() {
  const { slug } = useParams();
  const { lang, t } = useApp();
  const copy = editorial(lang);
  const definition = roomBySlug(slug);
  if (!definition) return <Navigate to="/accommodation" replace />;

  const room = localizedRoom(definition, t.roomsData);
  const request = `/contact?room=${room.slug}`;
  const sleeping = room.key === 'poseidonHera'
    ? [
      lang === 'el' ? 'Υπνοδωμάτιο 1: 1 διπλό κρεβάτι & 1 μονό κρεβάτι' : 'Bedroom 1: 1 double bed and 1 single bed',
      lang === 'el' ? 'Υπνοδωμάτιο 2: 1 διπλό κρεβάτι & 1 κρεβάτι-συρτάρι' : 'Bedroom 2: 1 double bed and 1 drawer bed',
    ]
    : [room.beds];

  return (
    <>
      <section className="shell room-layout" key={slug}>
        <div className="room-intro intro-arrival">
          <BackToStays>{t.nav.rooms}</BackToStays>
          <img className="room-motif" src={`${brandAssets}/symbol-${room.slug}.svg`} width="70" height="70" alt="" />
          <p className="eyebrow">{copy[room.kind]}</p>
          <h1 className="display">{room.name}</h1>
          <p className="room-description">{room.desc}</p>
          <ul className="room-facts">
            <li><Users aria-hidden="true" />{room.capacity} {copy.guests}</li>
            <li><BedDouble aria-hidden="true" />{room.beds}</li>
            <li><Bath aria-hidden="true" />{room.baths}</li>
          </ul>
          <div className="room-actions"><ActionLink to={request}>{copy.requestRoom}</ActionLink><span>{room.price}</span></div>
        </div>
        <RoomGallery room={room} name={room.name} />
      </section>

      <section className="room-story section-space">
        <div className="shell room-story-grid">
          <Reveal>
            <p className="eyebrow">{t.rooms.olympianExp}</p>
            <h2 className="display">{room.greekName}<em>.</em></h2>
            <p>{room.longDesc}</p>
            {room.features.length > 0 && <ul className="room-features">{room.features.map((feature: string) => <li key={feature}>{feature}</li>)}</ul>}
            {lang === 'en' && <p className="motif-note">{roomMotifs[room.key]}</p>}
            <h3>{lang === 'el' ? 'Πού θα κοιμηθείτε' : "Where you'll sleep"}</h3>
            <ul className="room-detail-list">{sleeping.map((item) => <li key={item}><BedDouble aria-hidden="true" />{item}</li>)}</ul>
          </Reveal>
          <Reveal delay={0.12} className="room-amenities">
            <h2>{t.rooms.amenitiesTitle}</h2>
            <ul>{room.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}</ul>
            <p>{t.rooms.hostGreets}. {t.rooms.amenitiesSubtitle}</p>
            <ActionLink to="/policies" variant="text">{copy.policies}</ActionLink>
          </Reveal>
        </div>
      </section>
      <BookingCallout to={request} />
    </>
  );
}
