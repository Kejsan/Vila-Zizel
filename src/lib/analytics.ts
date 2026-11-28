const measurementId = 'G-J24EZN1G10';
const disableKey = `ga-disable-${measurementId}` as const;
const scriptId = 'vila-zizel-google-analytics';

const analyticsWindow = window as Window & {
  [disableKey]?: boolean;
  dataLayer?: unknown[];
};

let initialized = false;

export function applyAnalyticsPreference(allowed: boolean | null) {
  analyticsWindow[disableKey] = allowed !== true;

  if (allowed === null) return;
  if (!allowed) {
    for (const name of ['_ga', `_ga_${measurementId.slice(2)}`]) {
      const expiration = `${name}=; Max-Age=0; Path=/`;
      document.cookie = expiration;
      const labels = window.location.hostname.split('.');
      for (let index = 0; index < labels.length - 1; index++) {
        document.cookie = `${expiration}; Domain=${labels.slice(index).join('.')}`;
      }
    }
    return;
  }

  if (!initialized) {
    const dataLayer = analyticsWindow.dataLayer ??= [];
    function gtag(..._command: unknown[]) {
      dataLayer.push(arguments);
    }

    // Optional consent covers audience measurement only.
    gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    gtag('js', new Date());
    gtag('config', measurementId);
    initialized = true;
  }

  if (document.getElementById(scriptId)) return;
  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.addEventListener('error', () => script.remove(), { once: true });
  document.head.append(script);
}
