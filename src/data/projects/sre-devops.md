---
title: "SRE-Devops Copilot - AI-Powered SRE Discord Bot"
description: "An intelligent, enterprise-ready, AI-powered Site Reliability Engineering (SRE) assistant designed for Discord with multi-tenant Kubernetes monitoring, incident diagnostics, and runbook RAG."
image: "/projects/project4.avif"
technologies:
  - Python
  - FastAPI
  - Discord
  - Kubernetes
  - Prometheus
  - Grafana
  - PostgreSQL
  - Docker
  - Terraform
  - AWS
github: "https://github.com/neutron420/SRE-Devops"
live: "https://sre-dev.vercel.app/"
timeline: "Ongoing"
role: "Full Stack Developer"
team: "Solo Project"
status: "completed"
featured: true
challenges:
  - Dynamic multi-tenant Kubernetes client routing with in-memory decrypted kubeconfigs
  - AES-256 Fernet symmetric encryption for secure kubeconfig persistence
  - Stateful multi-agent LangGraph workflow orchestrating pod checks, log analysis, metrics, and RAG
  - Proactive background health monitoring loop across all registered clusters
  - Secure isolate per-guild configuration with encrypted database storage
learnings:
  - LangGraph stateful agent orchestration for complex diagnostic workflows
  - ChromaDB vector similarity search for runbook retrieval-augmented generation
  - FastAPI middleware pattern for multi-tenant header-based routing
  - Prometheus query language for real-time metrics anomaly detection
  - Production-grade FastAPI deployment with Docker Compose on AWS EC2
isPublished: true
---

<Technology name="Python" /> <Technology name="FastAPI" /> <Technology name="Discord" /> <Technology name="Kubernetes" /> <Technology name="Prometheus" /> <Technology name="Grafana" /> <Technology name="PostgreSQL" /> <Technology name="Docker" /> <Technology name="Terraform" /> <Technology name="AWS" />

## Overview

**SRE-Devops Copilot** is an enterprise-ready, AI-powered Site Reliability Engineering assistant built for Discord. It allows multiple organizations to securely register, monitor, and troubleshoot their independent Kubernetes clusters and Prometheus metric endpoints through a unified Discord bot interface.

The system implements a **multi-tenant SaaS architecture** where each Discord server (guild) operates in complete isolation — with encrypted kubeconfig storage, dynamic client routing, and per-guild configuration management.

---

## Architecture

The copilot consists of three core components:

### Discord Client Bot
A stateless Discord bot that registers application slash commands. It automatically forwards the current server's Guild ID via the `X-Guild-ID` HTTP header on all API requests to the backend.

### FastAPI REST API Backend
The backend evaluates incoming headers, decrypts the appropriate kubeconfig in-memory, and coordinates multi-agent LangGraph workflows for diagnostics and monitoring.

### Data Layer
- **PostgreSQL** – Stores encrypted Kubernetes configurations and Prometheus endpoints per Guild ID
- **ChromaDB** – Vector database housing indexed SRE runbooks for RAG-based incident resolution

---

## Core Features

### Multi-Tenant Cluster Registration
- Different Discord servers register their own Kubernetes clusters and Prometheus endpoints
- Each guild's settings are completely isolated with per-guild encryption keys
- Kubeconfigs encrypted using AES-256 (Fernet) before database persistence

### Secure Kubeconfig Cryptography
- Uploaded kubeconfig payloads encrypted using symmetric authenticated cryptography
- Key derived from environment variable or hashed GEMINI_API_KEY as fallback
- Decryption occurs only in-memory during API requests to the cluster

### Agentic Incident Diagnostics (LangGraph)
A stateful multi-agent AI workflow powered by Gemini 2.5 Flash:
1. **Pod Status Check** – Identifies CrashLoopBackOff, ImagePullBackOff, OOMKilled states
2. **Log Analysis** – Analyzes container stdout for warnings, crashes, and stack traces
3. **Metrics Anomaly Detection** – Gathers Prometheus data for CPU, memory, latency, and error rates
4. **Runbook RAG** – Queries ChromaDB for matching incident resolution manuals
5. **Synthesis & Recommendation** – Calculates confidence score, details root cause, generates exact remediation commands

### Proactive SRE Health Monitoring
- Background loop monitors pod health across all registered clusters
- Automatically alerts the server's designated alerts channel on unhealthy transitions
- Clears alert once the pod returns to a healthy running state

### Interactive Log Tail & Search
- Fetches recent pod logs for any registered Kubernetes service
- Supports custom lookback timeframes (30m, 2h, 1d) and exact text search filters

### Error Diagnostic Explanations
- Evaluates arbitrary stack traces or error logs submitted by users
- Suggests potential root causes and fixing instructions

---

## Discord Slash Commands

### Tenant Administration
- `/setup` – Upload and encrypt kubeconfig + optional Prometheus URL (Admin only)
- `/status` – Check system liveness and configuration status

### Diagnostics & Monitoring
- `/deployments` – List all active deployments in the configured namespace
- `/logs [service] [query] [timeframe]` – Retrieve pod logs with filtering
- `/diagnose [service]` – Trigger full LangGraph diagnostic pipeline
- `/explain-error [error_text]` – Break down custom stack traces
- `/ask [question]` – Answer SRE questions using RAG runbook context
- `/search-docs [query]` – Similarity search against internal RAG runbook files
- `/history [service] [limit]` – Fetch past incident diagnostic histories

---

## Tech Stack

### Backend
- **Python 3.12** – Core runtime
- **FastAPI** – REST API framework with async support
- **Discord.py** – Discord bot integration
- **LangGraph** – Stateful multi-agent orchestration
- **Gemini 2.5 Flash** – AI/LLM for diagnostics and analysis
- **ChromaDB** – Vector similarity search for RAG
- **PostgreSQL** – Relational database for encrypted configs
- **SQLAlchemy** – ORM for database operations
- **Pydantic** – Data validation and settings management
- **Fernet (cryptography)** – AES-256 symmetric encryption

### Infrastructure
- **Kubernetes** – Container orchestration (target clusters)
- **Prometheus** – Metrics collection and querying
- **Grafana** – Monitoring dashboards
- **Docker & Docker Compose** – Containerization and local dev
- **Terraform** – Infrastructure as Code (AWS provisioning)
- **AWS EC2** – Production deployment
- **HCL** – Terraform configuration language

---

## Security & Cryptography Model

- **AES-256 Symmetric Encryption**: Uploaded kubeconfig payloads encrypted using Fernet before database persistence
- **Key Derivation**: Reads `ENCRYPTION_KEY` from environment; falls back to hashing `GEMINI_API_KEY` for a stable 32-byte key
- **In-Memory Only**: Decryption occurs exclusively in-memory during API request processing
- **Git Safety**: Raw credentials tracked in `.gitignore`; EKS credentials removed from git cache

---

## Deployment

### Docker Compose
```bash
docker-compose up --build -d
```

### AWS EC2 Provisioning
A PowerShell script (`deploy.ps1`) automates provisioning with Terraform:
- Creates VPC, Security Group, EC2 (t3.small)
- Installs Docker
- Uploads project files and starts container stack

### Verification Endpoints
- FastAPI Docs: `http://localhost:8000/docs`
- Health Check: `http://localhost:8000/health`
- Prometheus: `http://localhost:9090`
- Grafana: `http://localhost:3000` (admin/admin)

---

## Mock Mode

For offline testing without an active Kubernetes cluster, set `MOCK_MODE=true`:
- **payment-service** – Simulates database connection timeout crashloop
- **analytics-service** – Simulates Java heap memory leak (OOMKilled)
- **frontend-service** – Simulates downstream latency/timeout anomalies
- **AI Pipeline** – Falls back to rule-based logic if GEMINI_API_KEY not provided

---

## Key Technical Decisions

### Why LangGraph for Diagnostics
Traditional monitoring tools surface metrics but lack intelligent correlation. LangGraph enables a stateful multi-agent workflow where each specialized agent (pod checker, log analyzer, metrics scanner) contributes to a unified diagnosis, with a synthesis agent producing actionable remediation steps.

### Why ChromaDB for RAG
Pre-built runbooks and incident resolution guides contain years of operational knowledge. ChromaDB provides fast vector similarity search, enabling the AI to retrieve the most relevant resolution steps from historical documentation when diagnosing new incidents.

### Why Fernet Encryption
Kubernetes credentials are the crown jewels of infrastructure security. Fernet (AES-128-CBC with HMAC-SHA256 authentication) provides authenticated encryption that prevents both unauthorized decryption and tampering, while keeping the API simple enough to avoid implementation mistakes.

---

## Future Enhancements

- Web dashboard for cross-cluster visualization and historical analytics
- PagerDuty/Opsgenie integration for on-call escalation
- Automated remediation actions (restart, scale, rollback)
- Multi-cluster topology mapping and dependency graph visualization
- Slack and Microsoft Teams support
