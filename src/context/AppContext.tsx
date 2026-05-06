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
      hera: 'Hera Room', aphrodite: 'Aphrodite Room', poseidonHera: 'Poseidon-Hera Unit',
      zeus: 'Zeus Apartment', athina: 'Athina Room', artemis: 'Artemis Room',
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
      aphrodite: {
        name: 'Aphrodite Room',
        desc: 'A complete unit with a king size bed and a small terrace.',
        longDesc: 'In our apartment complex Vila Zizel, the Aphrodite apartment contains: a bedroom with a king size bed and TV, a bathroom, a kitchen-dining room that has 2 single beds and finally a small terrace. It has internet and air conditioning.',
        features: ['4 Guests', '1 Bedroom', '3 Beds', 'Full Kitchen']
      },
      hera: {
        name: 'Hera Room',
        desc: 'Wonderful view of nature with a private kitchen and washing machine.',
        longDesc: 'This place with a wonderful view of nature in Analipsi, Messinia, contains a kitchen with all the essentials, a bedroom with air conditioning and a TV, also a single bed, a bathroom that has a private washing machine and outside a wonderful table to enjoy nature.',
        features: ['3 Guests', '1 Bedroom', '2 Beds', 'Private Kitchen']
      },
      poseidonHera: {
        name: 'Poseidon-Hera Unit',
        desc: 'A flexible special space that can be separated or combined, accommodating up to 6 guests.',
        longDesc: 'This apartment is a special space because it can be separated or combined together. Connected by a internal door, you can enjoy either one or both together. It features 2 bedrooms (each with double bed & TV), 2 fully equipped kitchens, 2 dining areas, and 2 bathrooms (one with a washing machine), plus additional single and drawer beds.',
        features: ['6 Guests', '2 Bedrooms', '4 Beds', '2 Baths']
      },
      zeus: {
        name: 'Zeus Apartment',
        desc: 'Entire condo in Analipsi with a large terrace and incredible views.',
        longDesc: 'In the Vila Zizel rental complex, the apartment of Zeus contains: a fully equipped kitchen, dining room, comfortable large built-in living room with TV and air conditioning, 2 bedrooms (the first has a large double built-in bed with TV and air conditioning and the second has 2 single beds with air conditioning), bathroom with full toiletries, drying rack and finally the large terrace with the incredible view.',
        features: ['5 Guests', '2 Bedrooms', '4 Beds', '1 Bath']
      },
      athina: {
        name: 'Athina Room',
        desc: 'A cozy retreat with a super double built-in bed and nature views.',
        longDesc: 'In our apartment complex Vila Zizel, the apartment Athina has: 1 super double built-in comfortable bed that is connected to the dining room and kitchen, bathroom. There is also an outdoor area where you can relax in nature. Finally, there is wifi and also air conditioning.',
        features: ['4 Guests', '1 Bedroom', '2 Beds', '1 Bath']
      },
      artemis: {
        name: 'Artemis Room',
        desc: 'A king-size haven in Messinia surrounded by nature.',
        longDesc: 'In our rental complex Vila Zizel, in the Artemis apartment there is a king size comfortable bed, a kitchen that is connected to the bedroom and contains all the necessities and a bathroom. Outside you can enjoy nature.',
        features: ['3 Guests', '1 Bedroom', '2 Beds', '1 Bath']
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
      mythosBegins: 'Your Mythos begins here.',
      secureStay: 'Secure Your Stay',
      glow: 'Follow the Glow',
      heroBadge: 'Analipsi · Messenia · Greece',
      scrollDiscover: 'Scroll to discover',
      statsGuests: 'Happy Guests',
      statsAward: 'Superhost',
      statsYears: 'Years of Excellence',
      featuresTitle: 'Why Vila Zizel?',
      featureNature: 'Botanical Gardens',
      featureNatureDesc: '4,000 m² of lush, blooming grounds surrounding you.',
      featureHandmade: 'Handmade Design',
      featureHandmadeDesc: 'Every detail crafted by hand, inspired by the gods.',
      featureSea: 'Steps from the Sea',
      featureSeaDesc: 'A 2-minute walk to the golden sands of Analipsi.',
      roomsTagline: 'Each suite is named after a god of Olympus.',
      ctaTitle: 'Your Legend Awaits.',
      ctaDesc: 'Reserve your place among the gods. Limited availability.',
      ctaBook: 'Reserve Now',
      socialTitle: 'Follow the Sanctuary'
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
      { name: "Sharon", text: "Great place to stay. Beach bar and restaurant very friendly and well worth a visit. Wouldn't hesitate to return." },
      { name: "Maria", text: "Spacious studio with all comforts. Beautiful shared garden, ample parking, and even cookies! Well-functioning AC and fridge. Everything was super!" },
      { name: "Christine", text: "Spotlessly clean and many things seemed brand new. The bedroom felt separated from the kitchen area because of the layout, and it felt very spacious." },
      { name: "Amanda", text: "Lovely week staying here. Beautifully clean and modern in a perfect location. The apartment had everything we needed for self-catering." },
      { name: "Tanja", text: "Very friendly hosts. They always responded immediately and were very helpful! The apartment is not far from the beach and equipped with everything you need." }
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
      tag: 'Η Διαμονή', title: 'Μυθικά', highlight: 'Καταφύγια.', hera: 'Δωμάτιο Ήρα', aphrodite: 'Δωμάτιο Αφροδίτη', poseidonHera: 'Μονάδα Ποσειδώνας-Ήρα', zeus: 'Διαμέρισμα Ζεύς', athina: 'Δωμάτιο Αθηνά', artemis: 'Δωμάτιο Άρτεμις', inquire: 'Ερώτηση Διαθεσιμότητας', learnMore: 'Μάθετε Περισσότερα', rulesTitle: 'Κανόνες Σπιτιού', checkIn: 'Check-in: 2:00 μ.μ. - 8:00 μ.μ.', checkOut: 'Checkout πριν τις 11:00 π.μ.', maxGuests: 'Μέγιστο 3 άτομα', noPets: 'Δεν επιτρέπονται κατοικίδια', smoking: 'Το κάπνισμα επιτρέπεται', amenitiesTitle: 'Τι προσφέρει αυτό το μέρος', amenitiesSubtitle: 'Σημείωση: Ορισμένες παροχές ενδέχεται να διαφέρουν ανάλογα με το δωμάτιο.', hostGreets: 'Καλωσόρισμα από host', longTerm: 'Μακροχρόνια διαμονή', olympianExp: 'Η Ολύμπια Εμπειρία', roomAmenities: 'Παροχές Δωματίου', notIncluded: 'Δεν περιλαμβάνονται', smokeWarning: 'Αυτό το μέρος μπορεί να μην έχει ανιχνευτή καπνού ή μονοξειδίου.'
    },
    amenitiesList: {
      bathroom: 'Πιστολάκι, σαμπουάν, ζεστό νερό', laundry: 'Πλυντήριο, απλώστρα, σίδερο', essentials: 'Πετσέτες, σεντόνια, σαπούνι, χαρτί υγείας', family: 'Κούνια, κάθισμα φαγητού, προστατευτικά για μωρά', kitchen: 'Κουζίνα, ψυγείο, φούρνος μικροκυμάτων, καφετιέρα, σκεύη', outdoor: 'Αίθριο/μπαλκόνι, αυλή, ψησταριά BBQ', parking: 'Δωρεάν πάρκινγκ στις εγκαταστάσεις', notIncluded: 'Χωρίς ανιχνευτή καπνού/CO, χωρίς στεγνωτήριο, χωρίς κάμερες', bathLabel: 'Μπάνιο & Πλυντήριο', kitchenLabel: 'Κουζίνα & Φαγητό', outdoorLabel: 'Εξωτερικοί χώροι', safetyLabel: 'Ασφάλεια', safetyDesc: 'Πυροσβεστήρας, Κουτί πρώτων βοηθειών', essentialsLabel: 'Βασικά είδη', familyLabel: 'Οικογένεια'
    },
    roomsData: {
      aphrodite: {
        name: 'Δωμάτιο Αφροδίτη',
        desc: 'Μια πλήρης μονάδα με king size κρεβάτι και μικρή βεράντα.',
        longDesc: 'Στο συγκρότημα διαμερισμάτων Vila Zizel, το διαμέρισμα Αφροδίτη περιλαμβάνει: ένα υπνοδωμάτιο με king size κρεβάτι και τηλεόραση, ένα μπάνιο, μια κουζίνα-τραπεζαρία που διαθέτει 2 μονά κρεβάτια και τέλος μια μικρή βεράντα. Διαθέτει internet και κλιματισμό.',
        features: ['4 Επισκέπτες', '1 Υπνοδωμάτιο', '3 Κρεβάτια', 'Πλήρης Κουζίνα']
      },
      hera: {
        name: 'Δωμάτιο Ήρα',
        desc: 'Υπέροχη θέα στη φύση με ιδιωτική κουζίνα και πλυντήριο.',
        longDesc: 'Αυτό το κατάλυμα με υπέροχη θέα στη φύση στην Ανάληψη Μεσσηνίας, περιλαμβάνει μια κουζίνα με όλα τα απαραίτητα, ένα υπνοδωμάτιο με κλιματισμό και τηλεόραση, επίσης ένα μονό κρεβάτι, ένα μπάνιο που διαθέτει ιδιωτικό πλυντήριο και έξω ένα υπέροχο τραπέζι για να απολαύσετε τη φύση.',
        features: ['3 Επισκέπτες', '1 Υπνοδωμάτιο', '2 Κρεβάτια', 'Ιδιωτική Κουζίνα']
      },
      poseidonHera: {
        name: 'Μονάδα Ποσειδώνας-Ήρα',
        desc: 'Ένας ιδιαίτερος χώρος που μπορεί να χωριστεί ή να συνδυαστεί, φιλοξενώντας έως 6 άτομα.',
        longDesc: 'Αυτό το διαμέρισμα είναι ένας ιδιαίτερος χώρος γιατί μπορεί να χωριστεί ή να συνδυαστεί μαζί. Συνδέονται με μια εσωτερική πόρτα και εξαρτάται από εσάς αν θα έχετε το ένα ή και τα δύο μαζί. Περιλαμβάνει 2 υπνοδωμάτια (με διπλό κρεβάτι & TV), 2 πλήρως εξοπλισμένες κουζίνες, 2 τραπεζαρίες και 2 μπάνια (το ένα με πλυντήριο), καθώς και ένα μονό κρεβάτι και ένα κρεβάτι-συρτάρι.',
        features: ['6 Επισκέπτες', '2 Υπνοδωμάτια', '4 Κρεβάτια', '2 Μπάνια']
      },
      zeus: {
        name: 'Διαμέρισμα Ζεύς',
        desc: 'Ολόκληρο διαμέρισμα στην Ανάληψη με μεγάλη βεράντα και απίστευτη θέα.',
        longDesc: 'Στο συγκρότημα ενοικιαζόμενων διαμερισμάτων Vila Zizel, το διαμέρισμα Zeus περιλαμβάνει: πλήρως εξοπλισμένη κουζίνα, τραπεζαρία, άνετο μεγάλο χτιστό σαλόνι με τηλεόραση και κλιματισμό, 2 υπνοδωμάτια (το πρώτο διαθέτει ένα μεγάλο διπλό χτιστό κρεβάτι με τηλεόραση και κλιματισμό και το δεύτερο διαθέτει 2 μονά κρεβάτια με κλιματισμό), μπάνιο με πλήρη είδη περιποίησης, απλώστρα και τέλος τη μεγάλη βεράντα με την απίστευτη θέα.',
        features: ['5 Επισκέπτες', '2 Υπνοδωμάτια', '4 Κρεβάτια', '1 Μπάνιο']
      },
      athina: {
        name: 'Δωμάτιο Αθηνά',
        desc: 'Ένα άνετο καταφύγιο με υπέρδιπλο χτιστό κρεβάτι και θέα στη φύση.',
        longDesc: 'Στο συγκρότημα διαμερισμάτων μας Vila Zizel, το διαμέρισμα Αθηνά διαθέτει: 1 υπέρδιπλο χτιστό άνετο κρεβάτι που συνδέεται με την τραπεζαρία και την κουζίνα, μπάνιο. Υπάρχει επίσης ένας εξωτερικός χώρος όπου μπορείτε να χαλαρώσετε στη φύση. Τέλος, υπάρχει wifi και κλιματισμός.',
        features: ['4 Επισκέπτες', '1 Υπνοδωμάτιο', '2 Κρεβάτια', '1 Μπάνιο']
      },
      artemis: {
        name: 'Δωμάτιο Άρτεμις',
        desc: 'Ένας king-size παράδεισος στη Μεσσηνία περιτριγυρισμένος από τη φύση.',
        longDesc: 'Στο συγκρότημα ενοικιαζόμενων διαμερισμάτων Vila Zizel, στο διαμέρισμα Άρτεμις υπάρχει ένα king size άνετο κρεβάτι, μια κουζίνα που συνδέεται με το υπνοδωμάτιο και περιέχει όλα τα απαραίτητα και ένα μπάνιο. Έξω μπορείτε να απολαύσετε τη φύση.',
        features: ['3 Επισκέπτες', '1 Υπνοδωμάτιο', '2 Κρεβάτια', '1 Μπάνιο']
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
      glow: 'Ακολουθήστε τη Λάμψη',
      heroBadge: 'Ανάληψη · Μεσσηνία · Ελλάδα',
      scrollDiscover: 'Κάντε scroll για να ανακαλύψετε',
      statsGuests: 'Ευχαριστημένοι Επισκέπτες',
      statsAward: 'Superhost',
      statsYears: 'Χρόνια Αριστείας',
      featuresTitle: 'Γιατί Vila Zizel;',
      featureNature: 'Βοτανικοί Κήποι',
      featureNatureDesc: '4.000 τ.μ. καταπράσινης γης που σας περιβάλλει.',
      featureHandmade: 'Χειροποίητος Σχεδιασμός',
      featureHandmadeDesc: 'Κάθε λεπτομέρεια φτιαγμένη στο χέρι, εμπνευσμένη από τους θεούς.',
      featureSea: 'Δίπλα στη Θάλασσα',
      featureSeaDesc: '2 λεπτά με τα πόδια από τη χρυσή παραλία της Ανάληψης.',
      roomsTagline: 'Κάθε σουίτα φέρει το όνομα ενός θεού του Ολύμπου.',
      ctaTitle: 'Ο Θρύλος σας Αναμένει.',
      ctaDesc: 'Κλείστε τη θέση σας ανάμεσα στους θεούς. Περιορισμένη διαθεσιμότητα.',
      ctaBook: 'Κάντε Κράτηση',
      socialTitle: 'Ακολουθήστε το Καταφύγιο'
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
      { name: "Sharon", text: "Εξαιρετικό μέρος για διαμονή. Το beach bar και το εστιατόριο είναι πολύ φιλικά και αξίζουν μια επίσκεψη. Θα επέστρεφα χωρίς δισταγμό." },
      { name: "Maria", text: "Ευρύχωρο στούντιο με όλες τις ανέσεις. Όμορφος κοινόχρηστος κήπος, άφθονος χώρος στάθμευσης, ακόμα και κουλουράκια! Το κλιματιστικό και το ψυγείο λειτουργούσαν τέλεια. Όλα ήταν σούπερ!" },
      { name: "Christine", text: "Πεντακάθαρα και πολλά πράγματα φαινόταν ολοκαίνουργια. Το υπνοδωμάτιο ένιωθες ότι ήταν ξεχωριστό από την κουζίνα λόγω της διαρρύθμισης, και ο χώρος φαινόταν πολύ ευρύχωρος." },
      { name: "Amanda", text: "Υπέροχη εβδομάδα διαμονής εδώ. Πανέμορφο, καθαρό και μοντέρνο σε τέλεια τοποθεσία. Το διαμέρισμα είχε όλα όσα χρειαζόμασταν για αυτοεξυπηρέτηση." },
      { name: "Tanja", text: "Πολύ φιλικοί οικοδεσπότες. Απαντούσαν πάντα αμέσως και ήταν πολύ εξυπηρετικοί! Το διαμέρισμα δεν είναι μακριά από την παραλία και εξοπλισμένο με όλα όσα χρειάζεστε." }
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
      tag: 'Soggiorno', title: 'Rifugi', highlight: 'Mitici.', hera: 'Camera Hera', aphrodite: 'Appartamento Afrodite', poseidonHera: 'Unità Poseidon-Hera', zeus: 'Appartamento Zeus', athina: 'Camera Athina', artemis: 'Camera Artemis', inquire: 'Disponibilità', learnMore: 'Scopri di Più', rulesTitle: 'Regole della Casa', checkIn: 'Check-in: 14:00 - 20:00', checkOut: 'Checkout entro le 11:00', maxGuests: 'Max 3 ospiti', noPets: 'No animali', smoking: 'Fumo permesso', amenitiesTitle: 'Cosa offre questo posto', amenitiesSubtitle: 'Nota: alcuni servizi variano in base alla camera.', hostGreets: 'L\'host ti accoglie', longTerm: 'Soggiorni lunghi ammessi', olympianExp: 'L\'Esperienza Olimpica', roomAmenities: 'Servizi Camera', notIncluded: 'Non Incluso', smokeWarning: 'Questo posto potrebbe non avere rilevatori di fumo/monossido.'
    },
    amenitiesList: { bathroom: 'Asciugacapelli, shampoo, acqua calda', laundry: 'Lavatrice, stendino, ferro', essentials: 'Asciugamani, lenzuola, sapone', family: 'Culla, seggiolone, cancelli di sicurezza', kitchen: 'Cucina, frigo, microonde, caffè', outdoor: 'Patio/balcone, cortile, BBQ', parking: 'Parcheggio gratuito', notIncluded: 'Nessun rilevatore, no asciugatrice, no telecamere', bathLabel: 'Bagno e Lavanderia', kitchenLabel: 'Cucina e Pranzo', outdoorLabel: 'Esterni e Caratteristiche', safetyLabel: 'Sicurezza', safetyDesc: 'Estintore, Kit primo soccorso', essentialsLabel: 'Essenziali', familyLabel: 'Famiglia' },
    roomsData: {
      hera: {
        name: 'Camera Hera',
        desc: 'Splendida vista sulla natura con cucina privata e lavatrice.',
        longDesc: "Questo alloggio con una splendida vista sulla natura ad Analipsi, Messenia, comprende una cucina con tutto l'essenziale, una camera da letto con aria condizionata e TV, anche un letto singolo, un bagno con lavatrice privata e all'esterno un meraviglioso tavolo per godersi la natura.",
        features: ['3 Ospiti', '1 Camera', '2 Letti', 'Cucina Privata']
      },
      aphrodite: {
        name: 'Appartamento Afrodite',
        desc: 'Un\'unità completa con letto king size e terrazzino.',
        longDesc: 'Nel nostro complesso Vila Zizel, l\'appartamento Afrodite comprende: una camera con letto king size e TV, un bagno, una cucina-soggiorno con 2 letti singoli e infine un piccolo terrazzino. Dispone di internet e aria condizionata.',
        features: ['4 Ospiti', '1 Camera', '3 Letti', 'Cucina Completa']
      },
      poseidonHera: {
        name: 'Unità Poseidon-Hera',
        desc: 'Uno spazio speciale e flessibile che può essere separato o combiné, per un massimo di 6 ospiti.',
        longDesc: "Questo appartamento è uno spazio speciale perché può essere separato o combinato. Collegati da una porta interna, puoi goderti uno o entrambi insieme. Dispone di 2 camere da letto (ognuna con letto matrimoniale e TV), 2 cucine attrezzate, 2 zone pranzo e 2 bagni (uno con lavatrice), oltre a un letto singolo e un letto a cassettone extra.",
        features: ['6 Ospiti', '2 Camere', '4 Letti', '2 Bagni']
      },
      zeus: {
        name: 'Appartamento Zeus',
        desc: 'Intero condominio ad Analipsi con un\'ampia terrazza e viste incredibili.',
        longDesc: 'Nel complesso residenziale Vila Zizel, l\'appartamento Zeus dispone di: una cucina completamente attrezzata, sala da pranzo, un ampio e confortevole soggiorno in muratura con TV e aria condizionata, 2 camere da letto (la prima ha un grande letto matrimoniale in muratura con TV e aria condizionata, la seconda ha 2 letti singoli con aria condizionata), bagno con set di cortesia completo, stendibiancheria e infine la grande terrazza con una vista incredibile.',
        features: ['5 Ospiti', '2 Camere', '4 Letti', '1 Bagno']
      },
      athina: {
        name: 'Camera Athina',
        desc: 'Un rifugio accogliente con un letto super matrimoniale in muratura e vista sulla natura.',
        longDesc: 'Nel nostro complesso Vila Zizel, l\'appartamento Athina dispone di: 1 letto super matrimoniale in muratura che è collegato alla sala da pranzo e alla cucina, bagno. C\'è anche un\'area esterna dove ci si può rilassare nella natura. Infine, c\'è il wifi e anche l\'aria condizionata.',
        features: ['2 Ospiti', '1 Camera', '1 Letto', '1 Bagno']
      },
      artemis: {
        name: 'Camera Artemis',
        desc: 'Un paradiso king-size in Messenia immerso nella natura.',
        longDesc: 'Nel nostro complesso Vila Zizel, nell\'appartamento Artemis c\'è un letto king size, una cucina collegata alla camera da letto che contiene tutto il necessario e un bagno. All\'esterno si può godere della natura.',
        features: ['2 Ospiti', '1 Camera', '1 Letto', '1 Bagno']
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
      glow: 'Segui la Luce',
      heroBadge: 'Analipsi · Messenia · Grecia',
      scrollDiscover: 'Scorri per scoprire',
      statsGuests: 'Ospiti Felici',
      statsAward: 'Superhost',
      statsYears: 'Anni di Eccellenza',
      featuresTitle: 'Perché Vila Zizel?',
      featureNature: 'Giardini Botanici',
      featureNatureDesc: '4.000 m² di terreno lussureggiante che ti circonda.',
      featureHandmade: 'Design Artigianale',
      featureHandmadeDesc: 'Ogni dettaglio fatto a mano, ispirato agli dei.',
      featureSea: 'A due passi dal mare',
      featureSeaDesc: '2 minuti a piedi dalle sabbie dorate di Analipsi.',
      roomsTagline: 'Ogni suite porta il nome di un dio dell\'Olimpo.',
      ctaTitle: 'La Tua Leggenda Ti Aspetta.',
      ctaDesc: 'Prenota il tuo posto tra gli dei. Disponibilità limitata.',
      ctaBook: 'Prenota Ora',
      socialTitle: 'Segui il Santuario'
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
      { name: "Sharon", text: "Ottimo posto dove stare. Il beach bar e il ristorante sono molto amichevoli e valgono davvero la pena di essere visitati. Non esiterei a tornare." },
      { name: "Maria", text: "Studio spazioso con tutti i comfort. Bellissimo giardino in comune, ampio parcheggio e persino biscotti! Aria condizionata e frigorifero perfettamente funzionanti. Tutto è stato fantastico!" },
      { name: "Christine", text: "Pulizia impeccabile e molte cose sembravano nuove di zecca. La camera da letto sembrava separata dalla zona cucina grazie alla disposizione, e l'ambiente era molto spazioso." },
      { name: "Amanda", text: "Splendida settimana passata qui. Splendidamente pulito e moderno in una posizione perfetta. L'appartamento aveva tutto il necessario per l'auto-gestione." },
      { name: "Tanja", text: "Host molto cordiali. Hanno sempre risposto immediatamente e sono stati molto utili! L'appartamento non è lontano dalla spiaggia ed è dotato di tutto il necessario." }
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
      tag: 'Aufenthalt', title: 'Göttliche', highlight: 'Zimmer.', hera: 'Hera Zimmer', aphrodite: 'Aphrodite Apartment', poseidonHera: 'Poseidon-Hera Einheit', zeus: 'Zeus Apartment', athina: 'Athina Zimmer', artemis: 'Artemis Zimmer', inquire: 'Verfügbarkeit', learnMore: 'Mehr erfahren', rulesTitle: 'Hausregeln', checkIn: 'Check-in: 14:00 - 20:00', checkOut: 'Check-out bis 11:00', maxGuests: 'Max. 3 Gäste', noPets: 'Keine Haustiere', smoking: 'Rauchen erlaubt', amenitiesTitle: 'Was diese Unterkunft bietet', amenitiesSubtitle: 'Hinweis: Ausstattung kann je nach Zimmer variieren.', hostGreets: 'Gastgeber begrüßt Sie', longTerm: 'Langzeitaufenthalte erlaubt', olympianExp: 'Das Olympische Erlebnis', roomAmenities: 'Zimmerausstattung', notIncluded: 'Nicht enthalten', smokeWarning: 'Kein Rauch- oder Kohlenmonoxidmelder vorhanden.'
    },
    amenitiesList: { bathroom: 'Föhn, Shampoo, Warmwasser', laundry: 'Waschmaschine, Wäscheständer, Bügeleisen', essentials: 'Handtücher, Bettwäsche, Seife', family: 'Babybett, Hochstuhl, Schutzgitter', kitchen: 'Herd, Kühlschrank, Mikrowelle, Kaffee', outdoor: 'Patio, Garten, BBQ', parking: 'Gratis Parkplatz', notIncluded: 'Kein Melder, kein Trockner, keine Kameras', bathLabel: 'Bad & Wäsche', kitchenLabel: 'Küche & Essen', outdoorLabel: 'Außenbereich', safetyLabel: 'Sicherheit', safetyDesc: 'Feuerlöscher, Erste-Hilfe-Set', essentialsLabel: 'Grundlagen', familyLabel: 'Familie' },
    roomsData: {
      hera: {
        name: 'Hera Zimmer',
        desc: 'Wunderbarer Blick auf die Natur mit privater Küche und Waschmaschine.',
        longDesc: 'Diese Unterkunft mit herrlichem Blick auf die Natur in Analipsi, Messinia, verfügt über eine Küche mit allen wichtigen Utensilien, ein Schlafzimmer mit Klimaanlage und Fernseher, sowie ein Einzelbett, ein Badezimmer mit eigener Waschmaschine und im Außenbereich einen herrlichen Tisch, um die Natur zu genießen.',
        features: ['3 Gäste', '1 Schlafzimmer', '2 Betten', 'Private Küche']
      },
      aphrodite: {
        name: 'Aphrodite Apartment',
        desc: 'Eine komplette Wohneinheit mit Kingsize-Bett und kleiner Terrasse.',
        longDesc: 'In unserem Apartmentkomplex Vila Zizel verfügt das Aphrodite-Apartment über: ein Schlafzimmer mit Kingsize-Bett und TV, ein Badezimmer, eine Wohnküche mit 2 Einzelbetten und schließlich eine kleine Terrasse. Es verfügt über Internet und Klimaanlage.',
        features: ['4 Gäste', '1 Schlafzimmer', '3 Betten', 'Vollständige Küche']
      },
      poseidonHera: {
        name: 'Poseidon-Hera Einheit',
        desc: 'Ein flexibler Raum, der getrennt oder kombiniert werden kann, für bis zu 6 Gäste.',
        longDesc: 'Dieses Apartment ist ein besonderer Ort, da es getrennt oder kombiniert werden kann. Durch eine Innentür verbunden, können Sie entweder eine oder beide Einheiten zusammen nutzen. Es bietet 2 Schlafzimmer (je mit Doppelbett & TV), 2 voll ausgestattete Küchen, 2 Essbereiche, 2 Bäder (eines mit Waschmaschine) sowie ein Einzel- und ein Schubladenbett.',
        features: ['6 Gäste', '2 Schlafzimmer', '4 Betten', '2 Bäder']
      },
      zeus: {
        name: 'Zeus Apartment',
        desc: 'Gesamte Eigentumswohnung in Analipsi mit großer Terrasse und unglaublicher Aussicht.',
        longDesc: 'In der Ferienanlage Vila Zizel verfügt das Apartment Zeus über: eine voll ausgestattete Küche, ein Esszimmer, ein komfortables großes gemauertes Wohnzimmer με Fernseher und Klimaanlage, 2 Schlafzimmer (das erste hat ein großes gemauertes Doppelbett mit Fernseher und Klimaanlage und das zweite hat 2 Einzelbetten mit Klimaanlage), ein Badezimmer mit kompletten Toilettenartikeln, einen Wäscheständer und schließlich die große Terrasse mit der unglaublichen Aussicht.',
        features: ['5 Gäste', '2 Schlafzimmer', '4 Betten', '1 Bad']
      },
      athina: {
        name: 'Athina Zimmer',
        desc: 'Ein gemütlicher Rückzugsort mit einem gemauerten Super-Doppelbett und Blick ins Grüne.',
        longDesc: 'In unserer Apartmentanlage Vila Zizel verfügt das Apartment Athina über: 1 gemauertes Super-Doppelbett, das mit dem Esszimmer und der Küche verbunden ist, sowie ein Badezimmer. Es gibt auch einen Außenbereich, in dem Sie in der Natur entspannen können. Schließlich gibt es WLAN und eine Klimaanlage.',
        features: ['4 Gäste', '1 Schlafzimmer', '2 Betten', '1 Bad']
      },
      artemis: {
        name: 'Artemis Zimmer',
        desc: 'Eine King-Size-Oase in Messenien, umgeben von Natur.',
        longDesc: 'In unserer Ferienanlage Vila Zizel gibt es im Apartment Artemis ein komfortables Kingsize-Bett, eine Küche, die mit dem Schlafzimmer verbunden ist und alles Notwendige enthält, sowie ein Badezimmer. Draußen können Sie die Natur genießen.',
        features: ['3 Gäste', '1 Schlafzimmer', '2 Betten', '1 Bad']
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
      glow: 'Folgen Sie dem Glanz',
      heroBadge: 'Analipsi · Messenien · Griechenland',
      scrollDiscover: 'Scrollen zum Entdecken',
      statsGuests: 'Zufriedene Gäste',
      statsAward: 'Superhost',
      statsYears: 'Jahre Exzellenz',
      featuresTitle: 'Warum Vila Zizel?',
      featureNature: 'Botanischer Garten',
      featureNatureDesc: '4.000 m² üppiges Grün, das Sie umgibt.',
      featureHandmade: 'Handgefertigtes Design',
      featureHandmadeDesc: 'Jedes Detail handgefertigt, inspiriert von den Göttern.',
      featureSea: 'Direkt am Meer',
      featureSeaDesc: '2 Minuten Fußweg zum goldenen Strand von Analipsi.',
      roomsTagline: 'Jede Suite trägt den Namen eines Olympischen Gottes.',
      ctaTitle: 'Ihre Legende Erwartet Sie.',
      ctaDesc: 'Sichern Sie sich Ihren Platz unter den Göttern. Begrenzte Verfügbarkeit.',
      ctaBook: 'Jetzt Buchen',
      socialTitle: 'Folgen Sie dem Refugium'
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
      { name: "Sharon", text: "Hervorragende Unterkunft. Die Strandbar und das Restaurant sind sehr freundlich und einen Besuch wert. Ich würde ohne zu zögern wiederkommen." },
      { name: "Maria", text: "Geräumiges Apartment mit allem Komfort. Schöner Gemeinschaftsgarten, reichlich Parkplätze und sogar Kekse! Klimaanlage und Kühlschrank funktionierten einwandfrei. Alles war perfekt!" },
      { name: "Christine", text: "Blitzsauber und vieles wirkte brandneu. Durch die Aufteilung fühlte sich das Schlafzimmer vom Küchenbereich getrennt an und es wirkte sehr geräumig." },
      { name: "Amanda", text: "Wunderschöne Woche hier verbracht. Alles war blitzsauber, modern und in perfekter Lage. Die Wohnung bot alles, was wir für Selbstversorger brauchten." },
      { name: "Tanja", text: "Sehr freundliche Gastgeber. Sie haben immer sofort geantwortet und waren sehr hilfreich! Die Wohnung liegt nicht weit vom Strand entfernt und ist mit allem ausgestattet, was man braucht." }
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
      tag: 'Estancia', title: 'Refugios', highlight: 'Míticos.', hera: 'Habitación Hera', aphrodite: 'Apartamento Afrodita', poseidonHera: 'Unidad Poseidón-Hera', zeus: 'Apartamento Zeus', athina: 'Habitación Athina', artemis: 'Habitación Artemis', inquire: 'Disponibilidad', learnMore: 'Saber Más', rulesTitle: 'Reglas de la Casa', checkIn: 'Check-in: 14:00 - 20:00', checkOut: 'Check-out antes de las 11:00', maxGuests: 'Máx. 3 personas', noPets: 'Sin mascotas', smoking: 'Se permite fumar', amenitiesTitle: 'Lo que este lugar ofrece', amenitiesSubtitle: 'Nota: algunos servicios varían según la habitación.', hostGreets: 'El anfitrión te recibe', longTerm: 'Estancias largas permitidas', olympianExp: 'La Experiencia Olímpica', roomAmenities: 'Servicios', notIncluded: 'No incluido', smokeWarning: 'Este lugar puede no tener detectores de humo/monóxido.'
    },
    amenitiesList: { bathroom: 'Secador, champú, agua caliente', laundry: 'Lavadora, tendedero, plancha', essentials: 'Toallas, sábanas, jabón', family: 'Cuna, silla alta, puertas de seguridad', kitchen: 'Cocina, frigo, microondas, cafetera', outdoor: 'Patio, patio trasero, barbacoa', parking: 'Aparcamiento gratuito', notIncluded: 'Sin detectores, sin secadora, sin cámaras', bathLabel: 'Baño y Lavandería', kitchenLabel: 'Cocina y Comedor', outdoorLabel: 'Exterior y Características', safetyLabel: 'Seguridad', safetyDesc: 'Extintor, Botiquín', essentialsLabel: 'Esenciales', familyLabel: 'Familia' },
    roomsData: {
      hera: {
        name: 'Habitación Hera',
        desc: 'Maravillosas vistas a la naturaleza con cocina privada y lavadora.',
        longDesc: 'Este lugar con una maravillosa vista de la naturaleza en Analipsi, Messinia, contiene una cocina con todo lo esencial, un dormitorio con aire acondicionado y televisión, también una cama individual, un baño que tiene lavadora privada y fuera una mesa maravillosa para disfrutar de la naturaleza.',
        features: ['3 Huéspedes', '1 Dormitorio', '2 Camas', 'Cocina Privada']
      },
      aphrodite: {
        name: 'Apartamento Afrodita',
        desc: 'Una unidad completa con cama king size y terraza pequeña.',
        longDesc: 'En nuestro complejo Vila Zizel, el apartamento Afrodita contiene: un dormitorio con una cama king size y TV, un baño, una cocina-comedor que tiene 2 camas individuales y finalmente una pequeña terraza. Dispone de internet y aire acondicionado.',
        features: ['4 Huéspedes', '1 Dormitorio', '3 Camas', 'Cocina Completa']
      },
      poseidonHera: {
        name: 'Unidad Poseidón-Hera',
        desc: 'Un espacio flexible que puede separarse o combinarse, con capacidad para hasta 6 personas.',
        longDesc: 'Este apartamento es un espacio especial porque puede separarse o combinarse. Conectados por una puerta interna, puede disfrutar de uno o de ambos juntos. Cuenta con 2 dormitorios (cada uno con cama doble y TV), 2 cocinas equipadas, 2 comedores y 2 baños (uno con lavadora), además de camas individuales y de cajón adicionales.',
        features: ['6 Huéspedes', '2 Dormitorios', '4 Camas', '2 Baños']
      },
      zeus: {
        name: 'Apartamento Zeus',
        desc: 'Condominio entero en Analipsi con una gran terraza e increíbles vistas.',
        longDesc: 'En el complejo de alquiler Vila Zizel, el apartamento Zeus contiene: una cocina totalmente equipada, comedor, amplio y cómodo salón de obra con TV y aire acondicionado, 2 dormitorios (el primero tiene una gran cama doble de obra con TV y aire acondicionado y el segundo tiene 2 camas individuales con aire acondicionado), baño con artículos de tocador completos, tendedero y, por último, la gran terraza con las increíbles vistas.',
        features: ['5 Huéspedes', '2 Dormitorios', '4 Camas', '1 Baño']
      },
      athina: {
        name: 'Habitación Athina',
        desc: 'Un refugio acogedor con una cama super doble de obra y vistas a la naturaleza.',
        longDesc: 'En nuestro complejo de apartamentos Vila Zizel, el apartamento Athina tiene: 1 cama super doble de obra muy cómoda que está conectada con el comedor y la cocina, baño. También hay una zona exterior donde podrá relajarse en la naturaleza. Por último, hay wifi y aire acondicionado.',
        features: ['4 Huéspedes', '1 Dormitorio', '2 Camas', '1 Baño']
      },
      artemis: {
        name: 'Habitación Artemis',
        desc: 'Un paraíso king-size en Mesenia rodeado de naturaleza.',
        longDesc: 'En nuestro complejo de alquiler Vila Zizel, en el apartamento Artemis hay una cómoda cama king size, una cocina conectada con el dormitorio que contiene todo lo necesario y un baño. Fuera podrá disfrutar de la naturaleza.',
        features: ['3 Huéspedes', '1 Dormitorio', '2 Camas', '1 Baño']
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
      heaven: 'Un paraíso para jóvenes dioses y viejos amigos.',
      exploreSuites: 'Explorar Suites',
      showAll: 'Ver Todos los Detalles',
      guestJourneys: 'Viajes de Huéspedes.',
      mythosBegins: 'Tu Mito comienza aquí.',
      secureStay: 'Reserva tu Estancia',
      glow: 'Sigue el Brillo',
      heroBadge: 'Analipsi · Mesenia · Grecia',
      scrollDiscover: 'Desplázate para descubrir',
      statsGuests: 'Huéspedes Felices',
      statsAward: 'Superhost',
      statsYears: 'Años de Excelencia',
      featuresTitle: '¿Por qué Vila Zizel?',
      featureNature: 'Jardines Botánicos',
      featureNatureDesc: '4.000 m² de terreno exuberante que te rodea.',
      featureHandmade: 'Diseño Artesanal',
      featureHandmadeDesc: 'Cada detalle hecho a mano, inspirado en los dioses.',
      featureSea: 'A pasos del mar',
      featureSeaDesc: '2 minutos andando hasta las arenas doradas de Analipsi.',
      roomsTagline: 'Cada suite lleva el nombre de un dios del Olimpo.',
      ctaTitle: 'Tu Leyenda Te Espera.',
      ctaDesc: 'Reserva tu lugar entre los dioses. Disponibilidad limitada.',
      ctaBook: 'Reservar Ahora',
      socialTitle: 'Sigue el Santuario'
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
      { name: "Sharon", text: "Excelente lugar para alojarse. El bar de la playa y el restaurante son muy acogedores y vale la pena visitarlos. Sin duda volvería." },
      { name: "Maria", text: "Estudio amplio con todas las comodidades. Un jardín precioso, aparcamiento de sobra ¡y hasta galletas! El aire acondicionado y la nevera funcionaban genial. Todo fue perfecto." },
      { name: "Christine", text: "Impecable. Muchas cosas parecían nuevas. El dormitorio estaba bien separado de la cocina por la distribución, lo que daba sensación de amplitud." },
      { name: "Amanda", text: "Una semana encantadora. Limpio, moderno y en una ubicación perfecta. El apartamento tenía todo lo necesario para sentirse como en casa." },
      { name: "Tanja", text: "Anfitriones muy amables. Siempre dispuestos a ayudar y rápidos en sus respuestas. El apartamento está cerca de la playa y totalmente equipado." }
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
      tag: 'Le Séjour', title: 'Havres', highlight: 'Mythiques.', hera: 'Chambre Héra', aphrodite: 'Appartement Aphrodite', poseidonHera: 'Unité Poséidon-Hera', zeus: 'Appartement Zeus', athina: 'Chambre Athina', artemis: 'Chambre Artemis', inquire: 'Disponibilité', learnMore: 'En Savoir Plus', rulesTitle: 'Règles de la Maison', checkIn: 'Check-in : 14h - 20h', checkOut: 'Checkout avant 11h', maxGuests: '3 pers. max', noPets: 'Pas d\'animaux', smoking: 'Fumeurs autorisés', amenitiesTitle: 'Ce que ce lieu propose', amenitiesSubtitle: 'Note : certains équipements varient selon la chambre.', hostGreets: 'L\'hôte vous accueille', longTerm: 'Longs séjours autorisés', olympianExp: 'L\'Expérience Olympienne', roomAmenities: 'Équipements', notIncluded: 'Non inclus', smokeWarning: 'Pas de détecteur de fumée/monoxyde.'
    },
    amenitiesList: { bathroom: 'Sèche-cheveux, shampoing, eau chaude', laundry: 'Lave-linge, étendoir, fer', essentials: 'Serviettes, draps, savon', family: 'Lit bébé, chaise haute, barrières', kitchen: 'Cuisine, frigo, micro-ondes, café', outdoor: 'Patio, arrière-cour, barbecue', parking: 'Parking gratuit', notIncluded: 'Pas de détecteur, pas de séchoir, pas de caméras', bathLabel: 'Salle de bain & Laundry', kitchenLabel: 'Cuisine & Repas', outdoorLabel: 'Extérieur', safetyLabel: 'Sécurité', safetyDesc: 'Extincteur, Premier secours', essentialsLabel: 'Essentiels', familyLabel: 'Famille' },
    roomsData: {
      hera: {
        name: 'Chambre Héra',
        desc: 'Magnifique vue sur la nature avec cuisine privée et lave-linge.',
        longDesc: "Ce lieu avec une vue magnifique sur la nature à Analipsi, Messénie, comprend une cuisine avec tout le nécessaire, une chambre avec climatisation et télévision, également un lit simple, une salle de bain qui dispose d'un lave-linge privé et à l'extérieur une table merveilleuse pour profiter de la nature.",
        features: ['3 Personnes', '1 Chambre', '2 Lits', 'Cuisine Privée']
      },
      aphrodite: {
        name: 'Appartement Aphrodite',
        desc: 'Une unité de location complète avec un lit king size et une petite terrasse.',
        longDesc: 'Dans notre complexe d\'appartements Vila Zizel, l\'appartement Aphrodite comprend : une chambre avec un lit king size et une télévision, une salle de bain, une cuisine-salle à manger disposant de 2 lits simples et enfin une petite terrasse. Il dispose d\'internet et de la climatisation.',
        features: ['4 Personnes', '1 Chambre', '3 Lits', 'Cuisine Complète']
      },
      poseidonHera: {
        name: 'Unité Poséidon-Héra',
        desc: 'Un espace flexible qui peut être séparé ou combiné, accueillant jusqu\'à 6 personnes.',
        longDesc: 'Cet appartement est un espace spécial car il peut être séparé ou combiné. Reliés par une porte intérieure, vous pouvez profiter de l\'un ou des deux ensemble. Il comprend 2 chambres (chacune avec lit double & TV), 2 cuisines équipées, 2 zones de repas, 2 salles de bain (une avec lave-linge), ainsi que des lits simples et tiroirs supplémentaires.',
        features: ['6 Personnes', '2 Chambres', '4 Lits', '2 Salles de bain']
      },
      zeus: {
        name: 'Appartement Zeus',
        desc: 'Condo entier à Analipsi avec une grande terrasse et des vues incroyables.',
        longDesc: 'Dans le complexe locatif Vila Zizel, l\'appartement de Zeus contient : une cuisine entièrement équipée, une salle à manger, un grand salon confortable en maçonnerie avec TV et climatisation, 2 chambres (la première dispose d\'un grand lit double en maçonnerie avec TV et climatisation et la seconde de 2 lits simples avec climatisation), une salle de bain avec articles de toilette complets, un étendoir et enfin la grande terrasse avec la vue incroyable.',
        features: ['5 Personnes', '2 Chambres', '4 Lits', '1 Salle de bain']
      },
      athina: {
        name: 'Chambre Athina',
        desc: 'Une retraite confortable avec un lit super double en maçonnerie et vue sur la nature.',
        longDesc: 'Dans notre complexe d\'appartements Vila Zizel, l\'appartement Athina dispose de : 1 lit super double en maçonnerie très confortable relié à la salle à manger et à la cuisine, une salle de bain. Il y a aussi un espace extérieur où vous pourrez vous détendre dans la nature. Enfin, il y a le wifi et la climatisation.',
        features: ['4 Personnes', '1 Chambre', '2 Lits', '1 Salle de bain']
      },
      artemis: {
        name: 'Chambre Artemis',
        desc: 'Un havre de paix king-size en Messénie entouré de nature.',
        longDesc: 'Dans notre complexe locatif Vila Zizel, dans l\'appartement Artemis, vous trouverez un lit king size confortable, une cuisine reliée à la chambre contenant tout le nécessaire et une salle de bain. À l\'extérieur, vous pourrez profiter de la nature.',
        features: ['3 Personnes', '1 Chambre', '2 Lits', '1 Salle de bain']
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
      glow: 'Suivez l\'Éclat',
      heroBadge: 'Analipsi · Messénie · Grèce',
      scrollDiscover: 'Faites défiler pour découvrir',
      statsGuests: 'Clients Satisfaits',
      statsAward: 'Superhost',
      statsYears: 'Années d\'Excellence',
      featuresTitle: 'Pourquoi Vila Zizel?',
      featureNature: 'Jardins Botaniques',
      featureNatureDesc: '4 000 m² de verdure luxuriante qui vous entoure.',
      featureHandmade: 'Design Artisanal',
      featureHandmadeDesc: 'Chaque détail fait main, inspiré des dieux.',
      featureSea: 'À deux pas de la mer',
      featureSeaDesc: '2 minutes à pied des sables dorés d\'Analipsi.',
      roomsTagline: 'Chaque suite porte le nom d\'un dieu de l\'Olympe.',
      ctaTitle: 'Votre Légende Vous Attend.',
      ctaDesc: 'Réservez votre place parmi les dieux. Disponibilité limitée.',
      ctaBook: 'Réserver Maintenant',
      socialTitle: 'Suivez le Sanctuaire'
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
      { name: "Sharon", text: "Super endroit où séjourner. Le bar de la plage et le restaurant sont très accueillants et valent le détour. Je reviendrais sans hésiter." },
      { name: "Maria", text: "Studio spacieux avec tout le confort. Beau jardin partagé, grand parking et même des biscuits ! Climatisation et frigo fonctionnant parfaitement. Tout était super !" },
      { name: "Christine", text: "D'une propreté impeccable et beaucoup de choses semblaient neuves. La chambre semblait séparée de la cuisine grâce à l'agencement, et c'était très spacieux." },
      { name: "Amanda", text: "Une belle semaine passée ici. Magnifiquement propre et moderne dans un emplacement parfait. L'appartement avait tout ce dont nous avions besoin pour cuisiner." },
      { name: "Tanja", text: "Hôtes très sympathiques. Ils ont toujours répondu immédiatement et ont été très serviables ! L'appartement n'est pas loin de la plage et équipé de tout ce dont on a besoin." }
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
