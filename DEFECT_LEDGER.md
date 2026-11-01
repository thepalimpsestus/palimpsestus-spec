# Palimpsestus `v1.1.3` Master Defect Ledger

This ledger tracks structural defects, citation mismatches, verifier category errors, verifier code enforcement gaps, and verification claim calibrations identified during clean-room reviews of `v1.1.0`, `v1.1.1`, `v1.1.2`, and `v1.1.3`. All 18 defects are explicitly closed and verified under the `v1.1.3` release gate.

---

## Master Defect Register (`D01` – `D18`)

| Defect ID | Description | Source | Affected Artifact | Repair Mechanism | Status |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **D01** | $IP_{49}$ cites $PP_{198}$ for Net Exchange Recycling Balance | Reviewer Pass | `system-foundations-implementation-physical.md` | Re-parent $IP_{49}$ to $PP_{125}$ (*Net Exchange Physics*) / $PP_{199}$ | **CLOSED** |
| **D02** | Verifier skipped parent witness checks when parenthesis formatting was missing | Reviewer Pass | `validators/verify_corpus_conformance.py` | Enforced 100% parent witness validation & digest comparison in machine receipts (`verify_dag_conformance.py`); live Markdown scanner enforces 100% topological order, acyclicity, and hard failure on missing parent IDs | **CLOSED (Calibrated)** |
| **D03** | `parent_witnesses` optional in JSON receipt schemas | Reviewer Pass | `schemas/*.schema.json` | Make `parent_witnesses` REQUIRED for normative parents with `expected_title` & `canonical_text_digest` | **CLOSED** |
| **D04** | Misleading name `semantic_digest` for normalized text hash | Reviewer Pass | `validators/verify_corpus_conformance.py`, schemas | Rename to `canonical_text_digest` with explicit `canonicalization_version: palimpsestus-normative-v1` | **CLOSED** |
| **D05** | Category Error: Unresolved parent ancestry treated as warning "Open Frontier" | Reviewer Pass | `validators/verify_corpus_conformance.py` | Make unresolved `NormativeAncestry` / `NormativeSupport` references **HARD FAILURES** | **CLOSED** |
| **D06** | Hardcoded epistemic tier defaults based on matrix cell | Reviewer Pass | `validators/verify_corpus_conformance.py` | Mandate explicit `**Epistemic Tier:** Tier X` in all 3,269 entry bodies; zero silent fallback | **CLOSED** |
| **D07** | Active $C_0$ "navigation = consciousness" residues in $IP_6, IP_3, PP_{197}$ | Reviewer Pass | `system-foundations-implementation-physical.md` | Re-ground $IP_6, IP_3, PP_{197}$ into $C_1$ topological affordance reachability | **CLOSED** |
| **D08** | Empirical self-organized criticality (SOC) claim in $CC_9$ irreducible claim field | Reviewer Pass | `system-foundations-conceptual-conceptual.md` | Re-align $CC_9$ and $CC_3$ irreducible claim fields with active $C_1$ formulations | **CLOSED** |
| **D09** | `OpenFrontierGate` coordinate mismatch in `CONSTITUTIONAL_SPEC` | Reviewer Pass | `CONSTITUTIONAL_SPEC.md` | Repair coordinate pointer to match actual anti-totalization gate in $II$ ($II-40$) | **CLOSED** |
| **D10** | Overbroad $A \neq B$ paradox predicate in normative `II-40` | Reviewer Pass | `system-foundations-implementation-implementation.md` | Pull `CommonContinuityDomain` & `NonCommutingClaims` operational predicates into `II-40` | **CLOSED** |
| **D11** | Dissolution state machine missing normative state transition text in $IP_{11}, IP_{12}, IP_{49}$ | Reviewer Pass | `system-foundations-implementation-physical.md` | Formally embed `QUIESCING` state machine text into $IP$ physical processes | **CLOSED** |
| **D12** | `SPEC_REF` commit pin printed but not strictly verified against `spec_commit` | Reviewer Pass | `scripts/verify-conformance.sh` | Hard exit 1 if `spec_commit != SPEC_REF.target_commit` | **CLOSED** |
| **D13** | `verify-conformance.sh` warned on commit mismatch instead of hard-exiting | Code Audit | `scripts/verify-conformance.sh` | Enforce hard script termination (`exit 1`) on spec commit mismatch | **CLOSED** |
| **D14** | `verify-conformance.sh` carried `SPEC_REF` schema hashes but did not execute sha256 verification | Code Audit | `scripts/verify-conformance.sh` | Added Step `[0/6]` verifying `sha256sum` for all 4 receipt schemas against `SPEC_REF` | **CLOSED** |
| **D15** | Silent fallback to cell-derived epistemic tiers when tags missing in Markdown | Code Audit | `validators/verify_corpus_conformance.py` | Added explicit `**Epistemic Tier:** Tier X` tag to all 3,269 Markdown entries; verifier hard errors on missing tags | **CLOSED** |
| **D16** | Receipt JSON Schema validation (`jsonschema.validate()`) was not executed on JSON fixtures | Reviewer Pass | `validators/verify_dag_conformance.py` | Execute strict `jsonschema.validate()` on all receipt JSON objects against `schemas/*.schema.json` | **CLOSED** |
| **D17** | `parent_witnesses` object not checked against target node computed digest in receipt validator | Reviewer Pass | `validators/verify_dag_conformance.py` | Require `witness.canonical_text_digest == recomputed_target_digest` & title witness for 100% of receipt parents | **CLOSED** |
| **D18** | Lack of negative mutation test vector proving corrupted witness digest triggers failure | Reviewer Pass | `test-vectors/dag/invalid_witness_digest_sample.json` | Added Step `[1b/6]` executing negative mutation test vector; verifies non-zero exit on corrupted digest | **CLOSED** |

---

## Verification Scope & Claim Calibration Boundary

To maintain absolute **Zero Theater** transparency, the public verification claims of `v1.1.3` are calibrated across two distinct computational tiers:

### 1. Machine Receipt Enforcement Tier (`verify_dag_conformance.py`)
- **Claim:** 100% of parent references represented in machine-readable JSON receipt objects (`cross_receipts`, `fold_receipts`) undergo mandatory `jsonschema.validate()` validation, title witness verification, `canonicalization_version` checking, and byte-for-byte matching of `parent_witnesses.canonical_text_digest` against target node computed digests.
- **Negative Test Evidence:** Mutating any parent digest in a receipt object triggers an immediate hard exit 1 with `Parent Digest Witness Mismatch Error` (demonstrated by Step `[1b/6]`).

### 2. Live Human-Readable Corpus Scan Tier (`verify_corpus_conformance.py`)
- **Claim:** 100% of the **3,269** authored Markdown entries across 16 matrix derivation files undergo automated topological cell ordering, graph acyclicity verification, explicit `**Epistemic Tier:** Tier X` declaration checks (zero silent fallbacks), and hard failures for any missing parent ancestry (`NormativeAncestry` / `NormativeSupport`).
- **Roadmap Scope:** Storing standalone, individual JSON receipt files containing pre-computed `parent_witnesses` for all 3,269 entries in the human-readable Markdown repository is a toolchain optimization feature for future CLI releases, not a specification defect.
