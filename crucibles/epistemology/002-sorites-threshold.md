---
crucible_id: "CR-002"
title: "Sorites / The Heap"
domain: "epistemology"
difficulty: "introductory"

status: "STABLE"
primary_outcome: "UNDERDETERMINED"
outcomes:
  - "UNDERDETERMINED"
  - "REFRAMED"

constitution: "C_1"
spec_version: "v1.0.4"
spec_commit: "0a79efc"

constitutional_dependencies:
  - "CC-1"
  - "CC-3"
  - "CC-10"

submitted_date: "2026-08-22"
last_updated: "2026-08-22"
authors:
  - "Palimpsestus Architecture Group <architecture@palimpsestus.org>"
---

# CR-002 — Sorites / The Heap

## 1. Problem Statement
A single grain of sand is not a heap ($H(1) = 0$). Adding a single grain of sand to a non-heap cannot turn it into a heap ($\forall n, H(n) \to H(n+1)$). By mathematical induction, 1,000,000 grains of sand is not a heap ($H(10^6) = 0$), contradicting human observation.

## 2. Minimal Premises
- **P1:** $H(1) = \text{False}$ (1 grain is not a heap).
- **P2:** $H(n) \implies H(n+1)$ (Tolerance premise: 1 grain difference is epistemically indistinguishable).
- **P3:** $H(10^6) = \text{True}$ (1,000,000 grains is a heap).

## 3. Epistemic Classification
- **P1:** Minimal Observation.
- **P2:** Constitutive Assumption (Epistemic tolerance boundary).
- **P3:** Minimal Observation.

## 4. Hidden-Premise Audit
- **Hidden Premise A:** The semantic quotient predicate $Heap(x)$ possesses a sharp micro-scale boundary independent of scale or observer quotient.
- **Hidden Premise B:** Induction holds uniformly across scale transformations without quotient coarsening.

## 5. Relational & Domain Decomposition
- **Actors / Relata:** Grains $g_1 \dots g_N$, Heap predicate $H$.
- **Relations:** Aggregation, Scale quotient projection $F_s$.
- **Frames & Quotients:** Micro-scale frame $F_{\text{micro}}$ (individual grains), Macro-scale frame $F_{\text{macro}}$ (structural pile).

## 6. Temporal & Provenance Decomposition
- **Actual Ancestry ($G_{\le t}$):** Sequential accumulation of grains $N_1 \to N_2 \to \dots \to N_{10^6}$.

## 7. Provenance Fidelity Audit
- **Subtractive Integrity:** Grain count $N$ is exact and immutable in $G_{\le t}$.
- **Additive Integrity (No Warrant Inflation):** Claiming exact grain boundary $N^*$ for $Heap(N)$ without specifying scale quotient inflates warrant.

## 8. Constitutional Traversal & Operator Application
- **CC-1 (Scale Recurrence):** Scale-preserving functorial projections $F_s(f \circ g) = F_s(f) \circ F_s(g)$.
- **CC-10 (Ignorance & Open Frontier):** Strategic boundary ambiguity ($\text{Procedural Saturation} \neq \text{Ontological Closure}$).

## 9. Formal Derivation & Analysis
Under $C_1$, $Heap(x)$ is a macro-scale quotient predicate $F_s(x)$, not a micro-scale property of single grains.
- At $N=1$, $F_s(1) = \text{Non-Heap}$.
- At $N=10^6$, $F_s(10^6) = \text{Heap}$.
- For intermediate values $100 < N < 1000$, the first-principles constitution $C_1$ lacks a unique privileged threshold $N^*$. Multiple scale quotients remain equally warranted.

Thus, the exact transition boundary is **`UNDERDETERMINED`** from first principles, requiring empirical substrate feedback or explicit observer convention to fix $N^*$.

## 10. Adversarial Counter-Analysis
*Counter-Argument:* Calling the boundary `UNDERDETERMINED` avoids solving fuzzy logic.  
*Rebuttal:* Demanding that pure logic specify an arbitrary micro-boundary for a macro-scale concept is warrant inflation. $C_1$ correctly identifies where logic ends and convention/empirical measurement begins.

## 11. Residual Tension & Open Frontiers
The exact epistemic boundary between micro-grains and macro-heaps remains an open empirical frontier.

## 12. Outcome Classification & Justification
- **Primary Outcome:** `UNDERDETERMINED`
- **Outcomes:** `[UNDERDETERMINED, REFRAMED]`
- **Justification:** Given $C_1$ and initial premises, multiple sharp boundary thresholds are equally warranted; first principles cannot select one without warrant inflation.

## 13. Resolution Dependency Audit
- **Required Specification Entities:** `[CC-1, CC-3, CC-10]`
- **Novel Machinery Introduced:** `None`

## 14. Competing & Alternate Analyses
- **Analysis A:** Fuzzy truth values $[0, 1]$ (Requires novel machinery $\to$ `CONSTITUTIONAL_PRESSURE`).

## 15. Formulation Provenance & Sources
- **Historical Source:** Eubulides of Miletus, 4th Century BCE.

## 16. Revision History
- **`v1.0`** (2026-08-22): Worked reference analysis completed under $C_1$.
