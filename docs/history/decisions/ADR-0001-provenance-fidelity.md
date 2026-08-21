# ADR-0001: Provenance Fidelity Dual Invariants

**Status:** Accepted  
**Date:** 2026-08-21  
**Authors:** Stephen Weber / Palimpsestus Architecture Group  
**Governing Invariants:** Universal Invariant $\rightleftharpoons$ Non-Inflationary Warrant  

---

## Context
In distributed cognitive and process-ontological systems, system state mutations risk either historical erasure (overwriting past state) or warrant inflation (claiming greater certainty or capability than is justified by provenance).

## Decision
Palimpsestus adopts as an inviolable constitutional foundation **Provenance Fidelity**, defined by two complementary conjugate invariants:

$$\boxed{ \underbrace{\text{No Ancestral Erasure}}_{\text{Universal Invariant (Subtractive Integrity)}} \rightleftharpoons \underbrace{\text{No Warrant Inflation}}_{\text{Non-Inflationary Warrant (Additive Integrity)}} }$$

1. **Subtractive Integrity (Universal Invariant):** Historical state, occurrence receipts, and derivation paths are append-only and cannot be erased or overwritten.
2. **Additive Integrity (Non-Inflationary Warrant):** Asserted capability or state certainty must never exceed justified capability:
   $$\mathcal{C}_{\text{claimed}}(v) \subseteq \mathcal{C}_{\text{justified}}(v)$$

## Consequences
- All constitutional migrations must be non-destructive ($C_n \to C_{n+1}$ reclassifies with ancestry preserved).
- State mutations require cryptographic occurrence receipts.
- Downstream systems are protected against silent data corruption and unprovenanced authority claims.
