---
crucible_id: "CR-001"
title: "Ship of Theseus"
domain: "philosophy"
difficulty: "introductory"

status: "ADVERSARIAL_REVIEW"
primary_outcome: "REFRAMED"
outcomes:
  - "REFRAMED"

constitution: "C_1"
spec_version: "v1.0.7"

constitutional_dependencies:
  - "CC-4"
  - "CC-5"
  - "CC-6"
  - "CC-11"

submitted_date: "2026-08-22"
last_updated: "2026-08-22"
authors:
  - "Palimpsestus Architecture Group <architecture@palimpsestus.org>"
---

# CR-001 — Ship of Theseus

## 1. Problem Statement
A ship belonging to Theseus is maintained over years by replacing every wooden plank one by one as it decays ($T_0 \to T_n$). Concurrently, an archivist collects every discarded original plank and reassembles them in a warehouse into a reconstructed ship ($R_n$). The classic paradox asks: *Which ship is the true Ship of Theseus—the continuously repaired active ship ($T_n$) or the reassembled original material ship ($R_n$)?*

## 2. Minimal Premises
- **P1:** Ship $T_0$ is instantiated at time $t_0$ with material set $M_0$.
- **P2:** At each step $t_k$, plank $m_k \in M_0$ is removed and replaced by new plank $m_k'$, forming active ship $T_k$.
- **P3:** The replaced planks $m_k$ are preserved and reassembled at $t_n$ into ship $R_n$.
- **P4:** Both $T_n$ and $R_n$ claim identity with $T_0$.

## 3. Epistemic Classification
- **P1:** Tier 1 Phenomenological Constraint (Minimal Observation).
- **P2:** Tier 1 Phenomenological Constraint (Minimal Observation).
- **P3:** Tier 1 Phenomenological Constraint (Minimal Observation).
- **P4:** Tier 5 Operational Heuristic (Semantic identity claims).

## 4. Hidden-Premise Audit
- **Hidden Premise A:** "Identity" is a singular, context-free binary predicate $Identity(A, B) \in \{0, 1\}$.
- **Hidden Premise B:** Physical matter retains an immutable metaphysical essence independent of historical traversal.

## 5. Relational & Domain Decomposition
- **Actors / Relata:** $T_0, T_1, \dots, T_n$, $R_n$, Planks $\{m_k\}$, Repairers, Observers.
- **Relations:** Causal continuity $\prec$, Material composition $\in$, Semantic identity assertion.
- **Frames:** Causal ancestry frame $F_{\text{causal}}$, Material provenance frame $F_{\text{material}}$.
- **Versioned Occurrences:** Versioned occurrence nodes $v_{T_0}, v_{T_1}, \dots, v_{T_n}, v_{R_n}$.

## 6. Temporal & Provenance Decomposition
- **Actual Ancestry ($G_{\le t}$):**
  $$v_{T_0} \prec v_{T_1} \prec v_{T_2} \prec \dots \prec v_{T_n}$$
  Discards $\{m_k\}$ branch off at each replacement step $t_k$ to feed $v_{R_n}$.
- **Semantic Overlay ($E_{\text{semantic}}$):**
  - $e_1 = \text{Assertion}(Identity_{\text{causal}}(T_0, T_n))$
  - $e_2 = \text{Assertion}(Identity_{\text{material}}(T_0, R_n))$
- **Prospective Transitions ($\Gamma_t$):** Both $T_n$ and $R_n$ possess independent future traversal paths.

## 7. Provenance Fidelity Audit
- **Subtractive Integrity (No Erasure):** Neither the historical maintenance trace $T_0 \to T_n$ nor the discarded plank assembly trace $T_0 \to \{m_k\} \to R_n$ is erased.
- **Additive Integrity (No Warrant Inflation):** Neither ship may claim exclusive context-free identity without specifying which continuity relation justifies the warrant.

## 8. Constitutional Traversal & Operator Application
- **CC-4 (Connection & Relational Stabilization):** Relata and relations mutually stabilize ($Object \rightleftharpoons Relation$).
- **CC-5 (Traversal & Affordance Frontier):** History defines reachability across versioned occurrence nodes.
- **CC-6 (Effective History):** Past occurrences survive as inherited causal constraints shaping present trace.

## 9. Formal Derivation & Analysis
Palimpsestus models $T_0$ not as a static noun, but as an occurrence node $v_{T_0}$ in the historical DAG $G_{\le t}$.
1. **Historical Ancestry ($G_{\le t}$):** The active ship $T_n$ possesses a continuous, unbroken causal-historical lineage $v_{T_0} \prec \dots \prec v_{T_n}$. The reassembled ship $R_n$ possesses a continuous material-composition lineage $v_{T_0} \xrightarrow{M_0} v_{R_n}$.
2. **Semantic Overlay ($E_{\text{semantic}}$):** Combining $G_{\le t}$ with explicit semantic relation typing reveals that $T_n$ and $R_n$ satisfy distinct, non-conflicting identity relations.

The apparent paradox arises exclusively from **Hidden Premise A** (demanding one context-free identity predicate). Under $C_1$, identity is reframed as relationally stabilized historical provenance:

$$\boxed{ Identity_{\text{causal-continuity}}(T_0, T_n) \quad \text{and} \quad Identity_{\text{material-continuity}}(T_0, R_n) }$$

Both identity relations are warranted, distinct, and co-exist without mutual erasure or contradiction.

## 10. Adversarial Counter-Analysis
*Counter-Argument:* Claiming that "both identity relations coexist" is a cop-out that refuses to answer which ship Theseus should board to sail to Crete.  
*Rebuttal:* If Theseus needs a ship to sail to Crete, the selection criterion is functional-operational readiness ($T_n$), not historical material origin ($R_n$). Palimpsestus demonstrates that forcing a single answer without specifying the operational relation is a category error.

## 11. Residual Tension & Open Frontiers
None. The tension between causal continuity and material composition is fully localized into explicit relational frames.

## 12. Outcome Classification & Justification
- **Primary Outcome:** `REFRAMED`
- **Outcomes:** `[REFRAMED]`
- **Justification:** The paradox is resolved by removing the illicit assumption of a single context-free identity predicate and reframing identity as dual warranted continuity relations.

## 13. Resolution Dependency Audit
- **Required Specification Entities:** `[CC-4, CC-5, CC-6, CC-11]`
- **Novel Machinery Introduced:** `None`

## 14. Competing & Alternate Analyses
- **Analysis A:** Classical identity reductionism (Fails under No-Warrant-Inflation).

## 15. Formulation Provenance & Sources
- **Historical Source:** Plutarch, *Life of Theseus*, 75 CE; Thomas Hobbes, *De Corpore*, 1655.

## 16. Revision History
- **`v1.0`** (2026-08-22): Initial worked reference under $C_1$.
- **`v1.1`** (2026-08-22): Self-correction pass: aligned epistemic tiers and clarified explicit derivation step connecting semantic relation typing to $G_{\le t}$.
