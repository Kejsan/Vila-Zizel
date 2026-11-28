const stays = [
  {
    id: 'aphrodite', name: 'Aphrodite', type: 'Room', guests: 4, beds: 3, baths: 1,
    description: 'A king bedroom, separate kitchen and dining area with two single beds, and a small terrace for time outdoors.',
    motif: 'A seashell recalls Aphrodite, goddess of love and beauty.',
    photos: [['aphrodite', 'Entrance and terrace'], ['aphrodite-bedroom', 'Main bedroom'], ['aphrodite-kitchen', 'Kitchen']],
  },
  {
    id: 'zeus', name: 'Zeus', type: 'Apartment', guests: 4, beds: 3, baths: 1,
    description: 'Two bedrooms, a kitchen and dining area, a built-in living room sofa and a large terrace looking out over the garden.',
    motif: 'A thunderbolt recalls Zeus, ruler of the sky.',
    photos: [['zeus', 'View from the terrace'], ['zeus-bedroom', 'Main bedroom'], ['zeus-living', 'Living room']],
  },
  {
    id: 'artemis', name: 'Artemis', type: 'Room', guests: 2, beds: 1, baths: 1,
    description: 'A king bed and an adjoining kitchen and dining area, with a terrace and space to stretch out in the garden.',
    motif: 'A bow recalls Artemis, goddess of the hunt.',
    photos: [['artemis', 'Garden and entrance'], ['artemis-bedroom', 'Bedroom'], ['artemis-dining', 'Kitchen and dining area']],
  },
  {
    id: 'hera', name: 'Hera', type: 'Room', guests: 3, beds: 2, baths: 1,
    description: 'A bedroom, living area, small kitchen and an outdoor table, with a washing machine in the bathroom.',
    motif: 'A peacock feather recalls Hera, queen of the gods.',
    photos: [['hera', 'Entrance and outdoor seating'], ['hera-bedroom', 'Bedroom'], ['hera-living', 'Living area']],
  },
  {
    id: 'athina', name: 'Athina', type: 'Room', guests: 2, beds: 1, baths: 1,
    description: 'A built-in double bed in a room that opens into the kitchen and dining area, with a shaded patio outside.',
    motif: 'An olive sprig recalls Athina, goddess of wisdom and craft.',
    photos: [['athina', 'Garden patio'], ['athina-bedroom', 'Bedroom'], ['athina-kitchen', 'Kitchen']],
  },
  {
    id: 'poseidon-hera', name: 'Poseidon-Hera', type: 'Unit', guests: 6, beds: 4, baths: 2,
    description: 'A flexible two-bedroom stay with two kitchens, two dining areas and two bathrooms for groups who want space of their own.',
    motif: 'A trident and two waves carry Poseidon’s association with the sea into this shared stay.',
    photos: [['poseidon-hera', 'Dining area'], ['poseidon-hera-bedroom', 'Bedroom'], ['poseidon-hera-kitchen', 'Kitchen']],
  },
];

const grid = document.querySelector('#room-grid');
const stayCount = document.querySelector('#stay-count');
const menu = document.querySelector('#menu');
const room = document.querySelector('#room');
const inquiry = document.querySelector('#inquiry');
const form = document.querySelector('#request-form');
const fields = form.elements;
const summary = document.querySelector('#inquiry-confirmation');
const formPanel = document.querySelector('#inquiry-fields');
let selectedRoom;
let photoIndex = 0;
let roomOpener;
let inquiryOpener;

function guestLabel(count) {
  return `${count} ${count === 1 ? 'guest' : 'guests'}`;
}

function drawCards() {
  grid.innerHTML = stays.map((stay) => `
    <article class="room-card" data-guests="${stay.guests}">
      <button class="room-button" type="button" data-stay="${stay.id}" aria-haspopup="dialog">
        <span class="room-photo"><img src="assets/${stay.photos[0][0]}.webp" alt="" width="600" height="403" loading="lazy"></span>
        <span class="room-caption">
          <span><span class="room-type">${stay.type}</span><span class="room-name">${stay.name}</span><span class="room-capacity">Up to ${guestLabel(stay.guests)}</span></span>
          <span class="room-medal"><img src="identity/symbol-${stay.id}.svg" width="32" height="32" alt=""></span>
        </span>
      </button>
    </article>`).join('');
  stayCount.textContent = `${stays.length} stays`;
  for (const stay of stays) fields.stay.add(new Option(stay.name, stay.id));
}

drawCards();

document.querySelector('.filters').addEventListener('click', (event) => {
  const control = event.target.closest('[data-filter]');
  if (!control) return;
  document.querySelectorAll('[data-filter]').forEach((button) => button.setAttribute('aria-pressed', String(button === control)));
  const allowed = control.dataset.filter.split('-');
  let visible = 0;
  for (const card of grid.children) {
    card.hidden = !allowed.includes('all') && !allowed.includes(card.dataset.guests);
    if (!card.hidden) visible += 1;
  }
  stayCount.textContent = `${visible} ${visible === 1 ? 'stay' : 'stays'}`;
});

function showPhoto() {
  const photo = document.querySelector('#gallery-photo');
  const [asset, caption] = selectedRoom.photos[photoIndex];
  photo.src = `assets/${asset}.webp`;
  photo.alt = `${caption} at ${selectedRoom.name}`;
  document.querySelector('#gallery-caption').textContent = `${photoIndex + 1} / ${selectedRoom.photos.length} · ${caption}`;
}

function stepPhoto(direction) {
  const count = selectedRoom.photos.length;
  photoIndex = (photoIndex + direction + count) % count;
  showPhoto();
}

grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-stay]');
  if (!button) return;
  roomOpener = button;
  selectedRoom = stays.find((stay) => stay.id === button.dataset.stay);
  photoIndex = 0;
  document.querySelector('#room-title').textContent = selectedRoom.name;
  document.querySelector('#room-type').textContent = selectedRoom.type;
  document.querySelector('#room-symbol').src = `identity/symbol-${selectedRoom.id}.svg`;
  document.querySelector('#room-facts').textContent = `Up to ${guestLabel(selectedRoom.guests)} · ${selectedRoom.beds} ${selectedRoom.beds === 1 ? 'bed' : 'beds'} · ${selectedRoom.baths} ${selectedRoom.baths === 1 ? 'bath' : 'baths'}`;
  document.querySelector('#room-description').textContent = selectedRoom.description;
  document.querySelector('#room-motif').textContent = selectedRoom.motif;
  showPhoto();
  room.showModal();
});

document.querySelector('#gallery-prev').addEventListener('click', () => stepPhoto(-1));
document.querySelector('#gallery-next').addEventListener('click', () => stepPhoto(1));
room.addEventListener('keydown', (event) => {
  if (!event.target.closest('.gallery-controls')) return;
  if (event.key === 'ArrowLeft') stepPhoto(-1);
  if (event.key === 'ArrowRight') stepPhoto(1);
});

const menuButton = document.querySelector('.menu-trigger');
menuButton.addEventListener('click', () => menu.showModal());
menu.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  menu.close();
  const target = document.querySelector(link.getAttribute('href'));
  target.tabIndex = -1;
  target.focus({ preventScroll: true });
}));

document.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));

function dateForInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function updateEndDate() {
  const day = fields.arrival.value ? new Date(`${fields.arrival.value}T12:00:00`) : new Date();
  day.setDate(day.getDate() + 1);
  fields.departure.min = dateForInput(day);
}

function updateCapacity() {
  const stay = stays.find(({ id }) => id === fields.stay.value);
  const tooMany = stay && Number(fields.guests.value) > stay.guests;
  fields.stay.setCustomValidity(tooMany ? `${stay.name} sleeps up to ${guestLabel(stay.guests)}. Choose a larger stay or change your guest count.` : '');
}

function editRequest() {
  summary.hidden = true;
  formPanel.hidden = false;
  inquiry.setAttribute('aria-labelledby', 'inquiry-title');
}

document.querySelectorAll('[data-inquire]').forEach((button) => button.addEventListener('click', () => {
  const fromRoom = room.open;
  inquiryOpener = fromRoom ? roomOpener : menu.open ? menuButton : button;
  if (fromRoom) room.close();
  if (menu.open) menu.close();
  fields.arrival.min = dateForInput(new Date());
  fields.stay.value = fromRoom ? selectedRoom.id : '';
  updateEndDate();
  updateCapacity();
  editRequest();
  inquiry.showModal();
}));

fields.arrival.addEventListener('change', updateEndDate);
fields.stay.addEventListener('change', updateCapacity);
fields.guests.addEventListener('change', updateCapacity);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const displayDate = (value) => new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(new Date(`${value}T12:00:00`));
  const preferred = fields.stay.selectedOptions[0].textContent;
  document.querySelector('#request-summary').textContent = `${displayDate(fields.arrival.value)} to ${displayDate(fields.departure.value)} · ${guestLabel(fields.guests.value)} · ${preferred}`;
  formPanel.hidden = true;
  summary.hidden = false;
  summary.querySelector('h2').id = 'request-preview-title';
  inquiry.setAttribute('aria-labelledby', 'request-preview-title');
  summary.querySelector('h2').focus();
});

document.querySelector('#edit-request').addEventListener('click', () => {
  editRequest();
  fields.arrival.focus();
});

inquiry.addEventListener('close', () => inquiryOpener?.focus({ preventScroll: true }));

if ('IntersectionObserver' in window && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const reveal = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.remove('pending');
      observer.unobserve(entry.target);
    }
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((element) => {
    if (element.getBoundingClientRect().top < innerHeight) return;
    element.classList.add('pending');
    reveal.observe(element);
  });
}
