# ZOZA hybrid v1
This is not CAPS2 and does not promise exact agreement with any hosted service.
References: https://lichess.org/page/accuracy and the source linked there at
https://github.com/lichess-org/lila/blob/2e653ad1e2b9fad31b4a092394019ef8fafdedb8/modules/analyse/src/main/AccuracyPercent.scala
Chess.com overview: https://support.chess.com/en/articles/8708970-how-is-accuracy-in-analysis-determined

Engine scores are normalized to White once in the UCI adapter. Numeric mate values are retained as mate, not displayed as centipawns. For this metric only, mate maps to signed 1000cp and ordinary cp is clamped to [-1000,1000]. Missing scores are excluded, never replaced by zero.
Move accuracy uses the public exponential formula with the source's +1 uncertainty bonus; improvements return 100. Book labels do not override accuracy and unanalysed Book moves contribute no score.
Weights use population standard deviation of sliding Win% windows, sized floor(plies/10), clamped 2–8; weights clamp 0.5–12. The aggregate is 50% weighted mean plus 50% harmonic mean. A zero accuracy has harmonic limit zero, not an arbitrary floor of 10. Missing/invalid scores yield no aggregate. We report partial coverage explicitly.
Differences from a server result: actual root evaluation (including custom FEN), local Stockfish searches, engine/depth variation, explicit missing-data handling, and separate local classification rules. The same aggregation is used for phase samples and the radar; this does not make phase ratings calibrated Elo. Computation is our independent implementation of the described mathematics.

## v11 classifications and game performance
Miss is a local heuristic: previous opponent move raises the current mover's white-normalized chance index by at least 12 percentage points, current chance index is at least 68, and the reply loses at least 10. Book and top-engine choices take precedence. All three positions must have comparable engine identity when known. This is not Chess.com's classification formula.

Game performance is an **experimental uncalibrated estimate**, not Elo or Chess.com Game Rating. It uses the user-proposed blend `0.55*base + 0.30*(3100*exp(-0.011*max(5,ACPL))) + 0.15*(base+(accuracy-75)*16.5)`, rounded to 50 with minimum 200. It requires a recorded positive player rating, at least three moves, and complete accuracy coverage. ACPL includes only before/after cp pairs (mate excluded); a separate label shows this scope. It must not be used for ranking or fair-play decisions.

Account exercises analyze at 1200 ms/position with MultiPV 2 and recheck candidate errors at 3000 ms/position. Solutions remain engine suggestions; equal alternatives may exist. Completed positions save locally and resume with the same engine. Archive loading follows supported API pages; unavailable/private games cannot be included. Opening-leak statistics group longest-prefix matches into named opening families, count own mistakes in the first ten full moves, and display analyzed coverage. No Book move is automatically granted 100 accuracy.
