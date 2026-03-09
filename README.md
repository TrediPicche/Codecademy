# Syllabus

Struttura base del progetto portfolio frontend con pagine HTML condivise, stile centralizzato e logica JS comune.

## Struttura

- `HTML/` contiene tutte le pagine allo stesso livello.
- `CSS/` contiene il file `styles.css` condiviso.
- `JS/` contiene configurazione, componenti condivisi e logica generale.
- `IMG/` è pronta per immagini e icone future.

## Come usare Git per la prima versione

```bash
cd percorso/del/progetto/Syllabus
git init
git add .
git commit -m "Initial structure for Syllabus"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/TUO-REPOSITORY.git
git push -u origin main
```

## Note tecniche

- Il menu è centralizzato in `JS/config.js` e viene renderizzato in tutte le pagine tramite `JS/components.js`.
- Tema chiaro/scuro e lingua IT/EN vengono salvati in `localStorage`.
- La homepage usa una ricerca client-side per filtrare gli argomenti in evidenza.
- La struttura è pronta per essere ampliata con contenuti reali nelle pagine interne.
