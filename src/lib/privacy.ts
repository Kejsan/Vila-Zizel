type PrivacySection = { title: string; description: string; details: string };

type PrivacyCopy = {
  title: string;
  summary: string;
  policy: string;
  decline: string;
  preferences: string;
  accept: string;
  manage: string;
  instructions: string;
  back: string;
  close: string;
  save: string;
  alwaysActive: string;
  mapPlaceholder: string;
  sections: Record<'necessary' | 'analytics' | 'maps' | 'weather' | 'inquiries', PrivacySection>;
};

const translations: Record<string, PrivacyCopy> = {
  en: {
    title: 'Your privacy at Vila Zizel',
    summary: 'We remember your language and privacy choices in this browser. With your permission, we use Google Analytics to understand how the site is used and Google Maps to show an interactive map. You can change your choices any time from the footer.',
    policy: 'Privacy policy',
    decline: 'Continue without accepting',
    preferences: 'Preferences',
    accept: 'Accept all',
    manage: 'Privacy preferences',
    instructions: 'Choose which optional services to allow. Changes take effect when you save them and apply to this browser.',
    back: 'Back',
    close: 'Close',
    save: 'Save and continue',
    alwaysActive: 'Always active',
    mapPlaceholder: 'To display the interactive map here, enable Google Maps in your privacy preferences.',
    sections: {
      necessary: {
        title: 'Browser settings',
        description: 'The site remembers your language and your privacy choices.',
        details: 'These settings are stored in this browser so they can be used on future visits.',
      },
      analytics: {
        title: 'Site analytics',
        description: 'Google Analytics helps us understand how visitors explore pages about our stays, garden, local area and guest reviews.',
        details: 'It can use cookies and collect page visits, interactions and browser or device information.',
      },
      maps: {
        title: 'Interactive map',
        description: 'Google Maps shows Vila Zizel’s location on the About page.',
        details: 'Loading the map connects your browser to Google, which may receive your IP address and use cookies. The directions link opens Google Maps when you select it.',
      },
      weather: {
        title: 'Local weather',
        description: 'The weather widget shows the forecast for Analipsi.',
        details: 'Our server requests weather data for the villa’s location from MET Norway. The widget uses the villa’s location for every visitor.',
      },
      inquiries: {
        title: 'Booking and contact requests',
        description: 'When you submit a form, Vila Zizel uses the information to reply to your request.',
        details: 'Netlify processes form submissions, which may include your name, email, travel dates and message.',
      },
    },
  },
  el: {
    title: 'Το απόρρητό σας στο Vila Zizel',
    summary: 'Αποθηκεύουμε τη γλώσσα και τις επιλογές απορρήτου σας σε αυτό το πρόγραμμα περιήγησης. Με την άδειά σας, χρησιμοποιούμε το Google Analytics για να κατανοούμε πώς χρησιμοποιείται ο ιστότοπος και τους Χάρτες Google για την προβολή διαδραστικού χάρτη. Μπορείτε να αλλάξετε τις επιλογές σας ανά πάσα στιγμή από το κάτω μέρος της σελίδας.',
    policy: 'Πολιτική απορρήτου',
    decline: 'Συνέχεια χωρίς αποδοχή',
    preferences: 'Προτιμήσεις',
    accept: 'Αποδοχή όλων',
    manage: 'Προτιμήσεις απορρήτου',
    instructions: 'Επιλέξτε ποιες προαιρετικές υπηρεσίες επιτρέπετε. Οι αλλαγές ισχύουν για αυτό το πρόγραμμα περιήγησης μόλις τις αποθηκεύσετε.',
    back: 'Πίσω',
    close: 'Κλείσιμο',
    save: 'Αποθήκευση και συνέχεια',
    alwaysActive: 'Πάντα ενεργό',
    mapPlaceholder: 'Για να δείτε εδώ τον διαδραστικό χάρτη, ενεργοποιήστε τους Χάρτες Google στις προτιμήσεις απορρήτου.',
    sections: {
      necessary: { title: 'Ρυθμίσεις περιήγησης', description: 'Ο ιστότοπος θυμάται τη γλώσσα και τις επιλογές απορρήτου σας.', details: 'Οι ρυθμίσεις αποθηκεύονται σε αυτό το πρόγραμμα περιήγησης για μελλοντικές επισκέψεις.' },
      analytics: { title: 'Στατιστικά χρήσης', description: 'Το Google Analytics μάς βοηθά να κατανοούμε πώς οι επισκέπτες περιηγούνται στα καταλύματα, τον κήπο, την περιοχή και τις κριτικές.', details: 'Μπορεί να χρησιμοποιεί cookies και να καταγράφει επισκέψεις, αλληλεπιδράσεις και στοιχεία του προγράμματος περιήγησης ή της συσκευής.' },
      maps: { title: 'Διαδραστικός χάρτης', description: 'Οι Χάρτες Google δείχνουν την τοποθεσία του Vila Zizel στη σελίδα σχετικά με το κατάλυμα.', details: 'Όταν φορτώνεται ο χάρτης, ο περιηγητής σας συνδέεται με την Google, η οποία ενδέχεται να λαμβάνει τη διεύθυνση IP σας και να χρησιμοποιεί cookies. Ο σύνδεσμος για οδηγίες ανοίγει τους Χάρτες Google όταν τον επιλέξετε.' },
      weather: { title: 'Τοπικός καιρός', description: 'Η ένδειξη καιρού δείχνει την πρόγνωση για την Ανάληψη.', details: 'Ο διακομιστής μας ζητά δεδομένα από το MET Norway για την τοποθεσία του καταλύματος, η οποία είναι κοινή για όλους τους επισκέπτες.' },
      inquiries: { title: 'Αιτήματα κράτησης και επικοινωνίας', description: 'Όταν υποβάλλετε μια φόρμα, το Vila Zizel χρησιμοποιεί τα στοιχεία για να απαντήσει στο αίτημά σας.', details: 'Η Netlify επεξεργάζεται τις υποβολές, οι οποίες μπορεί να περιλαμβάνουν όνομα, email, ημερομηνίες ταξιδιού και μήνυμα.' },
    },
  },
  it: {
    title: 'La tua privacy su Vila Zizel',
    summary: 'Salviamo la lingua e le tue scelte sulla privacy in questo browser. Con il tuo consenso, usiamo Google Analytics per capire come viene utilizzato il sito e Google Maps per mostrare una mappa interattiva. Puoi modificare le tue scelte in qualsiasi momento dal piè di pagina.',
    policy: 'Informativa sulla privacy',
    decline: 'Continua senza accettare',
    preferences: 'Preferenze',
    accept: 'Accetta tutto',
    manage: 'Preferenze sulla privacy',
    instructions: 'Scegli quali servizi facoltativi abilitare. Le modifiche si applicano a questo browser quando le salvi.',
    back: 'Indietro',
    close: 'Chiudi',
    save: 'Salva e continua',
    alwaysActive: 'Sempre attivo',
    mapPlaceholder: 'Per visualizzare la mappa interattiva, abilita Google Maps nelle preferenze sulla privacy.',
    sections: {
      necessary: { title: 'Impostazioni del browser', description: 'Il sito ricorda la lingua e le tue scelte sulla privacy.', details: 'Le impostazioni vengono salvate in questo browser per le visite future.' },
      analytics: { title: 'Statistiche del sito', description: 'Google Analytics ci aiuta a capire come i visitatori consultano le pagine sugli alloggi, il giardino, la zona e le recensioni.', details: 'Può usare cookie e raccogliere informazioni su visite, interazioni, browser e dispositivi.' },
      maps: { title: 'Mappa interattiva', description: 'Google Maps mostra dove si trova Vila Zizel nella pagina dedicata alla struttura.', details: 'Il caricamento della mappa collega il browser a Google, che può ricevere il tuo indirizzo IP e usare cookie. Il link alle indicazioni apre Google Maps quando lo selezioni.' },
      weather: { title: 'Meteo locale', description: 'Il widget meteo mostra le previsioni per Analipsi.', details: 'Il nostro server richiede i dati a MET Norway per la posizione della villa, uguale per tutti i visitatori.' },
      inquiries: { title: 'Richieste di prenotazione e contatto', description: 'Quando invii un modulo, Vila Zizel usa i dati forniti per rispondere alla richiesta.', details: 'Netlify elabora i moduli inviati, che possono contenere nome, email, date del viaggio e messaggio.' },
    },
  },
  de: {
    title: 'Datenschutz bei Vila Zizel',
    summary: 'Wir speichern Ihre Sprache und Ihre Datenschutzeinstellungen in diesem Browser. Mit Ihrer Einwilligung nutzen wir Google Analytics, um die Nutzung der Website zu verstehen, und Google Maps, um eine interaktive Karte anzuzeigen. Ihre Auswahl können Sie jederzeit über die Fußzeile ändern.',
    policy: 'Datenschutzerklärung',
    decline: 'Ohne Zustimmung fortfahren',
    preferences: 'Einstellungen',
    accept: 'Alle akzeptieren',
    manage: 'Datenschutzeinstellungen',
    instructions: 'Wählen Sie aus, welche optionalen Dienste Sie zulassen. Ihre Änderungen gelten nach dem Speichern für diesen Browser.',
    back: 'Zurück',
    close: 'Schließen',
    save: 'Speichern und fortfahren',
    alwaysActive: 'Immer aktiv',
    mapPlaceholder: 'Aktivieren Sie Google Maps in den Datenschutzeinstellungen, um die interaktive Karte anzuzeigen.',
    sections: {
      necessary: { title: 'Browsereinstellungen', description: 'Die Website merkt sich Ihre Sprache und Datenschutzeinstellungen.', details: 'Die Einstellungen werden für spätere Besuche in diesem Browser gespeichert.' },
      analytics: { title: 'Website-Analyse', description: 'Mit Google Analytics erfahren wir, wie Besucher die Seiten zu Unterkünften, Garten, Umgebung und Gästebewertungen nutzen.', details: 'Der Dienst kann Cookies verwenden und Seitenaufrufe, Interaktionen sowie Browser- und Geräteinformationen erfassen.' },
      maps: { title: 'Interaktive Karte', description: 'Google Maps zeigt den Standort von Vila Zizel auf der Seite über die Unterkunft.', details: 'Beim Laden verbindet sich Ihr Browser mit Google. Google kann dabei Ihre IP-Adresse erhalten und Cookies verwenden. Der Link zur Wegbeschreibung öffnet Google Maps, wenn Sie ihn auswählen.' },
      weather: { title: 'Lokales Wetter', description: 'Das Wetter-Widget zeigt die Vorhersage für Analipsi.', details: 'Unser Server ruft die Wetterdaten bei MET Norway für den Standort der Villa ab. Dieser Standort gilt für alle Besucher.' },
      inquiries: { title: 'Buchungs- und Kontaktanfragen', description: 'Wenn Sie ein Formular absenden, verwendet Vila Zizel Ihre Angaben zur Beantwortung Ihrer Anfrage.', details: 'Netlify verarbeitet die Formulardaten. Dazu können Name, E-Mail-Adresse, Reisedaten und Ihre Nachricht gehören.' },
    },
  },
  es: {
    title: 'Tu privacidad en Vila Zizel',
    summary: 'Recordamos tu idioma y tus preferencias de privacidad en este navegador. Con tu permiso, usamos Google Analytics para entender cómo se utiliza el sitio y Google Maps para mostrar un mapa interactivo. Puedes cambiar tus preferencias en cualquier momento desde el pie de página.',
    policy: 'Política de privacidad',
    decline: 'Continuar sin aceptar',
    preferences: 'Preferencias',
    accept: 'Aceptar todo',
    manage: 'Preferencias de privacidad',
    instructions: 'Elige qué servicios opcionales quieres permitir. Cuando guardes los cambios, se aplicarán a este navegador.',
    back: 'Volver',
    close: 'Cerrar',
    save: 'Guardar y continuar',
    alwaysActive: 'Siempre activo',
    mapPlaceholder: 'Para ver el mapa interactivo, activa Google Maps en tus preferencias de privacidad.',
    sections: {
      necessary: { title: 'Ajustes del navegador', description: 'El sitio recuerda tu idioma y tus preferencias de privacidad.', details: 'Estos ajustes se guardan en este navegador para las próximas visitas.' },
      analytics: { title: 'Estadísticas del sitio', description: 'Google Analytics nos ayuda a entender cómo se consultan las páginas sobre los alojamientos, el jardín, la zona y las reseñas.', details: 'Puede utilizar cookies y recopilar datos sobre visitas, interacciones, el navegador y el dispositivo.' },
      maps: { title: 'Mapa interactivo', description: 'Google Maps muestra la ubicación de Vila Zizel en la página sobre el alojamiento.', details: 'Al cargar el mapa, el navegador se conecta con Google, que puede recibir tu dirección IP y usar cookies. El enlace de indicaciones abre Google Maps cuando lo seleccionas.' },
      weather: { title: 'Tiempo local', description: 'El widget del tiempo muestra el pronóstico para Analipsi.', details: 'Nuestro servidor solicita datos a MET Norway para la ubicación de la villa, que es la misma para todos los visitantes.' },
      inquiries: { title: 'Solicitudes de reserva y contacto', description: 'Si envías un formulario, Vila Zizel utiliza los datos que facilitas para responder a tu solicitud.', details: 'Netlify procesa los formularios enviados, que pueden incluir tu nombre, correo electrónico, fechas de viaje y mensaje.' },
    },
  },
  fr: {
    title: 'Votre vie privée chez Vila Zizel',
    summary: 'Nous mémorisons votre langue et vos choix de confidentialité dans ce navigateur. Avec votre accord, nous utilisons Google Analytics pour comprendre comment le site est utilisé et Google Maps pour afficher une carte interactive. Vous pouvez modifier vos choix à tout moment depuis le pied de page.',
    policy: 'Politique de confidentialité',
    decline: 'Continuer sans accepter',
    preferences: 'Préférences',
    accept: 'Tout accepter',
    manage: 'Préférences de confidentialité',
    instructions: 'Choisissez les services facultatifs à autoriser. Une fois enregistrés, vos choix s’appliquent à ce navigateur.',
    back: 'Retour',
    close: 'Fermer',
    save: 'Enregistrer et continuer',
    alwaysActive: 'Toujours actif',
    mapPlaceholder: 'Pour afficher la carte interactive, activez Google Maps dans vos préférences de confidentialité.',
    sections: {
      necessary: { title: 'Paramètres du navigateur', description: 'Le site mémorise votre langue et vos choix de confidentialité.', details: 'Ces paramètres sont enregistrés dans ce navigateur pour vos prochaines visites.' },
      analytics: { title: 'Statistiques du site', description: 'Google Analytics nous aide à comprendre comment les visiteurs consultent les pages sur les hébergements, le jardin, les environs et les avis.', details: 'Ce service peut utiliser des cookies et collecter des données sur les visites, les interactions, le navigateur et l’appareil.' },
      maps: { title: 'Carte interactive', description: 'Google Maps indique l’emplacement de Vila Zizel sur la page consacrée à la propriété.', details: 'Le chargement de la carte connecte votre navigateur à Google, qui peut recevoir votre adresse IP et utiliser des cookies. Le lien d’itinéraire ouvre Google Maps lorsque vous le sélectionnez.' },
      weather: { title: 'Météo locale', description: 'Le widget météo affiche les prévisions pour Analipsi.', details: 'Notre serveur demande les données à MET Norway pour l’emplacement de la villa, identique pour tous les visiteurs.' },
      inquiries: { title: 'Demandes de réservation et de contact', description: 'Lorsque vous envoyez un formulaire, Vila Zizel utilise vos informations pour répondre à votre demande.', details: 'Netlify traite les formulaires envoyés, qui peuvent comprendre votre nom, votre adresse e-mail, vos dates de séjour et votre message.' },
    },
  },
};

export function privacyCopy(language: string) {
  return translations[language] ?? translations.en;
}
