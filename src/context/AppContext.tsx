import React, { createContext, useContext, useState, useEffect } from 'react';

export const translations: any = {
  en: {
    nav: { home: 'Home', about: 'About', rooms: 'Accommodation', contact: 'Contact', book: 'Book Now' },
    hero: { title: 'The Gods\'', subtitle: 'Sanctuary.', desc: 'A recently renovated handmade retreat set within 4,000sqm of blooming gardens, where every corner reflects the spirit of the 12 Gods of Olympus.', explore: 'Explore Rooms', loved: 'Loved by guests' },
    about: { 
      tag: 'Our Story', 
      title: 'A Mythical', highlight: 'Escape.', 
      desc: 'Located in Analipsi, Messenia, a breath from the "Chrysi Ammos" beach, Vila Zizel offers a unique experience. Our 4,000sqm estate features independent, fully-lit buildings with handmade designs inspired by the 12 Gods of Olympus.', 
      hours: 'Golden Hours', hoursDesc: 'Enjoy breakfast on the terrace with perfect morning light.', 
      bliss: 'Botanical Bliss', blissDesc: 'Relax in our fenced, natural environment under the shade of ancient trees.',
      hostTitle: 'Meet your host, Herman',
      hostDesc: 'A Superhost with 6 years of experience, Herman is a builder and farmer born in the 70s. His craftsmanship is evident in every handmade detail of the villa.',
      hostExtra: 'He speaks English, Greek, and Italian, and loves spending time with his family at the estate.',
      estateSize: 'Estate Size', design: 'Design', theme: 'Theme', buildings: 'Buildings',
      handmade: 'Handmade Sanctuary', schools: 'Went to school in Albania', speaks: 'Speaks',
      renovated: 'Fully Renovated & Handmade', standalone: 'Standalone Independent Building',
      hospitality: 'Hospitality', hospitalityDesc: 'Experience the true meaning of Greek Philoxenia.',
      nature: 'Nature', natureDesc: 'Surrounded by ancient olive groves and blooming gardens.',
      atmosphere: 'Atmosphere', atmosphereDesc: 'A peaceful sanctuary designed for your deepest relaxation.',
      reachTag: 'How to reach us',
      reachTitle: 'In the heart of',
      reachAir: 'By Air',
      reachAirDesc: '15 mins drive from Kalamata International Airport (KLX).',
      reachCar: 'By Car',
      reachCarDesc: 'Scenic 2.5 hr drive from Athens. Free private parking on-site.',
      reachBeach: 'Beach Access',
      reachBeachDesc: 'A flat 400m stroll to the sandy Analipsi beach.',
      galleryTitle: 'Capture the',
      galleryHighlight: 'Magic.',
      galleryDesc: 'Scenes from the golden Messinian surroundings.',
      readyDiscover: 'Ready to discover',
      checkRooms: 'Check Accommodations',
      localGems: [
        { name: 'Analipsi Beach', dist: '2 min walk', desc: 'Pristine waters and golden sand just steps away from your door.' },
        { name: 'Ancient Messene', dist: '30 min drive', desc: 'One of the best-preserved archaeological sites in Greece.' },
        { name: 'Polylimnio Waterfalls', dist: '25 min drive', desc: 'A hidden natural network of many lakes and waterfalls.' }
      ]
    },
    rooms: { 
      tag: 'The Stay', 
      title: 'Mythical', highlight: 'Havens.', 
      zeus: 'Zeus Suite', hera: 'Hera Room', poseidon: 'Poseidon Studio',
      inquire: 'Inquire Availability', learnMore: 'Learn More',
      rulesTitle: 'House Rules',
      checkIn: 'Check-in: 2:00 PM - 8:00 PM',
      checkOut: 'Checkout before 11:00 AM',
      maxGuests: '3 guests maximum',
      noPets: 'No pets allowed',
      smoking: 'Smoking is allowed',
      amenitiesTitle: 'What this place offers',
      amenitiesSubtitle: 'Note: Some amenities may vary depending on the room choice.',
      hostGreets: 'Host greets you',
      longTerm: 'Long-term stays allowed',
      olympianExp: 'The Olympian Experience',
      roomAmenities: 'Room Amenities',
      notIncluded: 'Not Included',
      smokeWarning: 'This place may not have a smoke or carbon monoxide detector.'
    },
    amenitiesList: {
      bathroom: 'Hair dryer, shampoo, hot water',
      laundry: 'Washer, drying rack, iron',
      essentials: 'Towels, bed sheets, soap, toilet paper',
      family: 'Crib, high chair, baby safety gates',
      kitchen: 'Stove, fridge, microwave, coffee maker, pots & pans',
      outdoor: 'Patio/balcony, backyard, BBQ grill',
      parking: 'Free parking on premises',
      notIncluded: 'No smoke/CO alarm, no dryer, no exterior cameras',
      bathLabel: 'Bathroom & Laundry',
      kitchenLabel: 'Kitchen & Dining',
      outdoorLabel: 'Outdoor & Features',
      safetyLabel: 'Home Safety',
      safetyDesc: 'Fire extinguisher, First aid kit',
      essentialsLabel: 'Essentials',
      familyLabel: 'Family'
    },
    roomsData: {
      zeus: {
        name: 'Zeus Suite',
        desc: 'A powerful presence with majestic views.',
        longDesc: 'The Zeus Suite is our most premium offering, featuring handmade wooden furniture and a private terrace overlooking the botanical gardens.',
        features: ['Private Terrace', 'Handmade Desk', 'King Size Bed']
      },
      hera: {
        name: 'Hera Room',
        desc: 'Elegant, peaceful, and full of natural light.',
        longDesc: 'Named after the Queen of Gods, this room offers a serene environment with floral decor and artisanal lighting fixtures.',
        features: ['Natural Light', 'Floral Decor', 'Artisanal Lighting']
      },
      poseidon: {
        name: 'Poseidon Studio',
        desc: 'Cool tones and refreshing tranquility.',
        longDesc: 'Our Poseidon Studio brings the freshness of the sea to the garden, with aquatic-inspired textures and a spacious layout.',
        features: ['Marine Tones', 'Spacious Layout', 'Garden Access']
      }
    },
    amenities: { 
      tag: 'Experience', title: 'Everything for', highlight: 'Your Stay.', 
      desc: 'Independent buildings, parking space, and soon a full BBQ and playground for children.',
      estate: '4k SQM', estateDesc: 'Vast botanical property.',
      secure: 'Fenced / Lit', secureDesc: 'Secure and bright at night.',
      privacy: 'Independent', privacyDesc: 'Total privacy for gods.',
      soon: 'Soon BBQ', soonDesc: 'BBQ area & Playground.'
    },
    booking: { tag: 'Reservation', title: 'Request Your', highlight: 'Sanctuary.', success: 'Thank you! Your request has been received.' },
    testimonials: { tag: 'Kind Words', title: 'Guest', highlight: 'Experiences.' },
    weather: { title: 'Analipsi Weather', humidity: 'Humidity', wind: 'Wind' },
    explore: { tag: 'The Surroundings', title: 'Beyond the', highlight: 'Garden Walls.', desc: 'Analipsi is home to "Chrysi Ammos" (Golden Sand), a beach of stunning natural beauty just a breath away.' },
    contact: { tag: 'Get In Touch', title: 'Contact', highlight: 'Us.', desc: 'Have questions? We are here to help you plan your perfect getaway.' },
    home: {
      botanicalGrace: 'Botanical Grace.',
      rating: 'Guest Rating',
      reviews: 'Reviews',
      themeLink: 'Learn about our 12 Gods theme',
      heaven: 'A heaven for young gods and old friends.',
      exploreSuites: 'Explore Suites',
      showAll: 'View All Details',
      guestJourneys: 'Guest Journeys.',
      mythosBegins: 'Your Mythous begins here.',
      secureStay: 'Secure Your Stay',
      glow: 'Follow the Glow'
    },
    footer: {
      desc: 'A blossoming Mediterranean sanctuary in the heart of Messenia. Experience authentic Greek hospitality in a botanical paradise.',
      menu: 'MENU',
      stay: 'STAY',
      contact: 'CONTACT',
      rights: 'All rights reserved.',
      madeWith: 'Made with'
    },
    contactForm: {
      direct: 'Direct Contact',
      phone: 'Phone',
      email: 'Email',
      location: 'Our Location',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      name: 'Full Name',
      emailLabel: 'Email Address',
      message: 'Message (Optional)',
      placeholderName: 'John Doe',
      placeholderEmail: 'john@example.com',
      placeholderMessage: 'Tell us about your trip...',
      send: 'SEND REQUEST'
    },
    testimonialsList: [
      { name: "Anna S.", text: "A hidden gem! The garden is breathtaking and the rooms are so peaceful." },
      { name: "Markos K.", text: "Authentic atmosphere. The BBQ area was perfect for our family dinners. Very close to the beach!" },
      { name: "Elena V.", text: "Lovely hosts and beautiful surroundings. The flowers everywhere make it feel like a dream." }
    ]
  },
  el: {
    nav: { home: 'Αρχική', about: 'Σχετικά', rooms: 'Διαμονή', contact: 'Επικοινωνία', book: 'Κράτηση' },
    hero: { title: 'Το Καταφύγιο', subtitle: 'των Θεών.', desc: 'Ένα πρόσφατα ανακαινισμένο, χειροποίητο ησυχαστήριο σε μια έκταση 4 στρεμμάτων, όπου κάθε γωνιά αντανακλά το πνεύμα των 12 Θεών του Ολύμπου.', explore: 'Δείτε τα Δωμάτια', loved: 'Αγαπημένο από επισκέπτες' },
    about: { 
      tag: 'Η Ιστορία μας', title: 'Μια Μυθική', highlight: 'Απόδραση.', 
      desc: 'Στην Ανάληψη Μεσσηνίας, μια ανάσα από την παραλία "Χρυσή Άμμος", η Vila Zizel προσφέρει μια μοναδική εμπειρία. Τα 4 στρέμματα γης φιλοξενούν ανεξάρτητα κτίρια με χειροποίητο σχεδιασμό εμπνευσμένο από τους 12 Θεούς του Ολύμπου.', 
      hours: 'Χρυσές Ώρες', hoursDesc: 'Απολαύστε το πρωινό σας στη βεράντα.', 
      bliss: 'Βοτανική Ευδαιμονία', blissDesc: 'Χαλαρώστε στο περιφραγμένο, φυσικό περιβάλλον μας.',
      hostTitle: 'Γνωρίστε τον οικοδεσπότη, τον Herman',
      hostDesc: 'Ένας Superhost με 6 χρόνια εμπειρίας, ο Herman είναι χτίστης και αγρότης γεννημένος τη δεκαετία του \'70. Η τέχνη του είναι εμφανής σε κάθε χειροποίητη λεπτομέρεια της βίλας.',
      hostExtra: 'Μιλάει Αγγλικά, Ελληνικά και Ιταλικά και του αρέσει να περνά χρόνο με την οικογένειά του στο κτήμα.',
      estateSize: 'Έκταση', design: 'Σχεδιασμός', theme: 'Θέμα', buildings: 'Κτίρια',
      handmade: 'Χειροποίητο Καταφύγιο', schools: 'Σχολείο στην Αλβανία', speaks: 'Μιλάει',
      renovated: 'Πλήρως Ανακαινισμένο & Χειροποίητο', standalone: 'Ανεξάρτητο Αυτόνομο Κτίριο',
      hospitality: 'Φιλοξενία', hospitalityDesc: 'Νιώστε σαν στο σπίτι σας με την προσωπική μας φροντίδα.',
      nature: 'Φύση', natureDesc: 'Περιτριγυρισμένο από ελαιώνες και λουλούδια.',
      atmosphere: 'Ατμόσφαιρα', atmosphereDesc: 'Ήρεμο περιβάλλον για την τέλεια χαλάρωση.',
      reachTag: 'Πώς να έρθετε',
      reachTitle: 'Στην καρδιά της',
      reachAir: 'Με Αεροπλάνο',
      reachAirDesc: '15 λεπτά οδικώς από το Διεθνές Αεροδρόμιο Καλαμάτας (KLX).',
      reachCar: 'Με Αυτοκίνητο',
      reachCarDesc: 'Γραφική διαδρομή 2,5 ωρών από την Αθήνα. Δωρεάν πάρκινγκ.',
      reachBeach: 'Απόσταση από Παραλία',
      reachBeachDesc: 'Μόλις 400 μέτρα με τα πόδια από την παραλία.',
      galleryTitle: 'Αιχμαλωτίστε τη',
      galleryHighlight: 'Μαγεία.',
      galleryDesc: 'Σκηνές από το χρυσό Μεσσηνιακό περιβάλλον.',
      readyDiscover: 'Έτοιμοι να ανακαλύψετε τη',
      checkRooms: 'Δείτε τα Καταλύματα',
      localGems: [
        { name: 'Παραλία Ανάληψης', dist: '2 λεπτά με τα πόδια', desc: 'Κρυστάλλινα νερά και χρυσή άμμος.' },
        { name: 'Αρχαία Μεσσήνη', dist: '30 λεπτά οδικώς', desc: 'Ένας από τους πιο εντυπωσιακούς αρχαιολογικούς χώρους.' },
        { name: 'Καταρράκτες Πολυλιμνίου', dist: '25 λεπτά οδικώς', desc: 'Ένα κρυφό φυσικό στολίδι με λίμνες.' }
      ]
    },
    rooms: { 
      tag: 'Η Διαμονή', title: 'Μυθικά', highlight: 'Καταφύγια.', zeus: 'Σουίτα Δίας', hera: 'Δωμάτιο Ήρα', poseidon: 'Poseidon Studio', inquire: 'Ερώτηση Διαθεσιμότητας', learnMore: 'Μάθετε Περισσότερα', rulesTitle: 'Κανόνες Σπιτιού', checkIn: 'Check-in: 2:00 μ.μ. - 8:00 μ.μ.', checkOut: 'Checkout πριν τις 11:00 π.μ.', maxGuests: 'Μέγιστο 3 άτομα', noPets: 'Δεν επιτρέπονται κατοικίδια', smoking: 'Το κάπνισμα επιτρέπεται', amenitiesTitle: 'Τι προσφέρει αυτό το μέρος', amenitiesSubtitle: 'Σημείωση: Ορισμένες παροχές ενδέχεται να διαφέρουν ανάλογα με το δωμάτιο.', hostGreets: 'Καλωσόρισμα από host', longTerm: 'Μακροχρόνια διαμονή', olympianExp: 'Η Ολύμπια Εμπειρία', roomAmenities: 'Παροχές Δωματίου', notIncluded: 'Δεν περιλαμβάνονται', smokeWarning: 'Αυτό το μέρος μπορεί να μην έχει ανιχνευτή καπνού ή μονοξειδίου.'
    },
    amenitiesList: {
      bathroom: 'Πιστολάκι, σαμπουάν, ζεστό νερό', laundry: 'Πλυντήριο, απλώστρα, σίδερο', essentials: 'Πετσέτες, σεντόνια, σαπούνι, χαρτί υγείας', family: 'Κούνια, κάθισμα φαγητού, προστατευτικά για μωρά', kitchen: 'Κουζίνα, ψυγείο, φούρνος μικροκυμάτων, καφετιέρα, σκεύη', outdoor: 'Αίθριο/μπαλκόνι, αυλή, ψησταριά BBQ', parking: 'Δωρεάν πάρκινγκ στις εγκαταστάσεις', notIncluded: 'Χωρίς ανιχνευτή καπνού/CO, χωρίς στεγνωτήριο, χωρίς κάμερες', bathLabel: 'Μπάνιο & Πλυντήριο', kitchenLabel: 'Κουζίνα & Φαγητό', outdoorLabel: 'Εξωτερικοί χώροι', safetyLabel: 'Ασφάλεια', safetyDesc: 'Πυροσβεστήρας, Κουτί πρώτων βοηθειών', essentialsLabel: 'Βασικά είδη', familyLabel: 'Οικογένεια'
    },
    roomsData: {
      zeus: {
        name: 'Σουίτα Δίας',
        desc: 'Μια επιβλητική παρουσία με μεγαλοπρεπή θέα.',
        longDesc: 'Η Σουίτα Δίας είναι η κορυφαία πρότασή μας, με χειροποίητα ξύλινα έπιπλα και ιδιωτική βεράντα με θέα στους βοτανικούς κήπους.',
        features: ['Ιδιωτική Βεράντα', 'Χειροποίητο Γραφείο', 'King Size Κρεβάτι']
      },
      hera: {
        name: 'Δωμάτιο Ήρα',
        desc: 'Κομψό, γαλήνιο και γεμάτο φυσικό φως.',
        longDesc: 'Με το όνομα της Βασίλισσας των Θεών, αυτό το δωμάτιο προσφέρει ένα ήρεμο περιβάλλον με φλοράλ διακόσμηση και χειροποίητα φωτιστικά.',
        features: ['Φυσικό Φως', 'Φλοράλ Διακόσμηση', 'Χειροποίητα Φωτιστικά']
      },
      poseidon: {
        name: 'Poseidon Studio',
        desc: 'Ψυχροί τόνοι και δροσιστική ηρεμία.',
        longDesc: 'Το Poseidon Studio φέρνει τη φρεσκάδα της θάλασσας στον κήπο, με υδρόβιες υφές και ευρύχωρη διαρρύθμιση.',
        features: ['Θαλασσινοί Τόνοι', 'Ευρύχωρο', 'Πρόσβαση στον Κήπο']
      }
    },
    amenities: { tag: 'Εμπειρία', title: 'Όλα για τη', highlight: 'Διαμονή σας.', desc: 'Ανεξάρτητα κτίρια, πάρκινγκ, και σύντομα BBQ και παιδική χαρά.', estate: '4 Στρέμματα', estateDesc: 'Τεράστια βοτανική έκταση.', secure: 'Περιφραγμένο', secureDesc: 'Ασφαλές και φωτισμένο τη νύχτα.', privacy: 'Ανεξάρτητο', privacyDesc: 'Απόλυτη ιδιωτικότητα.', soon: 'Σύντομα BBQ', soonDesc: 'BBQ & Παιδική χαρά.' },
    booking: { tag: 'Κράτηση', title: 'Ζητήστε το', highlight: 'Καταφύγιό σας.', success: 'Ευχαριστούμε! Το αίτημά σας ελήφθη.' },
    testimonials: { tag: 'Λόγια Επισκεπτών', title: 'Εμπειρίες', highlight: 'Επισκεπτών.' },
    weather: { title: 'Καιρός στην Ανάληψη', humidity: 'Υγρασία', wind: 'Άνεμος' },
    explore: { tag: 'Το Περιβάλλον', title: 'Πέρα από τους', highlight: 'Τοίχους του Κήπου.', desc: 'Η Ανάληψη φιλοξενεί τη Χρυσή Άμμο, μια παραλία απίστευτης ομορφιάς.' },
    contact: { tag: 'Επικοινωνία', title: 'Επικοινωνήστε', highlight: 'Μαζί μας.', desc: 'Έχετε ερωτήσεις; Είμαστε εδώ για να σας βοηθήσουμε.' },
    home: {
      botanicalGrace: 'Βοτανική Χάρη.',
      rating: 'Βαθμολογία',
      reviews: 'Κριτικές',
      themeLink: 'Μάθετε για το θέμα των 12 Θεών',
      heaven: 'Ένας παράδεισος για νέους θεούς και παλιούς φίλους.',
      exploreSuites: 'Εξερευνήστε τις Σουίτες',
      showAll: 'Δείτε όλες τις λεπτομέρειες',
      guestJourneys: 'Εμπειρίες Επισκεπτών.',
      mythosBegins: 'Ο μύθος σας ξεκινά εδώ.',
      secureStay: 'Εξασφαλίστε τη Διαμονή σας',
      glow: 'Ακολουθήστε τη Λάμψη'
    },
    footer: {
      desc: 'Ένα μεσογειακό καταφύγιο στην καρδιά της Μεσσηνίας. Ζήστε την αυθεντική ελληνική φιλοξενία σε έναν βοτανικό παράδεισο.',
      menu: 'ΜΕΝΟΥ',
      stay: 'ΔΙΑΜΟΝΗ',
      contact: 'ΕΠΙΚΟΙΝΩΝΙΑ',
      rights: 'Με επιφύλαξη παντός δικαιώματος.',
      madeWith: 'Φτιαγμένο με'
    },
    contactForm: {
      direct: 'Άμεση Επικοινωνία',
      phone: 'Τηλέφωνο',
      email: 'Email',
      location: 'Η Τοποθεσία μας',
      checkIn: 'Άφιξη',
      checkOut: 'Αναχώρηση',
      guests: 'Επισκέπτες',
      name: 'Ονοματεπώνυμο',
      emailLabel: 'Διεύθυνση Email',
      message: 'Μήνυμα (Προαιρετικό)',
      placeholderName: 'Γιάννης Παπαδόπουλος',
      placeholderEmail: 'giannis@example.com',
      placeholderMessage: 'Πείτε μας για το ταξίδι σας...',
      send: 'ΑΠΟΣΤΟΛΗ ΑΙΤΗΜΑΤΟΣ'
    },
    testimonialsList: [
      { name: "Άννα Σ.", text: "Ένα κρυφό διαμάντι! Ο κήπος είναι μαγευτικός και τα δωμάτια τόσο ήσυχα." },
      { name: "Μάρκος Κ.", text: "Αυθεντική ατμόσφαιρα. Ο χώρος του BBQ ήταν τέλειος για τα οικογενειακά μας δείπνα. Πολύ κοντά στην παραλία!" },
      { name: "Έλενα Β.", text: "Υπέροχοι οικοδεσπότες και πανέμορφο περιβάλλον. Τα λουλούδια παντού σε κάνουν να νιώθεις σαν σε όνειρο." }
    ]
  },
  it: {
    nav: { home: 'Home', about: 'Chi Siamo', rooms: 'Alloggi', contact: 'Contatti', book: 'Prenota' },
    hero: { title: 'Il Santuario', subtitle: 'degli Dei.', desc: 'Un rifugio recentemente rinnovato immerso in 4.000mq di giardini, dove ogni angolo riflette lo spirito dei 12 Dei dell\'Olimpo.', explore: 'Esplora Camere', loved: 'Amato dagli ospiti' },
    about: { 
      tag: 'La Nostra Storia', title: 'Fuga', highlight: 'Mitica.', 
      desc: 'Situata ad Analipsi, in Messenia, a un soffio dalla spiaggia "Chrysi Ammos", Vila Zizel offre un\'esperienza unica con design artigianale.',
      hostTitle: 'Incontra il tuo host, Herman',
      hostDesc: 'Superhost con 6 anni di esperienza, Herman è un costruttore e agricoltore nato negli anni \'70. La sua abilità è visibile in ogni dettaglio.',
      hostExtra: 'Parla inglese, greco e italiano, e ama passare il tempo con la sua famiglia nella tenuta.',
      estateSize: 'Superficie', design: 'Design', theme: 'Tema', buildings: 'Edifici',
      handmade: 'Santuario Artigianale', schools: 'Scuola in Albania', speaks: 'Parla',
      renovated: 'Completamente Rinnovato e Artigianale', standalone: 'Edificio Indipendente Autonomo',
      hospitality: 'Ospitalità', hospitalityDesc: 'Sentiti come a casa con la nostra cura personale.',
      nature: 'Natura', natureDesc: 'Circondato da antichi uliveti e giardini fioriti.',
      atmosphere: 'Atmosfera', atmosphereDesc: 'Un santuario tranquillo progettato per il tuo profondo relax.',
      reachTag: 'Come raggiungerci',
      reachTitle: 'Nel cuore della',
      reachAir: 'In Aereo',
      reachAirDesc: '15 minuti in auto dall\'aeroporto di Kalamata (KLX).',
      reachCar: 'In Auto',
      reachCarDesc: '2,5 ore di auto da Atene. Parcheggio privato gratuito.',
      reachBeach: 'Accesso Spiaggia',
      reachBeachDesc: '400m a piedi dalla spiaggia di Analipsi.',
      galleryTitle: 'Cattura la',
      galleryHighlight: 'Magia.',
      galleryDesc: 'Scene dai dintorni dorati della Messenia.',
      readyDiscover: 'Pronto a scoprire la',
      checkRooms: 'Vedi Alloggi',
      localGems: [
        { name: 'Spiaggia Analipsi', dist: '2 min a piedi', desc: 'Acque cristalline e sabbia dorata a pochi passi.' },
        { name: 'Antica Messene', dist: '30 min in auto', desc: 'Uno dei siti archeologici meglio conservati della Grecia.' },
        { name: 'Cascate Polylimnio', dist: '25 min in auto', desc: 'Un gioiello naturale nascosto con laghi e cascate.' }
      ]
    },
    rooms: { 
      tag: 'Soggiorno', title: 'Rifugi', highlight: 'Mitici.', zeus: 'Suite Zeus', hera: 'Camera Hera', poseidon: 'Studio Poseidon', inquire: 'Disponibilità', learnMore: 'Scopri di Più', rulesTitle: 'Regole della Casa', checkIn: 'Check-in: 14:00 - 20:00', checkOut: 'Checkout entro le 11:00', maxGuests: 'Max 3 ospiti', noPets: 'No animali', smoking: 'Fumo permesso', amenitiesTitle: 'Cosa offre questo posto', amenitiesSubtitle: 'Nota: alcuni servizi variano in base alla camera.', hostGreets: 'L\'host ti accoglie', longTerm: 'Soggiorni lunghi ammessi', olympianExp: 'L\'Esperienza Olimpica', roomAmenities: 'Servizi Camera', notIncluded: 'Non Incluso', smokeWarning: 'Questo posto potrebbe non avere rilevatori di fumo/monossido.'
    },
    amenitiesList: { bathroom: 'Asciugacapelli, shampoo, acqua calda', laundry: 'Lavatrice, stendino, ferro', essentials: 'Asciugamani, lenzuola, sapone', family: 'Culla, seggiolone, cancelli di sicurezza', kitchen: 'Cucina, frigo, microonde, caffè', outdoor: 'Patio/balcone, cortile, BBQ', parking: 'Parcheggio gratuito', notIncluded: 'Nessun rilevatore, no asciugatrice, no telecamere', bathLabel: 'Bagno e Lavanderia', kitchenLabel: 'Cucina e Pranzo', outdoorLabel: 'Esterni e Caratteristiche', safetyLabel: 'Sicurezza', safetyDesc: 'Estintore, Kit primo soccorso', essentialsLabel: 'Essenziali', familyLabel: 'Famiglia' },
    roomsData: {
      zeus: {
        name: 'Suite Zeus',
        desc: 'Una presenza potente con viste maestose.',
        longDesc: 'La Suite Zeus è la nostra offerta più esclusiva, con mobili in legno fatti a mano e una terrazza privata.',
        features: ['Terrazza Privata', 'Scrivania Artigianale', 'Letto King Size']
      },
      hera: {
        name: 'Camera Hera',
        desc: 'Elegante, tranquilla e piena di luce naturale.',
        longDesc: 'Chiamata come la Regina degli Dei, questa camera offre un ambiente sereno con decorazioni floreali.',
        features: ['Luce Naturale', 'Decoro Floreale', 'Illuminazione Artigianale']
      },
      poseidon: {
        name: 'Studio Poseidon',
        desc: 'Toni freddi e rinfrescante tranquillità.',
        longDesc: 'Il nostro Poseidon Studio porta la freschezza del mare in giardino, con texture ispirate all\'acqua.',
        features: ['Toni Marini', 'Layout Spazioso', 'Accesso al Giardino']
      }
    },
    amenities: { tag: 'Esperienza', title: 'Tutto per il', highlight: 'Tuo Soggiorno.', desc: 'Edifici indipendenti, parcheggio, e presto area BBQ e parco giochi.', estate: '4.000 m²', estateDesc: 'Vasta proprietà botanica.', secure: 'Recintato/Illuminato', secureDesc: 'Sicuro e luminoso la notte.', privacy: 'Indipendente', privacyDesc: 'Totale privacy per gli dei.', soon: 'Presto BBQ', soonDesc: 'Area BBQ e Parco giochi.' },
    booking: { tag: 'Prenotazione', title: 'Richiedi il', highlight: 'Santuario.', success: 'Grazie! La tua richiesta è stata ricevuta.' },
    testimonials: { tag: 'Recensioni', title: 'Esperienze', highlight: 'degli Ospiti.' },
    weather: { title: 'Meteo Analipsi', humidity: 'Umidità', wind: 'Vento' },
    explore: { tag: 'I Dintorni', title: 'Oltre il', highlight: 'Giardino.', desc: 'Analipsi ospita "Chrysi Ammos", una spiaggia di straordinaria bellezza naturale.' },
    contact: { tag: 'Contatti', title: 'Contattaci', highlight: 'Ora.', desc: 'Hai domande? Siamo qui per aiutarti.' },
    home: {
      botanicalGrace: 'Grazia Botanica.',
      rating: 'Valutazione Ospiti',
      reviews: 'Recensioni',
      themeLink: 'Scopri il nostro tema dei 12 Dei',
      heaven: 'Un paradiso per giovani dei e vecchi amici.',
      exploreSuites: 'Esplora le Suite',
      showAll: 'Visualizza Dettagli',
      guestJourneys: 'I Viaggi degli Ospiti.',
      mythosBegins: 'Il tuo Mito inizia qui.',
      secureStay: 'Prenota il tuo Soggiorno',
      glow: 'Segui la Luce'
    },
    footer: {
      desc: 'Un rifugio mediterraneo nel cuore della Messenia. Vivi l\'autentica ospitalità greca in un paradiso botanico.',
      menu: 'MENU',
      stay: 'SOGGIORNO',
      contact: 'CONTATTI',
      rights: 'Tutti i diritti riservati.',
      madeWith: 'Creato con'
    },
    contactForm: {
      direct: 'Contatto Diretto',
      phone: 'Telefono',
      email: 'Email',
      location: 'La nostra Posizione',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Ospiti',
      name: 'Nome Completo',
      emailLabel: 'Indirizzo Email',
      message: 'Messaggio (Opzionale)',
      placeholderName: 'Mario Rossi',
      placeholderEmail: 'mario@example.com',
      placeholderMessage: 'Raccontaci del tuo viaggio...',
      send: 'INVIA RICHIESTA'
    },
    testimonialsList: [
      { name: "Anna S.", text: "Un tesoro nascosto! Il giardino è mozzafiato e le camere sono così tranquille." },
      { name: "Markos K.", text: "Atmosfera autentica. L'area BBQ era perfetta per le nostre cene in famiglia. Molto vicino alla spiaggia!" },
      { name: "Elena V.", text: "Host adorabili e dintorni bellissimi. I fiori ovunque lo fanno sembrare un sogno." }
    ]
  },
  de: {
    nav: { home: 'Start', about: 'Über uns', rooms: 'Unterkunft', contact: 'Kontakt', book: 'Buchen' },
    hero: { title: 'Das Refugium', subtitle: 'der Götter.', desc: 'Ein handgefertigter Rückzugsort in einem 4.000 m² großen Garten, inspiriert von den 12 Göttern des Olymp.', explore: 'Zimmer ansehen', loved: 'Von Gästen geliebt' },
    about: { 
      tag: 'Geschichte', title: 'Mythologische', highlight: 'Flucht.',
      desc: 'In Analipsi, nahe dem Strand "Chrysi Ammos", bietet die Vila Zizel ein einzigartiges Erlebnis mit handgefertigtem Design.',
      hostTitle: 'Dein Gastgeber Herman',
      hostDesc: 'Superhost mit 6 Jahren Erfahrung, Erbauer und Landwirt. Seine Handwerkskunst zeigt sich in jedem Detail.',
      hostExtra: 'Er spricht Englisch, Griechisch und Italienisch und liebt es, Zeit mit seiner Familie auf dem Anwesen zu verbringen.',
      estateSize: 'Grundstück', design: 'Design', theme: 'Thema', buildings: 'Gebäude',
      handmade: 'Handgefertigtes Refugium', schools: 'Schule in Albanien', speaks: 'Sprachen',
      renovated: 'Komplett renoviert & handgefertigt', standalone: 'Unabhängiges einzelstehendes Gebäude',
      hospitality: 'Gastfreundschaft', hospitalityDesc: 'Fühlen Sie sich mit unserer persönlichen Betreuung wie zu Hause.',
      nature: 'Natur', natureDesc: 'Umgeben von alten Olivenhainen und blühenden Gärten.',
      atmosphere: 'Atmosphäre', atmosphereDesc: 'Ein friedliches Refugium, das für Ihre tiefste Entspannung entworfen wurde.',
      reachTag: 'So erreichen Sie uns',
      reachTitle: 'Im Herzen von',
      reachAir: 'Mit dem Flugzeug',
      reachAirDesc: '15 Minuten Fahrt vom Flughafen Kalamata (KLX).',
      reachCar: 'Mit dem Auto',
      reachCarDesc: 'Malerische 2,5 Stunden Fahrt von Athen. Kostenloser Privatparkplatz vor Ort.',
      reachBeach: 'Strandzugang',
      reachBeachDesc: 'Ein flacher 400 m langer Spaziergang zum Sandstrand von Analipsi.',
      galleryTitle: 'Fangen Sie die',
      galleryHighlight: 'Magie ein.',
      galleryDesc: 'Szenen aus der goldenen messinischen Umgebung.',
      readyDiscover: 'Bereit zu entdecken',
      checkRooms: 'Unterkünfte prüfen',
      localGems: [
        { name: 'Analipsi Strand', dist: '2 Min. zu Fuß', desc: 'Kristallκlares Wasser und goldener Sand, nur wenige Schritte von Ihrer Tür entfernt.' },
        { name: 'Altes Messene', dist: '30 Min. Fahrt', desc: 'Eine der am besten erhaltenen archäologischen Stätten Griechenlands.' },
        { name: 'Polylimnio Wasserfälle', dist: '25 Min. Fahrt', desc: 'Ein verstecktes natürliches Netzwerk aus vielen Seen und Wasserfällen.' }
      ]
    },
    rooms: { 
      tag: 'Aufenthalt', title: 'Göttliche', highlight: 'Zimmer.', zeus: 'Zeus Suite', hera: 'Hera Zimmer', poseidon: 'Poseidon Studio', inquire: 'Verfügbarkeit', learnMore: 'Mehr erfahren', rulesTitle: 'Hausregeln', checkIn: 'Check-in: 14:00 - 20:00', checkOut: 'Check-out bis 11:00', maxGuests: 'Max. 3 Gäste', noPets: 'Keine Haustiere', smoking: 'Rauchen erlaubt', amenitiesTitle: 'Was diese Unterkunft bietet', amenitiesSubtitle: 'Hinweis: Ausstattung kann je nach Zimmer variieren.', hostGreets: 'Gastgeber begrüßt Sie', longTerm: 'Langzeitaufenthalte erlaubt', olympianExp: 'Das Olympische Erlebnis', roomAmenities: 'Zimmerausstattung', notIncluded: 'Nicht enthalten', smokeWarning: 'Kein Rauch- oder Kohlenmonoxidmelder vorhanden.'
    },
    amenitiesList: { bathroom: 'Föhn, Shampoo, Warmwasser', laundry: 'Waschmaschine, Wäscheständer, Bügeleisen', essentials: 'Handtücher, Bettwäsche, Seife', family: 'Babybett, Hochstuhl, Schutzgitter', kitchen: 'Herd, Kühlschrank, Mikrowelle, Kaffee', outdoor: 'Patio, Garten, BBQ', parking: 'Gratis Parkplatz', notIncluded: 'Kein Melder, kein Trockner, keine Kameras', bathLabel: 'Bad & Wäsche', kitchenLabel: 'Küche & Essen', outdoorLabel: 'Außenbereich', safetyLabel: 'Sicherheit', safetyDesc: 'Feuerlöscher, Erste-Hilfe-Set', essentialsLabel: 'Grundlagen', familyLabel: 'Familie' },
    roomsData: {
      zeus: {
        name: 'Zeus Suite',
        desc: 'Eine kraftvolle Präsenz mit majestätischer Aussicht.',
        longDesc: 'Die Zeus Suite ist unser Premium-Angebot mit handgefertigten Holzmöbeln und einer privaten Terrasse.',
        features: ['Private Terrasse', 'Schreibtisch', 'Kingsize-Bett']
      },
      hera: {
        name: 'Hera Zimmer',
        desc: 'Elegant, friedlich und voller natürlichem Licht.',
        longDesc: 'Benannt nach der Königin der Götter, bietet dieses Zimmer eine ruhige Umgebung mit floralem Dekor.',
        features: ['Natürliches Licht', 'Florales Dekor', 'Handgefertigte Leuchten']
      },
      poseidon: {
        name: 'Poseidon Studio',
        desc: 'Kühle Töne und erfrischende Ruhe.',
        longDesc: 'Unser Poseidon Studio bringt die Frische des Meeres in den Garten, mit aquatisch inspirierten Texturen.',
        features: ['Marine Töne', 'Grosses Layout', 'Gartenzugang']
      }
    },
    amenities: { tag: 'Erlebnis', title: 'Alles für den', highlight: 'Aufenthalt.', desc: 'Unabhängige Gebäude, Parkplätze und bald BBQ-Bereich und Spielplatz.', estate: '4.000 m²', estateDesc: 'Großes botanisches Anwesen.', secure: 'Zαun/Licht', secureDesc: 'Sicher und nachts beleuchtet.', privacy: 'Unabhängig', privacyDesc: 'Totale Privatsphäre.', soon: 'Bald BBQ', soonDesc: 'BBQ & Spielplatz.' },
    booking: { tag: 'Buchung', title: 'Anfrage', highlight: 'Senden.', success: 'Vielen Dank! Ihre Anfrage wurde empfangen.' },
    testimonials: { tag: 'Bewertungen', title: 'Gast', highlight: 'Erfahrungen.' },
    weather: { title: 'Wetter Analipsi', humidity: 'Feuchtigkeit', wind: 'Wind' },
    explore: { tag: 'Umgebung', title: 'Hinter dem', highlight: 'Gartentor.', desc: 'Der Strand "Chrysi Ammos" ist nur einen Steinwurf entfernt.' },
    contact: { tag: 'Kontakt', title: 'Schreiben Sie', highlight: 'Uns.', desc: 'Wir helfen Ihnen gerne.' },
    home: {
      botanicalGrace: 'Botanische Anmut.',
      rating: 'Gästebewertung',
      reviews: 'Bewertungen',
      themeLink: 'Erfahren Sie mehr über unser 12-Götter-Thema',
      heaven: 'Ein Himmel für junge Götter und alte Freunde.',
      exploreSuites: 'Suiten erkunden',
      showAll: 'Alle Details anzeigen',
      guestJourneys: 'Gästereisen.',
      mythosBegins: 'Ihr Mythos beginnt hier.',
      secureStay: 'Sichern Sie sich Ihren Aufenthalt',
      glow: 'Folgen Sie dem Glanz'
    },
    footer: {
      desc: 'Ein mediterranes Refugium im Herzen von Messenien. Erleben Sie authentische griechische Gastfreundschaft in einem botanischen Paradies.',
      menu: 'MENÜ',
      stay: 'AUFENTHALT',
      contact: 'KONTAKT',
      rights: 'Alle Rechte vorbehalten.',
      madeWith: 'Erstellt mit'
    },
    contactForm: {
      direct: 'Direkter Kontakt',
      phone: 'Telefon',
      email: 'E-Mail',
      location: 'Unser Standort',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Gäste',
      name: 'Vollständiger Name',
      emailLabel: 'E-Mail-Adresse',
      message: 'Nachricht (Optional)',
      placeholderName: 'Max Mustermann',
      placeholderEmail: 'max@example.com',
      placeholderMessage: 'Erzählen Sie uns von Ihrer Reise...',
      send: 'ANFRAGE SENDEN'
    },
    testimonialsList: [
      { name: "Anna S.", text: "Ein verstecktes Juwel! Der Garten ist atemberaubend und die Zimmer sind so friedlich." },
      { name: "Markos K.", text: "Authentische Atmosphäre. Der Grillplatz war perfekt für unsere Familienessen. Sehr nah am Strand!" },
      { name: "Elena V.", text: "Liebevolle Gastgeber und wunderschöne Umgebung. Die Blumen überall lassen es wie einen Traum wirken." }
    ]
  },
  es: {
    nav: { home: 'Inicio', about: 'Nosotros', rooms: 'Alojamiento', contact: 'Contacto', book: 'Reservar' },
    hero: { title: 'El Santuario', subtitle: 'de los Dioses.', desc: 'Un refugio artesanal renovado en una finca de 4.000m² de jardines, donde cada rincón refleja el espíritu de los 12 Dioses del Olimpo.', explore: 'Ver Habitaciones', loved: 'Amado por los huéspedes' },
    about: { 
      tag: 'Nuestra Historia', title: 'Escapada', highlight: 'Mítica.', 
      desc: 'Situada en Analipsi, Mesenia, cerca de la playa "Chrysi Ammos", Vila Zizel ofrece una experiencia única con diseño artesanal.',
      hostTitle: 'Conoce a tu anfitrión, Herman',
      hostDesc: 'Superhost con 6 años de experiencia, constructor y agricultor. Su artesanía es evidente en cada detalle.',
      hostExtra: 'Habla inglés, griego e italiano, y le encanta pasar tiempo con su familia en la finca.',
      estateSize: 'Finca', design: 'Diseño', theme: 'Tema', buildings: 'Edificios',
      handmade: 'Santuario Artesanal', schools: 'Estudió en Albania', speaks: 'Idiomas',
      renovated: 'Totalmente Renovado y Hecho a Mano', standalone: 'Edificio Independiente Autónomo',
      hospitality: 'Hospitalidad', hospitalityDesc: 'Siéntase como en casa con nuestra atención personalizada.',
      nature: 'Naturaleza', natureDesc: 'Rodeado de antiguos olivares y jardines florecientes.',
      atmosphere: 'Atmósfera', atmosphereDesc: 'Un santuario tranquilo diseñado para su descanso más profundo.',
      reachTag: 'Cómo llegar',
      reachTitle: 'En el corazón de',
      reachAir: 'Por aire',
      reachAirDesc: '15 minutos en coche desde el aeropuerto de Kalamata (KLX).',
      reachCar: 'En coche',
      reachCarDesc: 'Pintoresco viaje de 2,5 horas desde Atenas. Aparcamiento privado gratuito.',
      reachBeach: 'Acceso a la playa',
      reachBeachDesc: 'Un paseo de 400 m hasta la playa de arena de Analipsi.',
      galleryTitle: 'Captura la',
      galleryHighlight: 'Magia.',
      galleryDesc: 'Escenas de los dorados alrededores messinianos.',
      readyDiscover: 'Listo para descubrir',
      checkRooms: 'Ver Alojamientos',
      localGems: [
        { name: 'Playa de Analipsi', dist: '2 min a pie', desc: 'Aguas cristalinas y arena dorada a pocos pasos de su puerta.' },
        { name: 'Antigua Messene', dist: '30 min en coche', desc: 'Uno de los sitios arquitectológicos mejor conservados de Grecia.' },
        { name: 'Cascadas de Polylimnio', dist: '25 min en coche', desc: 'Una red natural oculta de muchos lagos y cascadas.' }
      ]
    },
    rooms: { 
      tag: 'Estancia', title: 'Refugios', highlight: 'Míticos.', zeus: 'Suite Zeus', hera: 'Habitación Hera', poseidon: 'Estudio Poseidón', inquire: 'Disponibilidad', learnMore: 'Saber Más', rulesTitle: 'Reglas de la Casa', checkIn: 'Check-in: 14:00 - 20:00', checkOut: 'Check-out antes de las 11:00', maxGuests: 'Máx. 3 personas', noPets: 'Sin mascotas', smoking: 'Se permite fumar', amenitiesTitle: 'Lo que este lugar ofrece', amenitiesSubtitle: 'Nota: algunos servicios varían según la habitación.', hostGreets: 'El anfitrión te recibe', longTerm: 'Estancias largas permitidas', olympianExp: 'La Experiencia Olímpica', roomAmenities: 'Servicios', notIncluded: 'No incluido', smokeWarning: 'Este lugar puede no tener detectores de humo/monóxido.'
    },
    amenitiesList: { bathroom: 'Secador, champú, agua caliente', laundry: 'Lavadora, tendedero, plancha', essentials: 'Toallas, sábanas, jabón', family: 'Cuna, silla alta, puertas de seguridad', kitchen: 'Cocina, frigo, microondas, cafetera', outdoor: 'Patio, patio trasero, barbacoa', parking: 'Aparcamiento gratuito', notIncluded: 'Sin detectores, sin secadora, sin cámaras', bathLabel: 'Baño y Lavandería', kitchenLabel: 'Cocina y Comedor', outdoorLabel: 'Exterior y Características', safetyLabel: 'Seguridad', safetyDesc: 'Extintor, Botiquín', essentialsLabel: 'Esenciales', familyLabel: 'Familia' },
    roomsData: {
      zeus: {
        name: 'Suite Zeus',
        desc: 'Una presencia poderosa con vistas majestuosas.',
        longDesc: 'La Suite Zeus es nuestra oferta más premium, con muebles de madera hechos a mano y terraza privada.',
        features: ['Terraza Privada', 'Escritorio Artesanal', 'Cama King Size']
      },
      hera: {
        name: 'Habitación Hera',
        desc: 'Elegante, pacífica y llena de luz natural.',
        longDesc: 'Nombrada en honor a la Reina de los Dioses, ofrece un ambiente sereno con decoración floral.',
        features: ['Luz Natural', 'Decoración Floral', 'Iluminación Artesanal']
      },
      poseidon: {
        name: 'Estudio Poseidón',
        desc: 'Tonos fríos y tranquilidad refrescante.',
        longDesc: 'Nuestro Estudio Poseidón trae la frescura del mar al jardín, con texturas de inspiración acuática.',
        features: ['Tonos Marinos', 'Espacioso', 'Acceso al Jardín']
      }
    },
    amenities: { tag: 'Experience', title: 'Todo para su', highlight: 'Estancia.', desc: 'Casas independientes, parking y próximamente barbacoa y zona infantil.', estate: '4.000 m²', estateDesc: 'Vasta propiedad botánica.', secure: 'Valla/Luz', secureDesc: 'Seguro y luminoso de noche.', privacy: 'Independiente', privacyDesc: 'Privacidad total.', soon: 'Pronto BBQ', soonDesc: 'Barbacoa y Juegos.' },
    booking: { tag: 'Reserva', title: 'Solicite su', highlight: 'Santuario.', success: '¡Gracias! Su solicitud ha sido recibida.' },
    testimonials: { tag: 'Reseñas', title: 'Esperiences', highlight: 'de Huéspedes.' },
    weather: { title: 'Clima Analipsi', humidity: 'Humedad', wind: 'Vento' },
    explore: { tag: 'Entorno', title: 'Más allá del', highlight: 'Jardín.', desc: 'La playa "Chrysi Ammos" está a un paso.' },
    contact: { tag: 'Contacto', title: 'Escríbanos', highlight: 'Ahora.', desc: 'Estamos aquí para ayudarle.' },
    home: {
      botanicalGrace: 'Gracia Botánica.',
      rating: 'Valoración',
      reviews: 'Reseñas',
      themeLink: 'Conozca nuestro tema de los 12 Dioses',
      heaven: 'Un paraíso para jóvenes dioses και viejos amigos.',
      exploreSuites: 'Explorar Suites',
      showAll: 'Ver Todos los Detalles',
      guestJourneys: 'Viajes de Huéspedes.',
      mythosBegins: 'Tu Mito comienza aquí.',
      secureStay: 'Reserva tu Estancia',
      glow: 'Sigue el Brillo'
    },
    footer: {
      desc: 'Un refugio mediterráneo en el corazón de Mesenia. Experimente la auténtica hospitalidad griega en un paraíso botánico.',
      menu: 'MENÚ',
      stay: 'ESTANCIA',
      contact: 'CONTACTO',
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con'
    },
    contactForm: {
      direct: 'Contacto Directo',
      phone: 'Teléfono',
      email: 'Email',
      location: 'Nuestra Ubicación',
      checkIn: 'Llegada',
      checkOut: 'Salida',
      guests: 'Huéspedes',
      name: 'Nombre Completo',
      emailLabel: 'Correo Electrónico',
      message: 'Mensaje (Opcional)',
      placeholderName: 'Juan Pérez',
      placeholderEmail: 'juan@example.com',
      placeholderMessage: 'Cuéntanos sobre tu viaje...',
      send: 'ENVIAR SOLICITUD'
    },
    testimonialsList: [
      { name: "Anna S.", text: "¡Una joya escondida! El jardín es impresionante y las habitaciones son muy tranquilas." },
      { name: "Markos K.", text: "Atmósfera auténtica. El área de barbacoa fue perfecta para nuestras cenas familiares. ¡Muy cerca de la playa!" },
      { name: "Elena V.", text: "Anfitriones encantadores y alrededores hermosos. Las flores por todas partes lo hacen sentir como un sueño." }
    ]
  },
  fr: {
    nav: { home: 'Accueil', about: 'À Propos', rooms: 'Hébergement', contact: 'Contact', book: 'Réserver' },
    hero: { title: 'Le Sanctuaire', subtitle: 'des Dieux.', desc: 'Une retraite artisanale rénovée sur un terrain de 4 000 m², inspirée par les 12 Dieux de l\'Olympe.', explore: 'Voir les Chambres', loved: 'Aimé par les clients' },
    about: { 
      tag: 'Notre Histoire', title: 'Évasion', highlight: 'Mythique.', 
      desc: 'Située à Analipsi, en Messénie, près de la plage "Chrysi Ammos", la Vila Zizel propose une expérience unique.',
      hostTitle: 'Rencontrez Herman, votre hôte',
      hostDesc: 'Superhost avec 6 ans d\'expérience, bâtisseur et agriculteur. Son savoir-faire est visible partout.',
      hostExtra: 'Il parle anglais, grec et italien, et adore passer du temps en famille au domaine.',
      estateSize: 'Terrain', design: 'Design', theme: 'Thème', buildings: 'Bâtiments',
      handmade: 'Sanctuaire Artisanal', schools: 'École en Albanie', speaks: 'Langues',
      renovated: 'Entièrement Rénové & Fait Main', standalone: 'Bâtiment Indépendant Autonome',
      hospitality: 'Hospitalité', hospitalityDesc: 'Sentez-vous comme chez vous grâce à notre attention personnalisée.',
      nature: 'Nature', natureDesc: 'Entouré de vieux oliviers et de jardins fleuris.',
      atmosphere: 'Atmosphère', atmosphereDesc: 'Un sanctuaire paisible conçu pour votre relaxation la plus profonde.',
      reachTag: 'Comment nous rejoindre',
      reachTitle: 'Au cœur de la',
      reachAir: 'Par avion',
      reachAirDesc: '15 minutes en voiture de l\'aéroport de Kalamata (KLX).',
      reachCar: 'En voiture',
      reachCarDesc: '2,5 heures de route pittoresque depuis Athènes. Parking privé gratuit.',
      reachBeach: 'Accès à la plage',
      reachBeachDesc: 'Une promenade plate de 400 m vers la plage de sable d\'Analipsi.',
      galleryTitle: 'Capturez la',
      galleryHighlight: 'Magie.',
      galleryDesc: 'Scènes des environs dorés de Messénie.',
      readyDiscover: 'Prêt à découvrir la',
      checkRooms: 'Voir les Hébergements',
      localGems: [
        { name: 'Plage d\'Analipsi', dist: '2 min à pied', desc: 'Eaux cristallines et sable doré à quelques pas de votre porte.' },
        { name: 'Messène Antique', dist: '30 min en voiture', desc: 'L\'un des sites archéologiques les mieux conservés de Grèce.' },
        { name: 'Cascades de Polylimnio', dist: '25 min en voiture', desc: 'Un réseau naturel caché de nombreux lacs et cascades.' }
      ]
    },
    rooms: { 
      tag: 'Le Séjour', title: 'Havres', highlight: 'Mythiques.', zeus: 'Suite Zeus', hera: 'Chambre Héra', poseidon: 'Studio Poséidon', inquire: 'Disponibilité', learnMore: 'En Savoir Plus', rulesTitle: 'Règles de la Maison', checkIn: 'Check-in : 14h - 20h', checkOut: 'Checkout avant 11h', maxGuests: '3 pers. max', noPets: 'Pas d\'animaux', smoking: 'Fumeurs autorisés', amenitiesTitle: 'Ce que ce lieu propose', amenitiesSubtitle: 'Note : certains équipements varient selon la chambre.', hostGreets: 'L\'hôte vous accueille', longTerm: 'Longs séjours autorisés', olympianExp: 'L\'Expérience Olympienne', roomAmenities: 'Équipements', notIncluded: 'Non inclus', smokeWarning: 'Pas de détecteur de fumée/monoxyde.'
    },
    amenitiesList: { bathroom: 'Sèche-cheveux, shampoing, eau chaude', laundry: 'Lave-linge, étendoir, fer', essentials: 'Serviettes, draps, savon', family: 'Lit bébé, chaise haute, barrières', kitchen: 'Cuisine, frigo, micro-ondes, café', outdoor: 'Patio, arrière-cour, barbecue', parking: 'Parking gratuit', notIncluded: 'Pas de détecteur, pas de séchoir, pas de caméras', bathLabel: 'Salle de bain & Laundry', kitchenLabel: 'Cuisine & Repas', outdoorLabel: 'Extérieur', safetyLabel: 'Sécurité', safetyDesc: 'Extincteur, Premier secours', essentialsLabel: 'Essentiels', familyLabel: 'Famille' },
    roomsData: {
      zeus: {
        name: 'Suite Zeus',
        desc: 'Une présence puissante avec des vues majestueuses.',
        longDesc: 'La Suite Zeus est notre offre la plus haut de gamme, avec des meubles en bois faits à la main.',
        features: ['Terrasse Privée', 'Bureau Artisanal', 'Lit King Size']
      },
      hera: {
        name: 'Chambre Héra',
        desc: 'Élégante, paisible et baignée de lumière naturelle.',
        longDesc: 'Nommée d\'après la Reine des Dieux, cette chambre offre un environnement serein.',
        features: ['Lumière Naturelle', 'Décor Floral', 'Luminaires Artisanaux']
      },
      poseidon: {
        name: 'Studio Poséidon',
        desc: 'Tons frais et tranquillité rafraîchissante.',
        longDesc: 'Notre Studio Poséidon apporte la fraîcheur de la mer au jardin, avec des textures marines.',
        features: ['Tons Marins', 'Spacieux', 'Accès au Jardin']
      }
    },
    amenities: { tag: 'Experience', title: 'Tout pour', highlight: 'Votre Séjour.', desc: 'Bâtiments indépendants, parking et bientôt barbecue et jeux pour enfants.', estate: '4 000 m²', estateDesc: 'Vaste terrain botanique.', secure: 'Clôturé/Éclairé', secureDesc: 'Sûr et éclairé la nuit.', privacy: 'Indépendant', privacyDesc: 'Intimité totale.', soon: 'Bientôt BBQ', soonDesc: 'BBQ & Jeux.' },
    booking: { tag: 'Réservation', title: 'Demandez votre', highlight: 'Sanctuaire.', success: 'Merci ! Votre demande a été reçue.' },
    testimonials: { tag: 'Avis', title: 'Expériences', highlight: 'des Clients.' },
    weather: { title: 'Météo Analipsi', humidity: 'Humidité', wind: 'Vent' },
    explore: { tag: 'Environs', title: 'Au-delà du', highlight: 'Gardin.', desc: 'Plage "Chrysi Ammos" à quelques pas.' },
    contact: { tag: 'Contact', title: 'Contactez-nous', highlight: 'Maintenant.', desc: 'Nous sommes là pour vous aider.' },
    home: {
      botanicalGrace: 'Grâce Botanique.',
      rating: 'Note des Clients',
      reviews: 'Avis',
      themeLink: 'En savoir plus sur notre thème des 12 Dieux',
      heaven: 'Un paradis pour les jeunes dieux et les vieux amis.',
      exploreSuites: 'Explorer les Suites',
      showAll: 'Voir Tous les Détails',
      guestJourneys: 'Voyages des Clients.',
      mythosBegins: 'Votre Mythe commence ici.',
      secureStay: 'Réservez votre Séjour',
      glow: 'Suivez l\'Éclat'
    },
    footer: {
      desc: 'Un sanctuaire méditerranéen au cœur de la Messénie. Découvrez l\'hospitalité grecque authentique dans un paradis botanique.',
      menu: 'MENU',
      stay: 'SÉJOUR',
      contact: 'CONTACT',
      rights: 'Tous droits réservés.',
      madeWith: 'Fait avec'
    },
    contactForm: {
      direct: 'Contact Direct',
      phone: 'Téléphone',
      email: 'E-mail',
      location: 'Notre Emplacement',
      checkIn: 'Arrivée',
      checkOut: 'Départ',
      guests: 'Voyageurs',
      name: 'Nom Complet',
      emailLabel: 'Adresse E-mail',
      message: 'Message (Optionnel)',
      placeholderName: 'Jean Dupont',
      placeholderEmail: 'jean@example.com',
      placeholderMessage: 'Parlez-nous de votre voyage...',
      send: 'ENVOYER LA DEMANDE'
    },
    testimonialsList: [
      { name: "Anna S.", text: "Un bijou caché ! Le jardin est époustouflant et les chambres sont si paisibles." },
      { name: "Markos K.", text: "Atmosphère authentique. L'espace barbecue était parfait pour nos dîners en famille. Très proche de la plage !" },
      { name: "Elena V.", text: "Des hôtes adorables et un environnement magnifique. Les fleurs partout donnent l'impression d'être dans un rêve." }
    ]
  }
};

interface AppContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: any;
  weather: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState('en');
  const [weather, setWeather] = useState<any>(null);

  const t = translations[lang] || translations.en;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.008&longitude=21.969&current_weather=true&relative_humidity_2m=true');
        const data = await res.json();
        setWeather(data);
      } catch (e) {
        console.error("Weather fetch failed", e);
      }
    };
    fetchWeather();
  }, []);

  return (
    <AppContext.Provider value={{ lang, setLang, t, weather }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
