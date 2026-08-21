# ADR-0004: Non-Destructive $C_0 \to C_1$ Constitutional Migration

**Status:** Accepted  
**Date:** 2026-08-21  
**Authors:** Stephen Weber / Palimpsestus Architecture Group  

---

## Context
When the constitutional specification evolved from $C_0$ to $C_1$, the system faced a choice: overwrite historical derivation files or execute a formal, ancestry-preserving constitutional migration.

## Decision
Palimpsestus adopts **Non-Destructive Constitutional Migration**:
- Historical $C_0$ derivation traces are preserved intact.
- Active status is updated to $C_1$ via machine-readable migration receipts.
- Matrix entries are reclassified into `{Valid, ReParented, EmpiricalHypothesis, Superseded, Invalid}` with complete provenance.

## Consequences
- Demonstrates Palimpsestus physics on its own evolutionary history.
- Obeyes the Universal Invariant against Ancestral Erasure.
- Provides a machine-checkable proof of constitutional evolution (`c0_to_c1_constitutional_migration_proof.json`).
