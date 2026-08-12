/* ============================================================
   Generator AAC — materiały komunikacyjne
   Źródło symboli: ARASAAC (https://arasaac.org), CC BY-NC-SA
   ============================================================ */

/* ---------------- i18n: PL / EN / UK + Google Translate dla reszty ---------------- */

const LANG_STORAGE_KEY = 'aac-generator-lang';
const SUPPORTED_LANGS = ['pl', 'en', 'uk'];

const I18N = {
  'app.title': {
    pl: 'Generator AAC — materiały komunikacyjne',
    en: 'AAC Generator — communication materials',
    uk: 'Генератор AAC — комунікаційні матеріали',
  },
  'brand.title': {
    pl: 'Generator AAC',
    en: 'AAC Generator',
    uk: 'Генератор AAC',
  },
  'tabs.ariaLabel': {
    pl: 'Rodzaj materiału',
    en: 'Material type',
    uk: 'Тип матеріалу',
  },
  'tabs.generator': {
    pl: 'Generator kart',
    en: 'Card generator',
    uk: 'Генератор карток',
  },
  'tabs.harmonogram': {
    pl: 'Harmonogram dnia',
    en: 'Daily schedule',
    uk: 'Розклад дня',
  },
  'tabs.tablica': {
    pl: 'Tablica komunikacyjna',
    en: 'Communication board',
    uk: 'Комунікаційна дошка',
  },
  'header.portfolio': {
    pl: 'Moje portfolio ↗',
    en: 'My portfolio ↗',
    uk: 'Моє портфоліо ↗',
  },
  'search.label': {
    pl: 'Szukaj piktogramu',
    en: 'Search for a pictogram',
    uk: 'Пошук піктограми',
  },
  'search.placeholder': {
    pl: 'Szukaj symbolu, np. „mycie rąk”, „obiad”, „smutny”…',
    en: 'Search for a symbol, e.g. “washing hands”, “lunch”, “sad”…',
    uk: 'Пошук символу, напр. «миття рук», «обід», «сумний»…',
  },
  'search.button': {
    pl: 'Szukaj',
    en: 'Search',
    uk: 'Пошук',
  },
  'target.label': {
    pl: 'Dodawaj do:',
    en: 'Add to:',
    uk: 'Додавати до:',
  },
  'print.button': {
    pl: '🖨️ Drukuj / Zapisz PDF',
    en: '🖨️ Print / Save PDF',
    uk: '🖨️ Друк / Зберегти PDF',
  },
  'generator.hint': {
    pl: 'Wyszukaj symbol powyżej i kliknij „Dodaj do planszy”. Podpisy i kolory kategorii możesz zmieniać na każdej karcie.',
    en: 'Search for a symbol above and click “Add”. You can edit the caption and category color on each card.',
    uk: 'Знайдіть символ вище і натисніть «Додати». Підпис і колір категорії можна змінити на кожній картці.',
  },
  'generator.clear': {
    pl: 'Wyczyść planszę',
    en: 'Clear board',
    uk: 'Очистити дошку',
  },
  'generator.empty': {
    pl: 'Twoja plansza jest pusta — wyszukaj symbol powyżej i kliknij „Dodaj”.',
    en: 'Your board is empty — search for a symbol above and click “Add”.',
    uk: 'Ваша дошка порожня — знайдіть символ вище і натисніть «Додати».',
  },
  'harmonogram.hint': {
    pl: 'Wybierz porę dnia w polu „Dodawaj do” powyżej, wyszukaj symbol i dodaj go do slotu. Karty w każdym slocie można przeciągać, żeby zmienić kolejność.',
    en: 'Choose a time of day in the “Add to” field above, search for a symbol and add it to the slot. Cards in each slot can be dragged to reorder them.',
    uk: 'Виберіть частину дня в полі «Додавати до» вище, знайдіть символ і додайте його до слоту. Картки в кожному слоті можна перетягувати, щоб змінити порядок.',
  },
  'harmonogram.addSlot': {
    pl: '+ Dodaj porę dnia',
    en: '+ Add time of day',
    uk: '+ Додати частину дня',
  },
  'harmonogram.clear': {
    pl: 'Wyczyść harmonogram',
    en: 'Clear schedule',
    uk: 'Очистити розклад',
  },
  'harmonogram.title': {
    pl: 'Mój plan dnia',
    en: 'My daily plan',
    uk: 'Мій план дня',
  },
  'harmonogram.slotEmpty': {
    pl: 'Brak symboli — wybierz tę porę dnia w polu „Dodawaj do” powyżej i dodaj symbol.',
    en: 'No symbols — select this time of day in the “Add to” field above and add a symbol.',
    uk: 'Немає символів — виберіть цю частину дня в полі «Додавати до» вище і додайте символ.',
  },
  'harmonogram.removeSlot': {
    pl: 'Usuń porę dnia',
    en: 'Remove time of day',
    uk: 'Видалити частину дня',
  },
  'harmonogram.newSlotName': {
    pl: 'Nowa pora dnia',
    en: 'New time of day',
    uk: 'Нова частина дня',
  },
  'harmonogram.unnamed': {
    pl: '(bez nazwy)',
    en: '(unnamed)',
    uk: '(без назви)',
  },
  'tablica.hint': {
    pl: 'Symbole są pogrupowane kolorami wg klucza Fitzgerald (żółty — zaimki, zielony — czasowniki, pomarańczowy — rzeczowniki, niebieski — określenia, fioletowy — pytania, różowy — słowa społeczne, czerwony — przeczenia). Kliknij kartę na tablicy, aby dodać ją do paska zdania na górze.',
    en: 'Symbols are grouped by color using the Fitzgerald key (yellow — pronouns, green — verbs, orange — nouns, blue — descriptors, purple — questions, pink — social words, red — negation). Click a card on the board to add it to the sentence strip above.',
    uk: 'Символи згруповані за кольорами відповідно до ключа Фітцджеральд (жовтий — займенники, зелений — дієслова, помаранчевий — іменники, синій — означення, фіолетовий — питання, рожевий — соціальні слова, червоний — заперечення). Натисніть картку на дошці, щоб додати її до смуги речення вгорі.',
  },
  'tablica.clearSentence': {
    pl: 'Wyczyść zdanie',
    en: 'Clear sentence',
    uk: 'Очистити речення',
  },
  'tablica.clearTablica': {
    pl: 'Wyczyść tablicę',
    en: 'Clear board',
    uk: 'Очистити дошку',
  },
  'tablica.sectionEmpty': {
    pl: 'Brak symboli w tej kategorii.',
    en: 'No symbols in this category.',
    uk: 'Немає символів у цій категорії.',
  },
  'tablica.sentenceAriaLabel': {
    pl: 'Budowane zdanie',
    en: 'Sentence being built',
    uk: 'Речення, що будується',
  },
  'sentence.empty': {
    pl: 'Zdanie pojawi się tutaj — kliknij kartę na tablicy poniżej',
    en: 'Your sentence will appear here — click a card on the board below',
    uk: 'Речення з’явиться тут — натисніть картку на дошці нижче',
  },
  'sentence.removeTitle': {
    pl: 'Kliknij, aby usunąć ze zdania',
    en: 'Click to remove from the sentence',
    uk: 'Натисніть, щоб видалити з речення',
  },
  'card.sentenceHintTitle': {
    pl: 'Kliknij, aby dodać do zdania',
    en: 'Click to add to the sentence',
    uk: 'Натисніть, щоб додати до речення',
  },
  'card.removeTitle': {
    pl: 'Usuń kartę',
    en: 'Delete card',
    uk: 'Видалити картку',
  },
  'search.searching': {
    pl: 'Szukam…',
    en: 'Searching…',
    uk: 'Пошук…',
  },
  'search.noResults': {
    pl: 'Brak wyników. Spróbuj innego słowa.',
    en: 'No results. Try a different word.',
    uk: 'Немає результатів. Спробуйте інше слово.',
  },
  'search.foundPrefix': {
    pl: 'Znaleziono ',
    en: 'Found ',
    uk: 'Знайдено символів: ',
  },
  'search.foundSuffix': {
    pl: ' symboli.',
    en: ' symbols.',
    uk: '.',
  },
  'search.error': {
    pl: 'Nie udało się połączyć z bazą ARASAAC. Sprawdź połączenie internetowe i spróbuj ponownie.',
    en: "Couldn't connect to the ARASAAC database. Check your internet connection and try again.",
    uk: 'Не вдалося з’єднатися з базою ARASAAC. Перевірте інтернет-з’єднання і спробуйте ще раз.',
  },
  'search.addButton': {
    pl: '+ Dodaj',
    en: '+ Add',
    uk: '+ Додати',
  },
  'confirm.clearGenerator': {
    pl: 'Wyczyścić całą planszę generatora kart?',
    en: 'Clear the whole card generator board?',
    uk: 'Очистити всю дошку генератора карток?',
  },
  'confirm.clearHarmonogram': {
    pl: 'Wyczyścić cały harmonogram dnia?',
    en: 'Clear the entire daily schedule?',
    uk: 'Очистити весь розклад дня?',
  },
  'confirm.clearTablica': {
    pl: 'Wyczyścić wszystkie symbole z tablicy komunikacyjnej?',
    en: 'Clear all symbols from the communication board?',
    uk: 'Очистити всі символи з комунікаційної дошки?',
  },
  'coffee.label': {
    pl: 'Postaw kawę',
    en: 'Buy a coffee',
    uk: 'Пригостити кавою',
  },
  'coffee.title': {
    pl: 'Postaw mi kawę na Suppi',
    en: 'Buy me a coffee on Suppi',
    uk: 'Пригостіть мене кавою на Suppi',
  },
  'social.ariaLabel': {
    pl: 'Media społecznościowe',
    en: 'Social media',
    uk: 'Соціальні мережі',
  },
  'social.allLinks': {
    pl: 'Wszystkie linki',
    en: 'All links',
    uk: 'Усі посилання',
  },
  'footer.arasaac': {
    pl: 'Symbole: <a href="https://arasaac.org" target="_blank" rel="noopener">ARASAAC</a> © Gobierno de Aragón, licencja CC BY-NC-SA. Dane zapisywane są lokalnie w przeglądarce.',
    en: 'Symbols: <a href="https://arasaac.org" target="_blank" rel="noopener">ARASAAC</a> © Gobierno de Aragón, CC BY-NC-SA license. Data is stored locally in your browser.',
    uk: 'Символи: <a href="https://arasaac.org" target="_blank" rel="noopener">ARASAAC</a> © Gobierno de Aragón, ліцензія CC BY-NC-SA. Дані зберігаються локально у вашому браузері.',
  },
  'footer.author': {
    pl: 'Autor: <a href="https://pwasiak30.github.io/pawel-wasiak-portfolio/" target="_blank" rel="noopener">Portfolio</a> · <a href="https://pwasiak30.github.io/pwasiak-linktree/" target="_blank" rel="noopener">Linktree</a> · <a href="https://suppi.pl/pawelwasiak" target="_blank" rel="noopener">☕ Postaw mi kawę</a>',
    en: 'Author: <a href="https://pwasiak30.github.io/pawel-wasiak-portfolio/" target="_blank" rel="noopener">Portfolio</a> · <a href="https://pwasiak30.github.io/pwasiak-linktree/" target="_blank" rel="noopener">Linktree</a> · <a href="https://suppi.pl/pawelwasiak" target="_blank" rel="noopener">☕ Buy me a coffee</a>',
    uk: 'Автор: <a href="https://pwasiak30.github.io/pawel-wasiak-portfolio/" target="_blank" rel="noopener">Портфоліо</a> · <a href="https://pwasiak30.github.io/pwasiak-linktree/" target="_blank" rel="noopener">Linktree</a> · <a href="https://suppi.pl/pawelwasiak" target="_blank" rel="noopener">☕ Пригостити кавою</a>',
  },
};

// Krótkie nazwy kategorii — używane w selektorze kategorii na karcie
const CATEGORY_SHORT = {
  zaimki:       { pl: 'Zaimki',              en: 'Pronouns',       uk: 'Займенники' },
  czasowniki:   { pl: 'Czasowniki',          en: 'Verbs',          uk: 'Дієслова' },
  rzeczowniki:  { pl: 'Rzeczowniki',         en: 'Nouns',          uk: 'Іменники' },
  opisowe:      { pl: 'Określenia',          en: 'Descriptors',    uk: 'Означення' },
  pytania:      { pl: 'Pytania',             en: 'Questions',      uk: 'Питання' },
  spoleczne:    { pl: 'Społeczne',           en: 'Social',         uk: 'Соціальні' },
  przeczenia:   { pl: 'Przeczenia / inne',   en: 'Negation / other', uk: 'Заперечення / інше' },
};

// Tytuły sekcji na tablicy komunikacyjnej
const TABLICA_TITLE = {
  spoleczne:    { pl: 'Słowa społeczne',     en: 'Social words',   uk: 'Соціальні слова' },
  zaimki:       { pl: 'Zaimki',              en: 'Pronouns',       uk: 'Займенники' },
  czasowniki:   { pl: 'Czasowniki',          en: 'Verbs',          uk: 'Дієслова' },
  rzeczowniki:  { pl: 'Rzeczowniki',         en: 'Nouns',          uk: 'Іменники' },
  opisowe:      { pl: 'Określenia',          en: 'Descriptors',    uk: 'Означення' },
  pytania:      { pl: 'Pytania',             en: 'Questions',      uk: 'Питання' },
  przeczenia:   { pl: 'Przeczenia / inne',   en: 'Negation / other', uk: 'Заперечення / інше' },
};

const DEFAULT_SLOT_NAMES = {
  pl: ['Rano', 'Południe', 'Popołudnie', 'Wieczór'],
  en: ['Morning', 'Midday', 'Afternoon', 'Evening'],
  uk: ['Ранок', 'Полудень', 'Пообіддя', 'Вечір'],
};

let currentLang = detectInitialLang();

function detectInitialLang() {
  let saved = null;
  try { saved = localStorage.getItem(LANG_STORAGE_KEY); } catch (e) { /* ignore */ }
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const nav = (navigator.language || navigator.userLanguage || 'pl').toLowerCase();
  if (nav.indexOf('uk') === 0) return 'uk';
  if (nav.indexOf('pl') === 0) return 'pl';
  if (nav.indexOf('en') === 0) return 'en';
  return null; // nieobsługiwany język przeglądarki — użyjemy Google Translate
}

function t(key) {
  const entry = I18N[key];
  if (!entry) return key;
  return entry[currentLang] || entry.pl || key;
}

function catLabel(catKey) {
  const entry = CATEGORY_SHORT[catKey];
  if (!entry) return catKey;
  return entry[currentLang] || entry.pl;
}

function tablicaTitle(catKey) {
  const entry = TABLICA_TITLE[catKey];
  if (!entry) return catKey;
  return entry[currentLang] || entry.pl;
}

function applyStaticI18n() {
  document.documentElement.lang = currentLang || 'pl';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria-label')));
  });
  ['pl', 'en', 'uk'].forEach(l => {
    const btn = document.getElementById('lang-' + l);
    if (btn) btn.setAttribute('aria-pressed', String(l === currentLang));
  });
}

/* --- Google Translate: pozostałe języki, jak na linktree.wasiakpawel.pl --- */

function setGoogTrans(pair) {
  const expires = pair
    ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT'
    : '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'googtrans=' + pair + '; path=/' + expires;
  document.cookie = 'googtrans=' + pair + '; path=/; domain=' + location.hostname + expires;
}

window.googleTranslateElementInit = function () {
  new google.translate.TranslateElement(
    { pageLanguage: 'pl', autoDisplay: false },
    'google_translate_element'
  );
};

function loadGoogleTranslate() {
  if (document.getElementById('google-translate-script')) return;
  const s = document.createElement('script');
  s.id = 'google-translate-script';
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(s);
}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  setGoogTrans('');
  applyStaticI18n();
  updateTargetPicker();
  renderAll();
}

function initLangSwitch() {
  applyStaticI18n();

  document.getElementById('lang-pl').addEventListener('click', () => setLang('pl'));
  document.getElementById('lang-en').addEventListener('click', () => setLang('en'));
  document.getElementById('lang-uk').addEventListener('click', () => setLang('uk'));

  document.getElementById('lang-more').addEventListener('click', () => {
    const box = document.getElementById('google_translate_element');
    box.classList.toggle('open');
    loadGoogleTranslate();
  });

  // Jeżeli język przeglądarki to nie PL/EN/UK, automatycznie uruchom
  // tłumaczenie maszynowe Google z polskiej wersji na język odwiedzającego.
  if (currentLang === null) {
    let saved = null;
    try { saved = localStorage.getItem(LANG_STORAGE_KEY); } catch (e) { /* ignore */ }
    currentLang = 'pl';
    if (!saved) {
      const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase().split('-')[0];
      setGoogTrans('/pl/' + browserLang);
      loadGoogleTranslate();
    }
    applyStaticI18n();
  }
}

/* ---------------- ARASAAC ---------------- */

const ARASAAC_LOCALE = { pl: 'pl', en: 'en', uk: 'uk' };
const ARASAAC_SEARCH = (q) => `https://api.arasaac.org/api/pictograms/${ARASAAC_LOCALE[currentLang] || 'pl'}/bestsearch/${encodeURIComponent(q)}`;
const ARASAAC_IMG = (id) => `https://static.arasaac.org/pictograms/${id}/${id}_300.png`;

const CATEGORY_KEYS = ['zaimki', 'czasowniki', 'rzeczowniki', 'opisowe', 'pytania', 'spoleczne', 'przeczenia'];
const TABLICA_SECTION_KEYS = ['spoleczne', 'zaimki', 'czasowniki', 'rzeczowniki', 'opisowe', 'pytania', 'przeczenia'];

const STORAGE_KEY = 'aac-generator-state-v1';

let uidCounter = 1;
function uid() { return 'c' + (Date.now()) + '-' + (uidCounter++); }

let state = loadState();
let currentTab = 'generator';

function defaultState() {
  const names = DEFAULT_SLOT_NAMES[currentLang] || DEFAULT_SLOT_NAMES.pl;
  return {
    generator: [],
    harmonogram: names.map(name => ({ uid: uid(), name, cards: [] })),
    tablica: {
      categories: Object.fromEntries(TABLICA_SECTION_KEYS.map(k => [k, []])),
      sentence: [],
    },
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore corrupt storage */ }
  return defaultState();
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (e) { console.warn('Nie udało się zapisać stanu:', e); }
}

/* ---------------- Tabs ---------------- */

const tabButtons = document.querySelectorAll('.tab-btn');
const views = {
  generator: document.getElementById('view-generator'),
  harmonogram: document.getElementById('view-harmonogram'),
  tablica: document.getElementById('view-tablica'),
};

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

function switchTab(tab) {
  currentTab = tab;
  tabButtons.forEach(b => {
    const active = b.dataset.tab === tab;
    b.classList.toggle('active', active);
    b.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  Object.entries(views).forEach(([key, el]) => el.classList.toggle('active-view', key === tab));
  updateTargetPicker();
}

/* ---------------- Target picker (where "Dodaj" sends new pictograms) ---------------- */

const targetPicker = document.getElementById('target-picker');
const targetSelect = document.getElementById('target-select');

function updateTargetPicker() {
  targetSelect.innerHTML = '';
  if (currentTab === 'generator') {
    targetPicker.classList.add('hidden');
  } else if (currentTab === 'harmonogram') {
    targetPicker.classList.remove('hidden');
    state.harmonogram.forEach(slot => {
      const opt = document.createElement('option');
      opt.value = slot.uid;
      opt.textContent = slot.name || t('harmonogram.unnamed');
      targetSelect.appendChild(opt);
    });
  } else if (currentTab === 'tablica') {
    targetPicker.classList.remove('hidden');
    TABLICA_SECTION_KEYS.forEach(key => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = tablicaTitle(key);
      targetSelect.appendChild(opt);
    });
  }
}

/* ---------------- Search ---------------- */

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchStatus = document.getElementById('search-status');
const searchResults = document.getElementById('search-results');

searchBtn.addEventListener('click', runSearch);
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') runSearch(); });

async function runSearch() {
  const q = searchInput.value.trim();
  if (!q) return;
  searchStatus.textContent = t('search.searching');
  searchResults.innerHTML = '';
  try {
    const res = await fetch(ARASAAC_SEARCH(q));
    if (!res.ok) throw new Error('Błąd sieci');
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      searchStatus.textContent = t('search.noResults');
      return;
    }
    searchStatus.textContent = `${t('search.foundPrefix')}${data.length}${t('search.foundSuffix')}`;
    renderResults(data.slice(0, 12));
  } catch (err) {
    searchStatus.textContent = t('search.error');
    console.error(err);
  }
}

function renderResults(pictograms) {
  searchResults.innerHTML = '';
  pictograms.forEach(p => {
    const keyword = (p.keywords && p.keywords[0] && p.keywords[0].keyword) || searchInput.value.trim();
    const item = document.createElement('div');
    item.className = 'result-item';
    item.innerHTML = `
      <img src="${ARASAAC_IMG(p._id)}" alt="${keyword}" loading="lazy">
      <div class="result-label">${keyword}</div>
      <button type="button">${t('search.addButton')}</button>
    `;
    item.querySelector('button').addEventListener('click', () => addPictogram(p._id, keyword));
    searchResults.appendChild(item);
  });
}

function addPictogram(pictoId, keyword) {
  const card = {
    uid: uid(),
    image: ARASAAC_IMG(pictoId),
    caption: keyword,
    category: 'rzeczowniki',
  };
  if (currentTab === 'generator') {
    state.generator.push(card);
  } else if (currentTab === 'harmonogram') {
    const slot = state.harmonogram.find(s => s.uid === targetSelect.value) || state.harmonogram[0];
    if (slot) slot.cards.push(card);
  } else if (currentTab === 'tablica') {
    const catKey = targetSelect.value || TABLICA_SECTION_KEYS[0];
    card.category = catKey;
    state.tablica.categories[catKey].push(card);
  }
  saveState();
  renderAll();
}

/* ---------------- Card element (shared) ---------------- */

function createCardEl(card, { onRemove, onSentenceClick } = {}) {
  const el = document.createElement('div');
  el.className = 'aac-card';
  el.dataset.uid = card.uid;
  el.draggable = true;
  el.style.setProperty('--cat-color', `var(--cat-${card.category})`);

  const img = document.createElement('img');
  img.src = card.image;
  img.alt = card.caption;
  if (onSentenceClick) {
    img.style.cursor = 'pointer';
    img.title = t('card.sentenceHintTitle');
    img.addEventListener('click', () => onSentenceClick(card));
  }

  const captionInput = document.createElement('input');
  captionInput.className = 'caption-input';
  captionInput.value = card.caption;
  captionInput.addEventListener('input', () => {
    card.caption = captionInput.value;
    img.alt = card.caption;
    saveState();
  });

  const controls = document.createElement('div');
  controls.className = 'card-controls';

  const catSelect = document.createElement('select');
  catSelect.className = 'cat-select';
  CATEGORY_KEYS.forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = catLabel(key);
    if (key === card.category) opt.selected = true;
    catSelect.appendChild(opt);
  });
  catSelect.addEventListener('change', () => {
    card.category = catSelect.value;
    el.style.setProperty('--cat-color', `var(--cat-${card.category})`);
    saveState();
  });

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.type = 'button';
  removeBtn.textContent = '✕';
  removeBtn.title = t('card.removeTitle');
  removeBtn.addEventListener('click', () => { onRemove && onRemove(card); });

  controls.appendChild(catSelect);
  controls.appendChild(removeBtn);

  el.appendChild(img);
  el.appendChild(captionInput);
  el.appendChild(controls);

  el.addEventListener('dragstart', () => el.classList.add('dragging'));
  el.addEventListener('dragend', () => el.classList.remove('dragging'));

  return el;
}

function getDragAfterElement(container, y) {
  const els = [...container.querySelectorAll('.aac-card:not(.dragging)')];
  return els.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) return { offset, element: child };
    return closest;
  }, { offset: -Infinity }).element;
}

function enableSortable(container, arr) {
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const dragging = container.querySelector('.dragging');
    if (!dragging) return;
    const afterEl = getDragAfterElement(container, e.clientY);
    if (afterEl == null) container.appendChild(dragging);
    else container.insertBefore(dragging, afterEl);
  });
  container.addEventListener('drop', () => {
    const order = [...container.querySelectorAll('.aac-card')].map(el => el.dataset.uid);
    arr.sort((a, b) => order.indexOf(a.uid) - order.indexOf(b.uid));
    saveState();
  });
}

/* ---------------- Render: Generator kart ---------------- */

const generatorBoard = document.getElementById('generator-board');

function renderGenerator() {
  generatorBoard.innerHTML = '';
  if (state.generator.length === 0) {
    generatorBoard.innerHTML = `<p class="board-placeholder">${t('generator.empty')}</p>`;
    return;
  }
  state.generator.forEach(card => {
    const el = createCardEl(card, {
      onRemove: (c) => {
        state.generator = state.generator.filter(x => x.uid !== c.uid);
        saveState();
        renderGenerator();
      },
    });
    generatorBoard.appendChild(el);
  });
  enableSortable(generatorBoard, state.generator);
}

/* ---------------- Render: Harmonogram dnia ---------------- */

const harmonogramList = document.getElementById('harmonogram-list');

function renderHarmonogram() {
  harmonogramList.innerHTML = '';
  state.harmonogram.forEach(slot => {
    const row = document.createElement('div');
    row.className = 'slot-row';

    const header = document.createElement('div');
    header.className = 'slot-header';

    const nameInput = document.createElement('input');
    nameInput.className = 'slot-name-input';
    nameInput.value = slot.name;
    nameInput.addEventListener('input', () => {
      slot.name = nameInput.value;
      saveState();
      updateTargetPicker();
    });

    const removeSlotBtn = document.createElement('button');
    removeSlotBtn.className = 'slot-remove no-print';
    removeSlotBtn.type = 'button';
    removeSlotBtn.textContent = t('harmonogram.removeSlot');
    removeSlotBtn.addEventListener('click', () => {
      state.harmonogram = state.harmonogram.filter(s => s.uid !== slot.uid);
      saveState();
      renderHarmonogram();
      updateTargetPicker();
    });

    header.appendChild(nameInput);
    header.appendChild(removeSlotBtn);

    const cardsRow = document.createElement('div');
    cardsRow.className = 'slot-cards';
    if (slot.cards.length === 0) {
      cardsRow.innerHTML = `<span class="slot-empty">${t('harmonogram.slotEmpty')}</span>`;
    } else {
      slot.cards.forEach(card => {
        const el = createCardEl(card, {
          onRemove: (c) => {
            slot.cards = slot.cards.filter(x => x.uid !== c.uid);
            saveState();
            renderHarmonogram();
          },
        });
        cardsRow.appendChild(el);
      });
      enableSortable(cardsRow, slot.cards);
    }

    row.appendChild(header);
    row.appendChild(cardsRow);
    harmonogramList.appendChild(row);
  });
}

/* ---------------- Render: Tablica komunikacyjna ---------------- */

const tablicaGrid = document.getElementById('tablica-grid');
const sentenceStrip = document.getElementById('sentence-strip');

function renderTablica() {
  tablicaGrid.innerHTML = '';
  TABLICA_SECTION_KEYS.forEach(key => {
    const section = document.createElement('div');
    section.className = 'tablica-section';
    section.style.setProperty('--cat-color', `var(--cat-${key})`);

    const h2 = document.createElement('h2');
    h2.textContent = tablicaTitle(key);
    section.appendChild(h2);

    const cardsWrap = document.createElement('div');
    cardsWrap.className = 'tablica-cards';
    const list = state.tablica.categories[key];
    if (list.length === 0) {
      cardsWrap.innerHTML = `<span class="section-empty">${t('tablica.sectionEmpty')}</span>`;
    } else {
      list.forEach(card => {
        const el = createCardEl(card, {
          onRemove: (c) => {
            state.tablica.categories[key] = list.filter(x => x.uid !== c.uid);
            saveState();
            renderTablica();
          },
          onSentenceClick: (c) => {
            state.tablica.sentence.push({ ...c, uid: uid() });
            saveState();
            renderSentence();
          },
        });
        cardsWrap.appendChild(el);
      });
    }
    section.appendChild(cardsWrap);
    tablicaGrid.appendChild(section);
  });
  renderSentence();
}

function renderSentence() {
  sentenceStrip.innerHTML = '';
  if (state.tablica.sentence.length === 0) {
    sentenceStrip.innerHTML = `<span class="sentence-empty">${t('sentence.empty')}</span>`;
    return;
  }
  state.tablica.sentence.forEach(card => {
    const item = document.createElement('div');
    item.className = 'sentence-item';
    item.innerHTML = `<img src="${card.image}" alt="${card.caption}"><span>${card.caption}</span>`;
    item.title = t('sentence.removeTitle');
    item.addEventListener('click', () => {
      state.tablica.sentence = state.tablica.sentence.filter(x => x.uid !== card.uid);
      saveState();
      renderSentence();
    });
    sentenceStrip.appendChild(item);
  });
}

/* ---------------- Toolbar actions ---------------- */

document.querySelectorAll('[data-action]').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    if (action === 'print') {
      window.print();
    } else if (action === 'clear-generator') {
      if (confirm(t('confirm.clearGenerator'))) {
        state.generator = [];
        saveState();
        renderGenerator();
      }
    } else if (action === 'clear-harmonogram') {
      if (confirm(t('confirm.clearHarmonogram'))) {
        state.harmonogram.forEach(s => s.cards = []);
        saveState();
        renderHarmonogram();
      }
    } else if (action === 'add-slot') {
      state.harmonogram.push({ uid: uid(), name: t('harmonogram.newSlotName'), cards: [] });
      saveState();
      renderHarmonogram();
      updateTargetPicker();
    } else if (action === 'clear-tablica') {
      if (confirm(t('confirm.clearTablica'))) {
        TABLICA_SECTION_KEYS.forEach(key => state.tablica.categories[key] = []);
        saveState();
        renderTablica();
      }
    } else if (action === 'clear-sentence') {
      state.tablica.sentence = [];
      saveState();
      renderSentence();
    }
  });
});

/* ---------------- Init ---------------- */

function renderAll() {
  renderGenerator();
  renderHarmonogram();
  renderTablica();
}

initLangSwitch();
updateTargetPicker();
renderAll();
