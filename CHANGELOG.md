# Changelog: Palimpsestus Specification (`palimpsestus-spec`)

All notable changes to the Palimpsestus Open Architecture Specification will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
