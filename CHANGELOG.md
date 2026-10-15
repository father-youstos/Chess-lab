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

## 7.0 — Account-first review journey
- Home opens on account ratings and a searchable match list; persistent account dock item and PGN upload entry.
- Chess.com month-by-month archives without the previous 30-game cap. Lichess 50-game timestamp pages. Load more, sequential load remaining, stop after current batch, explicit errors and retry.
- Selected games open the summary and run review there; Start Review opens the guided studio. Summary has analysis status, retry and stop controls.
- Account ratings are provider values; W/D/L covers loaded games only. Finished public standard games only. Saved account reconnects on opening.
- 33 tests pass; account-to-summary-to-studio DOM flow verified with mocked Worker. Real-device visual QA not performed.

## 8.0 — Motion, evaluation readability and review efficiency
- Animate legal forward/back moves and castling rook, capture pulse, check/checkmate highlights and colored classification badges. Honor OS reduced-motion preference; hide classification clues in training.
- Wider high-contrast evaluation label with fixed white perspective, actual depth and originating engine name.
- Preserve Hash across searches unless size changes; explicitly request full engine skill. Batch heavy review UI updates; deduplicate critical-position rechecks and prioritize largest drops.
- Quick: 450 ms / 1 PV, preliminary. Balanced: 1200 ms / 2 PV plus up to 4 critical moves. Deep: 4000 ms / 2 PV plus up to 12; Custom retains user settings. Recheck button analyzes current and previous positions for 8 seconds each. Lower budget improves latency, not guaranteed accuracy.
- Refuse cross-engine move classification when both engine identities differ. 35 tests pass including real Lite mate-in-one for either color and MultiPV execution. DOM motion dispatch and review journey pass; no device visual/performance benchmark.
