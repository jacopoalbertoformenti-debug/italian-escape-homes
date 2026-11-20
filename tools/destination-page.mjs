/**
 * Modello HTML delle pagine destinazione. Usato da tools/build-i18n.mjs.
 * I testi stanno in tools/destinations.mjs; qui c'è solo l'impaginazione.
 */
import { LABELS, HOMES, DESTINATIONS } from './destinations.mjs';

const ALL_LANGS = ['it', 'en', 'de', 'fr'];
const OG_LOCALE = { it: 'it_IT', en: 'en_GB', de: 'de_DE', fr: 'fr_FR' };
const WHATSAPP = { it: 'Scrivi su WhatsApp', en: 'Message us on WhatsApp', de: 'Per WhatsApp schreiben', fr: 'Écrire sur WhatsApp' };
const MENU = { it: 'Menu', en: 'Menu', de: 'Menü', fr: 'Menu' };

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const CSS = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --terracotta: #C4704F; --gold: #D4A76A; --brown: #8B5E3C; --dark: #1E1810;
      --bg: #FFF8F3; --sand: #F5E6D3; --sand-dark: #EDD9C0; --white: #FFFFFF;
      --text: #3D2B1F; --text-light: #7A5C4A; --radius: 14px;
      --shadow: 0 10px 48px rgba(30,24,16,.11); --shadow-sm: 0 2px 14px rgba(30,24,16,.08);
    }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', sans-serif; font-weight: 300; background: var(--bg); color: var(--text); line-height: 1.7; overflow-x: hidden; }
    h1, h2, h3, h4 { font-family: 'Cormorant Garamond', serif; font-weight: 400; line-height: 1.2; }
    a { color: inherit; text-decoration: none; }
    img { display: block; width: 100%; object-fit: cover; }

    nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 20px 56px; transition: background .35s, box-shadow .35s, padding .35s; }
    nav.scrolled { background: rgba(255,248,243,.96); backdrop-filter: blur(14px); box-shadow: var(--shadow-sm); padding: 13px 56px; }
    .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; font-weight: 600; color: var(--white); letter-spacing: .05em; white-space: nowrap; transition: color .35s; }
    nav.scrolled .nav-logo { color: var(--dark); }
    .nav-links { display: flex; align-items: center; gap: 26px; list-style: none; margin-left: auto; }
    .nav-links a { font-size: .74rem; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; white-space: nowrap; color: rgba(255,255,255,.88); transition: color .2s; }
    nav.scrolled .nav-links a { color: var(--text-light); }
    .nav-links a:hover { color: var(--gold); }
    .nav-links a.nav-cta { background: var(--terracotta); color: var(--white); padding: 9px 20px; border-radius: 30px; }
    nav.scrolled .nav-links a.nav-cta { color: var(--white); }
    .nav-lang { display: none; }
    .lang-switcher { display: flex; gap: 4px; align-items: center; }
    .lang-switcher a, .nav-lang a { border: 1px solid rgba(255,255,255,.4); color: rgba(255,255,255,.75); font-size: .64rem; font-weight: 500; letter-spacing: .1em; padding: 4px 8px; border-radius: 4px; transition: all .2s; }
    .lang-switcher a:hover, .lang-switcher a.lang-active { background: var(--gold); border-color: var(--gold); color: var(--dark); }
    nav.scrolled .lang-switcher a { border-color: rgba(30,24,16,.25); color: var(--text-light); }
    nav.scrolled .lang-switcher a:hover, nav.scrolled .lang-switcher a.lang-active { background: var(--terracotta); border-color: var(--terracotta); color: var(--white); }
    .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 6px; background: none; border: none; }
    .hamburger span { display: block; width: 24px; height: 2px; background: var(--white); transition: background .35s; }
    nav.scrolled .hamburger span { background: var(--dark); }

    .hero { position: relative; min-height: 78vh; display: flex; align-items: flex-end; justify-content: center; text-align: center; color: var(--white); overflow: hidden; }
    .hero > img { position: absolute; inset: 0; height: 100%; }
    .hero-veil { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(30,24,16,.55) 0%, rgba(30,24,16,.25) 38%, rgba(30,24,16,.72) 100%); }
    .hero-copy { position: relative; padding: 150px 24px 84px; max-width: 900px; }
    .hero-eyebrow { font-size: .72rem; font-weight: 500; letter-spacing: .26em; text-transform: uppercase; color: var(--gold); margin-bottom: 18px; }
    .hero h1 { font-size: clamp(2.4rem, 5.6vw, 4.4rem); font-weight: 300; text-shadow: 0 2px 24px rgba(0,0,0,.35); }
    .hero h1 em { font-style: italic; color: var(--gold); }
    .hero-sub { margin: 20px auto 0; max-width: 640px; font-size: 1.02rem; color: rgba(255,255,255,.9); }

    section { padding: 84px 56px; }
    .inner { max-width: 1120px; margin: 0 auto; }
    .narrow { max-width: 780px; margin: 0 auto; }
    .section-label { font-size: .7rem; font-weight: 500; letter-spacing: .24em; text-transform: uppercase; color: var(--terracotta); margin-bottom: 12px; }
    .section-title { font-size: clamp(1.9rem, 3.6vw, 2.9rem); color: var(--dark); margin-bottom: 16px; }
    .section-divider { width: 56px; height: 2px; background: var(--gold); margin-bottom: 36px; }
    .lead p { font-size: 1.06rem; line-height: 1.95; color: var(--text); }
    .lead p + p { margin-top: 20px; color: var(--text-light); font-size: .98rem; }

    .alt { background: var(--sand); }
    .see-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .see-card { background: var(--white); border-radius: var(--radius); padding: 30px 28px 32px; box-shadow: var(--shadow-sm); }
    .see-num { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: var(--gold); line-height: 1; margin-bottom: 14px; }
    .see-card h3 { font-size: 1.42rem; color: var(--dark); margin-bottom: 10px; }
    .see-card p { font-size: .92rem; color: var(--text-light); line-height: 1.8; }

    .reach-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
    .reach-grid h3 { font-size: 1.35rem; color: var(--dark); margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid var(--sand-dark); }
    .reach-grid p { font-size: .93rem; color: var(--text-light); line-height: 1.85; }
    .when { margin-top: 64px; padding-top: 56px; border-top: 1px solid var(--sand-dark); }
    .when p { font-size: .98rem; color: var(--text-light); line-height: 1.95; max-width: 780px; }

    .stay-intro { color: var(--text-light); font-size: .98rem; margin: -18px 0 36px; }
    .stay-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
    .stay-grid.single { grid-template-columns: 1fr; }
    .stay-card { background: var(--white); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; transition: transform .35s, box-shadow .35s; }
    .stay-card:hover { transform: translateY(-6px); box-shadow: var(--shadow); }
    .stay-grid.single .stay-card { flex-direction: row; }
    .stay-img { display: block; height: 270px; overflow: hidden; }
    .stay-grid.single .stay-img { flex: 0 0 52%; height: auto; min-height: 320px; }
    .stay-img img { height: 100%; transition: transform .6s ease; }
    .stay-card:hover .stay-img img { transform: scale(1.04); }
    .stay-body { padding: 30px 32px 34px; display: flex; flex-direction: column; justify-content: center; flex: 1; }
    .stay-body h3 { font-size: 1.75rem; color: var(--dark); margin-bottom: 10px; }
    .stay-body p { font-size: .94rem; color: var(--text-light); line-height: 1.8; margin-bottom: 22px; }
    .stay-actions { display: flex; flex-wrap: wrap; gap: 10px; }
    .btn { display: inline-block; padding: 12px 24px; border-radius: 30px; font-size: .74rem; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; transition: transform .2s, box-shadow .2s, background .2s, color .2s, border-color .2s; }
    .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(0,0,0,.14); }
    .btn-primary { background: var(--terracotta); color: var(--white); }
    .btn-primary:hover { background: var(--brown); }
    .btn-outline { border: 1.5px solid var(--sand-dark); color: var(--text-light); }
    .btn-outline:hover { border-color: var(--terracotta); color: var(--terracotta); }

    .other-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
    .other-card { position: relative; display: block; height: 220px; border-radius: var(--radius); overflow: hidden; color: var(--white); }
    .other-card img { height: 100%; transition: transform .6s ease; }
    .other-card:hover img { transform: scale(1.05); }
    .other-card::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(30,24,16,0) 35%, rgba(30,24,16,.78) 100%); }
    .other-card span { position: absolute; left: 22px; right: 22px; bottom: 18px; z-index: 1; font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; line-height: 1.2; }

    footer { background: var(--dark); padding: 60px 56px 38px; }
    .footer-inner { max-width: 1120px; margin: 0 auto; }
    .footer-top { display: grid; grid-template-columns: 1.6fr 1fr 1fr; gap: 48px; padding-bottom: 40px; margin-bottom: 26px; border-bottom: 1px solid rgba(255,255,255,.08); }
    .footer-brand h3 { font-size: 1.35rem; color: var(--white); margin-bottom: 10px; }
    .footer-brand p { font-size: .83rem; color: rgba(255,255,255,.45); line-height: 1.85; max-width: 320px; }
    .footer-col h4 { font-family: 'Inter', sans-serif; font-size: .68rem; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
    .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
    .footer-col ul a { font-size: .84rem; color: rgba(255,255,255,.5); transition: color .2s; }
    .footer-col ul a:hover { color: var(--white); }
    .footer-copy { font-size: .74rem; color: rgba(255,255,255,.35); }
    .footer-copy a { text-decoration: underline; }

    .wa-float { position: fixed; right: 20px; bottom: calc(20px + env(safe-area-inset-bottom)); z-index: 90; width: 58px; height: 58px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 20px rgba(0,0,0,.25); transition: transform .2s, box-shadow .2s; }
    .wa-float:hover { transform: scale(1.08); box-shadow: 0 8px 26px rgba(0,0,0,.32); }
    .wa-float svg { width: 32px; height: 32px; }

    @media (max-width: 1180px) {
      nav, nav.scrolled { padding-left: 24px; padding-right: 24px; }
      .nav-links { display: none; position: fixed; inset: 0; background: rgba(30,24,16,.97); flex-direction: column; justify-content: center; gap: 30px; margin: 0; }
      .nav-links.open { display: flex; }
      .nav-links a, nav.scrolled .nav-links a { color: var(--white); font-size: .9rem; }
      .nav-lang { display: flex; gap: 8px; }
      .nav-lang a.lang-active { background: var(--gold); border-color: var(--gold); color: var(--dark); }
      nav .lang-switcher { display: none; }
      .hamburger { display: flex; position: relative; z-index: 101; }
      .nav-links.open ~ .hamburger span { background: var(--white); }
    }
    @media (max-width: 900px) {
      section { padding: 64px 24px; }
      .see-grid, .reach-grid, .other-grid { grid-template-columns: 1fr 1fr; }
      .reach-grid { gap: 28px; }
      .stay-grid { grid-template-columns: 1fr; }
      .stay-grid.single .stay-card { flex-direction: column; }
      .stay-grid.single .stay-img { flex: none; height: 250px; min-height: 0; }
      footer { padding: 48px 24px 32px; }
      .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
      .footer-brand { grid-column: 1 / -1; }
    }
    @media (max-width: 620px) {
      .hero { min-height: 70vh; }
      .hero-copy { padding: 120px 20px 60px; }
      .see-grid, .reach-grid, .other-grid, .footer-top { grid-template-columns: 1fr; }
      .other-card { height: 170px; }
      .stay-body { padding: 24px 22px 28px; }
      .wa-float { right: 16px; width: 52px; height: 52px; }
      .wa-float svg { width: 29px; height: 29px; }
    }`;

const WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02zM12.04 20.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.23 8.25c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z"/></svg>';

/**
 * @param dest   voce di DESTINATIONS
 * @param lang   'it' | 'en' | 'de' | 'fr'
 * @param ctx    { site, i18nVersion }
 */
export function renderDestination(dest, lang, ctx) {
  const c = dest[lang];
  const L = LABELS[lang];
  const prefix = lang === 'it' ? '' : '/' + lang;
  const url = l => ctx.site + (l === 'it' ? '' : '/' + l) + `/${dest.slug}/`;
  const langLinks = ALL_LANGS.map(l =>
    `<a data-lang-btn="${l}" href="${l === 'it' ? '' : '/' + l}/${dest.slug}/" hreflang="${l}"${l === lang ? ' class="lang-active"' : ''} onclick="if(window.iehSetLang){iehSetLang('${l}');return false}">${l.toUpperCase()}</a>`
  ).join('');

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristDestination',
      name: c.name,
      description: c.desc,
      url: url(lang),
      image: ctx.site + dest.hero,
      geo: { '@type': 'GeoCoordinates', latitude: dest.geo.lat, longitude: dest.geo.lng },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@id': ctx.site + prefix + '/', name: 'Italian Escapes Homes' } },
        { '@type': 'ListItem', position: 2, item: { '@id': url(lang), name: c.name } },
      ],
    },
  ].map(d => `  <script type="application/ld+json">\n${JSON.stringify(d, null, 2).replace(/<\//g, '<\\/').replace(/^/gm, '  ')}\n  </script>`).join('\n');

  const stayCards = dest.homes.map(slug => {
    const h = HOMES[slug];
    return `
        <article class="stay-card">
          <a class="stay-img" href="${prefix}/${slug}/"><img src="${h.image}" alt="${esc(h.name)}" loading="lazy" decoding="async"></a>
          <div class="stay-body">
            <h3><a href="${prefix}/${slug}/">${esc(h.name)}</a></h3>
            <p>${esc(h.blurb[lang])}</p>
            <div class="stay-actions">
              <a class="btn btn-primary" href="${prefix}/${slug}/">${esc(L.discover)}</a>
              <a class="btn btn-outline" href="https://admin.italianescapeshomes.it/disponibilita?casa=${slug}&amp;lang=${lang}">${esc(L.availability)}</a>
            </div>
          </div>
        </article>`;
  }).join('');

  const others = DESTINATIONS.filter(d => d.slug !== dest.slug).map(d => `
        <a class="other-card" href="${prefix}/${d.slug}/"><img src="${d.hero}" alt="" loading="lazy" decoding="async"><span>${esc(d[lang].name)}</span></a>`).join('');

  const footerDest = DESTINATIONS.map(d => `<li><a href="${prefix}/${d.slug}/">${esc(d[lang].name)}</a></li>`).join('\n            ');
  const footerHomes = Object.entries(HOMES).map(([slug, h]) => `<li><a href="${prefix}/${slug}/">${esc(h.name)}</a></li>`).join('\n            ');

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <!-- GENERATA da tools/build-i18n.mjs a partire da tools/destinations.mjs: non modificare a mano -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(c.title)}</title>
  <meta name="description" content="${esc(c.desc)}" />
  <link rel="canonical" href="${url(lang)}" />
${ALL_LANGS.map(l => `  <link rel="alternate" hreflang="${l}" href="${url(l)}" />`).join('\n')}
  <link rel="alternate" hreflang="x-default" href="${url('en')}" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${url(lang)}" />
  <meta property="og:title" content="${esc(c.title)}" />
  <meta property="og:description" content="${esc(c.desc)}" />
  <meta property="og:image" content="${ctx.site}${dest.hero}" />
  <meta property="og:locale" content="${OG_LOCALE[lang]}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(c.title)}" />
  <meta name="twitter:description" content="${esc(c.desc)}" />
  <meta name="twitter:image" content="${ctx.site}${dest.hero}" />
${jsonLd}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
  <link rel="preload" as="image" href="${dest.hero}" fetchpriority="high" />
  <style>${CSS}
  </style>
</head>
<body>

  <nav id="nav">
    <a href="${prefix}/" class="nav-logo">&#8592; ${esc(L.back)}</a>
    <ul class="nav-links" id="navLinks">
      <li><a href="#vedere">${esc(L.navSee)}</a></li>
      <li><a href="#arrivare">${esc(L.navReach)}</a></li>
      <li><a href="#case">${esc(L.navStay)}</a></li>
      <li><a href="${prefix}/#proprieta" class="nav-cta">${esc(L.navHomes)}</a></li>
      <li class="nav-lang">${langLinks}</li>
    </ul>
    <div class="lang-switcher">${langLinks}</div>
    <button class="hamburger" id="hamburger" type="button" aria-label="${MENU[lang]}" onclick="toggleMenu()"><span></span><span></span><span></span></button>
  </nav>

  <header class="hero">
    <img src="${dest.hero}" alt="${esc(c.name)}" fetchpriority="high">
    <div class="hero-veil"></div>
    <div class="hero-copy">
      <div class="hero-eyebrow">${esc(c.eyebrow)}</div>
      <h1>${c.h1}</h1>
      <p class="hero-sub">${esc(c.sub)}</p>
    </div>
  </header>

  <main>
    <section>
      <div class="narrow lead">
        <p>${esc(c.intro[0])}</p>
        <p>${esc(c.intro[1])}</p>
      </div>
    </section>

    <section id="vedere" class="alt">
      <div class="inner">
        <p class="section-label">${esc(L.seeLabel)}</p>
        <h2 class="section-title">${esc(L.seeTitle)}</h2>
        <div class="section-divider"></div>
        <div class="see-grid">${c.see.map(([title, text], i) => `
          <article class="see-card">
            <div class="see-num">${String(i + 1).padStart(2, '0')}</div>
            <h3>${esc(title)}</h3>
            <p>${esc(text)}</p>
          </article>`).join('')}
        </div>
      </div>
    </section>

    <section id="arrivare">
      <div class="inner">
        <p class="section-label">${esc(L.reachLabel)}</p>
        <h2 class="section-title">${esc(L.reachTitle)}</h2>
        <div class="section-divider"></div>
        <div class="reach-grid">
          <div><h3>${esc(L.car)}</h3><p>${esc(c.reach[0])}</p></div>
          <div><h3>${esc(L.train)}</h3><p>${esc(c.reach[1])}</p></div>
          <div><h3>${esc(L.plane)}</h3><p>${esc(c.reach[2])}</p></div>
        </div>
        <div class="when" id="quando">
          <p class="section-label">${esc(L.whenLabel)}</p>
          <h2 class="section-title">${esc(L.whenTitle)}</h2>
          <div class="section-divider"></div>
          <p>${esc(c.when)}</p>
        </div>
      </div>
    </section>

    <section id="case" class="alt">
      <div class="inner">
        <p class="section-label">${esc(L.stayLabel)}</p>
        <h2 class="section-title">${esc(c.stayTitle)}</h2>
        <div class="section-divider"></div>
        <p class="stay-intro">${esc(c.stayIntro)}</p>
        <div class="stay-grid${dest.homes.length === 1 ? ' single' : ''}">${stayCards}
        </div>
      </div>
    </section>

    <section>
      <div class="inner">
        <p class="section-label">${esc(L.otherLabel)}</p>
        <h2 class="section-title">${esc(L.otherTitle)}</h2>
        <div class="section-divider"></div>
        <div class="other-grid">${others}
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <h3>Italian Escapes Homes</h3>
          <p>${esc(L.footerTag)}</p>
        </div>
        <div class="footer-col">
          <h4>${esc(L.otherLabel)}</h4>
          <ul>
            ${footerDest}
          </ul>
        </div>
        <div class="footer-col">
          <h4>${esc(L.navHomes)}</h4>
          <ul>
            ${footerHomes}
            <li><a href="${prefix}/#contatti">${esc(L.contact)}</a></li>
          </ul>
        </div>
      </div>
      <p class="footer-copy">&copy; ${ctx.year} Italian Escapes Homes &middot; <a href="/privacy.html">Privacy Policy</a></p>
    </div>
  </footer>

  <a href="https://wa.me/393474120611?text=Ciao!%20Vorrei%20informazioni%20sulle%20vostre%20case%20vacanza." class="wa-float" target="_blank" rel="noopener" aria-label="${esc(WHATSAPP[lang])}">${WA_ICON}</a>

  <script>
    var nav = document.getElementById('nav');
    function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 60); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }
    document.querySelectorAll('#navLinks a').forEach(function (a) {
      a.addEventListener('click', function () { document.getElementById('navLinks').classList.remove('open'); });
    });
  </script>
  <script src="/i18n.js?v=${ctx.i18nVersion}" defer></script>
</body>
</html>
`;
}

export { DESTINATIONS };
