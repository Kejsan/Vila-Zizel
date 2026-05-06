import { roomDefinitions } from './rooms';

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://vilazizel.com').replace(/\/$/, '');

export const SITE_NAME = 'Vila Zizel';
export const DEFAULT_IMAGE = '/Images/Entry gate.avif';
export const DEFAULT_DESCRIPTION =
  'Vila Zizel is a recently renovated Mediterranean accommodation in Analipsi, Messenia, Greece, with handmade rooms, gardens, parking, WiFi, and beach access.';

export const routes = [
  {
    path: '/',
    title: 'Vila Zizel | Handmade Accommodation in Analipsi, Messenia',
    description:
      'Stay at Vila Zizel, a handmade Mediterranean retreat in Analipsi, Messenia, Greece, set in 4,000 m2 of gardens near Chrysi Ammos beach.',
  },
  {
    path: '/about',
    title: 'About Vila Zizel | Analipsi Messenia Guest Accommodation',
    description:
      'Learn about Vila Zizel, its handmade 12 Gods of Olympus design, garden estate, local host Herman, and location near Analipsi beach in Messenia.',
  },
  {
    path: '/accommodation',
    title: 'Accommodation at Vila Zizel | Rooms and Apartments in Messenia',
    description:
      'Explore Vila Zizel rooms and apartments in Analipsi, including Aphrodite, Hera, Poseidon-Hera, Zeus, Athina, and Artemis stays with kitchens, WiFi, and parking.',
  },
  {
    path: '/contact',
    title: 'Contact Vila Zizel | Book a Stay in Analipsi, Messenia',
    description:
      'Contact Vila Zizel for room availability, booking questions, directions, and guest support in Analipsi, Messenia, Greece.',
  },
  {
    path: '/policies',
    title: 'Vila Zizel Policies | Booking, House Rules and Privacy',
    description:
      'Review practical booking, cancellation, house rule, privacy, and accessibility information for guests staying at Vila Zizel in Analipsi, Messenia.',
  },
] as const;

export const roomSlugs = [
  { slug: 'aphrodite', name: 'Aphrodite Room' },
  { slug: 'hera', name: 'Hera Room' },
  { slug: 'poseidon-hera', name: 'Poseidon-Hera Unit' },
  { slug: 'zeus', name: 'Zeus Apartment' },
  { slug: 'athina', name: 'Athina Room' },
  { slug: 'artemis', name: 'Artemis Room' },
] as const;

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function routeForPath(pathname: string) {
  const room = roomDefinitions.find((item) => pathname === `/rooms/${item.slug}`);
  if (room) {
    return {
      path: `/rooms/${room.slug}`,
      title: `${room.greekName} at Vila Zizel | Room in Analipsi, Messenia`,
      description: `Explore ${room.greekName} at Vila Zizel, a handmade accommodation option in Analipsi, Messenia, Greece, with ${room.sleeps}, ${room.beds}, and garden-estate amenities.`,
    };
  }

  return routes.find((route) => route.path === pathname) || routes[0];
}

export function lodgingBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'LocalBusiness'],
    '@id': absoluteUrl('/#lodgingbusiness'),
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_IMAGE),
    telephone: '+30 693 715 7283',
    email: 'hermancoku@gmail.com',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Analipsi 240 01',
      addressLocality: 'Analipsi',
      addressRegion: 'Messenia',
      postalCode: '240 01',
      addressCountry: 'GR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.008445596599785,
      longitude: 21.969529643030935,
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Kitchen amenities', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Garden', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Beach access nearby', value: true },
    ],
    sameAs: ['https://instagram.com/vilazizel'],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': absoluteUrl('/#lodgingbusiness') },
    inLanguage: ['en', 'el', 'it', 'de', 'es', 'fr'],
  };
}

export function breadcrumbSchema(pathname: string, title: string) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: absoluteUrl('/'),
    },
  ];

  if (pathname !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: title.split('|')[0].trim(),
      item: absoluteUrl(pathname),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export function accommodationSchema(t: any) {
  const rooms = t.roomsData || {};

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': absoluteUrl('/accommodation#rooms'),
    name: 'Vila Zizel accommodation options',
    itemListElement: roomDefinitions.map((room, index) => {
      const dataKey = room.key;
      const data = rooms[dataKey] || {};

      return {
        '@type': 'ListItem',
        position: index + 1,
        url: absoluteUrl(`/rooms/${room.slug}`),
        item: {
          '@type': 'Accommodation',
          name: data.name || `${room.greekName} at Vila Zizel`,
          description: data.longDesc || data.desc || `${room.greekName} at Vila Zizel in Analipsi, Messenia.`,
          containedInPlace: { '@id': absoluteUrl('/#lodgingbusiness') },
        },
      };
    }),
  };
}
