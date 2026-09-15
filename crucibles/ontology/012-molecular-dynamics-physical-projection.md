---
crucible_id: "CR-012"
title: "Molecular Dynamics & Protein Folding Physical Projection"
domain: "ontology"
difficulty: "frontier"

status: "FORMALIZED"
primary_outcome: "PENDING"
outcomes:
  - "PENDING"
  - "REFRAMED"
  - "EMPIRICAL"

constitution: "C_1"
spec_version: "1.1.3"
governing_spec_commit: "b9f7f55fe9064dedc0fe85f2c396b048d6169db4"

constitutional_dependencies:
  - "CC-1"
  - "CC-2"
  - "CC-4"
  - "CC-5"
  - "CC-6"
  - "CC-10"
  - "CC-11"

submitted_date: "2026-09-15"
last_updated: "2026-09-15"
authors:
  - "Stephen Weber <1791 Technologies LLC>"
---

# CR-012 — Molecular Dynamics & Protein Folding Physical Projection

## 1. Problem Statement
Can the unmodified Palimpsestus v1.1.3 formal grammar be projected into molecular dynamics such that its constitutional relations, including scale recurrence and the Fold/Cross generative recurrence where applicable, remain warranted across molecular scales?

In classical and statistical molecular mechanics, a macromolecular system (e.g., a folding polypeptide in aqueous solution) is governed by continuous phase-space coordinates, stochastic thermal fluctuations, Hamiltonian potential energy surfaces, and pairwise symmetric interatomic forces.

Palimpsestus v1.1.3 defines an axiomatic formal grammar characterized by:
1. A 16-cell structural derivation matrix ($M_{4 \times 4}^{(C_n)}$) partitioned into Conceptual, Logical, Physical, and Implementation closures;
2. Generative recurrence alternating Basis Compression ($\Phi_r(L_{r-1}) \to X_{r,C}$) and Novel Differentiation ($\operatorname{Cross}(Left, Above) = Left \triangleleft_{Above}$);
3. A tri-temporal topology ($M_{4 \times 4}^{(C_n)} \rightleftharpoons G_{\le t} \longrightarrow \Gamma_t(v) \longrightarrow \mathcal{A}_t(v)$) driven by an acyclic occurrence history DAG; and
4. Scale recurrence governed by functorial projection ($F_s(f \circ g) = F_s(f) \circ F_s(g)$).

The hard problem is whether molecular dynamics admits a valid physical projection of these constitutional relations, whether physical trajectories serve as empirical traces under external substrate constraints, or whether candidate physical identifications collapse distinct structural categories.

---

## 2. Minimal Premises
- **P1 (Continuous Phase-Space Substrate & Microscopic Dynamics):** In classical molecular mechanics, a macromolecular system evolves through continuous high-dimensional phase space ($\mathbb{R}^{6N}$) governed by microscopic equations of motion (e.g., Langevin or Newtonian dynamics) under empirical substrate constraints.
- **P2 (Constitutive Generative Recurrence — $\Phi_r \rightleftharpoons \operatorname{Cross}$):** The Palimpsestus v1.1.3 grammar generates structural possibility through:
  (a) Layer Fold $\Phi_r(L_{r-1}) \to X_{r,C}$ taking a completed 4-cell layer ($L_{r-1} = \{X_{r-1,C}, X_{r-1,L}, X_{r-1,P}, X_{r-1,I}\}$) to a minimal conceptual basis obeying 4 Fold tests; and
  (b) Cell Cross $\operatorname{Cross}(Left, Above) = Left \triangleleft_{Above}$ which has defining directional structure (directional non-commutativity $\operatorname{Cross}(Left, Above) \neq \operatorname{Cross}(Above, Left)$ with distinct parent roles: Left supplies horizontal derived content, Above supplies vertical applied domain context) and must satisfy the three literal Cross irreducibility tests from `dag-crossing-method.md` §4.A:
    1. *Test 1 — Not produced by Left Parent alone;*
    2. *Test 2 — Not produced by Above Parent alone;* and
    3. *Test 3 — Non-Redundancy.*
- **P3 (Tri-Temporal Admissibility & Substrate Separation):** In Palimpsestus v1.1.3, prospective transitions $\Gamma_t(v)$ are generated from the structural admissibility matrix $M_{4 \times 4}^{(C_n)}$, actual occurrence history $G_{\le t}$, and external *substrate constraints*. $M_{4 \times 4}$ is an authored 16-cell structural derivation lattice ($CC \dots II$), strictly distinct from empirical substrate constraints.
- **P4 (Functorial Scale Recurrence — CC-1):** Scale projections across levels must be scale-preserving functorial mappings satisfying $F_s(f \circ g) = F_s(f) \circ F_s(g)$.

---

## 3. Epistemic Classification
Classify each minimal premise under the Dual Epistemic Taxonomy (`crucibles/README.md` §3, `crucibles/TEMPLATE.md` §3):
- **External Premise Categories:** Phenomenological Observation | Formal/Mathematical Premise | Historical Normative Claim | Thought-Experiment Axiom
- **Internal Palimpsestus Epistemic Tiers ($C_1$):** Tier 1 Phenomenological Constraint | Tier 2 Constitutive Axiom | Tier 3 Derived Consequence | Tier 4 Empirical Hypothesis | Tier 5 Operational Heuristic

### Global Premise Classifications
- **P1 (Continuous Phase-Space Substrate & Microscopic Dynamics):**
  - *External Premise Category:* Formal/Mathematical Premise.
  - *Internal Palimpsestus Tier:* Tier 1 Phenomenological Constraint / Substrate Behavior.
- **P2 (Constitutive Generative Recurrence — $\Phi_r \rightleftharpoons \operatorname{Cross}$):**
  - *External Premise Category:* Formal/Mathematical Premise.
  - *Internal Palimpsestus Tier:* **Tier 2 Constitutive Axiom** ($CC\text{-}2$).
- **P3 (Tri-Temporal Admissibility & Substrate Separation):**
  - *External Premise Category:* Formal/Mathematical Premise.
  - *Internal Palimpsestus Tier:* **Tier 2 Constitutive Axiom** ($CC\text{-}5$, $CC\text{-}6$, §4).
- **P4 (Functorial Scale Recurrence — CC-1):**
  - *External Premise Category:* Formal/Mathematical Premise.
  - *Internal Palimpsestus Tier:* **Tier 2 Constitutive Axiom** ($CC\text{-}1$).

### Candidate-Specific External Premise
- **P-Pair (Symmetric Pair Potentials in Pairwise-Additive Classical MD):** In pairwise-additive molecular mechanics models, interatomic forces derive from potential energy functions that are strictly symmetric under coordinate exchange: $V(r_{ij}) = V(r_{ji})$ and $\mathbf{F}_{ij} = -\mathbf{F}_{ji}$.
  - *External Premise Category:* Formal/Mathematical Premise.
  - *Internal Palimpsestus Tier:* Tier 1 Phenomenological Constraint / Physical Substrate Law.
  - *Scoping:* Preserved specifically as an external premise for evaluating the pairwise-additive pair-potential $\to$ Cross candidate mapping (§4 Hidden Premise B, §9 Step 3); not asserted as a global minimal premise of general molecular dynamics.

---

## 4. Hidden-Premise Audit
Identify unstated auxiliary assumptions, ill-defined categories, or implicit context shifts. Note: The rejections below identify failed candidate identifications; they do not prove in advance that no valid molecular projection can exist.
- **Hidden Premise A (Equivocation of Substrate Constraint with Constitutional Admissibility):** The assumption that mathematical structures constraining physical motion (e.g., the force-field Hamiltonian) establish identity with the 16-cell structural admissibility matrix $M_{4 \times 4}$. Rejecting this hidden premise restores the explicit constitutional distinction in CC-5: physical force fields are external *substrate constraints*, whereas $M_{4 \times 4}$ is an authored derivation lattice ($CC \dots II$). **A Hamiltonian does not establish $M_{4 \times 4}$.**
- **Hidden Premise B (Equivocation of Symmetric Interaction with Directional Crossing):** The assumption that pairwise physical interactions between molecular components in pairwise-additive models (P-Pair) establish Cell Cross. Rejecting this hidden premise exposes that physical potential energies in such models are strictly symmetric under coordinate exchange ($V_{ij} = V_{ji}$ and $\mathbf{F}_{ij} = -\mathbf{F}_{ji}$), whereas $\operatorname{Cross}(Left, Above) = Left \triangleleft_{Above}$ requires intrinsic non-commutative directional derivation (`derives from` vs `applies to`). **A symmetric pair potential does not establish Cross.**
- **Hidden Premise C (Equivocation of Ergodic Cycles with Acyclic Ancestral Compression):** The assumption that clustering recurring conformational states into Markov macrostates in an equilibrium sampling frame establishes Ancestral Compression ($q : G \to G'$). Rejecting this hidden premise reveals that equilibrium state clustering produces cyclic transition networks, whereas $q$ strictly conserves causal partial orders on acyclic DAGs. **PCCA/MSM state clustering does not establish ancestral compression.**
- **Hidden Premise D (Equivocation of Dimensionality Reduction with Layer Fold):** The assumption that statistical dimensionality reduction (PCA/TICA) establishes Layer Fold $\Phi_r$. Rejecting this hidden premise clarifies that continuous coordinate variance projection does not take a 4-cell antecedent layer ($L_{r-1}$), does not satisfy the 4 Fold tests, and emits no input coverage receipts. **TICA does not establish Fold.**
- **Hidden Premise E (Ontological Collapse of Epistemic Primitives):** The assumption that thermodynamic free-energy barriers establish physical instances of `AbsenceRecord`. Rejecting this hidden premise restores that an `AbsenceRecord` is an attested epistemic provenance receipt certifying an explored gap, not an ontological Boltzmann thermodynamic state function. **A thermodynamic barrier does not establish AbsenceRecord.**

*Audit Result:* These represent failed candidate identifications under the examined mappings, not an axiomatic proof of the impossibility of all physical projections.

---

## 5. Relational & Domain Decomposition
- **Actors / Relata:** Molecular systems (solute polypeptide, aqueous solvent, counter-ions), instantaneous configuration microstates $(x(t), v(t))$, metastable conformational basins.
- **Relations:** Causal transition trajectories, interatomic forces, steric exclusion envelopes, scale-coarsening projections.
- **Frames & Quotients:** 
  - *Cartesian vs. Discrete Macrostate Quotients:* Continuous microscopic atomic Cartesian frame ($\mathbb{R}^{6N}$) vs. discrete coarse-grained macrostate partition.
  - *Equilibrium Sampling Frame:* Thermodynamic equilibrium conditions where conformations repeatedly explore metastable basins ($A \rightleftharpoons B$), generating cyclic, ergodic transition networks (evaluated under MSM/PCCA candidate compression).
  - *Non-Equilibrium / Vectorial Synthesis Frame:* Directional kinetic regimes, such as co-translational polypeptide emergence on the ribosome, where asymmetric temporal and spatial boundary conditions apply (evaluated under directional Cross candidates).
- **Scales:** 
  - $S_0$: Microscopic / atomic torsional degrees of freedom $(\phi, \psi, \chi)$.
  - $S_1$: Mesoscopic / conformational basin clusters and transition pathways.
- **Versioned Occurrences ($v_t$):** Time-stamped configuration realizations $(x(t), t)$ in physical spacetime.

---

## 6. Temporal & Provenance Decomposition
- **Actual Ancestry ($G_{\le t}$):** The recorded time-indexed trajectory trace preserving distinct historical occurrences for Crucible analysis:
  $$\mathcal{T} = \{(x(t_0), t_0) \to (x(t_1), t_1) \to \dots \to (x(t_k), t_k)\} \quad \text{with } t_0 < t_1 < \dots < t_k$$
  *(Note: This bounds the claim strictly to the observational record preserving historical occurrences for analysis; it does not assert that the physical molecule itself maintains an epistemic provenance ledger).*
- **Semantic Overlay ($E_{\text{semantic}}$):** *Candidate domain semantic assertions:* Secondary structure assignments (e.g., DSSP) and conformational order parameters (e.g., native contact fraction $Q$) represent candidate domain semantic assertions. They are not equated directly with constitutional $E_{\text{semantic}}$ unless structured as provenance-bearing assertion-occurrence relations with explicitly warranted authority and attribution under pinned v1.1.3.
- **Prospective Transitions ($\Gamma_t(v)$):** *Candidate domain projection hypothesis:* Langevin-accessible physical transitions from microstate $v$ under thermal kinetic energy and substrate potential surfaces (hypothesized candidate mapping to $\Gamma_t(v)$, not an established constitutional realization).
- **Justified Affordance Frontier ($\mathcal{A}_t(v)$):** *Candidate domain projection hypothesis:* The subset of prospective transitions dynamically reachable within a specified kinetic horizon $\tau$ ($\mathcal{A}_t(v) \subseteq \text{Paths}(\Gamma_t(v))$) (hypothesized candidate mapping to $\mathcal{A}_t(v)$, not an established constitutional realization).

---

## 7. Provenance Fidelity Audit
- **Subtractive Integrity (No Ancestral Erasure):** The recorded observational trajectory trace cannot retroactively erase visited states; temporal occurrence index $t$ ensures each recorded event $(x(t), t)$ has permanent historical standing in $G_{\le t}$ for Crucible analysis.
- **Additive Integrity (No Warrant Inflation):** Asserting that physical molecules calculate an $M_{4 \times 4}$ matrix, execute Layer Folds, or perform Cell Crossings inflates warrant beyond what physical evidence justifies. Warrant must remain strictly bounded: $\text{Warrant}_{\text{asserted}} \subseteq \text{Warrant}_{\text{justified}}$.

---

## 8. Constitutional Traversal & Operator Application
- **Applicable Axioms & Operators:**
  - **CC-1 (Scale Recurrence):** Functorial condition $F_s(f \circ g) = F_s(f) \circ F_s(g)$.
  - **CC-2 (Generative Recurrence):** Alternating Basis Compression ($\Phi$) and Novel Differentiation ($\operatorname{Cross}$).
  - **CC-4 (Connection):** $Object \rightleftharpoons Relation$; breaking a physical contact does not erase historical occurrence.
  - **CC-5 (Traversal & Affordance Frontier):** $\Gamma_t(v)$ generated from $M_{4 \times 4}^{(C_n)}$, $G_{\le t}$, and `substrate constraints`.
  - **CC-6 (Effective History):** The past survives as present trace; only present actuality acts.
  - **CC-10 (Ignorance & Open Frontier):** Refusal of premature totalization ($\text{Procedural Saturation} \neq \text{Ontological Closure}$).
  - **CC-11 (Archaeology & Novelty):** Reality constrains what can stabilize ($\mathbf{CC} = \Phi_C(W)$).

---

## 9. Formal Derivation & Analysis
Applying only resources present in pinned $C_1$ under the **No-Ad-Hoc-Rescue Rule**:

### Step 1: Disentangling Substrate Constraints from Structural Admissibility
`CONSTITUTIONAL_SPEC.md` §2.5 explicitly defines prospective transitions $\Gamma_t(v)$ as generated from three distinct components:
$$\Gamma_t(v) \text{ is generated from } M_{4 \times 4}^{(C_n)}, \; G_{\le t}, \; \text{and substrate constraints}$$
In molecular physics, the force-field Hamiltonian, solvent dielectric, and Newton/Langevin equations are **substrate constraints**. They provide physical boundary conditions to prospective transitions. They do *not* constitute $M_{4 \times 4}$. 

The 16-cell derivation matrix $M_{4 \times 4}$ is an authored constitutional grammar comprising Conceptual, Logical, Physical, and Implementation closures. An unaugmented physical protein does not possess or execute an $M_{4 \times 4}$ lattice. Equating the Hamiltonian with $M_{4 \times 4}$ is an illicit category collapse: **a Hamiltonian does not establish $M_{4 \times 4}$**.

### Step 2: Grounding Actual Ancestry ($G_{\le t}$) in Physical Trajectories
A recorded physical trajectory trace $\mathcal{T} = \{(x(t_0), t_0) \to (x(t_1), t_1) \to \dots \}$ preserves an acyclic sequence of distinct historical occurrences indexed by time. Even if spatial configurations recur ($x(t_j) \approx x(t_i)$ for $j > i$), the recorded occurrence $(x(t_j), t_j)$ remains historically distinct from $(x(t_i), t_i)$. 

Under this decomposition, the recorded time-indexed trajectory trace provides a candidate/preserved ancestry representation of **Actual Ancestry ($G_{\le t}$)** for Crucible analysis, satisfying Subtractive Integrity (No Ancestral Erasure) in the experimental record. This claim is strictly bounded to the recorded observational trace preserving distinct historical occurrences; it does not assert that the physical molecule itself maintains an epistemic provenance ledger. Other constitutional projections remain unresolved.

### Step 3: Audit of Candidate Generative Operator Identifications ($\Phi_r \rightleftharpoons \operatorname{Cross}$)
1. **Layer Fold ($\Phi_r$):** The frozen specification strictly defines Layer Fold as taking a completed 4-cell horizontal layer $L_{r-1} = \{X_{r-1,C}, X_{r-1,L}, X_{r-1,P}, X_{r-1,I}\}$ and compressing it into the foundation cell of the next layer, satisfying 4 Fold tests. Physical dimensionality reduction (PCA, TICA) integrates continuous phase-space coordinates; it does not operate on a 4-cell derivation field, issues no Fold receipts, and satisfies no input coverage maps. **TICA does not establish Fold.**
2. **Cell Cross ($\operatorname{Cross}$):** The frozen specification strictly defines Cell Cross as directional, non-commutative derivation: $\operatorname{Cross}(Left, Above) = Left \triangleleft_{Above}$, where Left supplies derived content and Above supplies applied context. In pairwise-additive molecular mechanics models (P-Pair), interatomic interactions derive from potential energy functions that are strictly symmetric under coordinate exchange ($V(r_{ij}) = V(r_{ji})$ and $\mathbf{F}_{ij} = -\mathbf{F}_{ji}$). Physical energetic coupling is mutual and symmetric; assigning one residue as "Left" and another as "Above" is an arbitrary extrinsic semantic projection with zero physical standing. **A symmetric pair potential does not establish Cross.**

These failures demonstrate that the examined candidate identifications do not hold; they do not establish that no physical fold or crossing representation could ever be constructed.

### Step 4: Audit of Candidate Ancestral Compression Identifications ($q : G \to G'$)
Ancestral Compression requires mapping historical vertices $v \in V(G)$ to equivalence classes $[v] \in V(G')$ while **preserving protected causal partial orders** ($a \prec b \implies [a] \prec [b]$). 

In molecular dynamics, grouping microstates into geometric conformational basins produces cyclic, ergodic Markov state networks ($A \rightleftharpoons B$). A physical molecule in thermal equilibrium samples conformational basins cyclically, erasing causal partial order. Therefore, **PCCA/MSM state clustering does not establish ancestral compression**.

### Step 5: Empirical Standing of Scale Recurrence (CC-1)
Frozen CC-1 establishes functoriality $F_s(f \circ g) = F_s(f) \circ F_s(g)$ as the strict constitutional admissibility criterion for scale projection. Pinned CC-1 does not equate functoriality with Markovian lumpability. 

The constitutional criterion remains the literal identity $F_s(f \circ g) = F_s(f) \circ F_s(g)$. Any empirical tolerance parameter $\epsilon$, statistical confidence interval, or finite-data estimator used during trajectory analysis must be explicitly classified as an operational measurement or engineering convention (Tier 5), not a relaxation or modification of the constitutional criterion itself. Whether coarse-grained projections of molecular trajectories warrant scale-preserving functoriality across kinetic horizons is an empirical question governed by physical dynamics, not derivable a priori from constitutional axioms. This empirical standing provides a warranted continuation through empirical molecular-dynamics investigation.

---

## 10. Adversarial Counter-Analysis

### Counter-Argument 1: Co-Translational Folding as Directional Cross Candidate
*Argument:* During vectorial ribosome translation from the N-terminus to the C-terminus, nascent chain emergence breaks spatial symmetry. The emerging polypeptide sequence could be cast as horizontal derived content ($Left$) and the ribosome exit tunnel / chaperone environment as vertical applied context ($Above$), introducing genuine physical asymmetry into the folding process.

*Evaluation:* In the non-equilibrium synthesis frame, co-translational folding provides a legitimate candidate physical projection for directional asymmetry. Rather than being dismissed a priori on grounds of microscopic force symmetry or lack of internal $M_{4 \times 4}$ serialization, this projection hypothesis must be evaluated directly against the frozen constitutional criteria for Cell Cross from `dag-crossing-method.md` §4.A:
1. It must survive the three literal Cross irreducibility tests:
   - **Test 1 — Not produced by Left Parent alone:** The folding constraint does not hold from the nascent sequence alone without the ribosome exit tunnel boundary;
   - **Test 2 — Not produced by Above Parent alone:** The folding constraint does not hold from the exit tunnel alone without the nascent chain sequence;
   - **Test 3 — Non-Redundancy:** The resulting constraint is not already captured or redundant. (The empirical projection must establish a warranted mapped derivational context in which non-redundancy can be evaluated; if no such context has standing, this candidate projection fails, as no context may be invented); and
2. It must satisfy the defining structural conditions of Cross: directional non-commutativity ($\operatorname{Cross}(Left, Above) \neq \operatorname{Cross}(Above, Left)$) and asymmetric parent roles ($Left \triangleleft_{Above}$, where Left supplies derived content and Above provides applied domain context).

Because determining whether ribosome-exit steric and electrostatic boundary conditions formally satisfy these constitutional tests without degeneration depends on structural and kinetic data from translating systems, this candidate projection is not ruled out analytically. Its standing remains **`PENDING / EMPIRICAL`**.

### Counter-Argument 2: Statistical Dimensionality Reduction as Approximate Fold
*Argument:* In machine learning and computational biophysics, dimensionality reduction is routinely referred to as "compression." Can TICA not be accepted as an "effective physical realization" of Layer Fold?

*Rebuttal:* `CONSTITUTIONAL_SPEC.md` §3.1 and `dag-crossing-method.md` §4.B explicitly define Layer Fold by its 4-cell antecedent field ($L_{r-1}$) and four formal verification tests (Sufficiency, Necessity, Minimality, Input Coverage). Diluting "Layer Fold" to mean any arbitrary statistical variance reduction constitutes Warrant Inflation. A statistical projection is an empirical technique, not a Layer Fold.

---

## 11. Residual Tension & Open Frontiers
1. **The Substrate-Grammar Boundary:** Physical force fields and Langevin equations are external substrate constraints (CC-5). While unaugmented physical molecules do not internalistically execute an authored $M_{4 \times 4}$ matrix or emit provenance receipts, the question of how formal constitutional structures can validly project onto physical observables remains an active inquiry.
2. **Empirical Functoriality & Admissible Projections:** Whether coarse-grained representations of molecular trajectories admit mappings that satisfy the literal constitutional criterion $F_s(f \circ g) = F_s(f) \circ F_s(g)$ (under specified empirical measurement estimators and tolerances classified as Tier 5 engineering conventions) or warrant bounded affordance frontiers ($\mathcal{A}_t(v)$) is an empirical question with a warranted continuation through empirical molecular-dynamics testing.

---

## 12. Outcome Classification & Justification
- **Primary Outcome:** **`PENDING`** (Open Empirical Seed)
- **Outcomes:** `[PENDING, REFRAMED, EMPIRICAL]`

### Justification:
- **`PENDING`:** CR-012 is registered as a formalized open seed challenge. Its candidate projections, minimal premises, hidden-premise audit, and empirical questions are established, and the challenge is pending empirical testing and community analysis.
- **`REFRAMED`:** The problem is reframed strictly with respect to the illicit requirement that physical molecules must literally or internalistically instantiate Palimpsestus generative machinery ($M_{4 \times 4}$, $\Phi$, $\operatorname{Cross}$). Under CC-5, force fields and equations of motion are properly recognized as external **substrate constraints**. This reframing removes an illicit category collapse without dissolving the underlying physical-projection question, which remains active.
- **`EMPIRICAL`:** The question of whether molecular dynamics admits valid projections of scale recurrence ($F_s$), affordance reachability ($\mathcal{A}_t(v)$), or coarse-grained ancestral representations depends on molecular-dynamics evidence and empirical testing not derivable from first principles alone. Under `crucibles/README.md`, this empirical standing provides a warranted continuation through empirical investigation.

---

## 13. Resolution Dependency Audit
- **Required Specification Entities:** `[CC-1, CC-2, CC-4, CC-5, CC-6, CC-10, CC-11]`
- **Novel Machinery Introduced:** `None`. Strictly obeys the **No-Ad-Hoc-Rescue Rule**:
  $$\text{Resolution}(CR\text{-}012, C_1) \subseteq \text{Resources publicly available in } C_1$$

---

## 14. Competing & Alternate Analyses
- **Analysis A (Naive Physical Instantiation):** Proposes that the molecule directly executes the grammar (Hamiltonian = $M_{4 \times 4}$, TICA = $\Phi$, potentials = $\operatorname{Cross}$, PCCA/MSM = $q$, barrier = AbsenceRecord). Evaluated as failed candidate identifications: collapses substrate into grammar, symmetric physics into asymmetric derivation, and cyclic equilibrium fluctuations into acyclic partial orders.
- **Analysis B (Empirical Physical Projection):** Treats recorded time-indexed trajectory occurrences as a candidate ancestry representation ($G_{\le t}$), models force fields as substrate constraints under CC-5, and evaluates scale-preserving functoriality against the literal criterion $F_s(f \circ g) = F_s(f) \circ F_s(g)$ and affordance frontiers ($\mathcal{A}_t$) empirically against molecular simulation trajectories.

---

## 15. Formulation Provenance & Sources
- **Constitutional Source:** Palimpsestus Open Architecture Specification v1.1.3 (commit `b9f7f55fe9064dedc0fe85f2c396b048d6169db4`).
- **Domain Literature:**
  - Zwanzig, R. (1960). *Ensemble Method in the Theory of Irreversibility*. J. Chem. Phys. 33:1338.
  - Kemeny, J. G., & Snell, J. L. (1960). *Finite Markov Chains*. van Nostrand.
  - Lindorff-Larsen, K., Piana, S., Dror, R. O., & Shaw, D. E. (2011). *How Does a Protein Fold?* Science 334(6055):517–520.

---

## 16. Revision History
- **`v1.0`** (2026-09-15): Initial formalized Crucible artifact deconstructing the molecular dynamics physical-projection problem under pinned $C_1$ specification.
- **`v1.1`** (2026-09-15): Outcome boundary revision: withdrew `OPEN_FRONTIER` as primary outcome; classified as `PENDING` open empirical seed with `[PENDING, REFRAMED, EMPIRICAL]` outcome tags; bounded failed mappings precisely as failed candidate identifications (Hamiltonian $\ne M_{4 \times 4}$, symmetric potentials $\ne$ Cross, TICA $\ne$ Fold, PCCA/MSM $\ne q$, barrier $\ne$ AbsenceRecord); replaced "only" supported structure with candidate/preserved ancestry representation for time-indexed occurrences; preserved REFRAMED strictly for external substrate separation without dissolving the physical-projection inquiry.
- **`v1.2`** (2026-09-15): Local standing revision: classified Langevin-accessible transitions to $\Gamma_t(v)$ and kinetic-horizon reachability to $\mathcal{A}_t(v)$ explicitly as candidate domain projection hypotheses; evaluated co-translational folding asymmetry as a legitimate candidate Cross projection subject to frozen tests with PENDING / EMPIRICAL standing; bounded $G_{\le t}$ claim strictly to recorded observational trajectory traces without asserting internal molecular ledgers.
- **`v1.3`** (2026-09-15): Local ancestry repair: restored literal names of the three Cross irreducibility tests from `dag-crossing-method.md` §4.A (Not produced by Left Parent alone, Not produced by Above Parent alone, Non-Redundancy) while treating non-commutativity and parent roles as defining structure; re-audited P1/P2 to remove equilibrium recurrence as a general MD minimal premise and explicitly distinguished equilibrium sampling vs. non-equilibrium synthesis frames in §5; classified DSSP/native contact annotations as candidate domain semantic assertions rather than direct $E_{\text{semantic}}$; reaffirmed the literal CC-1 target $F_s(f \circ g) = F_s(f) \circ F_s(g)$, classifying finite-data tolerances and estimators strictly as Tier 5 measurement conventions.
- **`v1.4`** (2026-09-15): Scoping & ancestry refinement: bounded §7 subtractive integrity wording strictly to the recorded observational trajectory trace; scoped coordinate-exchange symmetric pair potentials as candidate-specific external premise P-Pair under §3 for the pairwise-additive potential $\to$ Cross candidate analysis, removing it from global Minimal Premises.
