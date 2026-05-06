import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  DEFAULT_IMAGE,
  SITE_NAME,
  absoluteUrl,
  accommodationSchema,
  breadcrumbSchema,
  routeForPath,
} from '../lib/seo';

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
}

function upsertLink(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
}

function upsertJsonLd(id: string, schema: unknown) {
  let element = document.getElementById(id) as HTMLScriptElement | null;
  if (!element) {
    element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(schema);
}

export default function SEO() {
  const location = useLocation();
  const { lang, t } = useApp();
  const route = routeForPath(location.pathname);
  const canonical = absoluteUrl(route.path);
  const image = absoluteUrl(DEFAULT_IMAGE);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = route.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: route.description });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#f4efe4' });

    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: route.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: route.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: lang === 'en' ? 'en_US' : lang });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: route.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: route.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

    upsertJsonLd('schema-breadcrumbs', breadcrumbSchema(route.path, route.title));

    const accommodationSchemaElement = document.getElementById('schema-accommodation');
    if (route.path === '/accommodation') {
      upsertJsonLd('schema-accommodation', accommodationSchema(t));
    } else if (accommodationSchemaElement) {
      accommodationSchemaElement.remove();
    }
  }, [canonical, image, lang, route.description, route.path, route.title, t]);

  return null;
}
