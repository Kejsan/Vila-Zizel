import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, Cloud, CloudFog, CloudLightning, CloudMoon, CloudRain, CloudSnow, CloudSun, Droplets, Moon, Sun, Wind } from 'lucide-react';
import { useApp } from '../context/AppContext';

type PanelState = 'closed' | 'hover' | 'pinned' | 'dismissed';

function weatherIcon(code: number | null, isDay: boolean) {
  switch (code) {
    case 0: return isDay ? Sun : Moon;
    case 1:
    case 2: return isDay ? CloudSun : CloudMoon;
    case 45:
    case 48: return CloudFog;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82: return CloudRain;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86: return CloudSnow;
    case 95:
    case 96:
    case 99: return CloudLightning;
    default: return Cloud;
  }
}

export default function WeatherWidget() {
  const { lang, weather, t } = useApp();
  const [panel, setPanel] = useState<PanelState>('closed');
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const expanded = panel === 'hover' || panel === 'pinned';

  useEffect(() => {
    if (!expanded) return;

    function dismissOutside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) {
        setPanel('closed');
      }
    }

    function dismissOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      if (root.current?.contains(document.activeElement)) trigger.current?.focus();
      setPanel('dismissed');
    }

    document.addEventListener('pointerdown', dismissOutside);
    document.addEventListener('keydown', dismissOnEscape);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside);
      document.removeEventListener('keydown', dismissOnEscape);
    };
  }, [expanded]);

  if (!weather) return null;

  const format = new Intl.NumberFormat(lang, { maximumFractionDigits: 0 });
  const temperature = `${format.format(weather.temperature)} °C`;
  const Icon = weatherIcon(weather.code, weather.isDay);

  return (
    <div
      ref={root}
      className="weather-widget"
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setPanel((state) => state === 'closed' ? 'hover' : state);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setPanel((state) => state === 'pinned' ? state : 'closed');
      }}
    >
      <button
        ref={trigger}
        type="button"
        className="weather-trigger"
        aria-label={`${t.weather.title}, ${temperature}`}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setPanel((state) => state === 'pinned' ? 'dismissed' : 'pinned')}
      >
        <span className="weather-symbol"><Icon aria-hidden="true" /></span>
        <span className="weather-trigger-copy">
          <span className="eyebrow">{t.weather.title}</span>
          <span className="weather-temperature">{temperature}</span>
        </span>
        <ChevronDown className="weather-chevron" aria-hidden="true" />
      </button>

      <section className="weather-panel" id={panelId} aria-label={t.weather.title} hidden={!expanded}>
        <p className="eyebrow weather-panel-title">{t.weather.title}</p>
        <dl>
          {weather.humidity !== null && (
            <div><dt><Droplets aria-hidden="true" />{t.weather.humidity}</dt><dd>{format.format(weather.humidity)}%</dd></div>
          )}
          {weather.windSpeed !== null && (
            <div><dt><Wind aria-hidden="true" />{t.weather.wind}</dt><dd>{format.format(weather.windSpeed)} km/h</dd></div>
          )}
        </dl>
        <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a>
      </section>
    </div>
  );
}
