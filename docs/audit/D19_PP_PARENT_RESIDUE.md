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
  - Their text stays as written, so no ancestry is erased (`dag-crossing-method.md` line 91: an open item is marked, never deleted).

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

Each batch takes listed slots one at a time. For each slot the parent texts are read whole, a carrier is sought, and the PP is re-pointed or restated to what its parents carry. The pair is then crossed again under `dag-crossing-method.md` Tests 1-3 (section 4.A). An entry whose constraint needs only one parent is kept and marked `**Derivational State:** BARREN` after its Derives line, with the failing test in its Irreducibility field, as in D20 (`docs/audit/D20_LP_CP85_RECROSS.md`, "The rule applied"). The `[shared LL-x]` tags are left as they are (related item 1). A batch is made by a Worker and reviewed by OPEN PM, who reads each parent text again; no batch has been independently re-crossed.

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

## The 250 slots

"Candidate … not adopted" means one reader proposed an entry but the pick did not meet the rule above.

| PP | Side | Named now | Reading |
| :--- | :---: | :--- | :--- |
| PP-102 | LP | LP-72 | no carrier found (strict reader, low) |
| PP-113 | LP | LP-216 (was LP-81) | candidate LP-210, low confidence, not adopted; batch 01: re-pointed and restated, BARREN |
| PP-216 | LP | LP-151 | no carrier found (strict reader, medium) |
| PP-217 | LP | LP-151 | candidate LP-243, low confidence, not adopted |
| PP-218 | LP | LP-151 | no carrier found (strict reader, medium) |
| PP-220 | LP | LP-152 | no carrier found (strict reader, medium) |
| PP-221 | LP | LP-152 | no carrier found (strict reader, medium) |
| PP-223 | LP | LP-153 | candidate LP-1, medium confidence, no second reader proposed it; not adopted |
| PP-224 | LP | LP-154 | no carrier found (strict reader, medium); batch 01: restated, BARREN |
| PP-227 | LP | LP-155 | no carrier found (strict reader, medium) |
| PP-232 | LP | LP-234 (was LP-158) | candidate LP-238, low confidence, not adopted; batch 01: re-pointed and restated, BARREN |
| PP-233 | LP | LP-159 | no carrier found (strict reader, high) |
| PP-234 | LP | LP-159 | no carrier found (strict reader, high) |
| PP-235 | LP | LP-160 | no carrier found (strict reader, low) |
| PP-236 | LP | LP-160 | no carrier found (strict reader, medium) |
| PP-238 | LP | LP-162 | no carrier found (strict reader, high) |
| PP-239 | LP | LP-163 | no carrier found (every reader) |
| PP-240 | LP | LP-163 | no carrier found (strict reader, high) |
| PP-242 | LP | LP-186 (was LP-164) | candidate LP-186, low confidence, not adopted; batch 01: re-pointed and restated, IRREDUCIBLE |
| PP-243 | LP | LP-165 | no carrier found (strict reader, medium) |
| PP-245 | LP | LP-166 | no carrier found (strict reader, high) |
| PP-246 | LP | LP-167 | no carrier found (every reader) |
| PP-247 | LP | LP-168 | no carrier found (strict reader, high) |
| PP-248 | LP | LP-168 | no carrier found (strict reader, high) |
| PP-249 | LP | LP-169 | no carrier found (strict reader, medium) |
| PP-250 | LP | LP-170 | no carrier found (strict reader, high) |
| PP-251 | LP | LP-171 | no carrier found (strict reader, high) |
| PP-252 | LP | LP-172 | no carrier found (strict reader, high) |
| PP-253 | LP | LP-172 | candidate LP-610, low confidence, not adopted |
| PP-254 | LP | LP-173 | no carrier found (every reader) |
| PP-255 | LP | LP-173 | no carrier found (strict reader, high) |
| PP-256 | LP | LP-174 | no carrier found (strict reader, low) |
| PP-257 | LP | LP-174 | no carrier found (strict reader, low) |
| PP-258 | LP | LP-175 | no carrier found (strict reader, high) |
| PP-259 | LP | LP-176 | candidate LP-212, low confidence, not adopted |
| PP-260 | LP | LP-177 | no carrier found (every reader) |
| PP-261 | LP | LP-177 | no carrier found (strict reader, high) |
| PP-262 | LP | LP-178 | no carrier found (every reader) |
| PP-263 | LP | LP-179 | no carrier found (strict reader, high); batch 01b: restated, BARREN |
| PP-264 | LP | LP-180 | candidate LP-401, low confidence, not adopted |
| PP-265 | LP | LP-180 | no carrier found (strict reader, high) |
| PP-266 | LP | LP-181 | no carrier found (every reader) |
| PP-267 | LP | LP-182 | no carrier found (every reader) |
| PP-268 | LP | LP-183 | no carrier found (strict reader, high) |
| PP-269 | LP | LP-184 | no carrier found (every reader); batch 01b: restated, BARREN |
| PP-270 | LP | LP-185 | no carrier found (strict reader, high) |
| PP-271 | LP | LP-186 | no carrier found (strict reader, low) |
| PP-272 | LP | LP-187 | no carrier found (every reader) |
| PP-274 | LP | LP-188 | candidate LP-397, low confidence, not adopted |
| PP-275 | LP | LP-483 (was LP-189) | no carrier found (strict reader, low); batch 01: re-pointed and restated, BARREN |
| PP-276 | LP | LP-190 | no carrier found (strict reader, high) |
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
| PP-288 | LP | LP-196 | no carrier found (strict reader, high) |
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
| PP-300 | LP | LP-205 | no carrier found (strict reader, high) |
| PP-301 | LP | LP-205 | no carrier found (strict reader, high) |
| PP-302 | LP | LP-206 | no carrier found (strict reader, medium) |
| PP-303 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-304 | LP | LP-207 | no carrier found (strict reader, medium) |
| PP-305 | LP | LP-208 | no carrier found (strict reader, medium) |
| PP-306 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-307 | LP | LP-209 | no carrier found (strict reader, medium) |
| PP-308 | LP | LP-210 | no carrier found (strict reader, medium) |
| PP-309 | LP | none (bare "LP (Logical Physical)") | candidate LP-522, low confidence, not adopted |
| PP-310 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
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
| PP-340 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-341 | LP | LP-228 | no carrier found (strict reader, medium) |
| PP-342 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
| PP-343 | LP | LP-229 | no carrier found (strict reader, low) |
| PP-344 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
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
| PP-365 | LP | LP-240 | no carrier found (every reader) |
| PP-366 | LP | none (bare "LP (Logical Physical)") | no carrier found (every reader) |
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
| PP-24 | PL | PL-50 | no carrier found (strict reader, medium) |
| PP-26 | PL | PL-59 | no carrier found (every reader); batch 02: restated, BARREN |
| PP-42 | PL | PL-51 | no carrier found (strict reader, medium); batch 02: re-pointed to PL-247 and restated, BARREN |
| PP-43 | PL | PL-53 | candidate PL-98, low confidence, not adopted |
| PP-49 | PL | PL-54 | no carrier found (strict reader, medium); batch 02: re-pointed to PL-192 and restated, BARREN |
| PP-52 | PL | PL-54 | no carrier found (strict reader, medium) |
| PP-59 | PL | PL-149 | candidate PL-255, low confidence, not adopted |
| PP-63 | PL | PL-149 | candidate PL-255, low confidence, not adopted |
| PP-69 | PL | PL-59 | no carrier found (every reader) |
| PP-78 | PL | PL-198 | no carrier found (strict reader, medium) |
| PP-80 | PL | PL-149 | candidate PL-255, low confidence, not adopted |
| PP-89 | PL | PL-90 | no carrier found (every reader) |
| PP-92 | PL | PL-94 | no carrier found (strict reader, medium) |
| PP-98 | PL | PL-149 | candidate PL-255, low confidence, not adopted |
| PP-103 | PL | PL-82 | no carrier found (every reader); batch 02: re-pointed to PL-191 and restated, BARREN |
| PP-107 | PL | PL-85 | no carrier found (strict reader, medium) |
| PP-112 | PL | PL-50 | no carrier found (every reader) |
| PP-115 | PL | PL-86 | no carrier found (strict reader, medium) |
| PP-119 | PL | PL-87 | candidate PL-63, low confidence, not adopted |
| PP-129 | PL | PL-110 | no carrier found (strict reader, medium) |
| PP-130 | PL | PL-111 | no carrier found (strict reader, medium) |
| PP-131 | PL | PL-113 | candidate PL-226, low confidence, not adopted |
| PP-136 | PL | PL-160 | no carrier found (strict reader, medium) |
| PP-140 | PL | PL-149 | candidate PL-255, low confidence, not adopted |
| PP-145 | PL | PL-216 | no carrier found (strict reader, medium) |
| PP-154 | PL | PL-130 | no carrier found (strict reader, medium) |
| PP-158 | PL | PL-133 | no carrier found (strict reader, medium) |
| PP-163 | PL | PL-50 | no carrier found (every reader) |
| PP-166 | PL | PL-51 | no carrier found (strict reader, medium) |
| PP-184 | PL | PL-144 | no carrier found (strict reader, high) |
| PP-192 | PL | PL-154 | no carrier found (strict reader, medium) |
| PP-196 | PL | PL-198 | no carrier found (every reader) |
| PP-199 | PL | PL-50 | no carrier found (strict reader, high) |
| PP-216 | PL | PL-22 | no carrier found (every reader) |
| PP-217 | PL | PL-27 | candidate PL-84, low confidence, not adopted |
| PP-219 | PL | PL-30 | no carrier found (strict reader, medium) |
| PP-231 | PL | PL-305 | no carrier found (strict reader, high) |
| PP-233 | PL | PL-305 | no carrier found (strict reader, high) |
| PP-236 | PL | PL-299 | candidate PL-267, low confidence, not adopted |
| PP-243 | PL | PL-299 | candidate PL-267, low confidence, not adopted |
| PP-246 | PL | PL-174 | no carrier found (every reader) |
| PP-249 | PL | PL-175 | no carrier found (strict reader, medium) |
| PP-255 | PL | PL-299 | candidate PL-267, low confidence, not adopted |
| PP-258 | PL | PL-177 | candidate PL-205, low confidence, not adopted |
| PP-260 | PL | PL-240 | candidate PL-29, low confidence, not adopted |
| PP-261 | PL | PL-299 | no carrier found (strict reader, medium) |
| PP-266 | PL | PL-181 | no carrier found (strict reader, medium) |
| PP-269 | PL | PL-182 | no carrier found (every reader); batch 01b: restated, BARREN |
| PP-270 | PL | PL-183 | no carrier found (strict reader, medium) |
| PP-272 | PL | PL-228 | no carrier found (every reader) |
| PP-274 | PL | PL-81 | no carrier found (strict reader, medium) |
| PP-279 | PL | PL-228 | no carrier found (every reader) |
| PP-282 | PL | PL-228 | no carrier found (every reader) |
| PP-286 | PL | PL-276 | no carrier found (strict reader, medium) |
| PP-287 | PL | PL-276 | no carrier found (strict reader, medium) |
| PP-288 | PL | PL-299 | candidate PL-267, low confidence, not adopted |
| PP-289 | PL | PL-239 | candidate PL-118, medium confidence, no second reader proposed it; not adopted |
| PP-292 | PL | PL-276 | no carrier found (strict reader, medium) |
| PP-293 | PL | PL-305 | no carrier found (strict reader, high) |
| PP-294 | PL | PL-108 | candidate PL-17, low confidence, not adopted |
| PP-295 | PL | PL-109 | no carrier found (strict reader, medium) |
| PP-297 | PL | PL-113 | no carrier found (every reader) |
| PP-301 | PL | PL-299 | candidate PL-267, low confidence, not adopted |
| PP-303 | PL | PL-305 | no carrier found (every reader) |
| PP-305 | PL | PL-305 | no carrier found (strict reader, high) |
| PP-306 | PL | PL-299 | candidate PL-267, low confidence, not adopted |
| PP-307 | PL | PL-174 | no carrier found (strict reader, medium) |
| PP-308 | PL | PL-82 | no carrier found (strict reader, medium) |
| PP-309 | PL | PL-305 | no carrier found (every reader) |
| PP-310 | PL | PL-299 | candidate PL-267, low confidence, not adopted |
| PP-313 | PL | PL-108 | candidate PL-118, medium confidence, no second reader proposed it; not adopted |
| PP-314 | PL | PL-305 | candidate PL-114, medium confidence, no second reader proposed it; not adopted |
| PP-327 | PL | none | no carrier found (strict reader, medium) |
| PP-331 | PL | PL-108 | candidate PL-17, low confidence, not adopted |
| PP-337 | PL | PL-174 | no carrier found (strict reader, medium) |
| PP-340 | PL | PL-299 | candidate PL-267, low confidence, not adopted |
| PP-342 | PL | PL-299 | no carrier found (strict reader, medium) |
| PP-344 | PL | PL-299 | candidate PL-267, low confidence, not adopted |
| PP-345 | PL | PL-239 | candidate PL-17, low confidence, not adopted |
| PP-346 | PL | PL-305 | no carrier found (every reader) |
| PP-353 | PL | PL-22 | no carrier found (every reader) |
| PP-354 | PL | PL-27 | candidate PL-84, low confidence, not adopted |
| PP-361 | PL | PL-108 | candidate PL-118, medium confidence, no second reader proposed it; not adopted |
| PP-366 | PL | PL-299 | candidate PL-267, low confidence, not adopted |
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
