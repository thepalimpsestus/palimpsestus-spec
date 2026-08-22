# Changelog: Palimpsestus Specification (`palimpsestus-spec`)

All notable changes to the Palimpsestus Open Architecture Specification will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2] - 2026-08-22

### Added
- **Mandatory Explicit Epistemic Tiers:** Added explicit `**Epistemic Tier:** Tier X` metadata tags to all **3,269** authored entries in the specification, eliminating silent cell defaults.
- **Defect Ledger Expansion (`D13`–`D15`):** Expanded `DEFECT_LEDGER.md` to track zero-theater verifier code enforcement hardening.

### Fixed
- **PP-42 Heading Repair:** Repaired missing title heading for entry `PP-42` (*Gate Identity Evaluation Must Assess Structural Mass*).

---

## [1.1.1] - 2026-08-22

### Added
- **Master Defect Ledger (`DEFECT_LEDGER.md`):** Established 12-defect register (`D01`..`D12`) tracking exact root causes, affected artifacts, repair mechanisms, and verification steps.
- **Palimpsestus Rosetta Stone (`ROSETTA_STONE.md`):** Added canonical translation mapping Palimpsestus vocabulary to formal model definitions, systems analogues, and concrete implementation examples.

### Changed
- **Mandatory Receipt Witnesses in JSON Schemas:** Updated `cross-receipt` and `fold-receipt` schemas to require `parent_witnesses` with `expected_title`, `canonical_text_digest`, and `canonicalization_version` (`palimpsestus-normative-v1`).
- **Warrant Grounding Repairs (`D01`):** Re-parented $IP_{49}$ to $PP_{125}$ / $PP_{199}$, eliminating citation drift.
- **Downstream $C_0$ Consciousness Residue Cleanup (`D07`):** Re-grounded $IP_6$, $IP_3$, and $PP_{197}$ into $C_1$ topological affordance reachability and operational focus window identity.
- **Root $CC$ Epistemic Tier Alignment (`D08`):** Re-aligned $CC_3$ and $CC_9$ irreducible claim fields with active $C_1$ formulations.
- **Rigorous Co-Valid Divergence Predicate (`D10`):** Pulled `CommonContinuityDomain` and `NonCommutingClaims` operational predicates into normative `II-40` text.
- **`OpenFrontierGate` Coordinate Pointer (`D09`):** Repaired pointer in `CONSTITUTIONAL_SPEC.md` to `$II-40$`.

---

## [1.1.0] - 2026-08-22

### Added
- **Guarded Dissolution State Machine (`CR-008` & `II-13`):** Formalized 5-state lifecycle machine ($\text{ACTIVE} \to \text{REQUESTED} \to \text{QUIESCING} \xrightarrow{\text{Commit Point}} \text{COMMITTED} \to \text{CATABOLIZED}$) enforcing bilateral co-authorization ($PP_{16}$) and non-reconstructibility.
- **Co-Valid Divergence Protection (`CR-009` & `II-40`):** Formalized operational predicates for Co-Valid Divergence preservation and ordered non-destructive hash composition.
- **Archaeological Crucibles (`CR-008`, `CR-009`):** Formalized and registered seed Crucibles pinned to `v1.0.7` (`d9a1dca`).

---

## [1.0.7] - 2026-08-22

### Changed
- **Worked Reference Launch Posture (`CR-001..003`):** Transitioned Worked Reference Crucibles status to `ADVERSARIAL_REVIEW` to establish that initial maintainer analyses serve as public method demonstrations open for challenge rather than unchallengeable canon.

---

## [1.0.6] - 2026-08-22

### Added
- **Dual Epistemic Taxonomy & Self-Pinning Resolution:** Documented explicit distinction between External Problem Premises and Internal Epistemic Tiers ($C_1$), and eliminated self-referential commit hash recursion in Crucible frontmatter headers.

---

## [1.0.5] - 2026-08-22

### Fixed
- **Sorites Paradox Premise Fix (`CR-002`):** Corrected formal tolerance premise logic to $\neg H(n) \implies \neg H(n+1)$ ("if $n$ grains are a non-heap, $n+1$ grains are a non-heap").
- **The Great Vector War Algebra & Epistemic Typing (`CR-003`):** Corrected quaternion representation to $SU(2)$ double-cover homomorphism $SU(2) \to SO(3)$ and aligned epistemic classifications with $C_1$'s 5 Epistemic Tiers.
- **Ship of Theseus Derivation Rigor (`CR-001`):** Added explicit derivation step connecting semantic relation typing ($E_{\text{semantic}}$) and historical ancestry ($G_{\le t}$) to dual warranted identity predicates.
- **Outcome Metadata Alignment:** Synchronized frontmatter `primary_outcome` and body Section 12 outcome text across all Worked Reference Crucibles.

---

## [1.0.4] - 2026-08-22

### Added
- **Public Crucible Framework for Warranted Inquiry (`/crucibles/`):** Public open-source falsification surface for testing Palimpsestus against paradoxes, distributed systems failures, governance forks, and epistemic challenges.
- **No-Ad-Hoc-Rescue Invariant & 9 Outcome Classifications:** Enforced resolution dependency audits and 9 formal constitutional outcome classifications plus `PENDING`.
- **Pre-Populated 3-Band Challenge Index (`INDEX.md`):** Established `Learn` (Worked References), `Claim` (Open Seeds), and `Frontier` (Hard Open Problems) challenge board.
- **Flagship Worked Reference Crucibles:** Added `CR-001` (Ship of Theseus), `CR-002` (Sorites Threshold), and `CR-003` (The Great Vector War: Gibbs/Heaviside vs Tait/Hamilton).
- **GitHub Issue Form (`.github/ISSUE_TEMPLATE/crucible.yml`):** Low-barrier submission form for community problem submissions.

---

## [1.0.2] - 2026-08-21

### Added
- **Normative JSON Schemas (`/schemas/`):** Added `node.schema.json`, `cross-receipt.schema.json`, `fold-receipt.schema.json`, and `migration-receipt.schema.json`.
- **Constitutional History & Migration Narrative:** Added `docs/history/constitutional-migrations/C0-to-C1.md` documenting the $C_0 \to C_1$ migration.
- **Architectural Decision Records (`docs/history/decisions/`):** Established ADR-0001 (Provenance Fidelity), ADR-0002 (Fold/Cross Recurrence), ADR-0003 (Tri-Repository Division), and ADR-0004 ($C_0 \to C_1$ Migration).

### Changed
- **Open Frontier Physics:** Formalized native anti-totalization ($\text{Procedural Saturation} \neq \text{Ontological Closure}$) in `MANIFESTO.md` and `CONSTITUTIONAL_SPEC.md`.
- **Functorial Projections:** Formalized scale-homologous functorial projections ($F_s$) in `CONSTITUTIONAL_SPEC.md`.
- **Root Serialization Rule:** Documented that $\mathbf{CC} = \Phi_C(W)$ processually and ontologically, while $\mathbf{CC}$ is serialized as `AntecedentRoot` inside $D_{\text{deriv}}$.
- **Unified Entry Count:** Unified entry counts across `CONSTITUTIONAL_SPEC.md` and `README.md` to **3,269 authored entries**.

### Fixed
- Fixed broken links (`OPEN_SPEC.md` and relative internal gap-map path links).
- Synchronized `CITATION.cff` and `.zenodo.json` version tags to `1.0.2`.

---

## [1.0.1] - 2026-08-20

### Added
- Export packaging and repository separation scripts.

---

## [1.0.0] - 2026-08-20

### Added
- Initial public release of the Palimpsestus 4×4 Matrix Derivation Specification (3,269 entries across 16 matrix files).
