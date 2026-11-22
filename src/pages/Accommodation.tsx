import { useState } from 'react';
import { Clock3, House, ParkingCircle, Shield, Trees } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ActionLink, BookingCallout, PageIntro, Reveal, RoomCard } from '../components/Editorial';
import { editorial } from '../lib/editorial';
import { featuredRooms, roomDefinitions } from '../lib/rooms';

const filters = [
  { label: '2', max: 2, min: 2 },
  { label: '3–4', max: 4, min: 3 },
  { label: '6', max: 6, min: 6 },
];
const collection = [...featuredRooms, ...roomDefinitions.filter((room) => !featuredRooms.includes(room))];

export default function Accommodation() {
  const { lang, t } = useApp();
  const copy = editorial(lang);
  const [selected, setSelected] = useState('');
  const range = filters.find((filter) => filter.label === selected);
  const visible = range ? collection.filter(({ capacity }) => capacity >= range.min && capacity <= range.max) : collection;

  const facilities = [
    { icon: Trees, title: t.home.featureNature, description: t.home.featureNatureDesc },
    { icon: Shield, title: t.amenities.secure, description: t.amenities.secureDesc },
    { icon: House, title: t.amenities.privacy, description: t.about.standalone },
    { icon: ParkingCircle, title: t.amenitiesList.parking },
  ];

  return (
    <>
      <PageIntro label={t.nav.rooms} title={copy.collection[0]} accent={copy.collection[1]}>
        <p>{copy.collectionIntro}</p><p>{t.home.roomsTagline}</p>
      </PageIntro>

      <section className="shell collection-layout" aria-label={t.nav.rooms}>
        <div className="collection-controls">
          <div className="filter-buttons" role="group" aria-label={copy.capacity}>
            <button aria-pressed={selected === ''} type="button" onClick={() => setSelected('')}>{copy.allStays}</button>
            {filters.map(({ label }) => (
              <button key={label} type="button" aria-pressed={selected === label} onClick={() => setSelected(label)}>
                {copy.sleeps} {label}
              </button>
            ))}
          </div>
          <p role="status">{visible.length} {copy.results}</p>
        </div>
        <div className="stay-grid">
          {visible.map((definition, index) => <RoomCard key={definition.slug} definition={definition} index={index} />)}
        </div>
      </section>

      <section className="section-space facilities">
        <div className="shell">
          <Reveal className="section-lead">
            <div><p className="eyebrow">{t.amenities.tag}</p><h2 className="display">{t.amenities.title} <em>{t.amenities.highlight}</em></h2></div>
            <p>{t.amenities.desc}</p>
          </Reveal>
          <div className="facility-grid">
            {facilities.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} className="facility" delay={index * 0.09}>
                <Icon aria-hidden="true" /><h3>{title}</h3>{description && <p>{description}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-space rules-section">
        <Reveal>
          <Clock3 aria-hidden="true" />
          <h2 className="display">{t.rooms.rulesTitle}</h2>
          <ActionLink to="/policies" variant="text">{copy.policies}</ActionLink>
        </Reveal>
        <Reveal>
          <ul className="rule-list">
            {[t.rooms.checkIn, t.rooms.checkOut, t.rooms.noPets, t.rooms.hostGreets, t.rooms.longTerm].map((rule: string) => <li key={rule}>{rule}</li>)}
          </ul>
        </Reveal>
      </section>
      <BookingCallout />
    </>
  );
}
