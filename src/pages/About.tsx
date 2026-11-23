import { Car, MapPin, Plane, Sun, Trees } from 'lucide-react';
import { ActionLink, BookingCallout, ParallaxPhoto, Reveal } from '../components/Editorial';
import { useApp } from '../context/AppContext';
import { directionsUrl, editorial, mapUrl, weatherAttribution } from '../lib/editorial';

const gemPhotos = ['/Images/Garden Area.jpg', '/Images/Analipsi Beach/2.jpg', '/Images/Analipsi Beach/7.jpg'];

type LocalGem = { name: string; dist: string; desc: string; img?: string };

export default function About() {
  const { lang, t, weather } = useApp();
  const copy = editorial(lang);
  const gems: LocalGem[] = t.about.localGems || [];

  return (
    <>
      <section className="shell about-intro">
        <div className="intro-arrival">
          <p className="eyebrow">{t.about.tag}</p>
          <h1 className="display">{copy.garden[0]} <em>{copy.garden[1]}</em></h1>
          <p>{t.about.desc}</p>
          <ActionLink to="/about#location" variant="text">{copy.directions}</ActionLink>
        </div>
        <div className="intro-arrival intro-deferred">
          <ParallaxPhoto src="/Images/Garden Full View.jpg" alt={t.home.featureNature} eager />
        </div>
      </section>

      <section className="section-space host-section">
        <div className="shell host-layout">
          <Reveal className="host-photo">
            <ParallaxPhoto src="/Images/Entry gate.avif" alt="Vila Zizel" />
          </Reveal>
          <Reveal className="host-copy" delay={0.13}>
            <p className="eyebrow">{t.about.handmade}</p>
            <h2 className="display">{t.about.hostTitle}</h2>
            <p>{t.about.hostDesc}</p><p>{t.about.hostExtra}</p>
            <ul><li>{t.about.schools}</li><li>{t.about.speaks} · EL / EN / IT</li></ul>
          </Reveal>
        </div>
        <div className="shell story-facts">
          {[
            [t.about.hospitality, t.about.hospitalityDesc],
            [t.about.nature, t.about.natureDesc],
            [t.about.atmosphere, t.about.atmosphereDesc],
          ].map(([title, text], index) => <Reveal key={title} delay={index * 0.1}><h3>{title}</h3><p>{text}</p></Reveal>)}
        </div>
      </section>

      <section className="shell section-space" aria-labelledby="surroundings-title">
        <Reveal className="section-lead">
          <div><p className="eyebrow">{t.explore.tag}</p><h2 id="surroundings-title" className="display">{t.explore.title} <em>{t.explore.highlight}</em></h2></div>
          <p>{t.explore.desc}</p>
        </Reveal>
        <div className="destination-grid">
          {gems.map((gem, index) => (
            <Reveal key={gem.name} className="destination-item" delay={index * 0.1}>
              <ParallaxPhoto src={gem.img || gemPhotos[index % gemPhotos.length]} alt="" />
              <div><p className="eyebrow">{gem.dist}</p><h3>{gem.name}</h3><p>{gem.desc}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="location" className="location-section section-space">
        <div className="shell location-grid">
          <Reveal>
            <p className="eyebrow">{t.about.reachTag}</p>
            <h2 className="display">{t.about.reachTitle} <em>Messenia.</em></h2>
            <dl className="travel-list">
              {[
                { Icon: Plane, title: t.about.reachAir, desc: t.about.reachAirDesc },
                { Icon: Car, title: t.about.reachCar, desc: t.about.reachCarDesc },
                { Icon: Trees, title: t.about.reachBeach, desc: t.about.reachBeachDesc },
              ].map(({ Icon, title, desc }) => (
                <div key={title}><Icon aria-hidden="true" /><dt>{title}</dt><dd>{desc}</dd></div>
              ))}
            </dl>
            <a href={directionsUrl} className="action action--dark">{copy.directions}<MapPin aria-hidden="true" /></a>
            {weather && (
              <div className="location-weather">
                <Sun aria-hidden="true" /> <span>{t.weather.title} · <strong>{Math.round(weather.temperature)} °C</strong></span>
                <span>{t.weather.humidity} {Math.round(weather.humidity)}%</span>
                <span>{t.weather.wind} {Math.round(weather.windSpeed)} km/h</span>
                <a href={weatherAttribution} target="_blank" rel="noreferrer">MET Norway</a>
              </div>
            )}
          </Reveal>
          <Reveal delay={0.14} className="location-map">
            <iframe title={`Vila Zizel · ${copy.location}`} src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <a href={directionsUrl}>Vila Zizel · Analipsi 240 01 <MapPin aria-hidden="true" /></a>
          </Reveal>
        </div>
      </section>
      <BookingCallout />
    </>
  );
}
