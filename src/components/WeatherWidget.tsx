import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, Cloud, CloudFog, CloudLightning, CloudMoon, CloudRain, CloudSnow, CloudSun, Droplets, Moon, Sun, Wind } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { weatherAttribution } from '../lib/editorial';

type PanelState = 'closed' | 'hover' | 'pinned' | 'dismissed';

function weatherIcon(symbol: string | null) {
  if (!symbol) return Cloud;
  const [condition, light] = symbol.split('_');
  const isDay = light !== 'night';
  if (condition === 'clearsky') return isDay ? Sun : Moon;
  if (condition === 'fair' || condition === 'partlycloudy') return isDay ? CloudSun : CloudMoon;
  if (condition === 'fog') return CloudFog;
  if (condition.includes('thunder')) return CloudLightning;
  if (condition.includes('snow') || condition.includes('sleet')) return CloudSnow;
  if (condition.includes('rain')) return CloudRain;
  return Cloud;
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
  const Icon = weatherIcon(weather.symbol);

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
          <div><dt><Droplets aria-hidden="true" />{t.weather.humidity}</dt><dd>{format.format(weather.humidity)}%</dd></div>
          <div><dt><Wind aria-hidden="true" />{t.weather.wind}</dt><dd>{format.format(weather.windSpeed)} km/h</dd></div>
        </dl>
        <a href={weatherAttribution} target="_blank" rel="noreferrer">MET Norway</a>
      </section>
    </div>
  );
}
