import { useLayoutEffect, useRef, useState, type Ref } from 'react';
import { Check, SlidersHorizontal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { optionalOff, optionalOn, usePrivacy } from '../context/PrivacyContext';
import { privacyCopy } from '../lib/privacy';
import './PrivacyPrompt.css';

function PrivacyPreferences({ headingRef }: { headingRef: Ref<HTMLHeadingElement> }) {
  const { lang } = useApp();
  const { choices, closePreferences, saveChoices } = usePrivacy();
  const [draft, setDraft] = useState(choices ?? optionalOff);
  const copy = privacyCopy(lang);

  return (
    <>
      <header className="privacy-header">
        <button type="button" className="privacy-back" onClick={closePreferences}>{choices ? copy.close : copy.back}</button>
        <h2 id="privacy-title" ref={headingRef} tabIndex={-1}>{copy.manage}</h2>
        <p id="privacy-description">{copy.instructions}</p>
      </header>
      <section className="privacy-sections" tabIndex={0} aria-label={copy.manage}>
        {(['necessary', 'analytics', 'maps', 'weather', 'inquiries'] as const).map((key) => {
          const { title, description, details } = copy.sections[key];
          const optional = key === 'analytics' || key === 'maps';
          return (
            <section key={key} className="privacy-section">
              <div className="privacy-section-heading">
                <h3 id={`privacy-${key}`}>{title}</h3>
                {optional && (
                  <label className="privacy-switch">
                    <input
                      type="checkbox"
                      role="switch"
                      aria-labelledby={`privacy-${key}`}
                      aria-describedby={`privacy-${key}-description`}
                      checked={draft[key]}
                      onChange={(event) => {
                        const checked = event.currentTarget.checked;
                        setDraft((previous) => ({ ...previous, [key]: checked }));
                      }}
                    />
                    <span aria-hidden="true" />
                  </label>
                )}
                {key === 'necessary' && <span className="privacy-status">{copy.alwaysActive}</span>}
              </div>
              <p id={`privacy-${key}-description`}>{description}</p>
              <p>{details}</p>
            </section>
          );
        })}
      </section>
      <footer className="privacy-actions">
        <button type="button" className="privacy-button privacy-button--primary" onClick={() => saveChoices(draft)}>{copy.save}</button>
      </footer>
    </>
  );
}

export default function PrivacyPrompt() {
  const { lang } = useApp();
  const { choices, editing, openPreferences, closePreferences, saveChoices } = usePrivacy();
  const location = useLocation();
  const readingPolicy = location.pathname === '/policies' && location.hash === '#privacy' && Boolean(location.state?.readPrivacyPolicy);
  const view = editing ? 'preferences' : choices || readingPolicy ? null : 'notice';
  const copy = privacyCopy(lang);
  const dialog = useRef<HTMLDialogElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const preferences = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (!view) {
      if (element.open) {
        element.close();
        if (readingPolicy) {
          const policy = document.getElementById('privacy');
          policy?.focus({ preventScroll: true });
          policy?.scrollIntoView({ behavior: 'instant' });
        }
      }
      return;
    }
    if (!element.open) element.showModal();
    (view === 'notice' ? preferences.current : heading.current)?.focus({ preventScroll: true });
  }, [view, readingPolicy]);

  return (
    <dialog
      ref={dialog}
      id="privacy-dialog"
      className={`privacy-dialog privacy-dialog--${view ?? 'closed'}`}
      aria-labelledby="privacy-title"
      aria-describedby="privacy-description"
      onCancel={(event) => {
        event.preventDefault();
        if (editing) closePreferences();
      }}
    >
      {view === 'preferences' && <PrivacyPreferences headingRef={heading} />}
      {view === 'notice' && (
        <>
          <header className="privacy-header">
            <h2 id="privacy-title">{copy.title}</h2>
            <button type="button" className="privacy-button" onClick={() => saveChoices(optionalOff)}>{copy.decline}</button>
          </header>
          <p className="privacy-notice-copy" id="privacy-description">
            {copy.summary}{' '}
            <Link to="/policies#privacy" state={{ readPrivacyPolicy: true }}>{copy.policy}</Link>
          </p>
          <footer className="privacy-actions">
            <button ref={preferences} type="button" className="privacy-button privacy-button--primary privacy-button--preferences" onClick={openPreferences}>
              <SlidersHorizontal aria-hidden="true" />{copy.preferences}
            </button>
            <button type="button" className="privacy-button privacy-button--primary" onClick={() => saveChoices(optionalOn)}>
              <Check aria-hidden="true" />{copy.accept}
            </button>
          </footer>
        </>
      )}
    </dialog>
  );
}
