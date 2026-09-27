/* Aldodev — cambio de idioma ES/EN.
   El español vive en el HTML: es el idioma por defecto y el que indexa Google.
   Aquí solo está el inglés. Al cambiar a EN se guarda el español original en
   memoria, para poder regresar sin recargar la página. */

(function () {
  'use strict';

  var EN = {
    'skip': 'Skip to content',

    'nav.aria': 'Sections',
    'nav.precios': 'Pricing',
    'nav.proyectos': 'Work',
    'nav.proceso': 'Process',
    'cta.cotizar': 'Get a quote',

    'hero.eyebrow': 'Custom web development',
    'hero.h1': 'Your business,<br>online.',
    'hero.lede': 'Modern, fast, mobile-ready websites. Custom design, not templates. I build it, I maintain it.',
    'hero.wa': 'Get a quote on WhatsApp',
    'hero.precios': 'See pricing',
    'hero.note': 'Same-day reply · Free quote',

    'mk.marca': 'Brand',
    'mk.hero': 'Your business, online.',
    'mk.ia': 'AI Assistant',
    'mk.ayuda': 'How can I help?',

    'precios.h2': 'Clear pricing',
    'precios.sub': 'No fine print. Prices in Mexican pesos.',
    'from': 'from',
    'per': '/mo',

    'p1.kicker': 'Website development',
    'p1.unit': 'MXN · one-time payment',
    'p1.t1': 'Custom design',
    'p1.t2': 'Up to 5 pages',
    'p1.t3': 'Mobile-ready',
    'p1.t4': 'Publishing and setup',
    'p1.t5': 'Domain not included',
    'p1.btn': 'Get started',

    'p2.kicker': 'Monthly maintenance',
    'p2.unit': 'MXN · cancel anytime',
    'p2.t1': 'Hosting and SSL certificate',
    'p2.t2': 'Security updates',
    'p2.t3': 'Weekly backups',
    'p2.btn': 'How it works',

    'opt.title': 'Add-ons',
    'venta.h4': 'Sell online',
    'venta.sub': 'Grow in stages, not all at once',
    'st1.tag': 'Stage 1',
    'st1.name': 'Catalog + Mercado Pago',
    'st1.desc': 'Your products with a direct payment link. Start selling without building a full store.',
    'st2.tag': 'Stage 2',
    'st2.name': 'Full store',
    'st2.desc': 'Cart, payments, shipping and inventory managed from one panel.',

    'chat.h4': 'AI chatbot',
    'chat.desc': "Answers your customers' questions 24/7 using your business information.",
    'chat.pill': '+ $490/mo for AI maintenance',

    'form.h4': 'Forms',
    'form.desc': 'Bookings, appointments, quotes or customer sign-ups. Responses reach you by email or WhatsApp.',

    'seo.h4': 'Google SEO',
    'seo.desc': 'Ongoing work so you show up when people search for what you sell.',

    'price.foot': 'All prices in MXN. The final price depends on scope; I confirm it in writing before starting.',

    'proy.h2': 'Work',
    'proy.sub': 'Sites I designed and built end to end.',
    'mad.kind': 'Custom furniture',
    'mad.desc': 'Catalog by product line, a project quoting tool, and a panel to manage pieces and orders.',
    'mad.alt': 'Maderiva website: custom furniture catalog',
    'cas.kind': 'Interior design and remodeling',
    'cas.desc': 'Project portfolio, finishes catalog and quote requests for blinds, curtains and wall coverings.',
    'cas.alt': 'Casablanco website: interior design and remodeling',
    'apx.kind': 'Industrial control engineering',
    'apx.desc': 'Corporate website.',
    'apx.alt': 'Apex Controls website: industrial control engineering',

    'proc.h2': 'How we work',
    'proc.sub': 'Four steps. You always know where things stand.',
    's1.h3': 'Call',
    's1.p': '30 minutes, free. You tell me what you sell and who you sell it to. I tell you if I can help and what it costs.',
    's2.h3': 'Proposal',
    's2.p': 'Scope, price and delivery date in writing. If you agree, we lock the date with a deposit.',
    's3.h3': 'Design and development',
    's3.p': 'I show you progress on a real link you can open anytime. We adjust on the site itself, not on images.',
    's4.h3': 'Launch',
    's4.p': 'We publish on your domain, I show you how to use it, and maintenance stays active if you want it.',

    'faq.h2': 'Frequently asked questions',
    'q1': 'Is the domain included?',
    'a1': "No. The domain is purchased separately and paid yearly directly to the provider, so it stays in your name: it's yours, not mine. I help you choose it, register it and point it to your site at no extra cost.",
    'q2': "What if I don't want monthly maintenance?",
    'a2': 'The site is yours and I hand it over working. Maintenance covers hosting, SSL, backups and security updates. Without it, those tasks are on you.',
    'q3': 'Can I cancel maintenance later?',
    'a3': 'Anytime, no penalty. I hand over the site and its backups so you can move it wherever you prefer.',
    'q4': 'How long does it take?',
    'a4': 'A site of up to 5 pages usually takes 2 to 3 weeks, including your review time. The exact date goes in the proposal.',
    'q5': 'What do you need from me to start?',
    'a5': "Your logo if you have one, photos of your product or space, and the basic text about your business. If you don't have the text, we write it together on the call.",
    'q6': 'Do you work with businesses in other cities?',
    'a6': "Yes. The whole process runs over WhatsApp and video calls — that's how I work from the start.",

    'cta.h2': "Let's build your website",
    'cta.p': "Send me a message and I'll quote you today.",
    'wa.aria': 'Message on WhatsApp',

    'foot.by': 'Aldo Eugenio López Domínguez · Web development · Mexico',
    'foot.aria': 'Links',
    'foot.correo': 'Email'
  };

  /* Textos que no viven en el cuerpo de la página */
  var META = {
    en: {
      lang: 'en',
      locale: 'en_US',
      title: 'Aldodev — Professional web development for businesses | Aldo López',
      desc: 'Modern, fast, mobile-ready websites for businesses in Mexico. Development from $10,000 MXN, maintenance from $400 per month. Online store, AI chatbot and SEO.',
      ogTitle: 'Professional web development for businesses — Aldodev',
      ogDesc: 'Modern, fast, mobile-ready sites. From $10,000 MXN. Online store, AI chatbot and SEO.',
      wa: "Hi Aldo, I'd like a quote for a website",
      waDev: "Hi Aldo, I'm interested in having a website built",
      mailSubject: 'Website quote',
      btnAria: 'Cambiar a español'
    },
    es: {
      lang: 'es-MX',
      locale: 'es_MX',
      title: 'Aldodev — Desarrollo web profesional para negocios | Aldo López',
      desc: 'Sitios web modernos, rápidos y adaptados a móviles para negocios en México. Desarrollo desde $10,000 MXN, mantenimiento desde $400 al mes. Tienda en línea, chatbot con IA y SEO.',
      ogTitle: 'Desarrollo web profesional para negocios — Aldodev',
      ogDesc: 'Sitios modernos, rápidos y adaptados a móviles. Desde $10,000 MXN. Tienda en línea, chatbot con IA y SEO.',
      wa: 'Hola Aldo, quiero cotizar un sitio web',
      waDev: 'Hola Aldo, me interesa el desarrollo de un sitio web',
      mailSubject: 'Cotización de sitio web',
      btnAria: 'Switch to English'
    }
  };

  var ES = {};          // español original, capturado del HTML
  var captured = false;
  var current = 'es';

  function meta(sel) { return document.querySelector(sel); }

  function capture() {
    if (captured) return;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      ES[el.dataset.i18n] = el.textContent.trim();
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      ES[el.dataset.i18nHtml] = el.innerHTML.trim();
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      ES[el.dataset.i18nAlt] = el.getAttribute('alt');
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      ES[el.dataset.i18nAria] = el.getAttribute('aria-label');
    });
    captured = true;
  }

  function apply(lang) {
    capture();
    var dict = lang === 'en' ? EN : ES;
    var m = META[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = dict[el.dataset.i18nHtml];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = dict[el.dataset.i18nAlt];
      if (v != null) el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = dict[el.dataset.i18nAria];
      if (v != null) el.setAttribute('aria-label', v);
    });

    /* Enlaces de WhatsApp: el mensaje prellenado cambia de idioma.
       El de la tarjeta de precio usa un texto distinto al del resto. */
    document.querySelectorAll('a[data-wa]').forEach(function (a) {
      var isDev = a.classList.contains('btn-accent');
      var base = a.getAttribute('href').split('?')[0];
      a.setAttribute('href', base + '?text=' + encodeURIComponent(isDev ? m.waDev : m.wa));
    });
    document.querySelectorAll('a[data-mail]').forEach(function (a) {
      var base = a.getAttribute('href').split('?')[0];
      a.setAttribute('href', base + '?subject=' + encodeURIComponent(m.mailSubject));
    });

    document.documentElement.lang = m.lang;
    document.title = m.title;
    if (meta('meta[name="description"]')) meta('meta[name="description"]').content = m.desc;
    if (meta('meta[property="og:locale"]')) meta('meta[property="og:locale"]').content = m.locale;
    if (meta('meta[property="og:title"]')) meta('meta[property="og:title"]').content = m.ogTitle;
    if (meta('meta[property="og:description"]')) meta('meta[property="og:description"]').content = m.ogDesc;

    document.body.classList.toggle('lang-en', lang === 'en');
    var btn = document.getElementById('langBtn');
    if (btn) btn.setAttribute('aria-label', m.btnAria);

    current = lang;
    try { localStorage.setItem('aldodev-lang', lang); } catch (e) {}
  }

  function init() {
    var btn = document.getElementById('langBtn');
    if (!btn) return;

    var saved = null;
    try { saved = localStorage.getItem('aldodev-lang'); } catch (e) {}
    if (saved === 'en') apply('en');

    btn.addEventListener('click', function () {
      var next = current === 'es' ? 'en' : 'es';
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduce) { apply(next); return; }

      /* El contenido se atenúa, se cambia el texto con la página tapada,
         y vuelve. Así no se ve el salto de un idioma a otro. */
      document.body.classList.add('lang-swapping');
      btn.classList.add('is-pulsing');
      window.setTimeout(function () {
        apply(next);
        document.body.classList.remove('lang-swapping');
      }, 190);
      window.setTimeout(function () { btn.classList.remove('is-pulsing'); }, 700);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
