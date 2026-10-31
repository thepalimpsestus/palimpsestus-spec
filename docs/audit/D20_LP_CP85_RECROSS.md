# D20: four LP entries re-crossed on CP-85's own text

Ledger entry: `DEFECT_LEDGER.md`, D20. Status: **CLOSED**. Round 2 (below) answers the first independent check; Round 3 records the second, which found the correction holds. Corpus file: `system-foundations-logical-physical.md`.

## The defect

LP-612 to LP-619 each cross CP-85 (Non-Externalizable Cost Attribution) with one of LL-468 to LL-475. Four of them (LP-614, LP-616, LP-617, LP-619) said that CP-85 establishes retroactive cost registration, and reasoned from that. CP-85's text does not say this. It says:
- the energy cost of a derivation cannot be externalized;
- that cost is permanently attributed to the entity that made the structural choice;
- the attribution follows the derivation lineage;
- cost-sharing is possible, but cost-shedding is not.

`git grep -i retroactiv` over `system-foundations-conceptual-physical.md` at the base of this correction finds no line. A one-word search does not show absence, so the nearest CP text was read as well: CP-84 (Continuous Metabolic Register) says the meter runs before anyone arrives. It carries cost that accrues before anyone arrives, but not a registration that reaches back. On that reading no CP entry establishes retroactive registration (see also `docs/audit/D19_PP_PARENT_RESIDUE.md`, related item 3, which names CP-84).

## The rule applied

A Cell Crossing has two parents: the left (here the LL entry) and the above (here CP-85) (`dag-crossing-method.md`, section 1). Every pair is classified IRREDUCIBLE, SUBSUMED or BARREN by Tests 1-3 (section 4.A), which ask for a constraint that neither parent makes alone but that requires both.

A constraint whose parts each hold from one parent, standing side by side, does not require both. It fails Test 1 for one part and Test 2 for the other.

Two invariants bind the correction:
- **No Warrant Inflation:** an entry may not claim more than its parents warrant.
- **No Ancestral Erasure** (method line 7). The method names this invariant but defines it only through Fold Test 4 (input coverage). Section 7 says surviving entries carry Derivational State IRREDUCIBLE, and the method does not say what becomes of an existing entry later found BARREN. Here such an entry is kept and marked `**Derivational State:** BARREN` (the schema's enum value), because each has out-edges whose derivation would otherwise lose a parent. That is this correction's reading, not a rule the method states. (Note, 2026-10-31: the Holder answered the question about 03:45Z, "5 keep" on HOLDER-QUEUE item 5, keep or remove an entry found BARREN after it was written; the keeping now rests on that answer.)

Each pair was crossed again on what CP-85 actually says. Parents were not changed. CP-85 is the above parent that the row LP-612 to LP-619 was built on, and naming a third entry as a further parent would give a crossing more than two parents. D19 related item 3 suggested re-parenting LP-616 and LP-619 to CP-84. That was not done: the CP-85 pairs must be classified in any case (Zero Pre-Filtering Mandate), and changing the parent would replace the crossing that was made rather than classify it. A CP-84 × LL crossing is a separate candidate pair. No LP entry at the base of this correction has CP-84 as a parent (`git grep -c CP-84` over the LP file: no hits); that is an open locus for the D19 batches, not settled here. Where the pair has its own product, the entry was restated to it. Where it does not, the entry carries a `**Derivational State:** BARREN` line and is kept.

## Cross Receipts

`CrossReceipt(LP, left, above, class, justification)`:

| Entry | Left | Above | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| LP-614 | LL-470 | CP-85 | IRREDUCIBLE | Test 1: LL-470 alone gives that a conclusion's cost includes its path, and places the debt a shortcut defers on the system's future state. Test 2: CP-85 alone bars cost-shedding, but has no notion that dropping a path while keeping the conclusion creates a debt. Product: that debt stays attributed to the entity that chose the shortcut. LL-470 alone places the debt in time (the system's future state) but names no owner; CP-85 alone cannot say it. That a conclusion's cost includes its path holds from LL-470 alone and is not the product. Test 3: LP-483 and LP-484 cross LL-470 with CP-3 and CP-21, and neither assigns the deferred debt. |
| LP-616 | LL-472 | CP-85 | BARREN | Test 1: the timing (no grace period; a deferral is the deferrer's own default) holds from LL-472 alone. Test 2: that no cost passes to a later holder holds from CP-85 alone. The parts stand side by side; no constraint needs both. The draft's bridge (a deferral is a hand-off to whoever is present later) is not in LL-472 and was not kept. |
| LP-617 | LL-473 | CP-85 | BARREN | Test 2: CP-85 alone attributes the consequence of what was built to the builder, through any walk-away, along the lineage. Test 1: the creator's ownership of the debt is also LL-473's alone. No product needs both. |
| LP-619 | LL-475 | CP-85 | BARREN | Test 1: the claim (the record reaches back past the discovery date; discovery reveals the cost rather than starting it) holds from LL-475 alone. What CP-85 would add, a maker's ledger for the pre-discovery cost, neither parent settles: LL-475 rests on derivations being discovered rather than created, and places the running cost with the topology and the steward. Corollary 2 had attributed that cost to a "natural origin entity" through LP-617; it now says what holds and that the bearer is not settled. |

## What changed

- **All four entries:** the premise sentence that cites CP-85 now states what CP-85 says.
- **Claim bodies:** LP-614 gains its product sentence; LP-616 gains the sentence that a deferral is the chooser's default, not a transfer; LP-617's last sentence now follows the attribution back along the lineage.
- **LP-614:** the Irreducibility field and one corollary now state the product.
- **LP-617 corollary 1 changes meaning:** it said the inheritor takes on the future costs; it now says the inheritor adds its own share and the creator's share stays with the creator (CP-85: cost-sharing is possible, cost-shedding is not).
- **LP-616, LP-617 and LP-619:**
  - each gains a `**Derivational State:** BARREN` line after its Derives line (the field in the method's entry template), so three lines are added;
  - each Irreducibility field gives the test that fails;
  - the summary or corollaries that rested on retroactive registration are restated.
- No entry has been removed, renumbered or re-parented.

## Independence

Before the correction was written, an independently prompted check crossed LP-612 to LP-619 from the method and the parent texts alone. It reached BARREN for LP-616, LP-617 and LP-619, and a surviving residue for LP-614, matching the classes above. It had no access to the draft. One repository-wide search it ran printed a single line naming this defect, after its own finding was formed, and it disclosed that.

That check also reported points about LP-612, LP-613, LP-615 and LP-618, about the LP file header, and about out-edges. Those are outside this defect. They are not settled here and go to the D19 correction batches.

## Out-edges

- **LI-94** cites LP-614, LP-617 and LP-619.
  - LP-614 and LP-617 still hold what LI-94 takes from them: path mass; the creator owns the cost of what it created. BARREN means that content holds from one parent alone, not that it is false.
  - LP-619 does not. LI-94 registers pre-discovery cost to the creator, from the creation date (its summary, Irreducible Claim and corollary 2). Before this correction that bearer came from LP-619's corollary 2 ("the natural origin entity (LP-617)"). That corollary is corrected: LP-619 now says the bearer is not settled by either parent. So LI-94 asserts a bearer its LP parent no longer carries. This is recorded as **D21** and is not corrected within D20.
  - LI-94's own parent fields are a separate locus.
- **PP-22** names LP-616 in its Derives line; see the D19 audit for PP parent slots.

## Round 2: the first independent check

An independently prompted check of the landed text (at 308ec35) agreed with the classes of LP-614, LP-616 and LP-617, and accepted BARREN for LP-619 on the reading recorded above. It found one must-fix: this file and LP-619 said the out-edge LI-94 was unaffected, when LI-94's creator attribution of pre-discovery cost had lost its LP carrier. That is now recorded as D21 (Out-edges above). It also raised these notes, answered here:
- LP-614's Irreducibility credited the pair with what LL-470 gives alone: restated to the residue only.
- LP-616 kept "future registration event" and "complete accounting" in a BARREN entry: both restated. Corollary 3 now carries an LL-472 statement (no later moment to move a cost to) in place of the old corollary 2's LL-472 half, which said present-tense collection prevents future debt from forming; both are LL-472's alone.
- "Not the system's" and "says the opposite" over-read LL-470, which places the debt in time, not with an owner: restated.
- LP-619's Test 3 citation of LP-492 covered only a special case: removed; Test 1 decides the class.
- The Derivational State value carried a suffix outside the schema enum: the line is now the bare value, and the Irreducibility field names D20 and this file.
- "What changed" omitted the claim-body edits and LP-617 corollary 1's change of meaning: added.
- The absence claim rested on one word, and D19's CP-84 suggestion was not answered: both answered above.
- Not adopted: the check read "from their natural origin" in LP-619's claim as more than LL-475 says. LL-475 says undiscovered derivations "have always been incurring costs" and that discovery reveals obligations running "since before the discoverer existed", on derivations that pre-exist (LC-11). That warrants "from their natural origin". The text is unchanged.
- Seen in passing by the check, outside this defect: LP-702 attributes 'responsibility-weighted oscillation' to its above parent CP-61 (Compensatory Structure Spawner), a phrase that matches CP-86's title. An open locus for the D19 batches.

## Round 3: the second independent check

A second check, prompted independently of the edits, read the round-2 text and found the correction holds, with no must-fix. Its re-run of the absence search (`git grep -n -i 'retroactiv\|backdat'` over `system-foundations-conceptual-physical.md`) found no line; not found is not proof of absence. It confirmed that no LP entry at the base of this correction has CP-84 as a parent (0 hits), and accepted the reading of LL-475 recorded in Round 2. It raised four notes, applied here:
- LP-617's out-edge sentence understated what LI-94 takes from it: LI-94 also takes the non-transfer to a later holder, which CP-85 alone carries. Restated; the edge stands either way, since both halves are single-parent facts LP-617 still carries.
- Round 2 called corollary 3 of LP-616 a restoration of the old LL-472 half; the wording differs. Re-worded above.
- "before discovery" went beyond CP-84's words; now "before anyone arrives".
- The register title still read `D01` – `D20`: now `D21`.

D20 is closed. D21 stays open.
