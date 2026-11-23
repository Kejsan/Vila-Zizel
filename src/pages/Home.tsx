import { useRef } from 'react';
import { ArrowDown, ArrowUpRight, Quote } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ActionLink, BookingCallout, ParallaxPhoto, Reveal, RoomCard } from '../components/Editorial';
import { useApp } from '../context/AppContext';
import { brandAssets, editorial } from '../lib/editorial';
import { featuredRooms } from '../lib/rooms';

type Testimonial = { name: string; text: string; location?: string; date?: string };

function HomeHero() {
  const { lang, t } = useApp();
  const copy = editorial(lang);
  const hero = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: hero, offset: ['start start', 'end start'] });
  const artY = useTransform(scrollYProgress, [0, 1], ['0%', '29%']);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 125]);

  return (
    <section className="home-hero" ref={hero} aria-labelledby="home-title">
      <motion.div className="hero-art-plane" style={{ y: reduced ? 0 : artY }}>
        <picture>
          <source media="(max-width: 650px)" srcSet={`${brandAssets}/ionic-capital-mobile.webp`} />
          <img src={`${brandAssets}/ionic-capital.webp`} alt="" fetchPriority="high" width="1536" height="1024" />
        </picture>
      </motion.div>
      <div className="hero-scrim" />
      <div className="shell hero-inner">
        <motion.div className="hero-copy" style={{ y: reduced ? 0 : copyY }}>
          <p className="eyebrow hero-place hero-enter">{t.home.heroBadge}</p>
          <h1 className="display" id="home-title">
            <span className="hero-title-line"><span className="hero-enter">{copy.hero[0]}</span></span>
            <span className="hero-title-line"><em className="hero-enter">{copy.hero[1]}</em></span>
          </h1>
          <div className="hero-enter hero-summary">
            <p>{copy.heroIntro}</p>
            <ActionLink to="/accommodation" variant="stone">{copy.explore}</ActionLink>
          </div>
        </motion.div>
        <div className="hero-foot">
          <small>{copy.artwork}</small>
          <a className="hero-scroll" href="#the-stays" aria-label={t.home.scrollDiscover}><ArrowDown aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { lang, t } = useApp();
  const copy = editorial(lang);
  const testimonials: Testimonial[] = t.testimonialsList || [];

  return (
    <>
      <HomeHero />
      <section className="section-space shell" id="the-stays" aria-labelledby="collection-title">
        <Reveal className="section-lead">
          <div>
            <p className="eyebrow">{t.rooms.tag}</p>
            <h2 id="collection-title" className="display">{copy.collection[0]} <em>{copy.collection[1]}</em></h2>
          </div>
          <div>
            <p>{copy.collectionIntro}</p>
            <ActionLink to="/accommodation" variant="text">{copy.explore}</ActionLink>
          </div>
        </Reveal>
        <div className="stay-grid">
          {featuredRooms.map((definition, index) => <RoomCard key={definition.slug} definition={definition} index={index} />)}
        </div>
      </section>

      <section className="garden-chapter" aria-labelledby="garden-chapter-title">
        <div className="chapter-media">
          <ParallaxPhoto src="/Images/Garden Area.jpg" alt={`Vila Zizel · ${t.home.featureNature}`} />
        </div>
        <Reveal className="chapter-copy">
          <img src={`${brandAssets}/ionic-olive-mark-reversed.svg`} width="64" height="72" alt="" />
          <p className="eyebrow">{t.about.tag}</p>
          <h2 id="garden-chapter-title" className="display">{copy.garden[0]} <em>{copy.garden[1]}</em></h2>
          <p>{copy.gardenIntro}</p>
          <ActionLink to="/about" variant="outline">{copy.gardenLink}</ActionLink>
        </Reveal>
      </section>

      <section className="section-space shell overview">
        <Reveal>
          <p className="eyebrow">{t.home.heroBadge}</p>
          <h2 className="display">{t.about.reachTitle} <em>Messenia.</em></h2>
          <ActionLink to="/about#location" variant="text">{copy.directions}</ActionLink>
        </Reveal>
        <div className="overview-facts">
          {[
            [t.home.featureNature, t.home.featureNatureDesc],
            [t.home.featureHandmade, t.home.featureHandmadeDesc],
            [t.home.featureSea, t.about.reachBeachDesc],
          ].map(([title, description], index) => (
            <Reveal key={title} delay={index * 0.1} className="overview-fact">
              <h3>{title}</h3><p>{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="reviews section-space">
          <div className="shell">
            <Reveal className="section-lead">
              <div><p className="eyebrow">{t.testimonials.tag}</p><h2 className="display">{t.testimonials.title} <em>{t.testimonials.highlight}</em></h2></div>
              <a className="action action--text" href="#guest-notes">{t.home.reviews}<ArrowUpRight aria-hidden="true" /></a>
            </Reveal>
            <div className="review-grid" id="guest-notes">
              {testimonials.map((review, index) => (
                <Reveal key={`${review.name}-${review.date}`} delay={(index % 3) * 0.07}>
                  <details className="review">
                    <summary><Quote aria-hidden="true" /><span>{review.name}</span><span>{review.date}</span></summary>
                    <blockquote>{review.text}</blockquote>
                    {review.location && <p>{review.location}</p>}
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingCallout />
    </>
  );
}
