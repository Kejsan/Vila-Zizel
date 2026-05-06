export type RoomKey = 'aphrodite' | 'hera' | 'poseidonHera' | 'zeus' | 'athina' | 'artemis';

export type RoomDefinition = {
  id: number;
  key: RoomKey;
  slug: string;
  price: string;
  greekName: string;
  image: string;
  fallbackImage: string;
  gallery: string[];
  sleeps: string;
  beds: string;
  baths: string;
};

export const roomDefinitions: RoomDefinition[] = [
  {
    id: 1,
    key: 'aphrodite',
    slug: 'aphrodite',
    price: 'From €80',
    greekName: 'Aphrodite',
    image: '/Images/Rooms/Aphrodite/Exterior 1.avif',
    fallbackImage: '/Images/Entry gate.avif',
    gallery: [
      '/Images/Rooms/Aphrodite/Exterior 1.avif',
      '/Images/Rooms/Aphrodite/Master Bedroom 1.avif',
      '/Images/Rooms/Aphrodite/Full Kitchen.avif',
      '/Images/Rooms/Aphrodite/Bathroom 1.avif',
      '/Images/Rooms/Aphrodite/Exterior 2.avif',
    ],
    sleeps: '4 guests',
    beds: '3 beds',
    baths: '1 bath',
  },
  {
    id: 2,
    key: 'hera',
    slug: 'hera',
    price: 'From €85',
    greekName: 'Hera',
    image: '/Images/Rooms/Hera/Exterior 1.avif',
    fallbackImage: '/Images/Entry gate.avif',
    gallery: [
      '/Images/Rooms/Hera/Exterior 1.avif',
      '/Images/Rooms/Hera/Bedroom 1.avif',
      '/Images/Rooms/Hera/Living Room 1.avif',
      '/Images/Rooms/Hera/Small Kitchen 1.avif',
      '/Images/Rooms/Hera/Bathroom 1.avif',
    ],
    sleeps: '3 guests',
    beds: '2 beds',
    baths: '1 bath',
  },
  {
    id: 4,
    key: 'poseidonHera',
    slug: 'poseidon-hera',
    price: 'From €150',
    greekName: 'Poseidon-Hera',
    image: '/Images/Rooms/Poseidon-Hera/Bedroom A 1.avif',
    fallbackImage: '/Images/Entry gate.avif',
    gallery: [
      '/Images/Rooms/Poseidon-Hera/Bedroom A 1.avif',
      '/Images/Rooms/Poseidon-Hera/Bedroom A 2.avif',
      '/Images/Rooms/Poseidon-Hera/Bedroom B 1.avif',
      '/Images/Rooms/Poseidon-Hera/Kitchen 1.avif',
      '/Images/Rooms/Poseidon-Hera/Dining Area.avif',
      '/Images/Rooms/Poseidon-Hera/Bathroom A 1.avif',
    ],
    sleeps: '6 guests',
    beds: '4 beds',
    baths: '2 baths',
  },
  {
    id: 5,
    key: 'zeus',
    slug: 'zeus',
    price: 'From €140',
    greekName: 'Zeus',
    image: '/Images/Entry gate.avif',
    fallbackImage: '/Images/Entry gate.avif',
    gallery: ['/Images/Entry gate.avif'],
    sleeps: '5 guests',
    beds: '4 beds',
    baths: '1 bath',
  },
  {
    id: 6,
    key: 'athina',
    slug: 'athina',
    price: 'From €90',
    greekName: 'Athina',
    image: '/Images/Entry gate.avif',
    fallbackImage: '/Images/Entry gate.avif',
    gallery: ['/Images/Entry gate.avif'],
    sleeps: '4 guests',
    beds: '2 beds',
    baths: '1 bath',
  },
  {
    id: 7,
    key: 'artemis',
    slug: 'artemis',
    price: 'From €85',
    greekName: 'Artemis',
    image: '/Images/Entry gate.avif',
    fallbackImage: '/Images/Entry gate.avif',
    gallery: ['/Images/Entry gate.avif'],
    sleeps: '3 guests',
    beds: '2 beds',
    baths: '1 bath',
  },
];

export function roomBySlug(slug?: string) {
  return roomDefinitions.find((room) => room.slug === slug);
}

export function localizedRoom(room: RoomDefinition, roomsData: any) {
  const data = roomsData?.[room.key] || {};
  return {
    ...room,
    name: data.name || `${room.greekName} Room`,
    desc: data.desc || '',
    longDesc: data.longDesc || data.desc || '',
    features: data.features || [],
  };
}
