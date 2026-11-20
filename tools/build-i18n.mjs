#!/usr/bin/env node
/**
 * Genera le versioni statiche EN / DE / FR delle pagine del sito.
 *
 * Sorgenti: le 6 pagine italiane (index.html + le 5 schede) e le traduzioni in i18n.js.
 * Output:   /en/…, /de/…, /fr/… (una cartella per lingua, stessa struttura) e sitemap.xml.
 *
 * Le cartelle en/ de/ fr/ sono generate: non modificarle a mano. Dopo ogni modifica a
 * una pagina italiana o a i18n.js rilanciare:
 *
 *     node tools/build-i18n.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.italianescapeshomes.it';
const LANGS = ['en', 'de', 'fr'];
const OG_LOCALE = { en: 'en_GB', de: 'de_DE', fr: 'fr_FR' };
/* '' = homepage; gli altri sono gli slug delle schede */
const PAGES = ['', 'casa-mariangela', 'appartamento-piscina', 'pool-and-garden', 'lake-at-home', 'dolce-vetta-valmalenco'];
const PAGE_PATHS = new Set(PAGES.map(pagePath));

function pagePath(slug) { return slug ? `/${slug}/` : '/'; }
function sourceFile(slug) { return path.join(ROOT, slug, 'index.html'); }
function pageUrl(slug, lang) { return SITE + (lang === 'it' ? '' : '/' + lang) + pagePath(slug); }

/* ── Traduzioni: esegue i18n.js in una sandbox e ne legge la tabella ─────── */
function loadTranslations() {
  const src = fs.readFileSync(path.join(ROOT, 'i18n.js'), 'utf8');
  const sandbox = {
    document: { addEventListener() {} },
    location: { pathname: '/' },
    navigator: {},
    localStorage: { getItem() { return null; }, setItem() {} },
  };
  vm.runInNewContext(src + '\n;globalThis.__T = IEH_TRANSLATIONS;', sandbox);
  return sandbox.__T;
}

const escText = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = s => escText(s).replace(/"/g, '&quot;');

/* Intervalli [inizio, fine) dei blocchi <script> e <style>: lì dentro non si tocca nulla */
function codeRanges(html) {
  const ranges = [];
  const re = /<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi;
  let m;
  while ((m = re.exec(html))) ranges.push([m.index, m.index + m[0].length]);
  return ranges;
}
const inRanges = (ranges, i) => ranges.some(([a, b]) => i >= a && i < b);

/* Sostituisce `re` solo fuori dai blocchi <script>/<style> */
function replaceOutsideCode(html, re, fn) {
  const ranges = codeRanges(html);
  return html.replace(re, (...args) => {
    const offset = args[args.length - 2];
    return inRanges(ranges, offset) ? args[0] : fn(...args);
  });
}

/* ── data-i18n / data-i18n-html: stesso effetto di iehApply(), ma statico ── */
function applyTranslations(html, t, file) {
  const ranges = codeRanges(html);
  const open = /<([a-zA-Z][a-zA-Z0-9]*)\b([^<>]*?)\sdata-i18n(-html)?="([^"]+)"([^<>]*)>/g;
  let out = '';
  let pos = 0;
  let done = 0;
  let m;
  while ((m = open.exec(html))) {
    if (inRanges(ranges, m.index)) continue;
    const [tagText, tag, , isHtml, key] = m;
    const value = t[key];
    const openEnd = m.index + tagText.length;
    done++;

    if (tag.toLowerCase() === 'meta') {
      const newTag = value === undefined
        ? tagText
        : tagText.replace(/\scontent="[^"]*"/, () => ` content="${escAttr(value)}"`);
      out += html.slice(pos, m.index) + newTag;
      pos = openEnd;
      continue;
    }

    /* cerca il tag di chiusura corrispondente, contando gli annidamenti */
    const walker = new RegExp(`<(/?)${tag}\\b[^<>]*>`, 'gi');
    walker.lastIndex = openEnd;
    let depth = 1;
    let w;
    let closeStart = -1;
    while ((w = walker.exec(html))) {
      if (w[1]) depth--;
      else if (!w[0].endsWith('/>')) depth++;
      if (depth === 0) { closeStart = w.index; break; }
    }
    if (closeStart < 0) throw new Error(`${file}: tag <${tag}> con chiave "${key}" non chiuso`);

    const inner = value === undefined
      ? html.slice(openEnd, closeStart)
      : (isHtml ? value : escText(value));
    out += html.slice(pos, m.index) + tagText + inner;
    pos = closeStart;
    open.lastIndex = closeStart;
  }
  out += html.slice(pos);

  /* controllo: ogni attributo data-i18n fuori dal codice deve essere stato gestito
     (quelli annidati dentro un elemento già tradotto spariscono, come a runtime) */
  let left = 0;
  const attr = /\sdata-i18n(?:-html)?="/g;
  const outRanges = codeRanges(out);
  let a;
  while ((a = attr.exec(out))) if (!inRanges(outRanges, a.index)) left++;
  if (left > done) throw new Error(`${file}: ${left - done} elementi data-i18n non riconosciuti`);
  return out;
}

/* ── Percorsi: da relativi alla pagina italiana ad assoluti dalla radice ─── */
function localizeRef(ref, slug, lang) {
  if (!ref || /^(#|[a-z][a-z0-9+.-]*:|\/\/|\$\{)/i.test(ref)) return ref;
  const u = new URL(ref, 'http://x' + pagePath(slug));
  let p = u.pathname.replace(/index\.html$/, '');
  if (PAGE_PATHS.has(p)) p = '/' + lang + p;   // link a un'altra pagina: resta nella lingua
  else p = u.pathname;
  return p + u.search + u.hash;
}

function rewriteRefs(html, slug, lang) {
  html = replaceOutsideCode(html, /\b(src|href|data-bg|poster)="([^"]*)"/g,
    (all, name, ref) => `${name}="${localizeRef(ref, slug, lang)}"`);
  /* gli <script src> sono blocchi di codice per replaceOutsideCode: il loro src va gestito a parte */
  html = html.replace(/(<script\b[^>]*?\ssrc=")([^"]*)(")/g,
    (all, a, ref, b) => a + localizeRef(ref, slug, lang) + b);
  html = replaceOutsideCode(html, /url\((['"]?)([^'")]+)\1\)/g,
    (all, q, ref) => `url(${q}${localizeRef(ref, slug, lang)}${q})`);
  html = replaceOutsideCode(html, /openLightbox\('([^']+)'/g,
    (all, ref) => `openLightbox('${localizeRef(ref, slug, lang)}'`);
  /* calendario disponibilità: si apre nella lingua della pagina */
  html = html.replace(/href="(https:\/\/admin\.italianescapeshomes\.it\/disponibilita[^"]*)"/g, (all, href) => {
    const u = new URL(href.replace(/&amp;/g, '&'));
    u.searchParams.set('lang', lang);
    return `href="${escAttr(u.toString())}"`;
  });
  return html;
}

/* ── Meta ────────────────────────────────────────────────────────────────── */
function setMeta(html, attr, name, value) {
  const re = new RegExp(`(<meta ${attr}="${name}"[^>]*?\\scontent=")[^"]*(")`);
  return html.replace(re, (all, a, b) => a + escAttr(value) + b);
}

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
function faqFromPage(html, t) {
  const items = [];
  const re = /<button class="faq-q" data-i18n="([^"]+)"[^>]*>[\s\S]*?<div class="faq-a">\s*<p data-i18n(?:-html)?="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    const q = t[m[1]];
    const a = t[m[2]];
    if (q === undefined || a === undefined) return null;
    items.push({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') },
    });
  }
  const total = (html.match(/<div class="faq-item/g) || []).length;
  return items.length && items.length === total ? items : null;
}

function rewriteJsonLd(html, slug, lang, t, desc) {
  const here = pageUrl(slug, 'it');
  return html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g, (all, a, json, b) => {
    const data = JSON.parse(json);
    const types = [].concat(data['@type']);

    if (types.includes('FAQPage')) {
      const faq = faqFromPage(html, t);
      if (faq) data.mainEntity = faq;   // se le FAQ non hanno chiavi i18n restano com'erano
    }
    if (types.includes('BreadcrumbList')) {
      for (const el of data.itemListElement || []) {
        const id = el.item && el.item['@id'];
        if (!id || !id.startsWith(SITE)) continue;
        const p = id.slice(SITE.length) || '/';
        if (PAGE_PATHS.has(p)) el.item['@id'] = SITE + '/' + lang + p;
      }
    }
    if (types.includes('LodgingBusiness') && data.url && (data.url === here || data.url + '/' === here)) {
      data.url = pageUrl(slug, lang);
      if (desc) data.description = desc;
    }
    const body = JSON.stringify(data, null, 2).replace(/<\//g, '<\\/').replace(/^/gm, '  ');
    return `${a}\n${body}\n  ${b}`;
  });
}

/* ── Una pagina, una lingua ──────────────────────────────────────────────── */
function buildPage(slug, lang, t) {
  const file = sourceFile(slug);
  const source = fs.readFileSync(file, 'utf8');
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');

  if (!source.includes(`hreflang="${lang}"`)) {
    throw new Error(`${rel}: manca il tag hreflang="${lang}" nella pagina italiana`);
  }
  const titleKey = (source.match(/<title data-i18n="([^"]+)"/) || [])[1];
  const descKey = (source.match(/<meta name="description" data-i18n="([^"]+)"/) || [])[1];
  if (!titleKey || !descKey) throw new Error(`${rel}: title o description senza data-i18n`);
  const title = t[titleKey];
  const desc = t[descKey];
  if (!title || !desc) throw new Error(`${rel}: ${titleKey} o ${descKey} non tradotti in ${lang}`);

  let html = applyTranslations(source, t, rel);
  html = html.replace(/<html lang="it">/, `<html lang="${lang}">`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, (all, a, b) => a + pageUrl(slug, lang) + b);
  html = setMeta(html, 'property', 'og:url', pageUrl(slug, lang));
  html = setMeta(html, 'property', 'og:locale', OG_LOCALE[lang]);
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', desc);
  html = setMeta(html, 'name', 'twitter:title', title);
  html = setMeta(html, 'name', 'twitter:description', desc);
  html = rewriteRefs(html, slug, lang);
  html = rewriteJsonLd(html, slug, lang, t, desc);
  html = html.replace(/<head>/, `<head>\n  <!-- GENERATA da tools/build-i18n.mjs a partire da /${rel} e i18n.js: non modificare a mano -->`);

  const outFile = path.join(ROOT, lang, slug, 'index.html');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  return path.relative(ROOT, outFile).replace(/\\/g, '/');
}

/* ── Sitemap ─────────────────────────────────────────────────────────────── */
function day(file) {
  const d = fs.statSync(file).mtime;
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function buildSitemap() {
  const i18nDay = day(path.join(ROOT, 'i18n.js'));
  const all = ['it', ...LANGS];
  const rows = [];
  for (const slug of PAGES) {
    const srcDay = day(sourceFile(slug));
    const alternates = all
      .map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${pageUrl(slug, l)}"/>`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(slug, 'en')}"/>`)
      .join('\n');
    for (const l of all) {
      const lastmod = l === 'it' || srcDay > i18nDay ? srcDay : i18nDay;
      rows.push(`  <url>\n    <loc>${pageUrl(slug, l)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`);
    }
  }
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
    + rows.join('\n') + '\n</urlset>\n';
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
}

/* ── Main ────────────────────────────────────────────────────────────────── */
const T = loadTranslations();
for (const lang of LANGS) {
  if (!T[lang]) throw new Error(`i18n.js: manca la lingua "${lang}"`);
  fs.rmSync(path.join(ROOT, lang), { recursive: true, force: true });
  for (const slug of PAGES) console.log('  ' + buildPage(slug, lang, T[lang]));
}
buildSitemap();
console.log(`  sitemap.xml (${PAGES.length * (LANGS.length + 1)} indirizzi)`);
