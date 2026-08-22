---
crucible_id: "CR-004"
title: "Two Clocks Disagree"
domain: "distributed-systems"
difficulty: "introductory"

status: "FORMALIZED"
primary_outcome: "PENDING"
outcomes:
  - "PENDING"

constitution: "C_1"
spec_version: "v1.0.7"

constitutional_dependencies:
  - "CC-3"
  - "CC-6"

submitted_date: "2026-08-22"
last_updated: "2026-08-22"
authors:
  - "Stephen Weber <1791 Technologies LLC>"
---

# CR-004 — Two Clocks Disagree

## 1. Problem Statement
Two independent distributed nodes $N_A$ and $N_B$ record event $e_1$ and event $e_2$. Physical wall-clock timestamp on $N_A$ indicates $t(e_1) = 10:00:00.001$, while timestamp on $N_B$ indicates $t(e_2) = 10:00:00.000$. However, $e_1$ causally influenced $e_2$ via a high-speed optical network packet sent at $N_A$ before $e_2$ occurred at $N_B$. The wall-clocks report $e_2 \prec e_1$, while causal history mandates $e_1 \prec e_2$. How does Palimpsestus resolve conflicting physical clock ordering against causal partial orders?

## 2. Minimal Premises
- **P1:** Wall-clock timestamp $t_A(e_1) > t_B(e_2)$.
- **P2:** Causal network dependency $e_1 \to e_2$ is established via cryptographic packet attestation.
- **P3:** No total global wall-clock exists across independent relativistic frames.

## 3. Epistemic Classification
- **P1:** Minimal Observation (Local node clock measurement).
- **P2:** Minimal Observation (Cryptographic packet occurrence).
- **P3:** Constitutive Assumption (Physical boundary constraint).

## 4. Hidden-Premise Audit
- **Hidden Premise A:** Physical wall-clock timestamps establish total causal ordering across independent distributed frames.

## 5. Relational & Domain Decomposition
- **Actors / Relata:** Nodes $N_A, N_B$, Events $e_1, e_2$, Packet $m_{AB}$.
- **Relations:** Local wall-clock evaluation $t(e)$, Causal dependency $e_1 \prec e_2$.

## 6. Temporal & Provenance Decomposition
- **Actual Ancestry ($G_{\le t}$):** $e_1 \prec m_{AB} \prec e_2$.
- **Semantic Overlay ($E_{\text{semantic}}$):** Local timestamp assertions $t_A, t_B$.

## 7. Provenance Fidelity Audit
- **Subtractive Integrity:** Causal packet trace $e_1 \to e_2$ cannot be erased by clock skew.
- **Additive Integrity:** Asserting global total order from local un-synchronized clocks is warrant inflation.

## 8. Constitutional Traversal & Operator Application
- **CC-3 (Truth & Zero Theater):** Attested event graph outranks clock metadata.
- **CC-6 (Effective History):** Causal partial order determines reachability.

## 9. Formal Derivation & Analysis
*Open Seed — Available for Community Analysis.*

## 10. Adversarial Counter-Analysis
*Open Seed — Pending analysis.*

## 11. Residual Tension & Open Frontiers
*Open Seed — Pending analysis.*

## 12. Outcome Classification & Justification
- **Primary Outcome:** `PENDING`
- **Outcomes:** `[PENDING]`

## 13. Resolution Dependency Audit
- **Required Specification Entities:** `[CC-3, CC-6]`
- **Novel Machinery Introduced:** `None`

## 14. Competing & Alternate Analyses
- *Open Seed.*

## 15. Formulation Provenance & Sources
- **Historical Source:** Leslie Lamport, "Time, Clocks, and the Ordering of Events in a Distributed System", *CACM*, 1978.

## 16. Revision History
- **`v1.0`** (2026-08-22): Formalized open seed challenge published.
