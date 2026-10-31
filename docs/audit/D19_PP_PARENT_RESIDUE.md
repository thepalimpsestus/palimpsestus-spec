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
  - Their text stays as written, so no ancestry is erased (No Ancestral Erasure, `dag-crossing-method.md` line 7). Keeping an open or marked entry first rested on D20's reading of that invariant (`D20_LP_CP85_RECROSS.md` line 23), not on a rule the method states. The Holder answered the question on 2026-10-31 about 03:45Z ("5 keep", HOLDER-QUEUE item 5: keep or remove an entry found BARREN after it was written): entries found BARREN are kept in place and marked.

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

### Batch 17, independent check

A blind checker (Opus; brief sha256 `850ea197…`, return `095ba748637f01dc2cb089c91d67b8114df09f1b8d47db489788787ef9dd1172`) used its own copy of A at `4ad7a0b`. It read each entry, each parent and the LP entries named below whole, and wrote its entry judgments before it opened this record. It gave HOLDS for PP-233, PP-234, PP-235, PP-238, PP-239 and PP-245, and AMEND for PP-240 and PP-247. It agreed with the PL-305 → PL-287 re-point of PP-233 and with not adopting PL-72 or PL-285, with NO CARRIER on all eight LP slots, with BARREN by Test 1 for all eight, with removing the seven tags and keeping LL-236 on PP-247, with the eight titles and their 760 PI copies, and with the slot count of 9. OPEN PM read each cited line again at `b806ab9` (PL-61 corollary 3 at PL:2669, PL-236 at PL:6612-6617, PL-184, PL-258 at PL:7382, LP-202, the LP entries named below, and `dag-crossing-method.md` §7 and §8).

Adopted:
- **PP-240, italic.** PL-61's corollary (PL:2669) speaks of "a sovereignty protection protocol"; the italic said "a protection protocol", which widens PL-61's rule to protocols that protect anything. The italic now says "a sovereignty protection protocol", as the Irreducible Claim already does.
- **PP-247, Irreducibility.** The sentence said that "proof-of-consequence", "chain of custody" and "consequence provenance" appear only in LP-202. In LP at `b806ab9`, "proof-of-consequence" and "consequence provenance" have 0 hits, and "chain of custody" has one, at LP:3782 in LP-202. The sentence now says so. The conclusion, no LP carrier, is unaffected.
- **PP-235, IC paragraph 2.** The entry said that treating the depths as a future opportunity "undercharges the system"; PL-236 (PL:6614-6615) says that those who treat undiscovered knowledge as opportunity "are undercharging themselves", and the entry's corollary 2 already uses those words. The checker gave HOLDS and offered the exact wording as optional; it is taken, as "whoever treats them as a future opportunity is undercharging themselves (PL-236)", so the paragraph names no subject PL-236 does not.

Correction, 2026-10-31 (dated note; the batch 17 text above stands as written): the batch 17 receipt for PP-247 says "LP-202 is the only LP entry with 'proof-of-consequence'". No LP entry has that phrase; LP-202 is the only LP entry with "chain of custody". The NO CARRIER finding does not rest on the phrase and stands.

Not adopted: none. The checker's PP-235 confidence (medium, from the wording gap now closed, not from a carrier doubt) is noted; the slot row keeps the reader's own confidence.

Strengthening the search receipt (read again by OPEN PM; none is a carrier, and no verdict changes): near-concept LP entries the batch 17 receipts did not name are LP-500 (Precautionary Boundary Hardening) and LP-237 (Scale-Invariant Preemptive Shielding) for PP-240, which share LL-375 with PL-61; LP-513 (Unassumed Excavation Protocol) for PP-238; LP-242 (Archaeological Pulse Debt) and LP-460 (Excavation Depth Tagging) for PP-235; and LP-597 (Scale-Invariant Subsystem Collapse Protocol) for PP-233. LP-26, which the checker raised for PP-239, is among the "lock" entries the batch 17 review read whole.

Out-edges: the checker also searched II; 0 lines cite the eight, which extends the batch 17 note on IP and IC. The ARC Lead's kernel-citation notes for the batch 17 and batch 18 entries (`~/Documents/Workstream-dispatch/arc-lead-note-kernel-cites-batch17-entries-4ad7a0b.md`, sha256 `8bad94d2…`; `arc-lead-note-kernel-cites-batch18-entries-b806ab9.md`, sha256 `ab049575…`) found no citation of the fifteen entries in the kernel source at its HEAD `1195baa`, and IP and IC byte-identical between the two tips; the kernel's rows file, certification and tests were not searched. This closes the "kernel citations were not checked" locus of batches 17 and 18 for the kernel source only.

Titles: none changed. No slot count changes: 150 remain.

New loci, not changed here:
- PL:7382, in PL-258, cites PL-184 for "the full consequence cascade"; PL-184 is Active Vitality Assessment and states no consequence cascade. That is the PL file's own matter.
- The BARREN entries carry "**Epistemic Tier:** Tier 3 (Derived Consequence)"; `dag-crossing-method.md` §7 (line 97) gives the dual classification to every surviving entry. Whether a BARREN entry keeps a tier is not settled by the method.
- The PP entries give Epistemic Tier before Derives from; the §8 template (lines 127-138) orders Derives from, Applies to, Derivational State, Epistemic Tier.
- PP-309's Applies line is "LP (Logical Physical)", with no entry id; the batch 15 record names PP-309 only for its closure.
- The PI Derives-from lines tag all eight entries [SUBSUMED] on every copy (760 lines), where PP marks them BARREN; this widens the batch 17 locus to every copy.

### Batch 18, independent check

A blind checker (Opus; brief sha256 `1469d79c…`, return `8df75a173bd4eda0cc20bd2d0a31e2ae6cadf39b15ea8d57d11de5dac5efa323`) used its own copy of A at `b806ab9`. It read each entry, each parent and the entries named below whole, and wrote its entry judgments before it opened this record. It gave HOLDS for PP-250, PP-252 and PP-254, and AMEND for PP-248, PP-249, PP-251 and PP-253. It agreed with the three re-points (PP-248 to LP-135, PP-250 to LP-66, PP-253 to LP-491), with NO CARRIER on the other LP slots and on both slots of PP-249, with all seven BARREN marks, with the seven titles and their 665 PI copies, with PP-365's corrected sentence, with 0 IP and IC out-edges, and with the count (BARREN 72 → 79; 150 remain). OPEN PM read each cited line again at `f38b73c` (PL-27, PL-29 at PL:1561-1604, PL-313 and LP-135's Derives and Applies lines, LP-491 at LP:9073-9090, PP-186's and PP-528's tags, LP-625, LP-171, the PL hit for "accountability propagation", and `dag-crossing-method.md` lines 65-67).

Adopted:
- **PP-253, Irreducible Claim.** The entry said that "neither parent mentions an obligation". PL-29 does: discovery "surfaces a pre-existing obligation", and the invisible budget is "a standing obligation" (PL-29's Irreducible Claim and corollary 1). The batch 18 review said it checked the Worker's quotations against the parent files and missed this sentence. The sentence now says that PL-29 calls the cost of an undiscovered structure a pre-existing obligation of the topology, and that neither parent mentions an obligated party or an obligation territory. The condition is still not asserted, and the mark is unchanged.
- **PP-253, italic.** "A newly discovered territory's cost was already accruing (LP-491)" dropped LP-491's condition, a territory a non-terminating survey discovers. The italic now names it.
- **PP-248 and PP-253, tags.** PL-313 and LP-135 both cite LL-171, and PP-186 carries `[shared LL-171]` for the same pair; PL-29 and LP-491 both cite LL-474. Batch 18 named both shared LLs as loci and left the tags off. Each Derives line now carries its tag, and each Irreducibility says why. The checker also pointed to PP-528's `[shared LL-474]`. That is not cited as the precedent, because PP-528's Derives line names PP-528 itself (an open locus).
- **PP-248 and PP-251, test sentences.** Each said the entry "fails Test 1 (the left parent alone)" and that Tests 2 and 3 were not reached. Each entry is a conjunction whose second half (LP-135's, LP-171's) holds from the above parent alone, which is Test 2. Each sentence now tests half by half, as PP-249 and PP-365 already do: Test 1 for the left half, Test 2 for the above half, and Test 3 not reached. The BARREN marks are unchanged. The batch 18 receipts above ("Fails Test 1 under the stated condition") stand as written. This note corrects them.
- **PP-251, title and corollary 2.** Both said "a completeness claim". PL-27's rule is about the topology's claim of its own completeness, and the italic and the Irreducible Claim already say "a claim of the topology's completeness". The title is now "Where Charting the Descendants of an Obligation Is a Survey, and Its Reach Is Held as a Claim of the Topology's Completeness, That Claim Cannot Be Self-Certified — The Survey Does Not Terminate". Its 95 PI copies were replaced. Corollary 2 now says "a claim of the topology's completeness".
- **PP-249, italic.** It said "The entry's claim" for the claim the entry says is not established. It now says "The earlier claim", as the Irreducible Claim does.

Not adopted: none. PP-365's parenthesis calls LP-135 "the parent of PP-186". The checker found it true and incomplete, because LP-135 is now also PP-248's parent; the same sentence already says so. It is left as it stands.

Strengthening the search receipt (read again by OPEN PM; none is a carrier, and no verdict changes):
- For PP-250, LP-625 (Freedom-Preserving Consequence Routing, LP:11721) uses "consequence routing" for consequences that follow an exiting entity. It says nothing of pre-planning.
- For PP-252, LP-171's corollary at LP:3209 ("The system is mathematically proven to outgrow any survey attempt") is the nearest LP statement to PL-145's. Not adopted: the entry's rule is PL-145's ratio, which LP-171 does not state.
- For PP-254, "accountability propagation" occurs once in PL, at PL:3037 in PL-77, as the name of LL-346. PL-77 states no attractor and no force. The batch 18 search for the phrase was scoped to LP only.

Out-edges: the checker also searched II; 0 lines cite the seven entries. This extends the batch 18 note on IP and IC.

Titles: one changed (PP-251), with 95 PI copies. No slot count changes: 150 remain.

New loci, not changed here:
- `dag-crossing-method.md` lines 65-67 write the three tests for one constraint. The half-by-half reading that PP-248, 249, 251 and 365 now use is not stated by the method. Whether a conjunction is tested whole or by halves is open.
- PP-365's title still says "Consequence-Aware", which its own Irreducibility says has no parent behind it (already left for the title pass).
- PP-249 keeps Tier 3 on an entry that says its claim is not established. This is a case of the open locus on Tier for BARREN entries.
- PP-257 names PP-252 and PP-341 names PP-251. Those PP-internal citations were not checked against the restated text.
- The checker cited the method tests as M:71-73. In `dag-crossing-method.md` at `b806ab9` and at `f38b73c`, lines 71-73 are the Fold tests and the crossing tests are at lines 65-67. The checker's reading of the tests is right, and only its line numbers are off.

### Batch 19

The Worker (Sonnet) made the return against `b806ab9` (sha256 `86369fa2376457d95554c0c161b69095b7c76784e747245a121546c841bf4ff0`). It covers eight slots of the table below: the LP slots of PP-258, PP-259, PP-260, PP-262, PP-264 and PP-265, and the PL slots of PP-258 and PP-260. It was applied on top of `190a57b`, where every one of its 36 old texts still occurs once. OPEN PM read every parent and every adopted carrier whole (PL-19, PL-29, PL-38, PL-145, PL-177, PL-236, PL-237, PL-240, PL-16; LP-175, LP-176, LP-177, LP-178, LP-180, LP-582), checked the Worker's quotations of each against the text, and amended the tags, one Irreducibility, one set of corollaries and the form of all six Irreducibility sections.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-258 | PL-237 (was PL-177) | LP-582 (was LP-175) | BARREN | PL-177 states that a partial excavation honest about its incompleteness is legitimate; LP-175 states that an untested position is alive and shifting before it is visited. Neither has tension measurement. LP-582 states that tension-coherence measurement must be a passive continuous signal and not an on-demand check, because the decay occurs between checks; PL-237 states that the tension that sustains sovereignty decays unless it is exercised. Restated: where the tension a meter reads is the tension that sustains an entity's sovereignty and also constitutes the entity, its measurement must be continuous. Each half holds from one parent alone (Tests 1 and 2); the two share LL-411; a conjunction. |
| PP-259 | PL-38 (kept) | LP-176 (kept) | BARREN | LP-176 states that an untested position's derivation path is unknown until traversed and has no mesh or administration. Restated: where the topology is read as a distributed consequence mesh, there is no administrative layer above it (PL-38). Fails Test 1 under the stated condition. |
| PP-260 | PL-236 (was PL-240) | LP-177 (kept) | BARREN | The Derives line named PL-240 under a title no PL entry bears; PL-240 states map incompleteness as a discovery engine and has no debt. LP-177 states the relational pull of an unvisited node and has no cascade or interference. PL-236 states that unexcavated pre-existing derivations are a current debt. Restated: where the territory opened at a point of cascade interference is unexcavated pre-existing derivations, it is a current debt that existed before the interference (PL-236). Fails Test 1 under the stated condition. |
| PP-262 | PL-19 (kept) | LP-178 (kept) | BARREN | LP-178 states the sovereignty of an unvisited node and has no record, integrator or mass. Restated: where the record of accumulated consequence mass is the accountability record of topology interactions, it must be a living structure carried as Structural Mass (PL-19). Fails Test 1 under the stated condition. |
| PP-264 | PL-145 (kept) | LP-180 (kept) | BARREN | LP-180 states the value of an untested position as fuel and has no recursion or layers. LP-401, LP-164 and LP-301 are near and are not adopted: each would import a condition (scales of tension, a survey, assumptions) the entry does not state. Restated: where the layers of a recursive consequence substrate are territory that traversal explores, every traversal creates more unexplored territory than it resolves (PL-145). Fails Test 1 under the stated condition. |
| PP-265 | PL-29 (kept) | LP-180 (kept) | BARREN | LP-180 has no cost that precedes discovery. LP-491 states PL-29's rule for a survey's territory and is not adopted: the entry names no survey. Restated: where unexplored levels of a recursive consequence substrate are undiscovered structures, they are already incurring thermodynamic cost and discovery does not start the meter (PL-29). Fails Test 1 under the stated condition. |

OPEN PM's review. The Worker's text is kept except where listed:
- **Irreducibility form.** All six new Irreducibility sections began "Re-crossed under D19" without the `**Irreducibility:**` label that the 79 earlier restated entries carry. The label is added.
- **PP-258 test reading.** The Worker classed PP-258 by Test 2 and said Test 1 "does not decide". Under the reading adopted at the batch 18 check (PP-248), a conjunction is tested half by half: the measurement holds from LP-582 alone (Test 2) and the decay unless exercised from PL-237 alone (Test 1). The sentence now says so.
- **Re-points over NO CARRIER.** The Worker rated PP-258's two re-points low-medium and medium-low, and PP-260's PL re-point medium-low. Each is accepted. LP-582's corollary that measurement must be continuous because the decay occurs between checks is the rule the old title reached for with "archived readings are expired"; PL-177 and LP-175 state nothing of it. For PP-260, the old Derives title ("Navigation Debt … Governance Debt") matches no PL entry, and the entry's claim is a debt for unmapped territory, which is PL-236's rule and not PL-240's. PL-240 does cite LL-245, the LL of LP-177 and of the old tag, so the id may be the one meant; the Irreducibility now records that, and that PL-240's rule is still not the entry's. The rows file's candidates (PL-205 for PP-258, PL-29 for PP-260) are not adopted, for the Worker's reasons.
- **Tags.** The Worker kept every tag. A tag stays only when both current parents cite the LL (batch 17, batch 18). PP-258's `[shared LL-243]` becomes `[shared LL-411]` (PL-237 and LP-582 both cite LL-411, neither cites LL-243; the Irreducibility says so). Five tags are removed, because the PL parent does not cite the LP parent's LL: PP-259 (LL-244; PL-38 cites LL-3), PP-260 (LL-245; PL-236 cites LL-409), PP-262 (LL-246; PL-19 cites LL-8, LL-473, LL-152, LL-153), PP-264 (LL-248; PL-145 cites LL-239, LL-247) and PP-265 (LL-248; PL-29 cites LL-475, LL-474).
- **PP-260 corollaries.** The Worker's corollary (3) was a statement about PL-236's wording and not a corollary. It is folded into the "Not asserted" corollary, which is now (3).

Titles: six changed (PP-258, 259, 260, 262, 264, 265). Each title's 95 copies in PI were replaced with it (570 copies), so no PI copy of these six is stale. The Worker had left them, which is not the practice.

How the slots are counted: the LP slot of PP-258 and the PL slots of PP-258 and PP-260 are RE-POINTs; the LP slots of PP-259, PP-260, PP-262, PP-264 and PP-265 are NO CARRIER, each Applies line kept with nothing attributed to it. That makes 8 slots corrected. **142 remain.** BARREN lines: 79 → 85.

Out-edges: IP and IC cite none of the six entries. PI cites each only on its 95 Derives lines. In PP, PP-264 is named in overlap notes at PP-252 and PP-257, and PP-265 at PP-253; they stay true.

Loci, not changed here:
- PL-38's title names the logical and the physical, and its body uses neither word; it states that there is no administrative layer above the topology. PP-41, PP-164 and PP-200 also derive from PL-38 and may read the title as the rule.
- LP-251 states that a captured record is born stale; PL-19 requires the accountability record to be a living structure. Two entries in tension; PP-262 uses PL-19 only.
- PP-264 and PP-265 apply the same LP-180 with nothing attributed to it, over PL-145 and PL-29; whoever passes LP-180 sees both.
- Each entry's subject noun (a meter, a distributed consequence mesh, cascade interference, a consequence mass integrator, a recursive consequence substrate) has no parent and survives only as the stated condition.
- PP-258 is the only PP entry on LP-582; PP-721 names LP-582 only to record that it does not carry a boundary-surface mechanic. PP-199 also derives from PL-237.
- PP-262 overlaps thirteen other PP entries on PL-19, PP-357 ("Topological Consequence Integrator") nearest; PP-260 overlaps PP-235 and PP-492 on PL-236; overlap is noted, not classified.
- The PI Derives-from lines tag all six entries [SUBSUMED]; the PP file now marks them BARREN.
- Kernel citations of these six entries were not checked.

### Batch 21

The Worker (Sonnet) made the return against `f38b73c` (sha256 `bc37066adb94f30d77bcbff02dc0a39aadb47ab931b3c614cc33553b821de333`). It covers eight slots of the table below: the LP slots of PP-277, PP-278, PP-280, PP-282, PP-283 and PP-284, and the PL slots of PP-279 and PP-282. It was applied on top of `e5eb97e`, where every one of its 42 old texts still occurs once. OPEN PM read every parent and every adopted carrier whole (PL-1, PL-40, PL-145, PL-228, PL-255, PL-322, PL-323; LP-23, LP-136, LP-192, LP-193, LP-194, LP-383), checked the Worker's quotations of each against the text, and amended the tags, four Irreducibility test readings, two other Irreducibility sentences and six sets of corollaries.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-277 | PL-1 (kept) | LP-136 (was LP-191) | BARREN | LP-191 states that the verbs of accountability are the same at every scale and has no connection, atrophy or edge. LP-136 states that an edge needs continuous traversal and starves when traversal stops. Restated: where a test for connection atrophy is a test of structural integrity, it meets the same standard at every scale (PL-1). Each half holds from one parent alone (Tests 1 and 2); a conjunction. |
| PP-278 | PL-255 (kept) | LP-136 (was LP-191) | BARREN | As PP-277 for LP-191. Restated: where a connection is a structure maintained by continuous action, no depth is exempt from that action (PL-255), and an edge is kept by traversal (LP-136). Each half holds from one parent alone; a conjunction. |
| PP-279 | PL-322 (was PL-228) | LP-23 (kept) | BARREN | PL-228 states that the exercise of a right is present-tense and its inherence is not; the Derives line named it under a title no PL entry has ("High-Consequence Intersections Are Constitutionally Priority Governance Sites"). No PL entry states that such intersections are priority governance sites. PL-322 states that the tension between two sovereign derivations at one intersection is irreducible and managed, not resolved. Restated: where a boundary between nodes is such an intersection, the tension is managed (PL-322), and each node has its own gate (LP-23). Each half holds from one parent alone; a conjunction. |
| PP-280 | PL-323 (kept) | LP-192 (kept) | BARREN | LP-192 states that an agent is constituted by its active derivation work and has no mesh, sovereignty claim or tension. LP-563 is near and is not adopted: PL-323 × LP-563 is PP-273's pair. Restated: where a truth is the tension between overlapping sovereignty claims, resolving or extracting the tension leaves a dead truth (PL-323). Fails Test 1 under the stated condition. |
| PP-282 | PL-228 (kept; title corrected) | LP-383 (was LP-193) | BARREN | LP-193 states that an agent is the ongoing process of comprehension and has no edge, weight or consequence. LP-383 states that a consequence crossing an edge is modulated by the edge's confidence score. PL-228 carries nothing of the entry; its Derives line is kept with nothing attributed to it, and its stale title is replaced by its own. Restated: where an edge's weight is its confidence score, consequences cross high-weight edges with high fidelity and are dampened by low-weight edges (LP-383). Fails Test 2 under the stated condition. |
| PP-283 | PL-40 (kept) | LP-194 (kept) | BARREN | LP-194 states that the paradox engine's oscillation at the boundaries generates new edges and has no cascade, trigger, response or sovereignty claim. Restated: where a triggered response acts on a sovereignty claim, the claim is proved by present traversal at the trigger, and a stored certificate is a label (PL-40). Fails Test 1 under the stated condition. |
| PP-284 | PL-145 (kept) | LP-194 (kept) | BARREN | LP-194 carries a boundary that generates edges and has no cascade or response. Restated: where a response to a cascade is a traversal, it creates more unexplored territory than it maps (PL-145), and a boundary it reaches generates new edges (LP-194). Each half holds from one parent alone; a conjunction. |

OPEN PM's review. The Worker's text is kept except where listed:
- **Tags.** The Worker kept every tag. A tag stays only when both current parents cite the LL (batch 17, batch 18, batch 19). All seven are removed: PP-277 and PP-278 `[shared LL-66]` (LP-136 cites LL-177; PL-1 cites LL-66 and PL-255 cites LL-452), PP-279 `[shared LL-259]` (PL-322 cites LL-329 and LL-219; LP-23 cites LL-1), PP-280 `[shared LL-259]` (LP-192 cites LL-259; PL-323 does not), PP-282 `[shared LL-262]` (PL-228 cites LL-262; LP-383 cites LL-210), PP-283 `[shared LL-270]` (LP-194 cites LL-270; PL-40 cites LL-8) and PP-284 `[shared LL-270]` (PL-145 cites LL-239 and LL-247). The Worker's flag 1 had said the last three still match; they match only the LP parent.
- **Test reading.** PP-277, PP-278, PP-279 and PP-284 are conjunctions. The Worker classed each by Test 1 and said "Tests 2 and 3 are not reached". Under the reading adopted at the batch 18 check, a conjunction is tested half by half: each Irreducibility now says which half holds from which parent alone (Tests 1 and 2), and that Test 3 is not reached. PP-283's "Test 3: eighteen other PP entries …" now says Test 3 is not reached before it lists the overlaps; PP-282's Test 1 sentence now says only that PL-228 gives nothing and is not used.
- **PP-279's re-point.** The Worker rated it low-medium. It is accepted: PL-322 keeps the entry's subject (sovereign derivations at an intersection) and only PL-322's own rule is attributed. OPEN PM's own search, recorded in the Irreducibility: PL entries with "priority" and "intersection" or "consequence" are PL-23, PL-165, PL-213, PL-252, PL-259, PL-275, PL-309 and PL-311, none of which states that intersections are priority governance sites, and "governance site" occurs in neither PL nor LP. The alternative was NO CARRIER with the entry on LP-23 alone, which would restate LP-23 and keep nothing of the entry's subject.
- **Corollaries.** Each entry now has one last "Not asserted" corollary. In PP-277 and PP-278, corollary (2) was a statement about the entry's own reading (traffic as scale, monitoring as maintenance) and not a corollary; it is folded with (3) and (4) into (2). In PP-279, PP-280, PP-282 and PP-284, the two "Not asserted" corollaries are folded into (3).

Titles: seven changed (PP-277, 278, 279, 280, 282, 283, 284). Each title's 95 copies in PI were replaced with it (665 copies).

How the slots are counted: the LP slots of PP-277, PP-278 and PP-282 and the PL slot of PP-279 are RE-POINTs; the LP slot of PP-284 is a RESTATE (LP-194 kept for what it carries); the LP slots of PP-280 and PP-283 and the PL slot of PP-282 are NO CARRIER, each line kept with nothing attributed to it. That makes 8 slots corrected. **134 remain.** BARREN lines: 85 → 92.

Out-edges: IP and IC cite none of the seven entries. PI cites each only on its 95 Derives lines. In PP, PP-283 is named in the overlap list at PP-254 and PP-284 in the list at PP-252; they stay true.

Loci, not changed here:
- PP-272's Derives line still names PL-228 under the title "High-Consequence Intersections Are Constitutionally Priority Governance Sites", which no PL entry has. It is left for the batch that holds PP-272's slot.
- PP-282 rests on LP-383 alone; whether PL-228 should stay on its Derives line is a question for the method (the same holds for every NO CARRIER line kept).
- Close siblings, not classified: PP-280 and PP-273 (PL-323); PP-279 and PP-563 (PL-322); PP-277, PP-278, PP-187 and PP-188 (LP-136); PP-278 and PP-516 (PL-255); PP-283 and PP-254 (PL-40); PP-284 and PP-252 (PL-145), and the "Self-Multiplying" titles of PP-263, PP-264, PP-268 and PP-285.
- PP-277, PP-278 and PP-282 now rest on LP-136 and LP-383; a later change to either reopens them.
- Each entry's reading (scale as depth, monitoring as maintenance, a boundary as an intersection, weight as confidence, a response as a traversal) has no parent and survives only as the stated condition. CP-28 is the source of LP-383's confidence score and is not a parent of PP-282.
- The PI Derives-from lines tag all seven entries [SUBSUMED]; the PP file now marks them BARREN.
- Kernel citations of these seven entries were not checked.

Note on batch 19 (2026-10-31T01:57:40Z): the ARC Lead searched the kernel for the six batch-19 entries (note `arc-lead-note-kernel-cites-batch19-entries-e5eb97e.md`, sha256 `d32d011c2e72f79467ed3214766033226e958cc9906258fcd894e72b49fe1bcc`): none is cited in the IP, IC or kernel source files at kernel `1195baa`. The kernel rows file, certification and tests were not searched.

### Batch 19, independent check

A blind checker (Opus; brief sha256 `43b984ca2bf6bc35fef0f4701eee59d38ce09307c2c82adb41fb5f168b9a0bd3`, return `6dbe650de4875b04cd353e44500cf453e570624f4844cb659c9072b3b6db0bb8`) used its own copy of A at `e5eb97e`. It read each entry, each parent and the entries named below whole, and wrote its entry judgments before it opened this record. It gave HOLDS for PP-258 and AMEND for PP-259, PP-260, PP-262, PP-264 and PP-265. It agreed with all six BARREN marks, with the re-points of PP-258 and the PL re-point of PP-260, with the five LP slots closed as NO CARRIER, with the tag decisions and with the 570 PI title copies. Each AMEND was read again by OPEN PM at the tip and adopted; the fixes are in the same commit as batch 20.

Adopted:
- **PP-264 and PP-265, quotations.** Both Irreducibility sections quoted LP-180 as "the most valuable node in the graph". LP-180 says "in its local neighborhood". The batch 19 review said it checked the Worker's quotations against the parent text and missed this one. Both quotations now read as LP-180 does.
- **Line references.** Five `PP-n (:m)` references in the batch's Irreducibility sections pointed at the wrong line (PP-492 and PP-261 in PP-260, PP-357 in PP-262, PP-263 in PP-264, PP-264 in PP-265). A reference points at the entry's Derives line (heading + 5), and every line inserted earlier in the file moves it. The batch 19 review did not check them. They are recomputed after the batch 20 edits (PP-492 :9574, PP-261 :5321, PP-357 :7128, PP-263 :5363, PP-264 :5382), and from this batch on, the apply step recomputes every `PP-n (:m)` reference in PP and asserts that each one is right.
- **PP-259, Irreducibility.** It said only PL-83 and PL-94 use "mesh" in PL. PL-88 (PL :3270) also does. The sentence now names PL-83, PL-88 and PL-94.
- **PP-264, Irreducibility paragraph 2.** It narrowed PL-145's frontier to "the frontier of the layers" and dropped "measured against the full topology". It now states PL-145's frontier as PL-145 does. The checker rated this medium; it is adopted because the narrower reading is not PL-145's.
- **PP-252, overlap note.** It said PP-257, PP-263, PP-264 and PP-268 "are on the same obligation subject". As restated, PP-263 and PP-264 have no obligation subject, and after batch 20 neither has PP-268. The note now says they apply the same PL-145 rule to other subjects (untested positions, the frontier itself, the layers of a recursive consequence substrate and the reach of a cascade).

Not adopted: none. The checker's notes on the PI `[SUBSUMED]` tag agree with the record's locus and add that every bracketed tag after a title in PI is `[SUBSUMED]` (68,115 of them, no other form): a convention of the PI file, not a stale tag of these six.

Out-edges: the checker also searched II; 0 lines cite the six entries.

New loci, not changed here:
- PP-261 (PP :5321) carries `[shared LL-245]`, the LL of its old above parent LP-177; its parents PL-266 and LP-616 both cite LL-472, which its own italic cites.
- PP-357 attributes to LP-236 a "topological consequence integrator", which LP-236 (Perpetual Maintenance Floor) does not state, and to PL-19 a structural mass that is a living record and cannot be archived, which the batch 19 crossing of PP-262 found PL-19 does not carry; its `[shared LL-157]` is cited by neither parent.
- PL-38's title ("The Logical and Physical Cannot Be Administered Separately") is not carried by its body, which states only that there is no administrative layer above the topology (already a batch 19 locus; the checker reached it on its own path).
- LP-251's corollary "The system contains no 'living records'" stands against PL-19's living accountability record (already a batch 19 locus; reached again).
- Method: the apply step of a batch must recompute the line references the batch writes, and the review must check every quotation of a parent word for word against the parent, not only that a quoted phrase occurs in the spec.

### Batch 20

The Worker (Sonnet) made the return against `b806ab9` (sha256 `1301541b98a85b0046a3db0fd8645eb28784c6b20f7d0bd0017d8b124f22ae51`). It covers nine slots of the table below: the LP slots of PP-266, PP-267, PP-268, PP-271, PP-272 and PP-274, and the PL slots of PP-266, PP-272 and PP-274. It was applied on top of `8a0cb25`, where every one of its 36 old texts still occurs once. OPEN PM read every parent and every adopted carrier whole (PL-27, PL-40, PL-81, PL-145, PL-181, PL-228, PL-322; LP-181, LP-182, LP-183, LP-186, LP-187, LP-188, LP-209, LP-397) and the alternatives the entries name (PL-17, LP-391, LP-117, LP-120, LP-480, LP-672), checked the Worker's quotations of each against the text, and amended two PL slots, the tags, three Irreducibility sentences and one italic.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-266 | PL-181 (kept) | LP-181 (kept) | BARREN | LP-181 states that the system catalogs untested graph positions as a map of negative space; PL-181 states metabolic self-correction and the mutual transformation of two traversers. Neither mentions a channel, a direction or a flow. No PL or LP entry found states that a consequence channel is bidirectional. Both lines are kept with nothing attributed to them; the entry says the earlier claim is not established. Each parent's statement holds from it alone (Tests 1 and 2); a conjunction. |
| PP-267 | PL-40 (kept) | LP-186 (was LP-182) | BARREN | LP-182 states that an untested position is a pre-existing structure and has no obligation, cascade or reach. LP-186 states that a command at the macro scale triggers the same command recursively down through every scale, cascading accountability all the way down. Restated: where the reach of a cascade down through every scale is held as a sovereignty claim, proving it requires present traversal, and a documented reach is a label (PL-40). Fails Test 1 under the stated condition. |
| PP-268 | PL-145 (kept) | LP-186 (was LP-183) | BARREN | LP-183 states that the agent interface uses the same verbs at every scale and has no obligation, cascade or reach. Restated: where proving the reach of a cascade down through every scale (LP-186) is a traversal, it creates more unexplored territory than it maps (PL-145). Fails Test 1 under the stated condition. |
| PP-271 | PL-27 (kept) | LP-209 (was LP-186) | BARREN | LP-186 states the cascade of a command down through every scale and has no verification, sovereignty or completeness. LP-209 states the single verification operation that proves accountability at every scale. Restated: where such a verification is held as a claim that the topology is complete, the claim cannot be self-certified (PL-27). Fails Test 1 under the stated condition. |
| PP-272 | PL-322 (was PL-228) | LP-187 (kept) | BARREN | PL-228 states that the exercise of a right is present-tense and its inherence is not; the Derives line named it under a title no PL entry has ("High-Consequence Intersections Are Constitutionally Priority Governance Sites"). LP-187 states that the most valuable commands are those applied to unknown objects and has no sovereignty, intersection or governance. PL-322 states that the tension between two sovereign derivations at one intersection is irreducible and managed, not resolved. Restated to PL-322's rule; nothing is attributed to LP-187. Fails Test 1 under the stated condition. |
| PP-274 | PL-81 (kept) | LP-397 (was LP-188) | BARREN | LP-188 states that the agent interface is defined in its own verbs and has no pulse, synchronization or schedule. LP-397 states that a phase-lock between scales cannot be stored or paused and exists only as an active exchange. PL-81 states that an edge exists only while conducting force; it has no synchronization or schedule, and nothing is attributed to it. Restated: where a synchronization of pulses is a phase-lock between scales, it cannot be stored or paused (LP-397). Fails Test 2 under the stated condition. |

OPEN PM's review. The Worker's text is kept except where listed:
- **PP-272, PL slot.** The Worker closed it as NO CARRIER, kept PL-228 under its stale title and wrote the entry as a claim that is not established. PP-279 (batch 21) had the same stale title on its Derives line and was re-pointed to PL-322, which carries the subject both entries share: sovereignty claims that meet at one intersection. PP-272 is re-pointed the same way, so that one family of entries reads one way. Only PL-322's own rule is attributed, and the title, italic, Irreducible Claim and corollaries are restated to it (the first two corollaries from PL-322, the last one "Not asserted"). LP-563 states the same rule from the LP side and is not adopted for the Applies-to line, since PL-322 × LP-563 is PP-563's pair; LP-187 stays as NO CARRIER. The rule for this family: where a Derives line names PL-228 under the stale title, it is re-pointed to the nearest PL entry when that entry carries the entry's subject (PP-279, PP-272); otherwise PL-228 is kept, with its title corrected and nothing attributed to it (PP-282). PL-228 remains the Derives parent of PP-84, PP-86, PP-282 and PP-487.
- **PP-274, PL slot.** The Worker kept PL-81 for "a record of a non-conducting edge is not an edge", under the condition that a stored synchronization is such a record. That condition gives PL-81 a role the earlier text never gave it (the earlier text mentioned no edge), and no parent states it. A condition is not invented to keep a parent. The slot is NO CARRIER: the Derives line stays, nothing is attributed to PL-81, the title and the "non-conducting edge" half of the claim are cut, and the entry rests on LP-397 alone (Test 2). PL-17 (Logical Proofs About the Topology Expire) and LP-391 (Present-Tense Rhythm Enforcement) were read as alternatives and are not adopted; the Irreducibility names both and says why PL-17 does not bear the claim.
- **Tags.** The Worker kept every tag. A tag stays only when both current parents cite the LL (batch 17 on). All six are removed: PP-266 `[shared LL-249]` (LP-181 cites LL-249; PL-181 cites LL-31, LL-42 and LL-453), PP-267 `[shared LL-250]` (PL-40 cites LL-8 and LL-24; LP-186 cites LL-254), PP-268 `[shared LL-251]` (PL-145 cites LL-239 and LL-247), PP-271 `[shared LL-254]` (PL-27 cites LL-10 and LL-26; LP-209 cites LL-66), PP-272 `[shared LL-256]` (PL-322 cites LL-219 and LL-329; LP-187 cites LL-256) and PP-274 `[shared LL-60]` (PL-81 cites LL-73, LL-82, LL-160 and LL-430; LP-397 cites LL-299).
- **PP-267.** The Irreducibility said that the alternative to the re-point is NO CARRIER with LP-182 kept, which removes the overlap with PP-242. That is a review note and not a statement of the entry, and it is moved here: the re-point is kept (low-medium in the return) because LP-186 carries the reach of a cascade down through every scale, the entry's subject, under a stated condition; its word is accountability and the entry's was obligation, and the entry says so. After the re-point PP-267 sits on PL-40 × LP-186, PP-242's pair; Test 1 decides PP-267 before Test 3 is reached, so the overlap is noted, not classified. The sentence on LP-186's other children now names PP-241 and, after this batch, PP-268.
- **Openings.** Four Irreducibility sections began "Re-crossed and re-pointed under D19". They now begin "Re-crossed under D19", as every other D19 entry does.
- **PP-266, italic.** It said "The entry's claim" for the claim the entry says is not established. It now says "The earlier claim", as PP-249's does (batch 18 check).

Titles: six changed (PP-266, 267, 268, 271, 272, 274). Each title's 95 copies in PI were replaced with it (570 copies).

How the slots are counted: the LP slots of PP-267, PP-268, PP-271 and PP-274 and the PL slot of PP-272 are RE-POINTs; the LP and PL slots of PP-266, the LP slot of PP-272 and the PL slot of PP-274 are NO CARRIER, each line kept with nothing attributed to it. That makes 9 slots corrected. **125 remain.** BARREN lines: 92 → 98.

Out-edges: IP and IC cite none of the six entries. PI cites each only on its 95 Derives lines. In PP, PP-252's overlap note named PP-268 on "the same obligation subject" and now names the subjects as they stand (above); PP-254 lists PP-267, and PP-251 and PP-341 list PP-271, among the entries that derive from PL-40 and PL-27; those lists stay true.

Loci, not changed here:
- PP-273 (PL-323 × LP-563) attributes to LP-563 that "sovereignty gradient intersections are points where sovereignty claims from different domains overlap", the phrase PP-272's earlier claim gave LP-187; "sovereignty gradient" occurs in no LP or PL entry. Its `[shared LL-256]` matches neither parent (batch 21 check, out of scope). It is left for the batch that holds its slot.
- The batch 21 locus on PP-272's stale PL-228 title is closed by the re-point above. PP-84, PP-86 and PP-487 still name PL-228 and were not read here; whether they carry the stale title is open.
- PP-242 and PP-267 now sit on the same pair (PL-40 × LP-186); LP-186 is the Applies-to parent of PP-241, PP-242, PP-267 and PP-268. PP-272, PP-279 and PP-563 all state PL-322's rule. Close siblings, not classified.
- PP-266 and PP-272's LP-187 half rest on NO CARRIER lines; whether such a line should stay is the open method question already named at batch 21.
- "bidirectional" occurs in LP-630 and in PL-90, PL-99 and PL-209, and LP-120 states verification across blind spots; each was read against its entry and none carries it. They are named so that a later reader does not search again from nothing.
- PP-267, PP-268, PP-271 and PP-274 now rest on LP-186, LP-209 and LP-397; a later change to any of them reopens these entries.
- The PI Derives-from lines tag all six entries [SUBSUMED]; the PP file now marks them BARREN (a PI-wide convention, see the batch 19 check).
- Kernel citations of these six entries were not checked.

### Batch 21, independent check

A blind checker (Opus; brief sha256 `96df7b24c601388d1a23d1d95794c886c798fa745707430522a884bd364d2087`, return `5d2f84ebe66402337d50cc0d4b8a45c842ed64b1a4b347806d50b50638de4c6d`) used its own copy of A at `8a0cb25`. It read each entry, each parent and the entries named below whole, and wrote its entry judgments before it opened this record. It gave HOLDS for PP-277, PP-278, PP-279, PP-280 and PP-282 and AMEND for PP-283 and PP-284. It agreed with every class (all seven BARREN, by the same tests), with the removal of every tag, with the re-point of PP-279 to PL-322 and with the 665 PI copies. It disclosed that an early recursive search printed three truncated lines of this record; it read nothing more of the record until its entry sections were written.

Adopted (checked against the parents at `8c49634`):
- **PP-284, LP-194's actor.** The title, italic, claim and Test 2 sentence said that a boundary the response's traversal reaches generates new edges (LP-194). LP-194 states edge generation only for the paradox engine's oscillation acting on the system's boundaries (its claim and its Irreducibility); it never says a traversal makes a boundary generate edges. The reading of the traversal as that oscillation is now part of the stated condition, in all four places, and the title is restated ("Where That Traversal Is Read as the Engine's Oscillation at a Boundary, the Boundary Generates New Edges"). The class is unchanged. The batch 21 review restated LP-194's rule without its actor and missed this.
- **PP-284, overlap note.** It said PP-263, PP-264, PP-268 and PP-285 carry "Self-Multiplying" or "Self-Multiplies" in their titles. PP-264's title has neither word; PP-138, PP-141 and PP-329 also carry it. It now names PP-138, PP-141, PP-263, PP-268, PP-285 and PP-329, and names PP-252, PP-257 and PP-264 as stating the same PL-145 rule over a different traversal. This record's batch 21 sibling line repeats the old list; that line stands as written and is corrected here.
- **PP-283, PL-40's words.** "A pre-stored basis for the claim" (claim paragraph 2 and corollary 1) is not PL-40's phrase, and "basis" is the word the entry's own Irreducibility cuts. Both now read "a pre-evaluated sovereignty certificate", PL-40's phrase; the italic's "stored sovereignty certificate" also reads "pre-evaluated". Corollary 2 said evaluation lifetimes "are bounded" by the metabolism rate; PL-40 says they "must be bounded". It now says "must be bounded", and the gloss "so a basis stored for such a region expires faster" is cut. The title's "A Stored Certificate Is a Label" is left: the checker read "stored" as a near paraphrase of "pre-evaluated" and did not amend it.
- **PP-283, candidates.** LP-21 (Sovereign-Bound Restorative Force), the closest LP in kind, is now named as read and not adopted: it states that a restorative process presents an irreducibility proof at an entity's interior-controlled gate and mentions no cascade and no trigger.
- **PP-279, LP-23's word.** LP-23 speaks of sub-components, not nodes. The title, italic, claim, corollaries and Test 2 sentence now say "sub-component(s)"; the earlier text's "every node maintains its own sovereignty" stays quoted as the earlier text. The Irreducibility now also states that LP-23 grounds its gates in "sovereignty cannot be suspended at any depth" (LL-1), the nearest LP text to that earlier phrase, which the batch understated.
- **PP-280, candidates.** LP-23 is now named as read: it mentions no overlapping claims and no tension, so the constraint would still hold from PL-323 alone.
- **PP-282, candidates.** PL-14, PL-77 and PL-286 are now named with their titles and the reason they are not adopted: none states that a consequence crossing an edge is modulated by the edge's confidence or weight.
- **PP-277, wording.** LP-136 does not use the word "atrophy"; the claim now says LP-136 supplies what the entry calls an atrophied connection and that LP-136 says the edge starves and its structural integrity collapses. Corollary 1's "a health check for connections" now reads "a test for connection atrophy". The candidate summary now covers LP-108 (the engine converting unresolved gaps into new structure) and LP-245 (the reactivation of dissolved boundaries), which the old summary did not fit.
- **PP-278, PP-279, PP-282, tense.** "The entry's own words" for words the restated entries no longer use now reads "the earlier text's words".
- **PP-281, tag.** Its Derives line carried `[shared LL-262]`, the LL of its old above parent LP-193. PL-188 applies to LL-203 and LP-376 is CP-28 × LL-203, which its own Irreducibility names. The tag now reads `[shared LL-203]`.

PI: the two changed titles (PP-279 and PP-284) were replaced in all 95 PI copies each (190). Line references were recomputed after the edit: every `PP-n (:m)` reference in PP points at its entry's heading + 5.

Not adopted: PP-280's italic says "a boundary between sovereignty claims" where its claim says "the truth a system holds"; neither statement of the condition adds a rule, and the checker did not amend it.

Out-edges: the checker also searched II; 0 lines cite the seven entries (II has uncited "priority governance" wording, with no PP citation).

Loci, not changed here:
- PP-273 (PP :5555): `[shared LL-256]` matches neither PL-323 nor LP-563 (CP-40 × LL-329), and its claim describes LP-563 as stating that gradient intersections are where sovereignty claims overlap, which LP-563 does not state (already a batch 20 locus; reached again).
- PP-285: it says LP-195 establishes consequence-weighted boundaries; LP-195 is "Topology-Mapping Oscillation". For its own batch.
- PL-40's Derives and Applies lines carry a doubled LL slot ("PC-5 (× LL: Phase 2 — Uncited LL Entries) × LL-8"). LP-194 is followed by two `---` separators.
- PP-272's stale PL-228 title and its description of LP-187, found by the checker at `8a0cb25`, were resolved by batch 20.
- Method: a review must check every statement an entry makes about other entries (titles, overlap lists) against those entries, and must keep a parent's actor when it restates the parent's rule (LP-194's edges come from the engine's oscillation, not from whatever reaches the boundary).

### Batch 20, independent check

A blind checker (Opus; brief sha256 `ef90f431071f427a9455e05f694e85697c6fc62f95b9b00ab7b49a75906fc484`, return `16d4634a0f101b0083e1465126c8461acf6a0ae834d43ad826c7e7d3d11f1786`) used its own copy of A at `8c49634`. It read each entry, each parent and the entries named below whole, re-ran every search the entries cite (each reproduced), and wrote its entry judgments before it opened this record. It gave HOLDS for PP-266, PP-267, PP-271, PP-272 and PP-274 and AMEND for PP-268. It agreed with every class (all six BARREN, by the same tests), with every re-point, with every NO CARRIER slot, with the removal of all six tags, with the 95 PI copies per title (all `[SUBSUMED]`) and with the BARREN count (98).

Adopted (checked against the parents at `b326987`):
- **PP-268, title.** Its second clause, "Proving Reach at One Depth Reveals More Beyond It", recast PL-145's frontier ("every attempt to reach the frontier reveals new frontier beyond it") as a depth, and so restated in the title the depth N+1 claim the body cuts. It now reads "The Ratio of Explored to Total Territory Does Not Improve", PL-145's own words; the Irreducibility says so.
- **PP-267, corollary 5.** It listed as not asserted "that listing a cascade's reach in documentation leaves sovereignty over the cascade unproved", which corollary 4 and the claim do assert under the condition. It now reads "that, outside the condition above, listing …".
- **PP-271, PL-27's ancestry.** PL-27 was described as "PC-9"; its header also applies to LL-10 and LL-26. It now reads "PC-9 with LL-10 and LL-26".
- **PP-271, candidates.** LP-650 (Audit-Trail Completeness Verification, CP-21 × LL-155) is now named as read and not adopted: it states that an audit trail must self-prove its completeness, mentions no scale, and holds the reverse of PL-27's stance.
- **PP-274, PL candidates.** PL-110 (fuel not consumed in the present Pulse is lost), PL-113 (no consistency snapshot can certify future consistency) and PL-86 (Edge-Exclusive Force Transmission, which shares LL-299 with LP-397: value is realized only through active edge transmission) are now named as read and not adopted. None mentions synchronization or a schedule; PL-86 would bear the entry only under a further condition neither parent states, so the PL slot stays NO CARRIER and PL-81 stays named.

PI: PP-268's changed title was replaced in all 95 PI copies. Line references were recomputed after the edit: every `PP-n (:m)` reference in PP points at its entry's heading + 5.

Not adopted:
- PP-272, dropping "From Different Domains" (the checker's optional amend, low confidence). The phrase is the entry's own subject, kept as a stated condition and marked not asserted ("PL-322 does not speak of domains"), as restated entries keep their subject; it attributes nothing to a parent.
- PP-267, naming PL-130 and PL-54. PL-130 is already among the five PL "cascade" hits the entry read; PL-54 states obligation at every depth with no cascade and no reach. The entry's sentence stands as true.
- PP-266, the wording "the first test that gives a class deciding": loose, the checker gives it low weight, and the class (BARREN, two single-parent facts) is right.
- The PP header's pair filter (PP :10): none of the six current pairs shares an LL. Method point 29 stands: the filter and the `[shared LL-x]` tag are not evidence, and the method's Zero Pre-Filtering Mandate (§3) stands against the filter. Kept BARREN entries are not removed for failing it.

Out-edges: the checker also searched II; 0 lines cite the six entries (II-26 uses "priority governance" with no PP citation; already noted in the batch 21 check).

Loci, not changed here:
- PP-242 (PP :4930, batch-01, PL-40 × LP-186): `[shared LL-232]` matches neither parent (PL-40: LL-8, LL-24; LP-186: LL-254), and the entry has no Derivational State line. PP-267 now shows proof by present traversal at every scale the cascade reaches to come from PL-40 alone under a condition, so PP-242's "only together" may not survive Test 1. For the re-cross of the batch 01 to 06 entries.
- PP-273: `[shared LL-256]` and its LP-563 attribution (already a batch 20 and batch 21 locus; reached a third time).

### Batch 22

The Worker (Sonnet) made the return against `b326987` (sha256 `93d5c1dd91c204017bc01f30484e13340f8cd673579c5f25a4bdae05b165160f`). It covers nine slots of the table below: the LP slots of PP-285, PP-286, PP-287, PP-289, PP-290 and PP-291, and the PL slots of PP-286, PP-287 and PP-289. It was applied on top of `0f854bd`, where every one of its 18 old texts still occurs once (the batch 20 check changed only PP-267, PP-268, PP-271 and PP-274). OPEN PM read every parent and every adopted carrier whole (PL-40, PL-114, PL-118, PL-145, PL-239, PL-253, PL-266, PL-276; LP-1, LP-27, LP-62, LP-66, LP-195, LP-196, LP-197, LP-198, LP-616), checked the Worker's quotations of each against the text, re-ran its searches, and amended the tags, two search reports, one overlap list, one stale cross-reference, and three corollaries.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-285 | PL-145 (kept) | LP-195 (kept) | BARREN | LP-195 states an oscillation against the boundary of ignorance that maps the shape of what the engine does not know; it has no consequence, weight or cost, and no PL or LP entry has "consequence-weighted". Restated: where the oscillation is a traversal of the topology, it creates more unexplored territory than it maps and every attempt to reach the frontier reveals new frontier beyond it (PL-145). Fails Test 1 under the stated condition. |
| PP-286 | PL-253 (was PL-276) | LP-1 (was LP-195) | BARREN | PL-276 states that unresolved sovereign tensions are a self-renewing source of fertile absence and has no cost, boundary or weight; LP-195 as PP-285. PL-253 states that a membrane isolating a tension subsystem exists because it is maintained; LP-1 that a self-determined boundary consumes continuous energy. Restated: each rule under its own condition. Each half holds from one parent alone (Tests 1 and 2); a conjunction. |
| PP-287 | PL-266 (was PL-276) | LP-196 (kept, NO CARRIER) | BARREN | LP-196 states a self-fueling oscillation engine and has no signal, divergence or liability. PL-276 as PP-286. PL-266 states that maintenance cost is present-tense and non-deferrable. Restated: where maintaining a diverged state is maintaining the derivations involved, its cost is incurred now and cannot be deferred (PL-266). Fails Test 1 under the stated condition. |
| PP-289 | PL-118 (was PL-239) | LP-66 (was LP-197) | BARREN | The Derives line named PL-239 under a title no PL entry has ("… Pre-Computed Optimizations Expire"); PL-239 states that discovery transforms tension. LP-197 states a tension-transforming actuator and has no routing or optimizer. PL-118 states that a structural change instantly invalidates prior evaluations of the region; LP-66 that a pre-planned route cannot be valid and routing re-evaluates at every junction. Each half holds from one parent alone (Tests 1 and 2); a conjunction. |
| PP-290 | PL-114 (kept) | LP-197 (kept, NO CARRIER) | BARREN | LP-197 as PP-289. PL-114 states that a paradox engine not churning in the present Pulse is stopped; it states no duty to detect a death and not that a living system dies before it appears dead. Restated: where a consequence flow is a paradox engine, a flow not churning is a stopped engine, and restarting it instantiates a new one (PL-114). Fails Test 1 under the stated condition. |
| PP-291 | PL-40 (kept) | LP-27 (was LP-198) | BARREN | LP-198 states an excavation-driven oscillation and has no access, gate or decision. LP-27 states that an interior-controlled gate re-evaluates a traverser's rights at every micro-step. Restated: where a stored access decision is a sovereignty claim, it is proved by present traversal and a certificate is a label (PL-40); where it is a gate's authorization, the gate re-evaluates at every micro-step (LP-27). Each half holds from one parent alone; a conjunction. |

OPEN PM's review. The Worker's text is kept except where listed:
- **Tags.** The Worker kept every tag and listed them as loci. A tag stays only when both current parents cite the LL (batch 17 on). All six are removed: PP-285 and PP-286 `[shared LL-273]` (LP-195 cites LL-273; PL-145 cites LL-239 and LL-247, PL-253 cites LL-446, LP-1 cites LL-2), PP-287 `[shared LL-274]` (PL-266 cites LL-472; LP-196 cites LL-274), PP-289 `[shared LL-275]` (PL-118 cites LL-462, LP-66 LL-263), PP-290 `[shared LL-275]` (PL-114 cites LL-301; LP-197 cites LL-275) and PP-291 `[shared LL-277]` (PL-40 cites LL-8, LP-27 LL-6).
- **Searches.** In PP-286, OPEN PM's re-run of the boundary-or-membrane-near-"maint" search found 27 entries where the Worker listed 14 (PL-27, PL-42, PL-46, PL-92, PL-127, PL-129, PL-150; LP-150, LP-330, LP-448, LP-547, LP-548, LP-696 added); their titles and italics were read, none states what a boundary costs or a proportion, and the Irreducibility now gives the full list and names LP-696 and PL-129, the nearest. The "proportional to" search found PL-77 (a share of accountability proportional to a contribution to the field state), not none; the sentence now says so. The other searches the return reports ("consequence-weighted", "boundary of ignorance", "divergence signal", "governance liability", "diverge", "pre-computed", "optimi", "access control", the death phrases) gave the Worker's lists.
- **Re-points.** All accepted. PP-289's PL-118 is the candidate this record names at the PL slot; LP-66 is adopted over LP-62, which says that a pre-planned path holds no present-tense truth and not that routing re-evaluates at every junction. PP-286's pair (PL-253, LP-1) and PP-291's pair (PL-40, LP-27) keep the entry's subject and attribute to each parent only its own rule.
- **Overlap lists.** PP-291 named PP-283 and PP-254 as "the restated ones" among PL-40's children; PP-35, PP-238, PP-239, PP-267 and PP-300 are restated on PL-40 too, and the sentence now names all seven. PP-290 said PP-289 "shares" LP-197; after this batch it does not, and the sentence now says it had the same above parent until its re-point.
- **Corollaries.** PP-290's (1) and (2) were PL-114's own corollaries on organizational engines and routine processes, stated without the entry's condition; each now gives PL-114's words as PL-114's and then the consequence for a flow under the condition, in PP-343's form. PP-291's (2) said an evaluation lifetime "is bounded" by the metabolism rate; PL-40 says it "must be bounded", as PP-283 has it.
- **PP-284.** Its Irreducibility listed PP-268 and PP-285 among the entries whose titles carry "Self-Multiplying" or "Self-Multiplies"; neither title does after the batch 20 check and this batch. The clause now names PP-138, PP-141, PP-263 and PP-329 and says the other two carried it until then.
- **Line reference.** The batch adds 18 lines to the PP file; the reference to PP-492 in PP-260's Irreducibility moved from `:9574` to `:9592`, its Derives line (the method point from the batch 19 check).

Titles: six changed (PP-285, 286, 287, 289, 290, 291). Each title's 95 copies in PI were replaced with it (570 copies).

How the slots are counted: the LP slots of PP-286, PP-289 and PP-291 and the PL slots of PP-286, PP-287 and PP-289 are RE-POINTs; the LP slot of PP-285 is a RESTATE (LP-195 kept for what it carries); the LP slots of PP-287 and PP-290 are NO CARRIER, each line kept with nothing attributed to it. That makes 9 slots corrected. **116 remain.** BARREN lines: 98 → 104.

Out-edges: no spec file other than PP and PI names the six entries. PI cites each only on its 95 Derives lines. In PP, PP-284's Irreducibility names PP-285 (amended above); PP-252 and PP-268 name PP-285 among PL-145's children, PP-254, PP-267 and PP-283 name PP-291 among PL-40's, and PP-343 names PP-290 among PL-114's. Each parent is kept on those lines, so those lists stay true.

Loci, not changed here:
- PP-345, the other child of PL-239, carries the same stale PL-239 title ("Optimization of the Topology Is a Present-Tense Act — Pre-Computed Optimizations Expire"). It is left for the batch that holds its slot.
- PL-114's other children PP-190, PP-339, PP-349, PP-358 and PP-362 still assert detecting a death before an apparent death, which PL-114 does not state.
- PP-290's PL-114 side was misattributed as well (a living system dies before it appears dead); the PL slot of PP-290 is not in the table below, and the correction rides with the LP slot, as at PP-343.
- PP-292 (PL-276 × LP-198) states PP-286's earlier proportional claim for access control, and PP-347 (PL-40 × LP-231) is PP-291's unrestated near sibling; both are batch 23 work.
- PP-287 now rests on PL-266 with the same condition as PP-288's second one; the two are close siblings, not classified. PP-287 names LP-616 as the alternative it did not adopt because D20 marks LP-616 BARREN; a change to that disposition reopens the choice.
- The PI Derives-from lines tag all six entries [SUBSUMED]; the PP file now marks them BARREN.
- Kernel citations of these six entries were not checked.

### Batch 22, independent check

A blind checker (Opus; brief sha256 `26736677d3efd372eb7cb523d1b7449af847011b5f362d4e053132b84814c3cf`, return `0256decc4a0e2e2a8c4a1f4ce504fd0720b56068bb854c5de410b59a4aa2c772`) used its own copy of A at `88784a7`. It read each entry, each parent and the entries named below whole, re-ran every search the entries cite (each reproduced), ran its own concept searches, and wrote its entry judgments before it opened this record. It gave HOLDS for PP-286, PP-287 and PP-289 and AMEND for PP-285, PP-290 and PP-291. It agreed with every class (all six BARREN, by the same tests), with every re-point, with every NO CARRIER slot, with the removal of all six tags (no current pair shares an LL), with the 95 PI copies per title (all `[SUBSUMED]`; no PI line carries an earlier title), with the PP-284 sentence against the current titles, with the BARREN count (104), and found no IP, IC or II line citing the six.

Adopted (checked against the parents at `88784a7`):
- **PP-285, Irreducibility.** It said the titles of PP-138, PP-141, PP-263 and PP-329 "also carry "Self-Multiplying"". PP-141's title carries "Self-Multiplies". The batch 22 review fixed the same words in PP-284 and missed them here. It now reads "Self-Multiplying" or "Self-Multiplies".
- **PP-284, overlap note.** "(PP-268's and PP-285's titles carried it until the batch 20 check and batch 22 replaced them)" paired two events with two titles without saying which went with which. It now reads "(PP-268's title carried it until the batch 20 check, and PP-285's until batch 22)".
- **PP-290, the carrier above.** "No LP entry states a detection duty" was wider than the search behind it, which covered only the death phrases. OPEN PM re-ran the checker's searches over LP: "must be detect" or "must detect" finds LP-590, LP-591, LP-607, LP-655 and LP-698, and "stall", "stopped" or "halt" within 80 characters of "detect" or "warn" finds LP-501 and LP-647. LP-590 requires that a subsumed entity's loss of independent liveness be detectable, LP-647 that a depletion warning arrive before the oscillation engine stalls, LP-655 that a change be detected by the change event itself, and LP-698 that a deferred debt be detected. None states a duty to detect that a flow or a paradox engine has already stopped, so the conclusion (nothing attributed above) stands; the sentence now names the searches and the entries. Claim paragraph 2's "these apply to the flow" now reads "the rules of PL-114 stated above apply to the flow".
- **PP-291, PL-18 and PP-45.** PL-18 (The Past Is Evidence, Not State — Sovereignty Cannot Be Inherited) applies to LL-6, as LP-27 does, and states that sovereignty cannot be carried forward as a credential from a prior state. PL-18 × LP-27 is PP-45, which states on the same above parent that cached permissions and inherited access rights are invalid and names role-based access control in its corollary 2: the closest existing statement of PP-291's stored-access reading and of its cut RBAC corollary. The Irreducibility now names PL-18 as the alternative left carrier, not adopted because PL-40 states the first half in its own words, and PP-45 as the closest overlap, noted and not classified. PL-4, the other PL entry applying LL-6, is named with its claim.
- **PP-289, alternatives.** The checker rated this a gap and not an error. Adopted because the review practice names the near candidates read: PL-17 (Logical Proofs About the Topology Expire) is near the first half and not adopted, since PL-118 states the first half as written; LP-340 (Trajectory-Triggered Invalidation, CP-66 × LL-462), which shares LL-462 with PL-118, mentions no route, junction or pre-planning.
- **Tags outside the slots** (as PP-281's in the batch 21 check). PP-288's Derives line carried `[shared LL-274]`, the LL of LP-196, its above parent before batch 08; PL-266 applies to LL-472 and LP-616 is CP-85 × LL-472, so the tag now reads `[shared LL-472]`. PP-257's `[shared LL-242]` is LP-174's LL (CP-32 × LL-242); PL-145 applies to LL-239 and LL-247, so the tag is removed.
- **DEFECT_LEDGER.md, the D19 row.** It ended at batches 20 and 21 with "125 remain" and did not name batch 22 or the checks of batches 19, 20 and 21. It now names them and reads "116 remain". (Batch 21 was applied before batch 20, and the row keeps that order.)

Verified, not changed: the D20 record marks LP-616 BARREN (`docs/audit/D20_LP_CP85_RECROSS.md`, its table), as PP-287 states; the checker could not open that file under its brief. Line references were recomputed after the edit; none moved (the edits add no lines).

Not adopted:
- The PP header's pair filter (PP :10): already recorded under the batch 04 check; method point 29 stands.
- PP-290's condition "on Which an Optimizer Operates": idle but stated as a condition and not asserted; left for the title pass with the title.

Clean-room: the checker reported that a harness notice named the path of another task's output in this session's own scratch folder. It did not read or use it. The path is inside OPEN PM's own root; no closed-side path or content was involved.

Loci, not changed here:
- PP-343's title ("Must Detect Constitutional Death Before Attempting Repair") contradicts its own restated body; for the title pass.
- LP-110 (the engine cannot stall) and LP-647 (a warning before the engine stalls) sit uneasily in LP; an LP-layer question, not D19's.
- The PP header's "Entry Count: 724 (… Batch 3 pending)" wording is stale.
- PP-190, PP-339, PP-349, PP-358 and PP-362 (PL-114), PP-345 (stale PL-239 title) and PP-347 (PL-40 × LP-231) are already loci of batch 22.

Note on batch 22 (2026-10-31T03:07:41Z): the ARC Lead searched the kernel for the six batch-22 entries, and PP-284, PP-288 and PP-260 as a check (note `arc-lead-note-kernel-cites-batch22-entries-88784a7.md`, sha256 `c6e0508bf163af7b0e99b5e6390bde0f568872c6e4529d1851bd2af02fc7a52a`): none is cited in the IP, IC or kernel source files at kernel `1195baa`. IP and IC are byte-identical across `0f854bd` → `88784a7`. The kernel rows file, certification and tests were not searched.

### Batch 23

The Worker (Sonnet) made the return against `88784a7` (sha256 `4796d940231031bd5ce73dd2bb6923d8d94ab96ddadb86b246d6b9d0a428f378`). It covers nine slots of the table below: the LP slots of PP-292, PP-293, PP-294, PP-295 and PP-296, and the PL slots of PP-292, PP-293, PP-294 and PP-295 (PP-296 has no PL slot in the table; its PL-92 side was read whole and restated with the entry). It was applied on top of `bd7aa2e`, where every one of its 15 old texts still occurs once (the batch 22 check changed only PP-257 and PP-284 to PP-291 and added no lines). OPEN PM read every parent and every adopted carrier whole (PL-92, PL-108, PL-237, PL-276, PL-285, PL-287; LP-24, LP-66, LP-199, LP-202, LP-541, LP-542), checked the Worker's quotations of each against the text, re-ran its searches, and amended the tags, one search report, two overlap lists, one alternatives sentence, two test sentences and one stale cross-reference.

The Worker reported a departure in its header: besides the two earlier returns its brief allowed, it opened `out/batch-22.md` (inside its own folder) for the layout of the table, loci and checks sections only, and used nothing in it as evidence about any entry. Its statements about other entries were checked here against those entries; none rests on the batch 22 return.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-292 | PL-276 (kept, NO CARRIER) | LP-24 (was LP-198) | BARREN | PL-276 states that unresolved sovereign tensions are a self-renewing source of fertile absence and has no cost, boundary, access or weight; LP-198 states that the engine's churning vibrates pre-existing derivations loose and has no access, cost, gate or weight. LP-24 states that an interior-controlled gate must expend metabolic energy to re-evaluate its access criteria continuously, and that a gate not actively defending its boundary degrades into an open state. Restated: where an access control boundary is held as such a gate, LP-24's rule applies. Fails Test 2 under the stated condition. The proportion to a consequence weight is cut: no parent states it. |
| PP-293 | PL-285 (was PL-305) | LP-199 (kept, NO CARRIER) | BARREN | The Derives line named PL-305 under a title no PL entry has ("A Living System Dies Before It Appears Dead"); PL-305 states that production edges are live managed tensions. LP-199 states that the engine's oscillation is maintained by the discharge of accountability and has no cascade or gradient. PL-285 states that tension subsystems decay at their own local metabolic rates and, in a corollary, that a subsystem decaying at high speed will be invisible in aggregate metrics. Restated: where each gradient of a proof-graduated cascade is a tension subsystem, PL-285's rule applies. Fails Test 1 under the stated condition. |
| PP-294 | PL-108 (kept, restated) | LP-66 (was LP-200) | BARREN | LP-200 states that a derivation chain must integrate signed assertions of its own broken links and has no weight, cache or selection. PL-108 states that a physical state claim decays from the moment it is produced; LP-66 that a valid pre-planned route cannot be constructed and that pre-calculating a path builds a static list and is not navigating. Each half holds from one parent alone (Tests 1 and 2); a conjunction. |
| PP-295 | PL-237 (was PL-109) | LP-541 (was LP-201) | BARREN | PL-109 states that claiming present-tense validity for a past-tense state generates a physical falsehood and has no oscillation, sovereignty or death; LP-201 states that incomprehension is recorded as a signed artifact and has no oscillation or sovereignty. PL-237 states that the tension that sustains sovereignty decays unless it is actively exercised; LP-541 that a tension-driven oscillator that winds down is dying and not resolving its tension. Each half holds from one parent alone (Tests 1 and 2); a conjunction. |
| PP-296 | PL-92 (kept, restated) | LP-202 (kept, NO CARRIER) | BARREN | LP-202 states that an attested absence defends itself against unauthorized overwrite and has no bridge, traversal or load. PL-92 states that an obligation is a force relationship that must be actively conducted to remain real, and that accountability is present-tense force conduction and not a historical record. Restated to what PL-92 states. Fails Test 1. "Structural accountability bridge" and "load-bearing" were the entry's own terms, with no parent behind them. |

OPEN PM's review. The Worker's text is kept except where listed:
- **Tags.** The Worker left every tag and listed them as loci. A tag stays only when both current parents cite the LL (batch 17 on). All five are removed: PP-292 `[shared LL-277]` (PL-276 applies LL-277; LP-24 is CP-5 × LL-2), PP-293 `[shared LL-227]` (PL-285 applies LL-445; LP-199 is CP-35 × LL-227), PP-294 `[shared LL-110]` (PL-108 applies LL-94, LL-208, LL-272 and LL-282; LP-66 is CP-10 × LL-263), PP-295 `[shared LL-111]` (PL-237 applies LL-411 and others, not LL-111; LP-541 is CP-58 × LL-389) and PP-296 `[shared LL-114]` (PL-92 applies LL-402, LL-403 and LL-446; LP-202 is CP-36 × LL-114).
- **Searches.** In PP-292, the sentence said the stem "proportion" within 40 characters of "consequence" or "weight" found PL-106 with LP-383, LP-478 and PL-296. OPEN PM's re-run found PL-77, PL-296, LP-383 and LP-478 and not PL-106, whose text puts "proportion" near "navigational capability". The sentence now lists the three the search found and names PL-106 (Navigation-Defense Proportionality) separately, with its claim. The other searches the return reports ("access control", "consequence weight", the death phrases, "graduated|cascade", "aggregate", "oscillat" near the death words, "path select|cached|pre-planned", "load-bearing") gave the Worker's lists.
- **Overlap lists.** PP-292 said no other PP entry applies LP-24; PP-1 does (PL-42 × LP-24, a structure's metabolic evaluation as its sovereignty contestation), as the return's own child list says, and the sentence now names it. PP-294 named PP-95, PP-216, PP-250, PP-289, PP-448 and PP-453 as LP-66's other children; LP-66 is the parent line of PP-95, PP-250 and PP-289 only (the other three cite it in their bodies), and the list now names those three.
- **Alternatives.** PP-293 named PL-287 and set it aside because the entry's gradients are not said to be isolated from view. Two things were missing. PL-287 is already the carrier of PP-233 (batch 17), which states its rule for a gradient of a graduated consequence cascade held outside the cascade's observation scope; and batch 17 named PL-72 (The Topology Cannot Be Dead and Active Simultaneously) for the lines that carry the stale PL-305 title. PL-72 was read whole: it states that aliveness is binary at any given Pulse and has no rate, aggregate or signal, so it is not adopted. The Irreducibility now says both.
- **Tests half by half.** PP-294 put the whole conjunction at Test 1 ("BARREN at Test 1; Tests 2 and 3 are not reached"), and PP-295 found it not failing at Test 1 and BARREN at Test 2. A conjunction is tested half by half: each half holds from one parent alone, PL-108's and PL-237's at Test 1, LP-66's and LP-541's at Test 2. Both now read in that form: "The entry is a conjunction of two single-parent facts and not a product of the crossing, so it is marked BARREN; Test 3 is not reached." The class is unchanged.
- **PP-286.** Its Irreducibility said that PP-292 (PL-276 × LP-198) "states the earlier proportional claim for access control and is not restated here". After this batch PP-292 is restated on LP-24 and the proportion is cut. The sentence now says PP-292 stated it until batch 23, which re-pointed it to LP-24 and cut the proportion. The Worker found this and left it as a locus.
- **Line reference.** The batch adds 15 lines to the PP file; the reference to PP-492 in PP-260's Irreducibility moved from `:9592` to `:9607`, its Derives line.

Verified, not changed: no spec file other than PP and PI names the five entries (all 16 files searched); PI names each only on its 95 Derives lines. Line references were recomputed after the edit; only the PP-492 reference moved.

Titles: five changed (PP-292, 293, 294, 295, 296). Each title's 95 copies in PI were replaced with it (475 copies).

How the slots are counted: the LP slots of PP-292, PP-294 and PP-295 and the PL slots of PP-293 and PP-295 are RE-POINTs; the PL slot of PP-294 is a RESTATE (PL-108 kept for what it carries); the LP slots of PP-293 and PP-296 and the PL slot of PP-292 are NO CARRIER, each line kept with nothing attributed to it. That makes 9 slots corrected. **107 remain.** BARREN lines: 104 → 109.

Out-edges: no spec file other than PP and PI names the five entries. PI cites each only on its 95 Derives lines. In PP, PP-286's Irreducibility names PP-292 (amended above); the parents' other children are named in each entry's overlap note (LP-24: PP-1; LP-66: PP-95, PP-250, PP-289; PL-285: PP-539; PL-237: PP-199, PP-258; PL-108: PP-313, PP-331, PP-361, PP-647, PP-649; PL-92: PP-503). Each kept parent stays on those lines, so those lists stay true.

Loci, not changed here:
- Five other PP entries still name PL-305 with a title it does not have ("A Living System Dies Before It Appears Dead", PP-231 with a longer form): PP-231, PP-303, PP-314, PP-346 and PP-367. Each also asserts in its body that a living system dies before it appears dead. Left for the batches that hold their slots (PP-462 names PL-305 with its own title).
- PL-114's other children PP-190, PP-339, PP-349, PP-358 and PP-362 are already loci of batch 22.
- PL-109's unrestated corollaries on cached results and stale state are near PP-294's subject; PL-109's own children are PP-439 and PP-626.
- PP-347 (PL-40 × LP-231): batch 22's loci called it batch 23 work; it is not among this batch's slots and is left for its LP slot in the table below.
- The PI Derives-from lines tag all five entries [SUBSUMED]; the PP file now marks them BARREN.
- Kernel citations of these five entries were not checked.
- The titles of PP-292 and PP-294 are long; for the title pass.

### Batch 23, independent check

A blind checker (Opus; brief sha256 `c99dd61f9403057ae3f873d470ac6f13e1d41b2a59b4302bc5c8f226e16eb2f9`, return `c842b404161810b975e81a74dc6e687e5bbb38a6591fce72caf61550a0ca6480`) used its own copy of A at `e8e5203`. It read each entry, each parent and the entries named below whole, re-ran the searches the entries cite, ran its own concept searches, and wrote its entry judgments before it opened this record. It gave HOLDS for PP-292, PP-293, PP-295 and PP-296 and AMEND for PP-294. It agreed with every class (all five BARREN, PP-294 and PP-295 by the half-by-half reading), with every re-point and NO CARRIER slot, with the removal of all five tags (no current pair shares an LL), with the PP-286 sentence, with the overlap lists, with the 95 PI copies per title (no PI line carries an earlier title), with the BARREN count (109) and with 107 remaining, and found no IP, IC or II line citing the five.

Adopted (checked against the parents at `e8e5203`):
- **PP-294, the italic.** It said a pre-planned route is invalid "because pre-calculating a path is building a static list". LP-66 grounds the impossibility in consciousness: "the consciousness required to make the decision only exists in the present moment of arrival"; the static list is what the attempt amounts to, not its cause. The Irreducible Claim already had it right. The italic now gives LP-66's ground and then the static list.
- **PP-292, the "proportional" search.** "found PL-77 only and no LP entry" held only with a word bound: LP-478 ("drops proportionally to the strata of consequences") falls in the same frame. OPEN PM re-ran it and confirmed; the sentence now names LP-478 in the first search and drops it from the wider one. The checker also found that PL-106's hit came from its title word "Proportionality" within 40 characters of "Consequence" in its tier label "Tier 3 (Derived Consequence)", not from its body; the entry's sentence on PL-106 states what PL-106 says and is not changed. The batch 23 review bullet "Searches" above says OPEN PM's re-run did not find PL-106; a search over whole entries does find it, through the tier label, so the two differ in scope and not in what PL-106 states.
- **PP-293, batch 17.** PP-233 (batch 17) named PL-285 and did not adopt it, because PL-285 states a collapse before an aggregate metric signals alarm only as a corollary of independent metabolic rates, which PP-233 does not name. PP-293 adopts PL-285 without saying so. The reason does not apply there, because PP-293's condition names each gradient as a tension subsystem with its own rate; the Irreducibility now says this.
- **PP-295, two candidates and one quotation.** LP-158 (Pulse-Stopping as Sovereignty Violation, CP-30 × LL-226) joins sovereignty, tension, oscillation and death, and the oscillat-near-dying search misses it because it says "kills" (OPEN PM re-ran the search: no hit in LP-158). It states an act from outside that resolves the tension, not an oscillator that winds down, so LP-541 stands; it is now named and not adopted. PL-65 (Pulse-Consistent Consistency), one of the two PL entries with "oscillat" (PL-17, PL-65; re-run), mentions no sovereignty; now named and not adopted. The condition sentence gave PL-237's corollary as a precursor to death; PL-237 says "a precursor to tension-resolution and death", and the sentence now quotes it.
- **PP-296, LP-240.** LP-240 (Obligatory Performance Heartbeat, CP-47 × LL-402) applies LL-402 as PL-92 does and states that the physical pulse is the continuous performance of the obligation to sustain truth. It is about the pulse, and it is the above parent of PP-506; it is now named and not adopted. The mark does not change: the claim restated is PL-92's own.

Not adopted:
- PP-293's title says "Can Be Invisible" without PL-285's "at high speed" and dominance conditions; the italic states both. Left for the title pass.
- PP-295 omits LP-541's ground that the tension is "permanent and indestructible" (LL-389), next to PL-237's decay. Not a contradiction: PL-237's decay is into complacency, "a precursor to tension-resolution", not a resolution, and LP-541 itself allows the tension to collapse into Dogma; the entry asserts neither as the other's. No change.
- The PP header's pair filter: already recorded under the batch 04 check; method point 29 stands.

Kernel and IP/IC citations (2026-10-31): the ARC Lead's note `arc-lead-note-kernel-cites-batch23-entries-e8e5203.md` (sha256 `74bbe708f7a7bbcdb5a3dbd3b83e80806d6d8da987c94094b34a37eff41c7852`) found IP and IC byte-identical across `bd7aa2e` → `e8e5203`, and no cite of PP-286, PP-292 to PP-296, PP-260 or PP-297 in the IP file, the IC file or the kernel `src/` tree at kernel `1195baa`. The kernel's requirements file, certification scripts and tests were not searched.

Line references: the amendments change text within six existing lines and add none; no `PP-n (:m)` reference moves.

Loci, not changed here:
- Four of the five entries carrying the stale PL-305 title also carry a tag PL-305 does not cite: PP-303 `[shared LL-123]`, PP-314 `[shared LL-133]`, PP-346 `[shared LL-151]`, PP-367 `[shared LL-162]` (PL-305 cites LL-386). For the batches that hold their slots.
- PP-503's `[shared LL-82]` is not cited by PL-92 (LL-402, LL-403, LL-446), and its italic attributes "not a bridge" to PL-92, which has no "bridge".
- PP-506's Derives-from line names PP-506 itself, not a PL entry.
- The PP header's method link reads `../processes/dag-crossing-method.md`; the method file is `dag-crossing-method.md` at the repository root.
- PL-285's corollary (a subsystem decaying "at high speed" hidden when the aggregate is dominated by "faster-metabolizing" subsystems) does not say which rate it means; a PL-layer question, not D19's. PP-293 inherits it unchanged.
- The checker counted 223 PP entries whose tag does not match the LLs both parents cite; tags outside the slots stay unchanged (related item 1) unless a batch or check takes the entry.

### Batch 24

The Worker (Sonnet) made the return against `e8e5203` (sha256 `046e9b2cf951f8be3f30daeaa351d8687a0f66c294ba21af1430314fb892619a`). It covers eight slots of the table below: the LP slots of PP-297, PP-298, PP-299, PP-302, PP-303 and PP-304, and the PL slots of PP-297 and PP-303 (PP-298, PP-299, PP-302 and PP-304 have no PL slot in the table; their PL parents PL-24, PL-29, PL-19 and PL-18 were read whole and the entries restated with them). It was applied on top of `7f706ed`, where every one of its 36 old texts still occurs once (`7f706ed` changed PP only within PP-292 to PP-296 and added no lines). OPEN PM read every parent and every adopted carrier whole (PL-18, PL-19, PL-24, PL-29, PL-72, PL-113, PL-305; LP-124, LP-203, LP-204, LP-206, LP-207, LP-601), checked the Worker's quotations of each against the text, re-ran its searches and ran one more, and amended the tags, one corollary, one search report and two line references.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-297 | PL-113 (kept, NO CARRIER) | LP-203 (kept, NO CARRIER) | BARREN | Neither parent states a negotiation protocol or a mechanism for managing sovereignty tension. The entry now records that the claim is not established, with nothing attributed to either parent. Fails Test 1. |
| PP-298 | PL-24 (kept, restated) | LP-124 (was LP-204) | BARREN | LP-204 states archaeological gap markers and has no chain, link or receipt. LP-124 states that a derivation embeds the thermodynamic cost of its own production as a cost receipt. Restated: where each link of a proof-of-sovereignty chain is a proof held as a self-proving record (PL-24), LP-124's rule applies to it. Each half holds from one parent alone; a conjunction. |
| PP-299 | PL-29 (kept, restated) | LP-204 (kept, NO CARRIER) | BARREN | LP-204 states gap markers and nothing of a chain's cost. PL-29 states that the thermodynamic cost of undiscovered structures is already being incurred. Restated to PL-29 under the condition that the chain's links are such structures. Fails Test 1. |
| PP-302 | PL-19 (kept, restated) | LP-601 (was LP-206) | BARREN | LP-206 has no consequence buffer, mass record or archive. LP-601 states that the structural record of absorbed consequences is the zone's accountability history; PL-19 that external audit logs are history, not accountability, and that accountability is live structure. Restated under two conditions (the buffer is a consequence-localization zone; its record is the accountability record of the interactions). Fails Test 1. |
| PP-303 | PL-72 (was PL-305) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | The Derives line named PL-305 under a title no PL entry has ("A Living System Dies Before It Appears Dead"); PL-305 states that production edges are live managed tensions. PL-72 states that a status label must match the Pulse reality and that a structure labeled live but not traversed is not live. Restated under the condition that the buffer's liveness is held by a status label. Fails Test 1. No LP entry states a structural consequence buffer. |
| PP-304 | PL-18 (kept, restated) | LP-207 (kept, NO CARRIER) | BARREN | LP-207 has no inheritance proof or succession. PL-18 states that a claim referencing a past topology state has no standing in the present without present re-derivation, so sovereignty cannot be inherited. Restated to PL-18 under the condition that an inheritance proof is such a claim. Fails Test 1. |

OPEN PM's review. The Worker's text is kept except where listed:
- **Tags.** The Worker left every tag, said so in each Irreducibility and listed them as loci. A tag stays only when both current parents cite the LL (batch 17 on). All six are removed, and each Irreducibility now says so with the LLs it read: PP-297 `[shared LL-117]` (LP-203 cites LL-117, PL-113 cites LL-293), PP-298 and PP-299 `[shared LL-119]` (LP-204 cites LL-119; PL-24 cites LL-470 and LL-473, LP-124 LL-153, PL-29 LL-474 and LL-475), PP-302 and PP-303 `[shared LL-123]` (PL-19 cites LL-8, LL-152, LL-153 and LL-473, LP-601 LL-448, PL-72 LL-264 and LL-389, PL-305 LL-225, LL-227, LL-275, LL-324, LL-386 and LL-410) and PP-304 `[shared LL-125]` (PL-18 cites LL-6 and LL-12, LP-207 LL-150).
- **PP-302, corollary 2.** It said that where the conditions hold a zone whose record of absorbed consequences exists only in an external log "has an empty accountability structure of its own". PL-19 says the accountability structure that is then empty is the topology's, and LP-601 does not say it; the sentence moved PL-19's actor from the topology to the zone. It now says only that such a record is history and not accountability, and that the empty structure is not asserted of the zone.
- **PP-297, one more search.** The Worker searched "negotiat" and found no entry that states a negotiation as a mechanism. OPEN PM also searched "sovereignty tension" over both files: PL-122, PL-126, PL-150, PL-276, PL-322, LP-563 and LP-581. PL-122, PL-150, LP-563 and LP-581 were read; only PL-322 names a negotiation, to say the tension is not resolved by it. The Irreducibility now reports the search.
- **Line references.** The batch adds 16 lines to the PP file. `PP-492 (:9607)` in PP-260's Irreducibility moved to `(:9623)`. `PP-357 (:7128, …)` in PP-262's Irreducibility had been stale since batch 22: the recompute in batches 22 and 23 matched only the form `(:m)` and missed `(:m, …)`, so the 18 and 15 lines those batches added were not applied to it. It now reads `(:7177, …)`, PP-357's Derives line after this batch. The recompute now matches both forms; every `PP-n (:m` reference in the PP file equals the entry's heading + 5.

Searches re-run by OPEN PM, each giving the Worker's list: "negotiat" (PL-74, PL-274, PL-322; LP-10, LP-21, LP-127, LP-169, LP-246, LP-395, LP-405, LP-540, LP-623), "consequence-aware", "consequence-blind" and "consequence-sensitive" (none), "protocol" near "negotiat" (LP-10), "sovereignty proof" and "sovereignty chain" (PL-18, PL-40, PL-106, PL-122), "thermodynamic receipt" and "cost receipt" (LP-124), "navigation debt" (PL-16), "consequence buffer" (none), "living record" (LP-251), the death phrases (LP-481), "inheritance proof" (none), "successor" (PL-91, LP-616), "status label" (PL-72), "inherit" near "sovereign" (PL-18).

Verified, not changed: no spec file other than PP and PI names the six entries; PI names each only on its 95 Derives lines. In PP, PP-253's and PP-265's notes name PP-299 among the children of PL-29, and PP-262's note names PP-302 among the children of PL-19; the Derives-from parents are kept, so those notes stay true.

Titles: six changed (PP-297, 298, 299, 302, 303, 304). Each title's 95 copies in PI were replaced with it (570 copies).

How the slots are counted: the LP slots of PP-298 and PP-302 and the PL slot of PP-303 are RE-POINTs; the LP slots of PP-297, PP-299, PP-303 and PP-304 and the PL slot of PP-297 are NO CARRIER, each line kept with nothing attributed to it; PP-299 and PP-304 are restated to their kept PL parents. That makes 8 slots corrected. **99 remain.** BARREN lines: 109 → 115.

Out-edges: LP-204 is now applied only by PP-299, which attributes nothing to it; LP-206 by none; LP-124 gains PP-298 (its other children PP-174, PP-175, PP-236, PP-243, PP-301, PP-340); LP-601 gains PP-302 (with PP-540); PL-305 loses PP-303; PL-72 gains it (with PP-305 and PP-309).

Loci, not changed here:
- PL-72 now carries three PP entries (PP-303, PP-305, PP-309), each for a different act (a buffer's status label, a detector's output, a pruner's reason). None is SUBSUMED; whether one rule wants three entries is for the title pass.
- The stale PL-305 title still heads the Derives lines of PP-231, PP-314, PP-346 and PP-367, each with a tag PL-305 does not cite. For the batches that hold their slots.
- PP-303's Applies-to line is the bare "LP (Logical Physical)" and names no entry; kept as the record, nothing attributed.
- The Tier line of each of the six still reads "Tier 3 (Derived Consequence)"; for the tier pass.
- The PI Derives lines tag all six [SUBSUMED]; the PP file marks them BARREN. PI's own text says "consequence-aware arbitration engine" (PP-301's earlier wording), not PP-297's.
- PL-40, PL-107, PL-111 and PL-112 lie near PP-304 on the PL side; PL-18 is the named parent and carries the restated claim.
- LP-247 (Provenance-Fuelled Boundary) is named on no PP Derives or Applies line.
- Kernel citations of these six entries were not checked.

### Batch 24, independent check

A blind checker (Opus; brief sha256 `167767f5e4f401e61862916c1670100528b00d7b6917e650108ddf448ad93f3e`, return `8a1a1a50bb9bcaad55b3b444bd5950271157cb9860ef7bc3cd199cdb35b3dd13`) used its own copy of A at `eff9a70`. It read each entry, each parent and the entries named below whole, re-ran the searches the entries cite, ran its own concept searches, and wrote its entry judgments before it opened this record. It gave HOLDS for PP-297, PP-298 and PP-302 and AMEND for PP-299, PP-303 and PP-304. It agreed with every class (all six BARREN), with every re-point and NO CARRIER slot, with the removal of all six tags, with the three PP notes that name the six (PP-253, PP-262, PP-265), with the 13 line references, with the 95 PI copies per title (no PI line carries an earlier title), with the BARREN count (115) and with 99 remaining, and found no IP, IC or II line citing the six.

Adopted (checked against the parents at `eff9a70`):
- **PP-299, "mapped".** The Irreducibility says "unmapped link" was the entry's own word with no parent behind it, but the body and corollaries (1) and (3) still said "mapped" and "unmapped". PL-29 says "discovered" and "surfaced" ("Map" is only in the title of LL-474 on its Applies-to line). The body and corollary (1) now say "discovered"; corollary (3) says "Discovering such links" and quotes PL-29's "an accounting event that surfaces a pre-existing obligation" in place of the audit sentence ("audit" is not PL-29's word).
- **PP-303, corollary (1).** It moved from "its contents are not being traversed" to "it is not being traversed", which holds only if receiving messages is not traversal, and the same corollary said that was not asserted. PL-72 speaks of "a structure" that is not being traversed and says nothing of a queue or its contents. The corollary is now a "Not asserted" sentence.
- **PP-303, the tag reason.** The sentence compared the new and old PL parents. It now also names the former LP parent LP-206 (LL-149) and says the Applies-to line names no LP entry, so no LL is shared. The removal is unchanged.
- **PP-304, corollaries (2) and (3).** "Lineage" is not PL-18's word; PL-18 says "The Structural Mass of prior sovereign acts is present in the entity — but as weight, not as credential", and (2) now says that. (3) equated "inherited" with "carried forward", which PL-18 lists as alternatives ("inherited, delegated, or carried forward"); it now gives PL-18's sentence directly.
- **PP-297, the "sovereignty tension" search.** The exact phrase misses LP-678 (Productive Tension Sovereignty Engagement Protocol), which says "sovereign tension". OPEN PM re-ran "sovereign(ty)? tension": PL unchanged (PL-122, PL-126, PL-150, PL-276, PL-322); LP adds LP-678 and LP-580 to LP-563 and LP-581. LP-580's hit is the "## CL-44: Sovereign Tension — LP Derivations" heading that follows it, not its text. LP-678 was read whole: a tensioned edge not exercised by both endpoints lapses, an engagement-or-lapse rule that names no negotiation. The CL-44 entries (LP-581 to LP-588) were searched for "negotiat": none. The Irreducibility now names LP-678 and CL-44. The outcome is unchanged.

Recorded, not changed in the entries:
- **The batch 24 table's test words.** For PP-297 it says "Fails Test 1"; the entry reads it half by half (PL-113's half at Test 1, LP-203's at Test 2), and the checker agrees with the entry. For PP-298 the table puts "(PL-24)" after the condition "a proof held as a self-proving record"; the condition is the entry's own and not asserted, and PL-24 carries only its own half (every logical claim costs energy to establish, embed and maintain). The receipt half is LP-124's, at Test 2, as the entry says. The class is the same either way. The table stays as written; this note is the correction.
- **PP-299, corollary (2)** applies PL-29's "real thermodynamic budget" to one chain's cost. Under the stated condition the links are undiscovered structures, so their cost is part of the invisible portion. Kept.

Header link: the PP header (line 9) and the IP header (line 10) linked `../processes/dag-crossing-method.md`; both now link `dag-crossing-method.md` at the repository root (loci of batches 04, 13, 20, 23 and 24).

Line references: the amendments change text within eight existing lines and add none; no `PP-n (:m)` reference moves (recomputed: none off).

Loci, not changed here:
- PI tags the six entries [SUBSUMED] on their Derives lines, and PP-301's PI copies carry no label; PP marks the six BARREN. For whoever owns PI.
- The stale PL-305 title on PP-231, PP-314, PP-346 and PP-367 (already a locus of batches 23 and 24).

### Batch 25

The Worker (Sonnet) made the return against `eff9a70` (sha256 `6a339a2c4ad7960fe3060f36d06df3c47cb3141c0241385adb0eacdf820f57ae`). It covers eight slots of the table below: the LP slots of PP-307, PP-311, PP-312, PP-313 and PP-337, and the PL slots of PP-307, PP-313 and PP-337 (PP-311 and PP-312 have no PL slot in the table; their PL parents PL-40 and PL-61 were read whole and the entries restated with them). It was applied on top of `f5be130`, where every one of its 30 old texts still occurs once (`f5be130` changed PP only within PP-297 to PP-304 and on line 9, and added no lines). OPEN PM read every parent and every candidate carrier whole (PL-40, PL-61, PL-108, PL-118, PL-174; LP-23, LP-66, LP-209, LP-211, LP-212, LP-225), checked the Worker's quotations against the text, re-ran its searches and ran one more, rejected one re-point, and amended the tags and two other entries' notes.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-307 | PL-174 (kept, NO CARRIER) | LP-209 (kept, NO CARRIER) | BARREN | Neither parent states an accountability gradient or an accountability map: PL-174 states that excavation conceals what is not selected and disturbs what surrounds it, LP-209 that one verification proves accountability at every level. The entry now records that the claim is not established; the two statements stand side by side, each from one parent alone. |
| PP-337 | PL-174 (kept, NO CARRIER) | LP-225 (kept, NO CARRIER) | BARREN | As PP-307, with LP-225 (an agent stepping into a void generates the edge it traverses) in place of LP-209. LP-225's two mentions of "map" deny a pre-existing map. |
| PP-311 | PL-40 (kept, restated) | LP-211 (kept, NO CARRIER) | BARREN | LP-211 states asynchronous paradox resolution and has no sovereignty, enforcement or boundary. Restated: where the enforcement of a sovereignty boundary is held as a sovereignty claim backed by documentation, PL-40's rule applies: proving it requires present traversal, and the documentation is a label. Fails Test 1. |
| PP-312 | PL-61 (kept, restated) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | The Applies line names no entry. Restated: where the enforcement of a sovereignty boundary is held as a sovereignty protection, PL-61 says it is physically uniform across all scales, the enforcement mechanics identical at every depth. Fails Test 1. The form of PP-240 (batch 17). |
| PP-313 | PL-118 (was PL-108) | LP-66 (was LP-212) | BARREN | PL-108 states a gradual half-life and no path or plan; LP-212 a pulse materializing consequences and no navigator. PL-118 states that a structural change invalidates prior evaluations of the region at once, which is the earlier "as soon as the topology shifts"; LP-66 that a valid pre-planned route cannot be constructed and routing must re-evaluate at every junction. Each half holds from one parent alone; a conjunction. |

OPEN PM's review. The Worker's text is kept except where listed:
- **PP-312, the LP re-point rejected.** The Worker proposed re-pointing the bare Applies line to LP-23 (Scale-Invariant Gate Control) at medium-low, with a second condition, "where it is held as a gate", and a second half from LP-23. LP-23 has 0 mentions of enforcement. The entry's whole claim, the same enforcement at every depth, is already PL-61's ("the enforcement mechanics identical at every depth"), so LP-23 would add a statement about gates that the entry never made, under a condition that would be the re-crossing's own step and not the entry's. The rows file had no carrier for this slot. The slot is NO CARRIER, the bare line is kept, and the entry is restated to PL-61 alone, as PP-240 (PL-61 × LP-163) was in batch 17. OPEN PM wrote the italic, Irreducible Claim, Corollaries, Irreducibility and title; the Irreducibility reports LP-23 as read and not adopted, with the Worker's search over the scale-invariant LP entries.
- **Tags.** The Worker left every tag and listed them as loci. A tag stays only when both current parents cite the LL. All five are removed, and each Irreducibility now says so: PP-307 `[shared LL-127]` (PL-174 cites PC-11, LL-348 and LL-349; LP-209 CP-37 and LL-66), PP-337 `[shared LL-146]` (LP-225 cites CP-44 and LL-359), PP-311 and PP-312 `[shared LL-132]` (cited by neither PL-40, LP-211 nor PL-61), PP-313 `[shared LL-133]` (cited by neither PL-118 nor LP-66, nor by PL-108 or LP-212).
- **PP-289 and PP-294 notes.** PP-289's Irreducibility said that PL-118 × LP-66 is not crossed by another entry and listed LP-66's children as PP-95 and PP-250 (already short of PP-294 since batch 23). It now names PP-313 as the other entry on the pair and lists the children as they stand. PP-294's note listed PP-313 among PL-108's children; it now says PP-313 moved to PL-118 in this batch and adds PP-313 to LP-66's children.
- **Line references.** The batch adds 15 lines to the PP file, all before PP-357. `PP-492 (:9623)` in PP-260's Irreducibility now reads `(:9638)` and `PP-357 (:7177, …)` in PP-262's reads `(:7192, …)`. Every `PP-n (:m` reference in the PP file equals the entry's heading + 5.

Searches re-run by OPEN PM, each giving the Worker's list: the accountability-gradient phrases ("accountability gradient", "accountability map", "navigation gradient", "accountability field", "high-gradient", "greater accountability", "accountability concentration", "responsibility map", "accountability gradient field": none in PL or LP); "gradient", "map", "accountab", "region" and "field" counted in PL-174, LP-209 and LP-225; "sovereign", "enforce", "boundar", "layer" and "travers" in LP-211 (0 each); "enforce" in LP-23 (0); "enforcement layer" (none), "navigation plan", "decision tree", "pre-stored" and "GPS" (none), "pre-planned" (LP-62, LP-66), "expired proof" (PL-17), "theater sovereignty" (PL-20); LL-127, LL-146, LL-132 and LL-133 in each current and former parent (0 each). One more: "sovereignty boundary" in PL gives PL-52, PL-118 and PL-281; PL-52 says an interface needing translation reveals an unhandled sovereign boundary and PL-281 that identity records track the boundary of individual sovereignty, and PL-118 names a boundary shift as a structural change; none states the enforcement of a boundary, so none is a carrier for PP-311 or PP-312.

Verified, not changed: no spec file other than PP and PI names the five entries; PI names each only on its 95 Derives lines. In PP, PP-271's note names PP-307 among LP-209's children and the notes of PP-254, PP-267, PP-283 and PP-291 name PP-311 among PL-40's; those parents are kept, so the notes stay true.

Titles: five changed (PP-307, 311, 312, 313, 337). Each title's 95 copies in PI were replaced with it (475 copies).

How the slots are counted: the LP and PL slots of PP-313 are RE-POINTs; the LP and PL slots of PP-307 and PP-337 and the LP slots of PP-311 and PP-312 are NO CARRIER, each line kept with nothing attributed to it; PP-311 and PP-312 are restated to their kept PL parents. That makes 8 slots corrected. **91 remain.** BARREN lines: 115 → 120.

Out-edges: PL-108 loses PP-313 (its others PP-294, PP-331, PP-361, PP-647, PP-649); LP-212 loses it (PP-270 remains); PL-118 gains it (with PP-289, PP-365, PP-425); LP-66 gains it (with PP-95, PP-250, PP-289, PP-294).

Loci, not changed here:
- PP-313 and PP-289 now stand on one pair (PL-118 × LP-66) and state the same two halves under two conditions (a navigation plan; a computed flow path). Both are BARREN and neither is SUBSUMED; whether one pair wants two entries is for the title pass.
- PP-307 and PP-337 are near-duplicates on PL-174, each now recording that its claim is not established. PL-174's other children PP-471 and PP-669, and LP-209's PP-256, PP-271 and PP-335, were not read for this batch.
- The record's earlier sections still say what was true when written: line 1044 (PP-307 and PP-337 "for a later batch"), line 1256 (PP-307's earlier wording) and line 1755 (PP-313 among PL-108's children). They are kept as written; this section supersedes them.
- The Tier line of each of the five still reads "Tier 3 (Derived Consequence)"; for the tier pass.
- Kernel citations of these five entries were not checked.

### Batch 25, independent check

A blind checker (Opus; brief sha256 `9c3599a35a1f11f4751eae412977165ad5ffb65c3c33109d45d8ca2d9b9d0812`, return `fb231135b001890c9a1d29260564e509137a6739552d8bd6fbb87c51fad9c349`) used its own copy of A at `eaeaefd`. It read each entry, each parent and the entries named below whole, re-ran the searches the entries cite, ran its own concept searches, and wrote its entry judgments before it opened the batch 25 section. It found all five entries HOLD (PP-312 at medium, the others high), no IP, IC or II line naming the five, every `PP-n (:m` reference correct, the 95 PI copies of each title exact, and no tag that belongs.

Adopted (checked against the parents at `eaeaefd`):
- **PP-307, "the same identity".** PP-246 withdrew "a consequence topology gradient IS the present-tense accountability map"; PP-307's earlier claim was that a navigation gradient is the accountability map. The identity is alike, not the same. The Irreducibility now says "a like identity" and states which.
- **PP-307 and PP-337, two nearer PL entries.** PL-286 (Tension Subsystems Create Consequence-Trapping Zones That Force Local Accountability) states that an isolation membrane traps consequences so local components bear their own accountability, and that designing isolation is a distribution-of-accountability choice; PL-77 (Field Propagation of Consequence) states that consequence propagates through the whole field and every entity carries accountability in proportion to its contribution. OPEN PM read both whole: neither states a gradient or an accountability map. PP-307 now names both and why neither is adopted; PP-337 points to it.
- **PP-311, "sovereign boundary".** The entry searched "sovereignty boundary" and "enforcement layer" only. OPEN PM re-ran "sovereign boundary" and "boundary" next to "enforce" in LP: LP-21, LP-28, LP-29, LP-150, LP-169, LP-245, LP-247 and LP-628. The nearest is LP-247 (Provenance-Fuelled Boundary, CP-48 × LL-3), which states that a sovereign boundary persists only through continuous present-tense re-derivation of its provenance: a boundary's persistence, not its enforcement or how an enforcement is proved. LP-628 states the direction of knowledge flow across a gradient boundary. None is a carrier; the Irreducibility now names the search, the list and LP-247.
- **PP-312, LP-237.** LP-237 (Scale-Invariant Preemptive Shielding, CP-46 × LL-375) shares LL-375 with PL-61 and states that preemptive protection activates uniformly across all scales. It is shielding, not enforcement, and reading the enforcement as a shielding would be a condition this re-crossing introduces (the precedent of the rejected LP-23 re-point). Named in the Irreducibility, not adopted.
- **PP-291, PL-40's restated children.** Its sentence listing the children already restated on PL-40 was written before batch 25 and omits PP-311. It was stale, not false; it now adds "(and PP-311 since batch 25)".
- **The slot table.** Batches 24 and 25 had not annotated their rows in the table below. Fixed before this check was adjudicated (16 rows; 91 unannotated = 91 remain).

Recorded, not changed in the entries:
- **PP-337, "which I read".** First person in an entry; it is widespread in the D19 entries. Locus only.

Line references: the amendments change text within five existing lines and add none; no `PP-n (:m)` reference moves (recomputed: none off). BARREN lines 120.

Loci, not changed here:
- PP-359 and PP-360 attribute a "sovereignty-sensitive consequence filter" to LP-237, which states preemptive shielding (above). For the batch that reaches them.
- PP-312's Applies line still names the cell and not an entry, against `dag-crossing-method.md` (line 130). Kept as NO CARRIER under this batch; the method question stays open.
- PP-313's Irreducibility cites this record; PI's [SUBSUMED] tags on BARREN entries and its runs of empty items (as before).

### Batch 26

The Worker (Sonnet) made the return against `5f5bbf1` (sha256 `108a764ec02578a15115024fc35109ac8ad28c83fe533ca1bd4fe04046c0f078`). It covers eight slots of the table below: the LP slots of PP-314, PP-315, PP-316, PP-317, PP-318 and PP-346, and the PL slots of PP-314 and PP-346 (PP-315 to PP-318 have no PL slot in the table; their PL parents PL-19, PL-40, PL-14 and PL-40 were read whole and the entries restated with them). It was applied on top of `0d27e38`, where every one of its 12 old texts still occurs once (`0d27e38` changed PP only within lines of PP-291, PP-307, PP-311, PP-312 and PP-337, and added none). OPEN PM read every parent and every adopted carrier whole (PL-14, PL-19, PL-40, PL-69, PL-114; LP-213, LP-214) and the candidates named below, checked the Worker's quotations against the text, re-ran its searches and ran two more, and amended the labels, the tags, two entries' weighing of other parents and two other entries' notes.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-314 | PL-69 (was PL-305, stale title) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | The line named PL-305 under a title PL-305 does not bear. PL-69 states that a traversal algorithm that follows the edge record of a connection between two living structures navigates to a dead edge and finds nothing. Restated under the condition that the navigator is such a traversal; fails Test 1. |
| PP-346 | PL-114 (was PL-305, stale title) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | As PP-314 for the line. PL-114 is the only PL entry that uses "churn" (the earlier text's "stopped churning"): an engine that is not churning is a stopped engine, its operational status is present-tense, and its Structural Mass residue remains. Restated under the condition that the optimization is directed at a paradox engine; fails Test 1. Low-medium. |
| PP-315 | PL-19 (kept, restated) | LP-213 (kept, NO CARRIER) | BARREN | LP-213 states navigational derivation telemetry and has no anchor. Restated: where a consequence-chain anchor's record is an accountability record, PL-19 says it must be a living structure in the present-tense topology. Fails Test 1. |
| PP-316 | PL-40 (kept, restated) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | Restated: where the anchoring power of an anchor is held as a sovereignty claim backed by documentation, PL-40's rule applies: proving it requires present traversal, and the documentation is a label. Fails Test 1. The form of PP-254, PP-283 and PP-311. |
| PP-317 | PL-14 (kept, restated) | LP-214 (kept, NO CARRIER) | BARREN | LP-214 states instruments for unmeasured regions and has no attractor or pull. Restated: where an attractor is a region traversals arrive at, each traversal leaves a Wake and a region traversed many times accumulates Structural Mass (PL-14). "Self-reinforcing" and the duty to disclose are cut. Fails Test 1. |
| PP-318 | PL-40 (kept, restated) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | As PP-316, for the pull of an attractor; PP-254 states the same rule for an attractor's force. Fails Test 1. |

OPEN PM's review. The Worker's text is kept except where listed:
- **The Irreducibility label.** Each of the six new paragraphs began "Re-crossed under D19 (" without the `**Irreducibility:**` label the old paragraph had; the label is restored on all six.
- **Tags.** The Worker left every tag and listed them as loci. A tag stays only when both current parents cite the LL. All six are removed, and each Irreducibility now says so: PP-314 `[shared LL-133]` (PL-69 cites PC-2, LL-21 and LL-196), PP-346 `[shared LL-151]` (PL-114 cites PC-6 and LL-301), PP-315 `[shared LL-134]` (PL-19 cites PC-6, LL-473, LL-8, LL-152 and LL-153; LP-213 CP-39 and LL-308), PP-316 `[shared LL-134]` and PP-318 `[shared LL-135]` (PL-40 cites PC-7 and PC-5 × LL-8; the Applies lines name no entry), PP-317 `[shared LL-135]` (PL-14 cites PC-5, LL-15, LL-16, LL-72, LL-97 and LL-101; LP-214 CP-39 and LL-316).
- **PP-314 and PP-346, the other parents of the stale-title family.** The batch 23 note above says that, for each entry that named PL-305 under the stale title, PL-287 and PL-72 are to be weighed against the entry's own claim. The Worker read PL-287 for PP-314 but did not say so in the entry, and did not weigh PL-287 for PP-346. OPEN PM read PL-287 and PL-72 whole. PP-314 now names both and why neither is adopted (PL-287 states a subsystem collapsing out of view while the broader system runs normally, PL-72 a status label that must match the Pulse; neither speaks of a traversal that follows an edge record), and also PL-114, which this record's slot table named as a candidate for PP-314's PL slot (it speaks of an engine, not a path). PP-346 now names PL-287 and why it is not adopted: it is near the stale title but says nothing of a stopped state, churning or a Structural Mass residue, which are the earlier text's words and PL-114's.
- **PP-346, the PL-114 re-point kept.** The slot table found no carrier for PP-346's PL slot (every reader). The Worker found one through the earlier text's own word "churning", which in PL occurs only in PL-114 (OPEN PM re-ran it: one entry). The condition, that the optimization is directed at a paradox engine, is a reading of the entry and is stated, not asserted. It differs from the PP-312 LP-23 precedent (batch 25): there a kept parent already carried the whole claim and the re-point would have added a second statement; here the stale line carries nothing, and the stale-title entries before it were each re-pointed under a stated condition (PP-233 to PL-287, PP-293 to PL-285, PP-303, PP-305 and PP-309 to PL-72). PP-303's PL slot also read "no carrier found (every reader)" in the table and was re-pointed to PL-72 under a stated condition in batch 24. Kept at low-medium; NO CARRIER is the stated alternative.
- **PP-346, LP-261.** OPEN PM searched the LP file for "churn" (LP-194, LP-195, LP-197, LP-198, LP-199, LP-204, LP-256, LP-260, LP-261 and LP-263). The nearest is LP-261 (Amplitude-Gated Validity, CP-51 × LL-301), which shares LL-301 with PL-114 and states that a paradox engine at zero amplitude instantly loses its topological validity and falls out of the topology. It says nothing of an optimizer, and its falling-out is a statement the earlier text never made; adopting it would add a statement under the condition this re-crossing reads into the entry (the LP-23 precedent). Named in PP-346's Irreducibility, not adopted; the LP slot stays NO CARRIER.
- **PP-291 and PP-290 notes.** PP-291's sentence listing the children already restated on PL-40 now adds "PP-316 and PP-318 since batch 26". The note listing PL-114's other PP children (in PP-290) now adds "PP-346 since batch 26".
- **Line references.** The batch adds 6 lines to the PP file, all before PP-357. `PP-492 (:9638)` in PP-260's Irreducibility now reads `(:9644)` and `PP-357 (:7192, …)` in PP-262's reads `(:7198, …)`. Every `PP-n (:m` reference in the PP file (13, in the forms `(:m)`, `(:m,` and `(:m;`) equals the entry's heading + 5.

Searches re-run by OPEN PM, each giving the Worker's list: in LP, "navigator" (17), "dies before" (LP-481), "dead edge" (LP-138, LP-222, LP-328, LP-332, LP-438, LP-562), "constitutional death", "consequence-sensitive", "anchoring power", "self-reinforc" and "theater sovereignty" (none), "consequence-chain" (LP-627, LP-630, LP-632), "anchor" (15), "attractor" (LP-552, LP-564), "consequence propagation" (LP-186, LP-393), "optimizer" (LP-145); in PL, "dies before", "appears dead", "constitutional death", "consequence-sensitive", "attractor", "optimizer" and "consequence-aware" (none), "navigator" (21), "sterile" (PL-69, PL-270), `optimi[sz]` (PL-17, PL-53, PL-68, PL-70, PL-100, PL-163, PL-234), "theater sovereignty" (PL-20). Two more: "churn" in PL (PL-114 only) and in LP (above); "edge record" in PL (PL-69 only) and LP (none). LL-133, LL-134, LL-135 and LL-151 in each current parent: 0 each. Every double-quoted string in the six entries occurs in PL, LP or the earlier PP text; no doubled word.

Verified, not changed: no spec file other than PP and PI names the six entries; PI names each only on its 95 Derives lines. PL-69 had no PP child before this batch. PP-254's note names PP-318 as closest in subject; that stays true. The notes naming PP-315 among PL-19's children and PP-316 and PP-318 among PL-40's stay true, since those parents are kept.

Titles: six changed (PP-314, 315, 316, 317, 318, 346). Each title's 95 copies in PI were replaced with it (570 copies).

How the slots are counted: the PL slots of PP-314 and PP-346 are RE-POINTs; the six LP slots are NO CARRIER, each line kept with nothing attributed to it; PP-315 to PP-318 are restated to their kept PL parents. That makes 8 slots corrected. **83 remain.** BARREN lines: 120 → 126.

Out-edges: PL-305 loses PP-314 and PP-346 (PP-231, PP-367 and PP-462 remain); PL-69 gains PP-314, its first PP child; PL-114 gains PP-346 (with PP-95, PP-180, PP-190, PP-230, PP-290, PP-339, PP-343, PP-349, PP-358 and PP-362).

Loci, not changed here:
- PP-231 and PP-367 still name PL-305 under the stale title; PP-367's title (a consequence-aware topology engine must detect constitutional death before operating) is a sibling of PP-346's earlier one. For the batch that reaches them; the weighing note above applies to each.
- LP-251 (Instantaneous Record Staleness) says in a corollary that the system holds no living records, only living processes and dead records; PL-19, on which PP-315 now rests, says the accountability record must be a living structure. Not reconciled here.
- The PL-40 family (PP-316 and PP-318 join PP-254, PP-283, PP-311 and others restated on it), the PL-19 family (14 children), the PL-14 family (8) and the PL-114 family (11) are noted, not classified; whether any entry is SUBSUMED is a Test 3 question none of these six reached.
- "Theater sovereignty" is PL-20's phrase; PP-316 and PP-318 no longer use it.
- The Tier line of each of the six still reads "Tier 3 (Derived Consequence)"; for the tier pass. PI's [SUBSUMED] tags on these BARREN entries, as before.
- Kernel citations of these six entries were not checked.

### Batch 26, independent check

A blind checker (Opus; brief sha256 `c798c6bba43438a5cab2d521b8c8e449e2fb00a390d44c1a0ebec41c74ec2d50`, return `3ced706e9358b9d8a8d5f9cbc820dcc2b60434f9849354c022b457d136a78df1`) used its own copy of A at `2974d72`. It read each entry, each parent and the entries named below whole, re-ran the searches the entries cite, ran its own, and wrote its entry judgments before it opened this record or `DEFECT_LEDGER.md`. It found PP-314, PP-315, PP-317 and PP-346 HOLD (PP-315 high, PP-317 medium-high, PP-314 and PP-346 medium) and PP-316 and PP-318 AMEND in wording only, with the BARREN mark and the kept parent standing (medium-high). It found no IP, IC or II line naming the six, the 95 PI copies of each title exact, and no tag that belongs.

Adopted (checked against the parents at `2974d72`):
- **PP-316 and PP-318, the cut lists.** Each Irreducibility listed its subject ("consequence-chain anchor", "consequence-propagation attractor") as cut, while the italic, the title and the condition still use it. The term is kept as the subject of a condition that is not asserted; what is cut is the term as an entity that exists and has anchoring power (PP-316) or a pull (PP-318). Both lists now say so.
- **PP-316 and PP-318, "Neither parent mentions them".** Each entry has one named parent (PL-40); the Applies-to line is the bare "LP (Logical Physical)" and names no entry. Both sentences now read "PL-40 does not mention them, and the Applies-to line names no LP entry".
- **PP-221, the header numbers.** Its Irreducibility lists the headers of the entries that derive from PL-17 as bare `:m` numbers; six had moved with earlier batches and were not reached by the `PP-n (:m` reference check. They now read :680, :1903, :3502, :4759, :4966, :5028, :11080, :11520 and :11580 (each a heading line at this commit); the LP-152 Applies lines it cites (:4479 and :4500) were already right. Every bare `:m` number in the PP file was then listed: the others are 18 PL or LP line numbers with the file named (each the heading of the entry it follows, at this commit) and PP-34's heading (:700), all right.

Recorded, not changed in the entries:
- **PP-346's confidence.** The batch 26 section keeps the PL-114 re-point at low-medium, with NO CARRIER as the stated alternative; the checker holds it at medium. The verdict is the same; the record keeps low-medium.

Line references: the amendments change text within five existing lines and add none; every `PP-n (:m` reference equals the entry's heading + 5 (recomputed: none off). BARREN lines 126. The PP file stays 14162 lines.

Loci, not changed here:
- PP-315 and PP-317 keep LP parents that name an entry and share no LL with their PL parent, where the PP header (line 10) says only pairs sharing an LL ancestor are eligible. That filter conflicts with the method's zero pre-filtering mandate (`dag-crossing-method.md`, lines 52 to 54); the question is the method's, not this batch's, and it stays open with the PP-312 one.
- The two forms of an LP slot kept as NO CARRIER: a named entry with nothing attributed to it (PP-315, PP-317), and the bare cell line (PP-314, PP-316, PP-318, PP-346).
- The PP header's own counts are stale: line 14 gives an entry count of 724 and a batch 3 still pending, lines 841, 1538 and 2851 say "pending", and lines 6 and 16 describe LP as 706 entries where 702 are headed. For a header pass.
- PL-40's third corollary cites PL-40 itself (PL line 1761).
- PP-343 and PP-367 still have titles about detecting constitutional death; PP-290 records that PP-190, PP-339, PP-349, PP-358 and PP-362 still assert death detection. For the batches that reach them (PP-367 is in the next PL-305 slots).
- LP-251 against PL-19, as in the batch 26 section; PI's [SUBSUMED] tags on BARREN entries, as before.

### Batch 27

The Worker (Sonnet) made the return against `2974d72` (sha256 `02c864dfa37b6847c1f18675bd82aa08631e5475ca197de4c1dff3a5b0a0dc6f`). It covers eight slots of the table below: the LP slots of PP-319, PP-323, PP-324, PP-326, PP-327, PP-328 and PP-329, and the PL slot of PP-327 (PP-319 to PP-326, PP-328 and PP-329 have no PL slot in the table; their PL parents PL-248, PL-27, PL-24, PL-40, PL-124 and PL-145 were read whole and the entries restated with them). It was applied on top of `cea1d34`, where every one of its 21 old texts still occurs once (`cea1d34` changed PP only on line 4510 and within PP-316 and PP-318, and added none). OPEN PM read every parent and every adopted or weighed carrier whole (PL-24, PL-27, PL-40, PL-124, PL-145, PL-248, CL-1; LP-124, LP-166, LP-168, LP-215, LP-217, LP-219, LP-220), checked the Worker's quotations against the text, re-ran its searches, and amended two entries (PP-324, PP-329) and five other entries' notes.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-319 | PL-248 (kept, restated) | LP-215 (kept, NO CARRIER) | BARREN | LP-215 states real-time certification of an absence and has no attenuator or calibration. Restated: where an attenuator's calibration is held as a sovereignty claim, PL-248's rule applies: sovereignty is performed through active traversal, not held as a title once granted. Fails Test 1. |
| PP-323 | PL-27 (kept, restated) | LP-217 (kept, NO CARRIER) | BARREN | LP-217 states a pulse striking against paradoxes and has no proof, verification or completeness. Restated: where an engine's verification is held as a claim that the topology is complete, the claim cannot be self-certified (PL-27). Fails Test 1. The form of PP-251 and PP-271. |
| PP-324 | PL-24 (kept, restated) | LP-124 (was bare "LP (Logical Physical)") | BARREN | Where each proof the engine generates is embedded in the topology, its thermodynamic cost is part of the claim (PL-24); where it is held as a self-proving record, it embeds the cost of its own derivation in its payload (LP-124). A conjunction of two single-parent facts. The pair of PP-298 (batch 24). Low-medium. |
| PP-326 | PL-40 (kept, restated) | LP-219 (kept, NO CARRIER) | BARREN | LP-219 states navigation instruments shaped by their architects and has no lock. Restated: where a lock force is held as a sovereignty claim backed by documentation, proving it requires present traversal, and the documentation is a label (PL-40). Fails Test 1. The form of PP-254, PP-283, PP-311, PP-316 and PP-318. |
| PP-327 | CL-1 (kept; PL slot NO CARRIER) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | No PL or LP entry searched states that a lock force is proportional to consequence weight. The entry is restated to what CL-1 states and to the record of the searches, the "Neither … Nor … — The Claim Is Not Established" form of PP-307 and PP-337 (batch 25). Kept and marked, per the Holder's 10-30 answer on entries found barren after writing. |
| PP-328 | PL-124 (kept, not used) | LP-168 (was LP-220) | BARREN | LP-220 states forensic telemetry and has no sensing or present. LP-168 states that what we know is valid only at the moment of the scan and that a cached index is false the moment it is written. Restated under the condition that the sensed topology state is held as a scan result, the form of PP-365 (batch 9); fails Test 2. PL-124 stays on the line with nothing attributed to it. Low-medium. |
| PP-329 | PL-145 (kept, restated) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | Restated: where a sensing act of a consequence router is held as a traversal of the topology, it creates more unexplored territory than it maps (PL-145). "Self-multiplying" is cut. Fails Test 1. The form of PP-257, PP-263 and PP-264. |

OPEN PM's review. The Worker's text is kept except where listed:
- **PP-324, the PL-24 condition.** The Worker restated PL-24 under the condition "where each proof a sovereignty proof engine generates is a proof", which is true of every proof and so states no condition. PL-24's own scope is "every logical claim embedded in the topology"; the condition is now "is embedded in the topology" in the italic, the second paragraph of the claim and corollary (2), the sentence on conditions not asserted now adds that neither parent says such a proof is embedded in the topology, and the Irreducibility says the condition is PL-24's own scope. The LP-124 re-point is accepted at low-medium, as PP-298 (batch 24) took the same pair for the links of a proof-of-sovereignty chain; the Worker found it where the table had none (every reader), through the earlier text's own claim that each proof carries its cost, which is LP-124's "cost receipt" and occurs in no other PL or LP entry.
- **PP-329, the LP-166 re-point rejected.** The Worker proposed re-pointing the bare Applies line to LP-166 (Relational Survey Expansion) at low-medium, with a second condition, "where the router's sensing is held as the survey", and a second half from LP-166. The entry's whole claim, that each sensing act reveals more frontier than it resolves, is already PL-145's ("every traversal creates more unexplored territory than it resolves"); LP-166's rule, that the survey finds new relational edges between existing nodes, is a statement the entry never made, under a condition that would be this re-crossing's own step. That is the PP-312 precedent (batch 25). The slot is NO CARRIER, the bare line is kept, and the entry is restated to PL-145 alone, as PP-257, PP-263 and PP-264. The title, italic, claim, corollaries and Irreducibility drop the LP-166 half; the Irreducibility names LP-166 as read and not adopted, and the tag sentence now rests on PL-145 alone.
- **PP-328, the LP-168 re-point kept.** The earlier text's own claim was that a router's pre-sensed topology state is expired; LP-168 states it ("Previous scan results are immediately stale", and its corollary "A cached index is structurally false the moment it is written"), and "scan result" and "cached index" occur in no other PL or LP entry. Unlike PP-329, the kept PL parent (PL-124) does not carry the claim, so the re-point adds no second statement. The condition (the sensed state held as a scan result) is the one PP-365 (batch 9) took for a view. Kept at low-medium; NO CARRIER is the stated alternative. That PL-124 stays on the Derives line contributing nothing is the Worker's locus 11 and is carried below.
- **PP-319, PP-323, PP-326, PP-327.** Accepted as returned. PP-327's Derives line names CL-1, a class entry, in a PL slot; it is kept as named and listed as a locus.
- **Tags.** All seven tags are removed, as the Worker returned (LL-136, LL-138, LL-140 and LL-141 in each current parent: 0 each; re-run by OPEN PM).
- **Notes in other entries.** PP-284 and PP-285 no longer say that PP-329's title carries "Self-Multiplying" (each now says it did until batch 27); PP-298's list of LP-124's other children adds PP-324; PP-365's list of LP-168's adds PP-328; PP-291's list of PL-40 children already restated adds "PP-326 since batch 27". The first four were the Worker's proposed same-line edits; the fifth is OPEN PM's.
- **Line references.** The batch adds 21 lines to the PP file, all after PP-318. `PP-492 (:9644)` in PP-260's Irreducibility now reads `(:9665)` and `PP-357 (:7198, …)` in PP-262's reads `(:7219, …)`. The list of header lines on PP line 4510 now reads `:11101, :11541, :11601` for its last three. Every `PP-n (:m` reference in the PP file (13, in the forms `(:m)`, `(:m,` and `(:m;`) equals the entry's heading + 5.

Searches re-run by OPEN PM over the PL file (327 entries) and the LP file (702 entries), case-insensitive, entry text including headings, each giving the Worker's list: "proof engine", "consequence router", "topology-sensing", "topology sensing", "sensing", "self-multipl", "boundary lock", "lock force" and "pre-sensed" (none in either file); "sovereignty proof" (PL-40, PL-122; LP none); "attenuat" (LP-271, LP-274, LP-542, LP-674) and "calibrat" (LP-116, LP-214, LP-543, LP-550, LP-556, LP-560, LP-583, LP-697) in LP; "cost receipt", "thermodynamic receipt" (LP-124 only), "cached index" and "scan result" (LP-168 only); "relational edge" (LP-166, LP-184, LP-225, LP-389). Every double-quoted string in the seven entries occurs in PL, LP, CL or the earlier PP text; no doubled word.

Verified, not changed: no spec file other than PP and PI names the seven entries; PI names each only on its 95 Derives lines. The notes naming PP-323 among PL-27's children (PP-251, PP-271, PP-341), PP-326 among PL-40's (PP-254, PP-267, PP-283, PP-311, PP-316, PP-318) and PP-328 among PL-124's (PP-250) stay true, since those parents are kept.

Titles: seven changed (PP-319, 323, 324, 326, 327, 328, 329). Each title's 95 copies in PI were replaced with it (665 copies, on 95 lines).

How the slots are counted: the LP slots of PP-324 and PP-328 are RE-POINTs; the LP slots of PP-319, PP-323, PP-326, PP-327 and PP-329 and the PL slot of PP-327 are NO CARRIER, each line kept with nothing attributed to it; PP-319 to PP-326, PP-328 and PP-329 are restated to their kept PL parents. That makes 8 slots corrected. **75 remain.** BARREN lines: 126 → 133.

Out-edges: LP-220 loses PP-328, its only PP child; LP-168 gains PP-328 (with PP-247, PP-365 and PP-722); LP-124 gains PP-324 (with PP-174, PP-175, PP-236, PP-243, PP-298, PP-301 and PP-340); the bare "LP (Logical Physical)" line loses PP-324.

Loci, not changed here:
- PP-327: a class entry (CL-1) on a Derives line, and an entry with no claim of its own left, marked BARREN as the nearest value (the schema has none for "no claim remains"). PP-307 and PP-337 (batch 25) are the same form. Whether such entries stay, and whether a CL entry may stand on that line, are for the title and schema pass.
- PP-328: PL-124 is on the Derives line and contributes nothing; the PL file was not searched for a PL parent that carries sensing (PL-3, PL-13, PL-119, PL-325 and PL-327 name routing and were not read whole).
- PP-324 and PP-298 share PL-24 × LP-124 for different subjects; the PL-40 family (PP-326 joins PP-254, PP-283, PP-311, PP-316 and PP-318), the PL-27 family (PP-323 with PP-251 and PP-271), PL-248 (PP-24, PP-325, PP-334, PP-359, PP-509), PL-124 (PP-232, PP-250, PP-363) and PL-145 (13 others) are noted, not classified.
- PP-722 names LP-168 on both its Derives and Applies lines. PP-245 and PP-247 keep LP-166 and LP-168 as Applies parents with nothing attributed to them.
- PL-122 names a sovereignty proof and was not read whole.
- The Tier line of each of the seven still reads "Tier 3 (Derived Consequence)"; for the tier pass. PI's [SUBSUMED] tags on these BARREN entries, as before.
- Kernel citations of these seven entries were not checked.

### Batch 28

The Worker (Sonnet) made the return against `cea1d34` (sha256 `1e3f320527921264598d63dbbbc857356907a194bbc5d5a620885a6c930f5ba4`). It covers seven slots of the table below: the PL slots of PP-231, PP-331 and PP-367, and the LP slots of PP-330, PP-331, PP-332 and PP-367. It was applied on top of `9540121`, where every one of its ten old texts still occurs once (`9540121` changed PP within PP-319 to PP-329, the notes of PP-284, PP-285, PP-291, PP-298 and PP-365, the header list on line 4510 and two line references, and none of those texts). OPEN PM read every parent and every candidate carrier whole (PL-19, PL-72, PL-107, PL-108, PL-287, PL-305; LP-62, LP-63, LP-66, LP-221, LP-222, LP-241, LP-481, LP-514, LP-542), checked the Worker's quotations against the text, re-ran its searches and ran more, amended both parents of one entry and added one candidate to another.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-231 | PL-72 (was PL-305) | LP-542 (kept) | BARREN | PL-305 states that a production edge whose tension is resolved is a dead edge and does not bear the title the entry gave it. PL-72 states that aliveness is binary at every Pulse and the status label must match the Pulse reality; LP-542 that damping a tension-driven oscillator to zero amplitude is its death. Each half holds from one parent alone; a conjunction. |
| PP-367 | PL-287 (was PL-305) | LP-514 (was LP-241) | BARREN | PL-287 states that a subsystem can collapse outside the observation scope while the broader system operates normally; LP-514 that a live node in a region that has stopped living produces dead outputs. LP-241 states neither. Each half holds from one parent alone; a conjunction. |
| PP-330 | PL-19 (kept, restated) | LP-221 (kept, NO CARRIER) | BARREN | LP-221 states that permanent unstable interrogation is the shield of a contested derivation's sovereignty and has no record, routing or archive. Restated: where the routing history of a graph is the accountability record of topology interactions, PL-19's rule applies: it must be a living structure, and an archive of it is history. Fails Test 1. |
| PP-331 | PL-107 (was PL-108) | LP-62 (was bare "LP (Logical Physical)") | BARREN | PL-107 states that validity is produced only in the present and a cached result presented as current is a past-tense validity claim; LP-62 that a cached route holds no present-tense truth and only the runtime routing decision performs it. Each half holds from one parent alone; a conjunction. |
| PP-332 | PL-19 (kept, restated) | LP-222 (kept, NO CARRIER) | BARREN | LP-222 states that extracting truth must reproduce the tension of the edge it reads and has no proof, record or archive. Restated: where an accountability proof record is the accountability record of a topology interaction, PL-19's rule applies. Fails Test 1. |

OPEN PM's review. The Worker's text is kept except where listed:
- **PP-331, the PL parent amended to PL-107.** The Worker kept PL-108 (Decay of Physical State) and restated the entry to it at medium, with PL-107 named as the alternative at low. OPEN PM read both whole. PL-108 states that every physical state claim carries a half-life and begins aging when it is made: gradual decay. The earlier text's word is that a cached routing decision is "expired", and PL-107 (Position-Present Validity, PC-6; LL-64, LL-171, LL-187, LL-197, LL-225, LL-353) carries it: validity is never inherited and requires present navigational activity, and "caching valid results and presenting them as current" is a past-tense validity claim presented as present-tense. The PL slot is re-pointed to PL-107 at medium. It differs from the PP-313 move (batch 25), where PL-118's instant invalidation was the earlier text's "as soon as the topology shifts"; here the claim is about presenting the cached as current.
- **PP-331, the LP parent amended to LP-62.** The Worker re-pointed the bare Applies line to LP-66 (The Impossibility of Pre-Planned Routing) under the condition that a cached route is held as a pre-planned route, and set LP-62 aside as saying "nothing of a route calculated ahead". LP-62 (Truth as a Runtime Performance, CP-10 × LL-81) says in its own Irreducible Claim that "a cached route or a pre-planned path holds no present-tense truth", and in a corollary that systems cannot cache truth by storing the result of a previous routing decision. That is the earlier text's claim (cached routing decisions are expired) in its own word, with no condition; LP-66 has no cache, and reading a cached route as a pre-planned one would be this re-crossing's step and not the entry's (the LP-23 precedent, batch 25). PP-250, PP-289, PP-294 and PP-313 each weighed LP-62 and adopted LP-66 because their claims were about a route planned or computed ahead of its use; PP-331's is about the cache. OPEN PM also ran LP for entries holding both "cache" and "rout": LP-62, LP-63 and LP-92. LP-63 (The Consciousness Gradient of Routing) says a traversal that defaults to cached routes is a low-consciousness flow, a gradient and not a loss of present truth; LP-92 caches smooth paths for execution. The LP slot is re-pointed to LP-62 at medium. OPEN PM wrote PP-331's italic, Irreducible Claim, Corollaries, Irreducibility and title; the Irreducibility names PL-108, LP-66, LP-63 and LP-92 as weighed and not adopted, the searches, that PL-107 × LP-62 is crossed by no other entry (PL-107's children are PP-106, PP-193 and PP-447; LP-62 is applied by PP-90 and PP-701, each with PL-193), and the overlap with PP-294.
- **PP-367, LP-481.** The Worker searched "dies before" in PL only. OPEN PM ran it in LP: LP-481 (Restorative Metabolic Minimum, CP-4 × LL-469). Read whole; it states that a restorative process in energy deficit loses the capacity to restore, the restoration mechanism dying before it can execute, and names no engine operating on a topology, no region and no output. Named in PP-367's Irreducibility, not adopted.
- **PP-367 and PP-346, PL-287.** PP-346 (batch 26) did not adopt PL-287 because its earlier text spoke of a stopped state, churning and a Structural Mass residue, which PL-287 does not state. PP-367's restated half is a broader system operating normally over a collapse, which PL-287 does state. The two entries carry different claims, so the two dispositions are consistent.
- **Tags.** The Worker removed all five and each Irreducibility says so: PP-231 `[shared LL-225]` (PL-72 cites PC-2, LL-264 and LL-389; LP-542 CP-58 and LL-383), PP-367 `[shared LL-162]` (PL-287 cites PC-9, PC-8 and LL-449; LP-514 CP-15 and LL-320), PP-330 `[shared LL-142]` and PP-332 `[shared LL-143]` (PL-19 cites PC-6, LL-473, LL-8, LL-152 and LL-153), PP-331 `[shared LL-142]` (PL-107 cites PC-6 and six LLs, not LL-142; LP-62 CP-10 and LL-81). OPEN PM checked each against the current parents: 0 each.
- **Two notes in other entries.** PP-233's note that PP-541 also derives from PL-287 now adds "and PP-367 since batch 28". PP-294's list of PL-108's other children no longer names PP-331 and says it moved to PL-107 in batch 28. PP-289's and PP-294's lists of LP-66's children stay true (the Worker's loci 2 and 3 assumed the LP-66 re-point).
- **Line references.** The batch adds 5 lines to the PP file, one in each of the five entries. The list of header lines on PP line 4510 now reads `:4760, :4967, :5029, :11106, :11546, :11606` for its last six. Nine `PP-n (:m` references move: PP-235 (:4786), PP-252 (:5138), PP-253 (:5157), PP-257 (:5237), PP-261 (:5322; …), PP-263 (:5364) and PP-264 (:5383) by one, PP-357 (:7223, …) by four and PP-492 (:9670) by five. Every `PP-n (:m` reference in the PP file (13, in the forms `(:m)`, `(:m,` and `(:m;`) equals the entry's heading + 5. The PP file goes from 14183 to 14188 lines. PI's 475 title copies (95 for each of the five) are replaced, and no PI line carries an earlier title of the five.

Searches re-run by OPEN PM, each giving the Worker's list: in PL, "cache" (PL-17, PL-107, PL-109), "dark collapse" (PL-287), "dies before" and "appears dead" (none); in LP, "cached" (19 entries), "pre-planned" (LP-62, LP-66), "dead outputs" (LP-514), "accountability proof" (LP-209), "living record" (LP-251); in both, "consequence-aware", "routing graph" and "topology engine" (none). Two more: "dies before" in LP (LP-481, above); entries holding both "cache" and "rout" in LP (LP-62, LP-63, LP-92, above). LL-142, LL-143, LL-162 and LL-225 in each current parent: 0 each.

Verified, not changed: no spec file other than PP and PI names the five entries; PI names each only on its 95 Derives lines. The notes naming PP-330 and PP-332 among PL-19's children stay true, since PL-19 is kept. PP-462 is now the only entry naming PL-305, under its own title; no PP entry names PL-305 under the stale title.

Titles: five changed (PP-231, 330, 331, 332, 367); PP-331's is OPEN PM's, written for the amended parents. Each title's 95 copies in PI were replaced with it (475 copies).

How the slots are counted: the PL slots of PP-231, PP-331 and PP-367 and the LP slots of PP-331 and PP-367 are RE-POINTs (the Worker's PP-331 PL RESTATE became a RE-POINT); the LP slots of PP-330 and PP-332 are NO CARRIER, each line kept with nothing attributed to it; PP-330 and PP-332 are restated to PL-19. That makes 7 slots corrected. **68 remain.** BARREN lines: 133 → 138.

Out-edges: PL-305 loses PP-231 and PP-367 (PP-462 remains); PL-72 gains PP-231 (with PP-303, PP-305 and PP-309); PL-287 gains PP-367 (with PP-233 and PP-541); LP-241 loses PP-367 (PP-490 and PP-711 remain); LP-514 gains PP-367, its first PP child; PL-108 loses PP-331 (PP-361, PP-647 and PP-649 remain); PL-107 gains it (with PP-106, PP-193 and PP-447); LP-62 gains it (with PP-90 and PP-701); the bare "LP (Logical Physical)" Applies line loses one entry.

Loci, not changed here:
- LP-251 (Instantaneous Record Staleness) says the system holds no living records; PL-19, on which PP-330 and PP-332 now rest, says the accountability record must be a living structure (first noted in batch 26). Not reconciled here; for the LP layer.
- PP-331 (a cached route, PL-107 × LP-62) is near PP-294 (a path chosen from cached weights, PL-108 × LP-66, batch 23) in subject. PP-294 weighed LP-62 among 21 LP entries and adopted LP-66 for a route calculated ahead; whether its cache half would rest better on LP-62, as PP-331's now does, is for that entry's next reading. Both are BARREN; neither is reopened here.
- LP-241 is still applied by PP-490 and PP-711, and LP-221 by one entry besides PP-330; those were not read for this batch.
- "Cannot be archived", the earlier PP-330 and PP-332 phrasing that PL-19 does not state, stands in 14 other entries (PP-12, PP-46, PP-174, PP-209, PP-224, PP-258, PP-262, PP-275, PP-302, PP-315, PP-321, PP-338, PP-357, PP-629; the Worker's grep, not read). For the batches that cross them.
- The Tier line of each of the five still reads "Tier 3 (Derived Consequence)"; for the tier pass. PI's [SUBSUMED] tags on these BARREN entries, as before.
- Kernel citations of these five entries were not checked.

### Batch 27, independent check

A blind checker (Opus; brief sha256 `054d7e4edc1c5b56ea0aec6bca089182b6a7156015deb74176937483e2029633`, return `bdc503a66e8817a675047ee8f65c9e47a4172d913c22497f27a989b87a9c6114`) used its own copy of A at `9540121`. It read each entry, each parent and the entries named below whole, re-ran the searches the entries cite, ran its own, and wrote its entry judgments before it opened this record or `DEFECT_LEDGER.md`. It found PP-326 and PP-328 HOLD (high) and PP-323 and PP-329 HOLD (medium); PP-319 and PP-324 AMEND (medium); and PP-327 UNRESOLVED (medium), with no PL and no LP parent and a CL entry on its Derives-from line. It found no IP, IC or II line naming the seven, the 95 PI copies of each title exact, and no tag that belongs: none of the seven current pairs shares an LL.

Adopted (checked against the parents at `6f978c8`):
- **PP-319, corollary (3).** It equated a calibration "set once" with a title "granted once"; PL-248 speaks of a title that is granted, not of a parameter that is set, and neither parent takes the step. The corollary is removed, the step is added to the not-asserted list (now corollary 3) and to the Irreducibility's cut list.
- **PP-324, "embeds".** LP-124's claim is that the self-proving record "must permanently embed" its cost, and its own corollary rejects a proof without a cost receipt as a forgery, which PP-324's corollary (1) quotes; the title, the italic and the second body paragraph stated the requirement as met. All three now read "must permanently embed", and the 95 PI copies of the title change with it.
- **PP-324, the tests by halves.** The Irreducibility applied Test 1 to the PL-24 half and Test 2 to the LP-124 half without saying so. It now states, as PP-365 does, that the method's tests are written for a single constraint and are applied here to each half, which the method text does not state.
- **PP-323, the search counts.** It said "self-certif", "cannot prove its own" and "own completeness" occur in LP-650 alone; "self-certif" occurs in 0 LP entries. It now says so, notes that in PL all three occur in PL-27 itself and "cannot prove its own" also in PL-12 (of legitimacy), and names PL-18 for "proof of sovereignty" (inherited claims are evidence and not current proof of sovereignty; no engine, no completeness; not adopted).
- **PP-327, "a class entry".** CL-1 is a conceptual-logical entry. The entry now says so; the batch 27 section above (its loci) and the slot table row used the same wrong word, and the row is annotated.

Decided on the UNRESOLVED (PP-327): the entry keeps CL-1 on its Derives-from line and BARREN. The checker is right that the method's tests remove one of two parents and have no pair to run on here, so BARREN is a fallback and not a test result, and that a CL entry is not admitted by the PP header (PP = LP × PL). The entry now says both. The line is not changed in this batch: the checker counts 53 PP entries whose Derives-from line names no PL entry (1 CL, 2 LC, 33 LP, 1 PC, 16 PP), and one decision covers them, not a form invented for one entry (the bare "PL (Physical Logical)" is used 0 times).

Recorded, not changed in the entries:
- **PP-34 at PP-220's Irreducibility ("PP-34 (PL-25 × LP-20, :700)").** The checker reads it by the `PP-n (:m` standard as off by 5. It is not of that form (the line number follows the pair), and the batch 26 independent check listed it with the bare numbers that name a heading, which :700 is. Kept.
- **The header filter.** None of the seven pairs shares an LL ancestor; LL-sharing LP candidates exist (LP-120 for PP-323, LP-484 for PP-324, LP-171 and LP-179 for PP-329), and the checker read each whole and found that none carries its entry's claim. The filter question stays with the PP-312 locus.
- **Wording of the batch 27 table.** It says "fails Test 1/2" where the entries say the test "holds" (the claim holds from one parent alone); both mean BARREN.

Line references: the amendments change text within eight existing lines and add none; every `PP-n (:m` reference equals the entry's heading + 5 (recomputed: none off), and the nine headers at PP line 4510 are the headings they name. BARREN lines 138. The PP file stays 14188 lines.

Loci, not changed here:
- PP-298's title carries the same "Embeds" for LP-124's "must permanently embed"; PP-365's title is not restated though its body is; PP-325 still attributes to PL-248 a present-tense, not-a-policy statement, and PP-320 to LP-383 a calibrated consequence attenuator, which batch 27 found those parents do not carry. For the batch that reaches them.
- The 53 PP entries whose Derives-from line names no PL entry (PP-327, PP-722's "LP-168 × PL-209" among them), and PP-1's tag `[shared LL-2]` on PL-42, which cites only LL-14.
- PP-250's note names only PP-95 as a child of LP-66; PP-289, PP-294 and PP-313 also apply it.
- The PP header's LP count (706 against 702 headed), as in the batch 26 check.

### Batch 28, independent check

A blind checker (Opus; brief sha256 `74f2482e6ac7b4893c7e4a3e1048eec0ac6d9473a6213ba5b7f58d8e307e7acd`, return `ce7de61b9d0c61f27c747648a12fb63a94609d93c80807ba8e615b7f7c70725b`) used its own copy of A at `6f978c8`. It read each entry, each parent and the candidates it names whole, re-ran the searches the entries cite, ran its own, and wrote its entry judgments before it opened this record or `DEFECT_LEDGER.md`. It found PP-231, PP-331 and PP-367 AMEND (medium; PP-367 high on two wrong statements), PP-332 AMEND (low-medium, LP slot to LP-128), and PP-330 UNRESOLVED (low-medium, LP slot: LP-652 not weighed). It found no IP, IC or II line naming the five, the 95 PI copies of each title exact, and no tag that belongs: none of the five current pairs, nor the pairs it proposed, shares an LL.

Adopted (checked against the parents at `5ab2933`):
- **PP-231, "Boundary".** No parent carries "oscillation-damping boundary" and LP-542 states no boundary; the phrase came from PP-230's attribution to LP-542. The title, the italic, the second body paragraph and corollary (1) now say that a tension-driven oscillator is damped, the conditions sentence that neither parent states that a given oscillator is damped, and the phrase is added to the cut list with its source. The title is my own minimal restatement and not the checker's word order: "…Is Damped, the Label "Alive" on It at Zero Amplitude Does Not Match the Pulse Reality — At Zero Amplitude the Oscillator Is Dead"; the 95 PI copies change with it.
- **PP-231, how the entry is built.** The Irreducibility called the entry a conjunction of two single-parent facts. The italic and corollaries (1) and (3) are; the title and corollary (2) apply PL-72's label rule to the dead state LP-542 gives, which neither parent states alone. It now says so: the entry adds no rule of its own, and the state stays BARREN. The tests-by-halves sentence (as PP-365) is added.
- **PP-231, PL-242.** PL-242 (Damaged Derivations Can Be Alive at Reduced Metabolic Amplitude, read whole) states aliveness as a metabolic spectrum, with death when amplitude reaches zero; it carries no status label. It is now named as weighed and not adopted, and its tension with PL-72's binary is noted.
- **PP-330, the LP slot.** Decided on the UNRESOLVED: re-pointed to LP-652 (Present-Tense Routing Decision Attribution, CP-49 × LL-161, read whole), low-medium. LP-652 states that routing attribution is written at the moment of the decision and that attribution reconstructed from logs is a model of the past, not a record of it. This follows the PP-324 precedent (re-point the slot to the entry that carries the restated condition) and passes the PP-346 test (do not adopt a parent for a statement the earlier text never made): the earlier text named routing logs and real-time routing history. LP-221 carries nothing of either text. The italic adds the LP-652 half, the body states LP-652 and its condition, corollary (1) adds LP-652's model-not-record, the NO CARRIER sentence is replaced by the adoption and the searches ("rout" with "record": 8 LP entries; LP-665, LP-625 and LP-334 read and not adopted), and the tests run half by half. Test 3 is clear: PL-19 × LP-652 is crossed by no other entry (LP-652's other child, PP-435, has PL-102). No tag: LP-652 cites CP-49 and LL-161.
- **PP-331, PL-109.** The Irreducibility described PL-109 by its corollary (a cached API response without a timestamp). It now states PL-109's general claim, that claiming present-tense validity for a past-tense state is a physical falsehood, notes that the entry's words are PL-107's, and keeps PL-109 not adopted. The tests-by-halves sentence is added.
- **PP-332, the LP slot.** Re-pointed to LP-128 (Self-Incriminating Data, CP-21 × LL-76, read whole), low-medium. The NO CARRIER rested on the phrase "accountability proof" (LP-209 only); "accountab" with "proof" gives 13 LP entries, among them LP-128, which states that the self-proving record carries the unforgeable proof of its own accountability footprint and that accountability audits read the records and do not aggregate logs. LP-123 is excluded under Test 3 (PP-173). The italic adds the LP-128 half, the body states LP-128 and its condition, a new corollary (3) gives LP-128's audits (the not-asserted corollary is now (4), and names no legal obligation, role or code review for either parent), the earlier "No LP entry read carries…" now says the searches first run found none, and the tests run half by half. Test 3 is clear: PL-19 × LP-128 is crossed by no other entry (LP-128's other child, PP-178, has PL-12). No tag: LP-128 cites CP-21 and LL-76.
- **PP-367, two wrong statements.** "LP-514 is the Derives-from parent of PP-659" was false: LP-514 is applied by no other PP entry and appears on PP-659's Derives-from line only as the pair LP-514 × PL-192 marked SUBSUMED. "PP-346 (batch 26) states the same cut claim" was false: PP-346 cut it. Both now say so.
- **PP-367, the title and the cut list.** "May Operate Normally Over the Collapse" glossed PL-287's "while … has completely collapsed"; the title now reads "May Be Operating Normally While the Subsystem Has Completely Collapsed" (95 PI copies with it). "Topology engine" was listed as cut while it remains the condition's subject; the cut list now cuts it only as more than that. The tests-by-halves sentence is added.

Carried from the batch 27 check's loci: **PP-298's title** read "Embeds" for LP-124's "must permanently embed". The title, the italic and the body now read "must permanently embed" (95 PI copies), and the tests-by-halves sentence is added.

Declined: the checker notes that PP-330 and PP-332 cite PL-19 as "(PC-6; LL-8, LL-473)" without LL-152 and LL-153. Those two appear only on PL-19's Applies-to line, unnamed; PL-19's claim body cites LL-8 and LL-473. The bodies are kept.

Line references: the amendments change text within 22 existing PP lines and 190 PI lines and add none; every `PP-n (:m` reference equals the entry's heading + 5 (recomputed: none off), and the header list at PP line 4510 is unchanged. BARREN lines 138. The PP file stays 14188 lines. The batch 28 table above and the batch 28 slot annotations are history and stay as written; the two re-pointed LP slots are annotated in the slot table.

Loci, not changed here:
- PP-230 attributes an "oscillation-damping boundary" to LP-542, which states none (PP-230 derives from PL-114 and has no Derivational State line).
- PL-72's binary aliveness ("no third state") against PL-242's and PL-190's spectrum (damaged is a living state).
- PP-659's Derives-from line holds its PL parent together with LP × PL pair notes, a mixed form that invites misreadings such as PP-367's.
- PL-19's Applies-to line names LL-152 and LL-153 without titles, unlike its other LLs.
- Already open and unchanged: the PP:10 header filter against M:50-54 (Zero Pre-Filtering), PP-346's bare "LP (Logical Physical)", and LP-251 ("no living records") against PL-19.

### Batch 29

The Worker (Sonnet) made the return against `6f978c8` (sha256 `484ac87fcd9e03f0bd9f1d287847de19edc8431bcb4c57222c9e7d50085057b4`). It covers eight slots of the table below: the LP slots of PP-334, PP-336, PP-338, PP-339, PP-345, PP-347 and PP-348, and the PL slot of PP-345. It was applied on top of `72531a0`, where every one of its fourteen old texts still occurs once (`72531a0` changed PP lines in the batch 28 entries and their notes, and none of these texts). The return discloses that the Worker read the tail of another batch's return (`out/batch-28.md`) by mistake and used it for the form of a return only; that file holds a Worker's proposals for entries this batch does not touch, and OPEN PM found nothing in this return that rests on it. OPEN PM read every parent whole (PL-248, PL-27, PL-19, PL-114, PL-118, PL-40, PL-239; LP-223, LP-224, LP-226, LP-227, LP-230, LP-231) and the PL alternatives PL-260 and PL-17, checked the Worker's quotations against the text, re-ran its searches and ran more, and amended two entries.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-334 | PL-248 (kept, restated) | LP-223 (kept, NO CARRIER) | BARREN | LP-223 states shadow trails for unchosen paths and has no sovereignty, boundary or calibration. Restated: where the sensitivity calibration of a sovereignty boundary is held as a sovereignty claim, PL-248's rule applies: sovereignty is not a title that holds once granted; a claim asserted and not performed is a structural-label claim. Fails Test 1. |
| PP-336 | PL-27 (kept, restated) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | The old body named LP-224 (The Novice Vector), which has no accountability, node or completeness. Restated: where the claim that accountability is established at every node is held as a claim that the topology is complete, PL-27's rule applies: it cannot be self-certified. Fails Test 1. |
| PP-338 | PL-19 (kept, restated) | LP-226 (kept, NO CARRIER) | BARREN | LP-226 states a complexity-floor shield and has no checkpoint, record or archive. Restated: where the record kept at a topology checkpoint is held as the accountability record of a topology interaction, PL-19's rule applies: it must be a living structure; an archive of it is history. Fails Test 1. |
| PP-339 | PL-114 (kept, restated) | LP-227 (kept, NO CARRIER) | BARREN | LP-227 states that consensus deprecates an edge and has no monitor, anomaly or death. Restated: where a unit watched by a topology monitor is held as a paradox engine, PL-114's rule applies: an engine not currently churning is stopped; its status is present-tense. Fails Test 1. |
| PP-345 | PL-118 (was PL-239) | LP-230 (kept, NO CARRIER) | BARREN | PL-239 states that discovery transforms tension and does not bear the title the entry gave it ("Optimization of the Topology Is a Present-Tense Act — Pre-Computed Optimizations Expire", in no PL or LP entry). PL-118 states that a structural change invalidates all prior evaluated states of the affected region at once, with no grace period. LP-230 states audited excavation and has no optimization. Restated under the condition that a pre-computed optimization of the topology is held as a prior evaluation of the affected region. Fails Test 1. |
| PP-347 | PL-40 (kept, restated) | LP-231 (kept, NO CARRIER) | BARREN | LP-231 states that beginner-mode agents are blinded to summary labels and has no routing, sovereignty or proof. Restated: where a stored routing decision is held as a sovereignty claim, PL-40's rule applies: proving it requires present traversal, and a pre-evaluated certificate is a label. Fails Test 1. |
| PP-348 | PL-27 (kept, restated) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | The old body named LP-231, which has no routing, completeness or sovereignty case. Restated: where the claim that a router has handled all sovereignty cases is held as a claim that the topology is complete, PL-27's rule applies. Fails Test 1. |

OPEN PM's review. The Worker's text is kept except where listed:
- **PP-334, corollary (3) removed.** The Worker wrote that, under the condition, a claim that the calibration's sovereignty holds because the calibration was set once is a claim that it holds once granted. That is the step the batch 27 check removed from PP-319: PL-248 speaks of a title that is granted, not of a parameter that is set, and neither parent takes the step ("set once" and "granted once" searched: PL-248 alone has "once granted"; neither phrase in LP). The corollary is removed, the step is added to the not-asserted list (now corollary 3) and to the Irreducibility's cut list, in the words used for PP-319.
- **PP-347, the reading of the stored decision as a certificate stated as a condition.** The Worker's body held the stored routing decision "as a sovereignty claim" and, in the same sentence and in corollary (2), "as a pre-evaluated certificate", the second as if it followed. PL-40 says a certificate is a label; it does not say what a stored routing decision is. The body now says that reading the stored decision in place of present traversal is reading a pre-evaluated certificate, and that the condition and that reading are not asserted; corollary (2) is conditioned the same way.
- **PP-336 and PP-348, the quoted examples.** Corollary (3) of each quotes a sentence ("We have clear accountability for every part of the system"; "Our router handles all sovereignty cases"). Both are the entries' earlier corollary text (PP lines 6839 and 7067 at `72531a0`), kept as an example under the condition and not attributed to a parent. Kept.
- **PP-347, the word "label".** LP-231 and PL-40 both say "label": a summary served to a beginner agent in LP-231, a certificate that records a past traversal in PL-40. The Worker's body names the two senses and follows PL-40's; checked, kept.
- **PP-345, the re-point.** PL-239 has no optimization, expiry or cache. Among the three PL entries that state the step (PL-17, proofs expire at a re-evaluation interval set by metabolism; PL-260, every modification resets the whole graph's verified status; PL-118, a structural change invalidates prior evaluations of the affected region with no grace period), the earlier text's "expire with every topology shift" is nearest PL-118's instant invalidation of a region, as at PP-289 and PP-365 (batch 9) and PP-313 (batch 25). PL-17 (the record's candidate) and PL-260 are loci. The Worker's confidence on PL-118 against these was medium-low; OPEN PM's is medium.
- **PP-338, PL-19's LLs.** The restated text cites PL-19 as (PC-6; LL-8, LL-473), the two LLs PL-19 names with titles; LL-152 and LL-153 stand untitled on its Applies line. As in batch 28 (the PL-19 locus), not changed here.
- **Tags.** The Worker removed all seven and each Irreducibility says so: PP-334 `[shared LL-144]`, PP-336 `[shared LL-145]`, PP-338 `[shared LL-147]`, PP-339 `[shared LL-148]`, PP-345 `[shared LL-151]`, PP-347 and PP-348 `[shared LL-152]`. OPEN PM checked each against the current parents: no LL is cited by both parents of any entry. LL-152 stands on PL-19's Applies line, but PL-19 is not a parent of PP-347 or PP-348.
- **Five notes in other entries.** PP-289's list of PL-118's other children adds PP-345, and its note on PP-345 as the other child of PL-239 with the stale title now says it was re-pointed and restated in batch 29. PP-290's note that PP-339 is not restated now says that it was. PP-291's note on PP-347 as the unrestated near sibling, and PP-311's note that PL-40 × LP-231 is crossed by PP-347, now say that batch 29 restated PP-347 onto PL-40 with LP-231 NO CARRIER. PP-319's note that PP-334 was read at its title is a statement about that reading and stays.
- **Line references.** The batch adds 21 lines to the PP file, three in each of the seven entries. The list of header lines on PP line 4510 now reads `:11127, :11567, :11627` for its last three. Two `PP-n (:m` references move by 21: PP-492 (:9691) and PP-357 (:7244, …). Every `PP-n (:m` reference in the PP file (13, in the forms `(:m)`, `(:m,` and `(:m;`) equals the entry's heading + 5. The PP file goes from 14188 to 14209 lines (the Worker's counts, 14189 and 14210, count one line more at both ends; the difference is the same). PI's 665 title copies (95 for each of the seven) are replaced, and no PI line carries an earlier title of the seven.

Searches re-run by OPEN PM, each giving the Worker's list: in PL and LP, "sensitiv", "calibrat", "checkpoint", "self-certif", "prove its own" or "own completeness", "optimizer", "grace period", "pre-computed", "router", "sovereignty proof", "pre-evaluated", "topology monitor", "dies before" or "appears dead", "churn", "living record" or "living structure" (35 PL entries, 4 LP), "archiv", "routing decision", "consequence-aware", "consequence-sensitive", "sovereignty-aware", "distributed accountab" or "every node". More: "once granted" or "granted once" (PL-248 only), "set once" (none), "stopped engine" (PL-114 only), "invalidates all prior" (PL-118 only), "present traversal" (PL-40, and LP-314, Performative Trajectory Identity, read whole: identity by trajectory exists only while the path is retraced; no sovereignty, routing or proof; not adopted), "complete risk" or "coverage claim" (PL-178, PL-208, PL-252; the first two named by the Worker for PP-348, PL-252 a scoping of predictions; not adopted).

Verified, not changed: no spec file other than PP and PI names the seven entries; PI names each only on its 95 Derives lines, with the `[SUBSUMED]` tag, as before.

Titles: seven changed (PP-334, 336, 338, 339, 345, 347, 348), each the Worker's. Each title's 95 copies in PI were replaced with it (665 copies).

How the slots are counted: the PL slot of PP-345 is a RE-POINT; the seven LP slots are NO CARRIER, each line kept (two of them the bare "LP (Logical Physical)") with nothing attributed to it; the six entries with a kept PL parent are restated to it, and PP-345 to its new one. That makes 8 slots corrected. **60 remain.** BARREN lines: 138 → 145.

Out-edges: PL-239 loses PP-345 and has no PP child left; PL-118 gains it (with PP-289, PP-313, PP-365 and PP-425); the other parents keep their children.

Loci, not changed here:
- PL-260 and PL-17 state the PP-345 step for a graph's verified status and for a proof; PL-118 was chosen for the region. If a later reading prefers either, PP-289, PP-313, PP-345 and PP-365 move together.
- LP-650 (Audit-Trail Completeness Verification) says completeness is self-provable for an audit trail; PL-27, on which PP-336 and PP-348 now rest, says completeness cannot be self-certified. Not reconciled here; for the LP layer.
- LP-251 against PL-19 (living records), first noted in batch 26, now also under PP-338.
- PL-251 (sovereign entities outside any subsumption structure), PL-178 (absolute coverage claims) and PL-208 (implied complete risk coverage), each nearest a part of PP-348's cut text, each with another subject.
- "Must Detect Constitutional Death" stands in the titles of PP-343, PP-349, PP-358 and PP-362 (PP-343 is already BARREN under that title), "Consequence-Sensitive" in PP-343, PP-355 and PP-356, "Consequence-Aware" in PP-297, PP-326, PP-341, PP-351, PP-352, PP-361, PP-362, PP-365 and PP-368. For the batches that cross them and the title pass.
- The bare "LP (Logical Physical)" lines of PP-336 and PP-348 name no LP entry; the old bodies named LP-224 and LP-231. Kept, nothing attributed.
- The Tier line of each of the seven still reads "Tier 3 (Derived Consequence)"; for the tier pass. PI's [SUBSUMED] tags on these BARREN entries, as before.
- Kernel citations of these seven entries were not checked.

### Batch 29, independent check

A blind checker (Opus; brief sha256 `98c136de09f24903cfb81918a38d6553dddc58c964ef67d6076212b7ca2ecfef`, return `4eb264700d771c2518e84acdd6cea7e83f99db51fa192ded59acc152bf3ea659`) used its own copy of A at `bb9c983`. It read each entry and each parent whole, checked the 164 quotes in the seven entries against the entries they are attributed to, re-ran the searches the entries cite over whole-entry text, ran its own, and wrote its entry judgments before it opened this record or `DEFECT_LEDGER.md`. It found PP-334, PP-336, PP-338, PP-339, PP-345 and PP-348 HOLDS and PP-347 AMEND, all seven BARREN, all seven LP slots NO CARRIER, PP-345's re-point PL-239 → PL-118 right, no tag that belongs (none of the seven pairs shares an LL), the 13 `PP-n (:m` references and the header list right, the 95 PI copies of each title exact, and no IP, IC or II line naming the seven.

Adopted (checked against the parents at `339d477`):
- **PP-347, the word "label".** The Irreducibility said LP-231 uses "label" in a sense apart from PL-40's. LP-231's labels are cached metadata and summary labels withheld from beginner-mode agents, who must traverse the full internal topology of the node in their place (read whole at LP-231): close to PL-40's sense, and what LP-231 lacks is sovereignty and proof. The sentence now says so in LP-231's words, and that its rule is for beginner-mode agents and node summaries, not for the proof of a sovereignty claim, so the entry does not use it. The class and the slots are unchanged.
- **PP-345, its search sentence.** It gave PP line numbers (7005, 7010, 7014) that were right at `6f978c8`, the clone it names, and are wrong against the file now (each of the four entries before it grew three lines). The sentence now names where the strings occurred without PP line numbers, in the past tense at `6f978c8`; the PL line numbers, which have not moved, stay.
- **PP-338, corollary (2).** It applied PL-19's corollary to the record and said the record had moved. PL-19 says that a narrative externalised into a field separate from the topology means accountability has moved outside the present-tense field (read whole). The corollary now keeps PL-19's subject, accountability.
- **PP-347, PP-348 and PP-339, search accounting.** The "sovereignty boundary" count (PL file: 5 entries) is a stem match; both entries now label it "sovereignty boundar" (stem). PP-347 now accounts for the hits it counted and did not name: the stem finds PL-77 and PL-150 by "sovereignty boundaries" and the phrase occurs in PL-52, PL-118 and PL-281; PL-20, PL-67, PL-127, PL-321, LP-558, LP-509 and LP-625 were read at their hit sentences (by me as well as the checker), and none states a rule for a stored routing decision held as a sovereignty claim. PP-339 now accounts for PL-39 and PL-68, its "topology monitor" hits, neither stating a rule for a unit held as a paradox engine. Each added sentence names this check.
- **PP-343, PL-114's other children.** "Nine other PP entries derive from PL-114" omitted PP-346, PL-114's child since batch 26 (PL-114's Derives children are PP-95, PP-180, PP-190, PP-230, PP-290, PP-339, PP-343, PP-346, PP-349, PP-358 and PP-362). It now reads "Ten other", with PP-346 listed. This predates batch 29; the line names PP-339, so it is fixed here.

Kept: **PP-339, "present-tense fact".** "Fact" is the entry's own noun for the status PL-114 gives; the checker noted it and did not ask for a change.

Not adopted, from the checker's out-of-scope notes: that PP-290 misreads PP-190 as asserting the detection of a death. This record reads PP-190 so (the batch 09 check and batch 22), PP-190's corollary (2) speaks of circuit breakers detecting late-stage existence-collapse, and PP-290 cites this record. It stays.

Line references: the amendments change text within 7 existing PP lines and add none; no title changes, so PI is unchanged; every `PP-n (:m` reference equals the entry's heading + 5 (recomputed: none off), and the header list is unchanged. BARREN lines 151. The PP file stays 14215 lines. The batch 29 table above is history and stays as written.

Loci, not changed here:
- PL-107 (validity cannot be inherited from a past evaluation) is a near locus for PP-345, with PL-17 and PL-260; it does not change the choice of PL-118.
- PP-343 is BARREN and still carries `[shared LL-150]` and its "…Must Detect Constitutional Death…" title; for the title pass and the tag sweep.
- PP-224 and PP-275 are BARREN and still carry a `[shared LL-n]` tag on their Derives lines.
- Already open and unchanged: the PP:10 header filter (the seven pairs share no LL, as before), the Tier lines, and the bare "LP (Logical Physical)" of PP-336 and PP-348.

### Batch 30

The Worker (Sonnet) made the return against `5ab2933` (sha256 `06283392de3a530c19ba71c7d27dc02d0b6946efe862e1dd1dc0ea163f817b97`). It covers eight slots of the table below: the LP slots of PP-349 to PP-354, and the PL slots of PP-353 and PP-354. It was applied on top of `bb9c983`, where every one of its thirty old texts still occurs once (`72531a0` and `bb9c983` changed PP lines in the batch 28 and batch 29 entries and their notes, and none of these texts). The return discloses that the Worker read two other batches' returns (`out/batch-08.md` and `out/batch-09.md`), for the form of a return only; those files hold proposals for entries this batch does not touch, and OPEN PM found nothing in this return that rests on them. OPEN PM read every parent whole (PL-114, PL-14, PL-18, PL-22, PL-27; LP-232, LP-233, LP-234), the adopted carriers (LP-600, LP-335, PL-16) and the alternatives (LP-247, LP-248, LP-599, PL-84, PL-129, PL-254), checked the Worker's quotations against the text, re-ran its searches and ran more, and amended one entry to the current tip.

`CrossReceipt(PP, left, above, class, justification)`:

| Entry | Left (was) | Above (was) | Class | Justification |
| :-- | :-- | :-- | :-- | :-- |
| PP-349 | PL-114 (kept, restated) | LP-232 (kept, NO CARRIER) | BARREN | LP-232 states consciousness-mutating edges and has no resonance, death or detection. Restated: where a consequence-chain resonance structure is a paradox engine, PL-114's rule applies: whether it is operational is a present-tense fact; an engine not churning is stopped, and restarting it instantiates a new engine. Fails Test 1. |
| PP-350 | PL-14 (kept, restated) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | Restated: where each resonance cycle is a traversal, PL-14's rule applies: the cycle leaves a wake and changes the structural mass distribution of the region it traverses; a region traversed many times accumulates structural mass. Fails Test 1. |
| PP-351 | PL-18 (kept, restated) | LP-600 (was LP-233) | BARREN | LP-233 states that entering missing data zones generates pathways and has no membrane or sovereignty. LP-600 (Membrane Sovereignty Rights Enforcement) is the only LP entry with "membrane sovereignty". Restated by halves under the condition that the membrane is an entity in PL-18's sense: PL-18 says sovereignty cannot be inherited, delegated or carried forward as a credential and must be demonstrated in the present; LP-600 says the membrane is itself sovereign. Test 1 holds for the first half, Test 2 for the second. |
| PP-352 | PL-18 (kept, restated) | LP-600 (was bare "LP (Logical Physical)") | BARREN | Under the same condition: PL-18 says the structural mass of prior sovereign acts is weight, not credential; LP-600 carries the membrane's own sovereignty. Test 1 and Test 2 by halves. |
| PP-353 | PL-22 (kept, NO CARRIER) | LP-335 (was LP-234) | BARREN | LP-234 states that the complexity floor is the boundary of sovereignty and has no map, navigation or propagation; PL-22 states that the topology cannot permit its own sovereignty bypass and has none either. LP-335 (Topological Incompleteness Map) states that the wake of traversal acts as a structural map of the graph's incompleteness. Restated under the condition that a consequence propagation through a topology is a traversal; nothing attributed to PL-22. Fails Test 2. |
| PP-354 | PL-16 (was PL-27) | bare "LP (Logical Physical)" (kept, NO CARRIER) | BARREN | PL-27 states that the topology cannot prove its own completeness and has no debt, atrophy or untraversed region. PL-16 (Navigation Debt — Untraversed Paths Carry Logical Atrophy) states the entry's step: an untraversed edge is atrophying, its wake fading, its weight weakening, its pulse declining. Restated where a path of a consequence-propagation topology is not traversed. Fails Test 1. |

OPEN PM's review. The Worker's text is kept except where listed:
- **PP-349, the list of PL-114's restated children.** The Worker's Irreducibility, made at `5ab2933`, said that PP-290, PP-343 and PP-346 already restate PL-114's rule. Batch 29 (`bb9c983`) restated PP-339 to PL-114 as well; the sentence now reads "PP-290, PP-339 (since batch 29), PP-343 and PP-346".
- **PP-351 and PP-352, the re-point to LP-600.** The earlier table proposed LP-599 (Boundary Performance Register) for PP-351 and did not adopt it. LP-599 says a boundary not currently performed is a historical record, not a current structural fact; it has no sovereignty. LP-600 has the membrane's sovereignty and no present-tense rule; PL-18 has the present-tense rule and no membrane. Each entry is a conjunction of the two under a condition that neither parent states (that the membrane is an entity in PL-18's sense), and each Irreducibility says so; Tests 1 and 2 are read half by half, as for PP-248, PP-249, PP-251, PP-294 and PP-324 (the method text writes them for one constraint; see that locus above). Accepted; OPEN PM's confidence medium-low, as the Worker's.
- **PP-353, the re-point to LP-335.** LP-335's "the wake of traversal acts as a structural map" is the entry's own predicate ("navigation IS the production of its constitutional map"); "constitutional" and the claim that a map made without traversal is hypothetical are cut and listed as not asserted. PL-22 stays on the Derives line with nothing attributed to it. Accepted, medium-low.
- **PP-354, PL-16 over PL-84.** PL-84 (Edge Decay and Atrophy) states atrophy and adds that an edge's sovereignty standing degrades with it. The entry's title, italic and claim are navigation debt and atrophy, which is PL-16's own title; the earlier "applies to sovereignty" part is cut. The title keeps "Navigation Debt" because PL-16's title has it. Accepted; OPEN PM's confidence medium, the Worker's low-medium.
- **Tags.** The Worker removed all six and each Irreducibility says so: PP-349 and PP-350 `[shared LL-153]`, PP-351 and PP-352 `[shared LL-154]`, PP-353 and PP-354 `[shared LL-155]`. OPEN PM checked each against the current parents: LL-153, LL-154 and LL-155 are cited in PL only by PL-19, PL-71, PL-74, PL-162, PL-208, PL-245 and PL-314, and in LP only by LP-124, LP-215, LP-649 and LP-650; none of these is a parent of the six.
- **Seven notes in other entries.** PP-290's note that PP-349 is not restated now says that batch 30 restated it. PP-339's note that PP-349 carries "Must Detect Constitutional Death" now says it did until batch 30 restated and retitled it. The lists of PL-27's other children in PP-251, PP-271, PP-323, PP-336 and PP-341 drop PP-354, go from thirteen to twelve, and say that PP-354 was re-pointed to PL-16 in batch 30.
- **Line references.** The batch adds 6 lines to the PP file, one in each entry. The list of header lines on PP line 4510 now reads `:11133, :11573, :11633` for its last three. Two `PP-n (:m` references move by 6: PP-492 (:9697) and PP-357 (:7250, …). Every `PP-n (:m` reference in the PP file (13) equals the entry's heading + 5. The PP file goes from 14209 to 14215 lines. PI's 570 title copies (95 for each of the six) are replaced, and no PI line carries an earlier title of the six.

Searches re-run by OPEN PM, each giving the Worker's list: in PL and LP, "membrane sovereignty" (PL-129, PL-254; LP-600), "sovereignty membrane" (none), "consequence-aware" (none), "constitutional map" (none), "structural map" (PL-240; LP-335, LP-513), "navigation debt" (PL-16), "navigational atrophy" (PL-14, PL-16). More: "third sovereign" (LP-600 only), "untraversed path" (PL-16; LP-454, LP-472), "unmapped" (9 PL entries, 21 LP entries including LP-335), "weight, not credential" or "not as credential" (PL-18 only). PL-129 (subsumption is limited by continuous consent and membrane sovereignty) and PL-254 (isolation boundaries are sovereign entities) were read whole: each has the membrane's sovereignty and neither has the present-tense rule; not adopted, PL-18 kept as the Derives parent.

Verified, not changed: no spec file other than PP and PI names the six entries; PI names each only on its 95 Derives lines, with the `[SUBSUMED]` tag, as before.

Titles: six changed (PP-349 to PP-354), each the Worker's. Each title's 95 copies in PI were replaced with it (570 copies).

How the slots are counted: the LP slots of PP-351, PP-352 and PP-353 and the PL slot of PP-354 are RE-POINTs; the LP slots of PP-349, PP-350 and PP-354 and the PL slot of PP-353 are NO CARRIER, each line kept (two of them the bare "LP (Logical Physical)") with nothing attributed to it. Every entry is restated. That makes 8 slots corrected. **52 remain.** BARREN lines: 145 → 151.

Out-edges: LP-233 loses PP-351 and has no PP child left. LP-600 gains PP-351 and PP-352 (with PP-515). LP-234 keeps PP-232. LP-335 gains PP-353, its first PP child on an Applies line (PP-658 names it on its Derives line). PL-27 loses PP-354 and keeps thirteen children. PL-16 gains it (seven children).

Loci, not changed here:
- LP-247 (Provenance-Fuelled Boundary: a sovereign boundary persists only by the present-tense re-derivation of its entity's right to exist), LP-248 (Momentary Sovereign Surface: the boundary exists only while it is exercised) and LP-599 (Boundary Performance Register: a boundary not currently performed is a historical record) each carry the present-tense half of PP-351 and PP-352 for a boundary, and none has the membrane's own sovereignty. The Worker names LP-247 and LP-248 as a strict reader's alternatives; PP-351's earlier title ("Must Continuously Re-Derive Its Sovereignty") is nearest LP-247. If a later reading prefers one of them, PP-351 and PP-352 move together.
- PL-84 (Edge Decay and Atrophy) against PL-16 for PP-354, as above.
- PP-343's list of PL-114's restated children omits PP-346 (restated in batch 26).
- PP-515's Derives line names PP-515 itself where PL-254 is expected; for the batch that crosses PP-515.
- "Must Detect Constitutional Death" stands in the titles of PP-343, PP-358 and PP-362; "Consequence-Sensitive" in PP-343, PP-355 and PP-356; "Consequence-Aware" in PP-297, PP-326, PP-341, PP-361, PP-362, PP-365 and PP-368. PP-217 and PP-299 speak of "navigation debt" and are not PL-16's children. For the batches that cross them and the title pass.
- The Tier line of each of the six still reads "Tier 3 (Derived Consequence)"; for the tier pass. PI's [SUBSUMED] tags on these BARREN entries, as before.
- Kernel citations of these six entries were not checked.

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
| PP-258 | LP | LP-175 | no carrier found (strict reader, high); batch 19: re-pointed to LP-582, restated, BARREN |
| PP-259 | LP | LP-176 | candidate LP-212, low confidence, not adopted; batch 19: no carrier; nothing attributed to LP-176, restated on PL-38, BARREN |
| PP-260 | LP | LP-177 | no carrier found (every reader); batch 19: no carrier; nothing attributed to LP-177, BARREN |
| PP-261 | LP | LP-616 | no carrier found (strict reader, high); batch 08: re-pointed LP-177 to LP-616 (timing half), restated, BARREN |
| PP-262 | LP | LP-178 | no carrier found (every reader); batch 19: no carrier; nothing attributed to LP-178, restated on PL-19, BARREN |
| PP-263 | LP | LP-179 | no carrier found (strict reader, high); batch 01b: restated, BARREN |
| PP-264 | LP | LP-180 | candidate LP-401, low confidence, not adopted; batch 19: no carrier; nothing attributed to LP-180, restated on PL-145, BARREN |
| PP-265 | LP | LP-180 | no carrier found (strict reader, high); batch 19: no carrier; nothing attributed to LP-180, restated on PL-29, BARREN |
| PP-266 | LP | LP-181 | no carrier found (every reader); batch 20: NO CARRIER, line kept, BARREN |
| PP-267 | LP | LP-182 | no carrier found (every reader); batch 20: re-pointed to LP-186 and restated, BARREN |
| PP-268 | LP | LP-183 | no carrier found (strict reader, high); batch 20: re-pointed to LP-186 and restated, BARREN |
| PP-269 | LP | LP-184 | no carrier found (every reader); batch 01b: restated, BARREN |
| PP-270 | LP | LP-185 | no carrier found (strict reader, high); batch 04: read, not corrected (sense conflicts; to the title pass); batch 11: RE-POINT → LP-212 |
| PP-271 | LP | LP-186 | no carrier found (strict reader, low); batch 20: re-pointed to LP-209 and restated, BARREN |
| PP-272 | LP | LP-187 | no carrier found (every reader); batch 20: NO CARRIER, line kept, BARREN |
| PP-274 | LP | LP-188 | candidate LP-397, low confidence, not adopted; batch 20: re-pointed to LP-397 and restated, BARREN |
| PP-275 | LP | LP-483 (was LP-189) | no carrier found (strict reader, low); batch 01: re-pointed and restated, BARREN |
| PP-276 | LP | LP-190 | no carrier found (strict reader, high); batch 04: read, not corrected (to the title pass); batch 11: RE-POINT → LP-671 |
| PP-277 | LP | LP-191 | no carrier found (strict reader, medium); batch 21: re-pointed to LP-136 and restated, BARREN |
| PP-278 | LP | LP-191 | no carrier found (strict reader, medium); batch 21: re-pointed to LP-136 and restated, BARREN |
| PP-280 | LP | LP-192 | no carrier found (strict reader, medium); batch 21: NO CARRIER, line kept, restated on PL-323, BARREN |
| PP-281 | LP | LP-376 (was LP-193) | no carrier found (strict reader, medium); batch 01: re-pointed and restated, BARREN |
| PP-282 | LP | LP-193 | no carrier found (strict reader, medium); batch 21: re-pointed to LP-383 and restated, BARREN |
| PP-283 | LP | LP-194 | no carrier found (strict reader, high); batch 21: NO CARRIER, line kept, restated on PL-40, BARREN |
| PP-284 | LP | LP-194 | no carrier found (strict reader, high); batch 21: LP-194 kept for what it carries, restated, BARREN |
| PP-285 | LP | LP-195 | no carrier found (strict reader, high); batch 22: LP-195 kept for what it carries, restated, BARREN |
| PP-286 | LP | LP-195 | no carrier found (strict reader, medium); batch 22: re-pointed to LP-1 and restated, BARREN |
| PP-287 | LP | LP-196 | no carrier found (strict reader, high); batch 22: NO CARRIER, line kept, restated on PL-266, BARREN |
| PP-288 | LP | LP-616 | no carrier found (strict reader, high); batch 08: re-pointed LP-196 to LP-616 (timing half), restated, BARREN |
| PP-289 | LP | LP-197 | no carrier found (every reader); batch 22: re-pointed to LP-66 and restated, BARREN |
| PP-290 | LP | LP-197 | no carrier found (strict reader, high); batch 22: NO CARRIER, line kept, restated on PL-114, BARREN |
| PP-291 | LP | LP-198 | no carrier found (strict reader, medium); batch 22: re-pointed to LP-27 and restated, BARREN |
| PP-292 | LP | LP-198 | no carrier found (strict reader, medium); batch 23: re-pointed to LP-24 and restated, BARREN |
| PP-293 | LP | LP-199 | no carrier found (strict reader, high); batch 23: no carrier; nothing attributed to LP-199, restated on PL-285 alone, BARREN |
| PP-294 | LP | LP-200 | no carrier found (strict reader, high); batch 23: re-pointed to LP-66 and restated, BARREN |
| PP-295 | LP | LP-201 | no carrier found (strict reader, medium); batch 23: re-pointed to LP-541 and restated, BARREN |
| PP-296 | LP | LP-202 | no carrier found (strict reader, high); batch 23: no carrier; nothing attributed to LP-202, restated on PL-92 alone, BARREN |
| PP-297 | LP | LP-203 | no carrier found (strict reader, high); batch 24: no carrier; nothing attributed to LP-203 or PL-113, BARREN |
| PP-298 | LP | LP-124 (was LP-204) | no carrier found (strict reader, high); batch 24: re-pointed to LP-124 and restated, BARREN |
| PP-299 | LP | LP-204 | no carrier found (strict reader, high); batch 24: no carrier; nothing attributed to LP-204, restated on PL-29 alone, BARREN |
| PP-300 | LP | LP-205 | no carrier found (strict reader, high); batch 07: no carrier found, not corrected (false attribution stays open); batch 08: restated onto PL-40 alone, nothing attributed to LP-205, BARREN |
| PP-301 | LP | LP-205 | no carrier found (strict reader, high); batch 06: re-pointed to LP-124 and restated, BARREN |
| PP-302 | LP | LP-601 (was LP-206) | no carrier found (strict reader, medium); batch 24: re-pointed to LP-601 and restated, BARREN |
| PP-303 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 24: no carrier; bare line kept, nothing attributed to it, restated on PL-72 alone, BARREN |
| PP-304 | LP | LP-207 | no carrier found (strict reader, medium); batch 24: no carrier; nothing attributed to LP-207, restated on PL-18 alone, BARREN |
| PP-305 | LP | LP-208 | no carrier found (strict reader, medium); batch 09: no carrier; nothing attributed to LP-208, restated on the PL parent alone, BARREN; batch 09 check: REOPENED, candidates LP-438, 562, 590, 602 not read; for re-cross; batch 15: LP-438, 562, 590, 602 read, NO CARRIER after a complete search, BARREN |
| PP-306 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 07: no carrier; body's LP-208 attribution cut and restated on the PL parent alone, BARREN |
| PP-307 | LP | LP-209 | no carrier found (strict reader, medium); batch 25: no carrier; nothing attributed to LP-209 or PL-174, BARREN |
| PP-308 | LP | LP-210 | no carrier found (strict reader, medium); batch 09: no carrier; body's LP-210 attribution cut, restated on the PL parent alone, BARREN; batch 09 check: REOPENED, "no LP states a pruner" false (LP-57, 136, 463, 562); for re-cross; batch 15: LP-57, 136, 463, 562, 332, 333, 514, 195, 587, 678 read, NO CARRIER after a complete search, BARREN |
| PP-309 | LP | none (bare "LP (Logical Physical)") | candidate LP-522, low confidence, not adopted; batch 09: no carrier; body's LP-210 attribution cut, restated on the PL parent alone, BARREN; batch 09 check: REOPENED, "no LP states a pruner" false (LP-57, 136, 438, 463; LP-522, 691); for re-cross; batch 15: LP-57, 136, 438, 463, 522, 691 read, NO CARRIER after a complete search, BARREN |
| PP-310 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 07: no carrier; body's LP-210 attribution cut and restated on the PL parent alone, BARREN |
| PP-311 | LP | LP-211 | no carrier found (strict reader, medium); batch 25: no carrier; nothing attributed to LP-211, restated on PL-40 alone, BARREN |
| PP-312 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 25: no carrier (the Worker's LP-23 re-point not adopted); bare line kept, restated on PL-61 alone, BARREN |
| PP-313 | LP | LP-66 (was LP-212) | no carrier found (strict reader, medium); batch 25: re-pointed to LP-66 and restated, BARREN |
| PP-314 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 26: no carrier; bare line kept, nothing attributed to it, restated on PL-69 alone, BARREN |
| PP-315 | LP | LP-213 | no carrier found (strict reader, medium); batch 26: no carrier; nothing attributed to LP-213, restated on PL-19 alone, BARREN |
| PP-316 | LP | none (bare "LP (Logical Physical)") | no carrier found (strict reader, medium); batch 26: no carrier; bare line kept, nothing attributed to it, restated on PL-40 alone, BARREN |
| PP-317 | LP | LP-214 | no carrier found (strict reader, medium); batch 26: no carrier; nothing attributed to LP-214, restated on PL-14 alone, BARREN |
| PP-318 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 26: no carrier; bare line kept, nothing attributed to it, restated on PL-40 alone, BARREN |
| PP-319 | LP | LP-215 | no carrier found (strict reader, medium); batch 27: no carrier; nothing attributed to LP-215, restated on PL-248 alone, BARREN |
| PP-323 | LP | LP-217 | no carrier found (strict reader, medium); batch 27: no carrier; nothing attributed to LP-217, restated on PL-27 alone, BARREN |
| PP-324 | LP | LP-124 (was bare "LP (Logical Physical)") | no carrier found (every reader); batch 27: re-pointed to LP-124 under a stated condition, restated with PL-24, BARREN |
| PP-326 | LP | LP-219 | no carrier found (strict reader, medium); batch 27: no carrier; nothing attributed to LP-219, restated on PL-40 alone, BARREN |
| PP-327 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 27: no carrier; bare line kept, nothing attributed to it, BARREN |
| PP-328 | LP | LP-168 (was LP-220) | no carrier found (strict reader, medium); batch 27: re-pointed to LP-168 under a stated condition, restated, PL-124 kept and not used, BARREN |
| PP-329 | LP | none (bare "LP (Logical Physical)") | no carrier found (strict reader, low); batch 27: no carrier (the Worker's LP-166 re-point not adopted); bare line kept, restated on PL-145 alone, BARREN |
| PP-330 | LP | LP-652 (was LP-221) | no carrier found (strict reader, medium); batch 28: no carrier; nothing attributed to LP-221, restated on PL-19 alone, BARREN; batch 28 check: re-pointed to LP-652 (LP-221 carries nothing), restated with PL-19, BARREN |
| PP-331 | LP | LP-62 (was bare "LP (Logical Physical)") | no carrier found (strict reader, low); batch 28: re-pointed to LP-62 (LP-66 weighed, not adopted), restated with PL-107, BARREN |
| PP-332 | LP | LP-128 (was LP-222) | no carrier found (strict reader, medium); batch 28: no carrier; nothing attributed to LP-222, restated on PL-19 alone, BARREN; batch 28 check: re-pointed to LP-128 (LP-222 carries nothing), restated with PL-19, BARREN |
| PP-334 | LP | LP-223 | no carrier found (strict reader, medium); batch 29: no carrier; nothing attributed to LP-223, restated on PL-248 alone, BARREN |
| PP-336 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 29: no carrier; bare line kept, nothing attributed to it, restated on PL-27 alone, BARREN |
| PP-337 | LP | LP-225 | no carrier found (strict reader, medium); batch 25: no carrier; nothing attributed to LP-225 or PL-174, BARREN |
| PP-338 | LP | LP-226 | no carrier found (strict reader, medium); batch 29: no carrier; nothing attributed to LP-226, restated on PL-19 alone, BARREN |
| PP-339 | LP | LP-227 | no carrier found (strict reader, medium); batch 29: no carrier; nothing attributed to LP-227, restated on PL-114 alone, BARREN |
| PP-340 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 04: filled with LP-124 and restated, BARREN |
| PP-341 | LP | LP-228 | no carrier found (strict reader, medium); batch 09: no carrier; nothing attributed to LP-228, restated on PL-27 alone, BARREN |
| PP-342 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 07: no carrier; body's LP-228 attribution cut and restated on the PL parent alone, BARREN |
| PP-343 | LP | LP-229 | no carrier found (strict reader, low); batch 09: no carrier; nothing attributed to LP-229, restated on PL-114 alone, BARREN |
| PP-344 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 07: re-pointed to LP-489 and restated, BARREN |
| PP-345 | LP | LP-230 | no carrier found (every reader); batch 29: no carrier; nothing attributed to LP-230, BARREN |
| PP-346 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 26: no carrier; bare line kept, nothing attributed to it, restated on PL-114 alone, BARREN |
| PP-347 | LP | LP-231 | candidate LP-620, low confidence, not adopted; batch 29: no carrier; LP-620 read and not adopted, nothing attributed to LP-231, restated on PL-40 alone, BARREN |
| PP-348 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 29: no carrier; bare line kept, nothing attributed to it, restated on PL-27 alone, BARREN |
| PP-349 | LP | LP-232 | no carrier found (strict reader, medium); batch 30: no carrier; nothing attributed to LP-232, restated on PL-114 alone, BARREN |
| PP-350 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader); batch 30: no carrier; bare line kept, nothing attributed to it, restated on PL-14 alone, BARREN |
| PP-351 | LP | LP-233 | candidate LP-599, medium confidence, no second reader proposed it; not adopted; batch 30: LP-599 read whole and set aside (no sovereignty); re-pointed to LP-600 (Membrane Sovereignty Rights Enforcement) under the condition that the membrane is an entity in PL-18's sense, restated by halves on PL-18 and LP-600, BARREN |
| PP-352 | LP | none (bare "LP (Logical Physical)") | no carrier found (strict reader, low); batch 30: re-pointed to LP-600 under the same condition as PP-351, restated by halves on PL-18 and LP-600, BARREN |
| PP-353 | LP | LP-234 | no carrier found (every reader); batch 30: re-pointed to LP-335 (Topological Incompleteness Map) under the condition that a consequence propagation is a traversal, restated on LP-335 alone, BARREN |
| PP-354 | LP | none (bare "LP (Logical Physical)") | no carrier found (strict reader, low); batch 30: no carrier; bare line kept, nothing attributed to it, restated on PL-16 alone, BARREN |
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
| PP-367 | LP | LP-514 (was LP-241) | no carrier found (every reader); batch 28: re-pointed to LP-514 under a stated condition, restated with PL-287, BARREN |
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
| PP-231 | PL | PL-72 (was PL-305) | no carrier found (strict reader, high); batch 28: re-pointed to PL-72 under a stated condition, restated, BARREN |
| PP-233 | PL | PL-287 (was PL-305) | no carrier found (strict reader, high); batch 17: re-pointed to PL-287 under a stated condition (PL-72 proposed by the Worker, read, not adopted), restated, BARREN |
| PP-236 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 06: re-pointed to PL-140 and restated, BARREN (provisional: LP slot open); batch 08: LP slot settled, BARREN |
| PP-243 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 06: re-pointed to PL-140 and restated, BARREN (provisional: LP slot open); batch 08: LP slot settled, BARREN |
| PP-246 | PL | PL-174 | no carrier found (every reader); batch 04: read, not corrected (to the title pass); batch 11: RE-POINT → PL-302 |
| PP-249 | PL | PL-175 | no carrier found (strict reader, medium); batch 18: no carrier; nothing attributed to PL-175, BARREN (both slots no carrier) |
| PP-255 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 06: re-pointed to PL-267 and restated, BARREN (provisional: LP slot open); batch 08: LP slot settled, BARREN |
| PP-258 | PL | PL-177 | candidate PL-205, low confidence, not adopted; batch 19: re-pointed to PL-237, restated, BARREN |
| PP-260 | PL | PL-240 | candidate PL-29, low confidence, not adopted; batch 19: re-pointed to PL-236 (the old title matched no PL entry), restated, BARREN |
| PP-261 | PL | PL-299 | no carrier found (strict reader, medium); batch 06: re-pointed to PL-266 and restated, BARREN (provisional: LP slot open); batch 08: LP slot settled, BARREN |
| PP-266 | PL | PL-181 | no carrier found (strict reader, medium); batch 20: NO CARRIER, line kept, BARREN |
| PP-269 | PL | PL-182 | no carrier found (every reader); batch 01b: restated, BARREN |
| PP-270 | PL | PL-183 | no carrier found (strict reader, medium); batch 04: read, not corrected (sense conflicts; to the title pass); batch 11: RE-POINT → PL-77 |
| PP-272 | PL | PL-228 | no carrier found (every reader); batch 20: re-pointed to PL-322 and restated (OPEN PM amendment), BARREN |
| PP-274 | PL | PL-81 | no carrier found (strict reader, medium); batch 20: NO CARRIER, line kept (OPEN PM amendment), BARREN |
| PP-279 | PL | PL-228 | no carrier found (every reader); batch 21: re-pointed to PL-322 and restated, BARREN |
| PP-282 | PL | PL-228 | no carrier found (every reader); batch 21: NO CARRIER, line kept, stale title corrected, BARREN |
| PP-286 | PL | PL-276 | no carrier found (strict reader, medium); batch 22: re-pointed to PL-253 and restated, BARREN |
| PP-287 | PL | PL-276 | no carrier found (strict reader, medium); batch 22: re-pointed to PL-266 and restated, BARREN |
| PP-288 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 06: re-pointed to PL-266 and restated, BARREN (provisional: LP slot open); batch 08: LP slot settled, BARREN |
| PP-289 | PL | PL-239 | candidate PL-118, medium confidence, no second reader proposed it; not adopted; batch 22: re-pointed to PL-118 and restated, BARREN |
| PP-292 | PL | PL-276 | no carrier found (strict reader, medium); batch 23: no carrier; nothing attributed to PL-276, restated on LP-24 alone, BARREN |
| PP-293 | PL | PL-285 (was PL-305) | no carrier found (strict reader, high); batch 23: re-pointed to PL-285 under a stated condition (PL-287 and PL-72 read, not adopted), restated, BARREN |
| PP-294 | PL | PL-108 | candidate PL-17, low confidence, not adopted; batch 23: PL-108 kept for what it carries, restated, BARREN |
| PP-295 | PL | PL-237 (was PL-109) | no carrier found (strict reader, medium); batch 23: re-pointed to PL-237 and restated, BARREN |
| PP-297 | PL | PL-113 | no carrier found (every reader); batch 24: no carrier; nothing attributed to PL-113 or LP-203, BARREN |
| PP-301 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 06: re-pointed to PL-140 and restated, BARREN |
| PP-303 | PL | PL-72 (was PL-305) | no carrier found (every reader); batch 24: re-pointed to PL-72 under a stated condition, restated, BARREN |
| PP-305 | PL | PL-72 (was PL-305) | no carrier found (strict reader, high); batch 09: re-pointed to PL-72 under a stated condition, restated, BARREN |
| PP-306 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 07: re-pointed to PL-115 and restated, BARREN |
| PP-307 | PL | PL-174 | no carrier found (strict reader, medium); batch 25: no carrier; nothing attributed to PL-174 or LP-209, BARREN |
| PP-308 | PL | PL-82 | no carrier found (strict reader, medium); batch 09: kept and restated to the door/wall diagnostic, BARREN |
| PP-309 | PL | PL-72 (was PL-305) | no carrier found (every reader); batch 09: re-pointed to PL-72 under a stated condition, restated, BARREN |
| PP-310 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 07: re-pointed to PL-26 and restated, BARREN |
| PP-313 | PL | PL-118 (was PL-108) | candidate PL-118, medium confidence, no second reader proposed it; not adopted; batch 25: re-pointed to PL-118 and restated, BARREN |
| PP-314 | PL | PL-69 (was PL-305) | candidate PL-114, medium confidence, no second reader proposed it; not adopted; batch 26: re-pointed to PL-69 under a stated condition, restated, BARREN |
| PP-327 | PL | CL-1 (a class entry) | no carrier found (strict reader, medium); batch 27: no carrier; CL-1 kept as named, entry restated to what CL-1 states and the searches, BARREN; batch 27 check: CL-1 is a conceptual-logical entry, not a class entry; UNRESOLVED by the tests, kept for the non-PL Derives decision |
| PP-331 | PL | PL-107 (was PL-108) | candidate PL-17, low confidence, not adopted; batch 28: re-pointed to PL-107 under a stated condition (the Worker's PL-108 restatement not adopted), restated, BARREN |
| PP-337 | PL | PL-174 | no carrier found (strict reader, medium); batch 25: no carrier; nothing attributed to PL-174 or LP-225, BARREN |
| PP-340 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 04: re-pointed to PL-140 and restated, BARREN |
| PP-342 | PL | PL-299 | no carrier found (strict reader, medium); batch 07: re-pointed to PL-37 and restated, BARREN |
| PP-344 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 07: re-pointed to PL-140 and restated, BARREN |
| PP-345 | PL | PL-118 (was PL-239) | candidate PL-17, low confidence, not adopted; batch 29: PL-239 does not bear the stale title; re-pointed to PL-118 under a stated condition, restated, BARREN |
| PP-346 | PL | PL-114 (was PL-305) | no carrier found (every reader); batch 26: re-pointed to PL-114 under a stated condition, restated, BARREN |
| PP-353 | PL | PL-22 | no carrier found (every reader); batch 30: no carrier; PL-22 kept on the Derives line, nothing attributed to it, restated on LP-335 alone, BARREN |
| PP-354 | PL | PL-27 | candidate PL-84, low confidence, not adopted; batch 30: PL-84 read whole and set aside (its added sovereignty standing is not the entry's); re-pointed to PL-16 (Navigation Debt — Untraversed Paths Carry Logical Atrophy), restated on PL-16 alone, BARREN |
| PP-361 | PL | PL-108 | candidate PL-118, medium confidence, no second reader proposed it; not adopted |
| PP-366 | PL | PL-299 | candidate PL-267, low confidence, not adopted; batch 07: re-pointed to PL-140 and restated, BARREN |
| PP-367 | PL | PL-287 (was PL-305) | no carrier found (strict reader, high); batch 28: re-pointed to PL-287 under a stated condition, restated, BARREN |
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
