# v6.0

IndexedDB clinic with fallback and migration; automatic mistake extraction; optional visible-tab account polling; latest-game deduplication; open two-player phase stats; supplied accuracy equation; explicit unknown classifications; desktop bounded workspace.

# v5.0 — Analytics Lab

Obsidian/daylight docked workspace, persistent panel order and width, UCI WDL, same-depth alternative pressure, mini-PV previews, player radar, clock-based statistics, repertoire recall, timed spaced repetition, isolated thought-line comparison, three-source explorer, and keyboard command palette. Preserves v4 overview and guided review.

# v4.0 — Game overview and guided review

Added a two-player summary with transparent local accuracy, classification counts, coverage and a navigable evaluation graph. Added a dedicated mobile review layout with a coach explanation above the board, previous/next navigation, non-mutating best-move preview and puzzle practice. Opening labels use exact database sequence prefixes. Incomplete analysis is clearly identified.

# v3.0 — Thomas × Zoza studio

Rebuilt the workspace hierarchy, moved secondary actions into dialogs, added paired move rows, clearer mobile controls, and a visible Full engine download with cancellation and persistent caching.

# Changelog

## 2.0.0 — 2026-10-14

- Rebuilt the UI as a light, continuous Arabic analysis workbench.
- Replaced text glyph pieces with two licensed SVG sets.
- Replaced flat history with persistent nested study variations.
- Added a cancellable MultiPV UCI adapter, critical-position reanalysis and per-search cache.
- Added library tables, annotated PGN, backups, setup editor and printable reports.
- Added local opening data, optional Lichess PKCE/explorer, tablebase and public game imports.
- Added study-derived puzzles and spaced review scheduling.
- Added reproducible Node tests and a GitHub Pages deployment workflow.
- GitHub creation, deployment and real browser acceptance remain pending.

## 6.1 — Classification integration
- Apply supplied loss thresholds consistently to review, insights, radar and clinic extraction; retain actual loss even for engine-top moves.
- Full-game review requests two PVs. CP alternative gap requires distinct moves at equal depth; it does not prove an only move.
- Brilliant candidate is a local heuristic: engine top move, depth >=12, next PV reply captures and reduces mover material balance by >=2 pawn units, post-move chance index >=45. Not a verified sacrifice or Chess.com classification. Miss remains explicitly uncomputed.
- Experimental Game Rating uses supplied formula only with a recorded base rating and complete analysis. Not calibrated Elo. Existing imported clinic exercises remain saved.
- 31 tests pass including a real bundled Stockfish search; DOM and IndexedDB QA pass. No real-browser visual validation.
