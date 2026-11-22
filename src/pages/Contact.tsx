import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { PageIntro, ParallaxPhoto } from '../components/Editorial';
import { useApp } from '../context/AppContext';
import { brandAssets, directionsUrl, editorial, propertyContact } from '../lib/editorial';
import { localizedRoom, roomBySlug, roomDefinitions } from '../lib/rooms';

const booking = 'booking-request';
const information = 'info-request';
type FormMode = typeof booking | typeof information;
type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'capacity';
const receiver = 'kejsancoku2@gmail.com';

function localDate() {
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Athens', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
}

function followingDate(date: string) {
  const day = new Date(`${date}T12:00:00Z`);
  day.setUTCDate(day.getUTCDate() + 1);
  return day.toISOString().slice(0, 10);
}

function ContactForm({ preferred }: { preferred?: string }) {
  const { lang, t } = useApp();
  const copy = editorial(lang);
  const [mode, setMode] = useState<FormMode>(booking);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [arrival, setArrival] = useState('');
  const submitting = useRef(false);
  const today = localDate();
  const busy = status === 'sending';

  async function submit(event: FormEvent<HTMLFormElement>, formName: FormMode) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    if (submitting.current || formData.get('bot-field')) return;

    const body = new URLSearchParams();
    for (const [name, value] of formData) body.append(name, String(value));

    if (formName === booking) {
      const room = roomBySlug(body.get('room') || undefined);
      if (room && Number(body.get('guests')) > room.capacity) {
        setStatus('capacity');
        form.querySelector<HTMLSelectElement>('select[name="room"]')?.focus();
        return;
      }
      body.set('room', room ? localizedRoom(room, t.roomsData).name : 'Not sure yet');
      body.set('subject', `Booking request from ${body.get('name')}`);
    } else if (!body.get('subject')?.trim()) {
      body.set('subject', `Info request from ${body.get('name')}`);
    }

    submitting.current = true;
    setStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed with HTTP ${response.status}`);
      form.reset();
      if (formName === booking) setArrival('');
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      submitting.current = false;
    }
  }

  function switchForm(next: FormMode) {
    setMode(next);
    setStatus('idle');
  }

  function formHiddenFields(name: FormMode) {
    return (
      <>
        <input type="hidden" name="form-name" value={name} />
        <input type="hidden" name="receiver" value={receiver} />
        <div hidden><label>Leave this field blank <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
      </>
    );
  }

  return (
    <div className="contact-form-panel">
      <div className="form-switch" role="group" aria-label={t.contact.tag}>
        <button type="button" aria-pressed={mode === booking} disabled={busy} onClick={() => switchForm(booking)}>{copy.request}</button>
        <button type="button" aria-pressed={mode === information} disabled={busy} onClick={() => switchForm(information)}>{copy.question}</button>
      </div>
      <h2>{mode === booking ? copy.request : copy.question}</h2>
      {mode === booking && <p className="form-help">{copy.arrivalNote}</p>}
      {import.meta.env.DEV && <p className="form-help">Local preview · Live delivery is handled by Netlify after deployment.</p>}
      <div aria-live="polite" className="form-status">
        {status === 'success' && <p className="form-success">{t.booking.success}</p>}
        {status === 'error' && <p className="form-error">{copy.error}</p>}
        {status === 'capacity' && <p className="form-error" id="capacity-error">{copy.tooMany}</p>}
      </div>

      <form name={booking} method="post" hidden={mode !== booking || status === 'success'} onSubmit={(event) => submit(event, booking)}>
        {formHiddenFields(booking)}
        <fieldset disabled={busy}>
          <div className="fields-grid">
            <label>{t.contactForm.checkIn}
              <input type="date" name="checkIn" required min={today} value={arrival} onChange={(event) => setArrival(event.target.value)} />
            </label>
            <label>{t.contactForm.checkOut}
              <input type="date" name="checkOut" required min={followingDate(arrival || today)} />
            </label>
            <div className="select-field">
              <label htmlFor="booking-guests">{t.contactForm.guests}</label>
              <select id="booking-guests" name="guests" defaultValue="2" onChange={() => { if (status === 'capacity') setStatus('idle'); }}>
                {Array.from({ length: 6 }, (_, index) => index + 1).map((count) => <option key={count} value={count}>{count} {count === 1 ? copy.guest : copy.guests}</option>)}
              </select>
            </div>
            <div className="select-field">
              <label htmlFor="booking-room">{copy.preferred}</label>
              <select id="booking-room" name="room" defaultValue={preferred || ''} aria-invalid={status === 'capacity' || undefined} aria-describedby={status === 'capacity' ? 'capacity-error' : undefined} onChange={() => { if (status === 'capacity') setStatus('idle'); }}>
                <option value="">{copy.noPreference}</option>
                {roomDefinitions.map((room) => <option key={room.slug} value={room.slug}>{localizedRoom(room, t.roomsData).name}</option>)}
              </select>
            </div>
            <label>{t.contactForm.name}<input name="name" autoComplete="name" required /></label>
            <label>{copy.phone}<input name="phone" type="tel" autoComplete="tel" /></label>
          </div>
          <label>{t.contactForm.emailLabel}<input name="email" type="email" autoComplete="email" required /></label>
          <label>{t.contactForm.message}<textarea name="message" rows={4} /></label>
          <button type="submit" className="action action--dark">{busy ? copy.sending : t.contactForm.send}<ArrowUpRight aria-hidden="true" /></button>
        </fieldset>
      </form>

      <form name={information} method="post" hidden={mode !== information || status === 'success'} onSubmit={(event) => submit(event, information)}>
        {formHiddenFields(information)}
        <fieldset disabled={busy}>
          <div className="fields-grid">
            <label>{t.contactForm.name}<input name="name" autoComplete="name" required /></label>
            <label>{t.contactForm.emailLabel}<input name="email" type="email" autoComplete="email" required /></label>
          </div>
          <label>{copy.subject}<input name="subject" /></label>
          <label>{copy.message}<textarea name="message" rows={6} required /></label>
          <button type="submit" className="action action--dark">{busy ? copy.sending : copy.sendMessage}<ArrowUpRight aria-hidden="true" /></button>
        </fieldset>
      </form>
    </div>
  );
}

export default function Contact() {
  const { lang, t } = useApp();
  const copy = editorial(lang);
  const [query] = useSearchParams();
  const preferred = roomBySlug(query.get('room') || undefined)?.slug;
  const contacts = [
    { Icon: Phone, label: t.contactForm.phone, text: propertyContact.phone, href: propertyContact.phoneHref },
    { Icon: Mail, label: t.contactForm.email, text: propertyContact.email, href: `mailto:${propertyContact.email}` },
    { Icon: Instagram, label: 'Instagram', text: '@vilazizel', href: propertyContact.instagram },
    { Icon: MapPin, label: t.contactForm.location, text: 'Vila Zizel, Analipsi 240 01, Messenia, Greece', href: directionsUrl },
  ];

  return (
    <>
      <PageIntro label={t.contact.tag} title={lang === 'en' ? 'Plan your' : t.contact.title} accent={lang === 'en' ? 'stay.' : t.contact.highlight}>
        <p>{t.contact.desc}</p>
      </PageIntro>
      <section className="shell contact-layout">
        <aside className="contact-sidebar intro-arrival">
          <div className="contact-art">
            <ParallaxPhoto src={`${brandAssets}/olive-and-sea.webp`} alt="" />
            <small>{copy.artwork}</small>
          </div>
          <h2>{t.contactForm.direct}</h2>
          <ul>
            {contacts.map(({ Icon, label, text, href }) => (
              <li key={label}><Icon aria-hidden="true" /><div><p className="eyebrow">{label}</p><a href={href}>{text}</a></div></li>
            ))}
          </ul>
        </aside>
        <ContactForm key={preferred || 'any'} preferred={preferred} />
      </section>
    </>
  );
}
