# D20: four LP entries re-crossed on CP-85's own text

Ledger entry: `DEFECT_LEDGER.md`, D20. Status: **OPEN** until the corrected text has been checked independently. Corpus file: `system-foundations-logical-physical.md`.

## The defect

LP-612 to LP-619 each cross CP-85 (Non-Externalizable Cost Attribution) with one of LL-468 to LL-475. Four of them (LP-614, LP-616, LP-617, LP-619) said that CP-85 establishes retroactive cost registration, and reasoned from that. CP-85's text does not say this. It says:
- the energy cost of a derivation cannot be externalized;
- that cost is permanently attributed to the entity that made the structural choice;
- the attribution follows the derivation lineage;
- cost-sharing is possible, but cost-shedding is not.

`git grep -i retroactiv` over `system-foundations-conceptual-physical.md` at the base of this correction finds no line, so no CP entry establishes retroactive registration (see also `docs/audit/D19_PP_PARENT_RESIDUE.md`, related item 3).

## The rule applied

A Cell Crossing has two parents: the left (here the LL entry) and the above (here CP-85) (`dag-crossing-method.md`, section 1). Every pair is classified IRREDUCIBLE, SUBSUMED or BARREN by Tests 1-3 (section 4.A), which ask for a constraint that neither parent makes alone but that requires both.

A constraint whose parts each hold from one parent, standing side by side, does not require both. It fails Test 1 for one part and Test 2 for the other.

Two invariants bind the correction:
- **No Warrant Inflation:** an entry may not claim more than its parents warrant.
- **No Ancestral Erasure:** nothing is erased. A BARREN entry is therefore marked, not deleted.

Each pair was crossed again on what CP-85 actually says. Parents were not changed. CP-85 is the above parent that the row LP-612 to LP-619 was built on, and naming a third entry as a further parent would give a crossing more than two parents. Where the pair has its own product, the entry was restated to it. Where it does not, the entry carries a `**Derivational State:** BARREN` line and is kept.

## Cross Receipts

`CrossReceipt(LP, left, above, class, justification)`:

| Entry | Left | Above | Class | Justification |
| :--- | :--- | :--- | :---: | :--- |
| LP-614 | LL-470 | CP-85 | IRREDUCIBLE | Test 1: LL-470 alone gives that a conclusion's cost includes its path, and places the debt a shortcut defers on the system's future state. Test 2: CP-85 alone bars cost-shedding, but has no notion that dropping a path while keeping the conclusion creates a debt. Product: that debt is not the system's; it stays with the entity that chose the shortcut, which LL-470 alone does not say (it says the opposite) and CP-85 alone cannot say. Test 3: LP-483 and LP-484 cross LL-470 with CP-3 and CP-21, and neither assigns the deferred debt. |
| LP-616 | LL-472 | CP-85 | BARREN | Test 1: the timing (no grace period; a deferral is the deferrer's own default) holds from LL-472 alone. Test 2: that no cost passes to a later holder holds from CP-85 alone. The parts stand side by side; no constraint needs both. The draft's bridge (a deferral is a hand-off to whoever is present later) is not in LL-472 and was not kept. |
| LP-617 | LL-473 | CP-85 | BARREN | Test 2: CP-85 alone attributes the consequence of what was built to the builder, through any walk-away, along the lineage. Test 1: the creator's ownership of the debt is also LL-473's alone. No product needs both. |
| LP-619 | LL-475 | CP-85 | BARREN | Test 1: the claim (the record reaches back past the discovery date; discovery reveals the cost rather than starting it) holds from LL-475 alone. Test 3: LP-492 already states it for embedded history. What CP-85 would add, a maker's ledger for the pre-discovery cost, neither parent settles: LL-475 rests on derivations being discovered rather than created, and places the running cost with the topology and the steward. Corollary 2 had attributed that cost to a "natural origin entity" through LP-617; it now says what holds and that the bearer is not settled. |

## What changed

- **All four entries:** the premise sentence that cites CP-85 now states what CP-85 says.
- **LP-614:** the Irreducibility field and one corollary now state the product.
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
  - Each still holds the content LI-94 takes from it: path mass; the creator owns the cost; the cost record reaches back past discovery.
  - BARREN means that content holds from one parent alone, not that it is false. LI-94 is therefore not changed by this defect.
  - LI-94's own parent fields are a separate locus.
- **PP-22** names LP-616 in its Derives line; see the D19 audit for PP parent slots.
