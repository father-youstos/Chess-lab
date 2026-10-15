# ZOZA hybrid v1
This is not CAPS2 and does not promise exact agreement with any hosted service.
References: https://lichess.org/page/accuracy and the source linked there at
https://github.com/lichess-org/lila/blob/2e653ad1e2b9fad31b4a092394019ef8fafdedb8/modules/analyse/src/main/AccuracyPercent.scala
Chess.com overview: https://support.chess.com/en/articles/8708970-how-is-accuracy-in-analysis-determined

Engine scores are normalized to White once in the UCI adapter. Numeric mate values are retained as mate, not displayed as centipawns. For this metric only, mate maps to signed 1000cp and ordinary cp is clamped to [-1000,1000]. Missing scores are excluded, never replaced by zero.
Move accuracy uses the public exponential formula with the source's +1 uncertainty bonus; improvements return 100. Book labels do not override accuracy and unanalysed Book moves contribute no score.
Weights use population standard deviation of sliding Win% windows, sized floor(plies/10), clamped 2–8; weights clamp 0.5–12. The aggregate is 50% weighted mean plus 50% harmonic mean. A zero accuracy has harmonic limit zero, not an arbitrary floor of 10. Missing/invalid scores yield no aggregate. We report partial coverage explicitly.
Differences from a server result: actual root evaluation (including custom FEN), local Stockfish searches, engine/depth variation, explicit missing-data handling, and separate local classification rules. The same aggregation is used for phase samples and the radar; this does not make phase ratings calibrated Elo. Computation is our independent implementation of the described mathematics.
