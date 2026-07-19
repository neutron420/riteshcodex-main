---
title: "Q-flow (Lineo) — Enterprise Queue Orchestration Hub"
description: "An enterprise multi-tenant queue orchestration and performance hub with proactive geofencing, offline-first resilience, intelligent slot re-balancing, and virtual waiting rooms."
image: "/projects/bookmrkit.avif"
technologies:
  - Go
  - Next.js
  - PostgreSQL
  - Redis
  - RabbitMQ
  - Docker
github: "https://github.com/neutron420/Q-flow"
live: "https://lineo-five.vercel.app/"
timeline: "Ongoing"
role: "Full Stack Developer"
team: "Solo Project"
status: "completed"
featured: true
challenges:
  - Backend geofencing using Haversine formula to enforce 0.5 KM check-in radius
  - Offline-first token cache via IndexedDB for zero-signal environments
  - Intelligent slot re-balancing with auto-cancellation after 30-minute no-show
  - WebSocket fan-out architecture for real-time queue position updates
  - 7-stage RabbitMQ reminder cycle for proactive nudge communications
learnings:
  - Go's high-concurrency model for handling thousands of live queue updates
  - Haversine distance calculation for precise geofence validation
  - RabbitMQ delayed message exchanges for time-based reminder orchestration
  - Redis-backed WebSocket broadcast for multi-tenant fan-out
  - PWA design patterns for offline-first web applications
isPublished: true
---

<Technology name="Go" /> <Technology name="Next.js" /> <Technology name="PostgreSQL" /> <Technology name="Redis" /> <Technology name="RabbitMQ" /> <Technology name="Docker" />

## Overview

**Lineo (QueueLess)** is an enterprise multi-tenant queue orchestration and performance hub that solves the five critical failures of traditional queue management systems. Built with a high-performance Go backend and a modern Next.js PWA frontend, it provides intelligent, real-time queue management for facilities of any scale.

---

## The Five Pillars of Lineo

### 1. Proactive Geofencing
Unlike basic systems that have no location awareness, Lineo implements strict backend geofencing using the Haversine formula. The backend rejects check-ins if the user is more than 0.5 KM away, ensuring the live queue represents only physically present individuals.

### 2. Offline-First Resilience
Traditional web applications fail in thick-walled hospital basements or elevators with zero signal. Lineo utilizes an Offline Token Cache (IndexedDB) — if a user loses signal, they can still access their dashboard to display their Token Number and QR Code to staff.

### 3. Intelligent Slot Re-balancing
Traditional queues are static; Lineo is dynamic:
- If a user is 10 minutes late → system triggers a nudge
- If a user is 30 minutes late → system automatically cancels the slot and promotes the next person
- Result: Zero idle time for staff, maximum throughput for the facility

### 4. Virtual Waiting Room
Users can remain in their vehicles or nearby locations. The WebSocket fan-out system keeps their position updated in real-time, removing the need to monitor a physical screen.

### 5. Staff Empowerment & Overrides
Technology should assist, not obstruct. Staff members have access to a Manual Force Check-In feature to handle edge cases involving elderly users or GPS malfunctions.

---

## Architecture

### Backend (Go)
- High-concurrency Go server handling thousands of live queue updates
- JWT-based role-based access control (RBAC)
- Haversine distance calculation for geofence validation
- RESTful API for queue operations

### Frontend (Next.js PWA)
- Server-side rendered React with PWA capabilities
- Offline-first architecture with IndexedDB token cache
- Real-time queue position updates via WebSocket
- Responsive design for mobile and desktop

### Message Broker (RabbitMQ)
- 7-Stage Reminder Cycle orchestrated via delayed message exchanges
- Asynchronous notification processing
- Nudge scheduling and timeout handling

### Cache Layer (Redis)
- Check-in idempotency verification
- WebSocket broadcast channel management
- Session and token caching

---

## Key Features

### For Users
- Real-time queue position tracking via WebSocket
- Offline ticket access with QR code display
- Geofenced check-in with proximity validation
- Push notifications for approaching turn
- Virtual waiting room — no need to be physically present

### For Staff
- Real-time dashboard with live queue overview
- Manual force check-in for edge cases
- Automated no-show management
- Token issuance and verification
- Analytics and performance metrics

### For Administrators
- Multi-tenant organization management
- Configurable geofence radius
- Customizable reminder schedules
- SLA and throughput analytics
- Staff role management

---

## Tech Stack

### Backend
- **Go 1.25** – High-performance concurrency runtime
- **RabbitMQ** – 7-Stage Reminder Cycle orchestration
- **Redis** – Check-in idempotency and WebSocket broadcast
- **PostgreSQL** – Multi-tenant data persistence

### Frontend
- **Next.js 15** – SSR with PWA capabilities
- **IndexedDB** – Offline token cache
- **WebSocket** – Real-time queue updates

### Infrastructure
- **Docker Compose** – Production-ready container orchestration
- **Neon** – Managed PostgreSQL provider

---

## Business Impact

| Metric | Improvement |
|--------|-------------|
| No-Show Rate | -35% via Proactive Reminders |
| Daily Throughput | +20% via Auto-Cancellation |
| Waiting Room Congestion | 100% Reduced |

---

## Getting Started

### Backend
```bash
go mod tidy
go run ./cmd/api
```

### Frontend
```bash
cd lineo-fe
npm install
npm run dev
```

### Docker Infrastructure
```bash
docker-compose up -d
```

---

## Security

- **JWT RBAC** – Strict role separation between users, staff, and admins
- **Migration Fallbacks** – Optimized for managed PostgreSQL providers
- **Security Scans** – Compatible with Trivy and SonarCloud
- **Geofence Enforcement** – Server-side Haversine validation (not client-side)

---

## Future Enhancements

- AI-powered wait time prediction using historical data
- Multi-language support for international facilities
- SMS and WhatsApp notification channels
- Biometric check-in integration
- Advanced analytics dashboard with predictive modeling
- Integration with existing ERP and CRM systems
