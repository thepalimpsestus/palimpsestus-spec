# D23: sampled extent of IP lines whose cited PP does not carry the rule

Ledger entry: `DEFECT_LEDGER.md`, D23. Status: **OPEN** (extent measured by sample; the line-by-line read is not started). Corpus files: `system-foundations-implementation-physical.md` (IP) and `system-foundations-physical-physical.md` (PP), read at `release/1.1.4-pre` commit `a06573a`.

## The measure

- **Frame.** The IP lines that contain a PP id (`PP-n`): 678 lines. Excluded: the 17 lines already read as D23 loci (IP lines 251, 352, 353, 370, 373, 377, 686, 960, 1110, 1114, 1117, 1135, 1137, 1240, 1593, 1596, 1601). Frame size 661.
- **Draw.** Python: `random.seed(20261031)`, then `sorted(random.sample(frame, 40))` over the frame's line numbers in file order.
- **Read.** Each (line, cited PP) pair was read against the PP entry's text, read whole, and classed: CARRIES (the PP states the line's rule), PARTIAL (states part of it), NOT-CARRIED, LIST-ONLY (the line only names the PP, as on an Applies-to line), UNCLEAR. A Worker read every pair under a brief that named no expected rate or pattern; three pairs (IP lines 114, 1063, 1627) were read again on a separate path, and all three agreed.

## Result

- 40 lines, 63 pairs: CARRIES 12, PARTIAL 3, NOT-CARRIED 23, LIST-ONLY 25, UNCLEAR 0.
- Of the 35 lines that attribute a rule to a PP (the 40 less five Applies-to lines), 23 cite at least one PP that does not carry it: 66%, Wilson 95% interval 49% to 79%. Over the about 580 such lines in IP, that is roughly 280 to 460 lines.
- Three Irreducibility lines (918, 1172, 1223) cite two PPs, one carrying and one not.

Until D23 closes, a PP named on an IP Substrate Invariant, corollary or Irreducibility line is not evidence that the PP carries that line's rule.

## The pairs

| IP line | PP | Class | PP line | Reading |
| :--- | :--- | :---: | :--- | :--- |
| 93 | PP-67 | NOT-CARRIED | 1370 | PP-67 is about a successful reference-comparison match being the least informative result (frontier-generation is more valuable); no scars or irrevocability. |
| 114 | PP-72 | CARRIES | 1483 | reading the deviation score on a metric dashboard is reading a label; true comprehension of the deviation requires traversal |
| 115 | PP-120 | CARRIES | 2465 | valid assessment requires both adjacency (LP-86) AND active traversal (PL-115); also "Remote adjacency ... fails the traversal requirement" |
| 192 | PP-113 | CARRIES | 2323 | a tool that validates only at certain depths uses different truth conditions at different scales and imports an invisible boundary between them; rejection is the IP process's enforcement (PP-113 is about verification tools) |
| 200 | PP-182 | CARRIES | 3721 | every execution is improvisation under constitutional incompleteness — the conditions for execution cannot be fully specified in advance; edges "instantiated at the moment of traversal" (3721) |
| 274 | PP-176 | NOT-CARRIED | 3591 | PP-176 is about the dual-vector proof (existence-transparency vs excavation-transparency); no gaps or metabolism. |
| 276 | PP-132 | CARRIES | 2704 | Scored absences must be actively polled to remain alive; "stopping metabolic sampling kills the score"; corollary 4 treats aging functions as decay models (2710) |
| 421 | PP-38 | NOT-CARRIED | 779 | PP-38 is about gate validity evaluation using the same algebra at every scale (scale-relaxed gate logic invalid); no policy/enforcement unification (that is PP-41). |
| 422 | PP-41 | CARRIES | 851 | any architecture that separates a 'policy engine' from an 'enforcement gate' has administered logical and physical separately, which is constitutionally invalid; corollary 2 (857): policy decisions stored in databases for enforcement to poll are Theater. ACL tables not named |
| 476 | PP-103 | PARTIAL | 2116 | Carries metabolic independence only conditionally: "where a nested entity is isolated from the container's primary circulation, it is an organ with its own metabolic rate". Self-governance is not stated; Irreducibility (2124) says it was dropped as stated by neither parent. |
| 534 | PP-189 | NOT-CARRIED | 3852 | PP-189 is about a decaying connection being existence-collapse rather than "less valid"; no certificates, attestation or validity windows. |
| 571 | PP-118 | LIST-ONLY | 2412 | PP-118: gate-traversal wake IS the computation output; excavate-wake treats residual wake as output. |
| 571 | PP-125 | LIST-ONLY | 2553 | PP-125: traversal removes extraneous data and deposits Wake (net exchange); concerns wake deposition. |
| 571 | PP-14 | LIST-ONLY | 289 | PP-14: protocol accountability provenance predates protocol establishment (T=0 is fiction); not about execution wake or scars. |
| 571 | PP-23 | LIST-ONLY | 472 | PP-23: executing a historical scar leaves new wake; directly on wake/scar analysis. |
| 571 | PP-275 | LIST-ONLY | 5605 | PP-275: accumulated history is present-tense Structural Mass; bears on accumulated historical consequence (borderline: wake itself is not named). |
| 585 | PP-25 | NOT-CARRIED | 513 | PP-25 is about restorative correction and failure-consequence cascades being coupled and computed together; no wake, tension accumulation or un-metabolized state. |
| 611 | PP-5 | NOT-CARRIED | 105 | PP-5 is about defensive-void coverage claims being constitutionally incomplete; no gate filters or signal absorption (gate filtering is PP-46/PP-48). |
| 622 | PP-10 | LIST-ONLY | 208 | PP-10: protocol accountability auditing has no external vantage point; not about advertising density. |
| 622 | PP-16 | LIST-ONLY | 331 | PP-16: a joint-traversal symmetric exchange creates an edge belonging to neither participant; not about density or advertising. |
| 622 | PP-224 | LIST-ONLY | 4566 | PP-224: a node's prior-interaction weight is present-tense Structural Mass; archived is history; matches accountability load advertisement. |
| 622 | PP-263 | LIST-ONLY | 5371 | PP-263: the frontier recedes as explored; unrelated (IP entry itself says PP-263 places no constraint). |
| 622 | PP-46 | LIST-ONLY | 943 | PP-46: gate filter configuration is the live honest boundary statement; summary of broadcast-density concerns density/accountability load, not gate filters (borderline). |
| 635 | PP-3 | PARTIAL | 73 | Carries self-compounding lie-mass from paradoxical-membrane disclosure: "deposits Theater lie-mass that attracts further traversal"; falsified density measurements and field-alignment corruption are not stated. |
| 703 | PP-3 | CARRIES | 73 | Each provenance-disclosure cycle at a paradoxical membrane simultaneously degrades the membrane and deposits Theater lie-mass ; self-compounding (73); detecting/halting is the IP process, corollary 4 (79) gives lie-mass clearance |
| 784 | PP-145 | CARRIES | 2971 | A probe directed at the topology's tension-generating incompleteness boundaries performs tension relief on the boundary itself; relieves tension between sovereign structures without resolving it. "Surface limits" not worded. |
| 851 | PP-14 | LIST-ONLY | 289 | PP-14: protocol accountability provenance predates establishment; not about scope release. |
| 851 | PP-198 | LIST-ONLY | 4034 | PP-198: self-declaration validity is scale-invariant; not about releasing scope. |
| 851 | PP-25 | LIST-ONLY | 513 | PP-25: restorative correction and failure cascades coupled; release-scope is a voluntary surrender, not a failure correction (borderline). |
| 851 | PP-36 | LIST-ONLY | 739 | PP-36: due process for restorative dissolution of failed structures; scope surrender is not described as dissolution (borderline). |
| 851 | PP-48 | LIST-ONLY | 986 | PP-48: ignorance-preserving gate regulates requirement-discovery rate; unrelated to scope release. |
| 918 | PP-1 | CARRIES | 31 | The metabolic expenditure ... is the active defence of a sovereignty that is constantly contested; defence possible only while the structure is alive |
| 918 | PP-8 | NOT-CARRIED | 168 | PP-8 is about simulation drift depositing comprehension asymmetry; no lineage, spine or immutability. |
| 934 | PP-35 | NOT-CARRIED | 718 | PP-35 is about proving a restorative correction's sovereignty claim by traversal rather than a pre-evaluated certificate; no churn or stress. |
| 959 | PP-40 | NOT-CARRIED | 819 | PP-40 is about abstracting away a gate at any scale being a sovereignty bypass; no equilibrium or stress. |
| 962 | PP-198 | NOT-CARRIED | 4034 | PP-198 is about self-declaration meeting the same validity standard at every scale; no load or conservation. |
| 967 | PP-206 | NOT-CARRIED | 4195 | PP-206 is about accountable self-declaration carrying accountability as internal Structural Mass; nothing on stress redistribution. |
| 992 | PP-36 | PARTIAL | 747 | Carries due process for restorative dissolution: "the sovereignty due process for that dissolution must be at least as demanding as ... the original creation". No trigger from failed equilibrium and nothing automatic; PP-36 says dissolution gets no expedited process. |
| 1013 | PP-199 | NOT-CARRIED | 4054 | PP-199 is about identity needing continuous re-declaration and defence; no corruption or containment. |
| 1063 | PP-60 | NOT-CARRIED | 1229 | PP-60 is about reference-comparison deviations being algebraic invariance violations that propagate to all scales; no trajectories, vectors or coordinates (shares only the idea of algebraic invariance). |
| 1087 | PP-16 | NOT-CARRIED | 331 | PP-16 is about a joint-traversal exchange edge belonging to neither participant (edge is permanent, 340); no scars or mass drag. |
| 1172 | PP-16 | NOT-CARRIED | 331 | PP-16 concerns the permanent exchange edge belonging to neither participant; it states nothing about scars. |
| 1172 | PP-23 | CARRIES | 480 | each execution is a present-tense navigation that deposits new Wake in the current topology |
| 1223 | PP-1 | CARRIES | 31 | The metabolic expenditure ... is the active defence of a sovereignty that is constantly contested |
| 1223 | PP-40 | NOT-CARRIED | 819 | PP-40 is about gate abstraction as sovereignty bypass; the word equilibrium does not occur. |
| 1232 | PP-1 | LIST-ONLY | 22 | PP-1: metabolic evaluation is defence of sovereignty; a flatlined structure cannot contest; matches starting a metabolic loop. |
| 1232 | PP-212 | LIST-ONLY | 4315 | PP-212: self-declared capability proof needs traversal not documentation; summary of ignite-metabolism does not concern declaration (borderline: entry's invariant concerns identity re-declaration). |
| 1232 | PP-35 | LIST-ONLY | 718 | PP-35: sovereignty proof of a restorative correction by traversal; unrelated to igniting metabolism. |
| 1232 | PP-68 | LIST-ONLY | 1390 | PP-68: reference-comparison deviation generates cross-depth thermodynamic cascade; unrelated. |
| 1232 | PP-9 | LIST-ONLY | 188 | PP-9: protocol accountability IS endpoints' current metabolic state; shares metabolic-state topic (borderline). |
| 1266 | PP-127 | CARRIES | 2603 | the physical storage must keep a traceable log of every deletion during excavation; ledger must also record consequence (2601). PP-127 speaks of excavation deletions; node/edge not worded. |
| 1321 | PP-103 | NOT-CARRIED | 2116 | PP-103 concerns nested entities isolated from container circulation having their own metabolic rate; Irreducibility (2124) states self-governance is stated by neither parent; nothing on replication. |
| 1390 | PP-9 | NOT-CARRIED | 188 | PP-9 says protocol accountability IS the endpoints' current metabolic state (no separate record); no state bifurcation or disclosure. |
| 1449 | PP-16 | NOT-CARRIED | 331 | PP-16 concerns the permanent exchange edge belonging to neither participant; no scars, spine or refactoring. |
| 1475 | PP-16 | NOT-CARRIED | 331 | PP-16 concerns the permanent exchange edge belonging to neither participant; no scars or boundary walls. |
| 1512 | PP-15 | LIST-ONLY | 309 | PP-15: protocol compliance proof requires live traversal, not documents; topic is compliance, not field gradients (borderline). |
| 1512 | PP-16 | LIST-ONLY | 331 | PP-16: exchange edge belonging to neither participant; not about gradient sensing. |
| 1512 | PP-224 | LIST-ONLY | 4566 | PP-224: prior-interaction weight is present-tense Structural Mass; sensing it relates to field density (borderline; summary speaks of density, temperature, pressure gradients). |
| 1512 | PP-263 | LIST-ONLY | 5371 | PP-263: frontier recedes as explored; not about gradient sensing. |
| 1512 | PP-46 | LIST-ONLY | 943 | PP-46: gate filter configuration is a live boundary statement; summary senses gradients, not gates (borderline). |
| 1576 | PP-7 | NOT-CARRIED | 147 | PP-7 is about symmetric protocols dissolving when either side stops spending energy; no friction, equilibrium or edge traffic. |
| 1627 | PP-7 | NOT-CARRIED | 156 | PP-7 says an endpoint that stops spending energy loses the connection and active exercise atrophies, "while inherent standing persists"; no pulse dropping, encapsulation or resistance to decay (weak overlap on persisting standing). |
| 1628 | PP-48 | NOT-CARRIED | 986 | PP-48 is about the ignorance-preserving gate regulating requirement-discovery rate; no ignition, encystment or signatures. |
