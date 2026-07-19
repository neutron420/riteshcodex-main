---
title: "StackAudit — Backend Health & Security Audit Tool"
description: "A high-performance, developer-first CLI tool that audits backend project health, security, and infrastructure readiness in seconds, running entirely locally."
image: "/projects/keyui.avif"
technologies:
  - Go
  - Next.js
  - TypeScript
  - TailwindCSS
  - Docker
  - Kubernetes
github: "https://github.com/neutron420/StackAudit"
live: "https://audit-one-livid.vercel.app/"
timeline: "Ongoing"
role: "Full Stack Developer"
team: "Solo Project"
status: "completed"
featured: true
challenges:
  - Building a high-concurrency Go CLI with real-time TUI for system monitoring
  - Advanced secrets detection scanning across multiple file types and encodings
  - Docker container runtime auditing for privilege escalation and configuration vulnerabilities
  - Kubernetes manifest validation for resource limits, security contexts, and best practices
  - Extensible YAML plugin system for team-specific audit rules
learnings:
  - Go concurrency patterns for parallel module execution with channel-based results
  - Terminal UI design with real-time rendering and interactive controls
  - Container runtime security analysis and Docker API interaction
  - Kubernetes manifest static analysis for security context compliance
  - Cross-platform distribution via NPM, GitHub Releases, and Homebrew
isPublished: true
---

<Technology name="Go" /> <Technology name="Next.js" /> <Technology name="TypeScript" /> <Technology name="TailwindCSS" /> <Technology name="Docker" /> <Technology name="Kubernetes" />

## Overview

**StackAudit** is a high-performance, developer-first CLI tool designed to audit your backend project's health, security, and infrastructure readiness in seconds. It runs entirely locally, ensuring your secrets never leave your machine.

The tool features a professional TUI for real-time system monitoring, advanced secrets detection, Docker security analysis, Kubernetes manifest validation, and an extensible plugin system.

---

## Core Features

### Professional TUI
A clean, interactive terminal interface for real-time system monitoring and project auditing with responsive controls and live status updates.

### Secrets Detection
Advanced scanning for hardcoded API keys, tokens, private credentials, and database passwords in configuration files, deployment scripts, and source code before they get pushed to remote environments.

### Docker Security
Deep analysis of Dockerfiles and Compose files for security best practices, including:
- Insecure privilege levels and root user detection
- Public database and service exposures
- Configuration vulnerabilities
- Outdated base images

### Kubernetes Readiness
Audit Kubernetes manifests for:
- Resource limits and requests
- Security contexts and pod security policies
- Network policies
- ConfigMap and Secret best practices
- Health check probe configurations

### Ports and Sockets Sweeping
Scans open local ports and network interfaces for unauthenticated access vulnerabilities and unexpected open services.

### Extensible Plugins
Add team-specific standards using simple YAML rule sets. Create custom scanners for your organization's unique compliance requirements.

### Interactive Web TUI
A web-based terminal emulator built with Next.js that visualizes audit statuses, violation scores, and remediation steps in a responsive browser interface.

---

## Installation

### Quick Install (Windows PowerShell)
```powershell
iwr https://raw.githubusercontent.com/neutron420/StackAudit/main/scripts/install.ps1 | iex
```

### Quick Install (macOS / Linux)
```bash
curl -sSL https://raw.githubusercontent.com/neutron420/StackAudit/main/scripts/install.sh | sh
```

### From Source
```bash
go install github.com/neutron420/stack/cmd/stack@latest
```

### Via NPM
```bash
npm install -g @riteshkumar04/stack-audit
```

---

## Usage

### Run Interactive Workbench
```bash
stack
```

### Run Specific Scan
```bash
stack scan redis
```

### Configuration (.stack.yaml)
```yaml
rule_packs:
  - strict
output: table
min_severity: warning
plugins:
  - .stack/plugins/team.yaml
```

---

## Tech Stack

### CLI
- **Go** – High-performance concurrent runtime
- **Cobra** – CLI framework
- **Bubble Tea** – Terminal UI framework
- **Viper** – Configuration management

### Web TUI
- **Next.js** – React framework with Turbopack
- **TypeScript** – Type-safe development
- **TailwindCSS** – Utility-first styling
- **Framer Motion** – Interactive animations

### Platform Support
- **Windows** – x86_64, arm64, 386
- **macOS** – Apple Silicon, Intel
- **Linux** – All distributions

---

## Key Technical Decisions

### Why Go for the CLI
Go provides single-binary cross-platform distribution, excellent concurrency with goroutines for parallel module execution, and native performance for file scanning operations.

### Why Local-First Architecture
Secrets and infrastructure configurations are highly sensitive. Running entirely locally ensures zero data exfiltration risk — no data ever leaves the developer's machine.

### Why Extensible Plugins
Every team has unique compliance standards. The YAML plugin system allows organizations to codify their specific audit rules without modifying the core tool.

---

## Future Enhancements

- CI/CD integration for automated pre-commit and pre-deploy auditing
- Cloud provider configuration auditing (AWS, GCP, Azure)
- Database connection string and SSL configuration validation
- API endpoint security scanning
- Integration with SIEM and alerting systems
- VS Code extension for inline audit results
