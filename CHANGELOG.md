## v13.0.0 — ZOZA coach and comparable accuracy evidence
- Correct the visible coach name to ZOZA / زوزا across languages and accessible labels.
- Prefer same-root, same-depth engine evaluations of the played move when available for accuracy, matching the comparison used for classifications. Keep raw engine evidence unchanged.
- Report same-root / equal-depth / unequal-depth / missing evaluation coverage; export per-move evidence for reproducible comparisons.
- Clearly label Strict as deliberately harsher, not an improvement or CAPS2 approximation. No target-score fitting or unsupported accuracy claims.

## v12.0.0 — Transparent strict comparison and phase presentation
- Tighten Great to an equal-depth 220 cp alternative gap in the 20–78 chance band, excluding immediate same-square recaptures.
- Apply documented CP-aware local classifications, with missing/mate handling and opportunity evidence for Miss. Best remains the actual first engine choice.
- Add optional ZOZA Strict accuracy using effective CP/chance loss, error-weighted aggregation and exact zero harmonic limit. Hybrid remains the default; both results are shown from identical saved evaluations. Book does not force 100%.
- Replace experimental overall rating blend with the user-proposed count-based estimate, explicitly uncalibrated; no assumed 1200 baseline.
- Add emerald Game Rating badges and colored phase accuracy/rating samples before Start Review. Keep phases separate from tactical sample categories.

## v11.0.0 — Account learning and responsive analysis
- Safely interrupt active engine searches on settings save, waiting for bestmove; retain the worker and avoid caching stopped searches. Custom review now honors chosen MultiPV.
- Search the bundled ECO library with incremental results and open playable lines.
- Generate personal exercises across loaded games or the entire paginated account archive. Persist positions, resume, deduplicate and recheck candidate errors; only account-owner moves qualify.
- Add evidence-based local Miss heuristic, category move filters, red/green comparison arrows, and a non-destructive Show Punishment preview.
- Show opening-family results and measured first-ten-move error counts with coverage.
- Optional display of experimental, explicitly uncalibrated game performance estimate using the supplied ACPL/rating heuristic. No fabricated default rating.
- Retain documented hybrid accuracy. Do not claim the supplied ad-hoc coefficients reproduce CAPS2.

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

## 9.0 — Consistent Book classification and evaluation comparisons
- Shared Book matching covers board, notation, explanations, summary, variations, radar and clinic extraction; exact standard-start prefixes only. Missing evaluations still produce no accuracy.
- Reserve Best for the engine's first choice. Close alternatives use Excellent/Good by the documented loss thresholds. Remove uncalibrated Game Rating from the UI.
- Prefer same-root, same-depth searched candidate scores for move loss; retain child-position fallback where unavailable. Keep last completed MultiPV iteration, avoiding mixed-depth final alternatives. Hash included in cache key.
- Quick can recheck up to two largest candidate errors at 1200 ms per position when critical rechecks are enabled. No claim of superiority over cloud engines or equivalence to CAPS2.
- 38 tests pass, including opening-label consistency, missing-score behavior, same-root comparisons and completed MultiPV depth. Engine values remain unscaled UCI output /100, white-normalized.

## 9.1 — Phase rating estimates and black/white evaluation
- User explicitly chose numerical phase ratings. Show local heuristic rating alongside accuracy for both players in opening, middlegame, endgame and check/capture/promotion samples.
- Require a PGN base rating, >=3 sample moves and full sample analysis; otherwise show unavailable. Formula and lack of Elo/Chess.com calibration are visible.
- Evaluation bar and graph use white/black with neutral unanalysed segments; keep readable numeric label. Phase-rating/graph DOM checks passed.

## 10.0 — ZOZA chess, ZAZO and hybrid accuracy
- Rename visible brand to ZOZA chess; add an original inline SVG/CSS coach named ZAZO, contextual phrases and opt-in browser speech. Respect reduced-motion preference.
- English default, persisted language selection, Arabic RTL and six additional core-control languages (Spanish, French, German, Italian, Portuguese, Turkish). Advanced explanations fall back to English; no claim of complete translation of every diagnostic.
- Replace arithmetic player accuracy with a documented 50/50 volatility-weighted / harmonic aggregate inspired by the public Lichess method. Keep the source's +1 uncertainty bonus, correctly distinguish missing/zero, and preserve Book labels without forced perfect accuracy. Same aggregation feeds phase samples and radar.
- Keep mate and perspective normalization in the UCI adapter; no second sign flip. No claim of exact CAPS2 or equality to hosted services.
- Add explicit batch progress/depth and ECO opening name above summary. Accuracy formula details in docs/accuracy-method.md.
- 41 unit/integration tests pass. DOM flow, Book, phase rating, language default/switching and ZAZO checks pass. Real mobile layout/audio not verified.
