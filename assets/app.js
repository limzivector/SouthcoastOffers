/* =========================================================================
   South Coast Offers — shared front-end behavior
   - Supabase lead capture via REST (publishable key is safe to expose)
   - mobile nav, active-link, footer year, toast, favorites (localStorage)
   ========================================================================= */
/* =========================================================================
   CONFIG — paste your keys here to switch on the automatic funnel steps.
   googleMapsApiKey:     Google Maps Places API key -> address autocomplete (step 1)
   propertyDataEndpoint: your serverless endpoint (e.g. /api/property) that calls a
                         property-data provider (ATTOM/Estated/Rentcast) -> auto-fills
                         the home facts in step 3. Leave blank for manual entry.
   ========================================================================= */
window.SCO_CONFIG = window.SCO_CONFIG || { googleMapsApiKey: '', propertyDataEndpoint: '' };

(function () {
  'use strict';

  /* ---- Supabase config (publishable key — intended for client use) ---- */
  var SUPABASE_URL = 'https://wkpqpoqvcycgiyhrecvp.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_M9PpXQJOywHcR0efXk-s5A_gqrT32ey';

  /* ---- Lead capture -------------------------------------------------- */
  // submitLead({type, name, email, ...}) -> Promise<boolean>
  // Quietly resolves false on failure so the UX never blocks on the network.
  function submitLead(data) {
    var row = Object.assign({ source_page: location.pathname || '/' }, data);
    return fetch(SUPABASE_URL + '/rest/v1/leads', {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(row)
    }).then(function (res) {
      if (!res.ok) {
        return res.text().then(function (t) {
          console.warn('Lead submit failed', res.status, t);
          return false;
        });
      }
      return true;
    }).catch(function (e) {
      console.warn('Lead submit error', e);
      return false;
    });
  }

  /* ---- Toast --------------------------------------------------------- */
  var toastEl;
  function toast(msg, kind) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.className = 'toast' + (kind ? ' ' + kind : '');
    // force reflow so re-triggering animates
    void toastEl.offsetWidth;
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove('show'); }, 3400);
  }

  /* ---- Favorites (saved homes) -------------------------------------- */
  var FAV_KEY = 'sco_favorites';
  function getFavs() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
    catch (e) { return []; }
  }
  function isFav(id) { return getFavs().indexOf(String(id)) > -1; }
  function toggleFav(id) {
    id = String(id);
    var favs = getFavs();
    var i = favs.indexOf(id);
    if (i > -1) { favs.splice(i, 1); } else { favs.push(id); }
    try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch (e) {}
    return i === -1; // true if now favorited
  }

  /* ---- Formatting helpers ------------------------------------------- */
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function moneyK(n) {
    if (n >= 1000000) return '$' + (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + 'M';
    if (n >= 1000) return '$' + Math.round(n / 1000) + 'K';
    return '$' + n;
  }
  function digits(v) { return (v || '').toString().replace(/[^0-9]/g, ''); }
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v || '').trim()); }

  /* ---- Service area (Orange County + Los Angeles County ZIPs) -------- */
  var OC_PREFIX = ['926', '927', '928'];
  var LA_PREFIX = ['900', '901', '902', '903', '904', '905', '906', '907', '908',
                   '910', '911', '912', '913', '914', '915', '916', '917', '918', '935'];
  var ALLOWED = {};
  LA_PREFIX.concat(OC_PREFIX).forEach(function (p) { ALLOWED[p] = true; });
  function inServiceArea(zip) {
    if (!/^\d{5}$/.test(zip)) return false;
    return !!ALLOWED[zip.substring(0, 3)];
  }

  /* ---- Rough SoCal $/sqft proxy by ZIP prefix (NOT a valuation) ------ */
  var PSF = { '902': 780, '903': 760, '904': 820, '905': 720, '906': 700, '907': 560,
             '908': 650, '926': 760, '927': 560, '928': 700, '900': 620, '901': 600,
             '910': 560, '911': 590, '912': 560, '913': 560 };
  function pricePerSqft(zip) {
    var pre = (zip || '').substring(0, 3);
    return PSF[pre] || 550;
  }

  /* ---- Shared chrome: mobile nav, active link, footer year ---------- */
  function initChrome() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    // Canonical top nav — seller-focused, centralized here.
    if (links) {
      links.innerHTML =
        '<a href="/ways-to-sell">Ways to Sell</a>' +
        '<a href="/home-value">Home Value</a>' +
        '<a href="/reviews">Reviews</a>' +
        '<a href="/guides">Guides</a>' +
        '<a href="/about">About</a>' +
        '<a class="nav-cta" href="/sell">Get My Offer</a>';
    }
    if (toggle && links) {
      toggle.addEventListener('click', function () { links.classList.toggle('open'); });
    }
    // Canonical footer — seller-focused, centralized here.
    var fg = document.querySelector('footer.site .foot-grid');
    if (fg) {
      fg.innerHTML =
        '<div>' +
          '<div class="logo" style="color:#fff;margin-bottom:12px"><span class="mark">SC</span> South Coast Offers</div>' +
          '<p style="max-width:330px;color:#9fb2c8">A simpler way to sell your home for cash in Orange County and Los Angeles. Fair offers, flexible closings, no hassle.</p>' +
        '</div>' +
        '<div><h5>Sell</h5><a href="/sell">Get a cash offer</a><a href="/ways-to-sell">Ways to sell</a><a href="/sell#how">How it works</a></div>' +
        '<div><h5>Pricing</h5><a href="/home-value">Home value estimate</a><a href="/calculators">Net proceeds calculator</a></div>' +
        '<div><h5>Company</h5><a href="/about">About us</a><a href="/agents">For agents</a><a href="/reviews">Reviews</a><a href="/guides">Guides</a></div>' +
        '<div><h5>Contact</h5><a href="tel:5551234567">(555) 123-4567</a><a href="mailto:offers@southcoastoffers.com">offers@southcoastoffers.com</a><a href="/contact">Contact us</a></div>';
    }

    // active nav link by pathname
    var path = location.pathname.replace(/\/index(\.html)?$/, '/').replace(/\.html$/, '');
    if (path === '') path = '/';
    document.querySelectorAll('.nav-links a[href]').forEach(function (a) {
      var href = a.getAttribute('href').replace(/\.html$/, '');
      if (href === path || (href !== '/' && path.indexOf(href) === 0)) a.classList.add('active');
    });
    // footer year
    document.querySelectorAll('[data-year]').forEach(function (el) {
      // Year is fixed at build to avoid Date dependency surprises; kept current.
      el.textContent = '2026';
    });
  }

  document.addEventListener('DOMContentLoaded', initChrome);

  /* ---- Google Places address autocomplete (optional) ----------------- */
  // Activates only when SCO_CONFIG.googleMapsApiKey is set; otherwise the
  // address fields stay manual. Loads the Maps JS SDK on demand.
  function loadGoogleMaps(key, cb) {
    if (window.google && window.google.maps && window.google.maps.places) { cb(); return; }
    if (document.getElementById('gmaps-sdk')) {
      var iv = setInterval(function () {
        if (window.google && window.google.maps && window.google.maps.places) { clearInterval(iv); cb(); }
      }, 150);
      return;
    }
    var s = document.createElement('script');
    s.id = 'gmaps-sdk';
    s.async = true; s.defer = true;
    s.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(key) + '&libraries=places';
    s.onload = cb;
    s.onerror = function () { console.warn('Google Maps failed to load'); };
    document.head.appendChild(s);
  }
  // initAddressAutocomplete(inputEl, onSelect) -> true if wired, false if manual.
  function initAddressAutocomplete(input, onSelect) {
    var key = (window.SCO_CONFIG && SCO_CONFIG.googleMapsApiKey) || '';
    if (!key || !input) return false;
    loadGoogleMaps(key, function () {
      try {
        var ac = new google.maps.places.Autocomplete(input, {
          types: ['address'], componentRestrictions: { country: 'us' },
          fields: ['address_components', 'formatted_address']
        });
        ac.addListener('place_changed', function () {
          var p = ac.getPlace() || {}, c = {};
          (p.address_components || []).forEach(function (comp) {
            var t = comp.types;
            if (t.indexOf('street_number') > -1) c.num = comp.long_name;
            if (t.indexOf('route') > -1) c.route = comp.long_name;
            if (t.indexOf('locality') > -1) c.city = comp.long_name;
            if (t.indexOf('postal_code') > -1) c.zip = comp.long_name;
            if (t.indexOf('administrative_area_level_1') > -1) c.state = comp.short_name;
          });
          onSelect({
            street: [c.num, c.route].filter(Boolean).join(' '),
            city: c.city || '', zip: c.zip || '', state: c.state || '',
            formatted: p.formatted_address || ''
          });
        });
      } catch (e) { console.warn('autocomplete init failed', e); }
    });
    return true;
  }
  // fetchPropertyData(address) -> Promise<facts|null>. Wire a property-data
  // provider via SCO_CONFIG.propertyDataEndpoint (defaults to none -> manual entry).
  function fetchPropertyData(address) {
    var ep = (window.SCO_CONFIG && SCO_CONFIG.propertyDataEndpoint) || '';
    if (!ep) return Promise.resolve(null);
    return fetch(ep + (ep.indexOf('?') > -1 ? '&' : '?') + 'address=' + encodeURIComponent(address))
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; });
  }

  /* ---- Public API ---------------------------------------------------- */
  window.SCO = {
    submitLead: submitLead,
    toast: toast,
    getFavs: getFavs,
    isFav: isFav,
    toggleFav: toggleFav,
    money: money,
    moneyK: moneyK,
    digits: digits,
    validEmail: validEmail,
    inServiceArea: inServiceArea,
    pricePerSqft: pricePerSqft,
    initAddressAutocomplete: initAddressAutocomplete,
    fetchPropertyData: fetchPropertyData
  };
})();
