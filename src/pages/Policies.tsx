import { Calendar, FileText, ShieldCheck, Sparkles } from 'lucide-react';
import { ActionLink, PageIntro, Reveal } from '../components/Editorial';

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
    <div lang="en">
      <PageIntro label="Guest information" title="Policies &" accent="practical details.">
        <p>A concise reference for bookings, house rules, privacy, and guest needs at Vila Zizel.</p>
      </PageIntro>
      <section className="shell policy-layout">
        <div className="policies-grid">
          {sections.map(({ title, body, icon: Icon }, index) => (
            <Reveal key={title} className="policy-card" delay={(index % 2) * 0.1}>
              <Icon aria-hidden="true" />
              <h2>{title}</h2>
              {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </Reveal>
          ))}
        </div>
        <Reveal className="policy-help">
          <h2>Need something specific confirmed?</h2>
          <p>
            Direct confirmation is best for current availability, accessibility needs, family equipment, and exact booking conditions.
          </p>
          <ActionLink to="/contact">Contact Vila Zizel</ActionLink>
        </Reveal>
      </section>
    </div>
  );
}
