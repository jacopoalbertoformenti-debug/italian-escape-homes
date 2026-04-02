/**
 * Italian Escapes Homes – Internationalization (i18n)
 * Languages: Italian (it), English (en), German (de)
 */

const IEH_TRANSLATIONS = {

  /* ═══════════════════════════════════════════════════════════════
     ITALIAN
  ═══════════════════════════════════════════════════════════════ */
  it: {
    /* ── Common ── */
    "common.book"            : "Prenota",
    "common.discover"        : "Scopri di più",
    "common.contact_us"      : "Contattaci",
    "common.scroll"          : "Scorri",
    "common.gallery_label"   : "Le foto",
    "common.gallery_title"   : "Galleria",
    "common.services_label"  : "Dotazioni",
    "common.location_label"  : "Dove siamo",
    "common.rooms_label"     : "Gli spazi",
    "common.rooms_title"     : "Dove dormirete",
    "common.book_airbnb"     : "Prenota su Airbnb",
    "common.book_booking"    : "Prenota su Booking",
    "common.all_properties"  : "Tutte le proprietà",
    "common.privacy"         : "Privacy Policy",
    "common.useful_links"    : "Link utili",
    "common.how_to_arrive"   : "Come arrivare",
    "common.bedrooms"        : "Camere da letto",
    "common.max_guests"      : "Ospiti max",
    "common.address"         : "Indirizzo",
    "common.nearby"          : "Attrazioni vicine",
    "common.airport"         : "Aeroporto di Malpensa",
    "common.book_stay"       : "Prenota il tuo soggiorno",
    "common.check_avail"     : "Controlla le disponibilità e prenota direttamente su Airbnb.<br>Per qualsiasi informazione siamo a tua disposizione.",
    "common.faq_label"       : "Domande frequenti",
    "common.faq_title"       : "Tutto quello che\nvuoi sapere",

    /* ── FAQ – Appartamento con Piscina ── */
    "pool.faq.q1" : "Dove si trova l'appartamento?",
    "pool.faq.a1" : "A Leggiuno, sul Lago Maggiore (VA), Lombardia. A soli 2 minuti in auto dalle spiagge del lago e a 30 minuti dall'aeroporto di Milano Malpensa.",
    "pool.faq.q2" : "C'è davvero una piscina?",
    "pool.faq.a2" : "Sì, piscina condominiale stagionale aperta fino al 15 settembre, con lettini e ombrelloni.",
    "pool.faq.q3" : "Quante persone può ospitare?",
    "pool.faq.a3" : "Fino a 4 persone: camera matrimoniale più zona soggiorno con letto aggiuntivo.",
    "pool.faq.q4" : "C'è il parcheggio?",
    "pool.faq.a4" : "Sì, posto auto privato incluso, con vista sul Lago Maggiore.",
    "pool.faq.q5" : "Come si prenota?",
    "pool.faq.a5" : "Direttamente su Airbnb o Booking.com. Risposta rapida garantita.",

    /* ── FAQ – Pool & Garden ── */
    "garden.faq.q1" : "La piscina è privata o condivisa?",
    "garden.faq.a1" : "Privata ed esclusiva per gli ospiti, con ampio giardino. Non condivisa con altri alloggi.",
    "garden.faq.q2" : "Si vede il Lago Maggiore?",
    "garden.faq.a2" : "Sì, vista panoramica sul Lago Maggiore dal giardino e dalla terrazza.",
    "garden.faq.q3" : "Quante camere ha la casa?",
    "garden.faq.a3" : "Due camere da letto per un totale di 4 posti letto, più soggiorno con accesso diretto al giardino.",
    "garden.faq.q4" : "Quanto dista da Milano e da Malpensa?",
    "garden.faq.a4" : "Circa 50 minuti da Milano e 30 minuti dall'aeroporto internazionale di Malpensa (MXP).",
    "garden.faq.q5" : "Come si prenota?",
    "garden.faq.a5" : "Direttamente su Airbnb. Per domande siamo disponibili via telefono o email.",

    /* ── FAQ – Casa Mariangela ── */
    "mari.faq.q1" : "Quanto dista Casa Mariangela dal mare?",
    "mari.faq.a1" : "Solo 30 metri dalla spiaggia di San Bartolomeo al Mare, sulla Riviera Ligure di Ponente.",
    "mari.faq.q2" : "C'è il parcheggio gratuito?",
    "mari.faq.a2" : "Sì, parcheggio privato gratuito incluso nel soggiorno. Nessun costo aggiuntivo.",
    "mari.faq.q3" : "Quante persone può ospitare?",
    "mari.faq.a3" : "Fino a 4 persone, con 2 camere da letto: una matrimoniale e una con letti singoli.",
    "mari.faq.q4" : "Dove si trova San Bartolomeo al Mare?",
    "mari.faq.a4" : "San Bartolomeo al Mare è un borgo sulla Riviera Ligure di Ponente, in provincia di Imperia, vicino a Diano Marina e Albenga.",
    "mari.faq.q5" : "Quali sono gli orari di check-in e check-out?",
    "mari.faq.a5" : "Check-in dalle 15:00, check-out entro le 10:00. Possibile concordare orari flessibili.",
    "mari.faq.q6" : "Come si prenota?",
    "mari.faq.a6" : "Direttamente su Airbnb. Per domande contattaci via telefono al 347 412 0611 o via email.",

    /* ── FAQ – Lake At Home ── */
    "lake.faq.q1" : "Lake At Home è vicino al lago?",
    "lake.faq.a1" : "Sì, si trova nel centro di Lecco, a pochi passi dal lungolago del Lago di Como.",
    "lake.faq.q2" : "Quante camere ha l'appartamento?",
    "lake.faq.a2" : "Due camere da letto con design contemporaneo, per un totale di 4 posti letto.",
    "lake.faq.q3" : "Quanto dista da Milano?",
    "lake.faq.a3" : "Circa 40-50 minuti da Milano in auto o in treno (stazione di Lecco, collegamento diretto).",
    "lake.faq.q4" : "Cosa si può visitare nelle vicinanze?",
    "lake.faq.a4" : "Lungolago di Lecco, Grigne, Valsassina, i paesi manzoniani, Varenna, Bellagio e tutto il Lago di Como.",
    "lake.faq.q5" : "Come si prenota?",
    "lake.faq.a5" : "Su Airbnb o Booking.com. L'appartamento è disponibile su entrambe le piattaforme.",

    /* ── Homepage meta ── */
    "home.meta.title"        : "Italian Escapes Homes – Soggiorni d'eccezione in Italia",
    "home.meta.desc"         : "Cinque alloggi selezionati tra mare, lago e montagna. Scopri le nostre proprietà in Liguria, Lago Maggiore, Lago di Como e Valmalenco.",

    /* ── Homepage nav ── */
    "home.nav.properties"    : "Le proprietà",
    "home.nav.destinations"  : "Destinazioni",
    "home.nav.contacts"      : "Contatti",

    /* ── Homepage hero ── */
    "home.hero.eyebrow"      : "Soggiorni d'eccezione in Italia",
    "home.hero.tagline"      : "Mare, lago e montagna — cinque case per cinque esperienze uniche",
    "home.hero.stat_prop"    : "Proprietà",
    "home.hero.stat_dest"    : "Destinazioni",
    "home.hero.stat_rating"  : "Su Airbnb",
    "home.hero.cta_discover" : "Scopri le case",

    /* ── Properties section ── */
    "home.props.label"       : "Le nostre case",
    "home.props.title"       : "Cinque proprietà,\nun'unica qualità",
    "home.props.intro"       : "Ogni alloggio è selezionato e curato personalmente per garantire il massimo comfort, in location uniche tra il mare ligure, i laghi e le Alpi.",

    /* ── Property cards ── */
    "home.card1.tipo"        : "B&B · Mare",
    "home.card1.desc"        : "A 30 metri dal mare nel cuore di San Bartolomeo al Mare. Appartamento con 2 camere da letto, aria condizionata, Wi-Fi e parcheggio gratuito. Una delle nostre proprietà con il punteggio più alto su Airbnb.",
    "home.card1.d1"          : "🏠 2 camere",
    "home.card1.d2"          : "👥 4 ospiti",
    "home.card1.d3"          : "🌊 30 m dal mare",
    "home.card1.d4"          : "🚗 Parcheggio",

    "home.card2.tipo"        : "Appartamento · Lago",
    "home.card2.desc"        : "In un residence panoramico immerso nel verde, a 2 minuti dal Lago Maggiore. Piscina stagionale, sentieri e vicinanza alle attrazioni locali.",
    "home.card2.d1"          : "👥 4 ospiti",
    "home.card2.d2"          : "🏊 Piscina",
    "home.card2.d3"          : "✈️ 30 min da Malpensa",

    "home.card3.tipo"        : "Casa · Lago",
    "home.card3.desc"        : "Alloggio tranquillo con piscina e ampio giardino privato, in un residence panoramico a 2 minuti dal Lago Maggiore e 30 minuti da Malpensa.",
    "home.card3.d1"          : "👥 4 ospiti",
    "home.card3.d2"          : "🏊 Piscina privata",
    "home.card3.d3"          : "🌿 Giardino",
    "home.card3.d4"          : "🌄 Vista lago",

    "home.card4.tipo"        : "Appartamento · Lago",
    "home.card4.desc"        : "Appartamento moderno nel cuore di Lecco, con vista spettacolare sui monti e sul lago. A pochi passi dal lungolago e dalla stazione.",
    "home.card4.d1"          : "👥 4 ospiti",
    "home.card4.d2"          : "⛵ Vista lago",
    "home.card4.d3"          : "🏠 Lecco",

    "home.card5.tipo"        : "Suite · Montagna",
    "home.card5.desc"        : "Una suite di charme ai piedi del Bernina, tra le Alpi della Valmalenco. Perfetta per chi cerca silenzio, natura e panorami alpini indimenticabili.",
    "home.card5.d1"          : "👥 4 ospiti",
    "home.card5.d2"          : "⛰ Montagna",
    "home.card5.d3"          : "🏟 Sci & natura",
    "home.card5.soon"        : "In preparazione",
    "home.card5.info"        : "Informazioni",

    /* ── Brand section ── */
    "home.brand.label"       : "Chi siamo",
    "home.brand.title"       : "La nostra filosofia",
    "home.brand.text"        : "Italian Escapes Homes nasce dalla passione per l'ospitalità autentica. Ogni proprietà è curata nei minimi dettagli per offrire un'esperienza unica, che si tratti di mare, lago o montagna.",
    "home.brand.v1.title"    : "Qualità",
    "home.brand.v1.text"     : "Alloggi selezionati e curati personalmente, con standard elevati in ogni dettaglio.",
    "home.brand.v2.title"    : "Posizioni uniche",
    "home.brand.v2.text"     : "Mare ligure, Lago Maggiore, Lago di Como e Alpi: le più belle cornici d'Italia.",
    "home.brand.v3.title"    : "Ospitalità",
    "home.brand.v3.text"     : "Risposta rapida, disponibilità e cura degli ospiti sono la nostra priorità.",
    "home.brand.v4.title"    : "Affidabilità",
    "home.brand.v4.text"     : "Oltre 50 recensioni su Airbnb con punteggi superiori a 4.6 su 5.",

    /* ── Destinations section ── */
    "home.dest.label"        : "Dove siamo",
    "home.dest.title"        : "Le nostre destinazioni",
    "home.dest.d1.count"     : "1 proprietà",
    "home.dest.d2.count"     : "2 proprietà",
    "home.dest.d3.count"     : "1 proprietà",
    "home.dest.d4.count"     : "1 proprietà",

    /* ── Contacts section ── */
    "home.contacts.label"    : "Scrivici",
    "home.contacts.title"    : "Contattaci",
    "home.contacts.text"     : "Per informazioni su disponibilità, prezzi o per qualsiasi domanda sulle nostre proprietà.",
    "home.contacts.c1.label" : "Telefono & WhatsApp",
    "home.contacts.c1.link"  : "Chiama ora →",
    "home.contacts.c2.label" : "Email",
    "home.contacts.c2.link"  : "Scrivi →",
    "home.contacts.c3.label" : "Airbnb",
    "home.contacts.c3.value" : "Tutte le proprietà",
    "home.contacts.c3.link"  : "Vedi su Airbnb →",

    /* ── Footer ── */
    "home.footer.tagline"    : "Cinque proprietà selezionate tra mare, lago e montagna. L'Italia più bella, a portata di casa.",
    "home.footer.col1"       : "Proprietà",
    "home.footer.col2"       : "Destinazioni",
    "home.footer.col3"       : "Contatti",
    "home.footer.bernina"    : "Bernina Apartment (presto)",
    "home.footer.copy"       : "© 2026 Italian Escapes Homes · Tutti i diritti riservati",
    "home.footer.cookie"     : "Questo sito non utilizza cookie di profilazione",

    /* ── Pool apartment meta ── */
    "pool.meta.title"        : "Appartamento con Piscina – Leggiuno, Lago Maggiore",
    "pool.meta.desc"         : "Affitto vacanze con piscina stagionale a Leggiuno, Lago Maggiore. 1 camera, 4 ospiti, parcheggio gratuito, Wi-Fi, 30 minuti da Malpensa.",

    /* ── Pool apartment nav ── */
    "pool.nav.about"         : "L'appartamento",
    "pool.nav.services"      : "Servizi",
    "pool.nav.gallery"       : "Galleria",
    "pool.nav.location"      : "Posizione",

    /* ── Pool apartment hero ── */
    "pool.hero.sub"          : "Un rifugio tranquillo immerso nel verde, a due passi dal Lago Maggiore e a 30 minuti da Malpensa",
    "pool.hero.rating"       : "<strong>4.68</strong> su 5 · 25 recensioni su Airbnb",

    /* ── Pool highlights ── */
    "pool.hl.pool.val"       : "Piscina",
    "pool.hl.pool.lbl"       : "Stagionale",
    "pool.hl.guests.lbl"     : "Ospiti max",
    "pool.hl.lake.val"       : "2 min",
    "pool.hl.lake.lbl"       : "Dal lago",
    "pool.hl.airport.val"    : "30 min",
    "pool.hl.airport.lbl"    : "Da Malpensa",

    /* ── Pool about ── */
    "pool.about.label"       : "Il tuo spazio",
    "pool.about.title"       : "Relax sul\nLago Maggiore",
    "pool.about.p1"          : "Rilassati con tutta la famiglia in questo alloggio tranquillo in residence con piscina stagionale (aperta fino al 15 settembre). L'appartamento si trova in un residence panoramico immerso nel verde, a soli 2 minuti dalle spiagge del lago.",
    "pool.about.p2"          : "La posizione è ideale per esplorare le bellezze del Lago Maggiore: l'eremo di Santa Caterina del Sasso, la funivia di Laveno e i sentieri naturalistici della zona sono tutti raggiungibili in pochi minuti. A 30 minuti dall'aeroporto di Malpensa, è perfetto anche per soggiorni di transito.",

    /* ── Pool bedrooms ── */
    "pool.room1.title"       : "Camera da letto",
    "pool.room1.text"        : "Ampia camera con letto matrimoniale, finestre luminose con vista sul verde del residence e armadio a muro.",
    "pool.room1.d1"          : "🌙 Letto matrimoniale",
    "pool.room1.d2"          : "🛟 Armadio",
    "pool.room1.d3"          : "💡 Vista verde",
    "pool.room2.title"       : "Soggiorno",
    "pool.room2.text"        : "Spazio open space con zona living, cucina attrezzata e letto aggiuntivo per ospiti extra. TV a schermo piatto inclusa.",
    "pool.room2.d1"          : "🛏 Letto aggiuntivo",
    "pool.room2.d2"          : "📺 Smart TV",
    "pool.room2.d3"          : "🍽 Cucina attrezzata",

    /* ── Pool services ── */
    "pool.svc.label"         : "Dotazioni",
    "pool.svc.title"         : "Tutto il comfort\nche cerchi",
    "pool.svc.s1.title"      : "Piscina stagionale",
    "pool.svc.s1.text"       : "Piscina condominiale aperta fino al 15 settembre, con lettini e ombrelloni.",
    "pool.svc.s2.title"      : "Parcheggio gratuito",
    "pool.svc.s2.text"       : "Posto auto privato incluso con vista sul Lago Maggiore.",
    "pool.svc.s3.title"      : "Wi-Fi gratuito",
    "pool.svc.s3.text"       : "Connessione internet ad alta velocità in tutto l'appartamento.",
    "pool.svc.s4.title"      : "Cucina attrezzata",
    "pool.svc.s4.text"       : "Cucina completa con piano cottura, frigorifero, lavastoviglie e tutto l'occorrente.",
    "pool.svc.s5.title"      : "Smart TV",
    "pool.svc.s5.text"       : "Televisore a schermo piatto con accesso ai principali servizi streaming.",
    "pool.svc.s6.title"      : "Vista lago",
    "pool.svc.s6.text"       : "Parcheggio con affaccio sul Lago Maggiore e residence immerso nel verde panoramico.",

    /* ── Pool location ── */
    "pool.loc.title"         : "Leggiuno,\nLago Maggiore",
    "pool.loc.lake.title"    : "Lago Maggiore",
    "pool.loc.lake.text"     : "A 2 minuti in auto dalle spiagge del lago. Accesso diretto a sentieri e aree naturalistiche.",
    "pool.loc.airport.text"  : "Solo 30 minuti di auto dall'aeroporto internazionale di Milano Malpensa (MXP).",
    "pool.loc.nearby.text"   : "Eremo di Santa Caterina del Sasso, funivia di Laveno, Isole Borromee, Stresa.",

    /* ── Pool CTA ── */
    "pool.cta.title"         : "Pronto a rilassarti\nsul lago?",

    /* ── Pool footer ── */
    "pool.footer.tagline"    : "Via XXIV Maggio 84, Leggiuno (VA)\nLago Maggiore · 30 min da Malpensa",

    /* ── Casa Mariangela meta ── */
    "mari.meta.title"        : "B&B Casa Mariangela – San Bartolomeo al Mare, Liguria",
    "mari.meta.desc"         : "Affitto vacanze con 2 camere a 30 metri dal mare nel cuore di San Bartolomeo al Mare. Parcheggio gratuito, Wi-Fi, aria condizionata. 4.97/5 stelle su Airbnb. Prenota online.",

    /* ── Casa Mariangela nav ── */
    "mari.nav.about"         : "L'appartamento",
    "mari.nav.rooms"         : "Camere",
    "mari.nav.services"      : "Servizi",
    "mari.nav.location"      : "Posizione",
    "mari.nav.gallery"       : "Galleria",
    "mari.nav.reviews"       : "Recensioni",
    "mari.nav.contacts"      : "Contatti",
    "mari.nav.check"         : "Controlla disponibilità",

    /* ── Casa Mariangela hero ── */
    "mari.hero.sub"          : "A soli 30 metri dal mare, nel cuore della Riviera Ligure di Ponente",
    "mari.hero.rating"       : "<strong>4.97</strong> su 5 · 29 recensioni su Airbnb",

    /* ── Casa Mariangela highlights ── */
    "mari.hl.sea.lbl"        : "dal mare",
    "mari.hl.rating.lbl"     : "Punteggio Airbnb",
    "mari.hl.rooms.lbl"      : "Camere da letto",
    "mari.hl.parking.val"    : "Free",
    "mari.hl.parking.lbl"    : "Parcheggio",

    /* ── Casa Mariangela about ── */
    "mari.about.label"       : "L'appartamento",
    "mari.about.title"       : "La tua casa\nsul mare",
    "mari.about.p1"          : "Vivi la tua splendida vacanza in questo accogliente appartamento a 30 metri dal mare, nel centro di San Bartolomeo al Mare. Un'oasi di comfort e stile, con tutto il necessario per un soggiorno indimenticabile sulla Riviera Ligure di Ponente.",
    "mari.about.p2"          : "L'appartamento è curato in ogni dettaglio per farti sentire come a casa, con un'atmosfera calda e accogliente che ti accoglie fin dal primo momento.",
    "mari.about.f1"          : "🏠 Appartamento intero",
    "mari.about.f2"          : "👥 Fino a 4 ospiti",
    "mari.about.f3"          : "🌊 30 m dal mare",
    "mari.about.f4"          : "🚗 Parcheggio gratuito",
    "mari.about.f5"          : "🌿 Liguria",

    /* ── Casa Mariangela rooms ── */
    "mari.rooms.label"       : "Le camere",
    "mari.rooms.title"       : "Due camere, tutto il comfort",
    "mari.room1.title"       : "Camera Principale",
    "mari.room1.text"        : "Spaziosa e luminosa, arredata con cura per garantire il massimo del comfort. Perfetta per una coppia in cerca di relax e tranquillità.",
    "mari.room1.d1"          : "🌙 Letto matrimoniale",
    "mari.room1.d2"          : "🛟 Armadio",
    "mari.room1.d3"          : "💡 Vista",
    "mari.room2.title"       : "Seconda Camera",
    "mari.room2.text"        : "Accogliente e versatile, ideale per bambini o ospiti aggiuntivi. Arredata con gusto in uno stile fresco e moderno.",
    "mari.room2.d1"          : "🌙 Letti singoli",
    "mari.room2.d2"          : "🛟 Armadio",
    "mari.room2.d3"          : "💡 Luminosa",

    /* ── Casa Mariangela services ── */
    "mari.svc.label"         : "Cosa offriamo",
    "mari.svc.title"         : "Tutti i comfort\nper la tua vacanza",
    "mari.svc.s1"            : "Vicinissimo al mare",
    "mari.svc.s2"            : "Parcheggio gratuito",
    "mari.svc.s3"            : "Bagno privato",
    "mari.svc.s4"            : "Cucina attrezzata",
    "mari.svc.s5"            : "Aria condizionata",
    "mari.svc.s6"            : "Wi-Fi gratuito",
    "mari.svc.s7"            : "Lavatrice",
    "mari.svc.s8"            : "Biancheria inclusa",

    /* ── Casa Mariangela location ── */
    "mari.loc.title"         : "Nel cuore di\nSan Bartolomeo al Mare",
    "mari.loc.sea.title"     : "Dal mare",
    "mari.loc.sea.text"      : "Solo 30 metri dalla spiaggia. Puoi sentire il profumo del mare direttamente dall'appartamento.",
    "mari.loc.parking.title" : "Parcheggio",
    "mari.loc.parking.text"  : "Parcheggio gratuito incluso nel soggiorno. Nessun pensiero per la tua auto.",
    "mari.loc.nearby.title"  : "Nei dintorni",
    "mari.loc.nearby.text"   : "Ristoranti, gelaterie e negozi a pochi passi. Tutto a portata di mano.",

    /* ── Casa Mariangela reviews ── */
    "mari.rev.label"         : "Cosa dicono gli ospiti",
    "mari.rev.title"         : "Recensioni",

    /* ── Casa Mariangela footer ── */
    "mari.footer.tagline"    : "Via Colombo 16, San Bartolomeo al Mare (IM)\nRiviera Ligure di Ponente · Liguria",
    "mari.footer.col1"       : "Navigazione",
    "mari.footer.col2"       : "Informazioni",

    /* ── Casa Mariangela location/reviews/contacts/CTA extras ── */
    "mari.loc.addr.text"     : "Via Colombo 16<br>18016 San Bartolomeo al Mare (IM)<br>Liguria, Italia",
    "mari.rev.btn"           : "Leggi tutte le recensioni su Airbnb",
    "mari.cont.label"        : "Hai domande?",
    "mari.cont.title"        : "Contattaci",
    "mari.cont.text"         : "Siamo a tua disposizione per qualsiasi informazione sul soggiorno, le disponibilità o i servizi offerti.",
    "mari.cont.phone.lbl"    : "Telefono &amp; WhatsApp",
    "mari.cont.phone.link"   : "Chiama ora →",
    "mari.cont.email.lbl"    : "Email",
    "mari.cont.email.link"   : "Scrivi un messaggio →",
    "mari.cont.book.lbl"     : "Prenota online",
    "mari.cont.book.link"    : "Vai all'annuncio →",
    "mari.cta.label"         : "Pronti per partire?",
    "mari.cta.title"         : "Prenota il tuo soggiorno",
    "mari.cta.text"          : "Controlla le date disponibili e prenota direttamente su Airbnb. Risposta rapida garantita!",
    "mari.cta.btn"           : "Controlla disponibilità su Airbnb",

    /* ── Lake At Home meta ── */
    "lake.meta.title"        : "Lake At Home – Appartamento con Vista Lago, Lecco (Lago di Como)",
    "lake.meta.desc"         : "Appartamento moderno ristrutturato nel centro di Lecco, Lago di Como. Vista sui monti e sul lago, 2 camere, 4 ospiti, Wi-Fi, aria condizionata. A pochi passi dal lungolago.",

    /* ── Lake At Home nav ── */
    "lake.nav.about"         : "L'appartamento",
    "lake.nav.services"      : "Servizi",
    "lake.nav.gallery"       : "Galleria",
    "lake.nav.location"      : "Posizione",

    /* ── Lake At Home hero ── */
    "lake.hero.sub"          : "Appartamento moderno nel cuore di Lecco, con vista sui monti e a pochi passi dal lungolago",
    "lake.hero.rating"       : "Eccellente · Su Airbnb",

    /* ── Lake highlights ── */
    "lake.hl.view.val"       : "Vista",
    "lake.hl.view.lbl"       : "Lago & Monti",
    "lake.hl.guests.lbl"     : "Ospiti max",
    "lake.hl.rooms.val"      : "2",
    "lake.hl.rooms.lbl"      : "Camere da letto",
    "lake.hl.center.val"     : "Centro",
    "lake.hl.center.lbl"     : "Di Lecco",

    /* ── Lake about ── */
    "lake.about.label"       : "Il tuo spazio",
    "lake.about.title"       : "Vivi Lecco\ncome a casa",
    "lake.about.p1"          : "Un appartamento di design completamente ristrutturato nel cuore di Lecco, con finiture moderne e materiali di qualità. Dalle finestre si apre una vista spettacolare sui monti e sul lago, che al tramonto regala colori unici.",
    "lake.about.p2"          : "La posizione è ideale per esplorare il Lago di Como e la Valsassina: il lungolago, la Piazza XX Settembre e la stazione ferroviaria sono a pochi minuti a piedi. Perfetto per coppie e famiglie che vogliono vivere la città con tutto il comfort di casa.",

    /* ── Lake bedrooms ── */
    "lake.room1.title"       : "Camera da letto",
    "lake.room1.text"        : "Ampia camera con letto matrimoniale, armadio a muro e finestra con vista sul quartiere storico di Lecco.",
    "lake.room1.d1"          : "🌙 Letto matrimoniale",
    "lake.room1.d2"          : "🛟 Armadio a muro",
    "lake.room1.d3"          : "💡 Vista città",
    "lake.room2.title"       : "Soggiorno",
    "lake.room2.text"        : "Spazioso living con divano, smart TV e zona pranzo. Il divano è convertibile per ospitare fino a 4 persone in totale.",
    "lake.room2.d1"          : "🛏 Divano letto",
    "lake.room2.d2"          : "📺 Smart TV",
    "lake.room2.d3"          : "🍽 Zona pranzo",

    /* ── Lake services ── */
    "lake.svc.label"         : "Dotazioni",
    "lake.svc.title"         : "Tutto quello che ti serve",
    "lake.svc.s1.title"      : "Design moderno",
    "lake.svc.s1.text"       : "Appartamento completamente ristrutturato con finiture di qualità e arredi contemporanei.",
    "lake.svc.s2.title"      : "Smart TV & Wi-Fi",
    "lake.svc.s2.text"       : "Connessione Wi-Fi veloce e smart TV per intrattenersi dopo una giornata sul lago.",
    "lake.svc.s3.title"      : "Cucina attrezzata",
    "lake.svc.s3.text"       : "Cucina completa con piano cottura a gas, forno, frigorifero e tutto l'occorrente.",
    "lake.svc.s4.title"      : "Lavatrice",
    "lake.svc.s4.text"       : "Lavatrice disponibile per soggiorni più lunghi.",
    "lake.svc.s5.title"      : "Aria condizionata",
    "lake.svc.s5.text"       : "Climatizzatore per un soggiorno confortevole in ogni stagione.",
    "lake.svc.s6.title"      : "Posizione centrale",
    "lake.svc.s6.text"       : "A pochi minuti a piedi dal lungolago, dalla stazione e dai principali servizi.",

    /* ── Lake location ── */
    "lake.loc.title"         : "Lecco,\nLago di Como",
    "lake.loc.lake.title"    : "Lago di Como",
    "lake.loc.lake.text"     : "A pochi minuti a piedi dal lungolago di Lecco, punto di partenza per escursioni e gite in barca.",
    "lake.loc.train.title"   : "Stazione ferroviaria",
    "lake.loc.train.text"    : "La stazione di Lecco è a pochi minuti a piedi, con collegamenti diretti per Milano e altre città.",
    "lake.loc.nearby.text"   : "Varenna, Bellagio, Menaggio, Abbazia di Piona, sentieri della Valsassina.",

    /* ── Lake gallery ── */
    "lake.gallery.label"     : "Immagini",
    "lake.gallery.title"     : "Scopri gli spazi",

    /* ── Lake CTA ── */
    "lake.cta.title"         : "Pronto a vivere\nil Lago di Como?",
    "lake.cta.text"          : "Controlla le disponibilità e prenota direttamente su Airbnb o Booking.<br>Per qualsiasi informazione siamo a tua disposizione.",

    /* ── Lake footer ── */
    "lake.footer.tagline"    : "Via Pasubio 17, Lecco\nLago di Como · Centro città",

    /* ── Pool & Garden meta ── */
    "garden.meta.title"      : "Casa Mariangela: Pool & Garden – Leggiuno, Lago Maggiore",
    "garden.meta.desc"       : "Casa con piscina privata e giardino panoramico a Leggiuno, Lago Maggiore. 2 camere, 4 ospiti, vista lago, parcheggio privato. 30 minuti da Milano Malpensa.",

    /* ── Pool & Garden nav ── */
    "garden.nav.about"       : "La casa",
    "garden.nav.rooms"       : "Le camere",
    "garden.nav.services"    : "Servizi",
    "garden.nav.gallery"     : "Galleria",
    "garden.nav.location"    : "Posizione",

    /* ── Pool & Garden hero ── */
    "garden.hero.sub"        : "Piscina privata, giardino panoramico e vista mozzafiato sul Lago Maggiore a Leggiuno",

    /* ── Pool & Garden highlights ── */
    "garden.hl.pool.val"     : "Piscina",
    "garden.hl.pool.lbl"     : "Privata",
    "garden.hl.guests.lbl"   : "Ospiti max",
    "garden.hl.rooms.lbl"    : "Camere da letto",
    "garden.hl.airport.lbl"  : "Da Malpensa",

    /* ── Pool & Garden about ── */
    "garden.about.label"     : "La tua casa",
    "garden.about.title"     : "Relax con piscina\nsul Lago Maggiore",
    "garden.about.p1"        : "Una casa indipendente con piscina privata e ampio giardino, in un residence panoramico a Leggiuno. La terrazza e il giardino offrono una vista mozzafiato sul Lago Maggiore e sulle Alpi circostanti.",
    "garden.about.p2"        : "Ideale per famiglie e gruppi che cercano privacy e relax. A 2 minuti dalle spiagge del lago e 30 minuti dall'aeroporto di Malpensa, è la base perfetta per esplorare il Lago Maggiore.",

    /* ── Pool & Garden rooms ── */
    "garden.rooms.label"     : "Le camere",
    "garden.rooms.title"     : "Due camere, tutto il comfort",
    "garden.room1.title"     : "Camera matrimoniale",
    "garden.room1.text"      : "Spaziosa camera matrimoniale con armadio e finestre che si affacciano sul giardino privato.",
    "garden.room1.d1"        : "🌙 Letto matrimoniale",
    "garden.room1.d2"        : "🛟 Armadio",
    "garden.room1.d3"        : "🌿 Vista giardino",
    "garden.room2.title"     : "Soggiorno & seconda camera",
    "garden.room2.text"      : "Spazioso soggiorno con divano letto, TV e accesso diretto al giardino privato con vista sul verde.",
    "garden.room2.d1"        : "🛏 Divano letto",
    "garden.room2.d2"        : "📺 Smart TV",
    "garden.room2.d3"        : "🌿 Giardino",

    /* ── Pool & Garden services ── */
    "garden.svc.label"       : "Dotazioni",
    "garden.svc.title"       : "Tutto il comfort\nche cerchi",
    "garden.svc.s1.title"    : "Piscina privata",
    "garden.svc.s1.text"     : "Piscina ad uso esclusivo degli ospiti, con area solarium e lettini.",
    "garden.svc.s2.title"    : "Giardino privato",
    "garden.svc.s2.text"     : "Ampio giardino privato con tavolo esterno, perfetto per cene all'aperto.",
    "garden.svc.s3.title"    : "Parcheggio privato",
    "garden.svc.s3.text"     : "Posto auto privato incluso nel soggiorno.",
    "garden.svc.s4.title"    : "Cucina attrezzata",
    "garden.svc.s4.text"     : "Cucina rustica completa con forno, lavastoviglie e tutto l'occorrente per cucinare.",
    "garden.svc.s5.title"    : "Wi-Fi gratuito",
    "garden.svc.s5.text"     : "Connessione internet inclusa in tutta la casa.",
    "garden.svc.s6.title"    : "Vista panoramica",
    "garden.svc.s6.text"     : "Vista mozzafiato sul Lago Maggiore e sulle montagne circostanti.",

    /* ── Pool & Garden location ── */
    "garden.loc.title"       : "Leggiuno,\nLago Maggiore",
    "garden.loc.lake.title"  : "Lago Maggiore",
    "garden.loc.lake.text"   : "A 2 minuti dalle spiagge. Vista panoramica sul lago e sulle Alpi dalla proprietà.",
    "garden.loc.airport.text": "30 minuti di auto dall'aeroporto internazionale di Milano Malpensa (MXP).",
    "garden.loc.nearby.text" : "Eremo di Santa Caterina del Sasso, funivia di Laveno, Isole Borromee, Stresa.",

    /* ── Pool & Garden CTA ── */
    "garden.cta.title"       : "Pronto a goderti\nil lago?",

    /* ── Pool & Garden footer ── */
    "garden.footer.tagline"  : "Via XXIV Maggio 21, Leggiuno (VA)\nLago Maggiore · 30 min da Malpensa",
    "garden.footer.col1"     : "Link utili",
    "garden.footer.f1"       : "La casa",
    "garden.footer.f2"       : "Le camere",
    "garden.footer.f3"       : "Galleria",
    "garden.footer.f4"       : "Come arrivare",
  },


  /* ═══════════════════════════════════════════════════════════════
     ENGLISH
  ═══════════════════════════════════════════════════════════════ */
  en: {
    /* ── Common ── */
    "common.book"            : "Book",
    "common.discover"        : "Discover more",
    "common.contact_us"      : "Contact us",
    "common.scroll"          : "Scroll",
    "common.gallery_label"   : "Photos",
    "common.gallery_title"   : "Gallery",
    "common.services_label"  : "Amenities",
    "common.location_label"  : "Location",
    "common.rooms_label"     : "Sleeping spaces",
    "common.rooms_title"     : "Where you'll sleep",
    "common.book_airbnb"     : "Book on Airbnb",
    "common.book_booking"    : "Book on Booking.com",
    "common.all_properties"  : "All properties",
    "common.privacy"         : "Privacy Policy",
    "common.useful_links"    : "Useful links",
    "common.how_to_arrive"   : "How to get here",
    "common.bedrooms"        : "Bedrooms",
    "common.max_guests"      : "Max guests",
    "common.address"         : "Address",
    "common.nearby"          : "Nearby attractions",
    "common.airport"         : "Malpensa Airport",
    "common.book_stay"       : "Book your stay",
    "common.check_avail"     : "Check availability and book directly on Airbnb.<br>We are here for any questions you may have.",
    "common.faq_label"       : "Frequently asked questions",
    "common.faq_title"       : "Everything you\nneed to know",

    /* ── FAQ – Appartamento con Piscina ── */
    "pool.faq.q1" : "Where is the apartment located?",
    "pool.faq.a1" : "In Leggiuno, on Lake Maggiore, Lombardy. Just 2 minutes by car from the lake beaches and 30 minutes from Milan Malpensa Airport.",
    "pool.faq.q2" : "Is there really a swimming pool?",
    "pool.faq.a2" : "Yes, a shared seasonal pool open until 15 September, with sun loungers and umbrellas.",
    "pool.faq.q3" : "How many guests does it sleep?",
    "pool.faq.a3" : "Up to 4 guests: one double bedroom plus a living area with an extra bed.",
    "pool.faq.q4" : "Is there parking?",
    "pool.faq.a4" : "Yes, a private parking space is included, with a view over Lake Maggiore.",
    "pool.faq.q5" : "How do I book?",
    "pool.faq.a5" : "Directly on Airbnb or Booking.com. Fast response guaranteed.",

    /* ── FAQ – Pool & Garden ── */
    "garden.faq.q1" : "Is the pool private or shared?",
    "garden.faq.a1" : "Fully private and exclusive for guests, with a large garden. Not shared with other properties.",
    "garden.faq.q2" : "Can you see Lake Maggiore?",
    "garden.faq.a2" : "Yes, panoramic views over Lake Maggiore from the garden and terrace.",
    "garden.faq.q3" : "How many bedrooms does the house have?",
    "garden.faq.a3" : "Two bedrooms sleeping up to 4 guests, plus a living room with direct garden access.",
    "garden.faq.q4" : "How far is it from Milan and Malpensa Airport?",
    "garden.faq.a4" : "About 50 minutes from Milan and 30 minutes from Milan Malpensa International Airport (MXP).",
    "garden.faq.q5" : "How do I book?",
    "garden.faq.a5" : "Directly on Airbnb. For questions we are available by phone or email.",

    /* ── FAQ – Casa Mariangela ── */
    "mari.faq.q1" : "How far is Casa Mariangela from the sea?",
    "mari.faq.a1" : "Just 30 metres from the beach at San Bartolomeo al Mare, on the Ligurian Riviera di Ponente.",
    "mari.faq.q2" : "Is free parking included?",
    "mari.faq.a2" : "Yes, a private parking space is included with your stay at no extra charge.",
    "mari.faq.q3" : "How many guests does it sleep?",
    "mari.faq.a3" : "Up to 4 guests, with 2 bedrooms: one double and one with twin beds.",
    "mari.faq.q4" : "Where is San Bartolomeo al Mare?",
    "mari.faq.a4" : "San Bartolomeo al Mare is a seaside village on the Ligurian Riviera di Ponente, in the province of Imperia, near Diano Marina and Albenga.",
    "mari.faq.q5" : "What are the check-in and check-out times?",
    "mari.faq.a5" : "Check-in from 15:00, check-out by 10:00. Flexible times can be arranged on request.",
    "mari.faq.q6" : "How do I book?",
    "mari.faq.a6" : "Directly on Airbnb. For questions contact us by phone at +39 347 412 0611 or by email.",

    /* ── FAQ – Lake At Home ── */
    "lake.faq.q1" : "Is Lake At Home close to the lake?",
    "lake.faq.a1" : "Yes, it is located in the heart of Lecco, steps from the Lake Como waterfront promenade.",
    "lake.faq.q2" : "How many bedrooms does the apartment have?",
    "lake.faq.a2" : "Two bedrooms with contemporary design, sleeping up to 4 guests.",
    "lake.faq.q3" : "How far is it from Milan?",
    "lake.faq.a3" : "About 40–50 minutes from Milan by car or train (Lecco station, direct connection).",
    "lake.faq.q4" : "What is there to see nearby?",
    "lake.faq.a4" : "Lecco lakefront, Grigne mountains, Valsassina valley, Manzoni villages, Varenna, Bellagio and all of Lake Como.",
    "lake.faq.q5" : "How do I book?",
    "lake.faq.a5" : "On Airbnb or Booking.com. The apartment is available on both platforms.",

    /* ── Homepage meta ── */
    "home.meta.title"        : "Italian Escapes Homes – Exceptional holiday rentals in Italy",
    "home.meta.desc"         : "Five handpicked vacation homes on the sea, lakes and mountains. Holiday rentals in Liguria, Lake Maggiore, Lake Como and the Alps. Rated 4.8+ on Airbnb.",

    /* ── Homepage nav ── */
    "home.nav.properties"    : "Properties",
    "home.nav.destinations"  : "Destinations",
    "home.nav.contacts"      : "Contact",

    /* ── Homepage hero ── */
    "home.hero.eyebrow"      : "Exceptional stays in Italy",
    "home.hero.tagline"      : "Sea, lake and mountains — five homes for five unique experiences",
    "home.hero.stat_prop"    : "Properties",
    "home.hero.stat_dest"    : "Destinations",
    "home.hero.stat_rating"  : "On Airbnb",
    "home.hero.cta_discover" : "Discover our homes",

    /* ── Properties section ── */
    "home.props.label"       : "Our homes",
    "home.props.title"       : "Five properties,\none standard of quality",
    "home.props.intro"       : "Each accommodation is personally selected and managed to ensure maximum comfort, in unique locations along the Ligurian coast, the Italian lakes, and the Alps.",

    /* ── Property cards ── */
    "home.card1.tipo"        : "B&B · Seaside",
    "home.card1.desc"        : "Just 30 metres from the sea in the heart of San Bartolomeo al Mare. Apartment with 2 bedrooms, air conditioning, Wi-Fi and free parking. One of our highest-rated properties on Airbnb.",
    "home.card1.d1"          : "🏠 2 bedrooms",
    "home.card1.d2"          : "👥 4 guests",
    "home.card1.d3"          : "🌊 30 m from sea",
    "home.card1.d4"          : "🚗 Parking",

    "home.card2.tipo"        : "Apartment · Lake",
    "home.card2.desc"        : "In a panoramic residence surrounded by greenery, 2 minutes from Lake Maggiore. Seasonal pool, walking trails and easy access to local attractions.",
    "home.card2.d1"          : "👥 4 guests",
    "home.card2.d2"          : "🏊 Pool",
    "home.card2.d3"          : "✈️ 30 min from Malpensa",

    "home.card3.tipo"        : "House · Lake",
    "home.card3.desc"        : "Peaceful holiday home with private pool and large garden in a panoramic residence, 2 minutes from Lake Maggiore and 30 minutes from Malpensa Airport.",
    "home.card3.d1"          : "👥 4 guests",
    "home.card3.d2"          : "🏊 Private pool",
    "home.card3.d3"          : "🌿 Garden",
    "home.card3.d4"          : "🌄 Lake view",

    "home.card4.tipo"        : "Apartment · Lake",
    "home.card4.desc"        : "Modern apartment in the heart of Lecco, with spectacular views of the mountains and Lake Como. A short walk from the lakefront promenade and train station.",
    "home.card4.d1"          : "👥 4 guests",
    "home.card4.d2"          : "⛵ Lake view",
    "home.card4.d3"          : "🏠 Lecco",

    "home.card5.tipo"        : "Suite · Mountains",
    "home.card5.desc"        : "A charming mountain suite at the foot of the Bernina massif in the Valmalenco Alps. Perfect for those seeking silence, nature and unforgettable alpine scenery.",
    "home.card5.d1"          : "👥 4 guests",
    "home.card5.d2"          : "⛰ Mountains",
    "home.card5.d3"          : "🏟 Ski & nature",
    "home.card5.soon"        : "Coming soon",
    "home.card5.info"        : "More info",

    /* ── Brand section ── */
    "home.brand.label"       : "About us",
    "home.brand.title"       : "Our philosophy",
    "home.brand.text"        : "Italian Escapes Homes was born from a passion for authentic hospitality. Every property is carefully curated to offer a unique experience, whether by the sea, on the lakes or in the mountains.",
    "home.brand.v1.title"    : "Quality",
    "home.brand.v1.text"     : "Personally selected and managed accommodations, with high standards in every detail.",
    "home.brand.v2.title"    : "Unique locations",
    "home.brand.v2.text"     : "The Ligurian coast, Lake Maggiore, Lake Como and the Alps: Italy's most beautiful settings.",
    "home.brand.v3.title"    : "Hospitality",
    "home.brand.v3.text"     : "Quick responses, attentiveness and genuine care for our guests are our top priority.",
    "home.brand.v4.title"    : "Reliability",
    "home.brand.v4.text"     : "Over 50 Airbnb reviews with scores above 4.6 out of 5.",

    /* ── Destinations section ── */
    "home.dest.label"        : "Where we are",
    "home.dest.title"        : "Our destinations",
    "home.dest.d1.count"     : "1 property",
    "home.dest.d2.count"     : "2 properties",
    "home.dest.d3.count"     : "1 property",
    "home.dest.d4.count"     : "1 property",

    /* ── Contacts section ── */
    "home.contacts.label"    : "Get in touch",
    "home.contacts.title"    : "Contact us",
    "home.contacts.text"     : "For information on availability, prices or any questions about our properties.",
    "home.contacts.c1.label" : "Phone & WhatsApp",
    "home.contacts.c1.link"  : "Call now →",
    "home.contacts.c2.label" : "Email",
    "home.contacts.c2.link"  : "Write to us →",
    "home.contacts.c3.label" : "Airbnb",
    "home.contacts.c3.value" : "All properties",
    "home.contacts.c3.link"  : "View on Airbnb →",

    /* ── Footer ── */
    "home.footer.tagline"    : "Five handpicked vacation homes on the sea, lakes and mountains. The best of Italy, within your reach.",
    "home.footer.col1"       : "Properties",
    "home.footer.col2"       : "Destinations",
    "home.footer.col3"       : "Contact",
    "home.footer.bernina"    : "Bernina Apartment (coming soon)",
    "home.footer.copy"       : "© 2026 Italian Escapes Homes · All rights reserved",
    "home.footer.cookie"     : "This website does not use profiling cookies",

    /* ── Pool apartment meta ── */
    "pool.meta.title"        : "Apartment with Swimming Pool – Leggiuno, Lake Maggiore, Italy",
    "pool.meta.desc"         : "Holiday rental with seasonal pool in Leggiuno, Lake Maggiore. 1 bedroom, 4 guests, free parking, Wi-Fi, 30 minutes from Milan Malpensa Airport. Book on Airbnb.",

    /* ── Pool apartment nav ── */
    "pool.nav.about"         : "The apartment",
    "pool.nav.services"      : "Amenities",
    "pool.nav.gallery"       : "Gallery",
    "pool.nav.location"      : "Location",

    /* ── Pool apartment hero ── */
    "pool.hero.sub"          : "A peaceful retreat surrounded by greenery, steps from Lake Maggiore and 30 minutes from Malpensa Airport",
    "pool.hero.rating"       : "<strong>4.68</strong> out of 5 · 25 reviews on Airbnb",

    /* ── Pool highlights ── */
    "pool.hl.pool.val"       : "Pool",
    "pool.hl.pool.lbl"       : "Seasonal",
    "pool.hl.guests.lbl"     : "Max guests",
    "pool.hl.lake.val"       : "2 min",
    "pool.hl.lake.lbl"       : "From the lake",
    "pool.hl.airport.val"    : "30 min",
    "pool.hl.airport.lbl"    : "From Malpensa",

    /* ── Pool about ── */
    "pool.about.label"       : "Your space",
    "pool.about.title"       : "Relax on\nLake Maggiore",
    "pool.about.p1"          : "Relax with the whole family in this peaceful apartment in a residence with a seasonal pool (open until 15 September). Set in a panoramic green complex, it's just 2 minutes from the lake shores.",
    "pool.about.p2"          : "The location is ideal for exploring Lake Maggiore: the Hermitage of Santa Caterina del Sasso, the Laveno cable car and the natural trails of the area are all just minutes away. Only 30 minutes from Milan Malpensa Airport, it's also perfect for transit stays.",

    /* ── Pool bedrooms ── */
    "pool.room1.title"       : "Bedroom",
    "pool.room1.text"        : "Spacious double bedroom with bright windows overlooking the green of the residence and a built-in wardrobe.",
    "pool.room1.d1"          : "🌙 Double bed",
    "pool.room1.d2"          : "🛟 Wardrobe",
    "pool.room1.d3"          : "💡 Garden view",
    "pool.room2.title"       : "Living room",
    "pool.room2.text"        : "Open-plan living area with lounge, fully equipped kitchen and an extra bed for additional guests. Flat-screen TV included.",
    "pool.room2.d1"          : "🛏 Extra bed",
    "pool.room2.d2"          : "📺 Smart TV",
    "pool.room2.d3"          : "🍽 Equipped kitchen",

    /* ── Pool services ── */
    "pool.svc.label"         : "Amenities",
    "pool.svc.title"         : "All the comfort\nyou need",
    "pool.svc.s1.title"      : "Seasonal pool",
    "pool.svc.s1.text"       : "Shared pool open until 15 September, with sun loungers and umbrellas.",
    "pool.svc.s2.title"      : "Free parking",
    "pool.svc.s2.text"       : "Private parking space included, with views over Lake Maggiore.",
    "pool.svc.s3.title"      : "Free Wi-Fi",
    "pool.svc.s3.text"       : "High-speed internet connection throughout the apartment.",
    "pool.svc.s4.title"      : "Equipped kitchen",
    "pool.svc.s4.text"       : "Full kitchen with hob, fridge, dishwasher and everything you need.",
    "pool.svc.s5.title"      : "Smart TV",
    "pool.svc.s5.text"       : "Flat-screen TV with access to major streaming services.",
    "pool.svc.s6.title"      : "Lake view",
    "pool.svc.s6.text"       : "Parking area overlooking Lake Maggiore and residence surrounded by panoramic greenery.",

    /* ── Pool location ── */
    "pool.loc.title"         : "Leggiuno,\nLake Maggiore",
    "pool.loc.lake.title"    : "Lake Maggiore",
    "pool.loc.lake.text"     : "Just 2 minutes by car from the lake shores. Direct access to walking trails and nature reserves.",
    "pool.loc.airport.text"  : "Only 30 minutes by car from Milan Malpensa International Airport (MXP).",
    "pool.loc.nearby.text"   : "Santa Caterina del Sasso Hermitage, Laveno cable car, Borromean Islands, Stresa.",

    /* ── Pool CTA ── */
    "pool.cta.title"         : "Ready to relax\non the lake?",

    /* ── Pool footer ── */
    "pool.footer.tagline"    : "Via XXIV Maggio 84, Leggiuno (VA)\nLake Maggiore · 30 min from Malpensa",

    /* ── Casa Mariangela meta ── */
    "mari.meta.title"        : "B&B Casa Mariangela – San Bartolomeo al Mare, Ligurian Riviera, Italy",
    "mari.meta.desc"         : "Beachfront holiday rental 30 metres from the sea in San Bartolomeo al Mare, Liguria. 2 bedrooms, free parking, Wi-Fi, air conditioning. Rated 4.97/5 on Airbnb. Book online.",

    /* ── Casa Mariangela nav ── */
    "mari.nav.about"         : "The apartment",
    "mari.nav.rooms"         : "Bedrooms",
    "mari.nav.services"      : "Amenities",
    "mari.nav.location"      : "Location",
    "mari.nav.gallery"       : "Gallery",
    "mari.nav.reviews"       : "Reviews",
    "mari.nav.contacts"      : "Contact",
    "mari.nav.check"         : "Check availability",

    /* ── Casa Mariangela hero ── */
    "mari.hero.sub"          : "Just 30 metres from the sea, in the heart of the Ligurian Riviera di Ponente",
    "mari.hero.rating"       : "<strong>4.97</strong> out of 5 · 29 reviews on Airbnb",

    /* ── Casa Mariangela highlights ── */
    "mari.hl.sea.lbl"        : "from the sea",
    "mari.hl.rating.lbl"     : "Airbnb score",
    "mari.hl.rooms.lbl"      : "Bedrooms",
    "mari.hl.parking.val"    : "Free",
    "mari.hl.parking.lbl"    : "Parking",

    /* ── Casa Mariangela about ── */
    "mari.about.label"       : "The apartment",
    "mari.about.title"       : "Your home\nby the sea",
    "mari.about.p1"          : "Enjoy your holiday in this welcoming apartment just 30 metres from the sea, in the centre of San Bartolomeo al Mare. An oasis of comfort and style on the Ligurian Riviera di Ponente, with everything you need for an unforgettable stay.",
    "mari.about.p2"          : "Every detail has been taken care of to make you feel right at home, with a warm and welcoming atmosphere from the moment you arrive.",
    "mari.about.f1"          : "🏠 Entire apartment",
    "mari.about.f2"          : "👥 Up to 4 guests",
    "mari.about.f3"          : "🌊 30 m from sea",
    "mari.about.f4"          : "🚗 Free parking",
    "mari.about.f5"          : "🌿 Liguria",

    /* ── Casa Mariangela rooms ── */
    "mari.rooms.label"       : "Bedrooms",
    "mari.rooms.title"       : "Two bedrooms, all the comfort",
    "mari.room1.title"       : "Master bedroom",
    "mari.room1.text"        : "Spacious and bright, carefully furnished for maximum comfort. Perfect for a couple looking for relaxation and tranquillity.",
    "mari.room1.d1"          : "🌙 Double bed",
    "mari.room1.d2"          : "🛟 Wardrobe",
    "mari.room1.d3"          : "💡 View",
    "mari.room2.title"       : "Second bedroom",
    "mari.room2.text"        : "Cosy and versatile, ideal for children or additional guests. Tastefully furnished in a fresh, modern style.",
    "mari.room2.d1"          : "🌙 Twin beds",
    "mari.room2.d2"          : "🛟 Wardrobe",
    "mari.room2.d3"          : "💡 Bright",

    /* ── Casa Mariangela services ── */
    "mari.svc.label"         : "What we offer",
    "mari.svc.title"         : "All the comforts\nfor your holiday",
    "mari.svc.s1"            : "Steps from the sea",
    "mari.svc.s2"            : "Free parking",
    "mari.svc.s3"            : "Private bathroom",
    "mari.svc.s4"            : "Equipped kitchen",
    "mari.svc.s5"            : "Air conditioning",
    "mari.svc.s6"            : "Free Wi-Fi",
    "mari.svc.s7"            : "Washing machine",
    "mari.svc.s8"            : "Linen included",

    /* ── Casa Mariangela location ── */
    "mari.loc.title"         : "In the heart of\nSan Bartolomeo al Mare",
    "mari.loc.sea.title"     : "From the sea",
    "mari.loc.sea.text"      : "Just 30 metres from the beach. You can smell the sea air directly from the apartment.",
    "mari.loc.parking.title" : "Parking",
    "mari.loc.parking.text"  : "Free parking included with your stay. No worries about your car.",
    "mari.loc.nearby.title"  : "Nearby",
    "mari.loc.nearby.text"   : "Restaurants, ice cream parlours and shops just a short walk away. Everything at your fingertips.",

    /* ── Casa Mariangela reviews ── */
    "mari.rev.label"         : "What our guests say",
    "mari.rev.title"         : "Reviews",

    /* ── Casa Mariangela footer ── */
    "mari.footer.tagline"    : "Via Colombo 16, San Bartolomeo al Mare (IM)\nLigurian Riviera di Ponente · Liguria",
    "mari.footer.col1"       : "Navigation",
    "mari.footer.col2"       : "Information",

    /* ── Casa Mariangela location/reviews/contacts/CTA extras ── */
    "mari.loc.addr.text"     : "Via Colombo 16<br>18016 San Bartolomeo al Mare (IM)<br>Liguria, Italy",
    "mari.rev.btn"           : "Read all reviews on Airbnb",
    "mari.cont.label"        : "Any questions?",
    "mari.cont.title"        : "Contact us",
    "mari.cont.text"         : "We are here to help with any questions about your stay, availability or amenities.",
    "mari.cont.phone.lbl"    : "Phone &amp; WhatsApp",
    "mari.cont.phone.link"   : "Call now →",
    "mari.cont.email.lbl"    : "Email",
    "mari.cont.email.link"   : "Send a message →",
    "mari.cont.book.lbl"     : "Book online",
    "mari.cont.book.link"    : "View listing →",
    "mari.cta.label"         : "Ready to go?",
    "mari.cta.title"         : "Book your stay",
    "mari.cta.text"          : "Check availability and book directly on Airbnb. Fast response guaranteed!",
    "mari.cta.btn"           : "Check availability on Airbnb",

    /* ── Lake At Home meta ── */
    "lake.meta.title"        : "Lake At Home – Apartment with Lake View, Lecco (Lake Como), Italy",
    "lake.meta.desc"         : "Renovated modern apartment in Lecco city centre, Lake Como. Mountain and lake views, 2 bedrooms, 4 guests, Wi-Fi, air conditioning. Steps from the lakefront promenade.",

    /* ── Lake At Home nav ── */
    "lake.nav.about"         : "The apartment",
    "lake.nav.services"      : "Amenities",
    "lake.nav.gallery"       : "Gallery",
    "lake.nav.location"      : "Location",

    /* ── Lake At Home hero ── */
    "lake.hero.sub"          : "Modern apartment in the heart of Lecco, with mountain views and steps from the lakefront",
    "lake.hero.rating"       : "Excellent · On Airbnb",

    /* ── Lake highlights ── */
    "lake.hl.view.val"       : "Views",
    "lake.hl.view.lbl"       : "Lake & Mountains",
    "lake.hl.guests.lbl"     : "Max guests",
    "lake.hl.rooms.val"      : "2",
    "lake.hl.rooms.lbl"      : "Bedrooms",
    "lake.hl.center.val"     : "Centre",
    "lake.hl.center.lbl"     : "Of Lecco",

    /* ── Lake about ── */
    "lake.about.label"       : "Your space",
    "lake.about.title"       : "Experience Lecco\nlike a local",
    "lake.about.p1"          : "A fully renovated design apartment in the heart of Lecco, with modern finishes and quality materials. The windows frame a spectacular view of the mountains and lake, with breathtaking colours at sunset.",
    "lake.about.p2"          : "The location is ideal for exploring Lake Como and Valsassina: the lakefront promenade, Piazza XX Settembre and the train station are all just a short walk away. Perfect for couples and families who want to experience the city with all the comforts of home.",

    /* ── Lake bedrooms ── */
    "lake.room1.title"       : "Bedroom",
    "lake.room1.text"        : "Spacious double bedroom with built-in wardrobe and a window with views of Lecco's historic quarter.",
    "lake.room1.d1"          : "🌙 Double bed",
    "lake.room1.d2"          : "🛟 Built-in wardrobe",
    "lake.room1.d3"          : "💡 City view",
    "lake.room2.title"       : "Living room",
    "lake.room2.text"        : "Spacious living area with sofa, smart TV and dining area. The sofa converts to accommodate up to 4 guests in total.",
    "lake.room2.d1"          : "🛏 Sofa bed",
    "lake.room2.d2"          : "📺 Smart TV",
    "lake.room2.d3"          : "🍽 Dining area",

    /* ── Lake services ── */
    "lake.svc.label"         : "Amenities",
    "lake.svc.title"         : "Everything you need",
    "lake.svc.s1.title"      : "Modern design",
    "lake.svc.s1.text"       : "Fully renovated apartment with quality finishes and contemporary furnishings.",
    "lake.svc.s2.title"      : "Smart TV & Wi-Fi",
    "lake.svc.s2.text"       : "Fast Wi-Fi and smart TV to relax after a day on the lake.",
    "lake.svc.s3.title"      : "Equipped kitchen",
    "lake.svc.s3.text"       : "Full kitchen with gas hob, oven, fridge and everything you need.",
    "lake.svc.s4.title"      : "Washing machine",
    "lake.svc.s4.text"       : "Washing machine available for longer stays.",
    "lake.svc.s5.title"      : "Air conditioning",
    "lake.svc.s5.text"       : "Air conditioning for a comfortable stay in any season.",
    "lake.svc.s6.title"      : "Central location",
    "lake.svc.s6.text"       : "A short walk from the lakefront, train station and main services.",

    /* ── Lake location ── */
    "lake.loc.title"         : "Lecco,\nLake Como",
    "lake.loc.lake.title"    : "Lake Como",
    "lake.loc.lake.text"     : "A short walk from Lecco's lakefront, the starting point for hikes and boat trips.",
    "lake.loc.train.title"   : "Train station",
    "lake.loc.train.text"    : "Lecco station is a short walk away, with direct connections to Milan and other cities.",
    "lake.loc.nearby.text"   : "Varenna, Bellagio, Menaggio, Abbazia di Piona, Valsassina trails.",

    /* ── Lake gallery ── */
    "lake.gallery.label"     : "Photos",
    "lake.gallery.title"     : "Explore the spaces",

    /* ── Lake CTA ── */
    "lake.cta.title"         : "Ready to experience\nLake Como?",
    "lake.cta.text"          : "Check availability and book directly on Airbnb or Booking.com.<br>We are here for any questions you may have.",

    /* ── Lake footer ── */
    "lake.footer.tagline"    : "Via Pasubio 17, Lecco\nLake Como · City centre",

    /* ── Pool & Garden meta ── */
    "garden.meta.title"      : "Casa Mariangela: Pool & Garden – Leggiuno, Lake Maggiore, Italy",
    "garden.meta.desc"       : "Holiday home with private pool and panoramic garden in Leggiuno, Lake Maggiore. 2 bedrooms, 4 guests, lake view, private parking. 30 minutes from Milan Malpensa Airport.",

    /* ── Pool & Garden nav ── */
    "garden.nav.about"       : "The house",
    "garden.nav.rooms"       : "Bedrooms",
    "garden.nav.services"    : "Amenities",
    "garden.nav.gallery"     : "Gallery",
    "garden.nav.location"    : "Location",

    /* ── Pool & Garden hero ── */
    "garden.hero.sub"        : "Private pool, panoramic garden and breathtaking views over Lake Maggiore in Leggiuno",

    /* ── Pool & Garden highlights ── */
    "garden.hl.pool.val"     : "Pool",
    "garden.hl.pool.lbl"     : "Private",
    "garden.hl.guests.lbl"   : "Max guests",
    "garden.hl.rooms.lbl"    : "Bedrooms",
    "garden.hl.airport.lbl"  : "From Malpensa",

    /* ── Pool & Garden about ── */
    "garden.about.label"     : "Your home",
    "garden.about.title"     : "Relax with a pool\non Lake Maggiore",
    "garden.about.p1"        : "An independent holiday house with private pool and large garden in a panoramic residence in Leggiuno. The terrace and garden offer breathtaking views of Lake Maggiore and the surrounding Alps.",
    "garden.about.p2"        : "Ideal for families and groups looking for privacy and relaxation. Just 2 minutes from the lake shores and 30 minutes from Malpensa Airport, it's the perfect base for exploring Lake Maggiore.",

    /* ── Pool & Garden rooms ── */
    "garden.rooms.label"     : "Bedrooms",
    "garden.rooms.title"     : "Two bedrooms, all the comfort",
    "garden.room1.title"     : "Double bedroom",
    "garden.room1.text"      : "Spacious double bedroom with wardrobe and windows overlooking the private garden.",
    "garden.room1.d1"        : "🌙 Double bed",
    "garden.room1.d2"        : "🛟 Wardrobe",
    "garden.room1.d3"        : "🌿 Garden view",
    "garden.room2.title"     : "Living room & second bedroom",
    "garden.room2.text"      : "Spacious living room with sofa bed, TV and direct access to the private garden.",
    "garden.room2.d1"        : "🛏 Sofa bed",
    "garden.room2.d2"        : "📺 Smart TV",
    "garden.room2.d3"        : "🌿 Garden",

    /* ── Pool & Garden services ── */
    "garden.svc.label"       : "Amenities",
    "garden.svc.title"       : "All the comfort\nyou need",
    "garden.svc.s1.title"    : "Private pool",
    "garden.svc.s1.text"     : "Pool for the exclusive use of guests, with sunbathing area and loungers.",
    "garden.svc.s2.title"    : "Private garden",
    "garden.svc.s2.text"     : "Large private garden with outdoor table, perfect for al fresco dining.",
    "garden.svc.s3.title"    : "Private parking",
    "garden.svc.s3.text"     : "Private parking space included with your stay.",
    "garden.svc.s4.title"    : "Equipped kitchen",
    "garden.svc.s4.text"     : "Rustic kitchen with oven, dishwasher and everything you need to cook.",
    "garden.svc.s5.title"    : "Free Wi-Fi",
    "garden.svc.s5.text"     : "Internet connection included throughout the house.",
    "garden.svc.s6.title"    : "Panoramic view",
    "garden.svc.s6.text"     : "Breathtaking views of Lake Maggiore and the surrounding mountains.",

    /* ── Pool & Garden location ── */
    "garden.loc.title"       : "Leggiuno,\nLake Maggiore",
    "garden.loc.lake.title"  : "Lake Maggiore",
    "garden.loc.lake.text"   : "2 minutes from the lake shores. Panoramic views of the lake and the Alps from the property.",
    "garden.loc.airport.text": "30 minutes by car from Milan Malpensa International Airport (MXP).",
    "garden.loc.nearby.text" : "Santa Caterina del Sasso Hermitage, Laveno cable car, Borromean Islands, Stresa.",

    /* ── Pool & Garden CTA ── */
    "garden.cta.title"       : "Ready to enjoy\nthe lake?",

    /* ── Pool & Garden footer ── */
    "garden.footer.tagline"  : "Via XXIV Maggio 21, Leggiuno (VA)\nLake Maggiore · 30 min from Malpensa",
    "garden.footer.col1"     : "Useful links",
    "garden.footer.f1"       : "The house",
    "garden.footer.f2"       : "Bedrooms",
    "garden.footer.f3"       : "Gallery",
    "garden.footer.f4"       : "How to get here",
  },


  /* ═══════════════════════════════════════════════════════════════
     GERMAN
  ═══════════════════════════════════════════════════════════════ */
  de: {
    /* ── Common ── */
    "common.book"            : "Buchen",
    "common.discover"        : "Mehr entdecken",
    "common.contact_us"      : "Kontakt",
    "common.scroll"          : "Scrollen",
    "common.gallery_label"   : "Fotos",
    "common.gallery_title"   : "Galerie",
    "common.services_label"  : "Ausstattung",
    "common.location_label"  : "Lage",
    "common.rooms_label"     : "Schlafbereiche",
    "common.rooms_title"     : "Ihre Schlafzimmer",
    "common.book_airbnb"     : "Auf Airbnb buchen",
    "common.book_booking"    : "Auf Booking.com buchen",
    "common.all_properties"  : "Alle Unterkünfte",
    "common.privacy"         : "Datenschutz",
    "common.useful_links"    : "Nützliche Links",
    "common.how_to_arrive"   : "Anreise",
    "common.bedrooms"        : "Schlafzimmer",
    "common.max_guests"      : "Max. Gäste",
    "common.address"         : "Adresse",
    "common.nearby"          : "Sehenswürdigkeiten",
    "common.airport"         : "Flughafen Malpensa",
    "common.book_stay"       : "Ihren Aufenthalt buchen",
    "common.check_avail"     : "Verfügbarkeit prüfen und direkt auf Airbnb buchen.<br>Für alle Fragen stehen wir Ihnen gerne zur Verfügung.",
    "common.faq_label"       : "FAQ",
    "common.faq_title"       : "Häufig gestellte Fragen",

    /* ── Appartamento con Piscina FAQ ── */
    "pool.faq.q1" : "Wo liegt die Wohnung?",
    "pool.faq.a1" : "In Leggiuno, am Lago Maggiore (VA), Lombardei. Nur 2 Autominuten von den Stränden des Sees und 30 Minuten vom Flughafen Mailand Malpensa entfernt.",
    "pool.faq.q2" : "Gibt es wirklich einen Pool?",
    "pool.faq.a2" : "Ja, ein saisonaler Gemeinschaftspool, geöffnet bis 15. September, mit Sonnenliegen und Sonnenschirmen.",
    "pool.faq.q3" : "Wie viele Personen können übernachten?",
    "pool.faq.a3" : "Bis zu 4 Personen: ein Doppelschlafzimmer plus Wohnbereich mit Zusatzbett.",
    "pool.faq.q4" : "Gibt es einen Parkplatz?",
    "pool.faq.a4" : "Ja, ein privater Parkplatz ist inklusive, mit Blick auf den Lago Maggiore.",
    "pool.faq.q5" : "Wie kann ich buchen?",
    "pool.faq.a5" : "Direkt auf Airbnb oder Booking.com. Schnelle Antwort garantiert.",

    /* ── Pool & Garden FAQ ── */
    "garden.faq.q1" : "Ist der Pool privat oder wird er geteilt?",
    "garden.faq.a1" : "Vollständig privat und exklusiv für Gäste, mit großem Garten. Nicht mit anderen Unterkünften geteilt.",
    "garden.faq.q2" : "Sieht man den Lago Maggiore?",
    "garden.faq.a2" : "Ja, Panoramablick auf den Lago Maggiore vom Garten und von der Terrasse.",
    "garden.faq.q3" : "Wie viele Schlafzimmer hat das Haus?",
    "garden.faq.a3" : "Zwei Schlafzimmer für bis zu 4 Gäste, plus Wohnzimmer mit direktem Gartenzugang.",
    "garden.faq.q4" : "Wie weit ist es von Mailand und dem Flughafen Malpensa?",
    "garden.faq.a4" : "Etwa 50 Minuten von Mailand und 30 Minuten vom internationalen Flughafen Mailand Malpensa (MXP).",
    "garden.faq.q5" : "Wie kann ich buchen?",
    "garden.faq.a5" : "Direkt auf Airbnb. Bei Fragen stehen wir per Telefon oder E-Mail zur Verfügung.",

    /* ── Casa Mariangela FAQ ── */
    "mari.faq.q1" : "Wie weit ist Casa Mariangela vom Meer entfernt?",
    "mari.faq.a1" : "Nur 30 Meter vom Strand in San Bartolomeo al Mare, an der Ligurischen Riviera di Ponente.",
    "mari.faq.q2" : "Ist kostenloser Parkplatz inbegriffen?",
    "mari.faq.a2" : "Ja, ein privater Parkplatz ist im Aufenthalt ohne Aufpreis inbegriffen.",
    "mari.faq.q3" : "Wie viele Personen können übernachten?",
    "mari.faq.a3" : "Bis zu 4 Personen, mit 2 Schlafzimmern: ein Doppel- und ein Zweibettzimmer.",
    "mari.faq.q4" : "Wo liegt San Bartolomeo al Mare?",
    "mari.faq.a4" : "San Bartolomeo al Mare ist ein Küstenort an der Ligurischen Riviera di Ponente in der Provinz Imperia, in der Nähe von Diano Marina und Albenga.",
    "mari.faq.q5" : "Wie sind die Check-in- und Check-out-Zeiten?",
    "mari.faq.a5" : "Check-in ab 15:00 Uhr, Check-out bis 10:00 Uhr. Flexible Zeiten können auf Anfrage vereinbart werden.",
    "mari.faq.q6" : "Wie kann ich buchen?",
    "mari.faq.a6" : "Direkt auf Airbnb. Bei Fragen erreichen Sie uns telefonisch unter +39 347 412 0611 oder per E-Mail.",

    /* ── Lake At Home FAQ ── */
    "lake.faq.q1" : "Liegt Lake At Home in der Nähe des Sees?",
    "lake.faq.a1" : "Ja, es befindet sich im Herzen von Lecco, nur wenige Schritte vom Uferweg des Comer Sees.",
    "lake.faq.q2" : "Wie viele Schlafzimmer hat die Wohnung?",
    "lake.faq.a2" : "Zwei Schlafzimmer im modernen Design, für bis zu 4 Gäste.",
    "lake.faq.q3" : "Wie weit ist es von Mailand entfernt?",
    "lake.faq.a3" : "Etwa 40–50 Minuten von Mailand mit dem Auto oder Zug (Bahnhof Lecco, Direktverbindung).",
    "lake.faq.q4" : "Was gibt es in der Nähe zu sehen?",
    "lake.faq.a4" : "Leccos Seepromenade, die Grigna-Berge, Valsassina, Manzoni-Dörfer, Varenna, Bellagio und der gesamte Comer See.",
    "lake.faq.q5" : "Wie kann ich buchen?",
    "lake.faq.a5" : "Auf Airbnb oder Booking.com. Die Wohnung ist auf beiden Plattformen verfügbar.",

    /* ── Homepage meta ── */
    "home.meta.title"        : "Italian Escapes Homes – Außergewöhnliche Ferienunterkünfte in Italien",
    "home.meta.desc"         : "Fünf sorgfältig ausgewählte Ferienhäuser am Meer, an Seen und in den Bergen. Ferienunterkünfte in Ligurien, Lago Maggiore, Comer See und den Alpen. Bewertet mit 4,8+ auf Airbnb.",

    /* ── Homepage nav ── */
    "home.nav.properties"    : "Unterkünfte",
    "home.nav.destinations"  : "Reiseziele",
    "home.nav.contacts"      : "Kontakt",

    /* ── Homepage hero ── */
    "home.hero.eyebrow"      : "Außergewöhnliche Aufenthalte in Italien",
    "home.hero.tagline"      : "Meer, See und Berge — fünf Häuser für fünf einzigartige Erlebnisse",
    "home.hero.stat_prop"    : "Unterkünfte",
    "home.hero.stat_dest"    : "Reiseziele",
    "home.hero.stat_rating"  : "Auf Airbnb",
    "home.hero.cta_discover" : "Unsere Häuser entdecken",

    /* ── Properties section ── */
    "home.props.label"       : "Unsere Häuser",
    "home.props.title"       : "Fünf Unterkünfte,\nein Qualitätsstandard",
    "home.props.intro"       : "Jede Unterkunft wird persönlich ausgewählt und betreut, um höchsten Komfort zu gewährleisten – an einzigartigen Orten entlang der ligurischen Küste, an Italiens Seen und in den Alpen.",

    /* ── Property cards ── */
    "home.card1.tipo"        : "B&B · Meerseite",
    "home.card1.desc"        : "Nur 30 Meter vom Meer entfernt im Herzen von San Bartolomeo al Mare. Wohnung mit 2 Schlafzimmern, Klimaanlage, WLAN und kostenlosem Parkplatz. Eine unserer bestbewerteten Unterkünfte auf Airbnb.",
    "home.card1.d1"          : "🏠 2 Schlafzimmer",
    "home.card1.d2"          : "👥 4 Gäste",
    "home.card1.d3"          : "🌊 30 m vom Meer",
    "home.card1.d4"          : "🚗 Parkplatz",

    "home.card2.tipo"        : "Ferienwohnung · See",
    "home.card2.desc"        : "In einer Panoramaanlage inmitten von Grün, 2 Minuten vom Lago Maggiore. Saisonaler Pool, Wanderwege und Nähe zu lokalen Attraktionen.",
    "home.card2.d1"          : "👥 4 Gäste",
    "home.card2.d2"          : "🏊 Pool",
    "home.card2.d3"          : "✈️ 30 Min. von Malpensa",

    "home.card3.tipo"        : "Ferienhaus · See",
    "home.card3.desc"        : "Ruhiges Ferienhaus mit privatem Pool und großem Garten in einer Panoramaanlage, 2 Minuten vom Lago Maggiore und 30 Minuten vom Flughafen Malpensa.",
    "home.card3.d1"          : "👥 4 Gäste",
    "home.card3.d2"          : "🏊 Privater Pool",
    "home.card3.d3"          : "🌿 Garten",
    "home.card3.d4"          : "🌄 Seeblick",

    "home.card4.tipo"        : "Ferienwohnung · See",
    "home.card4.desc"        : "Moderne Wohnung im Herzen von Lecco, mit spektakulärem Blick auf die Berge und den Comer See. Nur wenige Schritte vom Seeufer und Bahnhof.",
    "home.card4.d1"          : "👥 4 Gäste",
    "home.card4.d2"          : "⛵ Seeblick",
    "home.card4.d3"          : "🏠 Lecco",

    "home.card5.tipo"        : "Suite · Berge",
    "home.card5.desc"        : "Eine charmante Bergsuite am Fuß des Bernina-Massivs in den Valmalenco-Alpen. Ideal für alle, die Stille, Natur und unvergessliche Bergpanoramen suchen.",
    "home.card5.d1"          : "👥 4 Gäste",
    "home.card5.d2"          : "⛰ Berge",
    "home.card5.d3"          : "🏟 Ski & Natur",
    "home.card5.soon"        : "Demnächst verfügbar",
    "home.card5.info"        : "Informationen",

    /* ── Brand section ── */
    "home.brand.label"       : "Über uns",
    "home.brand.title"       : "Unsere Philosophie",
    "home.brand.text"        : "Italian Escapes Homes entstand aus der Leidenschaft für authentische Gastfreundschaft. Jede Unterkunft wird sorgfältig gepflegt, um ein einzigartiges Erlebnis zu bieten – ob am Meer, am See oder in den Bergen.",
    "home.brand.v1.title"    : "Qualität",
    "home.brand.v1.text"     : "Persönlich ausgewählte und betreute Unterkünfte mit hohen Standards in jedem Detail.",
    "home.brand.v2.title"    : "Einzigartige Lagen",
    "home.brand.v2.text"     : "Ligurische Küste, Lago Maggiore, Comer See und Alpen: Italiens schönste Kulissen.",
    "home.brand.v3.title"    : "Gastfreundschaft",
    "home.brand.v3.text"     : "Schnelle Antworten, Verfügbarkeit und echte Fürsorge für unsere Gäste haben höchste Priorität.",
    "home.brand.v4.title"    : "Zuverlässigkeit",
    "home.brand.v4.text"     : "Über 50 Airbnb-Bewertungen mit Punktzahlen über 4,6 von 5.",

    /* ── Destinations section ── */
    "home.dest.label"        : "Wo wir sind",
    "home.dest.title"        : "Unsere Reiseziele",
    "home.dest.d1.count"     : "1 Unterkunft",
    "home.dest.d2.count"     : "2 Unterkünfte",
    "home.dest.d3.count"     : "1 Unterkunft",
    "home.dest.d4.count"     : "1 Unterkunft",

    /* ── Contacts section ── */
    "home.contacts.label"    : "Schreiben Sie uns",
    "home.contacts.title"    : "Kontakt",
    "home.contacts.text"     : "Für Informationen zu Verfügbarkeit, Preisen oder sonstige Fragen zu unseren Unterkünften.",
    "home.contacts.c1.label" : "Telefon & WhatsApp",
    "home.contacts.c1.link"  : "Jetzt anrufen →",
    "home.contacts.c2.label" : "E-Mail",
    "home.contacts.c2.link"  : "Schreiben →",
    "home.contacts.c3.label" : "Airbnb",
    "home.contacts.c3.value" : "Alle Unterkünfte",
    "home.contacts.c3.link"  : "Auf Airbnb ansehen →",

    /* ── Footer ── */
    "home.footer.tagline"    : "Fünf sorgfältig ausgewählte Ferienhäuser am Meer, an Seen und in den Bergen. Das schönste Italien zum Greifen nah.",
    "home.footer.col1"       : "Unterkünfte",
    "home.footer.col2"       : "Reiseziele",
    "home.footer.col3"       : "Kontakt",
    "home.footer.bernina"    : "Bernina Apartment (demnächst)",
    "home.footer.copy"       : "© 2026 Italian Escapes Homes · Alle Rechte vorbehalten",
    "home.footer.cookie"     : "Diese Website verwendet keine Profiling-Cookies",

    /* ── Pool apartment meta ── */
    "pool.meta.title"        : "Ferienwohnung mit Pool – Leggiuno, Lago Maggiore, Italien",
    "pool.meta.desc"         : "Ferienwohnung mit Saisonpool in Leggiuno am Lago Maggiore. 1 Schlafzimmer, 4 Gäste, kostenloser Parkplatz, WLAN, 30 Minuten vom Flughafen Mailand Malpensa.",

    /* ── Pool apartment nav ── */
    "pool.nav.about"         : "Die Wohnung",
    "pool.nav.services"      : "Ausstattung",
    "pool.nav.gallery"       : "Galerie",
    "pool.nav.location"      : "Lage",

    /* ── Pool apartment hero ── */
    "pool.hero.sub"          : "Ein ruhiges Refugium inmitten von Grün, direkt am Lago Maggiore und 30 Minuten vom Flughafen Malpensa",
    "pool.hero.rating"       : "<strong>4,68</strong> von 5 · 25 Bewertungen auf Airbnb",

    /* ── Pool highlights ── */
    "pool.hl.pool.val"       : "Pool",
    "pool.hl.pool.lbl"       : "Saisonal",
    "pool.hl.guests.lbl"     : "Max. Gäste",
    "pool.hl.lake.val"       : "2 Min.",
    "pool.hl.lake.lbl"       : "Zum See",
    "pool.hl.airport.val"    : "30 Min.",
    "pool.hl.airport.lbl"    : "Von Malpensa",

    /* ── Pool about ── */
    "pool.about.label"       : "Ihr Bereich",
    "pool.about.title"       : "Entspannen am\nLago Maggiore",
    "pool.about.p1"          : "Erholen Sie sich mit der ganzen Familie in dieser ruhigen Ferienwohnung in einer Anlage mit Saisonpool (geöffnet bis 15. September). Die Wohnung liegt in einer Panoramaanlage inmitten von Grün, nur 2 Minuten von den Stränden des Sees entfernt.",
    "pool.about.p2"          : "Die Lage ist ideal, um den Lago Maggiore zu erkunden: die Einsiedelei Santa Caterina del Sasso, die Seilbahn von Laveno und die Naturwanderwege sind alle in wenigen Minuten erreichbar. Nur 30 Minuten vom Flughafen Mailand Malpensa – auch perfekt für Zwischenstopps.",

    /* ── Pool bedrooms ── */
    "pool.room1.title"       : "Schlafzimmer",
    "pool.room1.text"        : "Geräumiges Doppelzimmer mit hellen Fenstern zum grünen Innenhof und eingebautem Kleiderschrank.",
    "pool.room1.d1"          : "🌙 Doppelbett",
    "pool.room1.d2"          : "🛟 Kleiderschrank",
    "pool.room1.d3"          : "💡 Gartenblick",
    "pool.room2.title"       : "Wohnzimmer",
    "pool.room2.text"        : "Offener Wohn-/Essbereich mit Küche und Zusatzbett für weitere Gäste. Flachbildschirm-TV inklusive.",
    "pool.room2.d1"          : "🛏 Zusatzbett",
    "pool.room2.d2"          : "📺 Smart-TV",
    "pool.room2.d3"          : "🍽 Ausgestattete Küche",

    /* ── Pool services ── */
    "pool.svc.label"         : "Ausstattung",
    "pool.svc.title"         : "Alles für Ihren\nKomfort",
    "pool.svc.s1.title"      : "Saisonpool",
    "pool.svc.s1.text"       : "Gemeinschaftspool bis 15. September geöffnet, mit Sonnenliegen und Sonnenschirmen.",
    "pool.svc.s2.title"      : "Kostenloser Parkplatz",
    "pool.svc.s2.text"       : "Privater Stellplatz inklusive, mit Blick auf den Lago Maggiore.",
    "pool.svc.s3.title"      : "Kostenloses WLAN",
    "pool.svc.s3.text"       : "Schnelle Internetverbindung in der gesamten Wohnung.",
    "pool.svc.s4.title"      : "Ausgestattete Küche",
    "pool.svc.s4.text"       : "Vollständige Küche mit Herd, Kühlschrank, Spülmaschine und allem Notwendigen.",
    "pool.svc.s5.title"      : "Smart-TV",
    "pool.svc.s5.text"       : "Flachbildschirm-TV mit Zugang zu den wichtigsten Streaming-Diensten.",
    "pool.svc.s6.title"      : "Seeblick",
    "pool.svc.s6.text"       : "Parkplatz mit Blick auf den Lago Maggiore in einer Panoramaanlage.",

    /* ── Pool location ── */
    "pool.loc.title"         : "Leggiuno,\nLago Maggiore",
    "pool.loc.lake.title"    : "Lago Maggiore",
    "pool.loc.lake.text"     : "Nur 2 Minuten mit dem Auto zu den Stränden. Direkter Zugang zu Wanderwegen und Naturschutzgebieten.",
    "pool.loc.airport.text"  : "Nur 30 Minuten mit dem Auto zum internationalen Flughafen Mailand Malpensa (MXP).",
    "pool.loc.nearby.text"   : "Einsiedelei Santa Caterina del Sasso, Seilbahn Laveno, Borromäische Inseln, Stresa.",

    /* ── Pool CTA ── */
    "pool.cta.title"         : "Bereit für Entspannung\nam See?",

    /* ── Pool footer ── */
    "pool.footer.tagline"    : "Via XXIV Maggio 84, Leggiuno (VA)\nLago Maggiore · 30 Min. von Malpensa",

    /* ── Casa Mariangela meta ── */
    "mari.meta.title"        : "B&B Casa Mariangela – San Bartolomeo al Mare, Ligurische Riviera, Italien",
    "mari.meta.desc"         : "Strandnahe Ferienwohnung 30 Meter vom Meer in San Bartolomeo al Mare, Ligurien. 2 Schlafzimmer, kostenloser Parkplatz, WLAN, Klimaanlage. 4,97/5 auf Airbnb. Online buchen.",

    /* ── Casa Mariangela nav ── */
    "mari.nav.about"         : "Die Wohnung",
    "mari.nav.rooms"         : "Schlafzimmer",
    "mari.nav.services"      : "Ausstattung",
    "mari.nav.location"      : "Lage",
    "mari.nav.gallery"       : "Galerie",
    "mari.nav.reviews"       : "Bewertungen",
    "mari.nav.contacts"      : "Kontakt",
    "mari.nav.check"         : "Verfügbarkeit prüfen",

    /* ── Casa Mariangela hero ── */
    "mari.hero.sub"          : "Nur 30 Meter vom Meer, im Herzen der Ligurischen Riviera di Ponente",
    "mari.hero.rating"       : "<strong>4,97</strong> von 5 · 29 Bewertungen auf Airbnb",

    /* ── Casa Mariangela highlights ── */
    "mari.hl.sea.lbl"        : "vom Meer",
    "mari.hl.rating.lbl"     : "Airbnb-Bewertung",
    "mari.hl.rooms.lbl"      : "Schlafzimmer",
    "mari.hl.parking.val"    : "Gratis",
    "mari.hl.parking.lbl"    : "Parkplatz",

    /* ── Casa Mariangela about ── */
    "mari.about.label"       : "Die Wohnung",
    "mari.about.title"       : "Ihr Zuhause\nam Meer",
    "mari.about.p1"          : "Genießen Sie Ihren Urlaub in dieser einladenden Ferienwohnung, nur 30 Meter vom Meer entfernt, im Zentrum von San Bartolomeo al Mare. Eine Oase des Komforts und Stils an der Ligurischen Riviera di Ponente, mit allem, was Sie für einen unvergesslichen Aufenthalt benötigen.",
    "mari.about.p2"          : "Jedes Detail ist liebevoll gestaltet, damit Sie sich wie zu Hause fühlen – eine warme und einladende Atmosphäre, die Sie vom ersten Moment an empfängt.",
    "mari.about.f1"          : "🏠 Gesamte Wohnung",
    "mari.about.f2"          : "👥 Bis zu 4 Gäste",
    "mari.about.f3"          : "🌊 30 m vom Meer",
    "mari.about.f4"          : "🚗 Kostenloser Parkplatz",
    "mari.about.f5"          : "🌿 Ligurien",

    /* ── Casa Mariangela rooms ── */
    "mari.rooms.label"       : "Schlafzimmer",
    "mari.rooms.title"       : "Zwei Schlafzimmer, voller Komfort",
    "mari.room1.title"       : "Hauptschlafzimmer",
    "mari.room1.text"        : "Geräumig und hell, sorgfältig eingerichtet für maximalen Komfort. Perfekt für ein Paar, das Entspannung und Ruhe sucht.",
    "mari.room1.d1"          : "🌙 Doppelbett",
    "mari.room1.d2"          : "🛟 Kleiderschrank",
    "mari.room1.d3"          : "💡 Aussicht",
    "mari.room2.title"       : "Zweites Schlafzimmer",
    "mari.room2.text"        : "Gemütlich und vielseitig, ideal für Kinder oder weitere Gäste. Geschmackvoll in einem frischen, modernen Stil eingerichtet.",
    "mari.room2.d1"          : "🌙 Einzelbetten",
    "mari.room2.d2"          : "🛟 Kleiderschrank",
    "mari.room2.d3"          : "💡 Hell",

    /* ── Casa Mariangela services ── */
    "mari.svc.label"         : "Was wir bieten",
    "mari.svc.title"         : "Alles für Ihren\nstrandnahen Urlaub",
    "mari.svc.s1"            : "Direkt am Meer",
    "mari.svc.s2"            : "Kostenloser Parkplatz",
    "mari.svc.s3"            : "Privates Bad",
    "mari.svc.s4"            : "Ausgestattete Küche",
    "mari.svc.s5"            : "Klimaanlage",
    "mari.svc.s6"            : "Kostenloses WLAN",
    "mari.svc.s7"            : "Waschmaschine",
    "mari.svc.s8"            : "Bettwäsche inklusive",

    /* ── Casa Mariangela location ── */
    "mari.loc.title"         : "Im Herzen von\nSan Bartolomeo al Mare",
    "mari.loc.sea.title"     : "Zum Meer",
    "mari.loc.sea.text"      : "Nur 30 Meter zum Strand. Sie können die Meeresluft direkt von der Wohnung aus riechen.",
    "mari.loc.parking.title" : "Parkplatz",
    "mari.loc.parking.text"  : "Kostenloser Parkplatz inklusive. Keine Sorgen um Ihr Auto.",
    "mari.loc.nearby.title"  : "In der Nähe",
    "mari.loc.nearby.text"   : "Restaurants, Eisdielen und Geschäfte in unmittelbarer Nähe. Alles griffbereit.",

    /* ── Casa Mariangela reviews ── */
    "mari.rev.label"         : "Was unsere Gäste sagen",
    "mari.rev.title"         : "Bewertungen",

    /* ── Casa Mariangela footer ── */
    "mari.footer.tagline"    : "Via Colombo 16, San Bartolomeo al Mare (IM)\nLigurische Riviera di Ponente · Ligurien",
    "mari.footer.col1"       : "Navigation",
    "mari.footer.col2"       : "Informationen",

    /* ── Casa Mariangela location/reviews/contacts/CTA extras ── */
    "mari.loc.addr.text"     : "Via Colombo 16<br>18016 San Bartolomeo al Mare (IM)<br>Ligurien, Italien",
    "mari.rev.btn"           : "Alle Bewertungen auf Airbnb lesen",
    "mari.cont.label"        : "Fragen?",
    "mari.cont.title"        : "Kontakt",
    "mari.cont.text"         : "Wir helfen Ihnen gerne bei allen Fragen zu Ihrem Aufenthalt, zur Verfügbarkeit oder zur Ausstattung.",
    "mari.cont.phone.lbl"    : "Telefon &amp; WhatsApp",
    "mari.cont.phone.link"   : "Jetzt anrufen →",
    "mari.cont.email.lbl"    : "E-Mail",
    "mari.cont.email.link"   : "Nachricht senden →",
    "mari.cont.book.lbl"     : "Online buchen",
    "mari.cont.book.link"    : "Zum Inserat →",
    "mari.cta.label"         : "Bereit für den Urlaub?",
    "mari.cta.title"         : "Ihren Aufenthalt buchen",
    "mari.cta.text"          : "Verfügbarkeit prüfen und direkt auf Airbnb buchen. Schnelle Antwort garantiert!",
    "mari.cta.btn"           : "Verfügbarkeit auf Airbnb prüfen",

    /* ── Lake At Home meta ── */
    "lake.meta.title"        : "Lake At Home – Ferienwohnung mit Seeblick, Lecco (Comer See), Italien",
    "lake.meta.desc"         : "Renovierte moderne Ferienwohnung im Zentrum von Lecco, Comer See. Berg- und Seeblick, 2 Schlafzimmer, 4 Gäste, WLAN, Klimaanlage. Wenige Schritte vom Seeufer.",

    /* ── Lake At Home nav ── */
    "lake.nav.about"         : "Die Wohnung",
    "lake.nav.services"      : "Ausstattung",
    "lake.nav.gallery"       : "Galerie",
    "lake.nav.location"      : "Lage",

    /* ── Lake At Home hero ── */
    "lake.hero.sub"          : "Moderne Ferienwohnung im Herzen von Lecco, mit Bergblick und direkt am Seeufer",
    "lake.hero.rating"       : "Ausgezeichnet · Auf Airbnb",

    /* ── Lake highlights ── */
    "lake.hl.view.val"       : "Aussicht",
    "lake.hl.view.lbl"       : "See & Berge",
    "lake.hl.guests.lbl"     : "Max. Gäste",
    "lake.hl.rooms.val"      : "2",
    "lake.hl.rooms.lbl"      : "Schlafzimmer",
    "lake.hl.center.val"     : "Zentrum",
    "lake.hl.center.lbl"     : "Von Lecco",

    /* ── Lake about ── */
    "lake.about.label"       : "Ihr Bereich",
    "lake.about.title"       : "Lecco erleben\nwie ein Einheimischer",
    "lake.about.p1"          : "Eine vollständig renovierte Designwohnung im Herzen von Lecco, mit modernen Oberflächen und hochwertigen Materialien. Aus den Fenstern öffnet sich ein spektakulärer Blick auf die Berge und den See, der bei Sonnenuntergang atemberaubende Farben zeigt.",
    "lake.about.p2"          : "Die Lage ist ideal, um den Comer See und das Valsassina zu erkunden: die Uferpromenade, die Piazza XX Settembre und der Bahnhof sind alle zu Fuß in wenigen Minuten erreichbar. Perfekt für Paare und Familien, die die Stadt mit allem Komfort eines Zuhauses erleben möchten.",

    /* ── Lake bedrooms ── */
    "lake.room1.title"       : "Schlafzimmer",
    "lake.room1.text"        : "Geräumiges Doppelzimmer mit eingebautem Kleiderschrank und Fenster mit Blick auf Leccos historisches Viertel.",
    "lake.room1.d1"          : "🌙 Doppelbett",
    "lake.room1.d2"          : "🛟 Einbauschrank",
    "lake.room1.d3"          : "💡 Stadtblick",
    "lake.room2.title"       : "Wohnzimmer",
    "lake.room2.text"        : "Geräumiges Wohnzimmer mit Sofa, Smart-TV und Essbereich. Das Sofa ist ausklappbar für bis zu 4 Personen.",
    "lake.room2.d1"          : "🛏 Schlafsofa",
    "lake.room2.d2"          : "📺 Smart-TV",
    "lake.room2.d3"          : "🍽 Essbereich",

    /* ── Lake services ── */
    "lake.svc.label"         : "Ausstattung",
    "lake.svc.title"         : "Alles was Sie brauchen",
    "lake.svc.s1.title"      : "Modernes Design",
    "lake.svc.s1.text"       : "Vollständig renovierte Wohnung mit hochwertigen Oberflächen und zeitgemäßer Einrichtung.",
    "lake.svc.s2.title"      : "Smart-TV & WLAN",
    "lake.svc.s2.text"       : "Schnelles WLAN und Smart-TV zum Entspannen nach einem Tag am See.",
    "lake.svc.s3.title"      : "Ausgestattete Küche",
    "lake.svc.s3.text"       : "Vollständige Küche mit Gasherd, Backofen, Kühlschrank und allem Notwendigen.",
    "lake.svc.s4.title"      : "Waschmaschine",
    "lake.svc.s4.text"       : "Waschmaschine für längere Aufenthalte verfügbar.",
    "lake.svc.s5.title"      : "Klimaanlage",
    "lake.svc.s5.text"       : "Klimaanlage für einen angenehmen Aufenthalt in jeder Jahreszeit.",
    "lake.svc.s6.title"      : "Zentrale Lage",
    "lake.svc.s6.text"       : "Wenige Gehminuten von Seeufer, Bahnhof und allen wichtigen Einrichtungen.",

    /* ── Lake location ── */
    "lake.loc.title"         : "Lecco,\nComer See",
    "lake.loc.lake.title"    : "Comer See",
    "lake.loc.lake.text"     : "Wenige Gehminuten von Leccos Seeufer entfernt, Ausgangspunkt für Wanderungen und Bootsausflüge.",
    "lake.loc.train.title"   : "Bahnhof",
    "lake.loc.train.text"    : "Der Bahnhof Lecco ist zu Fuß in wenigen Minuten erreichbar, mit Direktverbindungen nach Mailand und anderen Städten.",
    "lake.loc.nearby.text"   : "Varenna, Bellagio, Menaggio, Abtei Piona, Wanderwege im Valsassina.",

    /* ── Lake gallery ── */
    "lake.gallery.label"     : "Fotos",
    "lake.gallery.title"     : "Die Räume entdecken",

    /* ── Lake CTA ── */
    "lake.cta.title"         : "Bereit, den\nComer See zu erleben?",
    "lake.cta.text"          : "Verfügbarkeit prüfen und direkt auf Airbnb oder Booking.com buchen.<br>Für alle Fragen stehen wir Ihnen gerne zur Verfügung.",

    /* ── Lake footer ── */
    "lake.footer.tagline"    : "Via Pasubio 17, Lecco\nComer See · Stadtzentrum",

    /* ── Pool & Garden meta ── */
    "garden.meta.title"      : "Casa Mariangela: Pool & Garden – Leggiuno, Lago Maggiore, Italien",
    "garden.meta.desc"       : "Ferienhaus mit privatem Pool und Panoramaterrassengarten in Leggiuno, Lago Maggiore. 2 Schlafzimmer, 4 Gäste, Seeblick, privater Parkplatz. 30 Minuten vom Flughafen Malpensa.",

    /* ── Pool & Garden nav ── */
    "garden.nav.about"       : "Das Haus",
    "garden.nav.rooms"       : "Schlafzimmer",
    "garden.nav.services"    : "Ausstattung",
    "garden.nav.gallery"     : "Galerie",
    "garden.nav.location"    : "Lage",

    /* ── Pool & Garden hero ── */
    "garden.hero.sub"        : "Privater Pool, Panoramagarten und atemberaubender Blick auf den Lago Maggiore in Leggiuno",

    /* ── Pool & Garden highlights ── */
    "garden.hl.pool.val"     : "Pool",
    "garden.hl.pool.lbl"     : "Privat",
    "garden.hl.guests.lbl"   : "Max. Gäste",
    "garden.hl.rooms.lbl"    : "Schlafzimmer",
    "garden.hl.airport.lbl"  : "Von Malpensa",

    /* ── Pool & Garden about ── */
    "garden.about.label"     : "Ihr Haus",
    "garden.about.title"     : "Entspannen mit Pool\nam Lago Maggiore",
    "garden.about.p1"        : "Ein freistehendes Ferienhaus mit privatem Pool und großem Garten in einer Panoramaanlage in Leggiuno. Die Terrasse und der Garten bieten einen atemberaubenden Blick auf den Lago Maggiore und die umliegenden Alpen.",
    "garden.about.p2"        : "Ideal für Familien und Gruppen, die Privatsphäre und Entspannung suchen. Nur 2 Minuten von den Stränden und 30 Minuten vom Flughafen Malpensa entfernt – die perfekte Basis für die Erkundung des Lago Maggiore.",

    /* ── Pool & Garden rooms ── */
    "garden.rooms.label"     : "Schlafzimmer",
    "garden.rooms.title"     : "Zwei Schlafzimmer, voller Komfort",
    "garden.room1.title"     : "Doppelzimmer",
    "garden.room1.text"      : "Geräumiges Doppelzimmer mit Kleiderschrank und Fenstern mit Blick auf den Privatgarten.",
    "garden.room1.d1"        : "🌙 Doppelbett",
    "garden.room1.d2"        : "🛟 Kleiderschrank",
    "garden.room1.d3"        : "🌿 Gartenblick",
    "garden.room2.title"     : "Wohnzimmer & zweites Schlafzimmer",
    "garden.room2.text"      : "Geräumiges Wohnzimmer mit Schlafsofa, TV und direktem Zugang zum Privatgarten.",
    "garden.room2.d1"        : "🛏 Schlafsofa",
    "garden.room2.d2"        : "📺 Smart-TV",
    "garden.room2.d3"        : "🌿 Garten",

    /* ── Pool & Garden services ── */
    "garden.svc.label"       : "Ausstattung",
    "garden.svc.title"       : "Alles für Ihren\nKomfort",
    "garden.svc.s1.title"    : "Privater Pool",
    "garden.svc.s1.text"     : "Pool zur ausschließlichen Nutzung der Gäste, mit Sonnenterrasse und Sonnenliegen.",
    "garden.svc.s2.title"    : "Privatgarten",
    "garden.svc.s2.text"     : "Großer Privatgarten mit Außentisch, perfekt für Abendessen im Freien.",
    "garden.svc.s3.title"    : "Privater Parkplatz",
    "garden.svc.s3.text"     : "Privater Stellplatz inklusive Übernachtung.",
    "garden.svc.s4.title"    : "Ausgestattete Küche",
    "garden.svc.s4.text"     : "Rustikale Küche mit Backofen, Spülmaschine und allem zum Kochen.",
    "garden.svc.s5.title"    : "Kostenloses WLAN",
    "garden.svc.s5.text"     : "Internetverbindung im gesamten Haus inklusive.",
    "garden.svc.s6.title"    : "Panoramablick",
    "garden.svc.s6.text"     : "Atemberaubender Blick auf den Lago Maggiore und die umliegenden Berge.",

    /* ── Pool & Garden location ── */
    "garden.loc.title"       : "Leggiuno,\nLago Maggiore",
    "garden.loc.lake.title"  : "Lago Maggiore",
    "garden.loc.lake.text"   : "2 Minuten zu den Stränden. Panoramablick auf den See und die Alpen von der Unterkunft.",
    "garden.loc.airport.text": "30 Minuten mit dem Auto zum internationalen Flughafen Mailand Malpensa (MXP).",
    "garden.loc.nearby.text" : "Einsiedelei Santa Caterina del Sasso, Seilbahn Laveno, Borromäische Inseln, Stresa.",

    /* ── Pool & Garden CTA ── */
    "garden.cta.title"       : "Bereit, den\nSee zu genießen?",

    /* ── Pool & Garden footer ── */
    "garden.footer.tagline"  : "Via XXIV Maggio 21, Leggiuno (VA)\nLago Maggiore · 30 Min. von Malpensa",
    "garden.footer.col1"     : "Nützliche Links",
    "garden.footer.f1"       : "Das Haus",
    "garden.footer.f2"       : "Schlafzimmer",
    "garden.footer.f3"       : "Galerie",
    "garden.footer.f4"       : "Anreise",
  }
};


/* ═══════════════════════════════════════════════════════════════
   ENGINE
═══════════════════════════════════════════════════════════════ */

function iehGetLang() {
  const stored = localStorage.getItem('ieh-lang');
  if (stored && IEH_TRANSLATIONS[stored]) return stored;
  const browser = (navigator.language || navigator.userLanguage || 'it').split('-')[0];
  return IEH_TRANSLATIONS[browser] ? browser : 'it';
}

function iehSetLang(lang) {
  if (!IEH_TRANSLATIONS[lang]) lang = 'it';
  localStorage.setItem('ieh-lang', lang);
  iehApply(lang);
}

function iehApply(lang) {
  const t = IEH_TRANSLATIONS[lang] || IEH_TRANSLATIONS.it;

  /* text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.getAttribute('data-i18n')];
    if (v !== undefined) el.textContent = v;
  });

  /* innerHTML (for <br>, <strong> etc.) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.getAttribute('data-i18n-html')];
    if (v !== undefined) el.innerHTML = v;
  });

  /* meta title */
  const metaTitle = document.querySelector('meta[name="ieh-title"]');
  if (metaTitle) {
    const v = t[metaTitle.getAttribute('content')];
    if (v) document.title = v;
  }

  /* meta description */
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const key = metaDesc.getAttribute('data-i18n');
    if (key && t[key]) metaDesc.setAttribute('content', t[key]);
  }

  /* og:title */
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    const key = ogTitle.getAttribute('data-i18n');
    if (key && t[key]) ogTitle.setAttribute('content', t[key]);
  }

  /* og:description */
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    const key = ogDesc.getAttribute('data-i18n');
    if (key && t[key]) ogDesc.setAttribute('content', t[key]);
  }

  /* <title> tag */
  const titleEl = document.querySelector('title');
  if (titleEl) {
    const key = titleEl.getAttribute('data-i18n');
    if (key && t[key]) document.title = t[key];
  }

  /* html lang */
  document.documentElement.lang = lang;

  /* switcher active state */
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('lang-active', btn.getAttribute('data-lang-btn') === lang);
  });
}

/* Auto-init */
document.addEventListener('DOMContentLoaded', () => {
  const lang = iehGetLang();
  iehApply(lang);   /* always apply to set active state */
});
