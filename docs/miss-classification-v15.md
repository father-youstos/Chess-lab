# ZOZA classification v3 — v15 release

This is a local heuristic, not Chess.com’s proprietary model.

Miss now permits a lost equalizing opportunity even when the mover was not already ahead. It also recognizes a material opportunity in the best principal variation: legal PV, depth at least 12, at least eight plies, a material gain of at least one pawn retained at the final two opponent-reply checkpoints within a twelve-ply horizon, and at least one pawn more than the played continuation. Material values are pawn 1, minor 3, rook 5, queen 9. This is a limited PV heuristic, not proof against all defenses.

Classification and Accuracy now share the same evidence selector: finite scores, compatible engine, positive equal-depth root alternatives. No accuracy coefficients were changed.

Recorded Stockfish 19 Lite evidence on Thomas7-77 vs ELITE-SAMUEL: 4...Nd4 and 15...f6 now classify as Miss, consistent with the two user-provided screenshots. Black Miss becomes 3 and Blunder 0. Other category counts still differ; this is not an exact Chess.com clone. Accuracy on this recorded run remains 60.9 / 72.6, versus reference 62.1 / 72.6. Time-limited searches can vary across devices.

Game Rating remains an experimental heuristic, not a calibrated Elo measurement. No claim of improved accuracy calibration is made from this single game.
