# Changelog: Palimpsestus Specification (`palimpsestus-spec`)

All notable changes to the Palimpsestus Open Architecture Specification will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
