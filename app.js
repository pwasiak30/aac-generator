/* ============================================================
   Generator AAC — materiały komunikacyjne
   Źródło symboli: ARASAAC (https://arasaac.org), CC BY-NC-SA
   ============================================================ */

const ARASAAC_SEARCH = (q) => `https://api.arasaac.org/api/pictograms/pl/bestsearch/${encodeURIComponent(q)}`;
const ARASAAC_IMG = (id) => `https://static.arasaac.org/pictograms/${id}/${id}_300.png`;

const CATEGORIES = [
  { key: 'zaimki',       label: 'Zaimki (żółty)' },
  { key: 'czasowniki',   label: 'Czasowniki (zielony)' },
  { key: 'rzeczowniki',  label: 'Rzeczowniki (pomarańczowy)' },
  { key: 'opisowe',      label: 'Określenia (niebieski)' },
  { key: 'pytania',      label: 'Pytania (fioletowy)' },
  { key: 'spoleczne',    label: 'Społeczne (różowy)' },
  { key: 'przeczenia',   label: 'Przeczenia / inne (czerwony)' },
];

const TABLICA_SECTIONS = [
  { key: 'spoleczne',    title: 'Słowa społeczne' },
  { key: 'zaimki',       title: 'Zaimki' },
  { key: 'czasowniki',   title: 'Czasowniki' },
  { key: 'rzeczowniki',  title: 'Rzeczowniki' },
  { key: 'opisowe',      title: 'Określenia' },
  { key: 'pytania',      title: 'Pytania' },
  { key: 'przeczenia',   title: 'Przeczenia / inne' },
];

const STORAGE_KEY = 'aac-generator-state-v1';

let uidCounter = 1;
function uid() { return 'c' + (Date.now()) + '-' + (uidCounter++); }

let state = loadState();
let currentTab = 'generator';

function defaultState() {
  return {
    generator: [],
    harmonogram: [
      { uid: uid(), name: 'Rano', cards: [] },
      { uid: uid(), name: 'Południe', cards: [] },
      { uid: uid(), name: 'Popołudnie', cards: [] },
      { uid: uid(), name: 'Wieczór', cards: [] },
    ],
    tablica: {
      categories: Object.fromEntries(TABLICA_SECTIONS.map(s => [s.key, []])),
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
      opt.textContent = slot.name || '(bez nazwy)';
      targetSelect.appendChild(opt);
    });
  } else if (currentTab === 'tablica') {
    targetPicker.classList.remove('hidden');
    TABLICA_SECTIONS.forEach(sec => {
      const opt = document.createElement('option');
      opt.value = sec.key;
      opt.textContent = sec.title;
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
  searchStatus.textContent = 'Szukam…';
  searchResults.innerHTML = '';
  try {
    const res = await fetch(ARASAAC_SEARCH(q));
    if (!res.ok) throw new Error('Błąd sieci');
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      searchStatus.textContent = 'Brak wyników. Spróbuj innego słowa.';
      return;
    }
    searchStatus.textContent = `Znaleziono ${data.length} symboli.`;
    renderResults(data.slice(0, 12));
  } catch (err) {
    searchStatus.textContent = 'Nie udało się połączyć z bazą ARASAAC. Sprawdź połączenie internetowe i spróbuj ponownie.';
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
      <button type="button">+ Dodaj</button>
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
    const catKey = targetSelect.value || TABLICA_SECTIONS[0].key;
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
    img.title = 'Kliknij, aby dodać do zdania';
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
  CATEGORIES.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.key;
    opt.textContent = c.label.split(' (')[0];
    if (c.key === card.category) opt.selected = true;
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
  removeBtn.title = 'Usuń kartę';
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
    generatorBoard.innerHTML = '<p class="board-placeholder">Twoja plansza jest pusta — wyszukaj symbol powyżej i kliknij „Dodaj”.</p>';
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
    removeSlotBtn.textContent = 'Usuń porę dnia';
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
      cardsRow.innerHTML = '<span class="slot-empty">Brak symboli — wybierz tę porę dnia w polu „Dodawaj do” powyżej i dodaj symbol.</span>';
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
  TABLICA_SECTIONS.forEach(sec => {
    const section = document.createElement('div');
    section.className = 'tablica-section';
    section.style.setProperty('--cat-color', `var(--cat-${sec.key})`);

    const h2 = document.createElement('h2');
    h2.textContent = sec.title;
    section.appendChild(h2);

    const cardsWrap = document.createElement('div');
    cardsWrap.className = 'tablica-cards';
    const list = state.tablica.categories[sec.key];
    if (list.length === 0) {
      cardsWrap.innerHTML = '<span class="section-empty">Brak symboli w tej kategorii.</span>';
    } else {
      list.forEach(card => {
        const el = createCardEl(card, {
          onRemove: (c) => {
            state.tablica.categories[sec.key] = list.filter(x => x.uid !== c.uid);
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
    sentenceStrip.innerHTML = '<span class="sentence-empty">Zdanie pojawi się tutaj — kliknij kartę na tablicy poniżej</span>';
    return;
  }
  state.tablica.sentence.forEach(card => {
    const item = document.createElement('div');
    item.className = 'sentence-item';
    item.innerHTML = `<img src="${card.image}" alt="${card.caption}"><span>${card.caption}</span>`;
    item.title = 'Kliknij, aby usunąć ze zdania';
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
      if (confirm('Wyczyścić całą planszę generatora kart?')) {
        state.generator = [];
        saveState();
        renderGenerator();
      }
    } else if (action === 'clear-harmonogram') {
      if (confirm('Wyczyścić cały harmonogram dnia?')) {
        state.harmonogram.forEach(s => s.cards = []);
        saveState();
        renderHarmonogram();
      }
    } else if (action === 'add-slot') {
      state.harmonogram.push({ uid: uid(), name: 'Nowa pora dnia', cards: [] });
      saveState();
      renderHarmonogram();
      updateTargetPicker();
    } else if (action === 'clear-tablica') {
      if (confirm('Wyczyścić wszystkie symbole z tablicy komunikacyjnej?')) {
        TABLICA_SECTIONS.forEach(s => state.tablica.categories[s.key] = []);
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

updateTargetPicker();
renderAll();
