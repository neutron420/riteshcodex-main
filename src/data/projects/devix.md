---
title: "Devix — Engineering Knowledge Sharing Platform"
description: "A production-grade, modular monolith backend for a developer-centric knowledge sharing and collaboration platform built with Go, GORM, and PostgreSQL."
image: "/projects/comingsoon.avif"
technologies:
  - Go
  - PostgreSQL
  - Cloudflare
  - Docker
github: "https://github.com/neutron420/Devix"
live: "https://devix-frontend.vercel.app/"
timeline: "Ongoing"
role: "Full Stack Developer"
team: "Solo Project"
status: "building"
featured: true
challenges:
  - Implementing Clean Architecture with strict domain isolation in a modular monolith
  - JWT authentication with refresh token rotation and Argon2id password hashing
  - Centralized WebSocket Hub for real-time event broadcasting across domains
  - Flexible storage abstraction supporting local filesystem and Cloudflare R2
  - GORM Auto-Migration for synchronized schema management across environments
learnings:
  - Modular monolith design patterns for future microservice migration
  - Gorilla WebSocket connection pooling and event broadcasting architecture
  - Argon2id configuration for GPU-resistant password hashing
  - Cloudflare R2 S3-compatible object storage integration in Go
  - GORM fluent API for complex PostgreSQL queries including full-text search
isPublished: true
---

<Technology name="Go" /> <Technology name="PostgreSQL" /> <Technology name="Cloudflare" /> <Technology name="Docker" />

## Overview

**Devix** is a production-grade, modular monolith backend architected for a developer-centric knowledge sharing and collaboration platform. The system is built with Go, leveraging GORM for schema management and PostgreSQL for persistent storage, with a focus on modularity, security, and real-time performance.

The application implements a **Modular Monolith** architecture following **Clean Architecture** principles, where each domain is isolated into independent modules for strict separation of concerns and future migration to microservices.

---

## Architecture

### Modular Monolith Design
Each domain is isolated into independent modules following Clean Architecture principles:

- **Auth Module** – JWT authentication, refresh token rotation, WebAuthn
- **Post Module** – Content creation, editing, and publishing
- **User Module** – Profile management, social features
- **Comment Module** – Threaded discussions and real-time updates
- **Notification Module** – WebSocket and email notifications

### Communication
- **HTTP** – Gin Gonic for RESTful API routing
- **WebSocket** – Gorilla WebSocket Hub for real-time event broadcasting
- **GORM** – ORM with Auto-Migration for schema synchronization

---

## Core Features

### Authentication & Security
- JWT access/refresh token pair with rotation policy
- Argon2id password hashing (GPU-resistant)
- OAuth2 provider integration (GitHub, Google) — planned
- Brute-force protection and rate limiting

### Database Management
- GORM Auto-Migration for schema synchronization
- Complex PostgreSQL features including full-text search
- Repository pattern with fluent API calls
- Connection pooling and migration management

### Real-Time Communication
- Centralized WebSocket Hub for concurrent client connections
- Event broadcasting (new comments, notifications)
- Scalable connection management

### Media Management
- Flexible storage abstraction layer
- Local filesystem for development
- Cloudflare R2 (S3-compatible) for production
- Automatic media optimization

---

## Tech Stack

### Backend
- **Go 1.21+** – Core runtime
- **Gin Gonic** – HTTP routing framework
- **GORM** – ORM with Auto-Migration
- **Gorilla WebSocket** – Real-time event broadcasting
- **JWT** – Access/refresh token authentication
- **Argon2id** – Password hashing

### Storage
- **PostgreSQL (NeonDB)** – Primary database
- **Cloudflare R2** – S3-compatible object storage
- **Local Filesystem** – Development storage

---

## Getting Started

### Prerequisites
- Go 1.21+
- PostgreSQL instance (NeonDB recommended)
- Cloudflare R2 credentials (for media features)

### Configuration
```bash
cp .env.example .env
```

Update `.env` with database URI, JWT secrets, and storage credentials.

### Run
```bash
go run cmd/server/main.go
```

Database schema is synchronized automatically on startup via GORM Auto-Migration.

---

## Project Structure

```
cmd/server/          # Application entry point
internal/
  config/            # Environment configuration
  database/          # Connection pool and migrations
  models/            # Domain model definitions (schema source of truth)
  modules/           # Independent domain modules (Auth, Post, User, ...)
  pkg/               # Shared utilities and core library wrappers
```

---

## Security

- **JWT Rotation** – Refresh tokens invalidated on each use
- **Argon2id** – Memory-hard hashing resistant to GPU attacks
- **Input Validation** – Strict request validation
- **SQL Injection** – GORM parameterized queries
- **CORS** – Configurable cross-origin policies

---

## Development Roadmap

- Social Authentication (GitHub, Google OAuth2)
- Content Moderation with ML/AI auto-flagging
- Multi-region deployment with database replication
- Comprehensive integration and unit testing suite
- GraphQL API support
- Search indexing with Elasticsearch

---

## Future Enhancements

- Microservice migration path from modular monolith
- Advanced analytics and content recommendations
- Team collaboration spaces and workspaces
- API versioning and SDK generation
- Mobile application support
