# Palimpsestus `v1.1.1` Master Defect Ledger

This ledger tracks the 12 structural defects, citation mismatches, verifier category errors, and claim calibrations identified during the clean-room passes on `v1.1.0`. All defects are explicitly closed and verified under the `v1.1.1` release gate.

---

## Master Defect Register (`D01` – `D12`)

| Defect ID | Description | Source | Affected Artifact | Repair Mechanism | Status |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **D01** | $IP_{49}$ cites $PP_{198}$ for Net Exchange Recycling Balance | Reviewer Pass | `system-foundations-implementation-physical.md` | Re-parent $IP_{49}$ to $PP_{125}$ (*Net Exchange Physics*) / $PP_{199}$ | **CLOSED** |
| **D02** | Verifier skipped parent witness checks when parenthesis formatting was missing | Reviewer Pass | `validators/verify_corpus_conformance.py` | Universal title & `canonical_text_digest` verification for 100% of citations | **CLOSED** |
| **D03** | `parent_witnesses` optional in JSON receipt schemas | Reviewer Pass | `schemas/*.schema.json` | Make `parent_witnesses` REQUIRED for normative parents with `expected_title` & `canonical_text_digest` | **CLOSED** |
| **D04** | Misleading name `semantic_digest` for normalized text hash | Reviewer Pass | `validators/verify_corpus_conformance.py`, schemas | Rename to `canonical_text_digest` with explicit `canonicalization_version: palimpsestus-normative-v1` | **CLOSED** |
| **D05** | Category Error: Unresolved parent ancestry treated as warning "Open Frontier" | Reviewer Pass | `validators/verify_corpus_conformance.py` | Make unresolved `NormativeAncestry` / `NormativeSupport` references **HARD FAILURES** | **CLOSED** |
| **D06** | Hardcoded epistemic tier defaults based on matrix cell | Reviewer Pass | `validators/verify_corpus_conformance.py` | Parse explicit `**Epistemic Tier:** Tier X` metadata tags from entry bodies | **CLOSED** |
| **D07** | Active $C_0$ "navigation = consciousness" residues in $IP_6, IP_3, PP_{197}$ | Reviewer Pass | `system-foundations-implementation-physical.md` | Re-ground $IP_6, IP_3, PP_{197}$ into $C_1$ topological affordance reachability | **CLOSED** |
| **D08** | Empirical self-organized criticality (SOC) claim in $CC_9$ irreducible claim field | Reviewer Pass | `system-foundations-conceptual-conceptual.md` | Re-align $CC_9$ and $CC_3$ irreducible claim fields with active $C_1$ formulations | **CLOSED** |
| **D09** | `OpenFrontierGate` coordinate mismatch in `CONSTITUTIONAL_SPEC` | Reviewer Pass | `CONSTITUTIONAL_SPEC.md` | Repair coordinate pointer to match actual anti-totalization gate in $II$ | **CLOSED** |
| **D10** | Overbroad $A \neq B$ paradox predicate in normative `II-40` | Reviewer Pass | `system-foundations-implementation-implementation.md` | Pull `CommonContinuityDomain` & `NonCommutingClaims` operational predicates into `II-40` | **CLOSED** |
| **D11** | Dissolution state machine missing normative state transition text in $IP_{11}, IP_{12}, IP_{49}$ | Reviewer Pass | `system-foundations-implementation-physical.md` | Formally embed `QUIESCING` state machine text into $IP$ physical processes | **CLOSED** |
| **D12** | `SPEC_REF` commit pin printed but not strictly verified against `spec_commit` | Reviewer Pass | `scripts/verify-conformance.sh` | Verify `spec_commit == SPEC_REF.target_commit` and schema `sha256` before running | **CLOSED** |
