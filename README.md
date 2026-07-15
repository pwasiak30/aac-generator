# Generator AAC

Prosta, statyczna strona (HTML + CSS + JS, bez kroku budowania) do tworzenia materiałów AAC
z piktogramami z bazy [ARASAAC](https://arasaac.org):

- **Generator kart** — wyszukaj słowo, dodaj symbol do planszy, edytuj podpis i kolor kategorii.
- **Harmonogram dnia** — sekwencja pór dnia z symbolami, kolejność zmieniana przez przeciąganie.
- **Tablica komunikacyjna** — stała siatka kategorii (kolory wg klucza Fitzgerald) + pasek budowanego zdania.

Wszystko drukuje się/eksportuje do PDF przez wbudowaną funkcję druku przeglądarki
(przycisk „🖨️ Drukuj / Zapisz PDF” → w oknie druku wybierz „Zapisz jako PDF”).
Dane zapisują się lokalnie w przeglądarce (localStorage) — nic nie wysyłamy nigdzie poza
zapytaniami do API ARASAAC podczas wyszukiwania symboli.

## Uruchomienie lokalnie

Wystarczy otworzyć `index.html` w przeglądarce — nie jest potrzebny żaden build ani serwer.
To trzy zwykłe pliki (`index.html`, `style.css`, `app.js`) w tym samym folderze — nic więcej.

## Wdrożenie na GitHub Pages

1. Utwórz repozytorium (np. `aac-generator`) i wrzuć te 3 pliki do głównego katalogu.
2. W ustawieniach repo: **Settings → Pages → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Strona pojawi się pod `https://<twój-login>.github.io/aac-generator/`.

## Uwaga o licencji symboli

Symbole ARASAAC są udostępniane na licencji CC BY-NC-SA — darmowe do użytku niekomercyjnego
(szkoła, terapia) pod warunkiem podania autorstwa: © Gobierno de Aragón.
