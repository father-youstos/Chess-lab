# Thomas Chess Lab 2.0

A light, Arabic-first chess analysis workbench built for Thomas. No application server, API key, build tool, or paid subscription is required for the bundled local analysis.

## Run locally

Requires Python 3 for the static server:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. Do not double-click `index.html`: browsers block module/worker requests on `file://` URLs.

## Publish on GitHub Pages

1. Create a repository named `thomas-chess-lab` in your GitHub account.
2. Upload **the contents of this folder** to its root, including `.github/workflows/pages.yml` and all `vendor`/`assets` files. Do not upload only the ZIP.
3. Use the `main` branch. Under **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. Run **Actions → Test and deploy Thomas Chess Lab → Run workflow**, or push a commit to `main`.
5. The workflow tests the study model, UCI adapter and actual bundled Stockfish, then publishes the static application. Its deployment result provides the real URL.

If your account is `father-youstos` and the repository is `thomas-chess-lab`, the expected Pages URL after a successful deployment is `https://father-youstos.github.io/thomas-chess-lab/`. This package does **not** mean that URL is already live.

The website is normally public on GitHub Pages. Your saved studies remain in the browser's local storage; they are not uploaded to GitHub. Do not commit backups containing private studies.

## Features

- Continuous, light workspace with adjustable columns and a mobile layout.
- Two licensed SVG piece sets; three board palettes.
- Legal click/drag moves, promotion chooser, last-move/check highlights, arrows and squares.
- Real move tree, nested variations, mainline promotion, branch deletion/naming, comments and NAGs.
- PGN/FEN import, multi-game libraries, sorting, folder/tag text, JSON backup/restore, full variation PGN export.
- Stockfish 19 Lite bundled locally; optional full engine (~100 MB) downloaded on demand, or compatible JS/WASM uploads.
- MultiPV 1/3/5, time/depth/hash controls, stoppable whole-game analysis, cached searches and deeper critical-position checks.
- Evaluation chart, critical-move navigation, traceable heuristic labels and verifiable tactical observations.
- Self-test mode and saved puzzles with spaced review.
- 3,865 locally indexed opening names; optional Lichess OAuth PKCE for master statistics; seven-piece tablebase lookup.
- Public finished-game imports from Chess.com and Lichess with date/color/time filters.
- Printable mainline report and local autosave.

## Tests

Node 22+:

```sh
npm test
```

Tests use the standard Node test runner, with no npm installation needed. The engine integration test runs the exact shipped WASM engine through its Node interface.

A separate development-only DOM smoke run was performed using jsdom: board rendering, variation visibility, escaped comments, library filters, engine results, editor errors, local opening lookup, theme switching. This is **not a real-browser visual, touch, OAuth, or cross-origin test**.

## What still needs live verification

- Desktop/mobile visual layout and real pointer input.
- Browser WASM worker, blob-uploaded/full engine, and browser memory behavior.
- Cross-origin Chess.com/Lichess imports in your browser.
- Lichess authorization/redirect and authenticated explorer requests on the final Pages URL.
- Pages configuration and deployment, because no GitHub repository has been created by this package.

See `UPGRADES.md` for an honest mapping of the 50 requested upgrades and the remaining limits.

## Privacy and external services

Local studies, settings and puzzles use localStorage. This is device/browser-specific and may be cleared; export backups. The Lichess OAuth verifier and token use sessionStorage and never enter exports, the repository, or logs. The disconnect button removes the local session token; full revocation is managed in Lichess account settings. The optional full engine downloads from jsDelivr, then computes locally. File-uploaded JavaScript engines should be trusted: they execute code in a worker.

Opening explorer requests require Lichess authentication in the API specification consulted on 2026-10-14. Tablebase lookup is public. Service availability, rate limits and API policies can change; local PGN import and bundled analysis are the fallback.

The bundled engine is single-threaded for straightforward GitHub Pages compatibility. No cloud compute or multi-threaded acceleration is included. This is not affiliated with Chess.com, Lichess, or Stockfish.

## License

Application source: GPL-3.0-or-later. Other assets retain their licenses; see `CREDITS.md`, `LICENSE`, and accompanying notices. Stockfish is an upstream engine, not an engine authored by this project.
