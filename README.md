# Lezioni di Montelupo

Trascrizioni dei 22 incontri di **Paolo Marcucci** e **Lorenzo Poggi** a Montelupo Fiorentino (2012–2026), con le slide e le immagini proiettate e gli indici di concetti, autori e luoghi.

**Sito:** https://paolomarcucci.github.io/Lezioni_Montelupo/

## Incontri

| Data | Titolo |
|---|---|
| 26 aprile 2012 | [Il genio](docs/incontri/2012-04-26-il-genio/index.md) |
| 31 maggio 2012 | [La follia](docs/incontri/2012-05-31-la-follia/index.md) |
| 15 novembre 2012 | [Il cibo](docs/incontri/2012-11-15-il-cibo/index.md) |
| 13 dicembre 2012 | [La profezia della fine](docs/incontri/2012-12-13-la-profezia-della-fine/index.md) |
| 31 gennaio 2013 | [L’Occidente](docs/incontri/2013-01-31-l-occidente/index.md) |
| 28 febbraio 2013 | [Debito e colpa](docs/incontri/2013-02-28-debito-e-colpa/index.md) |
| 28 marzo 2013 | [Emozioni e passioni](docs/incontri/2013-03-28-emozioni-e-passioni/index.md) |
| 23 aprile 2013 | [Il gioco degli scacchi](docs/incontri/2013-04-23-il-gioco-degli-scacchi/index.md) |
| 30 maggio 2013 | [Santi in paradiso](docs/incontri/2013-05-30-santi-in-paradiso/index.md) |
| 30 gennaio 2014 | [Poveri buoni e poveri cattivi](docs/incontri/2014-01-30-poveri-buoni-e-poveri-cattivi/index.md) |
| 27 febbraio 2014 | [Cooperazione e denaro](docs/incontri/2014-02-27-cooperazione-e-denaro/index.md) |
| 27 marzo 2014 | [Il potere e l’impero digitale](docs/incontri/2014-03-27-il-potere-e-l-impero-digitale/index.md) |
| 17 aprile 2014 | [L’istruzione, il lavoro, la scuola](docs/incontri/2014-04-17-l-istruzione-il-lavoro-la-scuola/index.md) |
| 29 maggio 2014 | [Il pensiero](docs/incontri/2014-05-29-il-pensiero/index.md) |
| 18 dicembre 2014 | [Le immagini del potere, il potere delle immagini](docs/incontri/2014-12-18-le-immagini-del-potere-il-potere-delle-immagini/index.md) |
| 29 gennaio 2015 | [Buoni e cattivi](docs/incontri/2015-01-29-buoni-e-cattivi/index.md) |
| 26 febbraio 2015 | [Il diavolo](docs/incontri/2015-02-26-il-diavolo/index.md) |
| 14 marzo 2015 | [Visita al Museo Novecento di Firenze](docs/incontri/2015-03-14-visita-al-museo-novecento-di-firenze/index.md) |
| 26 marzo 2015 | [C’è ancora posto per l’utopia e per la rivoluzione?](docs/incontri/2015-03-26-c-e-ancora-posto-per-l-utopia-e-per-la-rivoluzione/index.md) |
| 23 aprile 2015 | [Che cos’è la pop art?](docs/incontri/2015-04-23-che-cos-e-la-pop-art/index.md) |
| 28 maggio 2015 | [Tra arte e filosofia](docs/incontri/2015-05-28-tra-arte-e-filosofia/index.md) |
| 12 maggio 2026 | [Capitalismo e territori](docs/incontri/2026-05-12-capitalismo-e-territori/index.md) |

## Com'è fatto il repository

```
docs/
  index.md                 home del sito
  incontri/<data-titolo>/  una cartella per incontro: index.md (testo) + img/ (immagini)
  indici/                  indici di concetti, autori e luoghi
  relatori.md              relatori e ospiti, con i colori usati nei testi
  informazioni.md          criteri di trascrizione e diritti
  stylesheets/, javascripts/
mkdocs.yml                 configurazione del sito (MkDocs Material)
.github/workflows/         pubblicazione automatica su GitHub Pages
```

## Modificare un testo

Apri il file `docs/incontri/<incontro>/index.md`, premi l'icona della matita, correggi e salva («Commit changes»). Il sito si aggiorna da solo in un paio di minuti.

## Vedere il sito sul proprio computer

```bash
pip install -r requirements.txt
mkdocs serve
```

## Diritti

I testi restano dei relatori e degli ospiti. Le immagini appartengono ai rispettivi autori e sono riprodotte a scopo documentario. Vedi [Informazioni](docs/informazioni.md).
