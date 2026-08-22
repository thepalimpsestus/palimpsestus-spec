---
crucible_id: "CR-005"
title: "Revoked Delegation in Flight"
domain: "governance"
difficulty: "intermediate"

status: "FORMALIZED"
primary_outcome: "PENDING"
outcomes:
  - "PENDING"

constitution: "C_1"
spec_version: "v1.0.7"

constitutional_dependencies:
  - "CC-7"
  - "CC-8"

submitted_date: "2026-08-22"
last_updated: "2026-08-22"
authors:
  - "Stephen Weber <1791 Technologies LLC>"
---

# CR-005 — Revoked Delegation in Flight

## 1. Problem Statement
Alice delegates execution authority to Bob ($A \to B$) to execute a financial transfer. Bob initiates the transaction $T_B$ at $t_1$. At $t_2$, Alice issues a revocation of Bob's delegation ($Revoke(A \to B)$). Due to network propagation latency, the transaction $T_B$ executes on the physical engine at $t_3$, while Alice's revocation arrives at the verifier at $t_4$ with timestamp $t_2$. Is transaction $T_B$ constitutionally legitimate or invalid?

## 2. Minimal Premises
- **P1:** Delegation $A \to B$ was valid at initiation $t_1$.
- **P2:** Revocation $Revoke(A \to B)$ occurred at $t_2 < t_3$.
- **P3:** Physical actuation of $T_B$ occurred at $t_3$ before revocation receipt at $t_4$.

## 3. Epistemic Classification
- **P1:** Minimal Observation.
- **P2:** Minimal Observation.
- **P3:** Minimal Observation.

## 4. Hidden-Premise Audit
- **Hidden Premise A:** Authority is an instantaneous global state rather than a causally bounded provenance propagation path.

## 5. Relational & Domain Decomposition
- **Actors / Relata:** Alice ($A$), Bob ($B$), Physical Engine, Verifier.
- **Relations:** Delegation $Deleg(A \to B)$, Revocation $Revoke(A \to B)$, Execution $Exec(T_B)$.

## 6. Temporal & Provenance Decomposition
- **Actual Ancestry ($G_{\le t}$):** Parallel branches:
  - Branch 1: $Deleg(A \to B) \to Exec(T_B)$
  - Branch 2: $Revoke(A \to B) \to \text{Receipt}$

## 7. Provenance Fidelity Audit
- **Subtractive Integrity:** Neither $Exec(T_B)$ nor $Revoke(A \to B)$ can be erased.
- **Additive Integrity:** Claiming revocation acted instantaneously across disconnected partitions is warrant inflation.

## 8. Constitutional Traversal & Operator Application
- **CC-7 (Sovereignty & Rights):** Preservation of sovereign delegation.
- **CC-8 (Responsibility & Accountability):** Lifecycle accountability for delegated actions.

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
- **Required Specification Entities:** `[CC-7, CC-8]`
- **Novel Machinery Introduced:** `None`

## 14. Competing & Alternate Analyses
- *Open Seed.*

## 15. Formulation Provenance & Sources
- **Historical Source:** Capability-Based Security Systems; Distributed Authorization Protocols.

## 16. Revision History
- **`v1.0`** (2026-08-22): Formalized open seed challenge published.
