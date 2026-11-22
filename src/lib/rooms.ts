export type RoomKey = 'aphrodite' | 'hera' | 'poseidonHera' | 'zeus' | 'athina' | 'artemis';

export type RoomDefinition = {
  id: number;
  key: RoomKey;
  slug: string;
  price: string;
  capacity: number;
  kind: 'room' | 'apartment' | 'unit';
  greekName: string;
  image: string;
  fallbackImage: string;
  gallery: string[];
  sleeps: string;
  beds: string;
  baths: string;
  icon: 'aphrodite' | 'hera' | 'poseidonHera' | 'zeus' | 'athina' | 'artemis';
  amenities: string[];
};

export const roomDefinitions: RoomDefinition[] = [
  {
    id: 1,
    key: 'aphrodite',
    slug: 'aphrodite',
    price: 'From €80',
    capacity: 4,
    kind: 'room',
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
    icon: 'aphrodite',
    amenities: ['WiFi', 'Air conditioning', 'Kitchen', 'TV', 'Hot water', 'Private entrance', 'Patio or balcony', 'Free parking'],
  },
  {
    id: 2,
    key: 'hera',
    slug: 'hera',
    price: 'From €85',
    capacity: 3,
    kind: 'room',
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
    icon: 'hera',
    amenities: ['WiFi', 'Air conditioning', 'Kitchen', 'TV', 'Washer', 'Hot water', 'Outdoor table', 'Free parking'],
  },
  {
    id: 4,
    key: 'poseidonHera',
    slug: 'poseidon-hera',
    price: 'From €150',
    capacity: 6,
    kind: 'unit',
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
    icon: 'poseidonHera',
    amenities: ['WiFi', 'Air conditioning', 'Two kitchens', 'Two bathrooms', 'TV', 'Washer', 'Private entrance', 'Free parking'],
  },
  {
    id: 5,
    key: 'zeus',
    slug: 'zeus',
    price: 'From €140',
    capacity: 4,
    kind: 'apartment',
    greekName: 'Zeus',
    image: '/Images/Rooms/Zeus/Balcony/Balcony.avif',
    fallbackImage: '/Images/Entry gate.avif',
    gallery: [
      '/Images/Rooms/Zeus/Balcony/Balcony.avif',
      '/Images/Rooms/Zeus/Living room/Living room 1.avif',
      '/Images/Rooms/Zeus/Living room/Living room 2.avif',
      '/Images/Rooms/Zeus/Living room/Living room 3.avif',
      '/Images/Rooms/Zeus/Bedroom 1/Bedroom 1-1.avif',
      '/Images/Rooms/Zeus/Bedroom 1/Bedroom 1-2.avif',
      '/Images/Rooms/Zeus/Bedroom 2/Bedroom 2-1.avif',
      '/Images/Rooms/Zeus/Dining area/Dining Area 1.avif',
      '/Images/Rooms/Zeus/Full kitchen/Full Kitchen.avif',
      '/Images/Rooms/Zeus/Full bathroom/Full Bathroom 1.avif',
    ],
    sleeps: '4 guests',
    beds: '3 beds',
    baths: '1 bath',
    icon: 'zeus',
    amenities: ['WiFi', 'Air conditioning', 'Heating', 'Kitchen', 'TV', 'Washer', 'Crib', 'High chair', 'Baby safety gates', 'Patio or balcony', 'Backyard', 'BBQ grill', 'Free parking', 'Long-term stays allowed'],
  },
  {
    id: 6,
    key: 'athina',
    slug: 'athina',
    price: 'From €90',
    capacity: 2,
    kind: 'room',
    greekName: 'Athina',
    image: '/Images/Rooms/Athina/Garden 2.avif',
    fallbackImage: '/Images/Entry gate.avif',
    gallery: [
      '/Images/Rooms/Athina/Garden 2.avif',
      '/Images/Rooms/Athina/Garden 1.avif',
      '/Images/Rooms/Athina/Bedroom 1.avif',
      '/Images/Rooms/Athina/Bedroom 2.avif',
      '/Images/Rooms/Athina/Bedroom 3.avif',
      '/Images/Rooms/Athina/Living Room 1.avif',
      '/Images/Rooms/Athina/Kitchen 1.avif',
      '/Images/Rooms/Athina/Bathroom 1.avif',
      '/Images/Rooms/Athina/Bathroom 2.jpeg',
    ],
    sleeps: '2 guests',
    beds: '1 bed',
    baths: '1 bath',
    icon: 'athina',
    amenities: ['WiFi', 'Air conditioning', 'Heating', 'Kitchen', 'TV', 'Free washer in building', 'Private entrance', 'Backyard', 'Free parking', 'Free street parking', 'Single level home'],
  },
  {
    id: 7,
    key: 'artemis',
    slug: 'artemis',
    price: 'From €85',
    capacity: 2,
    kind: 'room',
    greekName: 'Artemis',
    image: '/Images/Rooms/Artemis/Garden 1.avif',
    fallbackImage: '/Images/Entry gate.avif',
    gallery: [
      '/Images/Rooms/Artemis/Garden 1.avif',
      '/Images/Rooms/Artemis/Garden 2.avif',
      '/Images/Rooms/Artemis/Bedroom 1.avif',
      '/Images/Rooms/Artemis/Bedroom 2.avif',
      '/Images/Rooms/Artemis/Bedroom 3.avif',
      '/Images/Rooms/Artemis/Dining Area 1.avif',
      '/Images/Rooms/Artemis/Dining Area 2.avif',
      '/Images/Rooms/Artemis/Bathroom 1.avif',
      '/Images/Rooms/Artemis/Bathroom 2.avif',
    ],
    sleeps: '2 guests',
    beds: '1 king bed',
    baths: '1 bath',
    icon: 'artemis',
    amenities: ['WiFi', 'Air conditioning', 'Heating', 'Kitchen', 'TV', 'Washer', "Pack 'n play travel crib", 'Private entrance', 'Hammock', 'Free parking', 'Long-term stays allowed'],
  },
];

export function roomBySlug(slug?: string) {
  return roomDefinitions.find((room) => room.slug === slug);
}

export const featuredRooms = ['aphrodite', 'zeus', 'artemis'].map(
  (slug) => roomDefinitions.find((room) => room.slug === slug)!,
);

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
