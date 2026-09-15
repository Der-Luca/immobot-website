# Immobot Marketing-Website

Statische Next.js-Website für `immobot.pro`. Änderungen an `main` werden automatisch
gebaut und auf den Christoph-Server ausgerollt.

## Lokale Entwicklung

```bash
npm ci
npm run dev
```

Danach ist die Vorschau unter [http://localhost:3000](http://localhost:3000)
erreichbar. Die Seiten liegen unter `src/app/`.

## Produktions-Build

```bash
npm run build
```

Next.js erzeugt den statischen Export im Ordner `out/`.

## Deployment

Der Workflow `.github/workflows/deploy.yml` läuft bei jedem Push auf `main` und kann
zusätzlich in GitHub unter **Actions → Deploy website → Run workflow** manuell
gestartet werden. Er installiert die festgeschriebenen Abhängigkeiten, baut die
Website und überträgt nur einen erfolgreichen Build.

Auf dem Server läuft die Website als Nginx-Container unter
`/srv/immobot/services/website`. Jede Version wird atomar aktiviert; die fünf
neuesten Versionen bleiben für einen schnellen Rollback erhalten. Der
Repository-Secret `DEPLOY_SSH_KEY` enthält einen eigenen privaten Schlüssel, dessen
Gegenstück auf dem Server ausschließlich das Deployment-Skript ausführen darf.

Bis zur DNS-Umstellung ist die Website unter `http://152.53.140.47` erreichbar.
Beim Domainwechsel wird nur die Adresse in der Caddy-Konfiguration auf
`immobot.pro, www.immobot.pro` geändert und Caddy neu geladen. Die Pipeline bleibt
unverändert.

### Manueller Rollback

Auf dem Server zeigt `current` auf die aktive Version. Für einen Rollback wird der
Link auf eine ältere Version unter `releases/` umgestellt:

```bash
cd /srv/immobot/services/website
ln -sfn releases/<VERSION> current
```
