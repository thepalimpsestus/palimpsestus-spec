# D19: PP parent slots with no confirmed carrier (open)

Ledger entry: `DEFECT_LEDGER.md`, D19. Status: **OPEN**. Corpus file: `system-foundations-physical-physical.md`.

## The defect

Under `dag-crossing-method.md` (lines 31-32, 128-130) a PP entry names its left parent (a PL entry) in **Derives from** and its above parent (an LP entry) in **Applies to**, and its Irreducible Claim says what each parent establishes. A slot is defective when the entry it names does not carry the claim the PP text attributes to it.

## How the slots were read

Concepts, not numbers. Two readers proposed, for every slot, the PL or LP entry whose text carries the attributed claim. A third reader picked again blind to those proposals. A strict reader then decided every slot where they disagreed, counting a pick only when its reason states both claims and the same pick came from an earlier reader. "Closest", "loose" or "partial" counted as no carrier. A 30-slot sample of agreed slots was re-read by the strict reader, and all 30 came out the same.

Result, in the commits after `e4a4d6a`:

- **Re-pointed or filled:** 248 slots, in commits `898f442` and `364d495`.
  - In each one the header id changes, together with the same id in that entry's text.
- **Not changed:** 250 slots, listed below.
  - For each, no entry was confirmed to carry the claim.
  - Their text stays as written, so no ancestry is erased (No Ancestral Erasure, `dag-crossing-method.md` line 7). Keeping an open or marked entry rests on D20's reading of that invariant (`D20_LP_CP85_RECROSS.md` line 23), not on a rule the method states.

## What would close it

For each listed slot, either:

- an entry is found whose text carries the attributed claim, and the slot is re-pointed; or
- the PP's claim is restated to what its named parent carries.

The second is a text change to an authored entry, not a pointer fix.

## Related items, not changed here

1. **`[shared LL-x]` tags on PP headers.** These are authoring annotations; `dag-crossing-method.md` does not define them, and its Zero Pre-Filtering Mandate (lines 50-54) bars filtering candidate pairs on shared ancestry. They are left unchanged. Measured over the 751 PP tags, here is how many cases have the tag carried by each parent's own header:

   | Tag carried by | At `e4a4d6a` | After this correction |
   | :--- | ---: | ---: |
   | both parents | 414 | 491 |
   | the LP only | 251 | 161 |
   | the PL only | 13 | 25 |
   | neither | 73 | 74 |

2. **PP-696, PP-697, PP-722, PP-724.** These name their LP in **Derives from** as well as in **Applies to**. Derives from is the left (PL) parent.

3. **LP-612 to LP-619.** These derive from CP-85 (Non-Externalizable Cost Attribution). The texts of LP-614, 616, 617 and 619 say CP-85 establishes retroactive cost registration, and neither CP-85 nor any other CP entry says that.
   - CP-85's text carries the attribution of path and consequence cost to the builder, which LP-614 and LP-617 use.
   - CP-84 (Continuous Metabolic Register) carries the non-deferrable cost and the cost accrued before anyone looks, which LP-616 and LP-619 use.
   - Re-parenting LP-616 and LP-619 to CP-84 would also need their claims restated. That is a text change, left for the specification owner.

4. **Header titles that name no PL entry.** In 27 of the listed PL slots (PP-225 to PP-367), the header pairs the PL id with a title that is not that entry's title and matches no PL entry in A. Examples are "Consequence Carries Its Own Thermodynamic Receipt" (with PL-299, 12 slots), "A Living System Dies Before It Appears Dead" (with PL-305, 9 slots) and "High-Consequence Intersections Are Constitutionally Priority Governance Sites" (with PL-228, 3 slots). The claim these PP entries cite has no PL entry, which is consistent with no carrier being found. PP-225 and PP-228 pair PL-319 with the title "Tension Between Competing Paths IS the Truth"; the concept check found that PL-319's text carries their claim, so they are not listed. PP-510 to PP-542 differ from the entry's title in wording only.

## Correction batches

Each batch takes listed slots one at a time. For each slot the parent texts are read whole, a carrier is sought, and the PP is re-pointed or restated to what its parents carry. The pair is then crossed again under `dag-crossing-method.md` Tests 1-3 (section 4.A). An entry whose constraint needs only one parent is kept and marked `**Derivational State:** BARREN` after its Derives line, with the failing test in its Irreducibility field, as in D20 (`docs/audit/D20_LP_CP85_RECROSS.md`, "The rule applied"). The `[shared LL-x]` tags are left as they are (related item 1). A batch is made by a Worker and reviewed by OPEN PM, who reads each parent text again. Batches 03, 04, 05, 06 and 07 have been checked independently ("Batch 03, independent check", "Batch 04, independent check", "Batch 05, independent check", "Batch 06, independent check", "Batch 07, independent check"); the other batches have not.

### Batch 01

Eight LP slots. Six are corrected here. Two (PP-263, PP-269) went back to the Worker and stay listed.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left | Above (was) | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-113 | PL-1 | LP-216 (LP-81) | BARREN | LP-81 carries no tool claim; LP-216 carries scale-free verification and excavation tools. Test 1: that a depth-restricted tool does not implement valid logic holds from PL-1 alone, whose corollary says validation with different truth conditions at different scales imports an invisible boundary. |
| PP-224 | PL-19 | LP-154 (kept) | BARREN | LP-154 carries no consequence, weight or Structural Mass, and no LP entry carries a consequence-weighted node, so the claim no longer attributes that to LP-154. Test 1: that a node's accumulated consequence is living Structural Mass, not archive, holds from PL-19 alone (present entities carry the weight of prior interactions as Structural Mass). |
| PP-232 | PL-124 | LP-234 (LP-158) | BARREN | LP-158 carries no threshold response; LP-234 carries the sovereign threshold defence. Test 1: that the defence must be performed in the present holds from PL-124 alone, which already requires sovereignty defence to be performed. The threshold is a case of it. |
| PP-242 | PL-40 | LP-186 (LP-164) | IRREDUCIBLE | LP-164 carries no consequence content; LP-186 carries accountability cascading through every layer. Test 1: PL-40 alone gives no reach across layers. Test 2: LP-186 alone gives no proof by traversal. Product: the reach of the cascade sets the reach of the proof obligation. |
| PP-275 | PL-19 | LP-483 (LP-189) | BARREN | LP-189 carries no Wake or accumulation; LP-483 carries embedded history as accumulating structural mass. Test 1: that a node's accumulated history cannot be archived and stay operative accountability holds from PL-19 alone. |
| PP-281 | PL-188 | LP-376 (LP-193) | BARREN | LP-193 carries no edge or weight, and no text in A carries a "consequence-aware" edge weight. LP-376 carries the metabolic edge confidence score. Test 1 (PL-188 alone: no metric in a living topology is static) and Test 2 (LP-376 alone) both hold. |

What changed (`system-foundations-physical-physical.md`):
- Applies line re-pointed: PP-113, PP-232, PP-242, PP-275 and PP-281.
- Irreducible Claim restated to the parents' own texts: all six. This also removes PP-275's old sentence "PL-19 establishes that Wake is living Structural Mass": PL-19 does not use the word Wake. That PL-side misattribution was not in the list below.
- Each Irreducibility field restated; for the BARREN entries it names the failing test.
- `**Derivational State:** BARREN` added after the Derives line: PP-113, PP-224, PP-232, PP-275 and PP-281. Five lines are added.
- PP-281 also changes its title, italic line and two corollary phrases, from "consequence-aware edge weight" to the edge's confidence score. Its Irreducibility cites CP-28 (edge weights are confidence metrics), so the corollaries and IP-1's invariant line, which speak of edge weights, still read on it.
- Follow-up to `871bd28`: `system-foundations-physical-implementation.md` lists PP-281 by its title in 95 **Derives from** lines. Those copies still carried the old title, and now carry the new one. Only the title label changed; no PI claim text cites PP-281. Retitling an entry also means updating every copy of its title in later cells.
- PP-275 keeps the word Wake in its title, italic line and corollaries. Its Irreducibility names PL-14, which is not a parent, as the text that carries Wake and the accumulation of Structural Mass.
- No entry has been removed, renumbered or re-parented on the PL side.

Doubts recorded, not acted on:
- PP-242: PL-40's corollary that there are no permanent trusted states may already cover every layer. On that reading Test 1 gives BARREN. The entry is kept IRREDUCIBLE because the per-layer reach comes from LP-186. Low confidence.
- PP-275: LP-483 says history is a debt and that pruning or archiving lowers the load; PL-19 says the accountability record must stay living. Crossed, these may give a real product: accountability history cannot be shed as debt by archiving or pruning. The entry does not claim it, and it was not added.
- PP-281: corollary (1) speaks of routing metrics, and CP-28 says edge weights are not routing costs. The corollary was left as it is, since PL-188 covers every metric.
- PP-224: corollary (3), on a node's influence, is not in PL-19. It was left as it is.

Open loci found in this batch, for later batches:
- PP-263 and PP-269 use "consequence gradient" and "consequence density", which no entry in A carries. Several IP entries build on the first.
- PP-269's tag LL-252 is not carried by PL-182.
- PP-282 attributes a "consequence-aware edge weight" to LP-193, as PP-281 did.
- PP-241 says LP-186 establishes a "consequence field" with "consequence physics". LP-186 uses neither phrase.

### Batch 01b

PP-263 and PP-269, returned from batch 01, re-crossed on their parents' own texts. Three slots are corrected: PP-263's LP slot, and both of PP-269's slots, since its restated text attributes to PL-182 only what PL-182 says.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left | Above | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-263 | PL-145 | LP-179 (kept) | BARREN | No entry in A carries a "consequence gradient"; LP-179, LP-175, LP-177, LP-384 and LP-420 were read, and LP-384's gradient is one of confidence, not consequence. The term is dropped. Test 1: that exploring the frontier creates more unexplored territory than it resolves holds from PL-145 alone. LP-179's permanent shadows are a second, separate reason the frontier cannot be exhausted, not a product. |
| PP-269 | PL-182 (kept) | LP-184 (kept) | BARREN | Neither parent carries a consequence-density field or a governance-priority signal, and no LP, PL, CP or LL entry searched does. Both are dropped. Restated as discovery (PL-182) crossed with verbs as relational edges (LP-184). Test 2: LP-184's parent CP-33 requires agents to navigate by the verbs with no bypass, so that the navigation by which discovery proceeds constructs edges holds from LP-184 alone, applied to PL-182's case. Test 1: arrest when discovery ceases holds from PL-182 alone. |

What changed:
- `system-foundations-physical-physical.md`: PP-263 and PP-269 restated (title, italic line, Irreducible Claim, corollaries, Irreducibility), and a `**Derivational State:** BARREN` line added after each Derives line. Two lines are added. Parents and `[shared LL-x]` tags are unchanged.
- `system-foundations-physical-implementation.md`: the 95 **Derives from** copies of each old title now carry the new one. Only the title label changed.
- PP-269 was proposed IRREDUCIBLE, resting on a bridge (discovery is performed by executing the verbs) that neither parent states. CP-33's corollary supplies the bridge. With it, the product is one parent's rule applied to a case the other supplies, so the entry is BARREN.

Doubts recorded, not acted on:
- PP-263: corollary (4), that any ordering of what to explore next is renewed by the exploration, applies PL-145 and is not in either parent's text.
- PP-269: corollary (1) applies PL-182's corollary on inert notation to LP-184.

Out-edges:
- `system-foundations-implementation-physical.md` cites PP-263 for a "consequence gradient" in three invariant lines (:246, :631, :1521) and two corollaries (:634, :991). PP-263 no longer carries it, and before this correction no parent of PP-263 did. Those IP entries are an open locus, not corrected here.
- The IP file does not cite PP-269.

Open loci found in this batch, for later batches:
- PL-145 is the left parent of 13 other PP entries (PP-65, 67, 122, 138, 141, 195, 252, 257, 264, 268, 284, 285, 329) that each say the exploration of some object self-multiplies. Each needs its own reading of its LP parent.

### Batch 02

Eight slots: PP-721's LP slot and seven PL slots (PP-1, 7, 16, 26, 42, 49, 103). All eight are corrected and all eight are BARREN.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-721 | PL-208 (kept) | LP-649 (LP-582, listed twice) | BARREN | LP-582 carries no transparency claim; LP-649 carries that a gap must be disclosed as an attested record. The Derives line now names PL-208 alone. Test 1: that a representation disclosing only what is known claims more completeness than exists, and is Theater, holds from PL-208 alone. |
| PP-1 | PL-42 (PL-50, listed twice) | LP-1, LP-24 (kept) | BARREN | PL-50 carries navigability, not sovereignty as metabolism; PL-42 carries that sovereignty needs aliveness and that Pulse monitoring is sovereignty monitoring. The sentence that defending the boundary is the metabolic activity moves to LP-1 and LP-24 (through LL-2). Test 2: the identity of evaluation metabolism and sovereignty contestation holds from LP-1 and LP-24 alone. |
| PP-7 | PL-227 (PL-50) | LP-5 (kept) | BARREN | PL-50 carries no sovereignty content; PL-227 carries that active exercise of rights atrophies without metabolic maintenance while inherent standing persists. The cessation clause is cut back to that: a lapsed endpoint withdraws the exercise of its sovereignty, not its standing. Test 1, through LL-2: a conjunction. |
| PP-16 | PL-201 (PL-74) | LP-8 (kept) | BARREN | PL-74 does not carry the claim; PL-201 carries the nearest statement. The co-traversal product the PP named belongs to neither parent. Test 1: holds from PL-201 alone. |
| PP-26 | PL-59 (kept) | LP-17 (kept) | BARREN | Restated only. The failure-as-fuel statement is LP-17's and is now attributed to it; PL-59 is restated to what it carries. Test 2: holds from LP-17 alone. |
| PP-42 | PL-247 (PL-51) | LP-25 (kept) | BARREN | PL-51 carries failure propagation across scales, nothing on identity. PL-247 carries that an identity not being performed is the Structural Mass of its past performances and a resting identity is a label. "Identity IS mass" is dropped, since PL-247 says identity is the present performance. Test 2: that a gate evaluating provenance reads structural history, not a label, holds from LP-25 alone. |
| PP-49 | PL-192 (PL-54) | LP-30 (kept) | BARREN | PL-54 requires uniform activity and treats dormancy as a defect, the opposite thrust. No PL entry searched states an entity's right to complete its cycle; PL-192 carries that the living topology must permit death. The LL-21 ground moves to LP-30's sentence, where LP-30 states it. Test 2: the interior-triggered self-dissolution capability holds from LP-30 alone. |
| PP-103 | PL-191 (PL-82) | LP-73 (kept) | BARREN | PL-82 carries door/wall edge tension, nothing on metabolism. PL-191 carries that a subsystem isolated from the primary circulation metabolizes at its own rate. The offspring wording is attributed to LL-61, LP-73's own logical parent; LP-73 states only the self-similar nesting. "Governance" in paragraph 2 becomes "metabolism". Test 1: PL-191's rule applied to the nested case LP-73 supplies is a conjunction. |

What changed (`system-foundations-physical-physical.md`):
- Derives or Applies line re-pointed: PP-721, PP-1, PP-7, PP-16, PP-42, PP-49 and PP-103. PP-26 keeps its parents.
- Irreducible Claim restated to the parents' own texts, and Irreducibility restated naming the failing test: all eight.
- `**Derivational State:** BARREN` added after the Derives line: all eight. Eight lines are added.
- No title is changed, so the 95 copies of each title in `system-foundations-physical-implementation.md` stay valid. No entry has been removed or renumbered, and nothing on the PL or LP side is changed.

Amendments made by OPEN PM in review:
- PP-7: "a sovereignty vacuum in the exercise of sovereignty" became "a vacuum in the exercise of sovereignty" (the doubled word).
- PP-26: the italic line's "failure-states are its primary fuel" became "drift and failure states are its fuel"; "primary" is carried by neither parent.
- PP-42: the Irreducibility now records that the parents use "label" differently. LP-25 calls the badge the label and the derivation history the thing read; PL-247 calls the accumulated Structural Mass itself a label of the present identity. The entry follows LP-25's usage.
- PP-49: PL-192's sentence keeps its own ground, that a settled region is a dead region (LL-320).
- PP-103: "as subsystems isolated from the container's primary circulation" became the condition "where a nested entity is isolated from the container's primary circulation". Neither parent says a nested entity is so isolated. The Irreducibility says the restated claim holds only under that condition.

Doubts recorded, not acted on:
- PP-42: paragraph 2's statement that no evaluation takes zero time, and corollary (1) on latency as a physical minimum, are stated by neither parent. Corollary (3) keeps the words "identity mass". PL-246 (identity as the edge's force relationship; the label is Structural Mass evidence) was read and is not nearer.
- PP-49: PL-6 (dissolution is the topology's own metabolic act, not an administrative one) shares the frame of corollary (1) but protects against dissolution. PL-192 concerns settled regions, not an entity's right. The PL slot may be judged to have no carrier at all.
- PP-103: the title and corollaries keep "self-governing", which neither parent states.
- PP-7: the bridge through LL-2 is the weakest step in the batch.

Out-edges (`system-foundations-implementation-physical.md`), not corrected here:
- PP-16 is cited for scar deposits (:84, :551, :730, :1087, :1160, :1391 and others); PP-16's text says nothing about scars.
- PP-42 is cited for `restore-lineage` (:1196, :1450); PP-42's text says nothing about lineage restoration. :605 rests on the structural-mass content, which is kept.
- PP-103 is cited for nested self-governance (:63, :476, :1321), which now rests on the title and corollaries alone.
- These belong with D23 (IP lines whose PP labels do not match the PP's text).

Open loci found in this batch, for later batches:
- PL-50 is the named left parent of PP-1 (twice) and PP-7 and carries what neither says of it. The same pattern is likely in other PP entries.
- Stray LP ids in the Derives line, which names the left (PL) parent: LP-625 (PP-1), LP-395 (PP-7), LP-695 (PP-16, PP-42) and LP-445 (PP-26). None is cited in the bodies. They are left as they are.
- PL-42, PL-227, PL-201, PL-247, PL-192 and PL-191 do not apply the LL named in the `[shared LL-x]` tag of the PP they now serve (related item 1).

### Batch 03

Eight slots in seven entries: the PL slots of PP-131, 136, 140, 145, 199 and 217, and the LP slots of PP-217 and PP-218. Seven are corrected and all seven are BARREN; PP-136 is not corrected and stays open.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-131 | PL-226 (PL-113) | LP-94 (kept) | BARREN | PL-113 carries that a consistency snapshot cannot certify the future, nothing on hidden tension. PL-226 carries that unattended tension compounds as thermodynamic debt. Reading "hidden" (LP-94) as "unattended" is the entry's step. Test 1: with it, PL-226's rule applies to the case LP-94 supplies, a conjunction. "Uncounted" is dropped. |
| PP-140 | PL-130 (PL-149) | LP-101 (kept) | BARREN | PL-149 carries that certainty is impossible, nothing on decay. PL-130 is the only entry found that joins Wake and its decay. Test 1: that a probe's Wake decays holds from PL-130 alone; LP-101 supplies only that the probe is an interaction. The scale-invariant rate and the truth-event are dropped. |
| PP-145 | PL-150 (PL-216) | LP-105 (kept) | BARREN | PL-216 carries that a question locates pre-existing structure. PL-150 carries that a boundary IS tension (LL-363) and that multi-sovereignty tension is irreducible (LL-329). Test 1: relief without resolution is PL-150's irreducibility applied to the tension whose release LP-105 names. The claim now holds only where the boundary lies between sovereign structures. |
| PP-199 | PL-237 (PL-50) | LP-144 (kept) | BARREN | PL-50 carries that a wall at any scale is a global wall. PL-237 carries that sovereign tension held without exercise is dormancy and the sovereignty weakens. Test 1: that stopping the exercise weakens the sovereignty holds from PL-237 alone, applied to LP-144's case; reading a stale identity declaration as tension held without exercise is the entry's step. |
| PP-217 | PL-84 (PL-27) | LP-246 (LP-151) | BARREN | Neither old parent carries its claim. LP-246 carries that an uncontested border is unused and decays (Test 2); PL-84 carries that an untraversed edge atrophies and its standing degrades (Test 1). The same decay stated twice is a conjunction. "Unprobed" is read as "unexercised"; limit-testing as a necessity is dropped. |
| PP-218 | PL-43 (kept) | LP-151 (kept) | BARREN | Restated only. LP-151 carries protective partiality and that a complete self-model must not be demanded, not that limit-testing is a necessity. Test 1: that no exhaustive map can be obtained holds from PL-43 alone; Test 2: that it must not be demanded holds from LP-151 alone, once the demand is read as one for a complete self-model (the entry's step). Two single-parent facts side by side. |

What changed (`system-foundations-physical-physical.md`):
- Derives or Applies line re-pointed: PP-131, PP-140, PP-145, PP-199 and PP-217 (both). PP-218 keeps its parents.
- Italic line, Irreducible Claim and Corollaries restated to the parents' own texts, and Irreducibility restated naming the failing test: all six entries.
- `**Derivational State:** BARREN` added after the Derives line: six lines, one per entry; PP-217's two slots share one.
- No title is changed. No entry has been removed or renumbered, and nothing on the PL or LP side is changed.

PP-136 (PL-160), not corrected: the Worker proposed restating the entry onto LP-98 alone. LP-98's corollary says successful probes solidify the ephemeral edge into a permanent connection, so the restatement would contradict the title, "Frontier Understanding Is Constitutionally Ephemeral". A retitle is outside this batch's brief; it goes to a later title pass with its 95 copies in `system-foundations-physical-implementation.md`, as in batch 01b. The slot stays in D19.

Amendments made by OPEN PM in review:
- PP-131, PP-145, PP-199 and PP-218: the Worker left these unmarked, reading the entry's own step as a product (for PP-145 it named the conjunction reading as close); each is one parent's rule applied to a case the other supplies, or two single-parent facts, so each is BARREN under the batch 01b ruling and carries the marker. For PP-218 a new edit adds the marker between its unchanged Derives and Applies lines.
- PP-131: visibility is the precondition for attending to the tension and "does not itself discharge the debt"; the Worker's text made visibility the debt service.
- PP-140: dropped "the same curve" and "PL-130 states no exception" (PL-130 gives a decay curve, not a common one), and the (LL-201) tag on the failed-probe clause, which is LP-101's corollary; corollary (1) no longer says "the same rate".
- PP-145: corollary (1) is limited to bottlenecks that mark a capacity boundary; PL-150's boundary is a boundary between regions, not every bottleneck.
- PP-199: dropped PL-237's "acknowledgment without engagement" clause, which concerns declared tensions, not identity declarations; the Irreducibility records that reading a stale identity declaration as tension held without exercise is the entry's step, and that the parents use "tension" in two senses.
- PP-217 and PP-218: the Irreducibility rewritten to name which parent alone carries which half.

Doubts recorded, not acted on:
- PP-199: corollaries (1) and (2) call yearly or release-cycle re-declaration slow; neither parent states a rate.
- PP-217: PL-84 speaks of traversal and LP-246 of contestation; "exercised" covers both and the entry does not say they are one.
- PP-242 (batch 01) is classed IRREDUCIBLE as a product (cascade reach sets proof reach). Batch 01 preceded the 01b conjunction ruling; it should be re-read under it for consistency.

Out-edges (`system-foundations-implementation-physical.md`), not corrected here:
- PP-140 is cited for "decay-resistant wake" (:88) and a "truth-event" (:245); the restated entry carries neither.
- PP-145 is cited for surfacing "sovereign boundary limits" (:784); the probe no longer reveals the boundary.
- PP-199 is cited for "metabolic pulse cycles" (:67), which now rests only on LP-144's pulse; the gap-node field-integrity lines (:271, :275, :451, :455, :708, :1013) were never carried by PP-199.
- PP-131 is cited by gap-node lines (:262, :267, :441, :446, :1270, :1525) for content PP-131 never carried.
- PP-136 lines :87 and :244 rest on LP-98's frontier-edge content.
- These belong with D23. PP-217's two citations (:133, :161) are Applies lists and carry no content claim.

Open loci found in this batch, for later batches:
- Every batch 02 and batch 03 correction is BARREN: where the original product was false, the nearest true carrier gives a conjunction. Later batches should expect this and say so when they find otherwise.
- PP-216 makes the same false attribution to LP-151 as PP-217 and PP-218.
- Thin or stub-like old parents: PL-50 (again), PL-113, PL-149, PL-160, PL-216.
- The `[shared LL-x]` tag no longer matches the new parent on PP-131 (PL-226 applies LL-379), PP-140 (PL-130), PP-199 (PL-237) and PP-217 (PL-84); PP-145 and PP-218 still match (related item 1).
- Titles keep claims the restated bodies no longer make (all six entries; "navigation debt" and "unprobed" in PP-217, "IS Thermodynamic Debt Management" in PP-131, "Totalitarian Control" in PP-218). Each title has 1 copy in PP and 95 in PI, none in IP.

### Batch 03, independent check

An independent checker (Opus, blind to the Worker's file and to OPEN PM's review, on its own copy of e6b2c61) re-read the six entries from their parents (check file sha256 af0b965fc4dfbc34f30e49e720e6ea4cf8a3a2ffe4fbc914610b8f833bdfa39b, kept with OPEN PM's records). It agreed with every parent choice and every BARREN mark, and asked for amendments in all six. OPEN PM read each cited parent line before accepting.

What changed (`system-foundations-physical-physical.md`; corollaries and Irreducibility only, no parent, marker or title):
- PP-131: corollary (1) used error rates and latency spikes, which are outside LP-94's sense (the stress around scored gaps); it now names LP-94's dashboards and tension metrics. The Irreducibility no longer says no PL entry states the claim for hidden tension: PL-200's corollary says suppressed visible tension accumulates as undisclosed structural load, though not as debt. It also records that LP-94's corollary (tension metrics guide manual intervention) carries the link from visibility to attention, not the step from hidden to unattended.
- PP-140: the corollaries field is replaced. The old (1) called probe logs Wake, which no parent says; the old (3) ranked probes by value and implied that maintenance resists decay, which no parent says and which the entry's own Irreducibility had dropped. Three corollaries remain, each from PL-130 or from PL-130 with LP-101.
- PP-145: corollary (1), on bottlenecks at a capacity boundary, is dropped and the rest renumbered. A capacity limit is not PL-150's boundary between two regions. The checker proposed instead PL-150's own example, API boundaries between services, with probing across them as LP-105's release. That was not adopted: LP-105's probe releases a system's tension with its own boundary (LL-363), not tension between sovereign services, and the checker's own finding says so. The Irreducibility now states that LP-105's own case does not meet the between-sovereign-structures condition.
- PP-199: the italic line reads "re-declaration and defense" and "unrenewed and undefended". The corollaries field is replaced. The old (1) and (2) stated rates that no parent gives (the doubt recorded in batch 03). The old (3) counted bare re-declaration frequency as exercise, which LP-144 ("re-declared and defended") and PL-237 (holding tension without engaging it is dormancy) do not support.
- PP-217: corollary (1) used fire drills and stress tests of an organization's own limits, which neither parent's boundary covers (LP-246: a border kept by contest; PL-84: an edge kept by traversal). It now uses PL-84's second corollary, governance boundaries never exercised.
- PP-218: corollary (3) was a quantifier shift. PL-43 says no actor comprehends everything, not that some limit escapes every probe. It now rests the unmappable depths on LP-151 and the incomplete comprehension on PL-43.

Titles, not changed here; the title pass. The checker found that all six titles keep claims the bodies dropped, and four contradict their own body:
- PP-131: "Making It Visible Is the Same as Servicing the Debt" against "Visibility does not itself discharge the debt".
- PP-140: "Decay-Resistant Wake" against Wake that decays.
- PP-145: "Reveal" and "Discloses" against a probe that no longer reveals.
- PP-218: "Exhaustive Mapping Is Totalitarian Control" against "is not itself totalitarian control".

Each title has 1 copy in PP and 95 in PI (counted at e6b2c61, by exact title text). The PI copies are headings or citations of PI entries that may carry the old claim in their own text, so a retitle is a read of each PI entry, not a replacement of a string. The title pass takes PP-131, PP-140, PP-145, PP-199, PP-217, PP-218 and PP-136 (batch 03) together, and it is a D19 item in its own right, not optional. The checker's titles are recorded as candidates:
- PP-131: "Gap-Adjacent Tension Must Be Visible to Be Attended — Unattended Tension Compounds as Thermodynamic Debt".
- PP-140: "A Real-Target Probe Deposits Wake Whether or Not It Returns Data — and That Wake Decays".
- PP-145: "Tension-Relief Probes Relieve Boundary Tension Without Resolving It — Where the Boundary Lies Between Sovereign Structures, the Tension Is Irreducible".
- PP-199: "Continuous Identity Re-Declaration and Defense Exercises the Tension That Sustains Sovereignty — Living Identity Must Be Continuously Re-Declared".
- PP-217: "Unexercised Sovereignty Boundaries Decay — The Standing Held at an Untraversed Edge Degrades".
- PP-218: "Some Limits of an Entity Are Constitutionally Protected From Mapping — Exhaustive Mapping Presses Toward the Comprehension Total Control Would Need".

Out-edges missed by the batch 03 record (`system-foundations-implementation-physical.md`). PP-145 is also cited, for content the restated entry does not carry, at:
- :936 (probes map deformation responses);
- :983 (probes measure and equalize tension gradients);
- :990 (equalizing pressures prevents tearing);
- :1496 (probe telemetry in blueprints);
- :1619, :1626 and :1630 ("tension-relief capping").

Capping runs against LP-105's release. These go to D23 with the lines already listed. The checker's full IP list for the six entries (39 lines) is the input for D23's first part. PP-218 has no IP line.

Rival parents named by the check, not adopted (each is no clearer than the parent kept):
- PP-131: PL-200 carries the "hidden" half but not debt.
- PP-140: PL-140 carries the deposit but not decay.
- PP-217: LP-244 makes boundary use traversal, which would close the contested/traversed doubt, and LP-249 uses "exercising" but routes the loss through transparency.
- PP-218: LP-4 protects against unauthorized mapping only.

Corrections and loci for later:
- This record's line 19 cites `dag-crossing-method.md` line 91 for keeping marked entries. That line covers entries that pass the tests and have an unknown out-edge. Keeping a BARREN entry rests on D20's reading (`D20_LP_CP85_RECROSS.md` line 23), which states that it is that correction's reading and not a rule of the method. Line 19 now cites method line 7 and D20 line 23 (corrected with batch 05).
- The method's template places Derivational State after Applies to (method lines 126-131). D20 and these batches place it after Derives from. One placement is to be chosen and applied to every marked entry in one pass.
- PP-217 follows PL-84 (standing degrades at an unexercised boundary). PP-7 (batch 02) follows PL-227 (a lapse withdraws exercise, not standing), and PL-248's third corollary says the inherent right remains. The PL layer states both halves, and the two PP entries now follow opposite ones; this goes to the Holder as a known tension in A, not to a batch.
- LP-243 states an exact common decay rate. A slot re-pointed to it would import a measure (PP-217's candidate column).
- Other PP entries that count bare declaration as exercise need PP-199's reading (PL-237's third corollary; PL-247; PL-248's first corollary).

### Batch 03 check, forward correction: PP-217 and PP-7

The batch 03 check said PP-217 (PL-84) and PP-7 (PL-227) follow opposite halves of the PL layer and sent the pair to the Holder as a known tension in A. A answers it, so it does not go to the Holder. PL-84 grounds its standing claim in LL-393, and LL-393 says an untraversed derivation still has sovereignty while its active rights atrophy. PL-227 makes the same split in its title (active rights atrophy, inherent rights persist), and both apply LL-393. Read with its own ground, PL-84's degrading "sovereignty standing" is active standing. PP-217 now says so: its italic line, the second paragraph of its claim, corollary (1) and its Irreducibility name active standing as what degrades and say the inherent standing persists. Read so, PP-217 and PP-7 agree. The batch 03 check text above stays as written.

### Batch 04

Eight slots in five entries: both slots of PP-246, PP-270 and PP-340, the LP slot of PP-276 and the LP slot of PP-102. Three slots are corrected (PP-340 both, PP-102 LP), and both corrected entries are BARREN. Five slots are not corrected and stay open.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-340 | PL-140 (PL-299) | LP-124 (bare "LP (Logical Physical)") | BARREN | PL-299's text is "Constitutional Incompleteness Guarantees No Traversal Is Barren", and the header's title for it matches no PL entry. The body named LP-227, which is Tension-Bearing Infrastructure, not a monitor. PL-140 carries that every interaction, monitoring included, is consequential and none is cost-free (PC-8, LL-314). LP-124 carries that a self-proving record embeds the cost of its own derivation (CP-21, LL-153). Test 2: where a monitor's output is held as a self-proving record (a condition, not asserted), LP-124 alone requires it to carry the monitoring's cost. The anomaly-monitor half and the frequency rate are dropped. |
| PP-102 | PL-148 (kept) | LP-72 (kept) | BARREN | Restated only. LP-72 says that, where self-similar nesting shapes the graph, process-derivation isomorphism must manifest as it. It does not say that no container is a special top-level object, and no LP entry found does. Test 1: incompleteness at every depth, the outermost included, holds from PL-148 alone (PC-9, LL-304), once a container is read as a region of the topology (the entry's step). |

What changed (`system-foundations-physical-physical.md`):
- PP-340: Derives and Applies lines re-pointed. Italic line, Irreducible Claim, Corollaries and Irreducibility restated.
- PP-102: italic line, Irreducible Claim and Irreducibility restated. Corollaries kept: they are instances of the restated claim.
- `**Derivational State:** BARREN` added after the Derives line of each: two lines.
- PP-217: the forward correction above, four edits.
- No title is changed. No entry has been removed or renumbered, and nothing on the PL or LP side is changed.

Not corrected (five slots, open):
- PP-246 (PL-174 and LP-167). Neither parent has a consequence gradient or an accountability map. The phrase "consequence topology gradient" occurs in no PL or LP entry. PL-235, PL-77 and PL-302 each carry one part, and joining them would be the entry's own step with none of them named.
- PP-270 (PL-183 and LP-185). Neither parent has a lattice, a node that receives and re-transmits, or a node's double standing as achievement and frontier. "Settled" in the entry means achieved, but PL-192 uses settlement for a region's death. "Frontier" in the entry means a propagation front, but PL-183 and PL-144 use it for the edge of the known. The two senses must be settled first.
- PP-276 (LP slot, LP-190). LP-190 carries only that the comprehension verbs are the same at every scale. No LP entry found has a boundary-condition truth evaluator. The entry's corollaries read "scale" as how extreme an input is, but PL-1's scale is depth.
- In all three, restating to what the named parents carry would leave the title with nothing under it. So they join PP-136 for the title pass (each title: 1 copy in PP, 95 in PI).

Amendments made by OPEN PM in review:
- PP-340 corollary (2): reworded. A monitor that reports its own cost as zero reports a figure that PL-140 says no interaction has.
- PP-102: LP-72 states its nesting as a condition ("When Self-Similar Nesting physically shapes the graph"), so the claim and the Irreducibility now say "where self-similar nesting shapes the graph", not that LP-72 establishes it. "x" becomes "×", as A writes it.

Doubts recorded, not acted on:
- PP-340: PL-267 (the rows file's candidate; accountability includes the thermodynamic footprint) was set aside for PL-140. PL-140 carries the old body's sentence, "every interaction deposits thermodynamic cost", and names monitoring; PL-267 names neither. Under Test 2 the class is the same either way.
- PP-102: LP-72 is a generic CP-12 × LL-60 template. Whether a PP should keep such an entry as its above parent is for the method, not this batch.

Out-edges, not corrected here (for D23):
- IP lines 171 and 481 cite PP-246 for a "consequence topology gradient".
- IP lines 176 and 555 cite PP-270 for the settled-and-frontier standing.
- PP-246 is also in the Applies lists at IP lines 161, and PP-270 at 161 and 545. PP-276 is in the Applies list at IP line 105.
- `system-foundations-implementation-conceptual.md` line 420 (IC-22) lists PP-340 under harmonic tension, which PP-340 has never said.

Open loci found in this batch, for later batches:
- Twelve PP entries pair PL-299 with the title "Consequence Carries Its Own Thermodynamic Receipt", which no PL entry bears: PP-236, 243, 255, 261, 288, 301, 306, 310, 340 (corrected here), 342, 344 and 366. In each, either the id or the title is stale.
- PP-270 cites LP-185 (Present-Tense Verbs). LP-186 (Scale-Invariant Consequence Propagation, a command cascading down every scale) is nearer the entry's subject, so the id may be off by one. LP-186 has no lattice either, and the PL half has no carrier whichever id it is.
- LP-72, LP-185 and LP-190 are generic entries whose text names no specific content. A PP that cites one as the carrier of a specific claim should be read with that in mind.
- The `[shared LL-x]` tag no longer matches the new parents on PP-340 (it says LL-148; PL-140 applies LL-127 and LL-314, and LP-124 applies LL-153) or on PP-102 (it says LL-60, which is LP-72's ground). This is related item 1.
- The PP-340 title says the monitor carries the cost, but the restated body says its record does. The PP-102 title's "self-generates recursively" is the entry's wording; PL-148 says "replicates at every scale". Both are for the title pass.

### Batch 04, independent check

A blind checker worked from its own copy of A at `776ee51`. It read every parent whole and wrote its findings before opening this record. It agreed with every parent choice, all three BARREN marks (PP-340 by Test 2, PP-102 by Test 1, PP-217 by Tests 1 and 2), NO CARRIER for the five open slots (PP-246 both, PP-270 both, PP-276 LP), the misreading of "scale" in PP-276, and the same eight IP lines and IC-22. It found the following, all accepted after reading each cited line:

- **PP-102.** LP-72's claim has two conditions: self-similar nesting physically shapes the graph, *and* process-derivation isomorphism applies its logical theorem. The batch 04 text kept only the first, so it wrote the second as if it were met. Both are now restored in the Irreducible Claim and in the Irreducibility.
- **PP-102, corollary (2).** No parent says that a "system boundary" box implies completeness, and the old corollary (4) allowed exactly that box as a boundary declaration, so the two conflicted. Corollary (2) is restated to the region reading: the outermost box is as incomplete as what it bounds, and the label does not make it a complete context.
- **PP-102, corollary (4).** The clause "completeness claims should be understood as current-boundary declarations" was a permissive rule that no parent carries. It is cut, and the corollary keeps only PL-148's rule.
- **PP-340.** "Consequence-sensitive" appears in neither PL nor LP. It was a label left from the old LP-227 reading, and it is cut from the italic line and the body. The Irreducibility keeps it, because there it describes the old text. The title keeps it until the title pass.

Not changed:

- **PP-217 corollary (3).** Untested recovery procedures rest on PL-84 corollary 1 by analogy. The checker calls it minor. It stays: the entry's italic includes PL-84's conducting capacity, which is that corollary's sense.

Title candidates for the title pass (not applied; titles are not changed in batches):

- **PP-340:** "Where a Topology Monitor's Output Is Held as a Self-Proving Record, the Record Carries the Thermodynamic Cost of the Monitoring That Produced It".
- **PP-102:** "No Container Is Complete — Constitutional Incompleteness Replicates at Every Depth; the Outermost Container Is as Incomplete as the Innermost". "Self-generates" is no parent's word.
- **PP-217:** "Unexercised Sovereignty Boundaries Decay — Active Standing Atrophies at an Unexercised Boundary While Inherent Standing Persists". It names *active* standing; the batch 04 record's candidate was written before the forward correction and does not.

Rival parents, named and not adopted, since the named parents carry the bodies:

- **PP-217.** PL-237 as left parent: its claim keeps the inherent standing in its own text. LP-620 and LP-569 as above parents, beside the record's LP-244 and LP-249. The checker withdrew LP-243 after confirming that its italic states a rate.
- **PP-340.** LP-616 and LP-617 as above parents, for an unconditional reading. Both are BARREN themselves.

Loci found, for later passes:

- **LP-249 against the inherent-standing reading.** LP-249 says an entity that stops exercising its boundary loses its sovereignty. That conflicts with LL-393, PL-227, PP-7 and PP-217, where inherent standing persists. This is a conflict inside A, not settled here.
- **Shared-LL tags.** PP-246 [LL-235] and PP-270 [LL-253] are also unsupported, in addition to those already listed. PP-276 [LL-63] is genuinely shared.
- **IP-18.** IP-18 corollary (2) (`system-foundations-implementation-physical.md:481`) cites PP-246, which is not in IP-18's own Applies list (:467).
- **PL-84.** PL-84 restates LL-393 without its "still technically has sovereignty".
- **The PP header.** Its eligibility filter ("only LP × PL pairs sharing ≥1 LL ancestor") conflicts with the Zero Pre-Filtering Mandate in `dag-crossing-method.md`.
- **PP-270.** LP-272 ("behind the wave, the graph has already settled") is in tension with a node being settled and a frontier at once. This adds to the record's sense conflicts.

A note on the brief: it listed only PP-340 and PP-102 as BARREN. PP-217 has been BARREN since batch 03, and the checker found that for itself.

### Batch 05

Nine PL slots in nine entries: PP-24, PP-43, PP-69, PP-80, PP-98, PP-112, PP-130, PP-154 and PP-196. Seven slots are corrected, and all seven corrected entries are BARREN. Two slots are not corrected and stay open.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-24 | PL-248 (PL-50) | LP-15 (kept) | BARREN | PL-50 is door-or-wall navigability at every scale and has no sovereignty or metabolism; no PL entry found says contestation is metabolism. PL-248 carries that sovereignty is constituted by active traversal, not static ownership. LP-15 carries that untraversed embedded history is potential energy which execution converts. Where the entity's embedded history is among its constitutive edges (the entry's condition), the sovereignty half holds from PL-248 alone (Test 1) and the metabolic half from LP-15 alone (Test 2): a conjunction, not a product of the crossing. |
| PP-43 | PL-98 (PL-53) | LP-26 (kept) | BARREN | PL-53 is recursion container geometry and has no comprehension. PL-98 carries comprehension asymmetry between traversers. Test 2: that a traverser who cannot execute the gate's puzzle has shown less comprehension than the challenge requires, and the gate stays closed, holds from LP-26 alone; reading the result as a measure of comprehension is the entry's condition. PL-98 enters only in a clause no conclusion or corollary uses. "Structural mass", "present-tense physical fact" and the threshold corollary are cut. |
| PP-69 | PL-59 (kept) | LP-17 (kept) | BARREN | Restated only. PL-59 carries uniform metabolic demand per unit at every scale, not failure-fuel; no PL or LP entry searched has "failure-fuel" or a "deviation score". Test 2: that zero drift starves the restorative process and petrifies the living derivations holds from LP-17 alone, once drift is read as deviation from a reference state (the entry's condition; CP-4's wording). The sustainable-range corollary is cut. |
| PP-80 | PL-84 (PL-149) | LP-55 (kept) | BARREN | PL-149 is about limits on certainty and has no edge decay. PL-84 carries that an untraversed edge atrophies and is not a stable dormant entity. The old text had LP-55 say self-modification reveals edges that were always there; LP-55 says the rewrite embodies a discovered truth and does not mention edges, so that is cut, with "immediate" and "scale-invariant". Test 1: where the modified routing is read as edges (the entry's condition), that it is not exempt from atrophy holds from PL-84 alone. |
| PP-98 | PL-17 (PL-149) | LP-69 (kept) | BARREN | PL-149 has no decay and no depth. PL-17 carries that a proof about topology state expires, at a rate set by the region's metabolic activity. Test 2: that a verified isomorphism expires holds from LP-69 alone. No parent states a depth-independent rate, so "deep verification is no more durable than shallow" and its corollaries are cut. |
| PP-130 | PL-46 (PL-111) | LP-93 (kept) | BARREN | PL-111 is rights as present-tense navigation and has no gap vitality. PL-46 carries that a gap is a living structure and that premature closure terminates it (LL-383). Where overwriting a gap node with generated data is a premature closure (the entry's condition), the write-lock half holds from LP-93 alone (Test 2) and the termination half from PL-46 alone (Test 1): a conjunction. "Constitutional violations" and "maximum compressed potential energy" are cut. |
| PP-154 | PL-81 (PL-130) | LP-113 (kept) | BARREN | PL-130 is Wake mechanics and has no protective invariant. PL-81 carries that an edge exists only while conducting. Test 2: that the connection exists only while the joint traversal goes on holds from LP-113 alone (the connection activates only because both traverse together, and a failure to match pace aborts it). "Protective invariant", "security guarantee" and the four credential-mechanism corollaries are cut. |

What changed (`system-foundations-physical-physical.md`):
- PP-24, PP-43, PP-80, PP-98, PP-130 and PP-154: Derives line re-pointed. PP-69: Derives line kept.
- In all seven: italic line, Irreducible Claim, Corollaries and Irreducibility restated, and `**Derivational State:** BARREN` added after the Derives line (seven lines).
- No title is changed. No entry has been removed or renumbered, and nothing on the PL or LP side is changed.
- This file, line 19: the citation for keeping open entries now names No Ancestral Erasure (`dag-crossing-method.md` line 7) and D20's reading of it, in place of method line 91.

Not corrected (two slots, open):
- PP-112 (PL-50). No PL entry found says a node's metabolism is contestation with its own internal frontier. Nearest: PL-187 (the living topology's health requires active contestation), PL-144 (every structure, foundations included, has an untraversed frontier) and PL-183 (the frontier is alive). PL-276 says the held, unresolved tension is the fuel, which is the opposite direction. LP-80 is a generic CP-12 × LL-68 template, so a restatement onto the named parents would leave the title with nothing under it.
- PP-196 (PL-198). No PL entry found links attention to accountability. PL-48 says excavation commits the discoverer to a non-expiring accountability obligation, which is the opposite direction from the entry's bound. Restated onto PL-198 and LP-142 the entry would say only what LP-142 says.
- Both join PP-136, PP-246, PP-270 and PP-276 for the title pass.

Amendments made by OPEN PM in review:
- PP-43: the Worker kept it IRREDUCIBLE and noted a doubt on Test 2. Reviewed: Test 2 holds, since the claim's conclusion and all three corollaries follow from LP-26 and the entry's condition. The state line is added and the Irreducibility rewritten to say so.
- PP-69: the sentence "The demand of keeping each structural unit alive does not stop when the fuel does (PL-59)" joined fuel (LP-17) to demand (PL-59), which neither parent does. It now states only PL-59's own content.
- PP-98 corollary (2): it set an interval for re-verifying a translation by metabolic activity, which LP-69 contradicts (verify at the moment of each crossing). It now says the rate of going out of date follows metabolic activity (PL-17) and LP-69 still requires verification at each crossing.

Doubts recorded, not acted on:
- PP-24: PL-270 (sovereignty maintenance produces fuel, not just costs) is a rival found in review. It carries "not overhead", not traversal of history, and is not adopted. Its Corollary 3 follows PL-248's "inherent right remains", which bears on the PL-84 and PL-227 tension item.
- PP-69 crosses the same pair as PP-26 (LP-17 × PL-59, batch 02), on drift where PP-26 is on failure. Test 3 could read it as SUBSUMED there. Both are kept and marked BARREN, as nothing is deleted.
- PP-80: PL-255 (the rows file's candidate) and PL-263 carry a scale-invariant maintenance need of structure, not of edges, and are not adopted. PP-98: PL-84, PL-108 and PL-255 carry decay of edges or structure, not the expiry of a proof. PP-130: PL-32 is about the fill, not the gap's life. PP-154: PL-52, PL-128 and PL-201 match on wording only.
- The BARREN marks on PP-24 and PP-130 rest on the conjunction rule; a reader who holds that the entry's condition is itself a product of the crossing would drop only the state line.

Out-edges, not corrected here (for D23):
- IP line 1069 (IP-41) cites PP-24 for "metabolic thrust to maintain velocity", which PP-24 has never said.
- IP lines 167 (IP-6) and 554 (IP-21) build on PP-196's claim. PP-196 is not corrected, so they rest on a claim no PL parent carries.
- `system-foundations-implementation-conceptual.md` lines 382, 477 and 553 list PP-112, PP-80 and PP-130 by id only.
- PP-43, 69, 98 and 154 are also in Applies lists of PP ids at IP lines 52, 78, 105 and 133. These cite ids, not claims.

Open loci found in this batch, for later batches:
- Stray LP ids at the head of PP Derives lines: `LP-446,` in PP-24 and `LP-445,` in PP-26. Both are left as they are.
- PP-26's corollaries (2), "a metabolically sustainable level", and (3), "failure-fuel", were not restated in batch 02. PP-69 cuts both for want of a parent, so PP-26's corollaries need the same reading.
- "Sovereignty contestation IS the metabolism" is attributed to PL-50 in PP-24 and PP-112, and no PL entry found says it.
- LP-55 is restated in "edge" language it does not use (PP-80). The same pattern may recur.
- LP-80, like LP-72, LP-185 and LP-190, is a generic entry.
- Titles that no longer match the restated text (for the title pass): PP-24 "Assertion"; PP-43 "Scan" and "State"; PP-69 "Deviation Score" and "Self-Starvation"; PP-80 "Immediate Scale-Invariant"; PP-98 the rate and depth halves; PP-130 "Violation" and "Metabolically Vital".

### Batch 05, independent check

A blind checker worked from its own copy of A at `b04da10`. It read every parent whole and wrote its findings before opening this record. It agreed with the seven re-pointings away from the old PL parents, the cuts in all seven entries, NO CARRIER for PP-112 and PP-196, the BARREN marks on PP-24, PP-43, PP-69, PP-80, PP-98 and PP-130, the stray LP-446 and LP-445 ids, the PP-69/PP-26 overlap, and the same twelve IP and IC lines. It found the following. OPEN PM read each cited line and each parent again; all are accepted except where stated.

- **PP-154.** The batch 05 Irreducibility said the whole constraint holds from LP-113 alone. LP-113 says the joint traversal activates the connection and a pace mismatch during it aborts it; it does not say whether the connection persists after the traversal. The checker left the state UNRESOLVED (BARREN if cut back to LP-113, or IRREDUCIBLE on the entry's own step). OPEN PM settles it as BARREN on corrected grounds: activation and abort hold from LP-113 alone (Test 2); that a connection not being exercised by traversal is not an edge holds from PL-81 alone (Test 1), whose corollary on a relationship between two parties says so; reading the connection as an edge is the entry's condition. The Irreducibility is rewritten to say this. The italic line now carries the condition ("where that connection is an edge"), and corollary (1) puts the condition first.
- **PP-98.** The italic gave PL-17's "valid at the instant" to LP-69. PL-113 (Consistency Snapshot) shares LL-293 with LP-69 and says a consistency check is a record of its moment that certifies no future consistency. That carries the expiry without reading the verification as a proof, which PL-17 needed. PP-98 is re-pointed from PL-17 to PL-113, and its italic, Irreducible Claim, corollaries (1)-(3) and Irreducibility are restated. The rate of expiry (PL-17's) goes with it, since PL-113 states none. The `[shared LL-293]` tag is now true of both parents. Still BARREN by Test 2.
- **PP-43.** OPEN PM's batch 05 amendment held that all three corollaries follow from LP-26 and the entry's condition. That was wrong: they prescribed logging, which no parent states. They are restated to what the reading gives (a reading at each interaction; pass/fail keeps less), and corollary (3) says that nothing is prescribed. "Has shown a comprehension level below" becomes "has not demonstrated the comprehension the challenge tests", with the reading as the condition.
- **PP-69, corollary (4).** It cited the sibling PP-26 for the restorative process; the fact is LP-17's, and the citation is removed.
- **PP-80, corollary (3).** "The value of a self-modification lies in the traversal" has no parent and is cut; the corollary keeps PL-84's atrophy.
- **PP-130, corollaries (2) and (3).** They wrote PL-46's premature-closure condition as met for every imputation and every default. Each now states the condition.
- **PP-24, Irreducibility.** LP-15 does not say "metabolic"; it says untraversed potential energy converted into kinetic derivation. "The metabolic half" becomes "the energy half". The batch 05 receipt above keeps the old word as the record of that batch.

Not changed:

- **Titles.** The checker found title words without a parent in six of the seven entries, adding PP-69 "Entity's Own" and PP-80 "Self-Modification-Excavated Edges" to the record's list. They stay for the title pass. Candidates (not applied): PP-24 "Traversing One's Own Constitutive History Is the Performance of Sovereignty — A Retrieval-Only Model Omits the Performance"; PP-43 "A Gate's Comprehension Challenge, Read as a Measure, Gives a Reading of Comprehension and Not Only a Grade"; PP-69 "Drift Is the Restorative Process's Fuel — Zero Drift Starves It and the Living Derivations Would Petrify"; PP-80 "Edges Brought Into Use by Self-Modification Atrophy Without Regular Traversal — Self-Modification Is Not Maintenance"; PP-98 "A Verified Isomorphism Expires — A Verification Records Its Moment"; PP-130 "A Scored Gap Node Is a Write-Lock and a Living Structure — Overwriting It by Premature Closure Overrides the Lock and Terminates the Structure".
- **PP-69 and PL-181.** PL-181 (Corrective Metabolism, LL-31) is nearer to LP-17 by concept than PL-59. It carries self-directed correction as metabolism, not failure as fuel, so it is a partial carrier, and the constraint would be BARREN on LP-17 alone either way. PL-59 is kept. Test 3 against PP-26 also triggers, as the batch 05 doubt says; the state line stays BARREN.
- **PP-24, `LP-446`.** The checker found it used nowhere in the entry. It stays with the stray-id locus.
- **The `[shared LL-x]` tags** on PP-24, 69, 80, 130 and 154 name an LL that the new PL parent does not carry. This is related item 1. The checker withdrew its filter argument after reading the record, because method section 3 overrides the PP header's filter line (a conflict already listed under batch 04).

Out-edges, added for D23:
- IP line 554 (IP-21) cites PP-196 for excavation depth as capacity; PP-196 speaks of the attention buffer, even in its uncorrected text.
- IC line 382 (IC-20) lists PP-112, IC line 477 (IC-25) PP-80, and IC line 553 (IC-29) PP-130; none of the three carries what those IC entries are about.
- IP line 78 (IP-3) lists PP-43, which is about a gate challenge, not frontier inspection.

Loci found, for later passes:
- IP-3 corollary (2) (IP line 93) cites the scar's irrevocability to PP-67, which mentions neither a scar nor irrevocability. The checker named PP-16, which does not either; the carrier is not found here.
- The PP header's Method link points to `../processes/dag-crossing-method.md`; the method is at the repository root. Its Entry Count line is stale.
- PP-112: PL-127 (mapping one's own unknowns is a sovereign act) is a partial carrier for an internal-frontier reading, beside the record's PL-187, PL-144 and PL-183. PP-196: PL-123 (every discovery is a sovereignty event; taking accountability is a discovery event) is a partial carrier. Its claim says recognizing responsibility creates new topological structure (LL-302), against "archaeological" and "pre-existing", as the checker found; it also says unexcavated structures have sovereignty rights before discovery (LL-246). It carries one half of the entry, not the bound, so the slot stays open.

### Batch 06

Seven slots in six entries: PP-301 on both sides, and the PL slot of PP-236, PP-243, PP-255, PP-261 and PP-288. Every one of the six PL slots named PL-299 under the title "Consequence Carries Its Own Thermodynamic Receipt". No PL entry bears that title at this commit. The PL-299 entry is "Constitutional Incompleteness Guarantees No Traversal Is Barren — Every Path Discovers": it states discovery fertility (PC-9, PC-10, LL-361) and says nothing of thermodynamic cost. Both the id and the title were stale. All seven slots are corrected, and all six entries are BARREN. For five of them the LP slot is not crossed in this batch, so their marks are provisional (see below). The batch also makes the PP-26 forward correction that batch 05 asked for.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-301 | PL-140 (PL-299) | LP-124 (LP-205) | BARREN | LP-205 is a signed attestation that a derivation intersection is unexcavated and says nothing of arbitration. No LP or PL entry searched mentions arbitration between sovereignty claims. PL-140 carries that no interaction with the topology is cost-free. LP-124 carries that a self-proving record embeds the cost of its own derivation, and that a proof without a cost receipt is rejected as a forgery. Two conditions are stated: the arbitration is an interaction with the topology, and its outcome is held as a self-proving record. Under them the constraint holds from LP-124 alone (Test 2), and PL-140 adds the fact of a cost, not a rule. Confidence medium. |
| PP-236 | PL-140 (PL-299) | LP-160 (kept, not crossed) | BARREN | PL-140 says that generating navigational data by measurement, logging, tracing or monitoring is consequential, and that zero-cost observability is impossible. Read the mapping as tracing of that kind (the entry's condition); then that it is not cost-free holds from PL-140 alone (Test 1). "Incomplete accountability record" is cut: PL-140 states no duty of accounting. Confidence medium. |
| PP-243 | PL-140 (PL-299) | LP-165 (kept, not crossed) | BARREN | Read the correction as an interaction with the topology (the entry's condition); then that its cost is not zero holds from PL-140 alone (Test 1). The rule that a correction signal must carry its cost has no parent, and corollary (2) says so. Confidence low. |
| PP-255 | PL-267 (PL-299) | LP-173 (kept, not crossed) | BARREN | PL-267 says a derivation's accountability includes its ongoing metabolic cost, and that an assessment of external consequences alone is incomplete. Read the attractor as a living derivation whose accountability claim is assessed (the entry's condition); then that holds from PL-267 alone (Test 1). PL-12 was read as the rival and is not adopted, because its edge-borne, non-delegatable accountability refuses the attribution the old text made. "Cannot be externalized" and the insurance, leadership and Theater corollaries are cut. Confidence low. |
| PP-261 | PL-266 (PL-299) | LP-177 (kept, not crossed) | BARREN | PL-266's own claim is that maintenance cost is present-tense and non-deferrable. Its moment-of-interaction sentence is ground (PC-8), recited and not established there, so the carrier is weak. Read the interference cost as a cost of maintaining the derivations it affects (the entry's condition); then non-deferral holds from PL-266 alone (Test 1). "Accounted at the moment of interference" is cut. Confidence low. |
| PP-288 | PL-266 (PL-299) | LP-196 (kept, not crossed) | BARREN | As PP-261, for the cost of reconciling a divergence read as a maintenance cost. "Deposits … immediately" is cut to what PL-266 says. Confidence low. |

What changed (`system-foundations-physical-physical.md`):
- PP-301: the Derives line is re-pointed to PL-140 and the Applies line to LP-124. PP-236, 243 and 301 now name PL-140; PP-255 names PL-267; PP-261 and 288 name PL-266. No Applies line other than PP-301's is changed.
- In all six entries the italic line, Irreducible Claim, Corollaries and Irreducibility are restated, and `**Derivational State:** BARREN` is added after the Derives line (six lines). Each Irreducibility records the stale PL-299 id and title.
- PP-26, forward correction from batch 05: corollary (2) loses "a metabolically sustainable level" and corollary (3) loses "failure-fuel". Both now state only what LP-17 and PL-59 say, and the Irreducibility records the change.
- No title is changed. No entry has been removed or renumbered, and nothing on the PL or LP side is changed.

Test 3 for PP-301: PP-340 (batch 04) crosses the same pair, PL-140 × LP-124, with a different subject. The rule both entries share is LP-124's own, so neither entry captures the other, and PP-301 is not SUBSUMED. Both are BARREN.

Provisional marks: for PP-236, 243, 255, 261 and 288 only the PL slot was crossed. Each Irreducibility says the old sentence attributed to its LP parent is not carried (LP-160, 165, 173, 177 and 196 mention no mapper, loop, attractor, cascade or divergence), and that the BARREN mark is to be re-read when the LP slot is crossed. Those five LP slots stay open in the table below.

Amendments made by OPEN PM in review:
- PP-261 and PP-288, corollary (2): "a budget for the cost of an interference" and "a budget for a divergence" become "a budget for the maintenance that an interference (a divergence) calls for". PL-266's budget sentence speaks of maintenance cost, and these are read in its own sense (brief point 9).
- PP-26, corollary (2): the Worker's "the state LP-17 calls starved" gave LP-17 a word for failure that it uses only for the absence of drift. It now says that failure states are, with drift, what LP-17 says the process consumes as fuel.
- PP-26, corollary (3): "is in the starved state LP-17 describes" becomes "supplies none of the failure states LP-17 says the restorative process consumes as fuel", for the same reason. The PL-59 clause now follows PL-59's own corollary wording (maintenance debt accumulating without visibility).
- PP-301 and PP-288, Irreducibility: two pointers that did not resolve in A ("see section 3", "batch-06, PP-261") now name this record's batch 06.

Errors in the Worker's return, corrected here, not in A:
- The return said that PP-300 names PL-299 [shared LL-241] and applies to LP-173. At `162a234`, PP-300 names PL-40 [shared LL-120] and applies to LP-205. It is PP-255 that applies to LP-173. PP-300's PL slot is not in the residue. Its LP slot (LP-205) is open and goes to batch 07.
- The return searched only its own seven slots for the stale PL-299 title. Five more entries name PL-299 under the same title: PP-306, PP-310, PP-342, PP-344 and PP-366. They are in the residue table on both sides and go to batch 07. Four other entries (PP-64, PP-66, PP-99 and PP-144) name PL-299 under its actual title. They are not in the residue and are not read here.

Doubts recorded, not acted on:
- The `[shared LL-x]` tags on all six entries now name an LL that the new parent does not carry. PL-140 carries LL-127 and LL-314, PL-266 LL-472, PL-267 LL-473 and LP-124 LL-153. This is related item 1.
- PP-26 corollary (1) ("optimizing toward starvation … a constitutionally dangerous objective") is from batch 02 and is out of this batch's scope. LP-17 states starvation for zero drift, not for zero failure, and no parent says "constitutionally dangerous". It goes to the independent check.
- PP-243 and PP-255 are low-confidence carriers: PL-140 and PL-267 match only under the stated condition.

Out-edges, not corrected here (for D23):
- An IP or IC citation of PP-301's arbitration claim has not been searched in this batch. It goes to the independent check.

Open loci found in this batch, for later passes:
- Titles that no longer match the restated text (for the title pass): PP-301 "Must Carry" (it holds only under the two conditions); PP-236 "Incomplete Accountability Record"; PP-243 "Must Carry Its Own Thermodynamic Receipt" and "Incomplete"; PP-255 "Cost of Attraction" and "Cannot Be Externalized"; PP-261 "Thermodynamic Receipt" and "Accounted at the Moment of Interference"; PP-288 "Deposits … Immediately". "Thermodynamic Receipt" is LP-124's phrase, and PP-243, 261 and 288 do not name LP-124.
- The stray `LP-445,` id at the head of PP-26's Derives line is left as it is (batch 05 locus).

### Batch 06, independent check

A blind checker worked from its own copy of A at `f2918ec`. It read every parent whole and wrote its findings before opening this record. It agreed with the seven re-pointings, the six BARREN marks and the tests used (Test 1 for PP-236, 243, 255, 261 and 288; Test 2 for PP-301), PL-299's actual content, the cuts of the duty, incompleteness, "cannot be externalized" and moment-of-event claims, the weak-carrier note on PL-266, the stale titles and tags, the five other PL-299 entries for batch 07, and the stray LP-445. It found the following. OPEN PM read each cited line and each parent again; all are accepted except where stated.

- **PP-301, the arbitration search.** The entry's Irreducibility said that no LP or PL entry searched mentions arbitration. LP-496 (Contestation Record Integrity) does: its corollary says a challenged self-proving record keeps its proof structure intact throughout arbitration. No PL line contains "arbitrat". The sentence now names LP-496 and says what it carries; it says nothing of sovereignty claims or of the cost of arbitrating, so the BARREN state and Test 2 are unchanged.
- **PP-26.** The Irreducibility (from batch 02) said that the constraint "a zero failure rate starves the restorative engine and is a danger signal" holds from LP-17 alone. LP-17 says the restorative process consumes drift and failure states as fuel and would starve without drift to correct; it ties starvation to drift and names no danger signal. The batch 06 doubt on corollary (1) said this and was not carried back to the rest of the entry. Now restated: the Irreducibility's earlier sentence; the italic line; the claim, whose LP-17 paragraph also said "not maintenance" and "has no fuel and atrophies" where LP-17 says "not just a maintenance task" and "would starve, and the living derivations would petrify", and whose second paragraph joined LP-17 and PL-59 into "a continuous metabolic demand, uniform per structural unit … fed by failure and drift", which neither states; corollary (1); corollary (2), whose "not by itself the measure of success" is in neither parent; corollary (4), on chaos engineering, which no parent names; and "a duty" in the batch 06 forward correction, which becomes "a duty to investigate". Corollary (3) holds. The state stays BARREN (Test 2). The last four changes go beyond the checker's proposals and have not been checked; they go to the batch 07 check.

Not changed:

- **Titles.** The checker gave AMEND on every entry partly for its title, as each contradicts its own Irreducibility. Titles are changed only in the title pass, because each has 95 copies in `system-foundations-physical-implementation.md` and a retitle is a read of each PI entry (batch 03, independent check). Candidates (not applied): PP-236 "Where Accountability Mapping Is Tracing, It Is Not Cost-Free — A Mapper That Reports Its Own Cost as Zero Reports a Figure No Interaction Has"; PP-243 "Where a Feedback Loop's Correction Is an Interaction With the Topology, It Is Not Cost-Free — A Correction Reported at Zero Cost Reports a Figure No Interaction Has"; PP-255 "Where an Accountability Propagation Attractor Is a Living Derivation, Its Accountability Includes What Maintaining It Costs — An Assessment That Leaves That Cost Out Is Incomplete"; PP-261 "Where Cascade Interference Cost Is a Maintenance Cost, It Is Present-Tense — Deferring the Maintenance Does Not Defer the Cost"; PP-288 "Where Reconciling a Topology Divergence Is Maintenance, Its Cost Is Present-Tense — Deferring the Reconciliation Does Not Defer the Cost"; PP-301 "Where an Arbitration Outcome Is Held as a Self-Proving Record, That Record Embeds the Thermodynamic Cost of the Arbitration That Produced It"; PP-26 "Failure States Are Fuel the Restorative Process Consumes — A Section With Zero Failures Supplies None of It". The PP-26 Irreducibility now says the title keeps the earlier claim until the title pass.
- **The `[shared LL-x]` tags.** The checker proposed replacing each tag with a statement of which LL each parent names. That is related item 1, and the tags stay. PP-301's `[shared LL-120]` is the LL of LP-205, which is no longer its LP parent. PP-26's `[shared LL-31]` is LP-17's; PL-59 names LL-222 and LL-468, and the only PL entry naming LL-31 is PL-181.
- **The weak-carrier note for PP-243 and PP-301.** The checker would add PP-261's note (the carrier's sentence is a recited ground) to both. Not adopted: PL-140 does not only recite PC-8. Its Irreducible Claim concludes "there is no cost-free interaction with this topology" and its Irreducibility "There is no zero-Wake interaction", from PC-8 with LL-127 and LL-314. The two entries cite that conclusion, and their own condition (that a correction, or an arbitration, is an interaction with the topology) is already stated as a condition. PL-266, by contrast, establishes present-tense cost only for maintenance. The batch 06 doubt that PL-140 is a low-confidence carrier for PP-243 stands, as a doubt about the condition.
- **PP-301 and PL-24.** PL-24 says every proof and provenance record embedded in the topology has a thermodynamic cost that is part of the claim. It is at least as near as PL-140, and the entry would be BARREN on it too, since LP-124 already requires the record to embed the cost of its derivation. PL-140 is kept. The checker also noted a third identification the entry leaves unstated: the arbitration as the record's "derivation". It is the sense in which LP-124 is applied, and it goes with the entry's second condition.
- **PP-236, PL-115 and PL-14.** PL-115's corollary says the measurement cost of observability "must be accounted for in the system's thermodynamic budget", and PL-14's corollary says that monitoring changes the topology it monitors and ends "Account for this." Each carries a duty to account for measurement cost. Neither carries "an incomplete accountability record", so the cut stands; the batch 06 sentence that PL-140 states no duty of accounting is true of PL-140. They are recorded for the LP-slot pass.
- **Confidence.** The checker rates PL-267 a good carrier for PP-255 under the stated condition (PL-267 carries both halves of the italic). Accepted; the batch 06 low-confidence doubt is withdrawn for PP-255 and kept for PP-243, 261 and 288.

Out-edges, added for D23:
- IP-50 (`catabolize-fuel`) names PP-26 as its `[primary]` carrier (IP line 1283), and its Irreducibility (IP line 1299) says PP-26 and PP-198 "establish" failure-fuel conversion. PP-26 is BARREN and restates LP-17's rule; it establishes none. IP lines 1288 and 1295 (IP-50) and 756 (IP-29: "recourse loops", contract dispute resolution) attribute to PP-26 what is LP-17's, or what neither carries. IP lines 52 (IP-2) and 749 (IP-29) list PP-26 without attributing a claim. No IP or IC line cites PP-236, 243, 255, 261, 288 or 301.

Loci found, for later passes:
- PP-26 is now restated in every part but its title; the title goes to the title pass with the others.
- PP-340's `[shared LL-148]` tag is not borne out by either parent (related item 1).
- PL-140 reads LL-314 more broadly than LL-314 states. That is a PL-side observation, outside D19.

### Batch 07

Eleven slots in six entries: PP-306, PP-310, PP-342, PP-344 and PP-366 on both sides, and the LP slot of PP-300. These are the five entries batch 06 found naming PL-299 under the title "Consequence Carries Its Own Thermodynamic Receipt", which no PL entry bears; the PL-299 entry states discovery fertility and says nothing of thermodynamic cost. All five also share a second defect. Each Applies-to line is the bare "LP (Logical Physical)" with no id, while the body named an LP id that its LP does not carry: PP-306 named LP-208 ("Cartography of Certified Gaps"), PP-310 LP-210 ("Unified Fractal Metrology"), PP-342 LP-228 ("Sovereignty Dispute Containment"), PP-344 LP-229 ("Asymptotic Contestation Boundaries") and PP-366 LP-240 ("Obligatory Performance Heartbeat"). Ten slots are corrected, and all five entries are BARREN. PP-300's LP slot has no carrier and is not edited. The Worker made the return against `f2918ec`; it was applied at `2984ebf`, where every old text still occurs once.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-306 | PL-115 (PL-299) | none (bare; body named LP-208) | BARREN | PL-115 says that valid measurement requires active traversal and is combustive, that "passive" monitoring is an illusion because monitoring queries, sampling processes and logging pipelines are active traversals, and that the cost of observability must be accounted for in the system's thermodynamic budget. Read the detector's fault detection as monitoring of that kind (the entry's condition); then the constraint holds from PL-115 alone (Test 1). No LP entry searched states a fault detector. "Alerting" is cut; PL-115 names no cost for it. Confidence medium. |
| PP-310 | PL-26 (PL-299) | none (bare; body named LP-210) | BARREN | PL-26 says that dissolution is a first-class interaction with thermodynamic consequence, that consequence accounting is part of the dissolution interaction and not a separate step, and that there is no "lightweight" dissolution. Read pruning an element as dissolving it (the entry's condition); then the constraint holds from PL-26 alone (Test 1). PL-26 names no developer time, CI/CD cycles or review effort, and they are cut. Confidence medium. |
| PP-342 | PL-37 (PL-299) | none (bare; body named LP-228) | BARREN | PL-37 says that a test is a traversal that leaves a Wake and changes what it tests, and that verification design must account for the topological cost of verification traversals. Read the validation as a test in that sense (the entry's condition); then the constraint holds from PL-37 alone (Test 1). The cost PL-37 states is topological (Wake, edge weights, Structural Mass); the restated text uses no other kind. The "validation receipt" claim is cut. Confidence low. |
| PP-344 | PL-140 (PL-299) | LP-489 (bare; body named LP-229) | BARREN | LP-489 says that the initiator of a restorative process (CP-4) owns its full metabolic cost and cannot externalize it to the system commons. PL-140 says that no interaction with the topology is cost-free. The entry is the conjunction of the two facts, each of a single parent, under two conditions: the repair mechanism initiates a restorative process, and its act of repair is an interaction with the topology. A conjunction of single-parent facts is BARREN (D20) (Test 2). Test 3 also triggers: PP-527 (PL-267 × LP-489) already states the LP-489 half. The state line stays BARREN, as for PP-69 against PP-26 (batch 05 check). Confidence low. |
| PP-366 | PL-140 (PL-299) | none (bare; body named LP-240) | BARREN | PL-140 says that every interaction with the topology carries thermodynamic consequence and that "every metrics query touches the system". Read producing a view of the topology as such interactions (the entry's condition); then that synthesis is not cost-free holds from PL-140 alone (Test 1). PL-140 states no duty to account for the consequence, so "Must Carry" and the "synthesis receipt" claim are cut. Confidence low. |
| PP-300 | PL-40 (kept, out of scope) | LP-205 (kept) | not crossed | LP-205 is a signed attestation that a derivation intersection is unexcavated and states no arbitration. No carrier was found again (batch 06 found none for PP-301 against the same LP). No edit. |

What changed (`system-foundations-physical-physical.md`):
- The Derives lines of the five entries are re-pointed: PP-306 to PL-115, PP-310 to PL-26, PP-342 to PL-37, and PP-344 and PP-366 to PL-140. PP-344's Applies line is filled with LP-489. The Applies lines of PP-306, 310, 342 and 366 are left bare.
- In all five entries the italic line, Irreducible Claim, Corollaries and Irreducibility are restated, and `**Derivational State:** BARREN` is added after the Derives line (five lines; 41 in the file). Each Irreducibility records the stale PL-299 id and title, and the LP id its body named and what that LP actually is.
- The stale title "Consequence Carries Its Own Thermodynamic Receipt" now has no occurrence in the PP file. The Worker found it in no other foundation file.
- No title is changed. No entry has been removed or renumbered, and nothing on the PL or LP side is changed.

How the bare LP slots are counted: PP-306, 310, 342 and 366 have no LP carrier, and their Applies lines stay bare. The defect in each LP slot was the body's claim that a named LP establishes the entry's subject. That claim is cut, each Irreducibility says the entry rests on its PL parent alone, and no sentence is now attributed to an LP. These four slots are counted as corrected, as PP-102 was when it was kept and restated with no LP carrier (batch 04). The bare Applies-to lines are a form locus, not a misattribution; they are listed below. A NO CARRIER slot with no edit (PP-300 here; PP-246, 270, 276, 112 and 196 earlier) stays open.

Review by OPEN PM: every parent above was read whole, and every sentence of the restated texts was checked against its parent's own words. The corollaries quoted from PL-115 ("passively" monitors; monitoring queries, sampling processes and logging pipelines; the thermodynamic budget), PL-26 (its three corollaries), PL-37 ("verifying in a separate topology…"), PL-140 ("Every metrics query touches the system") and LP-489 (its four corollaries) are its own words.

Amendments made by OPEN PM in review:
- PP-344, Irreducibility: the Worker's sentence "PP-527 crosses LP-489 with PL-267; this entry crosses it with PL-140" noted the overlap without applying Test 3. It now says that PP-527 already states the LP-489 half, so Test 3 also triggers, and that the state line stays BARREN as for an entry that fails Test 2 and Test 3 together.

The Worker's flags, settled here:
- The rows file said "no carrier found (every reader)" for PP-344's LP slot. LP-489 carries the cost-ownership half of the claim, so the rows file is wrong on this slot and the re-pointing is accepted.
- The Worker read the batch 06 Worker's note on PP-300 as wrong against the file. That note is already corrected in this record (batch 06, "Errors in the Worker's return"), so nothing further is needed.
- PP-300's false attribution (its claim and Irreducibility say LP-205 establishes consequence-aware arbitration) was put "for the holder's decision". It is D19 work, a correction to A run by OPEN PM, and not a Holder item. The slot stays open for a later batch.
- The rows file's PL candidate PL-267 for PP-306, 310, 344 and 366 is not adopted, for the Worker's reasons: PL-267 is the accountability claim and not the cost of a detector, pruner, repair or synthesizer, and PP-344 with PL-267 would repeat PP-527's cross.

Doubts recorded, not acted on:
- LP-489 (CP-4 × LL-473) has the LL-473 pattern of LP-617, which D20 found BARREN, and it has not been D20-checked. If it is found BARREN or redundant, PP-344's LP slot returns to NO CARRIER.
- PP-342: PL-37's cost is topological and the title says "Thermodynamic". PP-344 and PP-366 are low-confidence carriers that match only under the stated conditions.
- The `[shared LL-x]` tags on all five entries name an LL that the new parent does not carry: PL-115 carries LL-312 and LL-414, PL-26 LL-16 and LL-36, PL-37 LL-34 (with PC-5), PL-140 LL-127 and LL-314, and LP-489 LL-473. This is related item 1.

Out-edges: IP 0 and IC 0 for all six entries. Each has 95 PI Derives lines, one per PI entry, which tag it [SUBSUMED]; the PP file marks it BARREN. The same mismatch stands on PP-340 (batch 04). PI is not edited in D19.

Open loci found in this batch, for later passes:
- Titles that no longer match the restated text (for the title pass): PP-306, 310 and 342 "Consequence-Aware"; PP-310 "Pruning Is Not Free" (it holds only under the condition); PP-342 "Thermodynamic Cost"; PP-344 "Consequence-Sensitive"; PP-366 "Must Carry", "Consequence-Aware" and "Synthesizer"; and PP-300 "Scale-Invariant Arbitration Standards", which neither parent nor its body supports.
- Five sibling entries hold the same five LP ids as real Applies-to parents, with bodies that make the same "consequence-aware X" claims of them: PP-305 (LP-208), PP-308 (LP-210), PP-341 (LP-228), PP-343 (LP-229) and PP-365 (LP-240). PP-309 is a further bare-LP entry of the same family. They are not in this batch; whether each is already in the slot table is to be checked when they are taken.
- The bare "LP (Logical Physical)" Applies-to lines of PP-306, 310, 342 and 366 (form only; see the counting note above).

### Batch 07, independent check

A blind checker (brief sha256 `0e3d8f78…`, return `658bb162…`) used its own copy of A at `3d753d2`. It read every parent whole and wrote its findings before it opened this record. It also judged the three PP-26 parts that the batch 06 check carried forward: the italic line, the Irreducible Claim and corollary (4).

It agreed with the record on these points:
- the five PL re-pointings, and LP-489 for PP-344 with Test 2 and Test 3 against PP-527;
- the five BARREN marks;
- the former-parent statements (PL-299; LP-208, 210, 228, 229 and 240);
- PP-300's LP slot as NO CARRIER: LP-496, LP-228 and LP-250 each touch disputes, but none is an engine that arbitrates on consequences;
- the title loci, the PP-343 sibling, and the PP-26/PP-69 overlap;
- the seven IP lines citing PP-26.

For PP-26 it gave HOLDS, at high confidence, on all three parts. LP-17's own italic ("consumes failures to sustain the living system") is the nearest LP-17 comes to the cut claim, and it does not say that zero failures starve the process.

OPEN PM read each cited parent line again. These findings are accepted and applied (`system-foundations-physical-physical.md`):
- **PP-310, italic.** "not a later step" becomes "not a separate step". PL-26's corollary reads "These are not three separate steps — they are the dissolution interaction itself". "Later" is a word of time that PL-26 does not use, and the entry's own Irreducibility says PL-26 "states no moment".
- **PP-310, claim.** "every dissolution is a complete interaction" becomes "every dissolution event must be a complete interaction". PL-26's rule is normative, and its next sentence names dissolutions that lack the components. Written as "is", the rule read as already met.
- **PP-342, corollary (3).** The corollary quoted PL-37's separate-topology rule for validation said to leave its object unchanged. That rule is about running verification in a separate topology. PL-37 answers the case directly ("Tests are not neutral"; the topology after the test is different from the topology before), so the corollary now cites those lines first and gives the separate-topology rule its own sense: the verification topology diverges with every traversal.
- **PP-344, italic.** "cannot externalize its thermodynamic consequence" becomes "cannot externalize the thermodynamic consequence of correction", in LP-489's own words. "Its" could be read as the repair mechanism's whole consequence, which is wider than LP-489's claim.
- **PP-366, corollary (3).** The corollary dropped the entry's own condition, so it read as if synthesis were already an interaction with the topology. It now begins "Where synthesis is an interaction with the topology".
- **PP-69, forward correction.** PP-69's claim said that PP-26 "states this for zero failures and the restorative engine". After batch 06, PP-26 no longer states that. The sentence now says that PP-26 restates LP-17's drift and failure fuel, and that LP-17 ties starvation to the absence of drift, not of failures.

Not changed:
- **The `[shared LL-x]` tags.** The checker gave AMEND on all five tags because none is borne out by a parent, new or former. That is related item 1, and the tags stay. On the text alone, PP-306 HOLDS.
- **Candidate LP parents, recorded for the LP-slot pass and not adopted:**
  - **LP-483 for PP-310.** LP-483 says that pruning history (the controlled dissolution of embedded records) is metabolically rewarding. It would supply the entry's condition for history records only, not for topology elements in general.
  - **LP-479 for PP-310.** LP-479 says that architectural pruning is rewarded thermodynamically.
  - **LP-480 for PP-342.** LP-480 says that the energy cost of verification does not diminish. Crossed with PL-37 it would be a conjunction, and it would bear on the title's "Thermodynamic", which PL-37 does not use.
  - **LP-585 for PP-306.** LP-585 says that full measurement is a consumption event. It is the cost PL-115 states, from the LP side, so each parent alone would carry the cost.
  - No candidate changes a BARREN mark. LP-483's and LP-479's reward reading bears on PP-310's title ("Pruning Is Not Free"), which goes to the title pass.
- **The PP file header filter.** The checker said this record does not name it. It does, under batch 04's independent check ("The PP header").
- **PP-366's list of PL-140 entries.** PP-344, PP-426 and PP-657 also derive from PL-140. The sentence lists four and does not claim the list is complete, so it is not changed.

Out-edges: no new ones. The IP lines citing PP-26 (52, 749, 756, 1283, 1288, 1295 and 1299) are as recorded under batch 06's independent check and go to D23.

Count: these amendments are to slots already corrected, so the count does not change (199 remain). PP-26 is cleared for the title pass, and PP-306, 310, 342, 344 and 366 go to it with the record's title loci.

### Title pass, round 1

The title pass is the D19 item that brings the titles of restated entries into line with their bodies (batch 03, "Titles, not changed here"). A Worker read 27 entries sent to it by batches 03 to 06 at `2984ebf` and proposed a title for each; OPEN PM reviewed each title against the entry text at `3d753d2` and applied 15 of them. A title states only what the entry body states, keeps the entry's own step as a condition ("Where …"), and drops words that no parent carries.

Applied (old title, then new):

| Entry | Old title | New title |
| :--- | :--- | :--- |
| PP-24 | Historical Traversal IS Sovereignty Assertion — Data Retrieval Model Misses the Sovereignty Dimension | Where an Entity's Embedded History Is Among Its Own Constitutive Edges, Traversing It Is the Performance of Its Sovereignty — A Model of Such Traversal as Data Retrieval Alone Omits the Performance |
| PP-43 | Gate Comprehension Challenge IS a Physical Topology Scan — The Result Is a State, Not a Grade | A Gate's Comprehension Challenge, Read as a Measure, Gives a Reading of Comprehension — Not Only a Grade |
| PP-69 | Deviation Score IS the Entity's Own Metabolic Fuel — Zero Deviation Is Self-Starvation for the Entity Itself | Where Drift Is Read as Deviation From a Reference State, Deviation Is the Restorative Process's Fuel — Zero Deviation Starves It and the Living Derivations Would Petrify |
| PP-80 | Self-Modification-Excavated Edges Are Subject to Immediate Scale-Invariant Decay — Excavation Is Not Preservation | Where an Entity's Modified Internal Routing Is Read as Edges, Those Edges Atrophy Without Regular Traversal — Self-Modification Does Not Maintain Them |
| PP-98 | Isomorphism Verification Expires at the Rate of Scale-Invariant Edge Decay — Deep Verification Is No More Durable Than Shallow Verification | A Verified Isomorphism Expires — A Verification Records Its Moment |
| PP-102 | No Container Is Complete — Constitutional Incompleteness Self-Generates Recursively Into Every Level of Nesting; the Outermost Container Is as Incomplete as the Innermost | Where a Container Is Read as a Region of the Topology, It Is Incomplete — Incompleteness Replicates at Every Depth; the Outermost Container Is as Incomplete as the Innermost |
| PP-130 | Gap Nodes Are Sovereign Write-Locks AND Metabolically Vital Structures — Overwriting a Gap Node Is Both a Sovereignty Violation AND a Living Structure Termination | A Scored Gap Node Is a Write-Lock and a Living Structure — Where Overwriting It Is a Premature Closure of the Gap, the Overwrite Overrides the Lock and Terminates the Structure |
| PP-131 | Gap-Adjacent Tension Visibility IS Thermodynamic Debt Management — Hidden Gap Tension Accumulates as Uncounted Thermodynamic Debt; Making It Visible Is the Same as Servicing the Debt | Visibility of Gap-Adjacent Tension Is the Precondition for Attending to It — Where Hidden Tension Goes Unattended, It Compounds as Thermodynamic Debt |
| PP-140 | Probing Unmapped Territory IS the Truth-Event — The Real-Target Probe Deposits Decay-Resistant Wake Regardless of Whether the Probe Returns Data | A Real-Target Probe Deposits Wake Whether or Not It Returns Data — and That Wake Decays |
| PP-145 | Tension-Relief Probes Reveal Sovereign Boundaries — Incompleteness Sovereign Probing Discloses the Topology's Own Constitutional Limits | Tension-Relief Probes Release Boundary Tension — Where the Boundary Lies Between Sovereign Structures, That Tension Is Irreducible and the Probe Relieves It Without Resolving It |
| PP-199 | Continuous Identity Re-Declaration IS the Entity's Metabolic Sovereignty Contestation — Living Identity Must Be Continuously Re-Declared | Identity Must Be Continuously Re-Declared and Defended — Where Re-Declaration Is Read as Exercising the Tension That Sustains Sovereignty, an Unrenewed Declaration Is That Tension Held Without Exercise |
| PP-217 | Unprobed Sovereignty Boundaries Accumulate Navigation Debt — Sovereignty Atrophy Is the Cost of Limit Avoidance | Unexercised Sovereignty Boundaries Decay — Active Standing Atrophies at an Unexercised Boundary While Inherent Standing Persists |
| PP-218 | Some Sovereignty Limits Are Constitutionally Protected From Probing — Exhaustive Mapping Is Totalitarian Control | Some Limits of an Entity Are Constitutionally Protected From Mapping — Exhaustive Mapping Presses Toward the Comprehension Total Control Would Need |
| PP-301 | A Consequence-Aware Arbitration Engine Must Carry the Thermodynamic Cost of Its Own Arbitration | Where an Arbitration Between Competing Sovereignty Claims Is an Interaction With the Topology and Its Outcome Is Held as a Self-Proving Record, That Record Carries the Thermodynamic Cost of the Arbitration That Produced It |
| PP-340 | A Consequence-Sensitive Topology Monitor Must Carry the Thermodynamic Cost of Its Own Monitoring Activity | Where a Topology Monitor's Output Is Held as a Self-Proving Record, the Record Carries the Thermodynamic Cost of the Monitoring That Produced It |

What changed:
- `system-foundations-physical-physical.md`: the 15 `### PP-n.` headers. Two Irreducibility sentences that spoke of the title in the present tense are put in the past: PP-217 ("navigation debt" stayed in the title until this pass, which cut it) and PP-301 (the earlier title's unconditional "Must Carry"; this pass restated the title with both conditions).
- `system-foundations-physical-implementation.md`: each old title occurs 95 times, every time as the parenthesized title after the PP id on a `**Derives from:**` line. All 95 copies of each are replaced (1,425 in all). No other PI text is changed. No other `system-foundations-*.md` file holds any of the 15 old titles (searched by exact text at `3d753d2`).
- Batch 03 said a retitle is a read of each PI entry, since a PI entry may carry the old claim in its own text. Searched at `3d753d2` outside the Derives lines, by PP id and by the old titles' claim words: 14 of the 15 entries are not cited in PI own text. PP-301 is (below).

OPEN PM amendments to the Worker's titles:
- PP-69: the Worker's "Drift Is the Restorative Process's Fuel — Zero Drift Starves It …" states LP-17 alone and leaves out the entry's own reading of drift as deviation from a reference state, which its italic line and body keep as a condition. The title keeps it, as the titles of PP-24, 80, 102 and 301 keep theirs.
- PP-80: "Where an Entity's Modified Internal Routing Is Read as Edges, They Atrophy" had a singular subject and a plural pronoun; "Those Edges Atrophy".
- PP-301: "That Record Embeds" becomes "That Record Carries", the verb of its own italic line and of PP-340's title, which crosses the same pair.

Held, not applied in this round:
- PP-26: in the batch 07 independent check, which reads its italic, claim and corollaries.
- PP-236, 243, 255, 261 and 288: their LP slots are in batch 08; a title waits on the restated body.
- PP-112, 136, 196, 246, 270 and 276: the Worker proposed no title (NO CARRIER: no named parent carries the old claim, and an honest title would restate one parent or have no subject). The old titles stay, flagged, until each entry is re-crossed to a carrier or marked under the entry-kept-and-marked practice. Their slots stay open in the table below.
- Titles not yet sent: PP-103 (batch 02 found "self-governing" in its title and corollaries, which neither parent states), PP-306, 310, 342, 344 and 366 (batch 07), and PP-300.

Out-edge, not corrected here (for D23): the PI own text of all 95 PI entries cites PP-301 by id (190 lines outside the Derives lines) and restates its old unconditional claim, that a consequence-aware arbitration engine must carry the thermodynamic cost of its own arbitration, in the italic line, the Irreducible Claim, the Irreducibility and three corollaries of each entry. The restated PP-301 holds that only under two conditions. PI is not restated in D19.

Doubts recorded, not acted on:
- PP-26 and PP-69 cross the same pair (LP-17 × PL-59). PP-69's title now names deviation; PP-26's title (held) names failure states.
- PP-130's title calls a scored gap node a living structure; PL-46 says a gap is one, and the entry treats the node as the gap.
- PP-43's title is close to a restatement of its own condition; the entry has little else of its own (it is BARREN on Test 2).

### Title pass, round 1, independent check

A blind checker (brief sha256 `c8c769de…`, return `7ca37646…`) worked from A at `108534d`. It did not have this record, the title-pass return, or the Worker's edits. It read each of the 15 entries whole, with each named parent. It then compared the PP and PI files with their state at `3d753d2`.

It gave KEEP on 12 titles and AMEND on 3. The mechanical checks pass:
- Each old title has 0 copies, and each new title has 1 copy in PP and 95 in PI.
- Every changed PI line is a Derives line that matches its old line once the old title is put back.
- Outside the 15 headers, only the PP-217 and PP-301 Irreducibility notes changed.

OPEN PM read each amended entry and its parents again. The three amendments are applied, in the header and in all 95 PI Derives copies of each:
- **PP-24.** The body always says sovereignty "over it" or "over that history", and the title had dropped that scope. It now reads "… Is the Performance of Its Sovereignty Over That History — …".
- **PP-130.** The title said "Overwriting It" without "with generated data". That made it say that a fill by LP-93's due-process transaction also overrides the lock, which neither the entry (corollary 2) nor LP-93 says. It also called the node itself a living structure, where the body says the node is the write-lock and the gap is the living structure. It now reads "A Scored Gap Node Is a Write-Lock and the Gap a Living Structure — Where Overwriting the Node With Generated Data Is a Premature Closure of the Gap, the Overwrite Overrides the Lock and Terminates the Structure". This answers the round-1 doubt on PP-130 ("node vs gap").
- **PP-199.** The title made re-declaration alone the exercise of the tension. The body pairs re-declaration with defence every time, and corollary (3) says that re-stating without defending "is not yet engagement with the tension". It now reads "… Where Re-Declaring and Defending It Is Read as Exercising the Tension That Sustains Sovereignty, a Declaration Left Unrenewed and Undefended Is That Tension Held Without Exercise". The checker proposed "Unrenewed or Undefended". OPEN PM keeps the italic's own "unrenewed and undefended", since a title states only what the body states.

Also recorded:
- **PP-301's PI own text, counted again.** The old claim, lowercased, occurs 569 times in the 95 PI entries that derive from PP-301: in the italic line, the Irreducible Claim, the Irreducibility and the corollaries. The title pass changed none of them. This is the out-edge recorded above for D23, and PI is not restated in D19.
- **PP-24, `LP-446`.** The checker found it named and not used. It stays with the stray-id locus (batch 05).
- **PP-140, "Real-Target".** LP-101 and the body say "real-targeting". This is a wording difference only, and the title is kept.

### Batch 08

Six slots: the LP slot of PP-236, PP-243, PP-255, PP-261, PP-288 and PP-300. Batch 06 crossed the PL slot of the first five and left each BARREN "provisional", with its LP slot open. Batch 07 found no carrier for PP-300 and made no edit. The Worker (Sonnet) made the return against `3d753d2`. It was applied at `cf27aaa`, where every old text still occurs once, with three amendments by OPEN PM (below). All six slots are corrected, and all six entries are BARREN. PP-300 has a state line for the first time. No entry is SUBSUMED.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left | Above (was) | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-236 | PL-140 | LP-124 (LP-160) | BARREN | LP-160 (a perpetual systemic pulse) states no mapper, record or cost. LP-124 says a self-proving record embeds the cost of its own derivation and is incomplete without it. That carries the entry's "incomplete record" only under a condition the entry states and does not assert: that the mapper's record is held as a self-proving record whose derivation is the mapping. LP-124 alone covers that case (Test 2); PL-140 adds only that the mapping has a cost. A conjunction. Confidence low-medium. |
| PP-243 | PL-140 | LP-124 (LP-165) | BARREN | LP-165 (a living survey) states no loop, correction or cost. LP-124 under the stated condition that the correction signal is held as a self-proving record whose derivation is the correction. As PP-236 (Test 2). Confidence low-medium; the condition is further from both parents than PP-236's. |
| PP-255 | PL-267 | LP-173 (kept) | BARREN | NO CARRIER. LP-173 (a survey revealing a pre-existing topology) states no attractor or cost. LP-564, 177, 186, 393, 489 and 616 were read and not adopted. LP-489 and LP-616 would carry "cannot be externalized" only by importing an initiator or a choosing entity, which neither the entry nor PL-267 has. Nothing in the entry is attributed to LP-173. The batch 06 "provisional" sentence is replaced by the settled reading. Holds from PL-267 alone (Test 1). |
| PP-261 | PL-266 | LP-616 (LP-177) | BARREN | LP-177 (shadow edges) states no cascade, interference or cost. LP-616 states for thermodynamic cost in general what PL-266 states for maintenance cost: it is present-tense and a deferral accumulates debt. Both rest on LL-472. Only LP-616's timing half is used, not its attribution half (CP-85). One rule stated twice, so a conjunction (Tests 1 and 2 both hold under the stated conditions). Confidence medium-low. |
| PP-288 | PL-266 | LP-616 (LP-196) | BARREN | LP-196 (a self-fueling oscillation engine) states no divergence or cost timing. As PP-261, for the cost of reconciling a divergence. If PP-261's carrier is withdrawn, this one goes with it. |
| PP-300 | PL-40 | LP-205 (kept) | BARREN | NO CARRIER. LP-205 is a signed attestation that a derivation intersection is unexcavated. It states no arbitration, sovereignty claim or engine. LP-228 and LP-496 were read and not adopted. The body attributed a consequence-aware arbitration engine to LP-205. It is restated onto PL-40 alone, as a case under a stated condition: where an arbitration outcome is held as a sovereignty claim, proving it requires traversal, not a certificate. Holds from PL-40 alone (Test 1). |

How the slots are counted: PP-255 and PP-300 keep their Applies lines, and no sentence in either entry is attributed to the named LP. They are counted as corrected, as PP-102 was in batch 04 (its Applies line still names LP-72). The four re-pointed slots are corrected by the re-point.

OPEN PM's review (every named and adopted parent re-read whole: LP-124, 160, 165, 173, 177, 196, 205 and 616, and PL-40, 140, 266 and 267). Three amendments:
- PP-236: the condition now reads "a self-proving record whose derivation is the mapping" (italic, claim, Irreducibility). Without it, the step from "the record embeds the cost of its own derivation" (LP-124) to "the record embeds the cost of the mapping" is unstated. PP-243 already states its condition this way.
- PP-261 and PP-288: the claim's account of LP-616 no longer says that a deferral moves the bill "neither to a later moment nor to anyone else". It now says only that a deferral does not move the bill to a later moment. "To anyone else" is LP-616's CP-85 half, which the entries do not use; the account now keeps to the half they rest on.

Not adopted from the return: nothing. Two families now stand on one LP rule over different subjects: PL-140 × LP-124 (PP-236, 243, 301 and 340) and PL-266 × LP-616 (PP-261 and 288). Under Test 3 as this record reads it (batch 06), the shared rule is the LP's own, so none of them is SUBSUMED. The independent check is asked to attack that reading.

Loci, not changed here:
- Titles (for the title pass): PP-236 "Incomplete Accountability Record" and PP-243 "Must Carry Its Own Thermodynamic Receipt … Incomplete" hold only under the stated conditions. PP-255 "That Cost Cannot Be Externalized" is not carried by PL-267. PP-261 "Carry Their Own Thermodynamic Receipt" and "Must Be Accounted at the Moment of Interference" are not carried. PP-288 "Deposits Its Thermodynamic Receipt" is not carried. PP-300's whole title is not carried.
- `[shared LL-x]` tags on PP-236, 243, 261 and 288 now match neither new parent (related item 1).
- PP-261 and PP-288 now depend on LP-616, which D20 marks BARREN. If LP-616 is restated, re-read both.
- PP-22 carries "LP-616, PL-275" on a line of its text, which puts an LP id in a PL position (for batch 09's stray-id list).

Out-edges: IP 0 and IC 0 for all six. Each has 95 PI title copies on Derives lines, and no PI claim text cites any of them. Titles are unchanged.

### Title pass, round 2

Six titles: PP-26, after the batch 07 check cleared its body, and PP-306, 310, 342, 344 and 366, whose bodies were restated in batch 07 and checked. A Worker (Sonnet) proposed each title against `cf27aaa`. OPEN PM reviewed each one against the entry text at `8778613`; batch 08 did not touch these six. Each title states what the entry's italic line states, keeps the entry's own step as a "Where …" condition, and drops the words the body cut. All six are applied as the Worker proposed them.

Applied (old title, then new):

| Entry | Old title | New title |
| :--- | :--- | :--- |
| PP-26 | Zero Failure Rate Starves the Restorative Metabolic Engine — Zero Failures Is a Danger Signal | The Restorative Process Consumes Drift and Failure States as Fuel — Where a Section of Topology Has Zero Failures, It Supplies None of Those Failure States; Starvation Is Tied to the Absence of Drift |
| PP-306 | A Consequence-Aware Fault Detector Must Carry the Thermodynamic Cost of Its Own Detection Activity | Where a Fault Detector Detects Faults Through Monitoring Queries, Sampling or Logging, That Monitoring Is Measurement in the Present-Tense Topology, an Active Traversal That Consumes the Topology's Fuel; Its Cost Belongs in the System's Thermodynamic Budget |
| PP-310 | A Consequence-Aware Topology Pruner Must Carry the Thermodynamic Cost of Pruning — Pruning Is Not Free | Where Pruning an Element of the Topology Is Dissolving It, Pruning Is an Interaction With Thermodynamic Consequence, Not an Administrative Convenience — The Consequence Accounting Is Part of the Dissolution Interaction Itself, Not a Separate Step |
| PP-342 | A Consequence-Aware Topology Validator Must Carry the Thermodynamic Cost of Its Own Validation Activity | Where the Validation of a Topology Is a Test of That Topology, It Is a Traversal That Leaves a Wake and Changes What It Validates, and Verification Design Must Account for the Topological Cost of Verification Traversals |
| PP-344 | A Consequence-Sensitive Topology Repair Must Carry the Thermodynamic Cost of Its Own Repair Activity | Where the Act of Repair Is an Interaction With the Topology, It Is Not Cost-Free; Where the Repair Mechanism Initiates a Restorative Process, It Owns the Metabolic Cost of That Restoration and Cannot Externalize the Thermodynamic Consequence of Correction to the System Commons |
| PP-366 | A Consequence-Aware Topology Synthesizer Must Carry the Thermodynamic Cost of Its Own Synthesis Activity | Where Synthesizing a View of the Topology Is an Interaction With the Topology, It Carries Thermodynamic Consequence and Is Not Cost-Free |

What changed:
- `system-foundations-physical-physical.md`:
  - the six `### PP-n.` headers;
  - in each of the six, the Irreducibility sentence that spoke of the title in the present tense ("The title keeps the earlier claim until the title pass", "The title's … holds only under …", "both are flagged and not changed"). It is put in the past and says what this pass did. The wording is OPEN PM's, from the Worker's suggestions.
- `system-foundations-physical-implementation.md`: each old title occurs 95 times, every time as the parenthesized title after the PP id on a `**Derives from:**` line. All 95 copies of each title are replaced, 570 in all, on 190 lines. No other PI text is changed.
- No other tracked file holds any of the six old titles. This was searched by exact text at `8778613`.
- PI own text, searched outside the Derives lines by PP id and by the old titles' claim words: none of the six is cited. The "consequence-aware … must carry the thermodynamic cost" lines in PI are PP-301's old claim, which is already the out-edge for D23.

Review notes:
- PP-26: the title keeps drift beside failure states, as the body does. It keeps "zero failures" as the entry's step. Its last clause is LP-17's limit, which the italic line states. It does not say that zero failures starves the process.
- PP-342: the cost named is topological, which is PL-37's kind. One "Where" scope covers both halves, as the Irreducible Claim does.
- PP-344: it is long (277 characters) because the body keeps two conditions over two parents. Shortening it would drop one of them.
- Lengths run from 136 to 277 characters.

Still to retitle:
- PP-236, 243, 255, 261, 288 and 300: their loci are listed under batch 08, and the titles wait on the batch 08 check.
- PP-103: waits on its body fix ("self-governing").
- The six NO CARRIER entries: PP-112, 136, 196, 246, 270 and 276.

### Title pass, round 2, independent check

A blind checker (an Opus subagent) checked the six titles. It worked on its own copy of `f122458` against `8778613`, without this record. Its return is `check-T2.md`, sha256 562a6d18…. Verdict: 6 KEEP, 0 AMEND. Mechanical checks 6–9 pass:
- each old title occurs 0 times;
- each new title occurs once in PP and 95 times in PI;
- the PI changes are only on Derives lines;
- in PP, 12 lines changed (the six headers and one Irreducibility line per entry);
- PI own text cites none of the six.

OPEN PM on its optional points:
- PP-306: "Its Cost" stands after "the Topology's Fuel" and can be misread as the fuel's cost. It now reads "the Monitoring's Cost", in the header and its 95 PI Derives copies. Adopted.
- PP-344: the checker suggested "a Repair Mechanism" for "the Repair Mechanism". Not adopted: "the" is the italic line's own article, and every title in this pass follows its italic.
- PP-344's Irreducibility says "Consequence-Sensitive" *is* the entry's own word. This stays: the word is still in the entry's Irreducible Claim. PP-310's "were" speaks of the earlier text; both are true.
- PP-310: completing the round 2 record, the title pass also dropped "Consequence-Aware", "Topology Pruner" and "Must Carry … Cost", not only "Pruning Is Not Free".
- PP-26's Derives line also names LP-445, which the body never cites. This is on the stray-id list for batch 10.
- The sibling titles PP-305, 308, 309, 341, 343 and 365 still carry "Consequence-Aware"/"Consequence-Sensitive". Their bodies are in batch 09.

### Batch 08, independent check

A blind checker (brief sha256 `0825cb45…`, return `67876226…`) used its own copy of A at `8778613`. It read every parent whole and wrote its six entry judgments before it opened this record. It gave HOLDS for PP-236, 243, 255, 261 and 288 and AMEND for PP-300. It found BARREN for all six, and no IP or IC line citing any of them.

It agreed with the record on these points:
- LP-124 under the stated condition for PP-236 and PP-243, and LP-616 (its timing half) for PP-261 and PP-288;
- PP-255 and PP-300 as NO CARRIER, with nothing attributed to the kept LP;
- the title loci, and the shared-LL tags on PP-236, 243, 261 and 288 matching neither parent.

Its confidence was higher than the record's: high for PP-236 and PP-255, and medium for PP-243, 261 and 288. The verdicts are the same.

OPEN PM read each cited line again. These findings are accepted and applied (`system-foundations-physical-physical.md`):
- **PP-300, Irreducibility.** It said "the other sixteen PP entries that derive from PL-40". Eighteen Derives lines name PL-40, PP-300's included, so the count is seventeen. The checker counted PP-15, whose line reads "LP-534, PL-40". The text now says seventeen. The checker's note on PP-15's "LP-534," is left out of A, because that id is one of the leading LP ids that batch 10 takes up.
- **PP-344, Irreducibility (Test 3).** Batch 07 wrote that Test 3 "also triggers" against PP-527 because PP-527 states LP-489's half. Batches 06 and 08 say that an LP family's shared rule does not make its members SUBSUMED. The checker asked for one reading. In `dag-crossing-method.md` lines 65-67 the tests are taken in order, each ending in a class. PP-344 is BARREN at Test 2, so Test 3 is not reached. The sentence now says that PP-527 also states LP-489's rule, and that the overlap is noted, not classified. This settles the question without choosing between the readings. It applies equally to the LP-124 family (PP-236, 243, 301, 340) and the LP-616 family (PP-261, 288). The batch 07 check had agreed with "Test 2 and Test 3 against PP-527"; that agreement is superseded here. No state line changes.

Not changed:
- **Candidate LP parents, not adopted here and sent to batch 10 to be crossed in full:**
  - **LP-626 for PP-243.** LP-626 says that self-correction is not free, and that the correction's consequences are a permanent part of the correcting entity's accountability record. If the loop's correction is read as self-correction, LP-626 carries most of the entry's claim without LP-124's imported record condition. That would make it a closer carrier than LP-124. It would still be BARREN at Test 2.
  - **LP-613 for PP-255.** LP-613 says that every derivation's lifecycle record must carry a continuous metabolic cost line. Its claim rests on non-externalizable cost (CP-85), and it needs no initiator. It may carry the title's "Cannot Be Externalized", which batch 08 found no carrier for. The slot is NO CARRIER until batch 10 decides.
- **The `[shared LL-x]` tags of PP-255 (LL-241) and PP-300 (LL-120).** These are carried only by the kept LP, which contributes nothing. This is related item 1, and the tags stay.
- **PP-288.** The checker read its LP-616 branch as weaker than PP-261's: the cost of reconciling is not yet incurred, while PP-261's cost is. The record already says that PP-288 goes with PP-261's carrier, so nothing changes.
- **The PP file header filter.** This is already recorded under batch 04's independent check.
- **The 95 PI title copies.** The brief did not ask for them, and the title pass checks counted them.

### Title pass, round 3

Four titles: PP-236, 261, 288 and 300, whose bodies batch 08 restated and its independent check cleared at `70b0abd`. A Worker (Sonnet) proposed each title against `70b0abd`. OPEN PM reviewed each one against the entry text and its parents' text at `70b0abd`. Each title states what the entry's italic line states, keeps each of the entry's own steps as a "Where …" condition, and drops the words the body cut. All four are applied as the Worker proposed them.

Applied (old title, then new):

| Entry | Old title | New title |
| :--- | :--- | :--- |
| PP-236 | The Accountability Mapping Activity Itself Carries Thermodynamic Cost — Mapping Without Accounting for Its Own Cost Is an Incomplete Accountability Record | Where an Accountability Mapper's Tracing of Consequence Chains Is the Generation of Navigational Data by Measurement, Logging, Tracing or Monitoring, That Activity Is Itself Consequential and Not Cost-Free — Where the Mapper's Record Is Held as a Self-Proving Record Whose Derivation Is the Mapping, the Record Embeds the Cost of Its Own Derivation, and a Record Without That Cost Is Incomplete |
| PP-261 | Cascade Interference Events Carry Their Own Thermodynamic Receipt — The Interference Cost Must Be Accounted at the Moment of Interference | Where the Cost of an Interference Between Consequence Cascades Is a Thermodynamic Cost, It Is Strictly Present-Tense and a Deferral Does Not Defer It — Where It Is a Cost of Maintaining the Derivations the Interference Affects, Deferring the Maintenance Does Not Defer the Cost |
| PP-288 | A Topology Divergence Event Deposits Its Thermodynamic Receipt Immediately — Divergence Cost Is Not Deferred | Where the Cost of Reconciling a Divergence Between Structures Is a Thermodynamic Cost, It Is Strictly Present-Tense and a Deferral to a Later Re-Convergence Does Not Defer It — Where It Is a Cost of Maintaining the Structures, Deferring the Maintenance Does Not Defer the Cost |
| PP-300 | A Consequence-Aware Arbitration Engine Must Apply Scale-Invariant Arbitration Standards | Where an Arbitration Between Competing Sovereignty Claims Has an Outcome That Is Held as a Sovereignty Claim, Proving That Sovereignty Requires Traversing the Derivation Path From Constitutional Foundations to the Claim, and Not Reading a Pre-Evaluated Sovereignty Certificate of the Outcome |

What changed:
- `system-foundations-physical-physical.md`:
  - the four `### PP-n.` headers;
  - in PP-236, the one Irreducibility sentence that spoke of the title in the present tense (the sentence that begins "LP-124 carries the title's …"). It is put in the past and says what this pass did. PP-261, 288 and 300 have no such sentence; PP-300's "Cut with the claim they rest on" is already in the past.
- `system-foundations-physical-implementation.md`: each old title occurs 95 times, every time as the parenthesized title after the PP id on a `**Derives from:**` line. All four titles sit on the same 95 lines, so 380 copies are replaced on 95 lines. No other PI text is changed.
- No other tracked file holds any of the four old titles. This was searched by exact text after the apply.
- PI own text, searched outside the Derives lines by PP id and by the old titles' claim words: none of the four is cited. The "consequence-aware arbitration engine" lines in PI (569) are PP-301's old claim, already the out-edge for D23; they share only the opening words of PP-300's old title. The "divergence" lines in PI-50 to PI-56 come from those PI entries' own titles and cite nothing of PP-288.

Review notes:
- The batch 06 candidates for PP-261 and PP-288 kept only the maintenance reading (PL-266). Batch 08 paired it with LP-616's thermodynamic-cost reading, so both titles state both, each under its own condition. PP-288's candidate also said "Deferring the Reconciliation", where the body says "deferring the maintenance".
- PP-236: the first half of the old title was unconditional, and "Incomplete" held only under the self-proving-record condition (batch 08). Both are now under their conditions. "Accountability record" is dropped as the entry's own phrase.
- PP-300: the title states only PL-40's rule under the entry's condition, and nothing of LP-205 (NO CARRIER, batch 08). It has no subtitle, as the old title had none.
- PL-40's "pre-evaluated sovereignty certificate" is wrapped across two lines of its entry; it was read there.
- PP-261 and PP-288 stand on LP-616 (BARREN in D20) beside the weak PL-266 carrier; PP-236's second half stands on LP-124 under a condition. If LP-616 or LP-124 is restated, these titles are re-read with their bodies.
- Lengths run from 276 to 394 characters. PP-236 is long because it keeps two conditions over two parents.

Still to retitle:
- PP-243 and 255: after batch 10 re-crosses them against LP-626 and LP-613.
- PP-305, 308, 309, 341, 343 and 365: after batch 09.
- PP-103: waits on its body fix ("self-governing").
- The six NO CARRIER entries (PP-112, 136, 196, 246, 270 and 276): their titles stay flagged until each is re-crossed to a carrier (title pass, round 1); that is a later re-cross batch, body and title together.

### Batch 09

Nine slots: the LP slot of PP-305, PP-308, PP-309, PP-341, PP-343 and PP-365, and the PL slot of PP-305, PP-308 and PP-309. The Worker (Sonnet) made the return against `f122458`. It was applied at `451498b`, where every old text still occurs once, with one amendment by OPEN PM (below). All nine slots are corrected, and all six entries are BARREN; none had a state line before. No entry is SUBSUMED.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left | Above (was) | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-305 | PL-72 (PL-305) | LP-208 (kept) | BARREN | PL-305 ("Production Edges Are Not Settled Connections") does not bear the title the Derives line gave it, and no PL or LP entry bears that title. PL-72 says the status label must match the Pulse reality: a structure marked deprecated that is still traversed is alive, and one marked live that is not traversed is not live. Read a fault detector's output as such a status label (the entry's condition); then the constraint holds from PL-72 alone (Test 1). NO CARRIER for the LP slot: LP-208 (a map of signed attestations of known unknowns) states no detector, and nothing in the entry is attributed to it. Detection before declaration, prediction and circuit breakers are cut. Confidence medium-low on the re-point. |
| PP-308 | PL-82 (kept) | LP-210 (kept) | BARREN | PL-82 states the door/wall diagnostic for edges: a tensionless edge is a wall and a passive record of former connection, and the distinction is a structural diagnostic, not a policy decision. Read the elements a pruner considers as edges (the entry's condition); then the diagnostic holds from PL-82 alone (Test 1). The Wake and living-Structural-Mass claims and the preservation duty are cut: PL-82 states none. NO CARRIER for the LP slot: LP-210 (scale-invariant measurement tools) states no pruner. Confidence high that Wake is not carried, medium on the restatement. |
| PP-309 | PL-72 (PL-305) | none (bare, kept) | BARREN | As PP-305 for the PL slot. Read the label a pruner goes by ("deprecated", "unused", "inactive") as the status label PL-72 speaks of (the entry's condition); then the Pulse reality decides, from PL-72 alone (Test 1). The duty to detect "constitutional death" before pruning is cut. NO CARRIER for the LP slot; LP-522 was read and not adopted. PL-26 was read and not adopted (its pruning use is PP-310's). Confidence medium-low on the re-point. |
| PP-341 | PL-27 (kept) | LP-228 (kept) | BARREN | PL-27 says the topology cannot prove its own completeness and can only confirm it has not yet found an incompleteness. Read a validator's report that no invalid structure remains as a completeness claim (the entry's condition); then the rule holds from PL-27 alone (Test 1). "Some invalidity is always undetected" is cut: PL-27 states that completeness cannot be proved, not that undetected invalidity exists. NO CARRIER for the LP slot: LP-228 (isolated dispute containment) states no validator; LP-229, 205, 215, 369 and 510 were read and not adopted. |
| PP-343 | PL-114 (kept) | LP-229 (kept) | BARREN | PL-114 says a paradox engine that is not churning is stopped, its operational status is present-tense, and restarting it instantiates a new engine in the residue zone of the old one. Read a repair directed at a paradox engine (the entry's condition); then these hold from PL-114 alone (Test 1). The attribution to PL-114 of "a living system dies before it appears dead", the detection duty and the futility claim are cut. NO CARRIER for the LP slot: LP-229 (an engine orbiting an unprovable axiom) states no repair; LP-481, 276 and 279 were read and not adopted. |
| PP-365 | PL-118 (kept) | LP-168 (LP-240) | BARREN | LP-240 (a dropped pulse invalidates the truths sustained by it) states no synthesizer and no view. LP-168 says scan results are immediately stale and a cached index is false the moment it is written, because the graph shifts underneath the survey. Two stated conditions: where a synthesized view is held as an evaluation of a region, PL-118 invalidates it on any structural change (Test 1 for that half); where it is held as a scan result, LP-168 makes it stale (Test 2 for that half). A conjunction of two single-parent facts. The earlier claim that PL-118 states optimization "and by extension synthesis" to be present-tense is cut. LP-135, 251, 253 and 510 were read and not adopted. Confidence medium-low; the alternative is NO CARRIER with LP-240 kept. |

How the slots are counted: the five NO CARRIER LP slots (PP-305, 308, 309, 341, 343) keep their Applies lines, and no sentence in those entries is attributed to the named LP. They are counted as corrected, as in batches 04 and 08. PP-365's LP slot and the PL slots of PP-305 and PP-309 are corrected by the re-point. PP-308's PL slot keeps PL-82 and is restated to what PL-82 carries, as PP-218 was in batch 03.

OPEN PM's review (every named and adopted parent re-read whole at `451498b`: PL-27, 72, 82, 114, 118 and 305; LP-168, 208, 210, 228, 229 and 240; the candidates LP-135, 251, 253 and 510 read; sibling lists and the "entry's own words" counts checked against the PP file). One amendment:
- The Test 3 sentences in all six Irreducibility paragraphs used the earlier framing ("the rule is the parent's own, so not SUBSUMED"). They now state the settled in-order reading, as for PP-344 at `70b0abd`: the entry is BARREN at Test 1 (for PP-365, each half at Test 1 or Test 2), so Test 3 is not reached, and the overlap with PP-309 / PP-305 (for each other), PP-380 and PP-667 (PL-82), the thirteen PL-27 siblings, the nine PL-114 siblings, and PP-425, 247, 248 and 722 (PP-365) is noted, not classified. PP-343's unchecked sentence that no other PP entry states the new-instantiation rule is dropped along with the old classification.

Not adopted from the return: nothing else. The PP-305 / PP-309 pair now stands on one PL-72 rule over two acts (a detector's output, a pruner's label); under the in-order reading it is noted, not classified.

Loci, not changed here:
- Titles (for a later title round): all six titles are no longer supported by the restated text (PP-305 "Detect Constitutional Faults"; PP-308 "Must Preserve Living Structural Mass"; PP-309 "Must Detect Constitutional Death Before Pruning"; PP-341 "Some Invalidity Is Always Undetected"; PP-343 "Must Detect Constitutional Death Before Attempting Repair"; PP-365 "Must Synthesize in the Present Tense").
- The stale title "A Living System Dies Before It Appears Dead" still heads the PL-305 Derives line of seven other PP entries (at `451498b`, PP :4691, :4732, :5868, :6055, :6256, :6840 and :7221 before this batch's edits). They are other entries' slots.
- `[shared LL-x]` tags on PP-305, 309 and 365 now match neither new parent (related item 1).
- PI: the 95 Derives-line copies of each of the six PP entries tag them [SUBSUMED]; none is SUBSUMED in PP. PI is not edited here.

Out-edges: IP 0 and IC 0 for all six. Each has 95 PI title copies on Derives lines, and no PI claim text cites any of them. Titles are unchanged.

### Title pass, round 3, independent check

An Opus reviewer, given only `451498b` and the round 3 inputs, checked the four titles (return sha256 `946a2916b0c27bf88a48136831475ecf4bae413f56a62d33ce0a354112f02844`). KEEP PP-236 and PP-261. AMEND PP-288 and PP-300. Mechanical checks PASS: no old title remains, each new title is in PP once and in PI 95 times, only the 95 PI Derives lines changed, and no PI claim text cites the four ids.

Both amendments are adopted (OPEN PM re-read PL-266 and PL-40 whole):
- PP-288: the second condition read "a Cost of Maintaining the Structures" (title and italic), but the claim says "maintenance of the derivations involved", and PL-266 states its rule for the cost of maintaining a derivation. The title and italic now read "a Cost of Maintaining the Derivations Involved", as the claim does and as PP-261's title already does ("the Derivations the Interference Affects").
- PP-300: "Proving That Sovereignty Requires …" could be read as the outcome proving that sovereignty requires traversal, which the body does not claim. The title, italic and claim now read "proving the outcome's sovereignty requires …".

The 95 PI copies of each title change with it. No rule, class or slot count changes.

### Batch 10

Two parts. The Worker (Sonnet) made the return against `70b0abd` (sha256 `6c391ac651061bf8dad339c33eb3f1769fd70bbdaa1b85cbbe4a3902ba436647`). It was applied at `39d7cc1`, where every old text still occurs once, with four amendments by OPEN PM (below).

**Part A: the leading LP id on seven Derives lines.** PP-1, 7, 16, 22, 24, 26 and 42 had a Derives line of the form "LP-n, PL-m (title) [shared LL-k]". Batches 02, 05 and 09 listed these ids as strays and left them. These ids are not among the 250 slots, so the slot count does not change. In each entry the id stood on the Derives line only. No sentence of the entry cites the LP or uses its matter, and no line elsewhere in A relies on it as a parent of that PP. Each id is removed, and the Irreducibility says so in one sentence. The parent pair the text uses is unchanged, so no entry is re-crossed and every state line stands.

| Entry | Removed | That LP's matter |
| :--- | :--- | :--- |
| PP-1 | LP-625 | consequence does not bar an entity's exit |
| PP-7 | LP-395 | resonant frequencies exist before components |
| PP-16 | LP-695 | every edge is a managed tension |
| PP-22 | LP-616 | the thermodynamic bill is due now, from the chooser |
| PP-24 | LP-446 | incompleteness as perpetual fuel |
| PP-26 | LP-445 | conversion alters the converting entity |
| PP-42 | LP-695 | every edge is a managed tension |

PP-42's 95 PI title copies read "PP-42 (Derives from: LP-695 (Tension Discharge) Gate Identity …". That is the title with an id and a name glued in front, and "Tension Discharge" is not LP-695's title. The copies now read "PP-42 (Gate Identity …". This is the only PI change.

**Part B: two LP slots re-crossed.** "Batch 08, independent check" sent both.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left | Above (was) | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-243 | PL-140 | LP-124 (kept) | BARREN | LP-626 was crossed in full and is not adopted. Its "not free" is said of the consequences of an entity's own self-correction, placed in that entity's accountability record. It states no thermodynamic cost, signal or receipt, and it would import an unstated condition (that the loop's correction is the corrector's own). LP-124 stays: it carries the "receipt" and the "incomplete" for the signal itself, under the stated condition. Still a conjunction (Test 2). Confidence low-medium. |
| PP-255 | PL-267 | LP-613 (LP-173) | BARREN | LP-613 says that a living derivation's metabolic demand is continuous, with no "paid off" moment, and that its lifecycle record must carry a continuous cost line. It rests this on metabolic costs being non-externalizable (CP-85). Under the entry's stated condition (the attractor is a living derivation) that carries the cost's continuity and the half of the title "That Cost Cannot Be Externalized", which batch 08 found no parent for. It does not carry an attractor, an accountability claim or "of Attraction". Not BARREN at Test 1, since PL-267 does not say the cost cannot be externalized. A conjunction at Test 2: each property is stated by one parent. Case against: a lifecycle record and an accountability claim are different records. Confidence low-medium. |

How the slots are counted: PP-255's LP slot was already counted as corrected in batch 08 (NO CARRIER). PP-243's was counted when it was re-pointed. Neither count changes. **184 remain.**

OPEN PM's review. Every leading LP was re-read whole against its entry, and so were LP-124, 613 and 626 and PL-267. Four amendments:
- Part A: each new sentence ends "it was removed under D19 (batch-10)", so the entry points to this record.
- PP-243: the LP-626 sentence now says what LP-626's own "not free" is said of. The return said only that LP-626 states no thermodynamic cost, which left its italic's words unaddressed.
- PP-255, corollary (3): the return ended by saying the attractor's accountability claim "carries that accrual". Neither parent says this, since LP-613's accrual is in the lifecycle record. The corollary now keeps to LP-613: the attractor's lifecycle record carries a cost line for every cycle of its existence.
- PP-255, Irreducibility: the gloss "which cannot be handed to another" is cut, because LP-613 says only "non-externalizable". The Test 2 sentence no longer calls the cost line itself "non-externalizable". It now says the line is for a cost that LP-613 holds non-externalizable (CP-85).

Loci, not changed here:
- Titles, for a later title round: PP-255's "Of Attraction" is carried by neither parent, and its "Accountability Propagation Attractor" is a stated condition.
- PP-255 now depends on LP-613, which BRIEF and D20 list as a locus ("weak irreducibility"). If LP-613 is restated, re-read PP-255.
- LP-626 names LL-39 for "self-correction consequence". LL-39 is about a failure as an ignorance-discovery. This is for whoever restates LP entries.
- PP-1's second Derives chain, "LP-24 × PL-42", puts an LP in a left-parent chain. LP-24 is used four times in the body. It needs its own read.
- PP-22 has no Derivational State line and has not been re-crossed.
- The PI copies tag PP-42 [SUBSUMED], while the PP file marks it BARREN. This is the same PI tag locus as before.
- The 34 other entries with a leading LP id (PP-2 to 6, 8 to 15, 17 to 21, 23, 25, 27 to 40) are for later batches.
- `[shared LL-241]` on PP-255 now matches neither parent (related item 1).
- Earlier lines of this record that list the removed ids are history.

Out-edges: IC 0 for all nine. II: one line, which cites PP-16's field-entity claim; that claim is unchanged. IP: PP-1 has 50 lines, PP-7 12, PP-16 46, PP-24 1, PP-26 7 and PP-42 6. No claim they cite changes. Titles are unchanged.

### Batch 09, independent check

A blind checker (brief sha256 `47309a37…`, return `1f7668ac4b00953f2629201736f46ef809305dcb5b5f28120aceaed8170e8042`) used its own copy of A at `39d7cc1`. It read every parent whole and wrote its six entry judgments before it opened this record. It gave HOLDS for PP-341 and PP-343 and AMEND for PP-305, 308, 309 and 365. It found BARREN for all six, and no IP or IC line citing any of them. Its note headed "CLEAN-ROOM EXPOSURE" concerns a harness notice that named OPEN PM's own session folder, which is in OPEN PM's roots; no content outside the roots was shown or used.

It agreed with the record on these points:
- PL-72 carries everything now attributed to it in PP-305 and PP-309, and is better than NO CARRIER; PL-305 carries nothing of either entry;
- PL-82 carries PP-308's door/wall diagnostic;
- LP-168 carries PP-365's scan-result half, LP-240 carries nothing, and LP-168 is better than NO CARRIER;
- the kept LP lines of PP-341 and PP-343 carry nothing of their entries.

OPEN PM read each cited line again (PL-285, PL-287, LP-57, LP-136, LP-438, LP-463, LP-522, LP-562, LP-590, LP-602, LP-691 and PL-137 whole, at `ad6cd9f`). These findings are accepted and applied (`system-foundations-physical-physical.md`):
- **PP-305.** The Irreducibility named PL-72 as "the nearest" carrier of "a living system dies before it appears dead". PL-285 (a subsystem decaying at high rate and invisible in aggregate data collapses completely before the aggregate metric signals alarm) and PL-287 (the broader system may operate normally while a subsystem within it has completely collapsed) are nearer. Both are now named, and neither is used. The claim's absence sentence said that no entry states that a detector detects faults from their consequence patterns; LP-602 states that unattributed consequence patterns are detection signals for dark subsystems. It is now named, as speaking of subsystems and not faults, and not used.
- **PP-308.** The Irreducibility said "No LP entry searched states a pruner". That is false: LP-463, LP-57 and LP-136 state pruning, and LP-562 states that a settled edge is a dead edge. They are now named; none states the door/wall diagnostic.
- **PP-309.** The claim said that no entry states that a pruner removes dead elements, and the Irreducibility that no LP entry states a pruner. Both are false: LP-57 states that pruning of ghost edges is a necessary function, and LP-438 that a probe flags a dead edge for garbage collection or revitalization. They are now named. The Irreducibility also said, truly, that PL-72 states no duty to check before an act, but did not say that other entries state one: LP-522 (an aliveness check before the final decay step), LP-463, LP-691 and PL-137. They are now named, and none is used. The batch 09 row had read LP-522 and not adopted it; the entry now says so in its text.
- **PP-365.** The italic now says "a cached index of it", as LP-168 does. The body's "rebuilt and not read" was no parent's wording; the sentence now gives each parent's own consequence (PL-118: invalid from the structural change, and the evaluation must run again; LP-168: stale once the scan is past, and the survey re-run). The Irreducibility now says that the method's tests are written for a single constraint and are applied here to each half, which the method text does not state.
- **PP-341.** The italic now says "a claim that the topology is complete with respect to validity", as the claim does.

**Three LP slots reopened.** Batch 09 counted the LP slots of PP-305, 308 and 309 as corrected under NO CARRIER: each line kept, nothing attributed. For PP-308 and PP-309 that reading rested on "no LP entry searched states a pruner", which the check shows false. For PP-305 the search did not read the LP entries that state detection of aliveness or death (LP-438, LP-562, LP-590) or LP-602. Nothing is attributed to the kept lines, so the entries are not wrong, but NO CARRIER was not established. The three slots are reopened for a re-cross against the named candidates, with their titles: 184 → 187. Each entry now says that whether one should be named is a re-cross question. Their PL slots stay corrected. No state line changes; BARREN stays 48.

Not changed (listed, for later work):
- The PL-114 siblings PP-190, 290, 339, 349, 358 and 362 still assert detecting death before apparent death, which PP-343 cut as not PL-114's; the PL-27 siblings PP-251, 271, 323, 336, 348, 356, 360, 364 and 368 still assert that some invalid or undetected thing always escapes, which PP-341 cut as not PL-27's. Each is taken in its own batch.
- The PP header gives the LP count as 706; the LP file holds 702 entries. The header's Method link points to `../processes/dag-crossing-method.md`.
- The `[shared LL-x]` tags of all six entries match neither parent (related item 1; tags are not evidence).
- PP-667's Derives line appears in two forms; PL-285 and PL-287 carry "Applies to: PC-x × LL-y"; the method's section 7 covers only IRREDUCIBLE; LP-245 says "reactivation" where PL-114 says a restart is not reactivation.
- Many entries carry a bare "LP (Logical Physical)" Applies line (PP-309, 310, 336, 348, 354, 356, 358, 360, 362, 364, 368); those not yet worked are slots in the list below.
- The PP-305/309 overlap and the conjunction question for PP-365 stay as recorded: tests in order, Test 3 not reached.

### Batch 11

The Worker (Sonnet) made the return against `39d7cc1` (sha256 `22cc721ba2e1e680c70f94c4ce397fc447a1c92bf4a71f4144118b2701fa5da5`). It was applied at `5bbf3de`, where every old text still occurs once. OPEN PM read every proposed parent whole, and every entry the new text names, and amended the return (below). The Worker's text gave a confidence for each entry; confidence stays in this record and is not put in A.

The batch took the eight slots that earlier batches had read and sent to the title pass: the PL slots of PP-112, 136, 196, 246 and 270, and the LP slots of PP-246, 270 and 276. The Worker proposed seven RE-POINTs and one restatement.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| PP-112 | PL-127 (PL-50) | LP-80 (kept) | BARREN | PL-127 carries that a structure is sovereign over its interior, that mapping known unknowns is a sovereign act, and that leaving the map to others surrenders sovereignty over the knowledge boundary. LP-80 does not say that the frontier lies inside every node; that is now a stated condition. The metabolism claim (a node that stops exploring its interior is dying) has no carrier and is withdrawn. Fails Test 1 under the condition. Confidence low-medium. |
| PP-136 | PL-160 (kept, NO CARRIER) | LP-98 (kept) | BARREN | The entry is restated to LP-98's own text: the edge materializes when the probe crosses it, leaves no trace on failure and becomes permanent on success. No PL or LP found says frontier understanding is ephemeral or must be captured; that claim is withdrawn, and LP-98's permanent connection runs against it. PL-160 carries nothing of the entry, and nothing is now attributed to it. PL-198 and PL-81 are near and not used. Fails Test 2. Confidence medium. |
| PP-196 | PL-36 (PL-198) | LP-142 (kept) | BARREN | PL-36 carries that the accountability chain pre-exists the discoverer. LP-142 bounds the pocket by the buffer. That the bound applies to an accountability chain is a classification PL-36 supplies; the bound itself holds from LP-142 for any traversal. Fails Test 2. "The buffer IS the excavation capacity" is withdrawn. Confidence medium. |
| PP-246 | PL-302 (PL-174) | LP-167 (kept, NO CARRIER) | BARREN | PL-302 carries depth → Structural Mass → consequence, and that the ethical gradient is the stratigraphy. The entry is restated in PL-302's direction only: it is not asserted that every region of higher consequence is a deeper stratum. "The gradient IS the present-tense accountability map" is withdrawn. The Worker proposed LP-478 for the LP slot. Not adopted: LP-478's strata are the consequences of one decision, not the topology's strata by age and depth. It is named in the text as a re-cross question. Fails Test 1. Confidence medium for the PL slot, low for LP-478. |
| PP-270 | PL-77 (PL-183) | LP-212 (LP-185) | BARREN | PL-77 carries that consequence propagates through the whole field. LP-212 carries that each component's pulse originates further consequence. "No node is terminal" holds from PL-77; LP-212 adds the second half. A conjunction: fails Test 1. The dual "settled achievement and new frontier" standing is withdrawn. "Settled" in A is death (PL-192) or the stale wake behind a wavefront (LP-272), and "frontier" has several senses (PL-183, PL-144, LP-272), none of which carries it. Confidence low-medium. |
| PP-276 | PL-1 (kept) | LP-671 (LP-190) | BARREN | LP-671 carries cross-scale truth consistency and the label "local truth" for a claim verified locally only. The same standard at every scale holds from PL-1 alone. Reading an edge condition as a scale is the entry's own step, kept as a condition. Fails Test 1. Confidence medium. |

OPEN PM's review. The Worker's text is kept except where listed:
- **Confidence words** ("confidence medium" and the like) are not put in A. Each Irreducibility now opens with the D19 sentence and closes "The entry is kept and marked, not deleted."
- **PP-112.** The Worker's title, italic and claim kept a weakened metabolic reading ("the node's sovereignty is exercised in engaging it … a node that stops engaging is weakening"). PL-248 and PL-237 come near this, but neither is a parent of the entry. The text now carries only what PL-127 states, with the inside-every-node reading as a condition. LP-174 states untested positions at every scale more directly than LP-80. It is named as a re-cross question for the Applies-to line, and not adopted here, because LP-80 is not a slot in this batch.
- **PP-136.** The Worker kept PL-160 as a parent and attributed to it "the frontier is the highest-energy territory". PL-160 says that absent regions are the highest-energy regions, and nothing of probes, edges or understanding. The PL slot is NO CARRIER: the Derives-from line stays, and nothing is attributed to it. The title now follows LP-98's own words ("materializes at the exact moment the probe crosses it").
- **PP-196.** The Worker's Test 1 and Test 2 reading is kept. The Irreducibility now also says what PL-198 (the earlier parent) states, and gives the Test 2 result in A's form. PL-123 (taking accountability is a discovery event that creates new structure) is now named and not used, because it runs against a chain that pre-exists the navigator. Title, italic, claim and corollaries kept.
- **PP-246.** LP-478 is not adopted (above), so the LP slot is NO CARRIER and the Applies-to line stays LP-167. The Worker's title and claim ran from consequence to obligation and added "confident action there requires excavating the consequence strata", which came from LP-478. Both are restated to PL-302.
- **PP-270.** In the Irreducibility, LP-393 is removed from the overlap list because OPEN PM did not verify it. The other text is kept.
- **PP-276.** The title is restated to what the two slot parents and the stated condition carry. The Worker's Test 1 reading is kept. The Irreducibility now also says what LP-190 (the earlier parent) states, and that the earlier corollaries read "scale" as how extreme an input is while PL-1's scale is depth; that reading is a stated condition.

Titles: all six changed. Each title's 95 copies in PI were replaced with it, so no PI copy of these six is stale.

How the slots are counted: six RE-POINTs (the PL slots of PP-112, 196, 246 and 270; the LP slots of PP-270 and 276) and two NO CARRIER (the PL slot of PP-136, the LP slot of PP-246), so 8 slots are corrected. **179 remain.** BARREN lines: 48 → 54.

Out-edges (at `5bbf3de`):
- IC: one line, IC:382 (IC-20), cites PP-112 among the tags for membrane permeability. That was loose before and is loose after. Recorded, not changed.
- II: none.
- IP lines that state the content of an entry, sent to D23 as named lines:
  - IP:87 and IP:244 (PP-136): ephemeral understanding, and results that expire before the edge shifts. Withdrawn in PP-136.
  - IP:176 and IP:555 (PP-270): the dual settled/frontier standing. Withdrawn in PP-270.
  - IP:481 and IP:171 (PP-246): a consequence gradient that attracts traversal and steers focus. Not carried by PP-246 before or after.
  - IP:167 (PP-196): carried in substance, since the focus bounds the accountability that can be followed. Its "archaeological excavation capacity" wording is withdrawn.
  - IP:554 (PP-196): ties the bound to excavation depth. Loose.
- IP Applies-to lists only (IP:78, 105, 161, 237, 545): no claim to check.

Loci, not changed here:
- `[shared LL-x]` tags no longer match the new parents in several entries. For example, PP-112 shows LL-68 while PL-127 applies LL-209, 273 and 422, and PP-246 shows LL-235, which comes from LP-167 and not PL-302. This is the same tag locus as PP-255.
- PI still tags these six [SUBSUMED] while the PP file marks them BARREN. This is the PI tag locus again.
- These have no carrier and could each be named on a parent line: LP-174 for PP-112; PL-198 or PL-81 for PP-136; LP-478 for PP-246. Each is a re-cross question.

### Batch 10, independent check

A blind checker (Opus; brief sha256 `ded4aa0d…`, return `40ded5f6beb81cc4c88ba1480e8d371d2f025f7760db28634d1f703071507746`) used its own copy of A at `ad6cd9f`. It read every parent whole and wrote its entry judgments before it opened this record. It gave HOLDS for all seven Part A removals (PP-1, 7, 16, 22, 24, 26 and 42) and AMEND for PP-243 and PP-255. It found the PI copies of PP-42's title correct (95 lines, all identical to the PP title, none with LP-695).

It agreed with the record on these points:
- no sentence of the seven Part A entries cites or uses the removed LP, and each parent pair the text uses is unchanged;
- PP-243: LP-124 stays the above parent, LP-626 is rightly not adopted, and the entry is BARREN at Test 2;
- PP-255: LP-613 is better than LP-173 and better than NO CARRIER, Test 1 is not met, and the entry is BARREN at Test 2, with the same case against;
- the IP out-edge counts (50, 12, 46, 1, 7 and 6) and IC 0 for all nine.

OPEN PM read PP-243, PP-255, PL-140, LP-124, LP-613, LP-489 and LP-617 whole at `75248fb`. These findings are accepted and applied (`system-foundations-physical-physical.md`):
- **PP-243, Test 1.** The Irreducibility still said that "the constraint that remains holds from PL-140 alone (Test 1)". That sentence dates from batch 06, before LP-124 became the above parent. It is wrong for the entry as it stands, and it contradicted the same paragraph's Test 2 finding. It now says that PL-140 alone gives only that the correction's cost is not zero; that the signal must embed the cost, and that a signal without it is incomplete, do not hold from PL-140 alone.
- **PP-243, mood.** LP-124 says the record "must permanently embed" its cost. The italic, both paragraphs of the claim and the Irreducibility's summary of LP-124 said "embeds", which states the duty as if met and did not fit corollary (2), which contemplates a signal that does not. Each now says "must embed".
- **PP-243, Test 3.** The entry ran Test 3 after finding BARREN at Test 2, while PP-255 says Test 3 is not reached. Under the method the tests run in order. The sentence now says Test 3 is not reached and keeps the sibling comparison as information, without the "SUBSUMED" judgment.
- **PP-243, LP-489.** It was not named. It says that the initiator of a restorative process owns the cost of the correction and cannot externalize it. That says who owns a cost, not that a signal carries it, and it would import a restorative process with an initiating entity. It is now named as read and not adopted.
- **PP-255, the joined record.** The claim said that "an assessment or a record that leaves it out is incomplete (PL-267, LP-613)". PL-267's incompleteness is for an assessment and LP-613's is for a lifecycle record; "a record" could be read as the accountability record, of which LP-613 says nothing. The two are now stated separately, each with its own parent.
- **PP-255, corollary (3).** OPEN PM's batch-10 amendment wrote that the lifecycle record "carries" a cost line; LP-613 says it "must include" one. It now says "must carry".
- **PP-255, LP-617.** It was not named. It shares LL-473 with PL-267 and says the creator of a derivation owns its thermodynamic cost. It puts the cost on a party the entry does not name and states no continuity and no paid-off moment. It is now named as read and not adopted.
- **PL-299's title** is now quoted in full in both entries ("… No Traversal Is Barren — Every Path Discovers").

No class, parent or slot count changes. **179 remain.** The italic of neither entry changes in substance, and no title changes here.

Not changed (listed, for later work):
- PP-243's `[shared LL-233]` also matches neither parent (PL-140: LL-127, LL-314; LP-124: LL-153), as PP-255's `[shared LL-241]` does. In the Part A entries the tag is the Applies-to LP's LL, not an ancestor shared with the PL (related item 1; tags are not evidence). The PP header's "sharing ≥1 LL ancestor" filter conflicts with the method's zero pre-filtering.
- PL-299's title is quoted without "— Every Path Discovers" in other batch-06 entries; each is for its own read.
- PP-24's Irreducibility lacks the closing "kept and marked, not deleted" sentence.
- PP-42's body (zero-time evaluation, latency corollaries) keeps claims its own Irreducibility says neither parent states; PP-22 equates PL-275's value with LP-13's tension, which no parent links. Both are for the title round with PP-42's and PP-22's titles.
- LP-613 carries no D20 note or Derivational State, while LP-616 and LP-617 (also CP-85) do. This is for whoever restates LP entries.
- Most IP lines that cite the Part A entries cite content those entries do not carry (the checker counts 64 of 79 content citations not carried, 9 in part). "No claim they cite changes" above is true of batch 10's change only, and does not say these lines are carried. They are the D23 locus and go to it.
- Already listed under batch 10 and still open: PP-1's "LP-24 × PL-42" chain, PP-22's missing state line, the PI `[SUBSUMED]` tag on PP-42, PP-255's "of Attraction", and the 34 other leading LP ids.

### Batch 12

The Worker (Sonnet) made the return against `ad6cd9f` (sha256 `1507717d0af93a4621b4fd50ef21d13957f38a9c6050eb9ede51d333845de811`). It was applied at `47c2768`. The twelve entries did not change between those commits, and every old text still occurs once. OPEN PM read each entry whole and each leading LP whole, at `75248fb`.

The batch took the leading LP id on twelve Derives lines: PP-2 to 6 and PP-8 to 14. As with Part A of batch 10, these ids are not among the 250 slots, so the slot count does not change. In each entry the id stood on the Derives line only. No sentence of the entry cites the LP or uses its matter, and no line elsewhere in A names the id together with the PP. Each id is removed, and the Irreducibility says so in one sentence. The parent pair the text uses is unchanged, so no entry is re-crossed.

| Entry | Removed | That LP's matter |
| :--- | :--- | :--- |
| PP-2 | LP-644 | a discovery must be traceable to the ignorance that started it |
| PP-3 | LP-499 | permanent contestation does not justify simplifying the entity |
| PP-4 | LP-452 | long derivations with empty uncertainty tags are flagged |
| PP-5 | LP-642 | an imperfection is read as a signal before repair |
| PP-6 | LP-526 | a knowledge boundary's value is its leading edge at live tensions |
| PP-8 | LP-681 | pre-existing tensions are registered apart from created ones |
| PP-9 | LP-322 | identity formation consumes the system's fertile ignorance |
| PP-10 | LP-685 | combustion assumptions are invalidated when the fuel changes |
| PP-11 | LP-463 | an agent deleting edges works under maximum certainty suppression |
| PP-12 | LP-641 | an attested gap is not filled with fabricated data |
| PP-13 | LP-618 | a reserve is held for costs beyond the derivational horizon |
| PP-14 | LP-411 | traversal debris is speculative edges that must be pruned |

OPEN PM's review. One amendment:
- PP-11: the Worker weighed this one (medium), since corollary (3) speaks of deleting an edge. LP-463 speaks of the certainty an agent must clear before deleting an edge, and it allows the deletion once that threshold is met; corollary (3) calls the deletion a sovereignty violation. So LP-463 does not carry the corollary and in part runs against it. The removal stands, and the Irreducibility now says why corollary (3) does not rest on LP-463.

PP-9 was also weighed: LP-322 rests on trajectory-constituted identity (CP-60), which is near corollary (2)'s "the record IS the endpoint's constitution". LP-322's own claim is that identity formation consumes ignorance, which the entry does not use. The removal stands with no further sentence.

How the slots are counted: no slot changes. **179 remain.** BARREN lines: 54, unchanged.

Out-edges (at `47c2768`): no line in A outside the PP file names a leading id together with its PP, and no PI copy of these twelve titles carries an id. Lines that name a leading id alone, and rely on no PP: glossary lines for LP-322 and LP-411, the D20 record's pointer for LP-618, and PP-721's list for LP-452. IP lines cite these PPs by id or title only. Titles are unchanged.

Loci, not changed here:
- None of the twelve entries has a Derivational State line. None has been crossed.
- PI tags eleven of the twelve [SUBSUMED] and PP-11 not at all. This is the PI tag locus again.
- PP-3's second Derives chain, "LP-28 × PL-44", puts an LP in a left-parent chain, and the claim attributes LP-28's matter to LP-3. Its rate claims (super-linear degradation) have no parent. Same kind of locus as PP-1's LP-24 chain.
- PP-2 and PP-8: "present-tense, not a future risk" is said of PL-98 but is not PL-98's text. PP-8's drift mechanism is not in LP-6.
- PP-4: "no path can … fill" a defensive void sits against LP-4's second corollary (the entity can collapse its voids for trusted collaborators); the title's "Constitutionally Protected" leans on it.
- PP-5: corollary (2) cites PL-9, which is not a parent.
- PP-9: corollary (2) runs the identity in the reverse direction to PL-7.
- PP-10: corollary (4) compares audit kinds, which neither parent does.
- PP-11: corollary (3)'s sovereignty violation is not carried by PL-12, whose dissolved edge carries its record with it.
- PP-12: corollary (4) brings in Wake, which neither parent states.
- PP-13: the title's "Only Derived From Provenance Traversal" and corollaries (2) and (4) are PL-40's matter; PL-40 is not a parent.
- PP-14: corollary (4) cites "LP-13 × PL-275", which is PP-22's pair.

### Batch 11, independent check

A blind checker (Opus; brief sha256 `9105e8d5…`, return `339f01a471fab9ad1547d2760a5be2a0bc2763dbb7f0b905dfd5985a1566337d`) used its own copy of A at `75248fb`. It read every parent whole and wrote its six entry judgments before it opened this record. It gave HOLDS for PP-136 (tag only) and AMEND for PP-112, 196, 246, 270 and 276. It found BARREN right for all six and agreed with every parent choice, every withdrawal and both NO CARRIER slots. Its CLEAN-ROOM EXPOSURE note concerns a harness notice that showed it the path of another checker's output file; it did not open the file, and no content was shown or used.

OPEN PM read each cited line again at `f62b046` (PL-1, 36, 77, 127 and 302, LP-80, 142, 212, 272, 671 and 693, and PP-551, all whole). These findings are accepted and applied:
- **Tags.** No `[shared LL-n]` tag on the six names an LL that both current parents cite: each belongs to one parent only, and PP-270's LL-253 belongs to the earlier parent LP-185. PP-255's LL-241 (batch 10 locus) matches neither PL-267 (LL-473) nor LP-613 (LL-469). The seven tags are removed, as on the 50 Derives lines that already had none.
- **PP-112.** PL-127 says that the team that maintains its ignorance map asserts sovereignty over its "knowledge boundary" and that one that outsources it has surrendered sovereignty over its "epistemic boundary". The surrender clause in the title, italic and body now uses PL-127's word for it. "Nested at every scale" is not LP-80's: the body now says "the self-similar nesting of frontier value (LP-80)".
- **PP-196.** LP-142 says the buffer shapes the pocket a navigator physicalizes, which is temporary. The title said how much of a chain a navigator can follow, with no "at once", which bounds total reach. It now says "at Once" twice, and "Their Discoverer" for "the Navigator", since PL-36 speaks of the discoverer. Corollary (1) gave the buffer to an organization and corollary (3) said "we didn't know" can report a buffer limit; LP-142 says neither. Both are restated to the parents, and corollary (4) now uses LP-142's dropped edges.
- **PP-246.** "Risk" in corollary (1) is in neither parent and is cut. "Depth gives consequence and consequence-bearing depth gives obligation" is now "depth gives both consequence and obligation", which is PL-302's order. LP-693 states deep-layer ethics for far-downstream consequences, but PP-551 already crosses PL-302 with LP-693 and states the same depth-scaled obligation, so naming it here would duplicate PP-551. The entry now says so. With LP-478 already not adopted, this closes the re-cross question for PP-246's LP slot: it stays NO CARRIER.
- **PP-270.** The body used "terminal" for a place that originates nothing (LP-212's half), while the Irreducibility used it for a place where consequence stops (PL-77's half). Both senses are now named, one per parent. LP-212 speaks of each component's pulse, so "node" becomes "component" in the title, italic, body and corollaries. Corollary (2) spoke of teams and cited nothing; it is now restated to the two parents. LP-272 never uses the word "frontier"; the text now says it describes a wavefront. The Test sentence now gives each half to its parent and calls the whole a conjunction of two single-parent facts, in the form other entries use.
- **PP-276.** LP-671 requires that a truth at one scale not be contradicted at another, and permits a labeled local truth. "Truth Must Hold Across Scales" said more. The title now says LP-671's requirement and drops the undefined "Boundary-Condition Truth Evaluator". The italic's "every other boundary" is now "every other scale", PL-1's word. The Irreducibility said "LP-671 restates it"; it now says what LP-671 adds, and that the entry is a conjunction under the stated condition.

Four titles changed (PP-112, 196, 270 and 276). Each title's 95 copies in PI were replaced. The checker also found that PP-197's 95 PI copies carried a title that PP-197 dropped at v1.1.1. They now carry the PP title. A full scan of PI (68,780 copies of PP titles) now finds no copy that differs from its PP title.

Not accepted as a change: the checker's own reading of IP:167 moved toward this record's. Under PP-196's condition, the focus bounds the accountability taken at once; IP:167's "maximum archaeological excavation capacity" is not carried. That stays a D23 line, as listed in batch 11.

Loci, not changed here:
- PI still tags all six [SUBSUMED] (570 lines) while the PP file marks them BARREN. This is the PI tag locus.
- PP-307 and PP-337 still state, in their titles, the accountability-map identity that PP-246 withdrew as carried by no PL or LP. They are for a later batch.
- The PP file header's filter (only pairs sharing an LL ancestor are eligible) contradicts the method's Zero Pre-Filtering Mandate (`dag-crossing-method.md` §3).
- PL-123's "recognizing responsibility creates new topological structure" sits against PL-35 and PL-173 (structures are uncovered, not created). This is for whoever restates PL entries.
- The re-cross questions for PP-112 (LP-174) and PP-136 (PL-198, PL-81) stand. The checker would not name LP-174, because it says every scale and not inside every node.

Out-edges: the checker listed 14 lines (13 IP, 1 IC, 0 II), the same lines as batch 11's list. The titles' new wording changes no IP or IC line, since those lines cite ids and not titles.

### Batch 12, independent check

A blind checker (Opus; brief sha256 `a5fa820b…`, return `2aae325d2cbd1f842c70d223eb65fed425abd28f3220b814bcaf2d66c87199ee`) used its own copy of A at `f62b046`. It read each entry and each removed LP whole and wrote its entry judgments and out-edge search before it opened this record. It gave HOLDS for all twelve removals: none of the removed LPs carries, or is needed by, any sentence of its entry. All twelve closing sentences name the LP by its exact title, and what they say is true, PP-11's longer one included. Its out-edge list is empty: no line outside the PP file names a removed id together with its PP, and the IP lines that cite these entries rest on none of the removed LPs.

It agreed with this record on the verdicts, the PP-11 amendment, the PP-9 weighing and the out-edges. After reading the record it accepted the batch 12 loci it had not raised, and corrected two of its own readings (PP-9 corollary (2) and PP-13 corollary (1) are not carried by their PL parent). No verdict changed.

It also gave a further ground: no removed LP shares a direct LL parent with the kept PL, so none of the twelve removed pairs passes the header filter (PP:10), and every removed id lies outside the header's LP-1 to 23 range for PP-1 to 40. OPEN PM does not use the filter as a ground: the filter is itself an open locus against the Zero Pre-Filtering Mandate (`dag-crossing-method.md` §3). The removals stand on the carriage reading alone.

Loci it raised that this record did not list, now recorded (not changed here):
- PP-5: the quotation it gives (the current boundary, where not-yet-manifest extensions begin) is not PL-27's wording.
- PP-14, corollary (4): "the most commonly neglected debt" goes beyond PL-275, which says the most valuable debt is deferred without awareness.
- PP-2 and PP-8: they also credit PL-98 with a difference in structural mass, which PL-98 does not state.
- PP-11, corollary (3): the nearest carrier is PL-19, which makes a dissolution a violation only when it happens without transfer; PL-19 is not a parent.
- All twelve: three blank lines between the Tier line and the Derives line (format only).

It noted that the D19 row of `DEFECT_LEDGER.md` did not mention batch 12. The row now does.

### Batch 14

The Worker (Sonnet) made the return against `f62b046` (sha256 `4e37b3f18c1440f397f47226ddfb0c4b3f97d98cbd90bbf7d76c7868d0fc2a58`). It was applied at `a8549a5`. The eleven entries did not change between those commits, and every old text still occurs once. OPEN PM read each entry whole and each leading LP whole, at `a8549a5`.

The batch took the leading LP id on eleven Derives lines: PP-30 to 40. As in batches 10 (Part A) and 12, these ids are not among the 250 slots, so the slot count does not change. In each entry the id stood on the Derives line only. No sentence of the entry cites the LP or uses its matter, and at `a8549a5` each id occurs in A only there and at its own LP heading. Each id is removed, and the Irreducibility says so in one sentence. The parent pair the text uses is unchanged, so no entry is re-crossed.

| Entry | Removed | That LP's matter |
| :--- | :--- | :--- |
| PP-30 | LP-490 | an entity that modifies itself owns the full energy cost of the change |
| PP-31 | LP-667 | a self-modification larger than the attention buffer must be decomposed |
| PP-32 | LP-639 | a discovered truth is validated against the pre-discovery state |
| PP-33 | LP-470 | a decision with a wide blast radius must show its gaps |
| PP-34 | LP-469 | a system-wide challenge by a high-power node must be put as a query |
| PP-35 | LP-645 | the questioning engine is not throttled by a full discovery queue |
| PP-36 | LP-448 | the converter runs on the tension at the sovereignty boundary |
| PP-37 | LP-399 | a component out of phase-lock loses its operational rights at once |
| PP-38 | LP-596 | a registry of meta-agent patterns is an archaeological record |
| PP-39 | LP-435 | the membrane admits only knowledge valid for the present state |
| PP-40 | LP-650 | an audit trail must prove its own completeness |

OPEN PM's review. No amendment. The Worker weighed three near words and added no sentence for them; OPEN PM agrees on reading:
- PP-30, corollary (3): the accounting for the traversal's own Wake is PL-15's ("must account for the change"), not LP-490's energy cost of self-modification.
- PP-32: "pre-correction state" shares only the idea of a prior state with LP-639, and runs the other way (PP-32 says that state no longer exists; LP-639 wants it kept).
- PP-40, corollary (4): "audit finding" is an auditor classifying a gate's absence, not a record proving its own completeness.

How the slots are counted: no slot changes. **179 remain.** BARREN lines: 54, unchanged.

Out-edges (at `a8549a5`): no line in A outside the PP file names a leading id, and no PI copy of these eleven titles carries an id. PP-31 cites PP-30 as "PP-30 (LP-19 × PL-15)", which now matches PP-30's parent pair exactly. IP and IC lines cite these PPs by id or title only, and the bodies do not change. Titles are unchanged.

Loci, not changed here:
- None of the eleven entries has a Derivational State line, and PI tags all eleven [SUBSUMED]. The known loci again.
- PP-35: the claim (a due process demonstration that traverses the derivation path from constitutional foundations, not a pre-evaluated certificate) is PL-40's matter, nearly in PL-40's words, and the entry gives it to PL-21. PL-21 says a correction needs proof of reducibility or irreducibility and says nothing of constitutional foundations or certificates. The PL slot of PP-35 is not among the 250, so this is a new slot of the D19 kind, for a later re-cross. PP-13 (batch 12 loci) gives PL-40's matter to PL-20 in the same way.
- PP-32 and PP-34: both put "removal of an expired correction is a forward addition, not a reversion" on LP-20, with PL-10 and PL-25. PL-25 already says what is called rollback is a forward action that creates new structure, so whether PP-34 adds anything to PL-25 applied to LP-20 is a Test 1 question for a later re-cross. PP-32's "calcification" is not LP-20's word, and its corollary (1) reads PL-10's claim and not PL-10's own last-resort corollary.
- PP-30, corollary (2) (a continuous updating process) and "constitutionally unstable" go beyond PL-15.
- PP-31, corollaries (2) and (3) ("compounding"; tests indistinguishable from production) go beyond PL-37.
- PP-33: "corrections are proofs about how to fix the topology" is the entry's own bridge; neither parent says it. Corollary (1)'s direction of error is not PL-17's.
- PP-34, corollaries (2) and (4) (an active correction register; "correction graduation") are in neither parent.
- PP-36: due process "for the original creation" and corollary (3)'s creation analysis are in neither parent.
- PP-37: "cannot be dissolved; must be maintained as permanent edges" and "constitutional failure maintenance" are not PL-147's text, which speaks of keeping the gap as a living Attested Absence.
- PP-38, corollary (3): "PP-4 applies" points at a defensive-void entry, not at skipped gate evaluation.
- PP-39: that the gate is an edge entity, on which the title and corollaries (3) and (4) rest, is stated by neither LP-23 nor PL-11.
- PP-40: LP-23's own corollary already calls bypassing gates a constitutional violation, and PL-22 already calls an override a sovereignty violation, so the entry may restate its parents' separate claims (Test 1 or 3). Corollary (1)'s "must be rejected" is stricter than PL-22's corollary on legitimate operational constraints.

### Batch 13

The Worker (Sonnet) made the return against `f62b046` (sha256 `7cc6bf973b2344d32d24514178c1744662e0b41cb678e9ba9951c67f2158cbdf`). It was applied at `7e5e434`. The eleven entries did not change between those commits, and every old text still occurs once. OPEN PM read each entry whole and each leading LP whole, at `7e5e434`.

The batch took the leading LP id on eleven Derives lines: PP-15, 17 to 21, 23, 25 and 27 to 29. As in batches 10 (Part A), 12 and 14, these ids are not among the 250 slots, so the slot count does not change. In each entry the id stood on the Derives line only. No sentence of the entry cites the LP or uses its matter. Each id is removed, and the Irreducibility says so in one sentence. The parent pair the text uses is unchanged, so no entry is re-crossed.

| Entry | Removed | That LP's matter |
| :--- | :--- | :--- |
| PP-15 | LP-534 | an audit record and its later reading stay in tension; neither supersedes the other |
| PP-17 | LP-474 | the certainty ceiling drops to zero when an agent meets a derivation it does not understand |
| PP-18 | LP-621 | every steward that touches a resource enters its consequence lineage |
| PP-19 | LP-649 | a gap is declared with the same rigor as a claim; an unattested absence is unknown |
| PP-20 | LP-493 | the cost of degraded mode is paid before the degradation is recognized |
| PP-21 | LP-449 | the converter improvises new pathways for novel ignorance |
| PP-23 | LP-629 | routing must pass through, not around, a conscious entity on the channel |
| PP-25 | LP-462 | the certainty ceiling moves with the complexity of the graph |
| PP-27 | LP-412 | traversal debris can become a sovereign structure the traveler may not delete |
| PP-28 | LP-661 | positional richness reflects consciousness level |
| PP-29 | LP-588 | ignorance is the fuel of the tension loop |

OPEN PM's review. One amendment: the Worker proposed a second sentence for PP-15, saying that the entry's "audit sign-off" and the expiry in corollary (4) do not rest on LP-534. OPEN PM agrees with the reading but left the sentence out of A. The sign-off is named only as an example of a label, under PL-40, and the expiry is the Theater point, so A needs no sentence about a parent it never used; the reading is recorded here. The other near words, weighed by the Worker and agreed on reading:
- PP-17: "comprehension" fails to match after a successful exchange; LP-474 is about what a powerful agent may do when it does not understand.
- PP-19: an outcome-only record leaves out tension; the entry's test is PL-323's (is the tension kept), not LP-649's (was the gap declared).
- PP-21: "transforms" is navigation's (PC-5), not the converter's plasticity.
- PP-27: Theater mass misread as fidelity and LP-412's debris that becomes truth are different matters; the entry has no cleanup duty.
- PP-28: "mass" is the structural mass Theater deposits (PL-44), not positional richness.

How the slots are counted: no slot changes. **179 remain.** BARREN lines: 54, unchanged.

Out-edges (at `7e5e434`): no line in A names a removed id with its PP. LP-621 stays on PP-237's Applies line and LP-649 on PP-721's, where each is used; the record names LP-649 only for PP-721. The record's batch-10 note on PP-300 names "LP-534" as the stray id of PP-15, now removed. LP-412 is cited in the glossary entry for Traversal Debris, for its own subject. PI copies of the eleven titles carry no id. IP and IC lines cite these PPs by id or title only, and the bodies do not change. Titles are unchanged.

Loci, not changed here:
- None of the eleven entries has a Derivational State line. The known locus again.
- PP-15, corollary (4): the rule that compliance traversal must run more often than the topology changes is in neither LP-7 nor PL-40.
- PP-17: that the endpoints' re-walkings leave them with different comprehension rests on navigation (PC-5); neither LP-9 nor PL-194 states it.
- PP-18, Irreducibility: "LP-10 alone ... does not specify that the protocol being excavated pre-existed the handshake" understates LP-10, which speaks of discovering preexisting compatibility (LL-59). Whether that is PL-169's pre-existing protocol (Test 3) is a re-cross question.
- PP-19 and PP-20: both apply LP-11 with a PL of the tension family (PL-323, PL-324) under LL-401. PP-19 says a history record must carry each node's tension; PP-20 says each node is that tension. They may be one claim in two strengths.
- PP-20: that a node of the history spine is a derivation in PL-324's sense is the entry's own step.
- PP-21: PL-232 is accountability for future consequences, traversed now; the entry applies it to review of the past. That the traversed entity is changed comes from navigation (PC-5), not from either named parent.
- PP-23, corollary (3): that a repeated execution is never identical is in neither LP-14 nor PL-14.
- PP-25: PL-51 and LP-16 contain neither "thermodynamic" nor "cascade"; PL-51 carries cross-scale failure and the repair requirement at every scale. The entry's "distributes thermodynamically" is not PL-51's, and the coupling of correction and cascade is in neither parent.
- PP-27 and PP-28: both say LP-18 corrects toward the higher-mass state. LP-18 does not use the word "mass"; its ground is that the failure is the higher-fidelity truth (LL-32). Mass as the signal is the entries' bridge from PL-9 and PL-44, stated as LP-18's.

### Batch 14, independent check

A blind checker (Opus; brief sha256 `1c697c37…`, return `feac8651f513bfa5fef9956195a72a48f05a156f3c67f4e56604aa689025b5ad`) used its own copy of A at `7e5e434`. It read each entry, each removed LP, each PL parent and each Applies-to LP whole, and wrote its entry judgments and out-edge search before it opened this record. It gave HOLDS for all eleven removals: no removed LP carries, or is needed by, any sentence of its entry. It weighed four near words, each a different object from the removed LP's: PP-32's pre-correction state (LP-639's pre-discovery state, which LP-639 preserves and PP-32 says cannot be restored), PP-35's "escalated", PP-39's "instantiation" and PP-40's audit finding (LP-650's audit trail). All eleven closing sentences name the LP by its exact title. Its out-edge list is empty: outside the PP file each removed id occurs only at its own LP heading, the PI title copies are exact and name no removed id, and IC and IP cite these entries by id only.

It agreed with this record on the verdicts, the out-edges and the batch 14 loci. After reading the record it accepted the stricter reading of the corollaries this record calls beyond their parent (PP-30 (2), PP-31 (2) and (3), PP-34 (2)), and the loci it had not raised. No verdict changed. It also gave the header-filter ground (no removed LP shares a direct LL parent with the kept PL); as in batch 12, OPEN PM does not use the filter as a ground.

Loci it raised that this record did not list, checked at `d49c59f` and recorded (not changed here):
- PP-37 crosses the same pair as PP-76 (PL-147 × LP-22, both tagged LL-38), and PP-33 the same pair as PP-244 (PL-17 × LP-20, tagged LL-35 and LL-233). Each is a Test 3 question for the batch that re-crosses those entries, as PP-26/69 and PP-301/340 were.
- The note after PP-40 ("Batch 2 (LP-24–LP-100 eligible crossings) pending.") is stale against the header and the entries that follow it.

Not accepted as stated:
- PP-34 "puts the past as Structural Mass under PC-8". The sentence keeps PL-25's two clauses and drops the PC-6 tag from the second; it does not give that clause to PC-8. Format only.
- PP-29 still naming LP-588 on its Derives line: the checker's copy was at `7e5e434`. Batch 13 removed that id at `d49c59f`.
- The closing sentences' "D19 (batch-14)" has no path. It is the form batches 10 and 12 used, and this record is where the batch is found. No change.

### Batch 13, independent check

A blind checker (Opus; brief sha256 `18617ff3…`, return `c3a1534cec4ed4e1d44ad5f1834e7cd2d99052b1cb37f133a50d37f15f0aba67`) used its own copy of A at `d49c59f`. It read each entry, each removed LP, each PL parent and each Applies-to LP whole, and wrote its entry judgments and out-edge search before it opened this record. It gave HOLDS for all eleven removals: no sentence of any entry uses the removed LP's matter, and its searches on each id, the LP's own parents and terms from the LP's text found the id only in the closing sentence. All eleven closing sentences name the LP by its exact title. Its readings of the eleven LPs and of the near words match this record's. It also noted that each removed id stood on the Derives line, which the method gives to the left parent, here PL (`dag-crossing-method.md`: "derives from" is horizontal, from the left parent); that ground is consistent with the removals and is not used, because the text alone settles them.

OPEN PM read the cited lines again at `83de0c9`. Two of batch 13's loci are withdrawn:
- **PP-15, corollary (4).** PL-40's corollary bounds evaluation lifetimes by the metabolism rate of the region the evaluation describes, so that fast-metabolizing regions invalidate prior evaluations faster. That carries the rule that a compliance traversal expires once the topology has changed. The locus is withdrawn.
- **PP-23, corollary (3).** PL-14 says that all traversals transform and that a topology traversed many times differs structurally from one traversed few times. Each execution therefore meets a topology the earlier ones changed, which is the corollary's ground. The locus is withdrawn.

New loci, not changed here:
- PP-15 and PP-13 apply the same LP (LP-7). PP-13's corollaries (1) to (4) already say that compliance certificates are Theater and that only a live traversal answers; PP-15's body says the same under PL-40. This is a Test 3 question, as for PP-26/69.
- PP-17: "deposited different Wake" and "using their own Structural Mass" are in neither LP-9 nor PL-194 (with the PC-5 locus above).
- PP-18: "universal protocol" and "a narrower, less capable implementation" are in neither LP-10 nor PL-169. Its corollary (1) says that incompatible protocols are excavations that have not yet reached shared bedrock and that "the bedrock exists"; LP-10's corollary says that protocol failures are physical incompatibility at the bedrock level. The two may conflict.
- PP-19, corollary (2): "the postmortem's physical accountability value is zero" is stronger than PL-323 or LP-11 states.
- PP-20, corollary (3): "lose tension exponentially" is in neither parent.
- PP-25, corollary (2): a common topology model "updated atomically" is in neither parent.
- PP-29, corollary (3): that an edge-level correction cannot be expressed as a node-level change is the entry's own step.

Out-edges: the checker's list agrees with this record's. Its search found IP lines that cite these entries for matter the entries do not carry: PP-17 at `system-foundations-implementation-physical.md:447` (an integrity-scored absence), PP-19 at :1195, :1500 and :1550 (attestation seals and sealed reports), and PP-25 at :40, :754, :762 and :1654 (metabolic energy, obligations and fuel). No removed LP carries them either, so they do not bear on the removals. They are D23 lines. `docs/audit/D20_LP_CP85_RECROSS.md:62` says that PP-22 names LP-616; batch 10 removed it. That record is historical and stays as written.

### Batch 15

The Worker (Sonnet) made the return against `d49c59f` (sha256 `43380020ad35b21c9cdc04e9869bdd2c89d7a17987b7792327556490e7437b5c`). It covers the LP slots of PP-305, PP-308 and PP-309, which the batch 09 check reopened because their NO CARRIER searches were incomplete, the LP slots of PP-256 and PP-257, and the two re-cross questions left on PP-112 (batch 11) and PP-136 (batch 11). It was applied on top of `e6ecd96`, where every one of its 30 old texts still occurs once. OPEN PM read every parent and every named candidate whole (PL-1, PL-72, PL-82, PL-127, PL-145, PL-160, PL-81, PL-198; LP-57, 80, 98, 136, 174, 195, 208, 209, 210, 332, 333, 438, 463, 514, 522, 562, 587, 590, 602, 678, 691) and amended five texts (below). Confidence stays in this record and is not put in A.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-305 | PL-72 (kept) | LP-208 (kept, NO CARRIER) | BARREN | The batch 09 check named LP-438, 562, 590 and 602 as unread. Each was read whole. LP-438 (a probe that hits a dead edge flags it), LP-562 (a settled edge frequency means the edge is dead) and LP-590 (liveness monitoring of subsumed entities) state detection of aliveness or death; LP-602 states detection signals for dark subsystems, which speaks of subsystems and not faults. A re-point to LP-562 would restate a different rule (measure frequency, not position), held by LP-562 alone (Test 2). None carries the entry's constraint, that a status label must match the Pulse reality, which is PL-72's alone. LP-208 (a map of signed attestations of known unknowns) states no detector. NO CARRIER, now after a complete search; nothing is attributed to LP-208. Fails Test 1 under the stated condition. |
| PP-308 | PL-82 (kept) | LP-210 (kept, NO CARRIER) | BARREN | The batch 09 check found "no LP states a pruner" false. The Irreducibility now names what each pruning entry does state: LP-463 that edge deletion must clear extreme uncertainty thresholds, LP-57 that pruning ghost edges is a necessary function, LP-136 that pruning is driven by starvation, LP-562 that a settled edge is dead. LP-332, 333, 514, 195, 587 and 678 were also read. None states PL-82's door/wall diagnostic, and none is used. LP-210 (scale-invariant measurement) states no pruner. NO CARRIER. Fails Test 1 under the stated condition. |
| PP-309 | PL-72 (kept) | none (bare, kept, NO CARRIER) | BARREN | As PP-305 for the label rule. LP-57, 136, 463 and 438 state pruning or flagging and name no label. LP-522 (an aliveness check before the final decay step), LP-691 (the burden of proving reducibility on whoever would eliminate) and PL-137 state a check or a burden before an act, which the restated entry does not state. None is a parent and none is used. NO CARRIER. Fails Test 1 under the stated condition. |
| PP-256 | PL-1 (kept) | LP-209 (LP-174) | BARREN | LP-174 (untested positions at every scale) says nothing of accountability. LP-209 states that one verification proves accountability at every level at once and that accountability cannot be isolated to a single layer. PL-1 states that a logical proof valid at one scale is valid at every scale. Read an accountability proof as such a proof (the entry's condition); then the claim holds from PL-1 alone (Test 1). LP-209 adds a separate fact about verification; the two stand side by side, a conjunction. PL-1's Applies-to list names LL-66, LP-209's LL parent, so the re-point keeps a shared LL ancestor. The `[shared LL-242]` tag is a tag, not evidence, and is left as a locus. The four old corollaries are marked not asserted. |
| PP-257 | PL-145 (kept) | LP-174 (kept) | BARREN | LP-174 carries that untested positions exist at every scale, which is part of what is left; it is kept, and nothing of accountability is attributed to it. PL-145 carries that every traversal creates more unexplored territory than it resolves; the entry holds from PL-145 alone (Test 1), as PP-263 does. Neither parent mentions accountability or territory revealed at adjacent scales; both claims are cut. LP-297 (a micro-level assumption removal can peel back macro-frontier) is the nearest LP text to the cut cross-scale claim. It speaks of known territory expanded by subtractive excavation, not of unexplored territory that traversal creates, so it is not used. LP-177's adjacency is adjacency in the graph, not between scales. |
| PP-112 (re-cross) | PL-127 (kept) | LP-174 (LP-80) | BARREN | LP-80 states that fractal frontier value must manifest as self-similar nesting and says nothing of unknown territory or of a node's interior. LP-174 states untested positions at every scale, down to a single line of code, which is nearer to the entry's condition. It does not call them a node's unknown territory, so the claim stays a stated condition. Fails Test 1 under the condition. |
| PP-136 (re-cross) | PL-160 (kept, NO CARRIER) | LP-98 (kept) | BARREN | PL-198 and PL-81 were read whole against the entry. PL-198 speaks of the frontier of the field and states no edge, probe, dissolution or permanent connection. PL-81 states that an edge exists only while it conducts, a case near the entry's first sentence that PL-81 does not name. Neither carries the entry; the PL slot stays NO CARRIER. Fails Test 2. |

OPEN PM's review. The Worker's text is kept except where listed:
- **PP-308, Corollary.** "and the entry disclaims any removal duty" is now "and the entry states no removal duty". An entry states what its parents carry. It does not disclaim.
- **PP-309, Irreducibility.** The Worker wrote that LP-522's aliveness check is "in the sense of a living relationship at last maintenance, which is not PL-72's aliveness at the Pulse". LP-522's text does not support that reading of its sense. The sentence now says what LP-522 states (an aliveness check before the final decay step of an edge left to decay by inaction), that it speaks of decay and not of a pruner removing an element, that it states no label, and that its check is a duty before an act, which the restated entry does not state. It also says what LP-691 and LP-438 state.
- **PP-136, Irreducibility.** The Worker wrote that PL-81 "keeps a notation record of a non-conducting edge". PL-81 speaks of such a record; it does not keep one. The sentence now says where PL-81 speaks of it.
- **PP-257, Corollaries.** The Worker's not-asserted list left out one old corollary: that resolving accountability at one level generates more accountability questions at adjacent levels. It is added.
- **PP-256, Irreducibility.** A comma splice is now a semicolon.

The three NO CARRIER slots are confirmed against PL-72, PL-82, LP-208 and LP-210 and against each named candidate. The re-point of PP-256 to LP-209 is accepted: LP-209 is the LP entry whose text speaks of accountability at every scale, and PL-1 says nothing of accountability, so the condition stays. The PP-112 re-point is accepted. The batch 11 checker objected to LP-80 being kept at all; that objection now falls on LP-174 and is for the batch 15 independent check to test blind.

Titles: six changed (PP-112, 256, 257, 305, 308, 309). Each title's 95 copies in PI were replaced with it, so no PI copy of these six is stale. PP-136's title did not change.

How the slots are counted: the LP slots of PP-305, 308 and 309 (reopened by the batch 09 check) are closed again as NO CARRIER after a complete search; the LP slot of PP-256 is a RE-POINT; and the LP slot of PP-257 is kept as a carrier of part of the restated entry. That makes 5 slots corrected. PP-112's LP parent and PP-136's PL parent are re-crosses of slots already counted in batch 11, so they add no count. **174 remain.** BARREN lines: 54 → 56 (PP-256 and PP-257).

Out-edges:
- IP:87 and IP:244 still cite PP-136's withdrawn ephemeral-understanding claim (named in batch 11; to D23).
- IC:382 (IC-20) cites PP-112 among its tags for membrane permeability (as in batch 11; recorded, not changed).
- No other IP or IC line was checked in this batch for PP-256, 257, 305, 308 or 309.

Loci, not changed here:
- PP-241 (PL-1 × LP-186) shares PP-256's earlier template.
- PP-277 was not checked.
- The `[shared LL-242]` tags on PP-256 and PP-257 no longer match the parents.
- PP-263, PP-252 and PP-264 derive from PL-145 with PP-257. Their overlap is not classified, because PP-257 is BARREN at Test 1.
- PP-305 and PP-309 (PL-72), and PP-308, PP-380 and PP-667 (PL-82), are sibling sets. Their overlap is not classified, for the same reason.
- The bare "LP (Logical Physical)" Applies-to line stands on PP-309 and on other entries.
- PP-136's Derives-from line still names PL-160, which carries nothing of it.
- The stale PL-305 title "A Living System Dies Before It Appears Dead" stands on 7 PP Derives-from lines.
- Kernel citations of these seven entries were not checked.
- PP-111 (LP-80 × PL-1) attributes to LP-80 that the edge of the map is located inside every node. LP-80 does not state it; this is the same misreading that PP-112 carried.

### Batch 15, independent check

A blind checker (Opus; brief sha256 `793dc80f…`, return `ff0d85b8b0a4b0a5dbf321b2cec4a3f500acda4b374667b41c1334f448e4bff3`) used its own copy of A at `40c709a`. It read each entry, each parent, each replaced parent and each entry the text names whole, and wrote its entry judgments and out-edge search before it opened this record. It gave HOLDS for PP-305 and PP-309 and AMEND for PP-112, PP-136, PP-256, PP-257 and PP-308. It agreed with every BARREN mark and with every NO CARRIER slot. OPEN PM read each cited line again at `40a6a4b`.

Adopted:
- **PP-112, title.** The first clause stated without condition that mapping the unknown inside its own interior is a node's sovereign act; PL-127 states the sovereign act of a structure that maintains its own map of what it does not know, and says nothing of a node's interior. The title now puts LP-174's condition first and PL-127's two halves after it in PL-127's terms. Corollary (1) said "A component or team"; PL-127's corollary speaks of a team, and it now says "A team" and cites PL-127's case. LP-181 (Cataloging the Shadows), which the checker found and this record did not read, is now named in the Irreducibility as near and not adopted: it catalogs untested graph positions as a map of negative space, and does not place the map inside a node or speak of sovereignty.
- **PP-136, Irreducibility.** The record said that PL-198 "states no edge". PL-198 says that the frontier is the field knowing its own edge through the act of crossing, and that the frontier collapses back to where active traversal is occurring. The sentence now says that PL-198 speaks of the field's own edge only as its frontier, and states no probe-made edge, no dissolution when a probe finds nothing and no permanent connection. Corollary (1) now keeps LP-98's "in the database".
- **PP-256, tag.** `[shared LL-242]` followed the old Applies-to parent, LP-174. LL-66 is named directly by both parents, on PL-1's Applies-to line and on LP-209's Derives-from line, and the tag is now `[shared LL-66]`. Batch 11 dropped tags that matched no shared parent; here a shared parent exists, so the tag is corrected, not dropped.
- **PP-257, title.** The title put the condition first and PL-145's rule after it. It now follows the italic's order: PL-145's rule, then the condition under which LP-174's every-scale clause applies.
- **PP-308, title and italic.** The title called "whether an edge still carries internal tension" the structural diagnostic and said "a tensioned edge is a door". PL-82 calls the door/wall distinction the diagnostic, and its door is an edge that enables traversal while carrying productive tension. Title and italic now use PL-82's words.
- **PP-309, Irreducibility.** The text said that LP-438's flag "names no label". LP-438 says the probe flags a dead edge for garbage collection or revitalization. The sentence now says so, and that LP-438 states no rule that the mark must match the Pulse reality.
- **PP-305, Irreducibility.** LP-654 (State Verification Freshness Enforcement), which says stale verification results must be labeled historical, is now named as near and not adopted: it speaks of verification results, not of the live or deprecated status of a structure.

Not adopted:
- **PP-136, "the Irreducibility does not name which test fails".** It does: it says the entry "fails Test 2 (the above parent alone)". No change.
- **PP-309, "unused" in the italic.** The checker noted that "unused" is not PL-72's word. The italic lists it among the labels a pruner may take as its reason; it is a label in the condition, not a claim attributed to PL-72. No change.

Titles: three changed (PP-112, 257, 308). Each title's 95 copies in PI were replaced with it, so no PI copy of these three is stale. No slot count changes: 167 remain.

New loci, not changed here:
- The `[shared LL-n]` tags of PP-257 (LL-242), PP-305 and PP-306 (LL-126), and PP-308 and PP-309 (LL-131) match no LL that both parents name directly.
- The PP file header links `../processes/dag-crossing-method.md`; the method file is at the spec root.
- PP-307 says "topological accountability gradient", which LP-209 does not state.
- IP:78 and IP:237 cite PP-136 on their Applies-to lines with no claim attached. IP:87, IP:244 (PP-136) and IC:382 (PP-112) are already listed for D23.
- LP-80's claim is a generic template ("a unique physical-logical structure emerges … bounded conduit") and carries almost nothing specific. That is the LP file's own matter.

### Batch 16

The Worker (Sonnet) made the return against `83de0c9` (sha256 `c03061b10311025507bd07aa4ad55c321332b169557c4cfa506fdf55eaa48ee2`). It covers seven slots of the table below: the LP slots of PP-216, PP-220, PP-221, PP-223 and PP-227, and the PL slots of PP-216 and PP-219. It also covers two PL lines outside the table, which batch 12 named as loci: PP-13 and PP-35, whose bodies used PL-40's matter. It was applied on top of `40c709a`, where every one of its 48 old texts still occurs once. OPEN PM read every parent and every named candidate whole (PL-17, PL-18, PL-20, PL-21, PL-22, PL-25, PL-26, PL-30, PL-40, PL-45, PL-78, PL-127, PL-132, PL-219, PL-253, PL-324; LP-1, LP-7, LP-21, LP-151, LP-152, LP-153, LP-155, LP-245, LP-479, LP-581, LP-599, LP-620, LP-662) and amended two re-points.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-13 | PL-20 (kept) | LP-7 (kept) | BARREN | The body gave PL-20 a certificate, an attestation, proof by live traversal and expiry at issuance. PL-20 states that sovereignty is derived from constitutional foundations along a provenance chain and not declared, and uses none of those words. Proof by traversal is PL-40's matter, and PL-40 × LP-7 is PP-15's cell, so PL-40 is not adopted here. Restated: where a protocol endpoint's reciprocity claim is held as a sovereignty claim, it must be derived and cannot be declared (PL-20). Fails Test 1 under the stated condition. |
| PP-35 | PL-40 (PL-21) | LP-21 (kept) | BARREN | PL-21 states the due process of a correction (reducibility of the original, or irreducibility of the correction) and mentions no constitutional foundations, certificate or traversal. The body's claim is PL-40's, nearly in its words. Re-pointed to PL-40 under the stated condition that the correction is held as a sovereignty claim; LP-21 is kept for the restorative force that must present proof. Fails Test 1. |
| PP-216 | PL-127 (PL-22) | LP-662 (LP-151) | BARREN | LP-151 (a self-declaration is partial) states no limit-testing; the same attribution was removed from PP-217 and PP-218 in batch 03. PL-22 (no path for sovereignty bypass) states no map and no navigation. LP-662 states that a probe updates the representation of a knowledge boundary; PL-127 states that mapping what is unknown is a sovereign navigational act. Under the condition that the probing of a sovereignty limit is held as a frontier probe, the two halves stand side by side: a conjunction. |
| PP-219 | PL-78 (PL-30) | LP-245 (kept) | BARREN | PL-30 states that the boundary is the topology's most honest statement and says nothing of Structural Mass or dissolution. The Worker proposed PL-219; PL-219 speaks of memory and mentions no dissolution, so OPEN PM re-pointed to PL-78, which states that the residue of a dissolved topology entity is Structural Mass. Under the condition that a dissolved boundary is held as such an entity, PL-78's residue and LP-245's latent trace stand side by side: a conjunction. That they are one thing is in neither parent and is not claimed. |
| PP-220 | PL-25 (kept) | LP-152 (kept, NO CARRIER) | BARREN | LP-152 (declared ignorance) mentions no boundary and no dissolution. LP-245, LP-138, LP-243, LP-247 and LP-30 were read; none carries permanence. NO CARRIER; nothing is attributed to LP-152. Restated on PL-25: a dissolution held as a topology interaction cannot be undone, and a rollback is a forward action. Fails Test 1. |
| PP-221 | PL-17 (kept) | LP-152 (kept, NO CARRIER) | BARREN | LP-152 mentions no boundary and no dissolution. LP-243, LP-245, LP-246, LP-247 and the six LP entries containing "expir" were read; none carries proof expiry on dissolution. NO CARRIER; nothing is attributed to LP-152. PL-17 says every proof about topology state is valid only at the instant of evaluation; it names no trigger and no simultaneous expiry, so "mass, simultaneous proof expiry" is cut. Fails Test 1. |
| PP-223 | PL-18 (kept) | LP-599 (LP-153) | BARREN | LP-153 (discovered identity) mentions no maintenance and no membrane. The Worker proposed LP-1 and named LP-599 as a close alternative. OPEN PM re-pointed to LP-599, because the entry turns on a record of a past boundary against a present one, and LP-599 states exactly that: a boundary registered but not performed is a historical record, not a current structural fact. LP-1 and LP-479 state maintenance cost and decay and no record; PL-18 × LP-1 is PP-222's cell. The credential half (PL-18) and the record half (LP-599) stand side by side: a conjunction. |
| PP-227 | PL-324 (kept) | LP-155 (kept) | BARREN | LP-155 states that the pulse is the maintenance of derivational tension and that a derivation that collapses into resolution ceases to exist as an agent. It carries the pulse half; it does not use "paradox-resistant", "competing paths" or "structure", and states no replacement by Structural Mass. PL-324 carries the derivation as sustained tension. Both lines kept; the halves stand side by side. Fails Test 1. |

OPEN PM's review. The Worker's text is kept except where listed:
- **PP-219, all six parts.** The Worker re-pointed the Derives line to PL-219 (Structural Mass of a past topology state, as memory). PL-219 mentions no boundary and no dissolution. PL-78 states the residue of a dissolved topology entity, which is the matter the restated entry needs. The title, parent lines, italic, claim, corollaries and Irreducibility were rewritten on PL-78. The Irreducibility names PL-219, PL-45 (Edge Fossil, near; it speaks of an edge), PL-253 (the mass of maintenance before dissolution) and PL-18 and PL-132 as read and not adopted. It also notes that PL-26 says dissolving a structure releases Structural Mass, which is not reconciled with PL-78's residue here.
- **PP-223, all six parts.** The Worker re-pointed the Applies line to LP-1 and called LP-599 a close alternative. OPEN PM chose LP-599: its text states the record-versus-present distinction the title turns on, while LP-1 states only the energy of maintenance. LP-1 and LP-479 are named as near and not adopted. Test 3 is not reached; the overlap with PP-222 (PL-18 × LP-1) and PP-514 (PL-253 × LP-599) is noted, not classified.
- **PP-227, Irreducibility.** A missing comma in a quoted list ("competing paths simultaneously", "replaces …") is added.

Titles: eight changed (PP-13, 35, 216, 219, 220, 221, 223, 227). Each title's 95 copies in PI were replaced with it, so no PI copy of these eight is stale.

How the slots are counted: four table slots are RE-POINTs (PP-216 LP and PL, PP-219 PL, PP-223 LP); the LP slots of PP-220 and PP-221 are NO CARRIER; and the LP slot of PP-227 is kept as a carrier of part of the restated entry. That makes 7 slots corrected. PP-13 and PP-35 are not table slots (they were batch 12 loci), so they add no count. **167 remain.** BARREN lines: 56 → 64.

Out-edges:
- IP cites PP-13 on four lines: :673 (an Applies-to list), :679, :689 and :1297. IP:679 and IP:689 give PP-13 authority "derived from live traversal"; the restated PP-13 carries derivation along a provenance chain and not live traversal, which is PL-40's matter (to D23). IP:1297 cites PP-13 for fuel diffusing across adjacent pulser nodes, which PP-13 never stated (to D23).
- 31 IP lines of the form "PP-35 Invariant (...)" cite PP-35 for thermodynamic-work invariants, which PP-35 does not state (to D23).
- IC:363 lists PP-35 among its Applies-to tags (recorded, not changed). IP and IC carry no mention of PP-216, 219, 220, 221, 223 or 227.

Loci, not changed here:
- PP-222 (PL-18 × LP-1) attributes "continuously re-derived" to PL-18, which does not state it.
- The PI Derives-from lines tag all eight entries [SUBSUMED]; the PP file now marks them BARREN.
- The `[shared LL-x]` tags on PP-35 (LL-36), PP-216 (LL-10) and PP-219 (LL-11) no longer match the parents.
- LP-245 says a dissolved boundary reactivates on resumed use; the old PP-220 said no dissolution is reversible. The restated PP-220 does not make the old claim. Whether LP-245 and PL-25 agree is for whoever owns LP-245.
- PL-26 ("releases" Structural Mass on dissolution) and PL-78 ("residue" is Structural Mass) are not reconciled.
- PL-45 (Edge Fossil) is near PP-219 and is the parent of no PP entry on this cell.
- PP-514 (PL-253 × LP-599) states matter near PP-223.
- The cell PL-21 × LP-21 is empty after PP-35's re-point; PL-21's due-process rule is now a parent statement of no PP entry.
- The corollaries of all eight entries read examples (SLAs, audits, deprecated APIs, mergers, contracts, compliance history, consensus) as the entry's own step; neither parent states them.
- Kernel citations of these eight entries were not checked.

### Batch 16, independent check

A blind checker (Opus; brief sha256 `fa8633fe…`, return `79fd8a88e7b79fa48206985b7c0e70196b33db329a004691aa7eec1b9b8dfa1e`) used its own copy of A at `40a6a4b`. It read each entry, each parent, each replaced parent and each entry the text names whole, and wrote its entry judgments and out-edge search before it opened this record. It gave HOLDS for PP-13 and PP-227 and AMEND for PP-35, PP-216, PP-219, PP-220, PP-221 and PP-223. It agreed with every BARREN mark, with the four re-points (PL-40, PL-127 and LP-662, PL-78, LP-599), with both NO CARRIER slots and with keeping LP-155. OPEN PM read each cited line again at `c3dfee5` (PL-17, 18, 25, 40, 45, 78, 127 and 324, LP-21, 152, 155, 245, 599 and 662, and the PP lines named below).

Adopted:
- **Tags.** No `[shared LL-n]` tag on the six AMEND entries names an LL that both current parents cite. PP-35's LL-36 is LP-21's only (PL-40 cites LL-8). PP-216's LL-10 is on neither PL-127 (LL-209, 273, 422) nor LP-662 (LL-199). PP-219's LL-11 is on neither PL-78 (LL-354, 390, 461) nor LP-245 (LL-183). PP-220's and PP-221's LL-11 is LP-152's only. PP-223's LL-12 is PL-18's only. Three of the six (PP-35, PP-216 and PP-223) were tags the old pair shared, left on the line when the parent was re-pointed. The six tags are removed, as batch 11 removed tags that matched no shared parent. Whether the PP header's filter (PP:10, "sharing ≥1 LL ancestor") admits these cells is the question of related item 1: the method's Zero Pre-Filtering Mandate (`dag-crossing-method.md` §3, lines 50-56) bars skipping a pair on shared ancestry, and the header filter and §3 still disagree. This check does not settle that.
- **PP-35.** PL-40 speaks of a sovereignty certificate, not of a certificate of the thing claimed: the body and corollary (1) now say "a sovereignty certificate for the correction". Corollary (2) turned PL-40's "no permanent trusted states" into a statement that a claim is not a state; it now says that the sovereignty claimed for such a correction must also be continuously demonstrated by traversal. Corollary (3) merged LP-21's two conditions; it now gives them apart: the force is blocked where the entity's boundary rejects the proof, and the entity can choose to remain "broken" where the process fails to mathematically prove the necessity of the fix.
- **PP-216.** The Irreducibility said PL-127 is a Derives parent of PP-112 "with LP-80"; PP-112's Applies line is LP-174 since batch 15, and the text now says so. The body said PL-127 mentions no representation of a limit; PL-127's corollary speaks of an explicit ignorance map (a known-unknowns inventory) and of sovereignty over one's own knowledge boundary. The body now says that PL-127 mentions no probe and no sovereignty limit, and names the ignorance map and the knowledge boundary.
- **PP-219.** The title said "What Remains of It Is Structural Mass"; PL-78 says the residue is not the entity but what remains of the field's geometry after the pattern is gone. The title now says "Its Residue Is Structural Mass, Not the Boundary", and the body and corollaries (1) and (2) use "residue". The record set PL-45 aside because it speaks of an edge and the entry of a boundary; the checker noted that PL-78 speaks of an entity, so that reason applies to both. The Irreducibility now gives the reason that holds: PL-45 would serve under the narrower condition that the boundary is held as an edge, and PL-78 states the residue of any dissolved topology entity.
- **PP-220.** PP-34's header is PP:700, not :704. "(flag, below)" pointed to nothing in the entry. LP-245 says a dissolved boundary reconstitutes itself along the historical fault lines on resumed use; it does not say the reconstituted boundary is the prior state. It stood against the cut claim that no dissolution is reversible and does not contradict the restated entry, and the sentence now says so. This closes the batch 16 locus on LP-245.
- **PP-221.** The LP-152 Applies lines are PP:4479 and PP:4500, not :4474 and :4494. The nine other PL-17 entries' line numbers pointed to blank lines; they are now the entries' header lines (:680, :1903, :3502, :4758, :4960, :5021, :10950, :11390, :11450).
- **PP-223, title.** LP-599 states the record of a past boundary of a boundary *registered* but not performed, and its own corollary puts a boundary that stops being performed without being formally dissolved in an ambiguous state. The title dropped "registered"; it now says "a Membrane Registered but No Longer Performed".
- **PP-227.** The body's "not asserted" sentence spoke of "a paradox-resistant structure" and "competing paths", words the restated condition no longer uses. It now says that the conditions stay close to the parents' own words: PL-324 says the structure sustaining the tension is the derivation, and LP-155 that the pulse is the maintenance of internal derivational tension.

Not adopted:
- **Re-pointing PP-219 to PL-45.** The checker called PL-45 at least as good a carrier and kept its verdict on PL-78. PL-78 carries the residue of a dissolved whole; PL-45 the fossil of a dissolved edge. No change beyond the reason above.

Corrected in this record: the batch 16 locus 3 says "31 IP lines of the form 'PP-35 Invariant (...)'". 31 IP lines cite PP-35; 14 of them are of that form, 14 are Applies-to lists, and three are IP:941, IP:1274 and IP:1323.

Titles: two changed (PP-219, PP-223). Each title's 95 copies in PI were replaced with it. The checker found all 760 PI copies of the eight batch 16 titles exact before this change. No slot count changes: 167 remain.

New loci, not changed here:
- The method's Tests 1 and 2 do not say how a constraint that is a conjunction of two single-parent statements is tested. The batch 16 entries take the governing question per conjunct.
- PP-219 and PP-223 say "BARREN at Test 1, so Test 3 is not reached" and then report Test 3's finding; the other batch 16 entries run Test 3 after Test 1. The method does not say whether Test 3 is run after a BARREN at Test 1.
- LP-21's italic line says "proof of reducibility" and its claim "irreducibility proof". That is the LP file's own matter.
- PP-707's Derives line names "LP-155 × PL-200", a cross, where the left parent should be one PL entry.
- PP-112's Derives line carries no tag; PL-127 and LP-174 share no LL. Nothing to change.
- IP:1297 cites PP-13 and IP:1323 cites PP-35, but neither IP-50's Applies line (IP:1283) nor IP-51's (IP:1308) lists that PP entry. IC:363 cites PP-35 for field balance, which PP-35 does not state. These go to D23 with the IP lines already listed.

### Batch 17

The Worker (Sonnet) made the return against `40c709a` (sha256 `790fd3dd20be369a41b134a21a83e2199fb22b7cf167615922ed849c26325983`). It covers nine slots of the table below: the LP slots of PP-233, PP-234, PP-235, PP-238, PP-239, PP-240, PP-245 and PP-247, and the PL slot of PP-233. It was applied on top of `5138636`, where every one of its 24 old texts still occurs once. OPEN PM read every parent and the near candidates whole (PL-14, PL-17, PL-40, PL-61, PL-72, PL-236, PL-285, PL-287, PL-305; LP-159, LP-160, LP-162, LP-163, LP-166, LP-168), searched LP for a carrier of PP-245's pull ("gravit", "attract", "pull", "well-worn", "self-reinforc"; none states one), and amended one re-point.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-233 | PL-287 (was PL-305) | LP-159 (kept) | BARREN | The Derives line named PL-305 under a title no PL entry bears; the PL-305 entry states live managed tensions of production edges. LP-159 states an agent's accountability for its own pulse and has no cascade or gradient. PL-287 states that the broader system may operate normally while a subsystem within it has completely collapsed out of its observation scope. Restated: where a gradient of a graduated consequence cascade is a subsystem outside the cascade's observation scope, it can collapse out of view while the cascade operates normally (PL-287). Fails Test 1 under the stated condition. |
| PP-234 | PL-17 (kept) | LP-159 (kept) | BARREN | LP-159 has no cascade, gradient or proof. Restated: where a gradient is held as a logical proof about the topology, it is valid only at the instant of its evaluation (PL-17). Fails Test 1 under the stated condition. |
| PP-235 | PL-236 (kept) | LP-160 (kept) | BARREN | LP-160 states an immortal systemic pulse and has no mapper or depth. The old body gave PL-236 "navigation debt", PL-16's title. Restated: where the depths a recursive accountability mapper does not reach are unexcavated pre-existing derivations, they are a current debt and not a future opportunity (PL-236). Fails Test 1 under the stated condition. |
| PP-238 | PL-40 (kept) | LP-162 (kept) | BARREN | LP-162 states a pulse fuelled by ignorance and has no map, surface or diffusion. Restated: where the map of a consequence diffusion surface is held as an evaluation of a region, its lifetime is bounded by the metabolism rate of that region (PL-40, corollary). Fails Test 1 under the stated condition. |
| PP-239 | PL-40 (kept) | LP-163 (kept) | BARREN | LP-163 states a pulse that ran before the agent was recognized and has no lock or boundary. LP-118 (continuous verification of a connection) is near and is not adopted. Restated: where a lock's holding is claimed as a sovereignty claim, proving it requires present traversal and a certificate is a label (PL-40). Fails Test 1 under the stated condition. |
| PP-240 | PL-61 (kept) | LP-163 (kept) | BARREN | LP-163 has no lock. LP-191, LP-209, LP-186, LP-338 and LP-78 state scale-invariance of other things and are not carriers. Restated: where a lock is held as a sovereignty protection, it is physically uniform across all scales (PL-61). Fails Test 1 under the stated condition. |
| PP-245 | PL-14 (kept) | LP-166 (kept) | BARREN | LP-166 states an endless relational survey and has no attractor, recurrence or pull. Restated: where a region the topology returns to is held as a consequence attractor, each traversal leaves a Wake and the high-traversal region accumulates Structural Mass (PL-14). The pull and the recurrence are cut. Fails Test 1 under the stated condition. |
| PP-247 | PL-17 (kept) | LP-168 (kept) | BARREN | LP-168 states that survey results are valid only in the present scan; it has no chain, link or proof. Adopting it would make the entry a rule about survey results. LP-202 is the only LP entry with "proof-of-consequence" and states an attested absence. Restated: where a link of a proof-of-consequence chain is held as a logical proof about the topology, it is valid only at the instant of its evaluation (PL-17). Fails Test 1 under the stated condition. |

OPEN PM's review. The Worker's text is kept except where listed:
- **PP-233, all six parts.** The Worker re-pointed the Derives line to PL-72 (the status label must match the Pulse reality), at medium-low confidence, and named PL-285 and PL-287 as near but resting on an unobserved subsystem, a condition it read the entry as not stating. The old entry's own words are "before its death is apparent", "before the cascade detects the death" and "while appearing to operate normally": an undetected collapse, which is PL-287's rule. PL-72 states its rule for the status label a structure carries, which the entry never names; batch 09 stood PP-305 and PP-309 on PL-72 because those entries are about a label. PL-287 is adopted, with the unobserved subsystem written as the entry's stated condition, as PL-72's would have been. PL-285 states a collapse before an aggregate alarm only as a corollary of independent metabolic rates and is not adopted. The title, Derives line, italic, claim, corollaries and Irreducibility were rewritten on PL-287; the Worker's LP-159 sentences are kept. PP-541 (PL-287 × LP-602) also derives from PL-287; Test 3 is not reached and the overlap is noted, not classified.
- **Tags.** Seven `[shared LL-x]` tags named only the LL of the LP parent the entry no longer uses, and the PL parent does not cite it: PP-233 (LL-227), PP-234 (LL-227), PP-235 (LL-228), PP-238 (LL-230), PP-239 (LL-231), PP-240 (LL-231), PP-245 (LL-234). They are removed. PP-247 keeps `[shared LL-236]`: PL-17 and LP-168 both cite LL-236.

Titles: eight changed (PP-233, 234, 235, 238, 239, 240, 245, 247). Each title's 95 copies in PI were replaced with it, so no PI copy of these eight is stale.

How the slots are counted: the PL slot of PP-233 is a RE-POINT; the eight LP slots are NO CARRIER, each Applies line kept with nothing attributed to its LP. That makes 9 slots corrected. **158 remain.** BARREN lines: 64 → 72.

Out-edges: IP and IC cite none of the eight entries. PI cites each only on its 95 Derives lines.

Loci, not changed here:
- Six other PP entries still name "PL-305 (A Living System Dies Before It Appears Dead)" on their Derives line: PP-231, PP-293, PP-303, PP-314, PP-346 and PP-367. For each, PL-287 and PL-72 are to be weighed against the entry's own claim; neither choice here carries across.
- Each entry's subject noun (a graduated consequence cascade, a recursive accountability mapper, a consequence diffusion surface, an accountability boundary lock, a consequence attractor, a proof-of-consequence chain) has no parent and survives only as the stated condition.
- PP-234 and PP-247 now state the same PL-17 rule under different conditions; PP-238 and PP-239 state different rules of PL-40; PP-239 and PP-240 share a subject through different parents. Overlap is noted, not classified.
- Old-body phrases stand in other PP entries: "governance debt" (PP-260), "Theater sovereignty" (12 entries, among them PP-254, 267, 300, 311, 316, 326), "dies before" (14 entries, among them PP-231, 290, 293, 303, 305, 309, 314, 339), "boundary lock" (PP-326, 327), "proof-of-consequence" (PP-248).
- Other PP entries cite LP-160 (PP-236) and LP-168 (PP-248, PP-365, PP-722).
- The PI Derives-from lines tag all eight entries [SUBSUMED]; the PP file now marks them BARREN.
- Kernel citations of these eight entries were not checked.

### Batch 18

The Worker (Sonnet) made the return against `c3dfee5` (sha256 `fa3dc444840432923dcf6a319bb1019ad99e501236682788e3effde70bb8904c`). It covers eight slots of the table below: the LP slots of PP-248, PP-249, PP-250, PP-251, PP-252, PP-253 and PP-254, and the PL slot of PP-249. It was applied on top of `4ad7a0b`, where every one of its 42 old texts still occurs once. OPEN PM read every parent and every adopted carrier whole (PL-27, PL-29, PL-40, PL-124, PL-145, PL-175, PL-313; LP-66, LP-135, LP-168, LP-169, LP-170, LP-171, LP-172, LP-173, LP-491), checked the Worker's quotations of each against the parent files, and amended tags and one title.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-248 | PL-313 (kept) | LP-135 (was LP-168) | BARREN | LP-168 states that survey results are valid only in the present scan and has no chain or proof. LP-135 states that validity is not a stored attribute of a node but a reaction triggered by a freshness query; PL-313 states that validity is a response a derivation generates when queried. Restated: where a proof-of-consequence chain's validity is read as the validity of a derivation or a node, it is a query response and cannot be stored. Fails Test 1 under the stated condition. |
| PP-249 | PL-175 (kept) | LP-169 (kept) | BARREN | PL-175 states emergence as threshold excavation; LP-169 states the survey as a sequence of sovereignty encounters. Neither states a constraint propagation wave or an enforcement cost. Both slots NO CARRIER: the entry states each parent's own fact and that the old claim is not established. Read as a conjunction of two single-parent facts with no claim left to cross. |
| PP-250 | PL-124 (kept) | LP-66 (was LP-170) | BARREN | LP-170 states the surveyor's accountability for what it uncovers and has no router or routing. LP-66 states that a routing decision cannot be pre-planned and must be re-evaluated at every junction. Restated: where a consequence router's decision is a routing decision made at a junction, it cannot be pre-planned and must be made on arrival (LP-66). PL-124 is kept and nothing is attributed to it. Fails Test 2 under the stated condition. |
| PP-251 | PL-27 (kept) | LP-171 (kept) | BARREN | LP-171 states that the survey's non-termination is structurally guaranteed by incompleteness; it is kept for that statement only, and has no obligation or descendant chain. Restated: where charting the descendants of an obligation is a survey and its reach is held as a completeness claim, the reach cannot be proved complete (PL-27) and the survey does not terminate (LP-171). Fails Test 1 under the stated condition. |
| PP-252 | PL-145 (kept) | LP-172 (kept) | BARREN | LP-172 states that unsurveyed territory holds more value than charted territory and has no obligation or descendant chain. Restated: where tracing obligations through descendant chains is a traversal, it creates more unexplored territory than it resolves (PL-145). Fails Test 1 under the stated condition. |
| PP-253 | PL-29 (kept) | LP-491 (was LP-172) | BARREN | LP-172 has no thermodynamic cost. LP-491 states that the territory a survey discovers was already accruing its maintenance cost. PL-29 states that undiscovered structures already owe thermodynamic debt. Restated: where unexplored obligation territory is read as undiscovered structure, its thermodynamic cost is already being incurred and discovery reveals it (PL-29). Fails Test 1 under the stated condition. |
| PP-254 | PL-40 (kept) | LP-173 (kept) | BARREN | LP-173 states the survey revealing a pre-existing infinite topology and has no attractor or force. Restated: where an accountability propagation attractor's force is held as a sovereignty claim, proving it requires present traversal and a certificate is a label (PL-40). Fails Test 1 under the stated condition. |

OPEN PM's review. The Worker's text is kept except where listed:
- **Tags.** Seven `[shared LL-x]` tags named only the LL of the old LP parent, and no current parent pair shares it: PP-248 (LL-236), PP-249 (LL-237), PP-250 (LL-238), PP-251 (LL-239), PP-252 (LL-240), PP-253 (LL-240), PP-254 (LL-241). They are removed. On the three re-pointed entries the Irreducibility now says why the old tag is not carried over: LP-135 does not cite LL-236 (PP-248); neither PL-124 nor LP-66 cites LL-238 (PP-250); neither PL-29 nor LP-491 cites LL-240 (PP-253).
- **PP-250 title.** The Worker's title ended "It Must Be Re-Evaluated at Every Junction", LP-66's corollary wording, which reads as an operation on a route. It now reads "Made at a Junction … It Must Be Made on Arrival", which is LP-66's rule under the entry's condition.
- **PP-365 Irreducibility.** It said that PP-247, PP-248 and PP-722 apply to LP-168. It now says that PP-247 and PP-722 do, and that PP-248 did until this batch re-pointed it to LP-135.
- **PP-249.** The Worker gave BARREN at medium-low confidence over UNRESOLVED. BARREN is accepted: the restated text asserts no crossing product, so nothing is left for Test 3 to judge. PL-24 was near for the PL slot and is not adopted: it needs the condition that a constraint is a logical claim, which the entry does not state. This is the first entry closed with both slots NO CARRIER and a "Not Established" title; PP-246 and PP-270, the two earlier entries with both slots NO CARRIER, were later given carriers, so this one is a locus for a later carrier search.
- **Re-points over NO CARRIER.** The Worker rated each of the three re-points low-medium over NO CARRIER. Each is accepted: LP-135, LP-66 and LP-491 each state the rule the restated title states, under the entry's own condition.

Titles: seven changed (PP-248 to PP-254). Each title's 95 copies in PI were replaced with it (665 copies), so no PI copy of these seven is stale.

How the slots are counted: the LP slots of PP-248, PP-250 and PP-253 are RE-POINTs; the LP slot of PP-251 is a RESTATE with LP-171 kept for one statement; the LP slots of PP-249, PP-252 and PP-254 and the PL slot of PP-249 are NO CARRIER, each line kept with nothing attributed to it. That makes 8 slots corrected. **150 remain.** BARREN lines: 72 → 79.

Out-edges: IP and IC cite none of the seven entries. PI cites each only on its 95 Derives lines. In PP, PP-257 names PP-252 and PP-341 names PP-251; neither is changed here.

Loci, not changed here:
- PP-528's Derives line names PP-528 itself (`PP-528 (Total System Thermodynamic Cost Is Constitutively Uncalculable …) [shared LL-474]`); it applies to LP-491. Its PL parent is not named. Found when LP-491 was read for PP-253.
- PP-248 now stands on the same pair as PP-186 (PL-313 × LP-135, shared LL-171): a new Test 3 pair PP-248/PP-186. PL-313 is also PP-181's parent.
- PL-29 and LP-491 share LL-474, which neither PP-253 nor its old tag names. PL-145 cites LL-239, PP-251's old tag LL, not PP-252's.
- Overlap with siblings, noted and not classified: PP-95 (PL-114 × LP-66) beside PP-250; PP-265 (PL-29 × LP-180, unexplored territory) beside PP-253; PP-318 (PL-40 × a bare "LP") beside PP-254. PL-124 is also the parent of PP-232, PP-328 and PP-363; PL-27 of 13 other entries; PL-145 of 13 others, among them PP-257, 263, 264 and 268, which share the obligation subject; PL-40 of 18 others.
- Old-body phrases stand in other PP entries: "proof-of-consequence chain" (PP-247), "accountability propagation attractor" (PP-255).
- Two kept Derives parents carry nothing: PL-124 (PP-250) and PL-175 (PP-249).
- Each entry's subject noun (a proof-of-consequence chain, a constraint propagation wave, a consequence router, an obligation's descendant chain, an accountability propagation attractor) has no parent and survives only as the stated condition.
- The PI Derives-from lines tag all seven entries [SUBSUMED]; the PP file now marks them BARREN.
- Kernel citations of these seven entries were not checked.

## The 250 slots

"Candidate … not adopted" means one reader proposed an entry but the pick did not meet the rule above.

| PP | Side | Named now | Reading |
| :--- | :---: | :--- | :--- |
| PP-102 | LP | LP-72 | no carrier found (strict reader, low); batch 04: kept and restated, BARREN |
| PP-113 | LP | LP-216 (was LP-81) | candidate LP-210, low confidence, not adopted; batch 01: re-pointed and restated, BARREN |
| PP-216 | LP | LP-662 (was LP-151) | no carrier found (strict reader, medium); batch 16: re-pointed to LP-662 under a stated condition, restated, BARREN |
| PP-217 | LP | LP-151 | candidate LP-243, low confidence, not adopted; batch 03: re-pointed to LP-246 and restated, BARREN |
| PP-218 | LP | LP-151 | no carrier found (strict reader, medium); batch 03: kept and restated, BARREN |
| PP-220 | LP | LP-152 | no carrier found (strict reader, medium); batch 16: no carrier; nothing attributed to LP-152, restated on PL-25 alone, BARREN |
| PP-221 | LP | LP-152 | no carrier found (strict reader, medium); batch 16: no carrier; nothing attributed to LP-152, restated on PL-17 alone, BARREN |
| PP-223 | LP | LP-599 (was LP-153) | candidate LP-1, medium confidence, no second reader proposed it; not adopted; batch 16: re-pointed to LP-599 (LP-1 read, not adopted) under stated conditions, restated, BARREN |
| PP-224 | LP | LP-154 | no carrier found (strict reader, medium); batch 01: restated, BARREN |
| PP-227 | LP | LP-155 | no carrier found (strict reader, medium); batch 16: kept, LP-155 carries the pulse half, restated, BARREN |
| PP-232 | LP | LP-234 (was LP-158) | candidate LP-238, low confidence, not adopted; batch 01: re-pointed and restated, BARREN |
| PP-233 | LP | LP-159 | no carrier found (strict reader, high); batch 17: no carrier; nothing attributed to LP-159, restated on PL-287 alone, BARREN |
| PP-234 | LP | LP-159 | no carrier found (strict reader, high); batch 17: no carrier; nothing attributed to LP-159, restated on PL-17 alone, BARREN |
| PP-235 | LP | LP-160 | no carrier found (strict reader, low); batch 17: no carrier; nothing attributed to LP-160, restated on PL-236 alone, BARREN |
| PP-236 | LP | LP-124 | no carrier found (strict reader, medium); batch 08: re-pointed LP-160 to LP-124 under a stated condition, restated, BARREN |
| PP-238 | LP | LP-162 | no carrier found (strict reader, high); batch 17: no carrier; nothing attributed to LP-162, restated on PL-40 alone, BARREN |
| PP-239 | LP | LP-163 | no carrier found (every reader); batch 17: no carrier; nothing attributed to LP-163, restated on PL-40 alone, BARREN |
| PP-240 | LP | LP-163 | no carrier found (strict reader, high); batch 17: no carrier; nothing attributed to LP-163, restated on PL-61 alone, BARREN |
| PP-242 | LP | LP-186 (was LP-164) | candidate LP-186, low confidence, not adopted; batch 01: re-pointed and restated, IRREDUCIBLE |
| PP-243 | LP | LP-124 | no carrier found (strict reader, medium); batch 08: re-pointed LP-165 to LP-124 under a stated condition, restated, BARREN; batch 10: LP-626 crossed, not adopted, LP-124 kept, BARREN |
| PP-245 | LP | LP-166 | no carrier found (strict reader, high); batch 17: no carrier; nothing attributed to LP-166, restated on PL-14 alone, BARREN |
| PP-246 | LP | LP-167 | no carrier found (every reader); batch 04: read, not corrected (to the title pass); batch 11: NO CARRIER, kept, nothing attributed (LP-478 crossed, not adopted) |
| PP-247 | LP | LP-168 | no carrier found (strict reader, high); batch 17: no carrier; nothing attributed to LP-168, restated on PL-17 alone, BARREN |
| PP-248 | LP | LP-168 | no carrier found (strict reader, high); batch 18: re-pointed to LP-135, restated, BARREN |
| PP-249 | LP | LP-169 | no carrier found (strict reader, medium); batch 18: no carrier; nothing attributed to LP-169, BARREN (both slots no carrier) |
| PP-250 | LP | LP-170 | no carrier found (strict reader, high); batch 18: re-pointed to LP-66, restated, BARREN |
| PP-251 | LP | LP-171 | no carrier found (strict reader, high); batch 18: LP-171 kept for the non-termination statement only, restated, BARREN |
| PP-252 | LP | LP-172 | no carrier found (strict reader, high); batch 18: no carrier; nothing attributed to LP-172, restated on PL-145 alone, BARREN |
| PP-253 | LP | LP-172 | candidate LP-610, low confidence, not adopted; batch 18: re-pointed to LP-491, restated, BARREN |
| PP-254 | LP | LP-173 | no carrier found (every reader); batch 18: no carrier; nothing attributed to LP-173, restated on PL-40 alone, BARREN |
| PP-255 | LP | LP-613 (was LP-173) | no carrier found (strict reader, high); batch 08: no carrier, nothing attributed to LP-173, BARREN settled; batch 10: re-pointed to LP-613 and restated, BARREN |
| PP-256 | LP | LP-174 | no carrier found (strict reader, low); batch 15: RE-POINT → LP-209 under a stated condition, restated, BARREN |
| PP-257 | LP | LP-174 | no carrier found (strict reader, low); batch 15: LP-174 kept as the carrier of the every-scale part, accountability claims cut, restated, BARREN |
| PP-258 | LP | LP-175 | no carrier found (strict reader, high) |
| PP-259 | LP | LP-176 | candidate LP-212, low confidence, not adopted |
| PP-260 | LP | LP-177 | no carrier found (every reader) |
| PP-261 | LP | LP-616 | no carrier found (strict reader, high); batch 08: re-pointed LP-177 to LP-616 (timing half), restated, BARREN |
| PP-262 | LP | LP-178 | no carrier found (every reader) |
| PP-263 | LP | LP-179 | no carrier found (strict reader, high); batch 01b: restated, BARREN |
| PP-264 | LP | LP-180 | candidate LP-401, low confidence, not adopted |
| PP-265 | LP | LP-180 | no carrier found (strict reader, high) |
| PP-266 | LP | LP-181 | no carrier found (every reader) |
| PP-267 | LP | LP-182 | no carrier found (every reader) |
| PP-268 | LP | LP-183 | no carrier found (strict reader, high) |
| PP-269 | LP | LP-184 | no carrier found (every reader); batch 01b: restated, BARREN |
| PP-270 | LP | LP-185 | no carrier found (strict reader, high); batch 04: read, not corrected (sense conflicts; to the title pass); batch 11: RE-POINT → LP-212 |
| PP-271 | LP | LP-186 | no carrier found (strict reader, low) |
| PP-272 | LP | LP-187 | no carrier found (every reader) |
| PP-274 | LP | LP-188 | candidate LP-397, low confidence, not adopted |
| PP-275 | LP | LP-483 (was LP-189) | no carrier found (strict reader, low); batch 01: re-pointed and restated, BARREN |
| PP-276 | LP | LP-190 | no carrier found (strict reader, high); batch 04: read, not corrected (to the title pass); batch 11: RE-POINT → LP-671 |
| PP-277 | LP | LP-191 | no carrier found (strict reader, medium) |
| PP-278 | LP | LP-191 | no carrier found (strict reader, medium) |
| PP-280 | LP | LP-192 | no carrier found (strict reader, medium) |
| PP-281 | LP | LP-376 (was LP-193) | no carrier found (strict reader, medium); batch 01: re-pointed and restated, BARREN |
| PP-282 | LP | LP-193 | no carrier found (strict reader, medium) |
| PP-283 | LP | LP-194 | no carrier found (strict reader, high) |
| PP-284 | LP | LP-194 | no carrier found (strict reader, high) |
| PP-285 | LP | LP-195 | no carrier found (strict reader, high) |
| PP-286 | LP | LP-195 | no carrier found (strict reader, medium) |
| PP-287 | LP | LP-196 | no carrier found (strict reader, high) |
| PP-288 | LP | LP-616 | no carrier found (strict reader, high); batch 08: re-pointed LP-196 to LP-616 (timing half), restated, BARREN |
| PP-289 | LP | LP-197 | no carrier found (every reader) |
| PP-290 | LP | LP-197 | no carrier found (strict reader, high) |
| PP-291 | LP | LP-198 | no carrier found (strict reader, medium) |
| PP-292 | LP | LP-198 | no carrier found (strict reader, medium) |
| PP-293 | LP | LP-199 | no carrier found (strict reader, high) |
| PP-294 | LP | LP-200 | no carrier found (strict reader, high) |
| PP-295 | LP | LP-201 | no carrier found (strict reader, medium) |
| PP-296 | LP | LP-202 | no carrier found (strict reader, high) |
| PP-297 | LP | LP-203 | no carrier found (strict reader, high) |
| PP-298 | LP | LP-204 | no carrier found (strict reader, high) |
| PP-299 | LP | LP-204 | no carrier found (strict reader, high) |
| PP-300 | LP | LP-205 | no carrier found (strict reader, high); batch 07: no carrier found, not corrected (false attribution stays open); batch 08: restated onto PL-40 alone, nothing attributed to LP-205, BARREN |
| PP-301 | LP | LP-205 | no carrier found (strict reader, high); batch 06: re-pointed to LP-124 and restated, BARREN |
| PP-302 | LP | LP-206 | no carrier found (strict reader, medium) |
| PP-303 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-304 | LP | LP-207 | no carrier found (strict reader, medium) |
| PP-305 | LP | LP-208 | no carrier found (strict reader, medium); batch 09: no carrier; nothing attributed to LP-208, restated on the PL parent alone, BARREN; batch 09 check: REOPENED, candidates LP-438, 562, 590, 602 not read; for re-cross; batch 15: LP-438, 562, 590, 602 read, NO CARRIER after a complete search, BARREN |
| PP-306 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 07: no carrier; body's LP-208 attribution cut and restated on the PL parent alone, BARREN |
| PP-307 | LP | LP-209 | no carrier found (strict reader, medium) |
| PP-308 | LP | LP-210 | no carrier found (strict reader, medium); batch 09: no carrier; body's LP-210 attribution cut, restated on the PL parent alone, BARREN; batch 09 check: REOPENED, "no LP states a pruner" false (LP-57, 136, 463, 562); for re-cross; batch 15: LP-57, 136, 463, 562, 332, 333, 514, 195, 587, 678 read, NO CARRIER after a complete search, BARREN |
| PP-309 | LP | none (bare "LP (Logical Physical)") | candidate LP-522, low confidence, not adopted; batch 09: no carrier; body's LP-210 attribution cut, restated on the PL parent alone, BARREN; batch 09 check: REOPENED, "no LP states a pruner" false (LP-57, 136, 438, 463; LP-522, 691); for re-cross; batch 15: LP-57, 136, 438, 463, 522, 691 read, NO CARRIER after a complete search, BARREN |
| PP-310 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 07: no carrier; body's LP-210 attribution cut and restated on the PL parent alone, BARREN |
| PP-311 | LP | LP-211 | no carrier found (strict reader, medium) |
| PP-312 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-313 | LP | LP-212 | no carrier found (strict reader, medium) |
| PP-314 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-315 | LP | LP-213 | no carrier found (strict reader, medium) |
| PP-316 | LP | none (bare "LP (Logical Physical)") | no carrier found (strict reader, medium) |
| PP-317 | LP | LP-214 | no carrier found (strict reader, medium) |
| PP-318 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-319 | LP | LP-215 | no carrier found (strict reader, medium) |
| PP-323 | LP | LP-217 | no carrier found (strict reader, medium) |
| PP-324 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-326 | LP | LP-219 | no carrier found (strict reader, medium) |
| PP-327 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-328 | LP | LP-220 | no carrier found (strict reader, medium) |
| PP-329 | LP | none (bare "LP (Logical Physical)") | no carrier found (strict reader, low) |
| PP-330 | LP | LP-221 | no carrier found (strict reader, medium) |
| PP-331 | LP | none (bare "LP (Logical Physical)") | no carrier found (strict reader, low) |
| PP-332 | LP | LP-222 | no carrier found (strict reader, medium) |
| PP-334 | LP | LP-223 | no carrier found (strict reader, medium) |
| PP-336 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-337 | LP | LP-225 | no carrier found (strict reader, medium) |
| PP-338 | LP | LP-226 | no carrier found (strict reader, medium) |
| PP-339 | LP | LP-227 | no carrier found (strict reader, medium) |
| PP-340 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 04: filled with LP-124 and restated, BARREN |
| PP-341 | LP | LP-228 | no carrier found (strict reader, medium); batch 09: no carrier; nothing attributed to LP-228, restated on PL-27 alone, BARREN |
| PP-342 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 07: no carrier; body's LP-228 attribution cut and restated on the PL parent alone, BARREN |
| PP-343 | LP | LP-229 | no carrier found (strict reader, low); batch 09: no carrier; nothing attributed to LP-229, restated on PL-114 alone, BARREN |
| PP-344 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 07: re-pointed to LP-489 and restated, BARREN |
| PP-345 | LP | LP-230 | no carrier found (every reader) |
| PP-346 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-347 | LP | LP-231 | candidate LP-620, low confidence, not adopted |
| PP-348 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-349 | LP | LP-232 | no carrier found (strict reader, medium) |
| PP-350 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-351 | LP | LP-233 | candidate LP-599, medium confidence, no second reader proposed it; not adopted |
| PP-352 | LP | none (bare "LP (Logical Physical)") | no carrier found (strict reader, low) |
| PP-353 | LP | LP-234 | no carrier found (every reader) |
| PP-354 | LP | none (bare "LP (Logical Physical)") | no carrier found (strict reader, low) |
| PP-355 | LP | LP-235 | no carrier found (every reader) |
| PP-356 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-357 | LP | LP-236 | no carrier found (strict reader, medium) |
| PP-358 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-359 | LP | LP-237 | no carrier found (strict reader, medium) |
| PP-360 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-361 | LP | LP-238 | no carrier found (strict reader, medium) |
| PP-362 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-363 | LP | LP-239 | no carrier found (strict reader, medium) |
| PP-364 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-365 | LP | LP-168 (was LP-240) | no carrier found (every reader); batch 09: re-pointed to LP-168 under a stated condition, restated, BARREN |
| PP-366 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 07: no carrier; body's LP-240 attribution cut and restated on the PL parent alone, BARREN |
| PP-367 | LP | LP-241 | no carrier found (every reader) |
| PP-368 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-695 | LP | LP-551,LP-551 | candidate LP-241, medium confidence, no second reader proposed it; not adopted |
| PP-698 | LP | LP-95,LP-95 | no carrier found (strict reader, medium) |
| PP-720 | LP | LP-581,LP-581 | no carrier found (every reader) |
| PP-721 | LP | LP-582,LP-582 | candidate LP-649, low confidence, not adopted; batch 02: re-pointed to LP-649 and restated, BARREN |
| PP-723 | LP | LP-584,LP-584 | candidate LP-694, low confidence, not adopted |
| PP-1 | PL | PL-50,PL-50 | no carrier found (strict reader, medium); batch 02: re-pointed to PL-42 and restated, BARREN |
| PP-7 | PL | PL-50 | no carrier found (every reader); batch 02: re-pointed to PL-227 and restated, BARREN |
| PP-16 | PL | PL-74 | no carrier found (strict reader, medium); batch 02: re-pointed to PL-201 and restated, BARREN |
| PP-24 | PL | PL-50 | no carrier found (strict reader, medium); batch 05: re-pointed to PL-248 and restated, BARREN |
| PP-26 | PL | PL-59 | no carrier found (every reader); batch 02: restated, BARREN |
| PP-42 | PL | PL-51 | no carrier found (strict reader, medium); batch 02: re-pointed to PL-247 and restated, BARREN |
| PP-43 | PL | PL-53 | candidate PL-98, low confidence, not adopted; batch 05: re-pointed to PL-98 and restated, BARREN |
| PP-49 | PL | PL-54 | no carrier found (strict reader, medium); batch 02: re-pointed to PL-192 and restated, BARREN |
| PP-52 | PL | PL-54 | no carrier found (strict reader, medium) |
| PP-59 | PL | PL-149 | candidate PL-255, low confidence, not adopted |
| PP-63 | PL | PL-149 | candidate PL-255, low confidence, not adopted |
| PP-69 | PL | PL-59 | no carrier found (every reader); batch 05: kept and restated, BARREN |
| PP-78 | PL | PL-198 | no carrier found (strict reader, medium) |
| PP-80 | PL | PL-149 | candidate PL-255, low confidence, not adopted; batch 05: re-pointed to PL-84 and restated, BARREN |
| PP-89 | PL | PL-90 | no carrier found (every reader) |
| PP-92 | PL | PL-94 | no carrier found (strict reader, medium) |
| PP-98 | PL | PL-149 | candidate PL-255, low confidence, not adopted; batch 05: re-pointed to PL-17 and restated, BARREN; batch 05 check: re-pointed to PL-113 |
| PP-103 | PL | PL-82 | no carrier found (every reader); batch 02: re-pointed to PL-191 and restated, BARREN |
| PP-107 | PL | PL-85 | no carrier found (strict reader, medium) |
| PP-112 | PL | PL-50 | no carrier found (every reader); batch 05: read, not corrected (to the title pass); batch 11: RE-POINT → PL-127 |
| PP-115 | PL | PL-86 | no carrier found (strict reader, medium) |
| PP-119 | PL | PL-87 | candidate PL-63, low confidence, not adopted |
| PP-129 | PL | PL-110 | no carrier found (strict reader, medium) |
| PP-130 | PL | PL-111 | no carrier found (strict reader, medium); batch 05: re-pointed to PL-46 and restated, BARREN |
| PP-131 | PL | PL-113 | candidate PL-226, low confidence, not adopted; batch 03: re-pointed to PL-226 and restated, BARREN |
| PP-136 | PL | PL-160 | no carrier found (strict reader, medium); batch 03: read, not corrected (restatement would contradict the title; to the title pass); batch 11: NO CARRIER, kept, nothing attributed |
| PP-140 | PL | PL-149 | candidate PL-255, low confidence, not adopted; batch 03: re-pointed to PL-130 and restated, BARREN |
| PP-145 | PL | PL-216 | no carrier found (strict reader, medium); batch 03: re-pointed to PL-150 and restated, BARREN |
| PP-154 | PL | PL-130 | no carrier found (strict reader, medium); batch 05: re-pointed to PL-81 and restated, BARREN |
| PP-158 | PL | PL-133 | no carrier found (strict reader, medium) |
| PP-163 | PL | PL-50 | no carrier found (every reader) |
| PP-166 | PL | PL-51 | no carrier found (strict reader, medium) |
| PP-184 | PL | PL-144 | no carrier found (strict reader, high) |
| PP-192 | PL | PL-154 | no carrier found (strict reader, medium) |
| PP-196 | PL | PL-198 | no carrier found (every reader); batch 05: read, not corrected (to the title pass); batch 11: RE-POINT → PL-36 |
| PP-199 | PL | PL-50 | no carrier found (strict reader, high); batch 03: re-pointed to PL-237 and restated, BARREN |
| PP-216 | PL | PL-127 (was PL-22) | no carrier found (every reader); batch 16: re-pointed to PL-127 under a stated condition, restated, BARREN |
| PP-217 | PL | PL-27 | candidate PL-84, low confidence, not adopted; batch 03: re-pointed to PL-84 and restated, BARREN |
| PP-219 | PL | PL-78 (was PL-30) | no carrier found (strict reader, medium); batch 16: re-pointed to PL-78 under a stated condition, restated, BARREN |
| PP-231 | PL | PL-305 | no carrier found (strict reader, high) |
| PP-233 | PL | PL-287 (was PL-305) | no carrier found (strict reader, high); batch 17: re-pointed to PL-287 under a stated condition (PL-72 proposed by the Worker, read, not adopted), restated, BARREN |
| PP-236 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 06: re-pointed to PL-140 and restated, BARREN (provisional: LP slot open); batch 08: LP slot settled, BARREN |
| PP-243 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 06: re-pointed to PL-140 and restated, BARREN (provisional: LP slot open); batch 08: LP slot settled, BARREN |
| PP-246 | PL | PL-174 | no carrier found (every reader); batch 04: read, not corrected (to the title pass); batch 11: RE-POINT → PL-302 |
| PP-249 | PL | PL-175 | no carrier found (strict reader, medium); batch 18: no carrier; nothing attributed to PL-175, BARREN (both slots no carrier) |
| PP-255 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 06: re-pointed to PL-267 and restated, BARREN (provisional: LP slot open); batch 08: LP slot settled, BARREN |
| PP-258 | PL | PL-177 | candidate PL-205, low confidence, not adopted |
| PP-260 | PL | PL-240 | candidate PL-29, low confidence, not adopted |
| PP-261 | PL | PL-299 | no carrier found (strict reader, medium); batch 06: re-pointed to PL-266 and restated, BARREN (provisional: LP slot open); batch 08: LP slot settled, BARREN |
| PP-266 | PL | PL-181 | no carrier found (strict reader, medium) |
| PP-269 | PL | PL-182 | no carrier found (every reader); batch 01b: restated, BARREN |
| PP-270 | PL | PL-183 | no carrier found (strict reader, medium); batch 04: read, not corrected (sense conflicts; to the title pass); batch 11: RE-POINT → PL-77 |
| PP-272 | PL | PL-228 | no carrier found (every reader) |
| PP-274 | PL | PL-81 | no carrier found (strict reader, medium) |
| PP-279 | PL | PL-228 | no carrier found (every reader) |
| PP-282 | PL | PL-228 | no carrier found (every reader) |
| PP-286 | PL | PL-276 | no carrier found (strict reader, medium) |
| PP-287 | PL | PL-276 | no carrier found (strict reader, medium) |
| PP-288 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 06: re-pointed to PL-266 and restated, BARREN (provisional: LP slot open); batch 08: LP slot settled, BARREN |
| PP-289 | PL | PL-239 | candidate PL-118, medium confidence, no second reader proposed it; not adopted |
| PP-292 | PL | PL-276 | no carrier found (strict reader, medium) |
| PP-293 | PL | PL-305 | no carrier found (strict reader, high) |
| PP-294 | PL | PL-108 | candidate PL-17, low confidence, not adopted |
| PP-295 | PL | PL-109 | no carrier found (strict reader, medium) |
| PP-297 | PL | PL-113 | no carrier found (every reader) |
| PP-301 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 06: re-pointed to PL-140 and restated, BARREN |
| PP-303 | PL | PL-305 | no carrier found (every reader) |
| PP-305 | PL | PL-72 (was PL-305) | no carrier found (strict reader, high); batch 09: re-pointed to PL-72 under a stated condition, restated, BARREN |
| PP-306 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 07: re-pointed to PL-115 and restated, BARREN |
| PP-307 | PL | PL-174 | no carrier found (strict reader, medium) |
| PP-308 | PL | PL-82 | no carrier found (strict reader, medium); batch 09: kept and restated to the door/wall diagnostic, BARREN |
| PP-309 | PL | PL-72 (was PL-305) | no carrier found (every reader); batch 09: re-pointed to PL-72 under a stated condition, restated, BARREN |
| PP-310 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 07: re-pointed to PL-26 and restated, BARREN |
| PP-313 | PL | PL-108 | candidate PL-118, medium confidence, no second reader proposed it; not adopted |
| PP-314 | PL | PL-305 | candidate PL-114, medium confidence, no second reader proposed it; not adopted |
| PP-327 | PL | none | no carrier found (strict reader, medium) |
| PP-331 | PL | PL-108 | candidate PL-17, low confidence, not adopted |
| PP-337 | PL | PL-174 | no carrier found (strict reader, medium) |
| PP-340 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 04: re-pointed to PL-140 and restated, BARREN |
| PP-342 | PL | PL-299 | no carrier found (strict reader, medium); batch 07: re-pointed to PL-37 and restated, BARREN |
| PP-344 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 07: re-pointed to PL-140 and restated, BARREN |
| PP-345 | PL | PL-239 | candidate PL-17, low confidence, not adopted |
| PP-346 | PL | PL-305 | no carrier found (every reader) |
| PP-353 | PL | PL-22 | no carrier found (every reader) |
| PP-354 | PL | PL-27 | candidate PL-84, low confidence, not adopted |
| PP-361 | PL | PL-108 | candidate PL-118, medium confidence, no second reader proposed it; not adopted |
| PP-366 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 07: re-pointed to PL-140 and restated, BARREN |
| PP-367 | PL | PL-305 | no carrier found (strict reader, high) |
| PP-382 | PL | PL-60 | no carrier found (strict reader, medium) |
| PP-385 | PL | PL-65 | no carrier found (strict reader, medium) |
| PP-386 | PL | PL-65 | no carrier found (strict reader, medium) |
| PP-388 | PL | PL-67 | candidate PL-195, medium confidence, no second reader proposed it; not adopted |
| PP-393 | PL | PL-68 | no carrier found (strict reader, medium) |
| PP-400 | PL | PL-96 | no carrier found (strict reader, medium) |
| PP-405 | PL | PL-100 | no carrier found (strict reader, medium) |
| PP-406 | PL | PL-100 | no carrier found (strict reader, medium) |
| PP-412 | PL | PL-89 | no carrier found (strict reader, medium) |
| PP-413 | PL | PL-89 | no carrier found (strict reader, medium) |
| PP-415 | PL | PL-103 | no carrier found (strict reader, medium) |
| PP-425 | PL | PL-118 | no carrier found (strict reader, medium) |
| PP-436 | PL | PL-142 | candidate PL-266, medium confidence, no second reader proposed it; not adopted |
| PP-437 | PL | PL-143 | no carrier found (every reader) |
| PP-438 | PL | PL-143 | no carrier found (every reader) |
| PP-444 | PL | PL-156 | candidate PL-259, low confidence, not adopted |
| PP-455 | PL | PL-187 | no carrier found (every reader) |
| PP-461 | PL | PL-195 | candidate PL-193, low confidence, not adopted |
| PP-472 | PL | PL-209 | candidate PL-56, low confidence, not adopted |
| PP-473 | PL | PL-210 | no carrier found (strict reader, medium) |
| PP-503 | PL | PL-92 | candidate PL-81, low confidence, not adopted |
