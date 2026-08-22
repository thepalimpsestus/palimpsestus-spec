# The Palimpsestus Rosetta Stone: Terminology & System Translation Matrix

This document provides a canonical translation mapping Palimpsestus constitutional vocabulary to formal model definitions, conventional distributed systems analogues, and concrete implementation examples.

---

## Terminology Mapping Table

| Palimpsestus Term | Formal Model Definition | Conventional Systems Analogue | Concrete Implementation Example |
| :--- | :--- | :--- | :--- |
| **Metabolic Mass** | Structural weight accrued by a node based on state complexity and failure records. | Memory footprint / CPU schedule weight / Latency penalty | Bytes allocated in process state header or rate-limiting bucket weight. |
| **Metabolic Starvation** | Failure of an entity to emit mandatory challenge-response heartbeats within its evaluation window. | Heartbeat timeout / Liveness check failure | `select` timeout expiring on a socket keepalive channel. |
| **Wake ($W_t$)** | Immutable forensic record of execution side effects deposited in the DAG lineage ($G_{\le t}$). | Audit trail / WAL (Write-Ahead Log) entry / Event sourcing log | `SuccessReceipt` append to an append-only transaction ledger. |
| **Sovereignty** | Local boundary integrity enforcing local warrant rules over state transitions ($CC_8$). | Node-local authorization policy / Capability token check | Cryptographic signature validation on incoming RPC mutation payloads. |
| **Permeability** | Boundary state parameter governing ingress/egress message flow ($0.0 \le P \le 1.0$). | Circuit breaker threshold / Rate limiter aperture | Dynamically adjusted token-bucket rate limiter parameter. |
| **Structural Tension** | Unresolved paradox or competing state assertions maintained without forced resolution ($CC_9$). | Split-brain partition / Unmerged branch heads | Concurrent git branch tips or competing raft log indices before quorum commit. |
| **Co-Valid Divergence** | Concurrent valid branches originating from a common continuity domain with non-commuting claims. | Concurrent branch divergence / Forked lineage | Concurrent vector clock branches ($A \ne B$) where both $A$ and $B$ carry unbroken signatures. |
| **Operational Focus Window** | The active edge subset currently navigated within the finite attention buffer ($PP_{197}$). | Working set / Active context window / LRU cache frame | Current active memory-mapped memory pages or active node cache set. |
| **Thermodynamic Debt** | Deferred clean-up or un-catabolized negative space in the topology. | Technical debt / Uncollected garbage / Memory fragmentation | Pending garbage collection sweep or un-compacted log segments. |
| **Catabolization** | Guarded zeroization of entity payloads following irreversible linear commitment ($II_{13}$). | Secure memory zeroization / Resource deallocation | `memset_s(payload, 0, len)` followed by pointer deallocation and tombstone logging. |
| **Open Frontier** | The un-navigated prospective out-edge set ($\mathcal{A}_t(v)$) representing un-excavated capability. | Open interface / Unimplemented API endpoint / Future extension point | Function stub returning `NotImplementedError` with explicit warrant capability bounds. |
| **No Warrant Inflation** | Invariant forbidding any node or actor from asserting capabilities exceeding its verified lineage. | Principle of Least Privilege / Strict capability bounds check | Rejecting authorization if caller's credential scope is smaller than requested permission. |
| **Zero Theater** | Invariant demanding empirical verification over declarative claims ($CC_3$). | Empirical benchmarking / Executable assertion testing | Live Integration Test vs Mocked Dashboard Status. |
