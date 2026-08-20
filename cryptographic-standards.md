# Cryptographic Standards Architecture

This document formally defines the active cryptographic standards governing the Palimpsestus Operating System's polymorphic peer-to-peer (PP2PP) swarm mesh and QRB substrate.

## Overview
The OS enforces strict, post-quantum cryptographic standards for all entity signatures, process attestations, and Swarm Nerve TCP payload validation (Gate 8). These standards act as fundamental structural laws that are synced universally across all active memory nodes.

## Standard Implementations

### ML-DSA-65 (Active)
* **Status**: ACTIVE
* **Description**: The primary active Post-Quantum Cryptographic standard for the Palimpsestus OS. All active entities, agent signatures, and system attestations MUST be signed using ML-DSA-65.
* **Selection Rationale**: Chosen for its balance of high-throughput validation and post-quantum resistance, perfectly matching the immediate metabolic needs of a continuously operating Swarm Mesh.
* **Deprecates**: ML-DSA-44

### ML-DSA-44 (Deprecated)
* **Status**: DEPRECATED
* **Description**: The former foundational post-quantum signing standard, implemented during early substrate bootstrapping.
* **Deprecation Vector**: Deprecated by ML-DSA-65 due to the necessity for stronger security margins against near-term algorithmic breakthroughs, without suffering unacceptable latency degradation in the 40-byte TCP process loops.
* **Migration Plan**: Legacy entities signed with ML-DSA-44 remain cryptographically valid but must be re-signed (migrated) to ML-DSA-65 when mathematically altered or healed.

## Future Investments
* See `innovation-registry.rst` (IN20) for the proposed roadmap regarding **ML-DSA-87**, anticipating future threats requiring maximal security.
