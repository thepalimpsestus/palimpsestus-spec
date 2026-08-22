# Public Crucible Framework for Warranted Inquiry (`crucibles/`)

**Status:** ACTIVE  
**Governing Constitution:** $C_1$  
**License:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](../LICENSE)  

---

## 1. Purpose & Falsification Philosophy

The **Public Crucible Framework** is the open-source falsification surface for Palimpsestus. It provides a disciplined, public contribution environment for testing the specification against hard philosophical paradoxes, distributed systems edge cases, governance forks, and epistemic traps.

### The Falsification Mandate
> **Crucibles are not demonstrations that Palimpsestus is correct. They are attempts to discover where Palimpsestus ceases to be warranted.**

Palimpsestus does not ask outside contributors to accept its constitution on faith. Instead, it invites the public:

$$\boxed{\textbf{Bring us hard problems. Try to break the architecture.}}$$

---

## 2. The No-Ad-Hoc-Rescue Rule

To prevent the Crucible framework from becoming an unfalsifiable exercise in self-serving rationale, all Crucible analyses MUST strictly obey the **No-Ad-Hoc-Rescue Rule**:

$$\boxed{
\text{Resolution}(CR, C_n) \subseteq \text{Resources publicly available in } C_n
}$$

* **Rule:** A Crucible may ONLY be resolved using constitutional concepts, relations, distinctions, and operators present in the pinned specification ($C_n$).
* **Constraint:** Novel machinery introduced during an analysis to resolve a Crucible MUST NOT be retroactively claimed as existing doctrine. It MUST be classified as `CONSTITUTIONAL_PRESSURE` or `CONSTITUTIONAL_CONTRADICTION`, initiating the formal constitutional amendment escalation path.

---

## 3. Orthogonal Lifecycle Status & Outcome Classifications

Crucible artifacts track two independent, orthogonal metadata dimensions: **Lifecycle Status** (maturity of the artifact) and **Outcome Classification** (the epistemic result under the pinned constitution).

### Lifecycle Statuses (`status`)
1. **`PROPOSED`**: Raw problem submitted by a contributor; un-formalized.
2. **`FORMALIZED`**: Problem statement, minimal premises, hidden-premise audit, and spec coordinates established.
3. **`UNDER_ANALYSIS`**: Active derivation or competing derivations underway.
4. **`ADVERSARIAL_REVIEW`**: Proposed resolution undergoing adversarial counter-analysis.
5. **`STABLE`**: Analysis completed and peer-reviewed under the pinned constitution. *(Note: `STABLE@C_n` means stable under constitution $C_n$; it does NOT mean eternally closed).*

### Outcome Classifications (`outcomes`)
Crucibles use a non-inflationary outcome vocabulary (supporting composite outcomes, e.g. `outcomes: [LOCALIZED, REFRAMED]`):

- **`PENDING`**: Analysis incomplete or open seed challenge.
- **`DISSOLVED`**: Apparent contradiction disappears once an illicit identification, erased distinction, or hidden premise is removed. No residual contradiction remains under $C_n$.
- **`REFRAMED`**: The original binary or singular framing is unwarranted; the problem becomes coherent under a different relational formulation.
- **`LOCALIZED`**: The contradiction is genuine within a specific frame, scale, quotient, or jurisdiction, but does not generalize beyond it.
- **`UNDERDETERMINED`**: Plural warranted results; given current premises and $C_n$, multiple incompatible conclusions remain equally warranted.
- **`EMPIRICAL`**: Resolution depends on physical substrate or real-world facts not derivable from first principles alone.
- **`PRODUCTIVE_TENSION`**: Both poles remain warranted and incompatible collapse would destroy relevant system structure; sustained oscillation is itself the warranted state.
- **`OPEN_FRONTIER`**: Absence of warranted continuation; encounters a presently unwarranted boundary with no justified path forward, but no defect or contradiction in $C_n$ has been demonstrated.
- **`CONSTITUTIONAL_PRESSURE`**: Exposes missing distinction, insufficiently specified semantics, or absent machinery in $C_n$. Resolving it requires refining $C_n$.
- **`CONSTITUTIONAL_CONTRADICTION`**: Existing commitments of pinned $C_n$, applied without additional assumptions, require mutually incompatible conclusions.

---

## 4. Escalation Path for Constitutional Pressure

When a Crucible exposes a `CONSTITUTIONAL_PRESSURE` or `CONSTITUTIONAL_CONTRADICTION`, Palimpsestus does not rewrite or erase the historical evaluation. Instead, it follows a strict escalation loop:

$$\boxed{
\text{Crucible } CR_i @ C_n \longrightarrow \text{Pressure Report} \longrightarrow \text{ADR/RFC} \longrightarrow C_n \to C_{n+1} \longrightarrow \text{Lattice Migration} \longrightarrow \text{Re-Evaluation } CR_i @ C_{n+1}
}$$

The original evaluation ($CR_i @ C_n$) remains immutable in repository history forever as a provenance receipt of why the constitution evolved.

---

## 5. Non-Exclusive Claims & Competing Analyses

Claims on open seeds are non-exclusive contribution assignments. Independent competing derivations under the exact same pinned constitution ($Analysis_A \neq Analysis_B$) are permitted and actively encouraged.

---

## 6. How to Contribute

1. **Submit a Hard Problem (Lay Contributor):** Use the GitHub Issue Form `.github/ISSUE_TEMPLATE/crucible.yml`. No formal Palimpsestus math required!
2. **Claim & Analyze an Open Seed (Technical Contributor):** Select an `OPEN` seed from [`INDEX.md`](INDEX.md), follow [`TEMPLATE.md`](TEMPLATE.md), and submit a Pull Request.
3. **Challenge a Worked Reference:** If you discover an unstated hidden premise in a `STABLE` reference Crucible (such as `CR-001`), submit an adversarial counter-analysis PR. Worked references demonstrate the procedure; they are not immune to challenge!
