# ADR-0003: Tri-Repository Architectural Division

**Status:** Accepted  
**Date:** 2026-08-21  
**Authors:** Stephen Weber / Palimpsestus Architecture Group  

---

## Context
Palimpsestus requires a clear, unambiguous boundary between public law, reference compliance verification, and proprietary execution engines to ensure high trust, mathematical clarity, and commercial sustainability.

## Decision
Establish a strict **Tri-Repository Architecture**:

$$\boxed{
\begin{array}{ccc}
\mathbf{\text{palimpsestus-spec}} & \mathbf{\text{palimpsestus-conformance}} & \mathbf{\text{palimpsestus-platform}} \\[4pt]
\text{What must hold?} & \text{How is compliance checked?} & \text{How do we make it work?} \\[4pt]
\textbf{PUBLIC LAW (CC BY 4.0)} & \textbf{PUBLIC VERIFIER (MIT)} & \textbf{PROPRIETARY ENGINE}
\end{array}
}$$

1. **`palimpsestus-spec` (CC BY 4.0):** Public Law — Normative specification, matrix derivations, JSON schemas.
2. **`palimpsestus-conformance` (MIT):** Public Verifier — Reference structural validators, test vectors, crash recovery harnesses.
3. **`palimpsestus-platform` (Proprietary):** Proprietary Engine — Production kernel, search compilers, agent prompts.

## Consequences
- Clean open-source trust boundary.
- Zero proprietary code leak in public repos.
- External auditors can verify compliance independently without needing access to the proprietary engine.
