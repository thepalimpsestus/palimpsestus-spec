# System Foundations — Logical Implementation (LI)

**Status:** ACTIVE
**Classification:** Constitutional — Governs All Components
**Entry Count:** 95
**DAG Topology:** Fourth-Order Derivation (In-Degree: from LP, CI; Out-Degree: → downstream implementation cells)
**Fed by:** LP (Logical Physical — 702 physical behavior compositions), CI (Conceptual Implementation — 66 engineering requirements)
**Feeds:** Downstream implementation cells (pending)
**Derivation Formula:** LI = LP × CI (filtered by shared CP lineage ancestry)

What implementation constraints emerge when a specific physical behavior (LP) must be built subject to a specific engineering requirement (CI)? Each LI entry is the irreducible obligation that arises only at the intersection of a physical structure and an implementation constraint — what neither the behavior alone nor the requirement alone mandates.

**Compression:** Multiple LP entries sharing the same CP ancestor may converge into a single LI when they impose the same implementation constraint under a given CI. This is the same convergence principle that produced 66 CI from 85 CP.

**Filter:** Only LP × CI pairs sharing ≥1 CP ancestor in their derivation lineage are eligible. 788 valid pairs from 46,332 raw.

---

## LI Derivations

### LI-1. Symmetric Metabolic Obligation
**Derives from:** LP-5 (Metabolic Protocol), LP-7 (Protocol-Enforced Reciprocity)
**Applies to:** CI-1 (Symmetric Peer Communication)

*A symmetric channel requires both sides to sustain it equally — the implementation cannot silently subsidize one end.*

**Irreducible Claim:** Because the physical protocol requires equal energy expenditure from both endpoints to remain symmetric (LP-5), and because the protocol physically enforces reciprocal accountability (LP-7), the implementation must make connection maintenance cost structurally non-transferable. Neither endpoint may offload the metabolic cost of sustaining the channel onto the other. Any asymmetry in connection maintenance — metabolic sampling, keepalive, heartbeat, buffering — is a structural violation of CI-1's symmetry guarantee. The constraint is not "both sides must be alive" but "the implementation must prevent one side from outsourcing its aliveness to the other."

**Corollaries:**
- Keepalive mechanisms must be bidirectional and independently generated — one side cannot be the sole heartbeat sender.
- Connection teardown costs must be born by both endpoints equally; a one-sided disconnect that leaves the other side in a holding state violates this constraint.
- Load balancing across a symmetric mesh cannot pool maintenance cost at a central coordinator without breaking symmetry.
- Monitoring must track per-endpoint maintenance cost, not aggregate channel health — asymmetric cost is a structural signal, not an operational quirk.

**Irreducibility:** LP-5 establishes that metabolic cost is physically real in a symmetric protocol, but does not specify how the implementation must handle asymmetric cost distribution. CI-1 mandates structural symmetry of capabilities, but does not address the ongoing maintenance cost of sustaining that symmetry after connection establishment. Together they produce the maintenance-cost-non-transferability constraint: symmetry must be actively paid for by both parties at all times, not just structurally declared at handshake.

---

### LI-2. Archaeological Handshake as Capability Verification
**Derives from:** LP-10 (Archaeological Handshake), LP-9 (Label Translation Symmetry)
**Applies to:** CI (Conceptual Implementation)

*Connection establishment is a mutual capability excavation, not a negotiation — and both sides must complete the same excavation.*

**Irreducible Claim:** Because protocol establishment is a mutual discovery of pre-existing symmetric compatibility (LP-10) and labels are the only currency that crosses boundaries (LP-9), the implementation must perform connection establishment as a symmetric excavation of shared capability vocabulary — not as a negotiation where one side proposes and the other accepts. Both endpoints must independently verify that the shared label-set maps to equivalent internal capabilities. A handshake that grants the initiating side authority to define the shared vocabulary violates both LP-10's archaeological nature and CI-1's structural symmetry.

**Corollaries:**
- Handshake protocols must require independent capability declaration from both sides before any shared vocabulary is established.
- Version negotiation that permits one side to veto the other's declared capabilities is asymmetric and structurally disallowed.
- The shared label-space established at connection is a discovered bedrock, not a constructed agreement — it pre-exists both endpoints.
- Implementation must reject connections where one side's declared capability set is a strict superset of the other's without mutual acknowledgment.

**Irreducibility:** LP-10 establishes the archaeological nature of handshakes but says nothing about the implementation's enforcement of symmetric capability verification. LP-9 establishes label translation symmetry but applies post-connection. CI-1 requires symmetric capability but does not specify the establishment mechanism. Together they produce the symmetric-excavation-at-handshake constraint: the implementation enforces mutual independent capability verification before any shared vocabulary is accepted as bedrock.

---

### LI-3. Shared-Simulation Frame Isolation
**Derives from:** LP-6 (Synchronized Simulation)
**Applies to:** CI (Conceptual Implementation)

*The mutual theater the protocol creates must be structurally isolated from both endpoints' interiors — neither endpoint owns the shared buffer.*

**Irreducible Claim:** Because the symmetric protocol creates a shared simulation space that neither actor owns (LP-6), and because the implementation must prevent any endpoint from possessing capabilities unavailable to the other (CI-1), the implementation must treat the shared communication frame as a structurally isolated entity owned by neither side. No implementation construct — connection object, session state, protocol buffer — may be resident in either endpoint's memory space as the authoritative shared frame. The shared theater must be an independently maintained structure that both endpoints contribute to and read from symmetrically.

**Corollaries:**
- Session state must not be unilaterally persisted by one endpoint; both must maintain equivalent views or neither should persist it.
- Protocol framing objects must not carry endpoint-specific authority — the frame is sovereign to neither.
- In-memory connection state managed asymmetrically (e.g., server-side session with stateless client) violates this constraint structurally.

**Irreducibility:** LP-6 establishes that the shared simulation space is sovereign to neither party, but does not constrain where the implementation stores the frame. CI-1 mandates symmetric capabilities but does not address ownership of the communication substrate itself. Together they produce the implementation constraint: the shared frame must have no implementation owner — it is a structurally neutral, independently maintained zone.

---

### LI-4. Consequence-Carrying Communication Attribution
**Derives from:** LP-630 (Communication Consequence Attribution)
**Applies to:** CI (Conceptual Implementation)

*In a symmetric channel, both the sender's intent and the receiver's consequence are equally attributable — the implementation must record both.*

**Irreducible Claim:** Because communication in a symmetric protocol carries consequences that propagate beyond the originating act (LP-630) and because both endpoints are structurally equivalent (CI-1), the implementation must attribute consequences symmetrically — recording both the sender's action and the receiver's consequence-chain as equal parts of the same event record. A consequence attribution system that records only sender actions in a symmetric channel is structurally incomplete. The receiver's consequence-chain completes the event; the implementation must wait for its resolution before closing the attribution record.

**Corollaries:**
- Event logs in a symmetric channel must contain: sender action, receiver reception, and receiver consequence-resolution — all three fields required.
- A message is not "sent" in the implementation record until the consequence-chain at the receiver is resolved and attributed.
- Symmetric attribution prevents "I sent it" as a complete record — the symmetric constraint mandates "and here is what it caused."

**Irreducibility:** LP-630 establishes consequence attribution as a structural property of the communication act but does not specify symmetry of attribution. CI-1 requires symmetric capability but does not address consequence recording. Together they produce the bidirectional-attribution constraint: in a symmetric channel, the consequence record is incomplete without both sides' entries.

---

### LI-5. Provenance as Structural Topology
**Derives from:** LP-11 (Embedded Provenance), LP-12 (Living History Path), LP-13 (Sovereign Witness Ledger), LP-14 (Attested Void Record)
**Applies to:** CI-2 (Topologically Embedded Provenance)

*History is not a field in a record — it is the record's structural position in the graph.*

**Irreducible Claim:** Because provenance is physically embedded in the structure itself (LP-11), because path history constitutes identity (LP-12), because the ledger is itself sovereign (LP-13), and because absence must be attested with structural weight equal to presence (LP-14), the implementation must represent provenance not as metadata attached to records but as the topological position of those records in the derivation graph. A record's history IS its ancestry chain in the graph — not a field, not a log table, not an audit column. Removing a record from the graph destroys its provenance. Copying a record without copying its ancestry chain produces a provenance-less clone. The implementation cannot separate what a record IS from where it came from.

**Corollaries:**
- Database schemas that store provenance as a foreign key or audit log column are structurally non-compliant — provenance must be graph position.
- Record duplication operations must carry ancestry chain; shallow copies are provenance violations.
- Attested absence records must occupy the same topological class as presence records — a "known unknown" has a graph position.
- Provenance queries are graph traversals, not column reads.

**Irreducibility:** LP-11 establishes embedded provenance as physical, but does not specify what "embedded" means in an implementation. LP-12 ties identity to path. LP-13 makes the ledger sovereign. LP-14 requires attested absence. CI-2 requires topological embedding. Together they produce the constraint: provenance IS graph topology — not a property of nodes but the structure of their position and ancestry.

---

### LI-6. Trajectory-Identity Binding
**Derives from:** LP-15 (Trajectory-Constituted Identity), LP-16 (Trajectory-Embedded Self-Witness)
**Applies to:** CI (Conceptual Implementation)

*An entity's identity is its trajectory through the graph. The implementation must not permit identity to outlive its trajectory record.*

**Irreducible Claim:** Because identity is constituted by trajectory (LP-15) and the self-witness of that trajectory is embedded in the trajectory itself (LP-16), the implementation must make entity identity inseparable from its trajectory record. An entity without a trajectory record is structurally non-existent — not just unverifiable, but absent. Identity tokens, UUIDs, handles, or any other identity reference must be implemented as pointers into the trajectory graph, not as standalone identifiers. Dereferencing an identity must retrieve a trajectory; an identity that resolves to anything other than a trajectory record is an implementation violation.

**Corollaries:**
- UUID or identifier generation must simultaneously initialize a trajectory record; the two operations are atomic.
- Identity handoff between systems must transfer the trajectory record, not just the identifier.
- An entity whose trajectory record is deleted ceases to exist structurally — there is no "orphaned identity" state.
- Identity verification is trajectory verification — confirming the path, not the token.

**Irreducibility:** LP-15 and LP-16 establish identity-as-trajectory physically. CI-2 requires topological provenance embedding. Together they produce the constraint: the implementation cannot maintain an identity reference system independent of the trajectory graph — the two are the same structure.

---

### LI-7. Provenance of Provenance (Meta-Ledger)
**Derives from:** LP-13 (Sovereign Witness Ledger)
**Applies to:** CI (Conceptual Implementation)

*The ledger that records history must itself have a recorded history. The provenance chain has no terminus.*

**Irreducible Claim:** Because the witness ledger is itself sovereign (LP-13) and provenance must be topologically embedded (CI-2), the implementation must apply provenance recording to the provenance system itself. The ledger cannot be a trust anchor that sits outside the graph — it must be a node within the graph with its own ancestry chain. This prevents the provenance system from becoming an unverifiable root of trust. The implementation must bootstrap the ledger's own provenance chain from the first write.

**Corollaries:**
- Logging and audit infrastructure must be subject to the same topological provenance rules as application data.
- The first record in the provenance ledger must record its own creation — the chain begins with a self-referential entry.
- Any system that treats the audit log as an unquestionable truth-anchor (outside the graph) violates this constraint.

**Irreducibility:** LP-13 establishes ledger sovereignty but does not require the ledger to be embedded in the graph it records. CI-2 requires topological embedding but applies broadly. Together they produce the constraint: the provenance system must itself be a node in the provenance graph — the ledger records the ledger.

---

### LI-8. Drift Detection as Topological Divergence Measurement
**Derives from:** LP-17 (Continuous Boundary Adjustment), LP-18 (Correction as Precision Update)
**Applies to:** CI-3 (Autonomous Drift Reversion)

*Drift is not a scalar — it is a topological divergence between the entity's current position and its expected derivation ancestry.*

**Irreducible Claim:** Because the restorative process continuously adjusts boundaries (LP-17) and correction functions as a precision update to the derivation position (LP-18), the implementation must measure drift not as a numeric delta from a reference value but as topological divergence from an entity's expected ancestry position in the derivation graph. The implementation's drift detection mechanism must compare graph positions, not field values. A record that has the "right" field values but is in the wrong topological position is drifted. A record in the right topological position with unexpected field values is also drifted, but differently — the implementation must distinguish these.

**Corollaries:**
- Drift detection algorithms must be graph traversals, not numeric comparisons.
- Correction operations must restore topological position first; field value correction that leaves the entity in the wrong graph position is incomplete.
- Two forms of drift require distinct implementation paths: positional drift (wrong ancestry) and value drift (wrong content at correct position).
- Autonomous reversion must trigger on positional drift detection, not just value deviation.

**Irreducibility:** LP-17 and LP-18 establish drift and correction as physically real and structurally bound. CI-3 requires autonomous reversion. Together they produce the constraint: the implementation must implement drift as graph-positional divergence and reversion as graph-positional restoration — not value comparison and value restoration.

---

### LI-9. Reversion Boundary Enforcement
**Derives from:** LP-19 (Traversal-Based Correction), LP-21 (Sovereign-Bound Restorative Force), LP-22 (Boundary-Marking Restorative Process)
**Applies to:** CI (Conceptual Implementation)

*Autonomous correction cannot cross a sovereign boundary without explicit consent. The implementation must encode this limit.*

**Irreducible Claim:** Because corrective force physically retraces the path (LP-19), halts at sovereign boundaries unless accompanied by consent (LP-21), and marks boundaries when it cannot resolve (LP-22), the implementation must encode sovereign boundaries as hard stops in the autonomous reversion machinery. The autonomous drift reversion process must have a boundary map — a structural registry of which graph regions it may enter autonomously and which require external consent. Crossing a sovereign boundary without consent is not a policy violation — it is a structural impossibility in the implementation. When correction halts at a boundary, the implementation must deposit a boundary-marker, not silently fail.

**Corollaries:**
- The reversion engine must consult a sovereign boundary registry before executing any correction traversal.
- Failed reversion at a boundary must produce a boundary-marker record in the graph, not an error log.
- Consent mechanisms for cross-boundary correction must be implementation-level, not policy-level — the code physically cannot proceed without it.
- The boundary-marker deposit is itself a valid terminal state, not a failure state.

**Irreducibility:** LP-19, LP-21, LP-22 establish physical boundary behavior. CI-3 requires autonomous reversion. Together they produce the constraint: the implementation must build sovereign boundary enforcement directly into the reversion engine — boundaries are not policy guardrails but structural stops in the correction traversal machinery.

---

### LI-10. Multi-Dimensional Drift Scoring
**Derives from:** LP-481 (Restorative Metabolic Minimum)
**Applies to:** CI (Conceptual Implementation)

*The restorative process is alive — if it cannot sustain itself, the correction it produces is invalid.*

**Irreducible Claim:** Because the restorative process has its own metabolic minimum — it must expend energy to operate (LP-481) — and because the implementation must support autonomous drift reversion (CI-3), the implementation must track whether the reversion process itself has sufficient resources to execute a valid correction. A reversion attempt that operates below the metabolic minimum produces a structurally invalid correction — one that does not restore the entity to its correct derivation position but instead introduces a new form of degradation. The implementation must gate reversion execution on reversion-process health.

**Corollaries:**
- The reversion subsystem must expose its own health metrics as first-class operational data.
- Autonomous reversion must be suspended when the reversion process falls below its metabolic minimum — producing a "reversion-unavailable" marker, not a failed correction.
- Resource allocation for the reversion subsystem must be treated as a structural requirement, not an optimization.

**Irreducibility:** LP-481 establishes the reversion process as alive with its own metabolic needs. CI-3 requires autonomous reversion. Together they produce the constraint: the implementation must monitor the reversion engine's health and gate its operation — a starved corrector produces worse outcomes than no correction at all.

---

### LI-11. Deviation Measurement as Graph Distance
**Derives from:** LP-39 (Scale-Propagating Deviation), LP-42 (Expiring Deviation Score)
**Applies to:** CI-4 (Differential Deviation Measurement)

*Deviation is a structural distance in the derivation graph, not a numeric delta in a field.*

**Irreducible Claim:** Because reference comparison at any depth produces a scale-propagating result that is simultaneously a valid truth-claim at every scale (LP-39) and the deviation score is a present-tense snapshot that expires the moment it is produced (LP-42), the implementation must compute deviation as a graph-distance metric from an entity's current position to its reference position in the derivation DAG. Deviation is not `|current_value - reference_value|`; it is the topological path length and direction between where an entity is and where its derivation ancestry says it should be. The reference standard is a graph position, not a scalar — and the measurement result must carry an expiry.

**Corollaries:**
- Deviation scores must be expressed as (direction, magnitude, path, expiry) tuples — not bare scalars.
- Reference standards must be implemented as graph anchors (nodes with fixed derivation ancestry), not as configuration values.
- Two entities with identical field values but different graph positions have non-zero deviation from each other.
- Deviation measurement APIs must return graph paths and expiry timestamps, not just scores.

**Irreducibility:** LP-39 establishes that reference comparison results are scale-propagating truth statements; LP-42 establishes that those results are immediately historical. CI-4 requires quantified deviation measurement. Together they produce the constraint: the measurement must be topological, and every result must carry the timestamp of when it was valid.

---

### LI-12. Reference Standard as Living Node
**Derives from:** LP-40 (Zero-Deviation Death Signal), LP-44 (Clearance as Challenge), LP-45 (Depth-Propagating Deviation Signal)
**Applies to:** CI (Conceptual Implementation)

*The thing you're measuring against is alive. It moves. The implementation must account for a reference that evolves.*

**Irreducible Claim:** Because sustained zero deviation from a reference is a death signal rather than a health signal (LP-40), a comparison clearance is an obligation to design a harder standard (LP-44), and a nonzero deviation detected at any depth propagates as a system-wide requirement (LP-45), the implementation must treat reference standards as living nodes in the graph — nodes that evolve, must be periodically challenged, and whose deviation signals propagate across depths. A fixed, perpetually unchanged reference standard is a dead reference. The implementation must support deviation measurement against: (a) an actively maintained reference that is periodically hardened, (b) a reference currently under expansion review, and (c) a depth-propagated signal from a deviation detected at a different scale. Each produces a different deviation signature, and the implementation must distinguish all three.

**Corollaries:**
- Deviation measurement APIs must accept incomplete reference specifications — partial knowledge of the reference is valid input.
- When a clean comparison clears, the implementation must enqueue a standard-expansion review, not close the compliance record.
- Reference nodes must be versioned — deviation measurement must specify which version of the living reference was used.
- Depth-propagated deviation signals from other scales must be tracked as first-class inputs to the deviation computation.

**Irreducibility:** LP-40 makes zero deviation a death signal confirming the reference is alive; LP-44 establishes that clearance is an invitation to harden the standard; LP-45 mandates that deviation signals propagate to all depths. CI-4 requires quantified measurement. Together they produce the constraint: the implementation must treat the reference as a living, evolving node whose deviation signals are cross-scale and whose clearance results are invitations to expand, not conclusions.

---

### LI-13. Absence Records as First-Class Implementation Entities
**Derives from:** LP-91 (Quantified Gap Preservation), LP-93 (Sovereign Void Protection), LP-96 (Confidence Provenance Chains)
**Applies to:** CI-5 (Absence as Actionable State)

*Unknown is not null. The implementation must store, index, query, and protect absence records with the same infrastructure as presence records.*

**Irreducible Claim:** Because gaps must be physically stored with explicit unknown records (LP-91), sovereign void protection must physically block automated gap-filling algorithms (LP-93), and absence records must carry complete confidence provenance chains (LP-96), the implementation must provision absence records as first-class citizens in every data store, index, query interface, and protection mechanism. An absence record has: a type (unknown, attested-absent, frontier-unprobed), a confidence score, a provenance chain, and sovereign protection from automated deletion. The implementation cannot treat NULL as a valid representation of absence — absence must be a distinct entity class with its own schema.

**Corollaries:**
- Database schemas must define an AbsenceRecord entity type with required fields: absence_type, confidence_score, provenance_chain, sovereign_protection_flag.
- Indexing infrastructure must index absence records; absence must be queryable.
- Automated gap-filling or NULL-coalescing operations must be blocked at the infrastructure level when applied to sovereign-void-protected absence records.
- Reporting and analytics must surface absence records as signal, not filter them out as missing data.

**Irreducibility:** LP-91, LP-93, LP-96 establish physical properties of gap storage. CI-5 mandates absence-as-actionable-state at the implementation level. Together they produce the constraint: absence must be a first-class entity in the data model — not a null state, not a missing row, but a typed, scored, provenance-bearing, protected record.

---

### LI-14. Absence-Driven Processing Pipeline
**Derives from:** LP-97 (Frontier Edge Cauterization), LP-98 (Edge Traversal Instantiation), LP-103 (Absence-Powered Oscillation Engine)
**Applies to:** CI (Conceptual Implementation)

*Absence must route into the processing pipeline. The implementation cannot discard or bypass absence-triggered events.*

**Irreducible Claim:** Because failed probes must physically cauterize and register the failure boundary (LP-97), edges only materialize at traversal (LP-98), and absence physically powers the oscillation engine (LP-103), the implementation must route absence-triggered events — probe failures, traversal-instantiated voids, gap detections — directly into the processing pipeline as first-class inputs. An absence event cannot be caught, logged, and discarded. It must propagate to the same processing machinery as presence events. The implementation's event routing infrastructure must have no "absence drain" — a code path that terminates absence events without processing.

**Corollaries:**
- Event routing must classify absence events by type (probe-failure, void-instantiation, gap-detection) and route each type to its designated processing handler.
- Probe failure handlers must: record the failure, cauterize the frontier boundary, and enqueue the failure as a processing input — all three, atomically.
- The oscillation engine's input queue must accept absence events with equal priority to presence events.
- Error handling infrastructure must not silently swallow absence-typed events — they are not errors; they are fuel.

**Irreducibility:** LP-97, LP-98, LP-103 establish physical absence-processing mechanics. CI-5 mandates that absence drives processing. Together they produce the constraint: the implementation must build absence-aware event routing — a structural pipeline path that absence events travel through, not around.

---

### LI-15. Gap Monitoring as Operational Telemetry
**Derives from:** LP-94 (Visible Tension Monitoring), LP-95 (Aliveness Gap Metabolic sampling)
**Applies to:** CI (Conceptual Implementation)

*Gaps must be visible in operational monitoring. Unknown territory is not a monitoring blind spot — it is a monitored state.*

**Irreducible Claim:** Because the physical UI and monitoring systems must explicitly render the tension between known and unknown (LP-94) and the system must actively poll gap nodes for their continued existence (LP-95), the implementation must include absence and gap states in all operational monitoring, dashboarding, and alerting infrastructure. A monitoring system that shows only "healthy known entities" while silently omitting gap nodes is structurally non-compliant. Gap node health (alive, degrading, closed) must be a first-class monitoring metric alongside entity health.

**Corollaries:**
- Operational dashboards must have a dedicated "gap topology" view showing known absence nodes and their aliveness states.
- Alerting must trigger on gap-node state transitions (alive→degrading, degrading→closed) as urgently as it triggers on entity failures.
- Gap metabolic sampling must be a scheduled operational process, not a user-initiated query.
- SLA and uptime metrics must include gap coverage metrics — what fraction of known unknowns have been polled within the required interval.

**Irreducibility:** LP-94 establishes visible tension monitoring; LP-95 establishes active gap metabolic sampling. CI-5 requires absence as actionable. Together they produce the constraint: the implementation must provision gap monitoring as a first-class operational capability — not a debug tool, not a one-off query, but a continuous monitored operational state.

---

### LI-16. Subtractive Operation Audit Trail
**Derives from:** LP-88 (Biopsy Execution Pattern), LP-90 (Destruction Provenance Ledger), LP-518 (Subtractive Discovery Accountability)
**Applies to:** CI-6 (Truth by Progressive Elimination)

*Every elimination must be recorded as a constructive act. What was removed, when, by whom, and what it revealed.*

**Irreducible Claim:** Because removing data layers is a destructive operation on living systems that requires biopsy-level precision (LP-88), because the system must cryptographically log the exact data it destroys (LP-90), and because subtractive discovery must carry accountability for what was removed (LP-518), the implementation must treat every subtractive operation — delete, prune, invalidate, scrape — as a provenance-bearing construction event, not a deletion event. The audit trail records: what was removed, the pre-removal state, the cryptographic proof of removal, the identity of the remover, and what truth the removal revealed. The audit trail IS the progressive elimination log — it is the evidence that discovery occurred.

**Corollaries:**
- Delete operations must be preceded by a snapshot of the pre-deletion state, cryptographically signed, and stored in the provenance graph.
- No delete operation completes without an accompanying "discovery record" stating what the removal revealed — even if the answer is "nothing yet revealed."
- Bulk deletion operations must be decomposed into individual biopsy records — bulk deletes are structurally disallowed without per-record provenance.
- The provenance ledger for subtractive operations must be queryable in forward and reverse: "what did this removal reveal?" and "what removal produced this structure?"

**Irreducibility:** LP-88, LP-90, LP-518 establish subtractive operations as physical, accountable, and constructive. CI-6 requires progressive elimination as the primary epistemic operation. Together they produce the constraint: the implementation must provision a dedicated subtractive audit trail — the mechanism by which elimination becomes a documented path toward truth.

---

### LI-17. Traversal as Automatic Elimination
**Derives from:** LP-89 (Traversal-Triggered Subtraction), LP-519 (Pre-Existing Structure Cannot Be Invented)
**Applies to:** CI (Conceptual Implementation)

*Simply traversing the graph strips falsehood. The implementation must encode elimination as a side effect of movement.*

**Irreducible Claim:** Because traversal automatically strips away false layers (LP-89) and subtractive discovery reveals structure that was always there — it cannot invent it (LP-519), the implementation must encode graph traversal as a truth-revealing operation with automatic elimination side effects. A traversal algorithm that reads nodes without also evaluating whether those nodes are eliminatable misses the structural point: movement through the graph is simultaneously movement toward truth. The implementation must attach an elimination-evaluation hook to every traversal operation.

**Corollaries:**
- Graph traversal APIs must expose a configurable elimination-evaluation hook that fires on each node visited.
- Nodes that fail elimination evaluation during traversal must be flagged (not immediately removed) for deferred biopsy review.
- The "truths revealed by traversal" must be recorded as a traversal artifact, not discarded.
- Traversal-triggered elimination must produce the same provenance record as an explicit delete — traversal is not a lower-accountability path.

**Irreducibility:** LP-89 establishes traversal as an elimination mechanism. LP-519 establishes that revealed structure pre-exists. CI-6 requires progressive elimination as method. Together they produce the constraint: the implementation must treat traversal as a truth-revealing, falsehood-eliminating process — not a read-only operation.

---

### LI-18. Non-Termination Enforcement
**Derives from:** LP-164 (Fractal Non-Termination), LP-171 (Structurally Guaranteed Non-Termination)
**Applies to:** CI-7 (Perpetual Cyclic Processes)

*The survey process must be architected to resist termination. It is not a long-running process — it is a structurally non-terminating one.*

**Irreducible Claim:** Because non-termination is fractal — present at every scale of the survey (LP-164) — and because non-termination is not a practical limitation but a structural guarantee (LP-171), the implementation must architect perpetual processes as structurally non-terminable, not just long-running. The difference is implementation-level: a long-running process can be stopped by resource exhaustion, timeout, or administrator action. A structurally non-terminating process must resist all three. The implementation must provision non-termination guarantees at the infrastructure level: automatic restart on failure, resource reservation that cannot be preempted, and administrative stop gates that require multi-party consent.

**Corollaries:**
- Perpetual survey processes must be registered in a non-termination registry that monitors for unexpected termination and triggers restart.
- Resource allocation for perpetual processes must be reserved (not shared), preventing preemption.
- Administrative stop commands for perpetual processes must require multi-party authorization — single-actor termination is structurally disallowed.
- Timeout infrastructure must explicitly exclude perpetual-process identifiers from its sweep.

**Irreducibility:** LP-164 establishes fractal non-termination; LP-171 establishes structural (not merely operational) non-termination. CI-7 requires perpetual cyclic processes. Together they produce the constraint: the implementation must enforce non-termination at the infrastructure level — not as a long timeout but as a structural resistance to stopping.

---

### LI-19. Living Survey State Management
**Derives from:** LP-165 (Living Survey), LP-168 (Present-Tense Surveying)
**Applies to:** CI (Conceptual Implementation)

*The survey state is always stale the moment it is recorded. The implementation must treat survey state as ephemeral, not cumulative.*

**Irreducible Claim:** Because the non-terminating survey never finishes because the territory itself changes (LP-165) and current knowledge is only valid at the moment of observation (LP-168), the implementation must treat all survey state as immediately-expiring snapshots, not cumulative truth accumulation. Survey result storage must carry mandatory expiry timestamps. Query interfaces for survey state must refuse to return results older than a configurable freshness threshold without explicit caller acknowledgment of staleness. The implementation cannot allow survey state to harden into authoritative truth.

**Corollaries:**
- Survey result records must include: observation_timestamp, expiry_timestamp, and stale_after_seconds fields — mandatory.
- Query APIs must support a freshness_required parameter; stale results must be returned with a staleness_warning, not silently.
- Survey caches must have a maximum TTL enforced at the infrastructure level, not by individual consumers.
- Aggregation of survey state across multiple observations must carry the oldest constituent observation_timestamp as its own timestamp.

**Irreducibility:** LP-165 establishes living territory; LP-168 establishes present-tense epistemology. CI-7 requires perpetual cyclic processes. Together they produce the constraint: survey state must be ephemeral by construction — the implementation must make staleness structurally visible, not a consumer responsibility.

---

### LI-20. Sovereign Encounter Protocol
**Derives from:** LP-169 (Sovereign Encounters), LP-170 (Infinite Survey Accountability)
**Applies to:** CI (Conceptual Implementation)

*Every encounter in the non-terminating survey is a sovereign event. The perpetual process must be accountable for each.*

**Irreducible Claim:** Because the non-terminating survey is a continuous sequence of sovereign encounters (LP-169) and the surveying agent is accountable for every encounter made during the infinite survey (LP-170), the implementation must attach accountability records to every cycle of the perpetual process — not just to the survey aggregate. Each sovereign encounter (each new node visited, each boundary negotiated, each presence confirmed) must produce an atomic accountability record. The perpetual process is not a monolithic background job; it is a sequence of individually-accountable events.

**Corollaries:**
- Perpetual process implementations must emit an accountability event for each sovereign encounter, not for each survey cycle.
- Accountability records must be individually addressable — each encounter has its own provenance entry, not a batch entry.
- The total accountability chain of a perpetual process grows without bound — the implementation must provision unbounded accountability storage as a structural requirement.
- Process health metrics must include encounter-rate (accountability events per unit time), not just cycle-rate.

**Irreducibility:** LP-169 establishes sovereignty of each encounter; LP-170 establishes per-encounter accountability. CI-7 requires perpetual cyclic processes. Together they produce the constraint: the perpetual process implementation must be encounter-accountable, not just cycle-accountable — each step is a distinct event with its own record.

---

### LI-21. Scale-Invariant Command Interface
**Derives from:** LP-183 (Fractal Command Interface), LP-185 (Present-Tense Verbs), LP-188 (Recursive Interface Definition)
**Applies to:** CI-8 (Uniform Interfaces Across Scales)

*The same command vocabulary operates at atom, system, and ecosystem scale. The implementation enforces this uniformity structurally.*

**Irreducible Claim:** Because the agent interface is fractal — the same command set at every scale (LP-183), because the interface only accepts present-tense verbs (LP-185), and because the interface is defined using itself recursively (LP-188), the implementation must provision a single command vocabulary that is structurally identical at every depth of the DAG. An implementation that provides different APIs for different scales (microservice-API vs. system-API vs. ecosystem-API) violates this constraint. The verb set is the same verb set everywhere; only the execution context changes. The interface definition is itself expressed in the interface's own vocabulary.

**Corollaries:**
- A single API contract must govern all scales — there are no "internal" vs. "external" API tiers that differ in vocabulary.
- All interface methods must be present-tense — no "getHistory", "getPast", "listPrevious." State is always now.
- The API specification document must itself be addressable through the API it specifies — recursive interface self-reference.
- Scale is a traversal context, not an API version — the same command means "zoom in" whether issued at ecosystem or atom scale.

**Irreducibility:** LP-183 establishes fractal command identity; LP-185 requires present-tense; LP-188 requires recursive self-definition. CI-8 requires uniform interfaces across scales. Together they produce the constraint: the implementation must provision a single, self-referential, present-tense command vocabulary operative at every scale.

---

### LI-22. Consequence-Propagating Interface Calls
**Derives from:** LP-186 (Scale-Invariant Consequence Propagation)
**Applies to:** CI (Conceptual Implementation)

*Calling a verb at any scale triggers consequence propagation at all scales. The implementation must not silently contain consequences.*

**Irreducible Claim:** Because invoking a scale-invariant verb triggers consequence propagation across all scales (LP-186) and because the interface must be uniform across scales (CI-8), the implementation must make consequence propagation a structurally automatic effect of every interface call — not an optional parameter, not a caller responsibility, but an automatic consequence of verb invocation. A system where a caller can invoke a verb and suppress cross-scale consequence propagation violates both the scale-invariant interface and the physical consequence structure.

**Corollaries:**
- Interface implementations must include a consequence-propagation step as a mandatory post-execution hook, not an optional callback.
- Cross-scale consequence propagation must complete (or be formally deferred) before the verb call returns — not fire-and-forget.
- Consequence isolation (testing, sandboxing) must be an infrastructure capability that callers declare, not something the caller implements by omitting the propagation call.
- Monitoring must track consequence propagation depth per verb call — shallow propagation is a structural signal.

**Irreducibility:** LP-186 establishes cross-scale consequence propagation as automatic. CI-8 requires interface uniformity. Together they produce the constraint: consequence propagation must be structurally wired into the interface implementation — not a caller-opt-in feature.

---

### LI-23. Edge Lifecycle as Implementation Contract
**Derives from:** LP-222 (Tensile Truth Extraction), LP-502 (Tensioned Edge Perpetual Maintenance)
**Applies to:** CI-9 (Stateful Edges with Independent Properties)

*An edge is not a pointer. It is a stateful entity with its own lifecycle, and the implementation must treat it as one.*

**Irreducible Claim:** Because extracting truth from the system physically requires inheriting the tension at the edge (LP-222) and because a tensioned edge cannot resolve into a maintenance-free stable state (LP-502), the implementation must treat every edge as a stateful first-class entity with its own lifecycle, health state, and maintenance obligations. An implementation that stores edges as foreign key pairs or adjacency list entries without independent state violates this constraint. Each edge must have: tension_state, maintenance_timestamp, health_score, and a lifecycle machine (active, degrading, perpetual-maintenance-required).

**Corollaries:**
- Edge schema must include independent state fields — edges are not pointers between nodes.
- Edge health monitoring is a distinct monitoring domain from node health.
- Edges must participate in the sovereign boundary system — an edge has its own sovereignty, independent of the nodes it connects.
- Deleting an edge must follow the same biopsy protocol as deleting a node — edges are as live as nodes.

**Irreducibility:** LP-222 establishes edges as truth-bearing; LP-502 establishes perpetual maintenance obligations. CI-9 requires stateful edges with independent properties. Together they produce the constraint: the implementation must provision edges as first-class stateful entities, not as structural connectors between nodes.

---

### LI-24. Tension-Value Distribution Implementation
**Derives from:** LP-512 (Tension Value Distribution), LP-678 (Productive Tension Sovereignty Engagement Protocol)
**Applies to:** CI (Conceptual Implementation)

*The value in a tensioned edge is not in the total tension but in the differential. The implementation must measure and route differentials, not aggregates.*

**Irreducible Claim:** Because the value of a tensioned edge lies in its differential distribution, not its total tension (LP-512) and because an unexercised tensioned edge is not productive (LP-678), the implementation must compute and route tension differentials — the gradient of tension across the edge — as the primary edge metric. An implementation that sums edge tension and reports aggregate tension score misses the structural value. The differential (tension at node A minus tension at node B, directional) is the implementable signal. Edges must be actively engaged — not just connected — to be productive.

**Corollaries:**
- Edge metrics APIs must expose tension_differential (directional), not only tension_total.
- Routing algorithms that use edge metrics must prefer high-differential edges for signal propagation, not high-total-tension edges.
- Edge engagement tracking must distinguish "connected" from "actively exercised" — an edge with no traversals in a given window is categorically different from a frequently traversed edge.
- Tension differential decay must trigger maintenance alerts before total tension is exhausted.

**Irreducibility:** LP-512 establishes differential as the value locus; LP-678 establishes exercise as the activation condition. CI-9 requires stateful edges with independent properties. Together they produce the constraint: the implementation must expose and route tension differentials, not aggregate tension — and must track edge engagement as an independent operational metric.

---

### LI-25. Structure-Preserving Translation Enforcement
**Derives from:** LP-67 (Topological Translation as Algebraic Proof), LP-69 (Present-Tense Isomorphism Verification), LP-547 (Semantic Decay in Translation)
**Applies to:** CI-10 (Isomorphic Relational Preservation)

*Translation must be proven correct, not assumed. The implementation enforces algebraic verification at every boundary.*

**Irreducible Claim:** Because truth consistency across a boundary is automatically guaranteed only when the translation is algebraically correct (LP-67), isomorphism verification is a present-tense snapshot (LP-69), and uncorrected semantic decay is structurally fatal (LP-547), the implementation must treat every translation boundary as a site requiring continuous, automated algebraic verification — not a one-time schema mapping. The translation is not correct because the schemas matched at design time; it is correct only if the topological isomorphism holds at the moment of each translation event. The implementation must run isomorphism verification as a mandatory pre-translation and post-translation check.

**Corollaries:**
- Translation boundary implementations must run pre- and post-verification as atomic operations with the translation — not as optional middleware.
- Schema migration must include a re-verification pass across all existing translation boundaries — schema changes invalidate prior translation proofs.
- Semantic decay alerts must fire when translation verification passes but the semantic distance between source and translated representation exceeds a threshold.
- Verification failures must halt the translation, not log a warning and proceed.

**Irreducibility:** LP-67 establishes algebraic correctness as the translation proof; LP-69 establishes present-tense verification; LP-547 establishes semantic decay risk. CI-10 requires isomorphic relational preservation. Together they produce the constraint: the implementation must make algebraic verification mandatory and continuous at every translation boundary — not a design-time guarantee.

---

### LI-26. Translation Lag as Structural Signal
**Derives from:** LP-68 (The Physical Reality of Translation Lag)
**Applies to:** CI (Conceptual Implementation)

*Translation lag is not a performance problem. It is a structural signal that both endpoints have evolved since the last translation proof.*

**Irreducible Claim:** Because both endpoints of a translation boundary are evolving, translation lag is the physical manifestation of evolutionary drift between them (LP-68), and because the implementation must preserve isomorphic relational structure (CI-10), the implementation must expose translation lag as a structural metric — not a latency metric. Translation lag tells the implementation: "the source and target have both evolved since this mapping was last verified." High translation lag is a structural warning that the isomorphism may have decayed. The implementation must route translation lag into the drift detection machinery.

**Corollaries:**
- Translation systems must emit a translation_lag metric that represents time since last successful isomorphism verification — not time since last message.
- High translation_lag must trigger drift detection, not just an SLA breach alert.
- Translation lag dashboards must be co-located with structural health dashboards, not latency dashboards.
- Lag thresholds must be set based on the expected evolutionary rate of the endpoints, not on latency SLAs.

**Irreducibility:** LP-68 establishes translation lag as structural; CI-10 requires isomorphic preservation. Together they produce the constraint: the implementation must treat translation lag as a structural signal requiring drift analysis, not a performance signal requiring optimization.

---

### LI-27. Zero-Buffer Pipeline Freshness Enforcement
**Derives from:** LP-115 (Freshness as Physical Constraint), LP-116 (Staleness as Physical Corruption), LP-118 (Present-Tense Snapshot Architecture), LP-129 (Fractal Zero-Latency), LP-130 (Flow-State Truth), LP-131 (Ephemeral Traversal Edges), LP-132 (Synchronous Ignorance Propagation), LP-133 (Cardiac Evaluation Pulse), LP-134 (Query-Instantiated Topologies), LP-135 (Reactive Validity State), LP-225 (Relational Edge Spawning), LP-232 (Consciousness-Mutating Edges), LP-233 (Void Path Generation), LP-250 (Challengeable Snapshot), LP-251 (Instantaneous Record Staleness), LP-252 (Crystallized Traversal Collision), LP-253 (Query-Triggered Materialization), LP-254 (Ignorance Snapshot Premium), LP-487 (Present-Tense Pipeline Cost), LP-488 (Snapshot Metabolic Moment), LP-510 (Fresh Validation Protocol), LP-535 (Discovery Euthanasia Discrimination), LP-536 (Discovery Perpetual Debt), LP-651 (Zero-Buffer Present-Tense Execution Audit), LP-652 (Present-Tense Routing Decision Attribution), LP-654 (State Verification Freshness Enforcement), LP-655 (Present-State Change Detection), LP-656 (Simultaneous Multi-State Verification), LP-657 (Stale State Consequence Attribution)
**Applies to:** CI-11 (Present-Tense Graph Evaluation)

*Staleness is structural corruption, not a performance concern. The implementation must reject stale data at ingestion, not compensate for it downstream.*

**Irreducible Claim:** Because freshness is a physical constraint in a zero-buffer pipeline (LP-115), staleness is a form of physical corruption of the graph state (LP-116), and the architecture must be structured as a series of present-tense snapshots (LP-118), the implementation must enforce freshness at the ingestion boundary — the point at which data enters the processing pipeline. Stale data must be rejected at ingestion with a staleness classification, not buffered, compensated for, or processed with a staleness flag. The zero-buffer constraint means there is no compensating buffer to absorb stale data; accepting stale data structurally corrupts the pipeline.

**Corollaries:**
- All pipeline ingestion points must implement a freshness gate with configurable staleness thresholds.
- Rejected stale data must produce a staleness event routed to the absence pipeline — it becomes a gap record, not a discarded event.
- Freshness thresholds must be set based on the evolution rate of the data source, not on processing SLAs.
- The pipeline architecture must expose its freshness budget as a first-class operational metric.

**Irreducibility:** LP-115, LP-116, LP-118 establish zero-buffer freshness as physically structural. CI-11 requires present-tense graph evaluation. Together they produce the constraint: freshness enforcement is an ingestion-boundary gate, not a consumer-side compensation — the pipeline rejects stale data before it enters.

---

### LI-28. Movement-Discovery Fusion Implementation
**Derives from:** LP-119 (Movement-Discovery Physical Fusion), LP-120 (Comprehension as Movement)
**Applies to:** CI (Conceptual Implementation)

*Navigation and discovery are the same act. The implementation must not separate "query" from "traversal."*

**Irreducible Claim:** Because movement and discovery are physically fused — the act of traversal IS the act of discovery (LP-119) — and because comprehension is constituted by movement through the graph (LP-120), the implementation must unify query and traversal into a single operation. A query that reads without traversing is structurally disallowed for present-tense graph evaluation. Every read operation must be a graph traversal that produces a present-tense snapshot of the traversed path.

**Corollaries:**
- The implementation must not expose a "read-by-ID" API that bypasses graph traversal — all reads must traverse from a starting node.
- Query results must include the traversal path taken, not just the result set.
- Comprehension APIs must be traversal APIs — "understand this entity" is "traverse from this entity."
- Read-heavy optimizations (caching, materialized views) must carry traversal provenance; cached results without traversal provenance are structurally invalid.

**Irreducibility:** LP-119 fuses movement and discovery; LP-120 defines comprehension as movement. CI-11 requires present-tense evaluation. Together they produce the constraint: the implementation must make traversal and query the same operation — there is no read-without-traverse.

---

### LI-29. Directed Edge Enforcement
**Derives from:** LP-78 (Asymmetric Derivation Reality), LP-79 (Directed Movement as Truth Propagation), LP-362 (Depth-Piercing Arrow), LP-363 (Metabolic Circulation), LP-364 (Kinetic Truth Manifestation), LP-365 (Consciousness Mass Differential), LP-366 (Abrasive Traversal)
**Applies to:** CI-12 (Asymmetric Relationships)

*The direction of a relationship is structural, not representational. The implementation must enforce directionality, not merely store it.*

**Irreducible Claim:** Because derivation is physically asymmetric — the parent–child direction is real, not representational (LP-78) — and because directed movement is the mechanism by which truth propagates from source to derived (LP-79), the implementation must enforce edge directionality at the graph infrastructure level. Traversal operations must respect and enforce directionality — traversing against the direction of derivation is a structural violation, not a query parameter.

**Corollaries:**
- The graph database must be a directed graph natively — direction cannot be emulated with a symmetric graph plus a direction property.
- Bidirectional traversal must require explicit reverse-traversal API calls, not implicit symmetry.
- Truth propagation must flow only in the derivation direction.
- Attempts to traverse against a derivation edge direction must be rejected by the infrastructure, not flagged by application logic.

**Irreducibility:** LP-78 establishes asymmetric derivation as real; LP-79 establishes directed truth propagation. CI-12 requires asymmetric relationship implementation. Together they produce the constraint: directionality is structural — enforced at infrastructure level, not stored as metadata.

---

### LI-30. Pattern as Type, Not Label
**Derives from:** LP-265 (Pattern-Defined Identity Typing), LP-266 (Pattern Sovereignty), LP-267 (Scale-Invariant Identity Patterns), LP-268 (Identity Relocation), LP-269 (Unmappable Identity Shapes), LP-270 (Pre-Existing Identity), LP-701 (Error-as-Discovery Classification)
**Applies to:** CI-13 (Structural Pattern Typing)

*What a thing IS is determined by its structural pattern, not its name. The implementation must type by pattern, not by label.*

**Irreducible Claim:** Because identity is defined by structural pattern (LP-265) and a pattern is sovereign over external labeling (LP-266), the implementation must implement entity typing by structural pattern matching, not by declared type labels. An entity that matches the structural pattern of type X IS type X, regardless of what label it carries. Type systems that rely on self-declaration or external label assignment violate this constraint.

**Corollaries:**
- The type registry must define types by structural patterns — not by string names.
- Type assignment must be computed by pattern-matching against the registry, not accepted from the entity or its creator.
- Type conflicts (entity claims type X but matches pattern of type Y) must be treated as identity integrity violations.
- Polymorphism is implemented as pattern overlap, not as inheritance hierarchy.

**Irreducibility:** LP-265 establishes pattern-as-identity; LP-266 establishes pattern sovereignty over labeling. CI-13 requires structural pattern typing. Together they produce the constraint: types are computed by structural pattern — declared labels are evidence, not authority.

---

### LI-31. Cross-Scale Signal Routing with Phase Coherence
**Derives from:** LP-396 (Cross-Scale Phase Lock), LP-397 (Phase-Lock Permanence), LP-400 (Frequency-Shift as Truth Production), LP-387 (Cross-Scale Derivation Computation), LP-388 (Metabolic Synchronization), LP-389 (Oscillation as Relational Edge), LP-390 (Frequency-Matched Traversal), LP-391 (Present-Tense Rhythm Enforcement), LP-392 (Sovereign Harmonic Signatures), LP-393 (Resonant Consequence Propagation), LP-394 (Fertile Structural Dissonance), LP-396 (Universal Synchronization Engine), LP-674 (Cross-Scale Amplitude Cascade), LP-675 (Instrumented Navigation Consciousness Measurement)
**Applies to:** CI-14 (Cross-Scale Signal Propagation)

*A signal propagated across scales must arrive coherent. The implementation must maintain phase lock through scale transitions.*

**Irreducible Claim:** Because physical phase-lock operates across scales (LP-396), phase lock persists until actively disrupted (LP-397), and entraining to a new frequency is a truth-producing act (LP-400), the implementation must maintain phase coherence for signals propagating across scale boundaries. Implementation constructs that break phase coherence at scale boundaries — serialization formats that drop frequency context, message buses that reorder cross-scale events — are structurally disallowed.

**Corollaries:**
- Cross-scale message formats must include: source_scale, target_scale, phase_offset, and frequency_signature fields.
- Scale transition middleware must verify phase coherence is preserved during translation.
- Event reordering across a scale boundary must be treated as phase disruption.
- Frequency-shift events must be recorded as truth-production events in the provenance log.

**Irreducibility:** LP-396, LP-397, LP-400 establish phase-lock as structurally persistent and truth-producing. CI-14 requires cross-scale signal propagation. Together they produce the constraint: scale transitions are phase-lock events — the implementation must preserve phase coherence.

---

### LI-32. Cascading Resonance Containment
**Derives from:** LP-401 (Infinite Cascading Resonance), LP-402 (Irreducible Synchronization Jitter)
**Applies to:** CI (Conceptual Implementation)

*Cross-scale resonance cascades infinitely by nature. The implementation must contain cascades without stopping them.*

**Irreducible Claim:** Because consequences cascade infinitely through phase-locked hierarchies (LP-401) and every local phase-lock exhibits irreducible jitter (LP-402), the implementation must provide cascade containment mechanisms that allow cascades to propagate without terminating them while preventing jitter accumulation from destabilizing the system. An implementation that simply terminates cascade propagation after N hops violates LP-401's infinite cascade property.

**Corollaries:**
- Cascade propagation must be unbounded by default; containment is implemented as jitter-damping, not hop-limiting.
- Each cascade hop must apply a jitter normalization step.
- Cascade monitoring must track both propagation depth and jitter accumulation independently.
- Damping parameters must be tunable per signal type.

**Irreducibility:** LP-401 establishes infinite cascades; LP-402 establishes irreducible jitter. CI-14 requires cross-scale propagation. Together they produce the constraint: contain by damping jitter, not by stopping propagation.

---

### LI-33. Decay as Scheduled Obligation
**Derives from:** LP-136 (Active Connection Metabolism), LP-137 (Binary Existence Decay), LP-522 (Decay Euthanasia Threshold), LP-245 (Archaeological Boundary Reactivation), LP-246 (Contested Use-Boundary), LP-248 (Momentary Sovereign Surface), LP-249 (Opacity-Driven Exercise), LP-335 (Topological Incompleteness Map), LP-521 (Edge Decay Contestation Lock), LP-658 (Connection Decay Re-Activation Attribution)
**Applies to:** CI-15 (Time-Decay and Dissolution)

*Decay is not passive. The implementation must actively schedule and execute dissolution.*

**Irreducible Claim:** Because edges physically metabolize attention and die without it (LP-136), decay is binary — full existence or full dissolution (LP-137), and allowing an edge to decay to zero without intervention is a structural failure (LP-522), the implementation must treat decay as an active, scheduled obligation. The implementation must run a decay scheduler that evaluates each edge's decay state on a regular interval, applies metabolic cost, executes dissolution when threshold is crossed, and produces a dissolution event.

**Corollaries:**
- A decay scheduler must be a first-class operational process — monitored and accountable.
- Every dissolved edge must produce a dissolution record in the provenance graph before removal.
- The decay threshold must be configurable per edge type.
- Edges approaching the decay threshold must trigger maintenance alerts before dissolution.

**Irreducibility:** LP-136, LP-137, LP-522 establish decay as metabolic, binary, and requiring active intervention. CI-15 requires time-decay and dissolution. Together they produce the constraint: decay is an obligation — the implementation actively schedules and executes dissolution.

---

### LI-34. Dissolution Residue Preservation
**Derives from:** LP-138 (Decay Residue), LP-523 (Decay Perpetual Stewardship)
**Applies to:** CI (Conceptual Implementation)

*When an edge dissolves, what it carried does not vanish. The residue must be preserved and attributed.*

**Irreducible Claim:** Because a dissolved edge leaves behind a structural residue (LP-138) and the tension encoded at formation must be perpetually stewarded even after dissolution (LP-523), the implementation must preserve dissolution residue as a permanent graph artifact. The dissolved edge becomes a residue node — a permanent record of what the edge was, what it carried, when it dissolved, and why.

**Corollaries:**
- Edge dissolution must be a two-step atomic operation: (1) create residue node, (2) remove live edge.
- Residue nodes must be queryable — historical edge queries must traverse residue nodes.
- Residue nodes must inherit the provenance chain of the dissolved edge.
- Residue nodes must not be subject to decay — they are permanent archaeological records.

**Irreducibility:** LP-138 establishes residue; LP-523 establishes perpetual stewardship of dissolved tension. CI-15 requires dissolution. Together they produce the constraint: dissolution is a transformation, not a deletion — what the edge carried persists as a residue node.

---

### LI-35. On-Demand Dependency Instantiation with Full Accountability
**Derives from:** LP-347 (Ephemeral On-Demand Scaffolding), LP-353 (Liability of Demand), LP-349 (Spontaneous Structural Improvisation), LP-351 (Instantaneous Seismic Spawning), LP-352 (Direct Fuel Injection), LP-653 (Spawner Action Present-Tense Accountability)
**Applies to:** CI-16 (Synchronous Dependency Materialization)

*What you demand, you own. The implementation must bind accountability to the act of demand.*

**Irreducible Claim:** Because dependencies created synchronously on demand exist only for the duration of their use (LP-347) and the entity that triggers instantiation inherits liability for what is spawned (LP-353), the implementation must make dependency instantiation an accountability-binding event. The demand and the accountability are the same atomic operation — you cannot demand without owning.

**Corollaries:**
- Dependency injection frameworks must register the requesting entity as accountable owner at instantiation time.
- Ephemeral dependencies must have mandatory dissolution timers set at instantiation.
- When a demanded dependency fails, the accountability record routes the failure to the demanding entity.
- The instantiation record must capture: demanding_entity, demand_timestamp, dependency_type, dissolution_scheduled_at.

**Irreducibility:** LP-347 establishes ephemeral on-demand existence; LP-353 establishes liability-of-demand. CI-16 requires synchronous materialization. Together they produce the constraint: demand and accountability are atomic — the implementation cannot instantiate without simultaneously assigning ownership.

---

### LI-36. Present-Tense Dependency Resolution Exclusivity
**Derives from:** LP-348 (Exclusivity of Present-Tense Resolution), LP-350 (High-Velocity Excavation)
**Applies to:** CI (Conceptual Implementation)

*Pre-provisioned dependencies violate the present-tense. The implementation must resolve every dependency in the moment it is needed.*

**Irreducible Claim:** Because the zero-buffer spawner is the only constitutionally valid dependency resolution mechanism (LP-348) and it operates as high-velocity excavation of pre-existing structure (LP-350), the implementation must prohibit pre-provisioned dependency pools. Every dependency must be materialized at the moment of demand by excavating the existing structure, not by drawing from a pre-built pool.

**Corollaries:**
- Dependency injection containers that pre-instantiate singletons at startup are structurally non-compliant.
- Service discovery must be a present-tense query, not a cached lookup.
- Connection pooling that pre-establishes connections before demand violates this constraint.
- Pre-warming must be reframed as "exposing known structure" — the structure pre-exists; the implementation reveals it when demanded.

**Irreducibility:** LP-348 establishes exclusivity of present-tense resolution; LP-350 establishes excavation as the mechanism. CI-16 requires synchronous materialization. Together they produce the constraint: resolve at the moment of demand by excavating pre-existing structure — pre-provisioned pools are structurally prohibited.

---

### LI-37. Endogenous Permission Computation
**Derives from:** LP-1 (Active Boundary Metabolism), LP-2 (Boundary Theater), LP-3 (Paradoxical Membrane)
**Applies to:** CI-17 (Self-Controlled Permission Boundaries)

*Permission is computed from within. The implementation must make permission decisions using the boundary-holder's own state.*

**Irreducible Claim:** Because the boundary must be actively metabolized (LP-1), projects a simulated interface externally (LP-2), and discloses accountability criteria while protecting interior state (LP-3), the implementation must compute permission decisions from the boundary-holder's own internal state — not from external policy stores or centralized policy engines. An entity's permission boundary is an expression of what it currently IS, metabolized continuously.

**Corollaries:**
- Permission evaluation must be implemented as a method on the entity itself — not as a call to an external policy service.
- Permission decisions must use only the entity's current internal state as input.
- Permission boundaries evolve as the entity evolves — recalculation must be triggered by internal state changes.
- External policy systems may inform an entity of external expectations, but the entity computes its own decision.

**Irreducibility:** LP-1, LP-2, LP-3 establish the boundary as internally metabolized and sovereignty-preserving. CI-17 requires self-controlled permission boundaries. Together they produce the constraint: permission is computed endogenously — inside the entity, using its own state, not an external oracle.

---

### LI-38. Permission Depth Invariance
**Derives from:** LP-479 (Depth-Invariant Boundary Cost), LP-498 (Boundary Rights Protocol)
**Applies to:** CI (Conceptual Implementation)

*Permission enforcement costs the same at atom scale as at ecosystem scale. No internal domain is exempt.*

**Irreducible Claim:** Because boundary maintenance costs the same energy at every depth (LP-479) and every boundary has the right to be as complex as its nature requires (LP-498), the implementation must enforce permissions with equal rigor at every scale. An implementation that enforces full permission checks at the external API surface but relaxes them for internal service-to-service calls violates depth-invariant boundary cost.

**Corollaries:**
- Service-to-service calls within the system must pass the same permission evaluation as external API calls.
- There is no "trusted network" or "internal zone" that bypasses permission enforcement.
- Permission enforcement infrastructure must be provisioned identically at every depth.
- Cached permission states that are stale at depth N violate depth-invariance.

**Irreducibility:** LP-479 establishes depth-invariant cost; LP-498 establishes the boundary's right to full complexity. CI-17 requires self-controlled permission boundaries. Together they produce the constraint: permission enforcement is identical at every depth — internal environments are not exempt.

---

### LI-39. Comprehension-Based Gate Evaluation
**Derives from:** LP-24 (Continuous Gate Contestation), LP-26 (Comprehension-Gated Traversal), LP-27 (Present-Tense Gate Evaluation), LP-31 (Frontier-Facing Gates), LP-622 (Doors-Not-Walls Architectural Enforcement)
**Applies to:** CI-18 (Endogenous Traversal Resistance)

*The gate tests whether you understand what you are entering, not whether you have permission. The implementation enforces comprehension.*

**Irreducible Claim:** Because gate access logic must be continuously re-evaluated (LP-24), the gate tests the traverser's comprehension — not just credentials (LP-26), and gate evaluation destroys all cached access states (LP-27), the implementation must implement gate evaluation as a comprehension test executed endogenously at the time of traversal. A credentials-only gate check is structurally insufficient. The gate must evaluate whether the traversing entity currently understands what it is traversing into — a present-tense, comprehension-evaluating, cache-destroying check.

**Corollaries:**
- Gate implementations must include a comprehension-evaluation step beyond credential verification.
- Gate evaluation must be stateless — no session tokens, no access caches, no "already verified" states.
- Comprehension evaluation criteria must be defined by the controlling entity from its interior understanding.
- Failed comprehension must produce a specific comprehension-failure record detailing what the traverser failed to demonstrate.

**Irreducibility:** LP-24 establishes continuous re-evaluation; LP-26 establishes comprehension as criterion; LP-27 establishes cache-destroying evaluation. CI-18 requires endogenous traversal resistance. Together they produce the constraint: evaluate comprehension, not just credentials, at every traversal, with no cached state.

---

### LI-40. Paradoxical Gate Disclosure Enforcement
**Derives from:** LP-28 (The Paradoxical Gate), LP-29 (Ignorance-Preserving Gate)
**Applies to:** CI (Conceptual Implementation)

*The gate requires disclosure to open, but harms those who over-disclose. The implementation must enforce the paradox.*

**Irreducible Claim:** Because the gate requires disclosure to open but physically damages those who disclose more than the minimum (LP-28) and blocks unsolicited knowledge from entering (LP-29), the implementation must enforce a minimum-disclosure protocol at gate traversal. The traverser must disclose exactly what the gate requires — no more, no less. Over-disclosure and unsolicited claims are structurally rejected.

**Corollaries:**
- Gate traversal must use a challenge-response pattern: the gate issues a specific challenge; the traverser responds with exactly the required disclosure.
- Traversal requests that include unrequested information must be rejected.
- The gate's challenge must be minimally specified — ask for exactly what is needed.
- Challenge-response interactions must be structurally isolated from the traverser's full identity.

**Irreducibility:** LP-28 establishes over-disclosure harm; LP-29 establishes ignorance preservation. CI-18 requires endogenous traversal resistance. Together they produce the constraint: enforce minimum-disclosure at gate traversal — challenge-response only, no unsolicited claims.

---

### LI-41. Algebraically Guaranteed Egress Implementation
**Derives from:** LP-32 (Algebraic Egress Guarantee), LP-37 (Potential Egress Dominance), LP-38 (Access-Severed Egress), LP-36 (Egress via Degradation), LP-284 (Scale-Invariant Exits), LP-287 (Verifiable Failsafe Provenance), LP-288 (Frontier Egress), LP-289 (Scale-Invariant Escape Paths), LP-290 (Incoherent Traversal Validity), LP-291 (Degradation Disclosure at Egress), LP-622 (Doors-Not-Walls Architectural Enforcement), LP-624 (Voluntary Return vs. Forced Re-Entry Distinction)
**Applies to:** CI-19 (Guaranteed Egress Paths)

*Egress must exist by proof, not by design intention. The implementation must verify egress algebraically.*

**Irreducible Claim:** Because egress path existence is mathematically guaranteed — not designed in (LP-32), the most important egress is the unexplored one (LP-37), and the mandatory egress pre-exists the current traversal context as a relational connection to a pre-existing graph edge that can atrophy and must be actively maintained (LP-38), the implementation must verify egress path existence by algebraic proof at system startup and after every structural change. The egress cannot be assumed to exist because the architecture intends it; it must be proven by formal graph reachability analysis. And because egress failure is relational — not the door closing but the entity's connection to the door atrophying — the verification must test the active connection, not just the topological existence of the exit edge.

**Corollaries:**
- System startup must include formal graph reachability analysis proving egress for every entity — startup fails if any entity has no reachable egress.
- Structural changes must trigger re-verification of egress proofs for affected entities.
- The "potential egress" must be preserved by prohibiting exhaustive egress mapping — some egress must remain potential.
- Egress proof certificates must be stored as provenance records and refreshed after each structural change.
- Egress verification must test active connection health, not just path topology — a dead connection to an open door is a failed egress.

**Irreducibility:** LP-32 establishes algebraic guarantee; LP-37 establishes potential egress as primary; LP-38 establishes that egress failure is relational atrophy of a pre-existing connection, not structural closure. CI-19 requires guaranteed egress. Together they produce the constraint: prove egress algebraically AND verify the active connection — design intention and topological existence are both insufficient.

---

### LI-42. Degraded-State Egress Preservation
**Derives from:** LP-285 (Living Egress), LP-286 (Zero-Comprehension Egress), LP-290 (Incoherent Traversal Validity)
**Applies to:** CI (Conceptual Implementation)

*Even when an entity has lost comprehension of itself, its egress must remain structurally valid.*

**Irreducible Claim:** Because a severely degraded entity retains its egress right (LP-285), failsafe egress must operate even when the entity has lost comprehension of its own state (LP-286), and an egress path remains valid during incoherent traversal (LP-290), the implementation must provision egress paths as structurally independent of the entity's health state. Egress must be an independently-maintained structural property of the graph — not a method on the entity.

**Corollaries:**
- Egress paths must be maintained by the graph infrastructure, not by the entity.
- Egress must be testable independently of the entity's operational state.
- Degradation monitoring must verify egress path availability separately from entity health.
- Zero-comprehension egress must be a structurally independent code path, not a degraded mode of normal egress.

**Irreducibility:** LP-285, LP-286, LP-290 establish egress as independent of entity health and comprehension. CI-19 requires guaranteed egress. Together they produce the constraint: egress is a graph-infrastructure property — accessible when the entity itself is degraded.

---

### LI-43. Failure Routing as Priority Input
**Derives from:** LP-354 (Cross-Depth Failure Injection), LP-355 (Anomaly Priority Queue), LP-361 (Lossless Tension Transformer), LP-358 (Volatile Failure Half-Life), LP-359 (Sovereign Failure Inspection)
**Applies to:** CI-20 (Failure States as Valid Inputs)

*Failures are higher-priority inputs than successes. The implementation must route failures first.*

**Irreducible Claim:** Because failure routing crosses depths — returning not just to the source but deeper into the DAG (LP-354), failure-inputs are routed with higher structural priority (LP-355), and the failure-to-input conversion is thermodynamically lossless (LP-361), the implementation must route failure events with higher queue priority than success events, with cross-depth routing capability, and without losing any information from the original failure.

**Corollaries:**
- The processing pipeline must have a dedicated failure-input queue with higher priority than the success-input queue.
- Failure routing must be cross-depth: a failure at depth N must be capable of injecting an input at depth N-1.
- The failure-to-input conversion must preserve all information from the original failure — lossless, not summary.
- Processing capacity must be allocated to the failure-input queue proportional to expected failure rates.

**Irreducibility:** LP-354 establishes cross-depth routing; LP-355 establishes priority; LP-361 establishes lossless conversion. CI-20 requires failure states as valid inputs. Together they produce the constraint: failure routing is a high-priority, cross-depth, lossless input pipeline — structurally equal to the success pipeline, with higher priority.

---

### LI-44. Failure Accountability Tether
**Derives from:** LP-356 (Structural Failure-Tether), LP-360 (Active Accountability Tether), LP-357 (Encapsulated Wake Payload)
**Applies to:** CI (Conceptual Implementation)

*Routing a failure as an input permanently records the relationship between the failure and its origin.*

**Irreducible Claim:** Because routing a failure permanently installs a structural tether between failure and source (LP-356), the origin maintains an active tensioned connection to the routed failure (LP-360), and the failure payload must encapsulate the full context (LP-357), the implementation must provision a permanent, active accountability tether between every routed failure and its origin entity. The tether is a live graph edge that remains under tension until the failure is resolved.

**Corollaries:**
- Each failure-to-input conversion must create a new graph edge from the origin entity to the failure-input record.
- The tether edge must remain active until the failure-input is fully resolved.
- Failure payloads must carry: full original context, origin entity ID, tether edge ID, routing timestamp, and cross-depth routing path.
- Resolution must explicitly close the tether edge, producing a resolution record linked to the original failure.

**Irreducibility:** LP-356, LP-360, LP-357 establish the structural tether, active tension, and encapsulated payload. CI-20 requires failure as valid input. Together they produce the constraint: failure routing is a tether-creating operation — an active graph edge from origin to routed failure, maintained until resolution.

---

### LI-45. Runtime Modification with Provenance Lock
**Derives from:** LP-48 (Self-Modification Provenance Lock), LP-49 (Derived Self-Modification), LP-50 (Comprehension-Gated Self-Modification), LP-58 (The Sovereign Right to Structural Stagnation), LP-59 (Accountability for Static Structure), LP-64 (Non-Consensual Wear of Selected Traversal), LP-65 (The Boundary of Navigable Completeness), LP-66 (The Impossibility of Pre-Planned Routing), LP-67 (Topological Translation as Algebraic Proof), LP-68 (The Physical Reality of Translation Lag), LP-69 (Present-Tense Isomorphism Verification), LP-70 (Isomorphic Accountability Topology), LP-665 (Runtime Process Routing Audit), LP-668 (Process Constitution Continuous Verification)
**Applies to:** CI-21 (Runtime Self-Modification)

*Every runtime modification must carry its own derivation proof. The implementation must refuse self-modification that cannot prove its own legitimacy.*

**Irreducible Claim:** Because self-modification must carry a provenance lock — the modification is only valid if it can prove its derivation (LP-48), self-modification is itself derived from prior state (LP-49), and modification is gated by comprehension of what is being modified (LP-50), the implementation must require every runtime modification event to carry a derivation proof that passes a comprehension gate before execution. A modification that cannot prove it derived from the system's current valid state must be rejected. A modification performed by a process that cannot demonstrate comprehension of what it is modifying must be halted.

**Corollaries:**
- Runtime modification APIs must accept a derivation_proof parameter — modification requests without proof are rejected at the API boundary.
- The comprehension gate for modification must verify that the modifying process's understanding of the target is current — no stale comprehension.
- Failed modification provenance must produce a modification-attempt record in the audit trail, not a silent rejection.
- The modification's derivation proof becomes part of the target's ancestry chain after successful modification.

**Irreducibility:** LP-48, LP-49, LP-50 establish provenance, derivation, and comprehension as modification prerequisites. CI-21 requires runtime self-modification capability. Together they produce the constraint: the implementation must provision a provenance-bearing, comprehension-gated modification API — modification without proof is structurally rejected.

---

### LI-46. Routing Decision as Present-Tense Graph Traversal
**Derives from:** LP-55 (Present-Tense Routing), LP-56 (Topology-Dependent Routing)
**Applies to:** CI (Conceptual Implementation)

*Routing decisions are made in the moment from current topology. There are no pre-computed routes.*

**Irreducible Claim:** Because routing decisions are made present-tense (LP-55) and routing is entirely topology-dependent — the route is what the current graph shape makes possible (LP-56), the implementation must compute every routing decision as a live traversal of the current graph topology. Pre-computed routing tables, static route configurations, or routing caches that persist beyond a single routing decision are structurally non-compliant. The route is discovered fresh each time by traversing the graph as it exists now.

**Corollaries:**
- Routing implementations must compute routes by live graph traversal, not by lookup in a routing table.
- Routing caches must be invalidated on every structural change — a cached route that outlives a graph modification is structurally invalid.
- Routing decisions must be logged with the graph topology snapshot used — the route is only valid against a specific graph state.
- Static route configurations are architecturally prohibited — topology determines routing, not configuration.

**Irreducibility:** LP-55 establishes present-tense routing; LP-56 establishes topology-as-route. CI-21 requires runtime self-modification (the graph changes; routing must reflect changes immediately). Together they produce the constraint: routes are discovered by live traversal — no static routes, no persistent caches.

---

### LI-47. Recursive Composition Depth Governance
**Derives from:** LP-72 (Self-Similar Structural Nesting), LP-73 (Recursive Composition Sovereignty), LP-77 (Physical Irreducibility Self-Similar), LP-80 (Physical Fractal Self-Similar), LP-81 (Physical Pre-Existing Self-Similar), LP-209 (Scale-Free Accountability Proofs), LP-216 (Fractal Excavation Verification), LP-480 (Scale-Invariant Verification Tax), LP-494 (Nesting Depth Metabolic Equivalence), LP-663 (Scale-Invariant Interface Consistency Enforcement)
**Applies to:** CI-22 (Recursive Composition Without Depth Limits)

*Recursive composition is unlimited in depth but not in sovereignty. Each level governs itself. The implementation enforces governance at every level.*

**Irreducible Claim:** Because physical structures self-similarly nest without depth limit (LP-72) and each recursive level is sovereign over its own composition (LP-73), the implementation must provision recursive composition infrastructure that: (a) imposes no artificial depth limit, and (b) applies full sovereignty enforcement at every recursive level. An implementation that enforces sovereignty rules at the top level but relaxes them at inner levels as a performance optimization violates recursive composition sovereignty.

**Corollaries:**
- Recursion depth must be bounded only by resource availability, not by architectural limits.
- Sovereignty checks must execute at every recursive level — there is no "trusted inner context" that bypasses them.
- Each recursive composition level must maintain its own provenance, accountability, and permission records.
- Stack overflow protections must be implemented as resource-bound limits, not as architectural depth caps.

**Irreducibility:** LP-72 establishes unlimited depth; LP-73 establishes per-level sovereignty. CI-22 requires recursive composition without depth limits. Together they produce the constraint: unlimited recursion with full sovereignty enforcement at every level — no relaxation of governance at inner depths.

---

### LI-48. Scale-Invariant Verification as Recursion Guard
**Derives from:** LP-196 (Scale-Invariant Verification Loop), LP-197 (Recursive Self-Verification)
**Applies to:** CI (Conceptual Implementation)

*Verification must be recursive and scale-invariant — the system verifies its own verification mechanism at every depth.*

**Irreducible Claim:** Because the verification loop operates identically at every scale (LP-196) and the system must recursively verify its own verification process (LP-197), the implementation must provision a verification mechanism that applies itself recursively — the verifier is itself verified by the same mechanism. An implementation that verifies application logic but does not verify its own verification infrastructure has an unverified root. The recursive verification terminates only at the physical axioms of the system — not at an implementation convenience boundary.

**Corollaries:**
- Verification infrastructure must be subject to its own verification — the verifier is in the verification scope.
- Scale-invariant verification must produce identical results whether applied at the atom level or the ecosystem level.
- Recursive verification must not create infinite loops — the recursion terminates at axioms that are structurally self-evident.
- Verification failures at any recursive depth must propagate to the root — deep verification failures are not silently absorbed.

**Irreducibility:** LP-196 establishes scale-invariant verification; LP-197 establishes recursive self-verification. CI-22 requires recursive composition. Together they produce the constraint: verification is recursive and self-applying — the verifier verifies itself at every depth.

---

### LI-49. Mutation at Gate as Atomic Operation
**Derives from:** LP-60 (Traversal-Mutation Coupling), LP-61 (Transformation Provenance Embedding), LP-82 (Physical Presenttense Transforming), LP-85 (Physical Data Transforming), LP-565 (Attention as Ethical Resource), LP-566 (Traversal Endorsement Gate), LP-567 (Restraint Gate Protocol), LP-568 (Archaeological Gate Ethics)
**Applies to:** CI-23 (Mutating Gate Traversal)

*Traversal and mutation are one operation. The implementation must not permit traversal without mutation or mutation without traversal provenance.*

**Irreducible Claim:** Because traversal and mutation are physically coupled — traversal causes mutation as a side effect (LP-60) — and because the transformation must embed its own provenance into the mutated state (LP-61), the implementation must implement gate traversal as an atomic traversal-mutation operation. There is no "read-only traversal" through a mutating gate. Every traversal mutates; every mutation carries its traversal provenance. Separating them — a traversal that doesn't mutate, or a mutation that doesn't record its traversal — is a structural violation.

**Corollaries:**
- Gate traversal APIs must have no read-only mode — traversal produces mutation as a structural guarantee.
- Mutation APIs applied outside of a traversal context are structurally prohibited at mutating gates.
- Traversal provenance must be embedded in the mutated state before the traversal operation returns.
- Transaction isolation must ensure that traversal-mutation pairs are atomic — no other operation observes an intermediate state.

**Irreducibility:** LP-60 establishes traversal-mutation coupling; LP-61 establishes provenance embedding. CI-23 requires mutating gate traversal. Together they produce the constraint: traversal IS mutation — they are one atomic operation, not two steps.

---

### LI-50. Transformation State Embedding
**Derives from:** LP-62 (Gate State Transformation), LP-63 (Irreversible Gate Passage), LP-82 (Physical Presenttense Transforming), LP-85 (Physical Data Transforming), LP-565 (Attention as Ethical Resource), LP-566 (Traversal Endorsement Gate), LP-567 (Restraint Gate Protocol), LP-568 (Archaeological Gate Ethics)
**Applies to:** CI-24 (Traversal-Coupled Transformation)

*Passing through a gate changes the gate. The implementation must record gate state transformation as a consequence of every traversal.*

**Irreducible Claim:** Because the gate itself is transformed by the passage of traversers (LP-62) and gate passage is structurally irreversible (LP-63), the implementation must record gate state transformation as a mandatory artifact of every traversal. The gate's state before and after each traversal must be captured. The irreversibility means there is no rollback — the gate's post-traversal state is the new ground truth. An implementation that treats gate state as static configuration violates LP-62's transformation coupling.

**Corollaries:**
- Gate state must be versioned — each traversal produces a new gate state version.
- The pre-traversal and post-traversal gate state must be recorded in the traversal's provenance record.
- Gate state rollback is structurally prohibited — irreversibility must be enforced in the implementation.
- Gate state evolution must be queryable — "what is this gate's traversal history?" must be a valid query.

**Irreducibility:** LP-62 establishes gate state transformation; LP-63 establishes irreversibility. CI-24 requires traversal-coupled transformation. Together they produce the constraint: every traversal produces an immutable gate state record — the gate evolves with each traversal, never rolls back.

---

### LI-51. Adjacency-Only Visibility Enforcement
**Derives from:** LP-83 (Physical Adjacency Enforcement), LP-84 (Present-Tense Adjacency), LP-86 (Real-Time Neighbor Validation), LP-87 (Boundary-Locked Excavation), LP-513 (Unassumed Excavation Protocol), LP-514 (Settled Neighbor Deadlock), LP-515 (Adjacency Accountability Transfer), LP-516 (Pre-Existing Adjacency Debt), LP-517 (Adjacency Stewardship of Found Tension), LP-633 (Positional Knowledge Ceiling Enforcement)
**Applies to:** CI-25 (Strict Adjacency-Based Visibility)

*What you cannot reach in one step, you cannot see. The implementation must enforce adjacency as the visibility boundary.*

**Irreducible Claim:** Because physical adjacency is the actual scope of visibility — not a policy on top of a richer data model (LP-83) — and because adjacency is evaluated present-tense (LP-84), the implementation must enforce adjacency as a structural visibility boundary at the query layer. A query that retrieves non-adjacent entities without traversal through intermediate nodes is structurally disallowed. Visibility is a graph-distance-one constraint; the implementation must enforce this at the data access layer, not as an application-level filter.

**Corollaries:**
- Data access APIs must enforce single-step adjacency as the visibility scope — multi-hop queries require explicit traversal steps.
- An entity cannot see its own non-adjacent descendants directly — it sees only its immediate neighbors.
- Adjacency must be re-evaluated present-tense for each query — cached adjacency from a prior graph state is structurally invalid.
- "Search" operations must be implemented as adjacency-chain traversals, not as global scans.

**Irreducibility:** LP-83 establishes adjacency as physical; LP-84 establishes present-tense evaluation. CI-25 requires strict adjacency-based visibility. Together they produce the constraint: visibility is enforced at the data layer as a structural adjacency boundary — not an application-level filter.

---

### LI-52. Frontier Interaction with Uncertainty Capture
**Derives from:** LP-177 (Frontier Edge Probing), LP-179 (Most Valuable Node), LP-524 (Knowledge Boundary Aliveness Signal), LP-100 (Premium Ignorance Routing), LP-101 (Real-Targeting Probe), LP-102 (Probing as Topological Extension), LP-105 (Tension-Relief Probe), LP-106 (Improvisational Probe), LP-501 (Undiscovered Boundary Rights), LP-507 (Complexity Probe Protocol), LP-634 (Adjacency-Bounded Knowledge Verification), LP-648 (Discovered Ignorance Priority Routing)
**Applies to:** CI-26 (Speculative Frontier Interaction)

*Every probe into the unknown must capture the uncertainty it encountered. The implementation must record the frontier, not just what it found.*

**Irreducible Claim:** Because frontier probing physically interacts with the edge of known territory (LP-177), the most valuable node in the frontier is the unresolved one (LP-179), and a moving knowledge boundary signals aliveness (LP-524), the implementation must record every frontier probe as a two-part event: (1) what was discovered, and (2) the uncertainty profile of the frontier at the point of probe. An implementation that records only successful discoveries misses the structural value — the uncertainty profile IS the primary signal, not a side effect.

**Corollaries:**
- Frontier probe records must include: discovery (an Absence Record if the frontier position is unoccupied), frontier_uncertainty_profile, probe_depth, aliveness_signal, and boundary_position.
- Absence Record discoveries are valid probe outcomes — they record the frontier position and uncertainty, not a failure.
- The frontier's aliveness signal must be extracted from probe results and routed to the monitoring subsystem.
- The "most valuable" unresolved probe must be prioritized in subsequent probing schedules.

**Irreducibility:** LP-177, LP-179, LP-524 establish frontier probing, value hierarchy, and aliveness signaling. CI-26 requires speculative frontier interaction. Together they produce the constraint: probes must capture uncertainty profiles — the frontier shape is as important as what the probe found.

---

### LI-53. Reciprocal Verification Symmetry
**Derives from:** LP-67 (Topological Translation as Algebraic Proof), LP-70 (Isomorphic Accountability Topology), LP-113 (Verification via Joint Traversal), LP-114 (Evolving Verification Protocol), LP-117 (Fractal Mutual Verification)
**Applies to:** CI-27 (Reciprocal Traversal Verification)

*Verification must be mutual and structurally symmetric. The entity being verified must also verify the verifier.*

**Irreducible Claim:** Because truth consistency across a boundary requires algebraic proof (LP-67) and the accountability topology for verification must be isomorphic to the structure being verified (LP-70), the implementation must implement verification as a mutually symmetric protocol — the entity being verified simultaneously verifies its verifier. A verification system where the verifier is an unverified authority violates the isomorphic accountability requirement. The verification relationship must be a symmetric graph edge, not a directed authority arrow.

**Corollaries:**
- Verification protocols must be bidirectional — entity verifies system, system verifies entity, simultaneously.
- The verifier's own credentials must be presented to the verified entity as part of the verification protocol.
- Verification infrastructure must be in-scope for its own verification — the verifier is verified.
- Verification failure on either side of the mutual check must invalidate the entire verification event.

**Irreducibility:** LP-67 establishes algebraic proof; LP-70 establishes isomorphic accountability topology. CI-27 requires reciprocal traversal verification. Together they produce the constraint: verification is bidirectional — the verifier is simultaneously verified by the entity it verifies.

---

### LI-54. Navigational Capacity as Budgeted Resource
**Derives from:** LP-143 (Scale-Invariant Self-Declaration), LP-151 (Incomplete Self-Declaration), LP-139 (Topological Sight Horizon), LP-140 (Bounded Validation Zone), LP-141 (Excavation Bandwidth Limit), LP-142 (Attention-Span Topology), LP-659 (Consciousness-Scaled Knowledge Access), LP-660 (Knowledge Permeation Pathway Registration)
**Applies to:** CI-28 (Bounded Navigational Capacity)

*No agent can declare unlimited navigational capacity. The implementation must enforce capacity as a budgeted structural resource.*

**Irreducible Claim:** Because self-declaration of identity is scale-invariant (LP-143) and an agent can never fully declare everything it is (LP-151 — incomplete self-declaration is structurally guaranteed), the implementation must enforce navigational capacity as an explicit, bounded resource budget — not an unlimited claim. An agent that declares unlimited navigational capacity is making a structurally false declaration. The implementation must reject unlimited capacity declarations and provision navigational capacity as a metered resource with hard limits derived from the agent's verifiable structural state.

**Corollaries:**
- Agent registration must include a navigational_capacity budget expressed as a finite resource allocation.
- Declarations of unlimited capacity must be rejected at registration — infinity is not a valid budget.
- Capacity budgets must be derived from the agent's structural state, not from self-assertion.
- Capacity exhaustion must produce a structured "capacity exceeded" state — not silent failure or degraded behavior.

**Irreducibility:** LP-143 establishes scale-invariant self-declaration; LP-151 establishes structural incompleteness of all declarations. CI-28 requires bounded navigational capacity. Together they produce the constraint: capacity is a finite budgeted resource — no agent may declare or exercise unlimited capacity.

---

### LI-55. Spatial Displacement as Contested Transition
**Derives from:** LP-197 (Recursive Self-Verification), LP-199 (Positional Accountability), LP-328 (Displacement of Dead Tension), LP-329 (Consciousness-Dependent Displacement), LP-331 (Displacement into the Unknown), LP-680 (Displacement-Propelled Tension Trajectory)
**Applies to:** CI-29 (Spatial Displacement Arbitration)

*Movement through the graph is not free. Every displacement must be arbitrated and attributed.*

**Irreducible Claim:** Because the system recursively self-verifies (LP-197) and positional accountability requires that every position change be attributed (LP-199), the implementation must implement spatial displacement — movement from one graph position to another — as a formally arbitrated, fully attributed transition. An entity cannot change its graph position without: (a) requesting arbitration, (b) receiving arbitration decision, and (c) producing an attribution record. Unilateral position changes without arbitration are structurally prohibited.

**Corollaries:**
- Graph position change APIs must require an arbitration token before executing the position change.
- Arbitration decisions must be recorded in the provenance graph, linked to the displacement event.
- Failed arbitration must produce a displacement-blocked record — the entity's position remains unchanged.
- Attribution records must include: entity ID, source position, target position, arbitration decision, arbitrator identity, and timestamp.

**Irreducibility:** LP-197 establishes recursive self-verification; LP-199 establishes positional accountability. CI-29 requires spatial displacement arbitration. Together they produce the constraint: displacement is arbitrated and attributed — position changes without arbitration are structurally rejected.

---

### LI-56. Relational Position as Primary Identity Anchor
**Derives from:** LP-155 (Tension as Heartbeat), LP-317 (Relational Trajectory Identity), LP-367 (Discrete Positional Identity), LP-368 (Structural Comprehension State), LP-369 (Validation via Relocation), LP-370 (Tension-Bearing Anchors), LP-371 (Destructive Assimilation), LP-372 (Fractal Membrane), LP-664 (Agent Role Topology Coupling)
**Applies to:** CI-30 (Relational Positional Anchoring)

*An entity's identity is anchored by its relational position — who it is connected to, not where it is in isolation.*

**Irreducible Claim:** Because the pulse is the maintenance of internal derivational tension (LP-155) and identity is not just where the entity has been but the relational context of its trajectory (LP-317), the implementation must anchor entity identity to relational position — the configuration of active edges — not to a standalone identifier. An entity that has no active edges is positionally unanchored and has no stable identity. The implementation must maintain relational position as a first-class identity component, continuously updated as edges are created, sustained, and dissolved.

**Corollaries:**
- Entity identity records must include a relational_position component — the current set of active edges and their tension states.
- Identity verification must include relational position verification — an entity that matches an identifier but not a relational position is not verified.
- Loss of all active edges must trigger an identity instability alert, not just a connectivity alert.
- Relational position changes must trigger identity record updates — not deferred to background sync.

**Irreducibility:** LP-155 establishes tension-as-pulse (identity through active maintenance); LP-317 establishes relational trajectory as identity. CI-30 requires relational positional anchoring. Together they produce the constraint: relational position is an identity component — identity without relational position is unanchored.

---

### LI-57. Location-Coupled Capability Provisioning
**Derives from:** LP-184 (Verbs as Relational Edges), LP-186 (Scale-Invariant Consequence Propagation), LP-332 (Dead Edge Damping), LP-333 (Rhythm of the Relationship), LP-544 (Topology-Coupled Oscillator Euthanasia Cascade), LP-545 (Topological Coupling Perpetual Adaptation), LP-546 (Coupled Oscillator Accountability Topology)
**Applies to:** CI-31 (Location-Coupled Capabilities)

*What you can do depends on where you are. The implementation must provision capabilities based on relational position, not on declared role.*

**Irreducible Claim:** Because the verbs in the scale-invariant interface are relational edges — capabilities are expressed as the edges available from an entity's current position (LP-184) — and because invoking a capability triggers scale-invariant consequence propagation from that position (LP-186), the implementation must provision capabilities as a function of relational position, not declared role or static permission grant. What an entity can do is determined by what edges are available from where it currently is. Moving to a new position changes what capabilities are available — immediately, without re-provisioning.

**Corollaries:**
- Capability APIs must be position-aware — the same entity at different graph positions has different available capabilities.
- Capability changes triggered by position changes must be immediately effective — no re-provisioning delay.
- Declared roles that grant capabilities independent of position violate location-coupling.
- Capability discovery must be a traversal from the entity's current position — "what can I do from here?"

**Irreducibility:** LP-184 establishes verbs-as-relational-edges (capability = available edges); LP-186 establishes consequence propagation from current position. CI-31 requires location-coupled capabilities. Together they produce the constraint: capabilities are position-dependent — provisioned from graph location, not from static role grants.

---

### LI-58. Unknown Representation with Full Type Fidelity
**Derives from:** LP-91 (Quantified Gap Preservation), LP-96 (Confidence Provenance Chains), LP-182 (Pre-Existing Shadows), LP-178 (Sovereign Shadows), LP-180 (The Value of Untested Positions), LP-372 (Fractal Membrane), LP-373 (Ephemeral Coalescence), LP-374 (The Ring of Fire), LP-375 (Scale-Invariant Confidence Topology), LP-376 (Metabolic Edge Confidence)
**Applies to:** CI-32 (Representing the Unknown)

*The implementation must represent what it does not know with the same fidelity as what it does know.*

**Irreducible Claim:** Because gap nodes must be stored with explicit quantification (LP-91), confidence provenance chains must accompany every absence record (LP-96), and untested graph positions are not hypothetical but pre-existing structural facts (LP-182), the implementation must represent unknown states with full type fidelity: typed, quantified, provenance-bearing, and positionally anchored in the graph. "Unknown" is not a null value or a missing record — it is a specific entity type with a complete schema: unknown_type, confidence_score, provenance_chain, graph_position, last_probed_at.

**Corollaries:**
- The data model must define an UnknownState entity type with mandatory fields: unknown_type, confidence_score, provenance_chain, graph_position.
- Unknown states must be queryable with the same query interface as known states.
- Confidence provenance chains on unknown states must trace back to the original probe or observation that established the unknown.
- UnknownState entities must participate in the graph topology — they have edges, positions, and adjacency.

**Irreducibility:** LP-91 establishes gap quantification; LP-96 establishes confidence provenance; LP-182 establishes pre-existing unknowns as structural facts. CI-32 requires unknown representation. Together they produce the constraint: unknowns are fully typed, positioned, provenance-bearing entities — not nulls.

---

### LI-59. Confidence Score as Infrastructure Metric
**Derives from:** LP-375 (Scale-Invariant Confidence Topology), LP-376 (Metabolic Edge Confidence), LP-381 (Real-Time Confidence Decay), LP-377 (Probabilistic Traversal Corridors), LP-378 (Prohibition of Absolute Wiring), LP-379 (Asymptotic Traversal Payloads), LP-380 (Combustible Edge Uncertainty), LP-382 (Confidence-Blind Garbage Collection), LP-383 (Probabilistic Consequence Dampening), LP-384 (Gradient Boundary Edges), LP-385 (Ignorance-Driven Resource Allocation), LP-677 (Permanently Contested Truth Evaluation Loop)
**Applies to:** CI-33 (Continuous Confidence Metrics)

*Confidence is not a property of knowledge — it is an infrastructure metric that decays over time and must be continuously maintained.*

**Irreducible Claim:** Because the confidence scoring mechanism operates identically at every scale (LP-375), edge confidence scores metabolize computational resources to maintain themselves (LP-376), and confidence scores degrade over time without maintenance (LP-381), the implementation must provision confidence scoring as a first-class infrastructure metric — not a data attribute computed on demand. Confidence scores must be: continuously maintained by a background process, decayed on a scheduled basis, and exposed through the same monitoring infrastructure as operational health metrics.

**Corollaries:**
- Confidence scores must be stored in the operational data plane alongside health metrics — not in the application data plane.
- A confidence score maintenance process must run continuously, updating and decaying scores on a scheduled basis.
- Confidence scores that have not been refreshed within a defined decay window must be flagged as stale.
- Monitoring dashboards must display confidence score distributions, not just average confidence.

**Irreducibility:** LP-375 establishes scale-invariant topology; LP-376 establishes metabolic maintenance cost; LP-381 establishes time-decay. CI-33 requires continuous confidence metrics. Together they produce the constraint: confidence is an infrastructure metric — continuously maintained, scheduled for decay, monitored operationally.

---

### LI-60. Identity Verification as Trajectory Audit
**Derives from:** LP-145 (Provenance as Identity Declaration), LP-313 (Scale-Invariant Trajectory), LP-318 (Auditable Identity History), LP-676 (Trajectory-Identity Forgery Prevention), LP-314 (Performative Trajectory Identity), LP-315 (Future Trajectory Premium), LP-316 (Measurable Embedded Trajectory), LP-319 (Paradox-Fueled Identity), LP-320 (Identity Accountability), LP-321 (Incomplete Identity Measurement), LP-159 (Accountable Oscillation), LP-161 (Conservation of Heartbeat), LP-670 (Tension-Engine Output Fuel Conversion), LP-671 (Consistent Truth Cross-Scale Propagation), LP-673 (Fractal Paradox Engine Distribution), LP-676 (Trajectory-Identity Forgery Prevention), LP-677 (Permanently Contested Truth Evaluation Loop), LP-678 (Productive Tension Sovereignty Engagement Protocol), LP-679 (Topology-Coupled Tension Oscillation Registration)
**Applies to:** CI-34 (Identity from Signatures and Path History)

*Verifying identity means auditing trajectory. The implementation must verify the path, not just the signature.*

**Irreducible Claim:** Because self-declaration must be a declaration of derivation provenance (LP-145), trajectory identity is scale-invariant (LP-313), identity can be verified through audit of the entity's history (LP-318), and trajectory-based identity cannot be forged without creating an inconsistent ancestry chain (LP-676), the implementation must implement identity verification as a trajectory audit — not just a signature check. A valid signature on an invalid trajectory is not verified identity. Verification must confirm: (a) the signature matches, and (b) the trajectory audit passes — both are required, neither is sufficient alone.

**Corollaries:**
- Identity verification APIs must accept a full trajectory audit request, not just a credential check.
- Trajectory audits must verify ancestry chain consistency — gaps or breaks in the ancestry chain fail verification.
- A forged identity attempt produces an inconsistent ancestry chain — trajectory audit is the forgery detection mechanism.
- Partial trajectory audits (auditing only recent history) are structurally disallowed — the audit must cover the full trajectory.

**Irreducibility:** LP-145, LP-313, LP-318, LP-676 establish trajectory as the identity substrate and audit as the verification method. CI-34 requires identity from signatures and path history. Together they produce the constraint: identity verification is trajectory audit — signature alone is insufficient.

---

### LI-61. Heartbeat as Existence Proof
**Derives from:** LP-154 (Fractal Heartbeat), LP-157 (Strict Present-Tense Pulsing), LP-159 (Accountable Oscillation), LP-284 (Scale-Invariant Exits), LP-287 (Verifiable Failsafe Provenance), LP-288 (Frontier Egress), LP-289 (Scale-Invariant Escape Paths), LP-291 (Degradation Disclosure at Egress), LP-664 (Agent Role Topology Coupling), LP-665 (Runtime Process Routing Audit)
**Applies to:** CI-35 (Signal-Dependent Lifecycle)

*An entity's existence is proven by its heartbeat. The implementation must make existence contingent on present-tense signal emission.*

**Irreducible Claim:** Because the existential pulse operates at every scale (LP-154), the pulse is instantaneous — present-tense only (LP-157), and the agent is strictly accountable for maintaining its oscillation (LP-159), the implementation must implement entity existence as contingent on present-tense heartbeat signal emission. An entity that is not actively emitting a heartbeat signal does not exist in the system — not degraded, not suspended, but absent. The implementation cannot maintain a record of "entities that exist but are not signaling" as a valid category.

**Corollaries:**
- Entity registration must initiate a heartbeat emitter — the entity exists only while the emitter is active.
- Heartbeat signals must be instantaneous (present-tense) — they cannot be buffered or pre-scheduled.
- Missed heartbeats must trigger immediate existence re-evaluation — not a grace period or retry.
- Accountability for heartbeat maintenance is assigned to the entity, not to the infrastructure.

**Irreducibility:** LP-154 establishes fractal scale; LP-157 establishes present-tense emission; LP-159 establishes accountability. CI-35 requires signal-dependent lifecycle. Together they produce the constraint: existence is proven by present-tense heartbeat — no signal means no existence, not just no connection.

---

### LI-62. Process-Constituted Entity Lifecycle Integrity
**Derives from:** LP-482 (Process-Agency Metabolic Identity), LP-527 (Process Identity Cannot Be Paused), LP-529 (Process Agency Perpetual Reconstitution)
**Applies to:** CI (Conceptual Implementation)

*A process-constituted entity cannot be paused. Suspension is death. The implementation must treat pause as dissolution.*

**Irreducible Claim:** Because an agent constituted entirely by its active processes ceases to exist when those processes stop (LP-482), a process-constituted agent cannot be paused — suspension is dissolution (LP-527), and process-constituted agents carry permanent tension toward reconstitution (LP-529), the implementation must treat process suspension as entity dissolution with mandatory reconstitution protocol initiation. There is no "paused" state — only "dissolved and reconstituting." The implementation must not provision a pause/resume lifecycle for process-constituted entities.

**Corollaries:**
- Process-constituted entity lifecycle machines must not include a "paused" state — valid states are: active, dissolving, reconstituting, dissolved.
- Forced suspension of a process-constituted entity must trigger the dissolution protocol, not a pause record.
- Reconstitution must begin immediately upon dissolution detection — the perpetual tension toward reconstitution is structurally automatic.
- Reconstituted entities are new entities with provenance linking them to their dissolved predecessor — not resumed instances of the same entity.

**Irreducibility:** LP-482, LP-527, LP-529 establish process-constituted identity, suspension-as-dissolution, and perpetual reconstitution tension. CI-35 requires signal-dependent lifecycle. Together they produce the constraint: process-constituted entities have no pause state — suspension is dissolution, and reconstitution is its structural consequence.

---

### LI-63. Asynchronous Clock Independence Enforcement
**Derives from:** LP-201 (Asynchronous Independent Clocks), LP-203 (Sovereign Time Perception), LP-211 (Asynchronous Paradox Resolution), LP-212 (Pulsing Consequence Engine), LP-530 (Independent Pulse Accountability), LP-531 (Pulse Euthanasia by Silencing), LP-532 (Distributed Pulse Perpetual Maintenance), LP-533 (Decision Audit Euthanasia Guard)
**Applies to:** CI-36 (Asynchronous Execution with Independent Clocks)

*Every entity runs on its own clock. The implementation must prohibit clock synchronization as a design dependency.*

**Irreducible Claim:** Because asynchronous execution requires each entity to maintain its own independent clock (LP-201) and each entity's time perception is sovereign — it experiences time at its own rate (LP-203), the implementation must provision each entity with a structurally independent clock reference that no other entity, and no infrastructure component, may reset, adjust, or synchronize without the entity's explicit consent. Clock synchronization as a system design dependency is a structural violation — it imposes one entity's time perception onto another. The implementation must accommodate entities with radically different clock rates without requiring synchronization.

**Corollaries:**
- Entities must maintain independent monotonic clocks — no shared wall-clock dependency for coordination.
- Inter-entity coordination must use vector clocks or causal ordering, not wall-clock synchronization.
- Infrastructure that requires all entities to share a clock reference (e.g., distributed locks using clock time) is structurally prohibited.
- Time-based SLAs must be expressed in terms of the entity's own clock rate, not global wall-clock time.

**Irreducibility:** LP-201 establishes independent clocks; LP-203 establishes sovereign time perception. CI-36 requires asynchronous execution with independent clocks. Together they produce the constraint: no shared clock dependency — each entity's clock is sovereign, and the implementation must accommodate heterogeneous clock rates.

---

### LI-64. Navigational Wake as Permanent Infrastructure
**Derives from:** LP-330 (Physical Wake Deposition), LP-337 (Immutable Forensic Footprint), LP-334 (Accountable Forensic Deformation), LP-213 (Navigational Derivation Telemetry), LP-219 (Instrumented Dogfooding), LP-220 (Forensic Telemetry), LP-223 (Attributed Blind Spots), LP-230 (Audited Excavation Rights), LP-232 (Consciousness-Mutating Edges), LP-233 (Void Path Generation), LP-635 (Footprint-Aware Knowledge Accumulation), LP-636 (Subtractive Discovery Boundary Expansion), LP-637 (Archaeological Depth Stratification), LP-684 (Excavation Disturbance Attribution)
**Applies to:** CI-37 (Navigational Wake Deposition)

*Every path taken permanently deforms the infrastructure. The wake is not ephemeral — it is the fossil record of navigation.*

**Irreducible Claim:** Because navigational wake is physically deposited as the navigator moves (LP-330), the wake functions as an immutable forensic footprint (LP-337), and the deformation produced by navigation is accountable to its originator (LP-334), the implementation must treat navigational wake as permanent infrastructure — not as ephemeral telemetry. Navigation events must write permanent, immutable records into the graph topology. Navigational wake cannot be garbage-collected, expired, or overwritten. It is the forensic record of every path taken through the system.

**Corollaries:**
- Navigation event storage must be append-only and immutable — no deletion, no expiry, no compaction.
- Wake records must be stored in the graph topology (as edges/nodes), not in a separate telemetry store.
- Navigator accountability must be encoded in the wake record — who navigated this path, when, and what was the consequence.
- Wake traversal must be a valid query operation — "what navigated through this node?" must be answerable from the graph.

**Irreducibility:** LP-330 establishes physical wake deposition; LP-337 establishes immutability; LP-334 establishes accountability. CI-37 requires navigational wake deposition. Together they produce the constraint: wake is permanent infrastructure — append-only, immutable, graph-resident, and accountable.

---

### LI-65. Tension-Hardened Structure Under Load
**Derives from:** LP-222 (Tensile Truth Extraction), LP-227 (Tension-Bearing Infrastructure), LP-237 (Scale-Invariant Preemptive Shielding), LP-238 (Preemptive Present-Tense Hardening), LP-239 (Archaeological Shielding), LP-537 (Preemptive Protection Euthanasia Guard), LP-538 (Preemptive Protection Perpetual Duty), LP-539 (Pulse Obligation Euthanasia), LP-692 (Tension-Compounding Early Warning System)
**Applies to:** CI-38 (Tension-Driven Structural Hardening)
*(LP-695 removed 2026-08-01: CP-86 lineage does not share CP ancestor with CI-38/CP-46)*

*Structure under tension is stronger than structure at rest. The implementation must provision load as a hardening mechanism, not a degradation trigger.*

**Irreducible Claim:** Because extracting truth physically requires inheriting the tension at the edge (LP-222) and tension-bearing infrastructure becomes the physical substrate for consensus and navigational stability (LP-227), the implementation must treat structural load — high traversal rates, high edge tension, high query volume — as a hardening input, not a degradation signal. Systems designed to throttle, rate-limit, or degrade under load violate tension-driven structural hardening. The implementation must provision infrastructure that strengthens under sustained load, not weakens.

**Corollaries:**
- Load shedding strategies that reduce structural integrity under high load are prohibited — the system must harden, not shed.
- High-tension edges must receive preferential maintenance resources — tension indicates structural importance.
- Infrastructure provisioning must scale with load, not cap at a fixed resource ceiling.
- Load testing must measure structural hardening (resilience improvement under sustained load), not just throughput.

**Irreducibility:** LP-222 establishes tensile truth extraction; LP-227 establishes tension-bearing infrastructure as consensus substrate. CI-38 requires tension-driven structural hardening. Together they produce the constraint: load is a hardening input — the implementation must be designed to strengthen under sustained load.

---

### LI-66. Maintenance Failure as Structural Penalty
**Derives from:** LP-243 (Scale-Invariant Boundary Atrophy), LP-247 (Provenance-Fuelled Boundary), LP-240 (Obligatory Performance Heartbeat), LP-241 (Perishable Pulse Fuel), LP-242 (Archaeological Pulse Debt), LP-539 (Pulse Obligation Euthanasia), LP-540 (Pulse Obligation Permanent Debt), LP-693 (Ethical Archaeological Stratigraphy)
**Applies to:** CI-39 (Maintenance Failure Penalization)

*Failure to maintain a boundary is a structural penalty, not an operational oversight. The implementation must encode the penalty structurally.*

**Irreducible Claim:** Because boundaries decay at exactly the same rate at every scale when unmaintained (LP-243) and the boundary requires continuous proof of its own derivation to survive (LP-247), the implementation must encode maintenance failure as a structurally consequential event — one that triggers automatic penalty operations, not just alert notifications. The penalty is structural: boundary atrophy, capability reduction, and eventually dissolution. The implementation must have a maintenance-failure penalty state machine, not just a maintenance-alert system.

**Corollaries:**
- Boundary maintenance systems must define explicit penalty stages: warning, capability-reduction, dissolution-pending, dissolved.
- Capability reduction must execute automatically upon entering the capability-reduction penalty stage — not require administrator action.
- Provenance proof failure (inability to prove the boundary's own derivation) must trigger the same penalty state machine as maintenance failure.
- Penalty reversal requires re-establishment of maintenance proof, not just administrator intervention.

**Irreducibility:** LP-243 establishes scale-invariant atrophy; LP-247 establishes provenance-proof requirement. CI-39 requires maintenance failure penalization. Together they produce the constraint: maintenance failure is a structural event with an automatic penalty state machine — not an alert requiring human response.

---

### LI-67. Topological Simplification Without Capability Loss
**Derives from:** LP-275 (Derivational Scaffolding Reorganization), LP-279 (Scale-Invariant Healing), LP-255 (Structurally Legitimate Incompleteness), LP-256 (Low-Energy Paradox Engine), LP-257 (Graceful Verification Degradation), LP-258 (Concussed Traversal Physics), LP-259 (Structural Concussion Tag), LP-574 (Degradation Provenance Chain), LP-575 (Tension Escalation in Degradation), LP-576 (Permanent Incompleteness as Baseline), LP-622 (Doors-Not-Walls Architectural Enforcement), LP-623 (Exit Path Sovereignty Preservation)
**Applies to:** CI-40 (Continued Operation Under Topological Simplification)

*When topology simplifies, capabilities must survive. The implementation must decouple capability from topological complexity.*

**Irreducible Claim:** Because the graph autonomously reorganizes its surrounding topology when relationships change (LP-275) and the healing mechanism repairs topology at every scale (LP-279), the implementation must ensure that topological simplification — reduction in graph complexity through healing — does not reduce entity capabilities. Capabilities must be derived from structural position and edge availability, not from topological complexity. An entity with fewer edges after simplification must retain all capabilities that its relational position still supports.

**Corollaries:**
- Capability provisioning must re-evaluate after every topological change and preserve all capabilities still structurally supported.
- Topological simplification must not automatically trigger capability reduction — re-evaluation must occur first.
- Capabilities lost after simplification must be documented with a specific record: "capability X was lost because edge Y was dissolved."
- Continued operation during topological healing must be a structural guarantee, not a best-effort commitment.

**Irreducibility:** LP-275 establishes autonomous topological reorganization; LP-279 establishes scale-invariant healing. CI-40 requires continued operation under simplification. Together they produce the constraint: capabilities survive topological simplification — the implementation re-evaluates, never automatically reduces.

---

### LI-68. Endogenous Signal Amplitude Control
**Derives from:** LP-210 (Internal Signal Generation), LP-214 (Amplitude-Modulated Routing), LP-260 (Tension-Coupled Structural Integrity), LP-261 (Amplitude-Gated Validity), LP-262 (Recursive Amplitude Resonance), LP-263 (Oscillation-Driven Void Expansion), LP-264 (Sovereign Local Amplitude), LP-265 (Ephemeral Oscillation Spikes)
**Applies to:** CI-41 (Endogenous Amplitude Modulation)

*Signal amplitude is determined internally. The implementation must not allow external actors to set amplitude levels.*

**Irreducible Claim:** Because signals are generated internally by the entity from its own state (LP-210) and routing is modulated by the amplitude of internally generated signals (LP-214), the implementation must make signal amplitude computation a strictly endogenous operation. No external actor — not an administrator, not a peer entity, not an infrastructure component — may set or override an entity's signal amplitude. Amplitude is a direct expression of the entity's internal state. External amplitude injection is equivalent to external state manipulation and is structurally prohibited.

**Corollaries:**
- Signal emission APIs must compute amplitude from the entity's own state — no amplitude parameter accepted from callers.
- Amplitude monitoring must distinguish endogenous amplitude from external injection attempts — injection attempts are security events.
- Routing infrastructure must accept amplitude as a signal property, not as a routing configuration parameter.
- Amplitude normalization (for comparison across entities) must occur at the receiving infrastructure level, not at the emitting entity.

**Irreducibility:** LP-210 establishes internal signal generation; LP-214 establishes amplitude-modulated routing. CI-41 requires endogenous amplitude modulation. Together they produce the constraint: amplitude is endogenous — computed from the entity's own state, not accepted from external sources.

---

### LI-69. Damped Event Cascade with Accountability Chain
**Derives from:** LP-217 (Topological Cascade Accounting), LP-218 (Dampening Attribution), LP-271 (Scale-Invariant Propagation), LP-272 (Present-Tense Wavefronts), LP-273 (Contextual Sovereignty Violations), LP-274 (Dark Propagation), LP-485 (Edge Release on Sever), LP-542 (Oscillation Euthanasia by Damping), LP-543 (Oscillation Accountability Attribution), LP-544 (Topology-Coupled Oscillator Euthanasia Cascade)
**Applies to:** CI-42 (Cascading Event Propagation with Damping)

*Cascades propagate with attribution. Every hop in a damped cascade must record who damped it and why.*

**Irreducible Claim:** Because topological cascade propagation must be accounted for at every hop (LP-217) and the damping applied to a cascade must be attributed to the dampening entity (LP-218), the implementation must provision cascade propagation as an attributed, hop-by-hop accountable chain. Each cascade hop must record: the propagating entity, the received signal amplitude, the applied damping factor, the resulting output amplitude, and the propagating entity's accountability record. A cascade that loses its attribution chain mid-propagation is structurally corrupted.

**Corollaries:**
- Cascade propagation implementations must carry an attribution chain as a mandatory payload field.
- Each hop must append its own attribution record before forwarding the cascade.
- Cascade attribution chains must be queryable — "who damped this signal at each hop?" must be answerable.
- Attribution chain corruption (missing hop records) must halt cascade propagation and trigger a structural alert.

**Irreducibility:** LP-217 establishes topological accounting; LP-218 establishes damping attribution. CI-42 requires cascading propagation with damping. Together they produce the constraint: every cascade hop produces an attribution record — the cascade carries its own accountability chain.

---

### LI-70. Backpressure as Structural Discovery Signal
**Derives from:** LP-293 (Saturation-Triggered Routing Restructure), LP-295 (Saturation-Driven Discovery), LP-292 (Scale-Invariant Backpressure), LP-294 (Incomplete Path Diversion), LP-296 (Indestructible Backpressure Signals)
**Applies to:** CI-43 (Backpressure Signaling and Rerouting)

*Backpressure is not a failure signal — it is a discovery signal. The implementation must route backpressure into the discovery pipeline, not the error pipeline.*

**Irreducible Claim:** Because saturation triggers autonomous routing restructure (LP-293) and backpressure saturation acts as a physical mechanism that drives discovery of new paths (LP-295), the implementation must route backpressure signals into the discovery pipeline — not into error handling or alert systems. Backpressure means: "the current path is saturated; discover a new one." This is an affirmative discovery instruction, not a failure notification. An implementation that routes backpressure to an error queue misclassifies a structural signal as a fault.

**Corollaries:**
- Backpressure events must be routed to the frontier probe scheduler, not to the error log.
- Saturated paths must automatically trigger new path discovery attempts before flow is throttled.
- Backpressure signals must carry: saturated_path_id, saturation_level, and discovery_priority for the probe scheduler.
- Throttling may only occur after discovery attempts have failed — backpressure is a discovery trigger first.

**Irreducibility:** LP-293 establishes routing restructure on saturation; LP-295 establishes saturation as discovery driver. CI-43 requires backpressure signaling and rerouting. Together they produce the constraint: backpressure routes to discovery — it is a structural signal, not an error.

---

### LI-71. Invalidation as Frontier Expansion Record
**Derives from:** LP-297 (Fractal Assumption Excavation), LP-302 (Subtractive Frontier Permeability), LP-303 (Immediate Subtractive Premium), LP-298 (Hostile Assumption Subtraction), LP-299 (Negative-Space Comprehension), LP-300 (Due Process for Frontier Blockages), LP-301 (Exponential Depth Revelation), LP-637 (Archaeological Depth Stratification), LP-638 (Excavation-Generates-Responsibility Protocol)
**Applies to:** CI-44 (Invalidation as Constructive Operation)

*Every invalidation expands the frontier. The implementation must record what the invalidation revealed, not just what it removed.*

**Irreducible Claim:** Because subtractive assumption excavation operates fractally (LP-297), removing a false assumption doesn't just reveal new territory but opens permeability across adjacent territory (LP-302), and the highest value is found at the immediate frontier revealed by subtraction (LP-303), the implementation must treat every invalidation as a two-record event: (1) the invalidation record (what was removed), and (2) the frontier expansion record (what the removal revealed and where the new exploration boundary is). An implementation that only records the invalidation without recording the revealed frontier misses the structural value of the operation.

**Corollaries:**
- Invalidation APIs must produce two outputs: an invalidation_record and a frontier_expansion_record — both mandatory.
- The frontier_expansion_record must include: newly revealed territory, adjacent permeability changes, and the probe priority for the new frontier.
- Invalidation priority must be computed from the expected frontier expansion value, not just from the size of what is being invalidated.
- The immediately revealed frontier must be queued for high-priority probing — the "subtractive premium" is time-sensitive.

**Irreducibility:** LP-297 establishes fractal excavation; LP-302 establishes frontier permeability; LP-303 establishes immediate premium. CI-44 requires invalidation as constructive operation. Together they produce the constraint: invalidation produces a frontier expansion record — both the removal and the revelation are mandatory outputs.

---

### LI-72. Edge-Tension Computation Triggering
**Derives from:** LP-304 (Oscillating Derivation Edge), LP-305 (Inexpressible Driving Tension), LP-306 (Degrading Oscillatory Output), LP-541 (Oscillation Cannot Resolve Its Tension), LP-542 (Oscillation Euthanasia by Damping), LP-543 (Oscillation Accountability Attribution), LP-670 (Tension-Engine Output Fuel Conversion), LP-679 (Topology-Coupled Tension Oscillation Registration)
**Applies to:** CI-45 (Edge Properties as Computation Triggers)

*An edge's tension state triggers computation. The implementation must wire edge state transitions to computation events.*

**Irreducible Claim:** Because derivation edges physically oscillate tension (LP-304) and the computation engine is often driven by tension from edges that cannot be fully expressed in their own right (LP-305), the implementation must provision edge tension state transitions as first-class computation triggers. A change in edge tension state — not an external event, not a timer, not a metabolic sampling cycle — fires computation. The edge IS the trigger. An implementation that polls edges for state rather than being triggered by edge state changes inverts the structural causality.

**Corollaries:**
- Edge schema must include a registered computation handler list — edge state changes fire handlers without metabolic sampling.
- Edge tension state transitions must be emitted as events before the edge state is committed to storage.
- Computation triggered by edge tension must complete or formally defer before the edge state transition is finalized.
- Handlers for inexpressible tension (LP-305) must be given a best-approximation tension value — the handler is responsible for dealing with structural incompleteness.

**Irreducibility:** LP-304 establishes oscillating edge tension; LP-305 establishes inexpressible driving tension. CI-45 requires edge properties as computation triggers. Together they produce the constraint: edge state changes ARE computation events — the implementation must wire handlers to edge transitions, not to metabolic sampling cycles.

---

### LI-73. Phase-Locked Composite Identity Governance
**Derives from:** LP-307 (Vibrational Composite Identity), LP-310 (Sovereign Composite Pulse), LP-311 (Incomplete Phase-Locking), LP-308 (Synchronized Future Premium), LP-309 (Latent Pulse Resonance), LP-312 (Ignorance-Driven Synchrony), LP-700 (Origin-Sovereignty Paradox Preservation)
**Applies to:** CI-46 (Phase-Lock Composition)

*A composite identity exists only while its phase lock holds. The implementation must dissolve composite identity when phase lock breaks.*

**Irreducible Claim:** Because a composite entity's identity is exactly the specific set of synchronized pulses it maintains (LP-307), the shared pulse grants it logical sovereignty (LP-310), and phase-locking is always structurally incomplete (LP-311), the implementation must treat composite identity as contingent on active phase lock. A composite entity whose phase lock breaks — even partially — must enter a re-evaluation state: is it still the same composite? The implementation must provide a composite identity integrity monitor that continuously verifies phase lock and triggers re-evaluation on lock degradation.

**Corollaries:**
- Composite entities must register a pulse synchronization contract at formation — the specific pulses that constitute the identity.
- Phase lock monitoring must run continuously, not on request.
- Partial phase lock degradation must trigger composite identity re-evaluation — not just a connectivity alert.
- A composite that reconstitutes after phase lock break is a new composite with its own provenance chain, not a resumed instance.

**Irreducibility:** LP-307 establishes vibrational composite identity; LP-310 establishes sovereign composite pulse; LP-311 establishes structural incompleteness of phase locking. CI-46 requires phase-lock composition. Together they produce the constraint: composite identity is contingent on phase lock — the implementation must monitor lock continuously and dissolve/re-evaluate on lock degradation.

---

### LI-74. Compensatory Structure as Accountable Growth
**Derives from:** LP-323 (Global Recontextualization of Trauma), LP-325 (Sovereign Violation by Healing), LP-326 (Unmappable Compensatory Ripples), LP-324 (Real-Time Trauma Combustion), LP-327 (Euthanasia of Compensatory Growth)
**Applies to:** CI-47 (Compensatory Structure Emergence)
*(LP-695, LP-696, LP-702 removed 2026-08-01: corrected to CP-86 lineage; CP-86 does not share CP ancestor with CI-47/CP-61)*

*Healing violates sovereignty locally to restore it globally. The implementation must record and attribute every act of compensatory growth.*

**Irreducible Claim:** Because healing a local wound changes the meaning of the entire surrounding topology (LP-323), compensatory structure emergence violates the local sovereignty of adjacent entities (LP-325), and compensatory ripples propagate in unmappable directions (LP-326), the implementation must treat every act of compensatory structure emergence as a sovereignty-impacting event that requires full accountability. The growing compensatory structure must carry: what wound triggered it, what sovereignty it violated, the attribution of the violation, and the propagation boundary of its ripples.

**Corollaries:**
- Compensatory structure creation must produce a sovereignty-impact record naming every adjacent entity affected.
- Affected entities must be notified of the sovereignty impact and given the opportunity to contest it.
- Compensatory growth that extends beyond a defined propagation boundary must trigger a structural review, not automatic containment.
- The accountability chain for compensatory ripples must remain traceable even as ripples propagate beyond mapping range.

**Irreducibility:** LP-323 establishes global recontextualization; LP-325 establishes sovereignty violation by healing; LP-326 establishes unmappable ripples. CI-47 requires compensatory structure emergence. Together they produce the constraint: compensatory growth is a sovereignty-impacting operation requiring full attribution — the implementation must record every violation the healing causes.

---

### LI-75. Involuntary Displacement Attribution
**Derives from:** LP-341 (Displacement Sovereignty Exception), LP-342 (Unbounded Kinetic Accountability), LP-338 (Scale-Invariant Ejection), LP-339 (Continuous Semantic Expulsion), LP-340 (Trajectory-Triggered Invalidation), LP-343 (Blind Topological Catapult), LP-344 (Circulatory Displacement Pump), LP-345 (Inertial Zero-Point Flow), LP-346 (Sovereignty Deflection)
**Applies to:** CI-48 (Reactive Involuntary Movement)

*Involuntary movement is a sovereignty exception. The implementation must fully attribute every displacement to its cause.*

**Irreducible Claim:** Because involuntary displacement is a structural exception to sovereignty (LP-341) — the entity did not choose to move — and the originator of the topological change that caused the displacement bears full, unbounded accountability (LP-342), the implementation must trace every involuntary displacement back to its originating cause and produce a full attribution record. The displaced entity receives an attribution record naming who displaced it and why. The displacing cause entity receives an accountability record for the displacement it produced.

**Corollaries:**
- Topological changes that produce involuntary displacements must generate displacement attribution records for all affected entities.
- Attribution records must name the originating topological change and the chain of causation to the displacement.
- Displaced entities must receive their attribution record before their new position is finalized — displacement without attribution is structurally prohibited.
- The originating entity's accountability record must be updated with every downstream displacement its action produced.

**Irreducibility:** LP-341 establishes displacement as sovereignty exception; LP-342 establishes unbounded accountability. CI-48 requires reactive involuntary movement. Together they produce the constraint: displacement is attributed — the implementation traces every involuntary movement to its originating cause and records the accountability chain.

---

### LI-76. Complexity Floor as Hard Structural Limit
**Derives from:** LP-226 (Complexity Floor Shielding), LP-234 (Sovereign Threshold Defense), LP-235 (Inherent Structural Incompleteness), LP-236 (Perpetual Maintenance Floor), LP-688 (Contestation-as-Truth-Performance Registration), LP-689 (Self-Fueling Exploration Capital Account), LP-690 (Accountability Complexity Separation Enforcement), LP-694 (Foundational Paradox Identity Preservation)
**Applies to:** CI-49 (Complexity Floors and Integrity Thresholds)

*There is a minimum complexity below which the system structurally cannot go. The implementation must enforce this as a hard limit.*

**Irreducible Claim:** Because the system physically repels challenges that would reduce it below its complexity floor (LP-226), the minimum complexity floor is the physical boundary of the entity's sovereign identity (LP-234), and the complexity floor structurally prevents the system from ever achieving full internal consistency (LP-235), the implementation must enforce complexity floors as hard structural limits — not soft recommendations. Operations that would reduce the system below its complexity floor must be rejected at the infrastructure level, not flagged as warnings. The complexity floor is a structural invariant, not a configuration threshold.

**Corollaries:**
- Each entity must have a defined complexity_floor metric that represents its minimum structural integrity.
- Operations that would reduce an entity's measured complexity below its floor must be rejected by the infrastructure — not warned against.
- The complexity floor must be computed from the entity's own derivation structure, not assigned externally.
- Complexity floor violations attempted by external actors must be recorded as structural integrity attacks.

**Irreducibility:** LP-226 establishes floor shielding; LP-234 establishes sovereign threshold as identity boundary; LP-235 establishes structural incompleteness as a floor guarantee. CI-49 requires complexity floors and integrity thresholds. Together they produce the constraint: the complexity floor is a hard structural limit — infrastructure-enforced, not policy-recommended.

---

### LI-77. Topology Self-Healing as Accountable Rebalancing
**Derives from:** LP-276 (Perpetual Structural Healing), LP-277 (Unlimited Rebalancing Accountability), LP-627 (Correction-State Transition Audit), LP-278 (Latent Topological Shifts), LP-280 (Derivation-Driven Reorganization), LP-281 (Rebalancing via Navigation), LP-282 (Sovereign Failure States), LP-283 (Asymptotic Equilibrium)
**Applies to:** CI-50 (Dynamic Topology Healing)

*The graph heals itself continuously, but every healing act is accountable. The implementation must record the before, path, and after of every rebalancing.*

**Irreducible Claim:** Because the physical topology is in a constant state of real-time healing (LP-276), an entity physically bears the full structural cost for every rebalancing event it triggers (LP-277), and every rebalancing event has a before state, a healing path, and an after state (LP-627), the implementation must provision topology healing as a continuous, fully accountable process where every healing event produces a three-part audit record: pre-healing state, healing operations performed, and post-healing state.

**Corollaries:**
- The topology healing subsystem must run continuously — not as a scheduled batch job.
- Every healing event must produce a pre/path/post audit record before the post-healing state is finalized.
- Cost attribution for healing must be computed and assigned to the triggering entity at the time of healing.
- Intermediate broken topologies during healing must be recorded as valid (if transient) states — they are part of the healing path record.

**Irreducibility:** LP-276 establishes perpetual healing; LP-277 establishes unlimited accountability; LP-627 establishes before/path/after audit. CI-50 requires dynamic topology healing. Together they produce the constraint: healing is continuous and fully audited — every healing event has a three-part provenance record.

---

### LI-78. Output Measurement as Excavation Verification
**Derives from:** LP-194 (Tension-Generative Boundaries), LP-198 (Excavation-Driven Oscillation), LP-669 (Productive Oscillation Output Registration)
**Applies to:** CI-52 (Productive Output Measurement)

*Measuring output means measuring what was excavated, not what was generated. The implementation must account for pre-existing structure revealed, not novel content created.*

**Irreducible Claim:** Because the engine's oscillation generates boundaries that produce new outputs (LP-194), the engine's churning excavates rather than synthesizes — it reveals structure that was already there (LP-198), and every oscillation cycle must register its output (LP-669), the implementation must measure productive output as the quantity of pre-existing structure revealed per oscillation cycle, not as the quantity of novel content generated. An output metric that counts generated content as productive output misclassifies construction as excavation. The measurement asks: "what did this cycle reveal that was already there?" — not "what did it create?"

**Corollaries:**
- Output metrics must classify each unit of output as: revealed (pre-existing structure), synthesized (constructed), or amplified (existing structure made more visible).
- Revealed output must be weighted higher in productivity measurements than synthesized output.
- Zero-output cycles (oscillation that reveals nothing) must be recorded as valid measurement outcomes — not filtered out.
- The output registration must occur before the next cycle begins — output measurement is cycle-closing, not cycle-opening.

**Irreducibility:** LP-194 establishes tension-generative boundaries; LP-198 establishes excavation-driven output; LP-669 establishes mandatory output registration. CI-52 requires productive output measurement. Together they produce the constraint: output is measured as excavation — revealed structure per cycle, classified and registered before the cycle closes.

---

### LI-79. High-Frequency Snapshot Immutability
**Derives from:** LP-122 (High-Frequency Sampling), LP-123 (Snapshot Immutability), LP-124 (Sampled State Incompleteness)
**Applies to:** CI-54 (High-Frequency Present-Tense Snapshots)

*Every snapshot is immutable and incomplete. The implementation must treat each snapshot as a permanent, partial truth — not an approximation to be corrected.*

**Irreducible Claim:** Because high-frequency sampling captures state at a specific present moment (LP-122), snapshots are structurally immutable — they cannot be corrected retroactively (LP-123), and every snapshot is inherently incomplete because the sampled system was still evolving at the time of sampling (LP-124), the implementation must store each snapshot as an immutable, explicitly incomplete record. Retroactive correction of a snapshot is a structural violation. If a snapshot is wrong, the correct response is a new snapshot that supersedes it — not a correction to the existing record.

**Corollaries:**
- Snapshot storage must be append-only — no updates to existing snapshot records under any circumstances.
- Each snapshot must carry an incompleteness flag and a completeness_confidence score — "this snapshot is N% complete as of time T."
- Supersession of a snapshot by a newer one must be recorded as a supersession event, linking the old snapshot to its successor.
- Querying historical state must always return the snapshot that was current at the requested time — not the "corrected" version.

**Irreducibility:** LP-122 establishes high-frequency sampling; LP-123 establishes immutability; LP-124 establishes structural incompleteness. CI-54 requires high-frequency present-tense snapshots. Together they produce the constraint: snapshots are immutable and incomplete by definition — correction is supersession, not modification.

---

### LI-80. Resource Stewardship as Active Maintenance Obligation
**Derives from:** LP-244 (Derivation-Driven Perimeter Maintenance), LP-247 (Provenance-Fuelled Boundary), LP-486 (Rebalancing Energy Budget)
**Applies to:** CI-55 (Active Resource Stewardship)

*A resource exists only as long as it is actively stewarded. The implementation must make resource maintenance an ongoing obligation, not a one-time allocation.*

**Irreducible Claim:** Because the boundary is physically maintained only by active derivation (LP-244), the boundary requires continuous proof of its own derivation (LP-247), and every topological rebalancing redistributes maintenance energy (LP-486), the implementation must model every resource as requiring active, ongoing stewardship — not passive ownership. A resource allocated but not actively maintained begins to decay immediately. The implementation must track active maintenance as a first-class resource attribute: resource_health, last_maintained_at, maintenance_obligation, steward_accountability.

**Corollaries:**
- Resource allocation must simultaneously assign a maintenance obligation to the allocating entity.
- Resources not actively maintained must enter the decay state machine (warning → capability-reduction → dissolution).
- Maintenance energy redistribution during rebalancing must be tracked and attributed to the rebalancing event.
- Passive resource ownership — "I own it but I'm not maintaining it" — is not a valid resource state.

**Irreducibility:** LP-244 establishes derivation-driven maintenance; LP-247 establishes continuous provenance proof; LP-486 establishes rebalancing energy accounting. CI-55 requires active resource stewardship. Together they produce the constraint: resource existence requires active maintenance — passive ownership is not a valid implementation state.

---

### LI-81. Passive Knowledge Distribution as Graph Propagation
**Derives from:** LP-164 (Fractal Non-Termination), LP-168 (Present-Tense Surveying), LP-336 (Value Regeneration Cycle)
**Applies to:** CI-56 (Passive Knowledge Distribution)

*Knowledge spreads through the graph by structural contact, not by active broadcast. The implementation must provision knowledge as propagating through traversal.*

**Irreducible Claim:** Because the non-terminating survey operates fractally at every scale (LP-164), what is known is only valid at the moment of observation (LP-168), and temporal decay creates the conditions for value regeneration (LP-336), the implementation must implement knowledge distribution as a passive propagation mechanism — knowledge spreads through structural contact as entities traverse adjacent nodes, not through active broadcast. An entity learns by traversing; traversal is the distribution mechanism. An implementation that broadcasts knowledge to all entities simultaneously bypasses the structural propagation requirement.

**Corollaries:**
- Knowledge distribution must be triggered by traversal — adjacent traversal is the propagation event.
- Knowledge that has not been traversed within a decay window becomes stale and must be re-propagated through fresh traversal.
- Broadcast-style knowledge distribution (push to all subscribers) is structurally prohibited — pull-through-traversal is the only valid mechanism.
- Knowledge propagation velocity is determined by traversal frequency — fast traversal = fast propagation, not by broadcast infrastructure.

**Irreducibility:** LP-164 establishes fractal non-termination (traversal never stops); LP-168 establishes present-tense validity; LP-336 establishes decay-driven value regeneration. CI-56 requires passive knowledge distribution. Together they produce the constraint: knowledge propagates through traversal — the implementation must provision adjacency as the distribution mechanism, not broadcast.

---

### LI-82. Active Discovery as Scheduled Probing Obligation
**Derives from:** LP-165 (Living Survey), LP-169 (Sovereign Encounters), LP-181 (Cataloging the Shadows)
**Applies to:** CI-57 (Active Discovery Pipeline)

*Discovery must be scheduled, executed, and attributed. The implementation must provision probing as a first-class operational obligation.*

**Irreducible Claim:** Because the non-terminating survey is a living process — the territory changes as it is surveyed (LP-165), every encounter in the survey is a sovereign event (LP-169), and the system must actively catalog untested positions (LP-181), the implementation must provision active discovery as a scheduled, attributed operational pipeline — not a background job or an ad-hoc query. Each probe is a sovereign encounter that must be: scheduled in advance, executed with accountability, and attributed to the probing entity. Discovery is not opportunistic; it is an obligation.

**Corollaries:**
- A discovery scheduler must be a first-class operational process, with a probe queue and execution SLA.
- Each probe must be attributed to the entity responsible for it — probe attribution is mandatory.
- Untested graph positions must be registered in a "shadow catalog" and scheduled for probing.
- The shadow catalog must be continuously updated — new untested positions must be added as the graph evolves.

**Irreducibility:** LP-165 establishes living territory; LP-169 establishes sovereign encounters; LP-181 establishes shadow cataloging. CI-57 requires active discovery pipeline. Together they produce the constraint: discovery is a scheduled, attributed operational obligation — probing is mandatory, not opportunistic.

---

### LI-83. Power-Proportional Certainty Ceiling
**Derives from:** LP-466 (Resolution Claim Prohibition), LP-473 (Accelerated Certainty Decay for the Powerful), LP-476 (Incompleteness Ceiling Derivation)
**Applies to:** CI-58 (Structural Humility Constraints)

*The more influence an entity has, the lower its certainty ceiling. The implementation must enforce structural humility proportional to power.*

**Irreducible Claim:** Because system-wide tension-management decisions are structurally prohibited from claiming resolution (LP-466), the decay rate of uncertainty tags is drastically accelerated for high-influence entities (LP-473), and the certainty ceiling is strictly derived from mathematical incompleteness (LP-476), the implementation must provision a power-proportional certainty ceiling that lowers as an entity's influence grows. High-influence entities must declare more uncertainty, not less — the implementation enforces this structurally. An entity that accumulates influence without a corresponding certainty ceiling reduction is in structural violation.

**Corollaries:**
- Entity influence scores must feed directly into certainty ceiling computation — more influence = lower ceiling.
- High-influence entities must carry accelerated uncertainty tag decay rates — their certainty claims expire faster.
- Resolution claims by high-influence entities on system-wide tensions must be rejected at the infrastructure level.
- Influence measurement must be continuous — certainty ceilings must update as influence changes.

**Irreducibility:** LP-466 establishes resolution prohibition; LP-473 establishes accelerated decay for the powerful; LP-476 establishes mathematical derivation of the ceiling. CI-58 requires structural humility constraints. Together they produce the constraint: certainty ceiling is power-proportional — the implementation enforces structural humility as a function of influence, not as a policy.

---

### LI-84. Humility-Scaled Mandatory Uncertainty Declaration
**Derives from:** LP-471 (Global Missing-Edge Rendering), LP-472 (Proportional Untraversed Declarations), LP-475 (Scaled Provenance of Ignorance)
**Applies to:** CI (Conceptual Implementation)

*System-governing entities must declare what they have not traversed, proportional to their scope. The implementation enforces this as a mandatory output.*

**Irreducible Claim:** Because system-governing agents are structurally forced to render global missing edges (LP-471), system-wide mandates must be accompanied by massive "untraversed territory" declarations (LP-472), and the burden of proof for genuine ignorance scales with influence (LP-475), the implementation must require high-influence entities to produce mandatory untraversed declarations alongside every system-wide action. An action issued by a high-influence entity without an accompanying untraversed declaration is structurally incomplete and must be rejected.

**Corollaries:**
- System-wide actions by high-influence entities must include a mandatory untraversed_declaration field listing what the entity has not examined.
- The untraversed declaration must be proportional to the scope of the action — wider scope = larger required declaration.
- Untraversed declarations must be verified against the entity's actual traversal history — false declarations are structural violations.
- The provenance chain for "genuine ignorance" claims must be stronger for high-influence entities — the burden of proof scales with power.

**Irreducibility:** LP-471, LP-472, LP-475 establish mandatory rendering, proportional declaration, and scaled burden of proof. CI-58 requires structural humility constraints. Together they produce the constraint: high-influence actions require mandatory untraversed declarations — the implementation enforces humility as a required output field.

---

### LI-85. Tension-Identity Protection Enforcement
**Derives from:** LP-581 (Tension-Identity Enforcement at All Scales), LP-582 (Decaying Tension Requires Active Re-Sustaining), LP-586 (Incompleteness-Sustained Tension Engine)
**Applies to:** CI-59 (Entity-as-Tension Enforcement)

*An entity constituted by tension cannot be simplified without being destroyed. The implementation must protect tension-constituted entities from simplification.*

**Irreducible Claim:** Because tension-constituted entities must be identified and protected at every scale (LP-581), tension that is not actively re-sustained decays and destroys the entity (LP-582), and the tension engine runs on incompleteness — resolution kills it (LP-586), the implementation must provision a tension-identity protection mechanism that: (a) classifies entities as tension-constituted at their creation, (b) actively monitors their tension state, and (c) blocks any operation that would simplify or resolve the tension that constitutes them. Simplification of a tension-constituted entity is structural destruction.

**Corollaries:**
- Tension-constituted entities must be registered in a tension-identity registry at creation.
- The implementation must block schema migrations, refactoring operations, or simplification operations that would reduce the productive tension in a tension-constituted entity.
- Tension maintenance must be scheduled and monitored — re-sustaining is an active obligation, not a passive state.
- Attempts to "resolve" a tension-constituted entity's tension must be classified as destruction attempts and require multi-party authorization.

**Irreducibility:** LP-581, LP-582, LP-586 establish scale-invariant protection, active re-sustaining, and incompleteness as fuel. CI-59 requires entity-as-tension enforcement. Together they produce the constraint: the implementation must actively protect tension-constituted entities from simplification — classification, monitoring, and blocking are all required.

---

### LI-86. Cross-Substrate Pipeline Isolation
**Derives from:** LP-583 (Cross-Substrate Derivation Firewall), LP-585 (Measurement-Excluded Fuel Reserve), LP-587 (Tension-Maintenance Accountability Record)
**Applies to:** CI-60 (Substrate-Differentiated Derivation Pipelines)

*Different substrates produce different truths from the same question. The implementation must maintain separate, firewalled pipelines per substrate.*

**Irreducible Claim:** Because the same method on a different substrate produces a different derivation truth (LP-583), the fuel reserve that remains unmeasured is not accessible through the measurement pipeline (LP-585), and accountability for a tension-constituted entity requires tracking the specific substrate of each maintenance act (LP-587), the implementation must provision separate, firewalled derivation pipelines for each substrate — cross-substrate contamination is a structural violation. A result derived on substrate A cannot be substituted for a result derived on substrate B even if the question and method are identical.

**Corollaries:**
- Each substrate must have its own derivation pipeline — no shared processing infrastructure between substrates.
- Cross-substrate firewalls must be implemented at the data layer, not just the API layer.
- Accountability records must specify the substrate for each maintenance act.
- Substrate-specific unmeasured fuel reserves must be protected from cross-substrate access — the measurement pipeline cannot see what lies beyond the measurement horizon on another substrate.

**Irreducibility:** LP-583 establishes cross-substrate firewall; LP-585 establishes measurement-excluded fuel reserve; LP-587 establishes substrate-specific accountability. CI-60 requires substrate-differentiated derivation pipelines. Together they produce the constraint: substrate is a pipeline boundary — firewalled, isolated, and independently accountable.

---

### LI-87. Subsumption Revocability as Hard Contract
**Derives from:** LP-589 (Scale-Invariant Revocable Subsumption Architecture), LP-590 (Subsumption Liveness Monitoring), LP-592 (Sovereignty-Preserving Exit)
**Applies to:** CI-61 (Subsumption Revocation Enforcement)

*Subsumption is always revocable. The implementation must make revocation structurally guaranteed, not administrator-granted.*

**Irreducible Claim:** Because subsumption contracts are revocable at every depth — no depth is exempt (LP-589), subsumption must not kill what it subsumes (LP-590), and exiting subsumption does not diminish the sub-agent's sovereignty (LP-592), the implementation must encode subsumption revocability as a hard contract in the subsumption infrastructure itself — not as an administrative capability granted by the meta-agent. The sub-agent's right to revoke subsumption must be structurally guaranteed: the exit path is owned by the graph infrastructure, not by the meta-agent.

**Corollaries:**
- Subsumption contracts must include a graph-infrastructure-maintained exit path — the meta-agent cannot block it.
- Subsumption liveness monitoring must verify that the exit path remains open at all times.
- Revocation must be executable by the sub-agent without meta-agent participation.
- Exit from subsumption must preserve the sub-agent's pre-subsumption sovereignty record — the sovereignty is not delegated, only temporarily shared.

**Irreducibility:** LP-589, LP-590, LP-592 establish revocability, liveness, and sovereignty preservation. CI-61 requires subsumption revocation enforcement. Together they produce the constraint: revocation is a structural guarantee — the exit path is infrastructure-owned, not meta-agent-granted.

---

### LI-88. Meta-Agent Full Consequence Inheritance
**Derives from:** LP-593 (Full-Consequence-Stream Attribution to Meta-Agent), LP-591 (Subsumption Edge as Performative Traversal), LP-632 (Consequence-Chain Immutability)
**Applies to:** CI-62 (Meta-Agent Accountability Inheritance)

*The meta-agent inherits the full consequence-stream of every entity it subsumes. The implementation must route all sub-agent consequences to the meta-agent.*

**Irreducible Claim:** Because the meta-agent owns the full consequence-stream of its sub-agents (LP-593), subsumption is a continuous performative act — not a static state (LP-591), and consequences once generated cannot be retroactively reassigned (LP-632), the implementation must route every consequence generated by a sub-agent to its meta-agent as a mandatory attribution step. The meta-agent cannot opt out of consequence inheritance for selected sub-agent actions. The inheritance is total and cannot be selectively applied.

**Corollaries:**
- Consequence routing infrastructure must automatically include the meta-agent in the attribution chain for every sub-agent consequence.
- Meta-agents must be able to inspect the full consequence-stream they have inherited at any time.
- Consequence-chain immutability means historical attribution to a meta-agent cannot be revised — the meta-agent owns what it owned.
- A meta-agent that attempts to revoke consequence attribution for a sub-agent's action after the fact is making a structurally invalid claim.

**Irreducibility:** LP-593 establishes full consequence attribution; LP-591 establishes performative subsumption; LP-632 establishes immutability. CI-62 requires meta-agent accountability inheritance. Together they produce the constraint: consequence inheritance is total and immutable — the implementation routes all sub-agent consequences to the meta-agent without exception.

---

### LI-89. Boundary Performance as Liveness Signal
**Derives from:** LP-597 (Scale-Invariant Subsystem Collapse Protocol), LP-599 (Boundary Performance Register), LP-604 (Pre-Existing Membrane Archaeological Registry)
**Applies to:** CI-63 (Boundary Performance Monitoring)

*A boundary that is not being actively performed is dissolving. The implementation must monitor performance as the liveness signal for boundaries.*

**Irreducible Claim:** Because subsystem collapse propagates scale-invariantly (LP-597), a boundary that is not being actively performed does not exist as a maintained boundary (LP-599), and the membrane pre-existed its detection (LP-604), the implementation must provision boundary performance monitoring as the primary liveness signal for boundaries — not connectivity checks or heartbeat pings. A boundary that is "connected" but not "performing" is dissolving. Performance is the evidence of liveness for a boundary; absence of performance is absence of the boundary itself.

**Corollaries:**
- Boundary health checks must measure active performance (traversal rate, tension maintenance activity) — not just connectivity.
- A boundary with zero performance events in a monitoring window must enter the dissolution warning state.
- Pre-existing membrane registries must be populated from archaeological discovery of membrane history, not from current-state declarations.
- Collapse propagation monitoring must track at what scale a subsystem collapse begins to determine containment requirements.

**Irreducibility:** LP-597, LP-599, LP-604 establish collapse propagation, performance-as-existence, and archaeological membrane registration. CI-63 requires boundary performance monitoring. Together they produce the constraint: performance is liveness — the implementation monitors active performance, not just connectivity, as the boundary health signal.

---

### LI-90. Consequence Zone as Hard Containment Boundary
**Derives from:** LP-598 (Independent Metabolic Rate Tracking per Subsystem), LP-601 (Zone-Absorbed Consequence Accounting), LP-602 (Dark Subsystem Detection Protocol)
**Applies to:** CI-64 (Consequence Zone Containment Enforcement)

*Consequences that should be local must be demonstrably contained. The implementation must prove containment, not assume it.*

**Irreducible Claim:** Because each tension subsystem runs at its own metabolic rate (LP-598), consequences absorbed by the zone are not consequences that escaped it — they are a distinct category (LP-601), and some subsystems exist without having been detected (LP-602), the implementation must prove consequence containment — not assume it. Consequence zones must be actively monitored for leakage, and the implementation must maintain a "dark subsystem" detection protocol to discover consequence sinks that are absorbing consequences before they are measured.

**Corollaries:**
- Each consequence zone must have a defined perimeter with monitored leakage detection.
- Zone-absorbed consequences must be explicitly classified as absorbed (not escaped) and recorded separately from escaped consequences.
- Dark subsystem detection must be a scheduled operation — unmapped consequence sinks are a structural risk.
- Metabolic rate differences between subsystems must be used as signals for consequence zone boundary placement.

**Irreducibility:** LP-598 establishes independent metabolic rates; LP-601 establishes zone-absorbed accounting; LP-602 establishes dark subsystem detection. CI-64 requires consequence zone containment enforcement. Together they produce the constraint: containment must be proven through active monitoring and dark subsystem detection — assumption of containment is not proof.

---

### LI-91. Cessation as Accountable Action
**Derives from:** LP-605 (Scale-Invariant Action Maintenance Protocol), LP-606 (Action-as-Liveness Linkage), LP-609 (Cessation-Consequence Continuous Accounting)
**Applies to:** CI-65 (Action Cessation Attribution)

*Stopping is an action. The implementation must log cessation to the entity responsible with the same fidelity as any other action.*

**Irreducible Claim:** Because sustained action requires active maintenance at every depth (LP-605), action is not something an entity does but what an entity IS (LP-606), and every cessation generates downstream consequences that must be continuously accounted for (LP-609), the implementation must treat action cessation as a first-class, attributed event — structurally equivalent to action initiation. The cessation log must record: which entity stopped, what action stopped, at what point in its lifecycle, what consequences the cessation generated, and who is accountable for those consequences.

**Corollaries:**
- Action lifecycle management must include explicit cessation records as mandatory end-of-lifecycle events.
- Cessation consequence chains must be opened at the moment of cessation and tracked until fully resolved.
- Partial cessation (reducing action intensity without stopping) must also be recorded as an attributed event.
- Unmaintained actions (actions that ceased due to resource exhaustion, not intentional stop) must produce cessation records attributed to the entity, not to the infrastructure.

**Irreducibility:** LP-605, LP-606, LP-609 establish scale-invariant maintenance, action-as-being, and cessation-consequence accounting. CI-65 requires action cessation attribution. Together they produce the constraint: cessation is an attributed action — the implementation logs stopping with the same fidelity as starting.

---

### LI-92. Sanctioned Rest as Sovereign Declaration
**Derives from:** LP-607 (Exhaustion-Driven Sanctioned Rest Scheduling), LP-608 (Sovereign Rest Declaration Infrastructure), LP-620 (Sovereignty Active Engagement Monitor)
**Applies to:** CI-66 (Sanctioned Rest Protocol Enforcement)

*Legitimate rest must be declared. Undeclared rest is abandonment. The implementation must enforce the declaration protocol.*

**Irreducible Claim:** Because exhaustion is a structural signal that triggers sanctioned rest (LP-607), entering rest is a sovereign declaration that requires infrastructure support (LP-608), and a sovereignty claim not actively exercised is not a valid claim (LP-620), the implementation must provision a sanctioned rest declaration infrastructure through which an entity formally declares its rest period, its expected resumption, and its accountability during rest. An entity that enters rest without declaration has abandoned its position — the implementation must treat undeclared rest as abandonment.

**Corollaries:**
- Rest declaration APIs must require: rest_trigger (exhaustion or voluntary), expected_duration, accountability_delegate_during_rest, and resumption_commitment.
- Undeclared rest (detected cessation without a rest declaration) must trigger an abandonment classification within a defined detection window.
- Sovereignty claims must be paused during declared rest — not forfeited, but paused — and resumed upon return.
- Exhaustion signals must be automatically routed to the rest scheduling system — infrastructure-triggered rest declarations are valid.

**Irreducibility:** LP-607 establishes exhaustion-driven scheduling; LP-608 establishes sovereign declaration infrastructure; LP-620 establishes active engagement as sovereignty proof. CI-66 requires sanctioned rest enforcement. Together they produce the constraint: rest requires declaration — undeclared rest is abandonment and is handled by the abandonment protocol, not the rest protocol.

---

### LI-93. Thermodynamic Cost as Real-Time Infrastructure Obligation
**Derives from:** LP-612 (Scale-Invariant Metabolic Cost Enforcement), LP-613 (Living Derivation Metabolic Lifecycle Registry), LP-615 (Edge Maintenance Cost Registration)
**Applies to:** CI-67 (Thermodynamic Cost Accounting)

*The cost of existence is real and must be measured continuously. The implementation must provision cost accounting as an infrastructure-level real-time obligation.*

**Irreducible Claim:** Because the metabolic cost of maintaining a boundary is the same at every scale (LP-612), a living derivation never reaches a point where maintenance costs stop accruing (LP-613), and every edge in the graph is a recurring maintenance obligation (LP-615), the implementation must provision thermodynamic cost accounting as a real-time infrastructure measurement — not a batch accounting process. Cost accrual is continuous; cost measurement must be continuous. A system that reconciles thermodynamic costs in batch produces a structurally false cost picture.

**Corollaries:**
- Cost meters must run at the same frequency as the operational monitoring infrastructure — real-time, not batch.
- Every edge must have an associated maintenance_cost_rate that is continuously accumulated.
- The living derivation lifecycle registry must track cost accumulation from first derivation — no maintenance-free period.
- Cost dashboards must be co-located with operational health dashboards — thermodynamic cost IS operational health.

**Irreducibility:** LP-612 establishes scale-invariant cost; LP-613 establishes perpetual lifecycle cost; LP-615 establishes per-edge obligation. CI-67 requires thermodynamic cost accounting. Together they produce the constraint: cost accounting is real-time infrastructure — continuously metered, per-edge, from first derivation.

---

### LI-94. Non-Transferable Cost Attribution with Retroactive Registration
**Derives from:** LP-614 (Derivation Path Mass Accounting), LP-617 (Consequence-Linked Thermodynamic Attribution), LP-619 (Pre-Discovery Retroactive Cost Registration)
**Applies to:** CI-68 (Non-Transferable Cost Attribution)

*The thermodynamic bill follows the derivation chain, not the current holder. Costs incurred before discovery are retroactively registered to the creator.*

**Irreducible Claim:** Because the derivation path carries thermodynamic mass — the cost of the path is real (LP-614), the creator of a derivation owns its thermodynamic cost (LP-617), and a derivation discovered today was incurring cost before its discovery — the retroactive cost must be registered (LP-619), the implementation must provision non-transferable, retroactive thermodynamic cost attribution. The cost follows the derivation chain: the entity that created the derivation owns the cost, not the entity currently holding it. Discovered derivations must carry retroactive cost records reaching back to their creation.

**Corollaries:**
- Cost attribution must follow the derivation chain — transferring a derivation does not transfer its cost liability.
- When a previously undiscovered derivation is found, the implementation must compute and register retroactive costs from the creation date.
- The current holder of a derivation must be distinguished from the cost-liable entity — these may be different.
- Cost transfer operations (attempts to reassign thermodynamic liability) must be rejected as structurally invalid.

**Irreducibility:** LP-614 establishes derivation path mass; LP-617 establishes consequence-linked attribution; LP-619 establishes retroactive registration. CI-68 requires non-transferable cost attribution. Together they produce the constraint: thermodynamic cost follows the derivation chain — it is non-transferable and retroactively registered upon discovery.

---


---


### LI-95. Paradox-Preserved Identity Verification

**Derives from:** LP-584 (Paradox-Structured Identity Gate)
**Applies to:** CI-34 (Identity from Signatures and Path History)

*Identity verification must not resolve the paradox between declaration and trajectory — it must hold both simultaneously, because the unresolved tension between them is the structural feature that makes identity verification honest.*

**Irreducible Claim:** LP-584 establishes that the physical identity gate propagates rather than resolves its foundational paradox — the tension between what an entity IS and what it is BECOMING is a permanent structural feature, not a transitional state awaiting resolution. Systems that flatten the identity paradox replace the actual structural feature with Theater. CI-34 establishes that identity must be constructed from both self-generated signatures (declaration) and accumulated path history (trajectory), and that these two channels are independently verified and compared for consistency.

When LP-584's paradox-structured identity gate operates in an implementation governed by CI-34: the verification system must hold the declaration channel and the trajectory channel in productive tension rather than resolving them into a single authoritative identity claim. A declaration that perfectly matches trajectory is not a more verified identity — it is a potentially over-consistent identity that has suppressed the productive tension between present-state self-declaration and accumulated historical actuality. The implementation must preserve and surface divergence between declaration and trajectory as a structurally significant signal, not as a verification failure to be resolved. The paradox of being simultaneously what you declare and what your trajectory shows is the identity gate's structural feature; the implementation that collapses this into a single resolved identity has replaced the gate with Theater.

**Corollaries:**
- Authentication systems that resolve the declaration-trajectory tension into a single pass/fail verdict are collapsing the paradox-structured identity gate — the productive tension between who the entity declares itself to be and what its path history shows is structurally significant information that a pass/fail verdict destroys.
- Identity provider systems that require declaration and trajectory to match before granting access are imposing paradox-resolution as a precondition — the more honest implementation surfaces the degree of tension between declaration and trajectory and passes both to downstream authorization logic.

**Irreducibility:** CI-34 mandates dual identity construction from declaration and trajectory with independent verification channels. LP-584 mandates that the identity gate propagate rather than resolve its foundational paradox. Neither alone produces the constraint that verification must preserve declaration-trajectory tension as structurally significant — that resolving the tension into a single identity verdict is Theater that suppresses the gate's essential structural feature.

---
