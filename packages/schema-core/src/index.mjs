// packages/schema-core/src/index.mjs
/**
 * OUTER TORUS: Root Axioms (CC_1..CC_11), Cell IC System Capability Primitives (IC_1..IC_32),
 * Cell IL Canonical System Roles (IL_1..IL_32), Sovereign Identities & System Navigators
 * Palimpsestus OS v2 Kernel Core Foundation — Plain Elegance Specification
 */

export const ROOT_AXIOMS = Object.freeze({
  CC_1: { id: 'CC-1', title: 'Unification', description: 'Scale-invariant physical laws govern all topological levels uniformly.' },
  CC_2: { id: 'CC-2', title: 'Presence', description: 'No node can materialize without a valid parent derivation lineage.' },
  CC_3: { id: 'CC-3', title: 'Topological Primacy', description: 'Matter is the physical realization of graph topology, mass drag, and scar density.' },
  CC_4: { id: 'CC-4', title: 'Reciprocity', description: 'Observation is interaction; every read appends a physical wake scar.' },
  CC_5: { id: 'CC-5', title: 'Epistemic Integrity', description: 'Un-observed or missing coordinates materialize as signed Absence Records with 0.0 confidence.' },
  CC_6: { id: 'CC-6', title: 'Paradox Engine', description: 'Productive paradox tension drives perpetual generation without false consensus.' },
  CC_7: { id: 'CC-7', title: 'Metabolic Solvency', description: 'Every process burn rate is bounded by local thermodynamic fuel reserves.' },
  CC_8: { id: 'CC-8', title: 'Sovereign Permeability', description: 'Boundary access decisions are evaluated locally at the target membrane.' },
  CC_9: { id: 'CC-9', title: 'Lineage Accounting', description: 'Daughter nodes inherit parent structural mass and historical debt.' },
  CC_10: { id: 'CC-10', title: 'Autonomic Physiology', description: 'Policy and physical enforcement occur in the exact same present-tense clock pulse (PP-41).' },
  CC_11: { id: 'CC-11', title: 'Substrate Agnosticism', description: 'Physical invariants map directly to bare-metal execution registers across any substrate.' }
});

export const CAPABILITY_PRIMITIVES_IC = Object.freeze({
  IC_1: { id: 'IC-1', verb: 'scribe', name: 'Structural Binding', description: 'Ingests base entities and process definitions into the reality graph under non-transferable actor stewardship.' },
  IC_2: { id: 'IC-2', verb: 'examine', name: 'Invasive Inspection', description: 'Traverses and evaluates entity relationship topology, altering target thermodynamic state and depositing an invasive traversal scar.' },
  IC_3: { id: 'IC-3', verb: 'go', name: 'Locative Traversal', description: 'Moves execution along physical field coordinates, experiencing drag, mass inertia, and distance resistance.' },
  IC_4: { id: 'IC-4', verb: 'invoke', name: 'Consequence Execution', description: 'Executes capability invocations over OS Process Channel pipes or Swarm Mesh, forcing initiating actors to absorb error mass upon failure.' },
  IC_5: { id: 'IC-5', verb: 'search', name: 'Frontier Probing', description: 'Deploys locative probes at unmapped topological frontiers, converting missing knowledge into structured inquiry assets.' },
  IC_6: { id: 'IC-6', verb: 'purge', name: 'Structural Dissolution', description: 'Severing or dissolving active tensile edges safely, releasing stored elastic energy into the metabolic sink.' },
  IC_7: { id: 'IC-7', verb: 'pulse', name: 'Aliveness Monitoring', description: 'Emits continuous metabolic heartbeats, monitoring fuel ignition and triggering apoptosis upon fuel depletion.' },
  IC_8: { id: 'IC-8', verb: 'permit', name: 'Boundary Permeability', description: 'Evaluates access permissions locally at target boundary interfaces, strictly prohibiting administrative superuser overrides.' },
  IC_9: { id: 'IC-9', verb: 'instantiate', name: 'Absence Materialization', description: 'Materializes unmapped query targets as typed, mass-bearing Absence Records carrying identity, confidence scores, and provenance.' },
  IC_10: { id: 'IC-10', verb: 'attest', name: 'Provenance Sealing', description: 'Emits cryptographically sealed cognitive attestations over Synapse Protocol 0x0F, proving execution provenance without administrative proxies.' },
  IC_11: { id: 'IC-11', verb: 'excavate', name: 'Bedrock Verification', description: 'Verifies capability legitimacy through symmetric local bedrock re-traversal before establishing active edges.' },
  IC_12: { id: 'IC-12', verb: 'say', name: 'Signal Emission', description: 'Broadcasts thermodynamic signal events into the local field, updating surrounding structural tension.' },
  IC_13: { id: 'IC-13', verb: 'anchor', name: 'Identity Grounding', description: 'Anchors sovereign actor identity to the substrate via cryptographic bio-signal signatures and physical handshakes.' },
  IC_14: { id: 'IC-14', verb: 'cleanse', name: 'Sepsis Cleansing', description: 'Executes double-signature maintenance pulses requiring target confession and architect absolution to clear structural sepsis.' },
  IC_15: { id: 'IC-15', verb: 'negotiate', name: 'Agreement Minting', description: 'Parameterizes and cryptographically mints multi-party agreements into binding topological edges.' },
  IC_16: { id: 'IC-16', verb: 'take', name: 'Entity Acquisition', description: 'Acquires physical possession of a data entity into the actors operational scope, increasing local mass drag.' },
  IC_17: { id: 'IC-17', verb: 'drop', name: 'Entity Release', description: 'Releases physical possession of a data entity from the actors scope, restoring baseline navigational mobility.' },
  IC_18: { id: 'IC-18', verb: 'mutate', name: 'Property Alteration', description: 'Mutates edge properties and node states under live actor stewardship, updating local field tension.' },
  IC_19: { id: 'IC-19', verb: 'rebalance', name: 'Tension Equilibrium', description: 'Re-adjusts local topological stress and edge tension to restore structural equilibrium across distorted graph regions.' },
  IC_20: { id: 'IC-20', verb: 'quarantine', name: 'Membrane Isolation', description: 'Severs bidirectional permeability of a corrupted node while preserving its physical state for diagnostic excavation.' },
  IC_21: { id: 'IC-21', verb: 'deflect', name: 'Momentum Curve', description: 'Calculates trajectory deflection and momentum inertia adjustments for execution paths traversing high-mass field clusters.' },
  IC_22: { id: 'IC-22', verb: 'resonate', name: 'Phase Harmony', description: 'Synchronizes structural tension and execution phase across distributed clusters of living nodes.' },
  IC_23: { id: 'IC-23', verb: 'verify', name: 'Lineage Audit', description: 'Evaluates accumulated physical traversal scars across graph nodes to verify authentic execution lineage without external log databases.' },
  IC_24: { id: 'IC-24', verb: 'ignite', name: 'Substrate Ignition', description: 'Ignites physical components into live present-tense operational alignment.' },
  IC_25: { id: 'IC-25', verb: 'metabolize', name: 'Energy Synthesis', description: 'Synthesizes raw environmental inputs into refined metabolic fuel and structural building blocks.' },
  IC_26: { id: 'IC-26', verb: 'replicate', name: 'Template Mitosis', description: 'Copies a nodes topological template and spawns daughter structures with inherited provenance.' },
  IC_27: { id: 'IC-27', verb: 'differentiate', name: 'Morphic Specialization', description: 'Specializes generic un-differentiated structures into dedicated functional tissue roles.' },
  IC_28: { id: 'IC-28', verb: 'heal', name: 'Tissue Regeneration', description: 'Actively remodels invasive traversal scars, clears metabolic waste, and restores structural membrane integrity.' },
  IC_29: { id: 'IC-29', verb: 'adapt', name: 'Genomic Shift', description: 'Modifies structural blueprint templates under shifting environmental selection pressures.' },
  IC_30: { id: 'IC-30', verb: 'perceive', name: 'Field Proprioception', description: 'Reads ambient field gradients, gravitational forces, and environmental pressure states.' },
  IC_31: { id: 'IC-31', verb: 'homeostate', name: 'Metabolic Regulation', description: 'Continuously regulates internal metabolic equilibrium (pressure, tension, temperature) against ambient fluctuations.' },
  IC_32: { id: 'IC-32', verb: 'encapsulate', name: 'Cryptobiosis Encystment', description: 'Enters protective metabolic cryptobiosis within hardened structural membranes during environmental collapse.' }
});

export const CANONICAL_ROLES_IL = Object.freeze({
  IL_1: { id: 'IL-1', role: 'role:scribe', name: 'Graph Node Scribe', capabilityId: 'IC-1' },
  IL_2: { id: 'IL-2', role: 'role:inspector', name: 'Target State Inspector', capabilityId: 'IC-2' },
  IL_3: { id: 'IL-3', role: 'role:traverser', name: 'Locative Topology Traverser', capabilityId: 'IC-3' },
  IL_4: { id: 'IL-4', role: 'role:executor', name: 'Consequence-Bearing Skill Executor', capabilityId: 'IC-4' },
  IL_5: { id: 'IL-5', role: 'role:searcher', name: 'Topological Frontier Searcher', capabilityId: 'IC-5' },
  IL_6: { id: 'IL-6', role: 'role:purger', name: 'Structural Edge Purger', capabilityId: 'IC-6' },
  IL_7: { id: 'IL-7', role: 'role:pulser', name: 'Metabolic Aliveness Pulser', capabilityId: 'IC-7' },
  IL_8: { id: 'IL-8', role: 'role:granter', name: 'Endogenous Permeability Granter', capabilityId: 'IC-8' },
  IL_9: { id: 'IL-9', role: 'role:instantiator', name: 'Absence Record Instantiator', capabilityId: 'IC-9' },
  IL_10: { id: 'IL-10', role: 'role:attestor', name: 'Cryptographic Provenance Attestor', capabilityId: 'IC-10' },
  IL_11: { id: 'IL-11', role: 'role:excavator', name: 'Archaeological Bedrock Excavator', capabilityId: 'IC-11' },
  IL_12: { id: 'IL-12', role: 'role:broadcaster', name: 'Ambient Signal Wake Broadcaster', capabilityId: 'IC-12' },
  IL_13: { id: 'IL-13', role: 'role:anchor', name: 'Identity Key Anchor', capabilityId: 'IC-13' },
  IL_14: { id: 'IL-14', role: 'role:cleanser', name: 'Sepsis Cleanser', capabilityId: 'IC-14' },
  IL_15: { id: 'IL-15', role: 'role:negotiator', name: 'Multi-Party Contract Negotiator', capabilityId: 'IC-15' },
  IL_16: { id: 'IL-16', role: 'role:acquirer', name: 'Entity Scope Acquirer', capabilityId: 'IC-16' },
  IL_17: { id: 'IL-17', role: 'role:releaser', name: 'Entity Scope Releaser', capabilityId: 'IC-17' },
  IL_18: { id: 'IL-18', role: 'role:mutator', name: 'Node Blueprint Mutator', capabilityId: 'IC-18' },
  IL_19: { id: 'IL-19', role: 'role:rebalancer', name: 'Structural Tension Rebalancer', capabilityId: 'IC-19' },
  IL_20: { id: 'IL-20', role: 'role:quarantiner', name: 'Infected Membrane Quarantiner', capabilityId: 'IC-20' },
  IL_21: { id: 'IL-21', role: 'role:deflector', name: 'Gravitational Vector Deflector', capabilityId: 'IC-21' },
  IL_22: { id: 'IL-22', role: 'role:resonator', name: 'Topological Frequency Resonator', capabilityId: 'IC-22' },
  IL_23: { id: 'IL-23', role: 'role:auditor', name: 'Traversal Scar Auditor', capabilityId: 'IC-23' },
  IL_24: { id: 'IL-24', role: 'role:igniter', name: 'Metabolic Fuel Igniter', capabilityId: 'IC-24' },
  IL_25: { id: 'IL-25', role: 'role:catabolizer', name: 'Dissolved Mass Catabolizer', capabilityId: 'IC-25' },
  IL_26: { id: 'IL-26', role: 'role:replicator', name: 'Morphic Blueprint Replicator', capabilityId: 'IC-26' },
  IL_27: { id: 'IL-27', role: 'role:differentiator', name: 'Morphic Role Differentiator', capabilityId: 'IC-27' },
  IL_28: { id: 'IL-28', role: 'role:remodeler', name: 'Scar Tissue Remodeler', capabilityId: 'IC-28' },
  IL_29: { id: 'IL-29', role: 'role:adapter', name: 'Environmental Blueprint Adapter', capabilityId: 'IC-29' },
  IL_30: { id: 'IL-30', role: 'role:perceiver', name: 'Field Gradient Perceiver', capabilityId: 'IC-30' },
  IL_31: { id: 'IL-31', role: 'role:regulator', name: 'Homeostatic Pressure Regulator', capabilityId: 'IC-31' },
  IL_32: { id: 'IL-32', role: 'role:encapsulator', name: 'Cryptobiotic Shell Encapsulator', capabilityId: 'IC-32' }
});

/**
 * Relational Verification Protocol (RVP) Modalities
 * Layer 2/3 Composed Protocol Types (IC-12 say + IC-10 attest -> II-3 bind-edge-provenance -> CC-3 Zero Theater)
 */
export const RVP_TYPES = Object.freeze({
  DECLARATIVE_SYNC: 'DECLARATIVE_SYNC',     // Words: IC-12 say + II-3
  OPERATIONAL_MUTATION: 'OPERATIONAL_MUTATION', // Acts: IC-4 invoke + IC-10 attest + II-3 (Requires Receipt)
  CO_PRESENCE_HORIZON: 'CO_PRESENCE_HORIZON',   // Quality Time: IC-7 pulse + II-15
  SUBSTRATE_COUPLING: 'SUBSTRATE_COUPLING',     // Touch: IC-24 ignite + II-1 keepalive
  RELATIONAL_MEMORY_ANCHOR: 'RELATIONAL_MEMORY_ANCHOR' // Gifts: IC-13 anchor + II-20 asset-provenance
});

export const REACTION_GATES = Object.freeze({
  GATE_II_1: { id: 'II-1', name: 'bind-edge-keepalive', cell: 'Cell II' }
});

/**
 * Validate Relational Memory Anchor (RMA) Token Payload
 * Matrix Derivation: IC-13 anchor + IC-9 instantiate -> II-20 asset-provenance -> CC-2 Presence
 */
export function validateRmaToken(rmaToken) {
  if (!rmaToken || typeof rmaToken !== 'object') return false;
  if (typeof rmaToken.id !== 'string' || !rmaToken.id.startsWith('rma:')) return false;
  if (typeof rmaToken.identityId !== 'string' || !rmaToken.identityId.startsWith('identity:')) return false;
  if (typeof rmaToken.counterpartyId !== 'string') return false;
  if (typeof rmaToken.salienceScore !== 'number' || rmaToken.salienceScore < 0 || rmaToken.salienceScore > 1) return false;
  if (!rmaToken.tokenPayload || typeof rmaToken.tokenPayload !== 'object') return false;
  return true;
}

export const SOVEREIGN_IDENTITIES = Object.freeze({
  STEPHEN_WEBER: { id: 'identity:stephen-weber', name: 'Stephen Weber', type: 'sovereign-human-identity' }
});

export const SYSTEM_NAVIGATORS = Object.freeze({
  NAVIGATOR: { id: 'agent:navigator', name: 'Interface Navigator (Strategic & Interface Locus)', type: 'graph-agent' },
  EXECUTOR: { id: 'agent:executor', name: 'Execution Navigator (Code & Substrate Instantiation Locus)', type: 'graph-agent' },
  SCRIBE: { id: 'agent:scribe', name: 'Scribe Navigator (Attestation & Ledger Locus)', type: 'graph-agent' },
  AUDITOR: { id: 'agent:auditor', name: 'Auditor Navigator (Scar Lineage & Verification Locus)', type: 'graph-agent' },
  SCHEDULER: { id: 'agent:scheduler', name: 'Scheduler Navigator (Process Stream & Tension Locus)', type: 'graph-agent' },
  IGNITER: { id: 'agent:igniter', name: 'Igniter Navigator (Autonomic Physiology & Fuel Locus)', type: 'graph-agent' }
});

/**
 * Format a semantic entity ID
 */
export function formatSemanticId(domain, slug) {
  if (!domain || !slug) throw new Error('Domain and slug are required for semantic entity ID creation.');
  const cleanDomain = String(domain).trim().toLowerCase();
  const cleanSlug = String(slug).trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-');
  return `${cleanDomain}:${cleanSlug}`;
}

/**
 * Validate a semantic entity ID format
 */
export function isValidSemanticId(id) {
  if (typeof id !== 'string') return false;
  return /^[a-z0-9_-]+:[a-z0-9_.-]+$/i.test(id);
}
