# Melodienrausch

Melodienrausch ist die persönliche Website von Ela – ein digitales Archiv aus
Kunstwerken, Tagebuchtexten, Musik und einer Über-mich-Seite. Die Seite
versteht sich als poetische, atmosphärische digitale Galerie, nicht als
klassisches Portfolio.

## Seitenübersicht

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite mit Porträt, Statement-Text und Musik-Button |
| `werke.html` | Werke-Galerie (Scroll-Velocity-Ansicht) mit Detailansicht pro Kunstwerk |
| `ueber.html` | Über-mich-Seite mit persönlichem Text und Bild-Trail-Effekt |
| `register.html` | Tagebuch: Tracklist-Übersicht und ein 3D-Buch zum Durchblättern |
| `kontakt.html` | Kontaktseite mit Mail-Adresse und Collage |
| `eintrag-XXX.html` | Einzelne Tagebucheinträge (siehe unten) |

## Projektstruktur

- **HTML-Dateien** – jede Hauptseite und jeder Tagebucheintrag ist eine
  eigenständige HTML-Datei mit eigenem `<style>`-Block für seitenspezifisches
  Design.
- **`style.css`** – gemeinsame Basis für alle Seiten: Grundlayout, Menü,
  Cursor-Grundstil und die Übergangs-Overlays für Tagebucheinträge.
- **`cursor.js`** – zentrale Datei für den künstlerischen Mauszeiger-Punkt,
  eingebunden auf allen Hauptseiten und den meisten Tagebucheinträgen
  (Ausnahme: `eintrag-022.html`, siehe unten).
- **`menu.js`** – zentrale Datei für das aufklappbare Seitenmenü (Öffnen/
  Schließen, Tastaturbedienung, Fokus), eingebunden auf `index.html`,
  `ueber.html`, `kontakt.html` und den sichtbaren „KI-Beobachtung“-
  Tagebucheinträgen. `werke.html` und `register.html` haben aus technischen
  Gründen (zusätzliche Escape-Logik für Detailansicht bzw. Tagebuch-Reader)
  weiterhin eine eigene, leicht erweiterte Version dieser Logik.
- **Bilddateien** – Porträts, Werk-Fotos und Texturen liegen direkt im
  Hauptverzeichnis bzw. in Unterordnern wie `bilder/`.
- **SoundCloud-Einbindungen** – mehrere Seiten betten einen unsichtbaren
  SoundCloud-Player per `<iframe>` ein (siehe „Externe Dienste“).

## Lokal ansehen

Die Seite verwendet eingebettete Inhalte (z. B. SoundCloud), die beim
direkten Öffnen einer Datei über `file://` im Browser eingeschränkt oder
blockiert sein können. Empfohlen wird deshalb ein einfacher lokaler
Webserver:

```bash
python -m http.server 8000
```

Anschließend die Seite im Browser öffnen:

```text
http://localhost:8000
```

## Tagebucheinträge pflegen

- Die Einträge sind fortlaufend nummeriert (`eintrag-001.html`,
  `eintrag-003.html`, …). **`eintrag-002.html` fehlt absichtlich** (früherer
  Duplikat-Eintrag, entfernt) und soll nicht neu angelegt werden.
- **`eintrag-022.html` existiert**, ist aber **bewusst nicht** in
  `register.html` verlinkt. Ob und wie dieser Eintrag veröffentlicht wird,
  ist eine offene Entscheidung von Ela (siehe „Offene Aufgaben“).
- Um einen neuen Eintrag zu ergänzen:
  1. Eine neue `eintrag-XXX.html`-Datei nach dem Muster einer bestehenden
     Datei mit ähnlichem Layout anlegen (helles Tagebuch-Template oder
     dunkles „KI-Beobachtung“-Template).
  2. In `register.html` im Array `diaryEntries` einen neuen Eintrag mit den
     Feldern `number`, `title`, `teaser`, `thumb` und `url` ergänzen.
  3. Bestehende Nummerierungen dabei nicht verändern – nur neue Nummern
     anfügen.

## Werke pflegen

Die Werke-Galerie in `werke.html` wird über das JavaScript-Array `werke`
gepflegt (im `<script>`-Bereich der Datei). Jeder Eintrag enthält unter
anderem: `num` (Katalognummer), `title`, `description`, `manifest`
(Kurzzitat), `sound` und `trackId` (SoundCloud-Track fürs Werk), `tech`
(Technik/Material), `size`, `year`, `status` und `img` (Bildpfad). Neue
Werke werden als weiteres Objekt in diesem Array ergänzt.

## Externe Dienste

- **SoundCloud** – mehrere Seiten (`index.html`, `ueber.html`,
  `kontakt.html`, `register.html`, sowie einzelne Werke in `werke.html`)
  betten Tracks über die SoundCloud-Player-iFrame-API ein
  (`w.soundcloud.com`). Wiedergabe wird ausschließlich über sichtbare
  „Musik abspielen“-Buttons gestartet.
- **Google Fonts** – die Schriften „Oswald“ und teilweise „Shadows Into
  Light“ werden über `fonts.googleapis.com` eingebunden.

Diese Angaben beschreiben nur die technische Einbindung, keine rechtliche
Bewertung.

## Veröffentlichung

Das Repository liegt unter `github.com/elaneumann1976-dotcom/Melodienrausch`.
Die Website ist aktuell öffentlich über GitHub Pages erreichbar. Die
verwendete Basisadresse lautet:

```text
https://elaneumann1976-dotcom.github.io/Melodienrausch/
```

Diese Adresse wird in den Metadaten der fünf Hauptseiten als Canonical-URL
verwendet. Eine eigene Domain beziehungsweise eine `CNAME`-Datei ist aktuell
nicht eingerichtet: Die Commit-Historie zeigt, dass zwischenzeitlich eine
eigene Domain (`melodienrausch.blog`) über eine `CNAME`-Datei verbunden und
später wieder entfernt wurde, weil sie nicht erreichbar war. Falls
`melodienrausch.blog` (oder eine andere Domain) später erneut verwendet
wird, müssen die Canonical- und Open-Graph-URLs in allen fünf Hauptseiten
entsprechend angepasst werden.

Allgemein lässt sich eine statische Website wie diese über jeden Hosting-
Dienst veröffentlichen, der einfache HTML-/CSS-/JS-Dateien ausliefert (z. B.
GitHub Pages, Netlify oder ein eigener Webspace) – ein Build-Prozess ist
nicht erforderlich.

## Offene Aufgaben

- Falls eine eigene Domain (z. B. `melodienrausch.blog`) erneut eingerichtet
  wird: Canonical- und Open-Graph-URLs in allen fünf Hauptseiten anpassen.
- Open-Graph-Bild-URL aktualisieren, falls ein anderes Vorschaubild als
  `profilbilld_Fotogenic.jpg` gewünscht ist.
- Favicon festlegen – aktuell ist keines im Projekt vorhanden.
- Entscheidung zu `eintrag-022.html` treffen (veröffentlichen, Position in
  der Reihenfolge festlegen, oder bewusst unveröffentlicht lassen).
- Echte SoundCloud-Wiedergabe außerhalb der bisherigen Testumgebung prüfen
  (in der Entwicklungsumgebung war der Zugriff auf SoundCloud technisch
  blockiert, sodass Wiedergabe bisher nur über das Fehlerverhalten und den
  Button-Zustand, nicht aber mit echtem Ton getestet werden konnte).
