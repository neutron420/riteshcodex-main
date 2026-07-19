---
title: "Limiter.io — Distributed API Rate Limiting Platform"
description: "A production-grade, highly scalable distributed API Rate Limiting Platform built in Go and Next.js, enforcing fine-grained API throttling at sub-millisecond speeds."
image: "/projects/project1.avif"
technologies:
  - Go
  - Next.js
  - TypeScript
  - PostgreSQL
  - Redis
  - Kafka
  - Docker
  - Kubernetes
  - OpenTelemetry
  - Cloudflare
github: "https://github.com/neutron420/Limiter.io"
live: "https://neutrondev.in/"
timeline: "Ongoing"
role: "Full Stack Developer"
team: "Solo Project"
status: "completed"
featured: true
challenges:
  - Implementing 5 rate limiting algorithms with Redis Lua scripts at sub-millisecond latency
  - Building a multi-tenant architecture with organization-level RBAC and SSO
  - Kafka-based async analytics pipeline processing millions of request decisions
  - OpenTelemetry distributed tracing across Go API, Redis, Kafka, and PostgreSQL
  - Enterprise security features including WebAuthn, SAML 2.0, and immutable audit logs
learnings:
  - Redis Lua scripting for atomic counter operations across distributed systems
  - Gin framework middleware pipeline for rate limit evaluation
  - Kafka producer/consumer pattern with dead letter queue for analytics
  - OpenTelemetry instrumentation in Go for end-to-end distributed tracing
  - Cloudflare Workers edge-based rate limiting architecture
isPublished: true
---

<Technology name="Go" /> <Technology name="Next.js" /> <Technology name="TypeScript" /> <Technology name="PostgreSQL" /> <Technology name="Redis" /> <Technology name="Kafka" /> <Technology name="Docker" /> <Technology name="Kubernetes" /> <Technology name="OpenTelemetry" /> <Technology name="Cloudflare" />

## Overview

**Limiter.io** is a production-grade, highly scalable distributed API Rate Limiting Platform built in Go and Next.js. Inspired by Cloudflare Rate Limiting and Upstash, it enforces fine-grained API throttling at sub-millisecond speeds using 5 algorithmic engines.

The platform uses a multi-layer architecture with an API Gateway (Gin-based middleware), Redis cache for atomic counter operations, PostgreSQL for persistent storage, and Kafka for async analytics processing.

---

## System Architecture

### Gateway Layer
Gin-based middleware that validates API keys, evaluates rate limit rules, and executes Redis Lua scripts for atomic counter operations at sub-millisecond speed.

### Cache Layer
Redis with preloaded Lua scripts implementing Token Bucket, Fixed Window, Sliding Window Counter/Log, and Leaky Bucket algorithms. API key lookups and rate limit counters live here.

### Storage Layer
PostgreSQL provides persistent storage for projects, keys, rules, analytics, users, organizations, billing, and configuration.

### Analytics Pipeline
Every request decision (allowed/blocked) is published to Apache Kafka, consumed by a background aggregator, and written to PostgreSQL. This decouples the hot path from analytics processing.

### Observability
OpenTelemetry provides distributed tracing across the entire request lifecycle with OTLP export, enabling end-to-end performance analysis.

---

## Rate Limiting Algorithms

### Token Bucket
Tokens are added at a fixed rate up to a maximum capacity. Each request consumes one token. Bursts are absorbed up to capacity, then requests are throttled. Ideal for APIs that need to handle traffic spikes gracefully.

### Fixed Window
Counts requests in fixed time windows (e.g., per minute). Simple and memory-efficient. Best for simple use cases where occasional bursts at boundaries are acceptable.

### Sliding Window Counter
Blends current and previous window counts using a weighted average based on elapsed time. Smooths out boundary spikes while maintaining low memory overhead.

### Sliding Window Log
Maintains a sorted set of timestamps for each request. Provides the most accurate rate limiting considering the exact time of each request. Higher memory usage — use when precision is critical.

### Leaky Bucket
Requests enter a queue and are processed at a constant rate. If the queue is full, the request is rejected. Ensures steady outflow regardless of input spikes.

---

## Core Features

### Rate Limiting
- 5 algorithmic engines with Redis Lua scripts
- Sub-millisecond decision making
- Per-route and per-key rate limit rules
- Weighted requests (different costs for different endpoints)
- Per-customer tenant overrides
- Multi-window quotas (per minute / hour / day / month)
- Dry-run mode for testing without enforcement

### Team Collaboration
- Organizations with role-based access (owner, admin, member)
- Organization groups for bulk permission management
- Multi-approver workflows for sensitive changes
- Project-level member management with granular roles
- Notification preferences (email, Slack, rate limit alerts)

### Enterprise Security
- JWT authentication with access/refresh token rotation
- WebAuthn / Passkey passwordless login
- SAML 2.0 and OpenID Connect SSO
- Immutable audit logs with SHA-256 hash chain verification
- IP access control rules (allow/block lists)
- Brute-force guard with automatic IP lockout
- Cloudflare Turnstile CAPTCHA integration
- Emergency blocking middleware

### Analytics & Observability
- Real-time request analytics with time-series data
- P95 and P99 latency percentiles
- Top routes and API keys breakdown
- Saved analytics views
- Anomaly detection with configurable sensitivity
- Prometheus metrics
- OpenTelemetry distributed tracing
- Structured JSON logging via Zap

---

## Tech Stack

### Backend
- **Go 1.25** – Core runtime
- **Gin** – HTTP framework
- **GORM** – ORM for PostgreSQL
- **Viper** – Environment configuration
- **Zap** – Structured JSON logging

### Frontend
- **Next.js 16** – React framework
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Utility-first styling
- **TanStack Table** – Data tables and analytics

### Data & Messaging
- **PostgreSQL 16** – Persistent storage
- **Redis 7** – Caching with Lua scripting
- **Apache Kafka 3.7** – Async analytics pipeline

### Infrastructure
- **Docker & Docker Compose** – Containerization
- **Kubernetes** – Orchestration
- **Cloudflare Workers** – Edge rate limiting

### Observability
- **OpenTelemetry** – Distributed tracing
- **Prometheus** – Metrics collection

---

## Subscription Plans

| Feature | Free | Pro | Enterprise |
|---------|------|-----|------------|
| Max Projects | 3 | Unlimited | Unlimited |
| Algorithms | Token Bucket | All 5 | All 5 |
| Analytics Retention | 7 Days | 90 Days | 365 Days |
| Rate Limit | 100/min | 10,000/min | 1,000,000/min |
| SLA | None | 99.9% uptime | Custom |
| SSO | No | No | SAML + OIDC |

---

## API Reference

### Authentication
- `POST /api/v1/auth/register` – Register operator profile
- `POST /api/v1/auth/login` – Authenticate and issue JWT
- `POST /api/v1/auth/passkeys/register` – WebAuthn registration
- `POST /api/v1/auth/passkeys/login` – WebAuthn login

### Rate Limit Rules
- `POST /api/v1/projects/:id/rules` – Create rate limit rule
- `GET /api/v1/projects/:id/rules` – List rules
- `POST /api/v1/projects/:id/rules/test` – Test rule in dry-run mode

### Analytics
- `GET /api/v1/projects/:id/analytics/stats` – Aggregate request stats
- `GET /api/v1/projects/:id/analytics/timeseries` – Time-series data
- `GET /api/v1/projects/:id/analytics/export` – Export (CSV/JSON)

---

## Deployment

### Docker Compose
```bash
docker-compose -f deploy/docker/docker-compose.yml up --build -d
```

### Kubernetes
```bash
kubectl apply -f deploy/kubernetes/
```

### Edge Worker
```bash
cd workers && wrangler deploy
```

### Health Endpoints
- `GET /healthz` – Liveness probe
- `GET /readyz` – Readiness probe (DB, Redis, Kafka)
- `GET /status` – Detailed system status

---

## Key Technical Decisions

### Why Go for the API Gateway
Go provides predictable sub-millisecond latency, excellent concurrency with goroutines, and a small memory footprint — critical for a rate limiting service that sits on the hot path of every API request.

### Why Redis Lua Scripts
Atomic operations are essential for accurate rate limiting. Redis Lua scripts execute atomically, preventing race conditions where concurrent requests could both pass the rate limit check simultaneously.

### Why Kafka for Analytics
The rate limiting hot path must not be blocked by analytics processing. Kafka decouples decision logging from storage, allowing the gateway to remain responsive under any load.

---

## Future Enhancements

- Global rate limit synchronization across regional gateways
- Advanced anomaly detection with machine learning
- GraphQL API support
- Webhook-based rate limit breach notifications
- Multi-cloud deployment (AWS, GCP, Azure)
