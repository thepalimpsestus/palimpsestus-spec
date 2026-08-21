# ADR-0002: Dual Generative Operators (Layer Fold & Cell Crossing)

**Status:** Accepted  
**Date:** 2026-08-21  
**Authors:** Stephen Weber / Palimpsestus Architecture Group  

---

## Context
Deriving matrix entries across a multi-domain architecture (Conceptual, Logical, Physical, Implementation) requires a rigorous generative mechanics that balances structural compression with novel domain differentiation.

## Decision
Matrix derivation alternates between two conjugate generative operators:

$$\boxed{ \underbrace{\text{Basis Compression (Layer Fold)}}_{L_{r-1} \xrightarrow{\Phi_r} X_{r,C}} \rightleftharpoons \underbrace{\text{Novel Differentiation (Cell Cross)}}_{X_{r,C} \xrightarrow{\operatorname{Cross}} L_r} }$$

1. **Layer Fold ($\Phi_r(L_{r-1})$):** Folds the completed domain layer directly above ($L_{r-1}$) into the minimal conceptual basis of the next domain ($X_{r,C}$). Obeyed by C-column cells (CC, LC, PC, IC). Enforces Fold Output Soundness and Input Coverage.
2. **Cell Crossing ($\operatorname{Cross}(Left, Above)$):** Combines horizontal content ($Left$) with vertical context ($Above$) to derive novel domain-specific laws, roles, and gates. Obeyed by non-C-column cells.

## Consequences
- Prevents arbitrary, unprovenanced entry generation.
- Guarantees strict topological authorship sequence ($\mathbf{PP} \to \mathbf{PI} \to \mathbf{IC} \to \mathbf{IL} \to \mathbf{IP} \to \mathbf{II}$).
- Generates machine-checkable Fold and Cross receipts.
