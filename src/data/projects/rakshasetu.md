---
title: "RakshaSetu - Disaster Management & Citizen Safety Platform"
description: "A full-stack, real-time disaster management platform with AI-powered SOS triage, volunteer dispatch, early warning system, and offline BLE mesh relay."
image: "/projects/repimly.avif"
technologies:
  - TypeScript
  - Bun
  - Express.js
  - PostgreSQL
  - Redis
  - AWS
github: "https://github.com/neutron420/RakshaSetu"
live: "https://github.com/neutron420/RakshaSetu"
timeline: "Ongoing"
role: "Full Stack Developer"
team: "Solo Project"
status: "completed"
featured: true
challenges:
  - Real-time geospatial queries with PostGIS for volunteer proximity search
  - Apache Kafka integration for handling extreme traffic spikes during disasters
  - BLE mesh relay for offline SOS broadcast without internet connectivity
  - AI-powered severity scoring and multilingual translation for SOS reports
  - Geofence-based danger zone monitoring with expo-location background tracking
learnings:
  - Event-driven architecture with Kafka for decoupled async processing
  - Geospatial querying with PostGIS for proximity and clustering
  - Building offline-first mobile applications with WatermelonDB
  - WebSocket-based real-time bidirectional communication at scale
  - Transactional outbox pattern for reliable event publishing
isPublished: true
---

<Technology name="TypeScript" /> <Technology name="Bun" /> <Technology name="Express.js" /> <Technology name="PostgreSQL" /> <Technology name="Redis" /> <Technology name="AWS" />

## Overview

**RakshaSetu**  is a full-stack, real-time disaster management and citizen safety platform that connects citizens in distress with nearby volunteers, first responders, and relief resources. The system is architected for high-availability scenarios where traditional communication infrastructure may be compromised.

Built with a React Native mobile application and a high-performance Bun.js backend, RakshaSetu provides end-to-end emergency response capabilities — from SOS reporting and AI-powered triage to volunteer dispatch and crowd-sourced danger mapping.

---

## Architecture

The backend follows an **event-driven architecture** using Apache Kafka (KRaft mode) to decouple SOS submission from downstream processing like volunteer dispatch, push notifications, and alert targeting. This ensures the system remains responsive even during extreme traffic spikes when thousands of SOS reports arrive simultaneously.

The mobile app communicates with the backend via REST APIs and WebSockets, enabling real-time bidirectional communication for dispatch alerts, location tracking, and incident updates.

---

## Core Features

### SOS Reporting & AI Triage
- Citizens report emergencies through a dedicated SOS screen supporting multiple categories: Flood, Fire, Earthquake, Accident, Medical, Violence, and more
- AI-powered severity scoring assigns a 1-10 priority score to each report
- Multilingual translation converts descriptions to English using OpenAI GPT
- Automatic incident clustering groups nearby reports into unified incidents using PostGIS spatial queries
- Media attachments supported via Cloudflare R2 storage

### Volunteer Dispatch System
- Volunteers opt-in through settings and optionally declare skills (CPR, Medical Doctor, Firefighter, etc.)
- PostGIS `ST_DWithin` queries find active volunteers within a configurable radius (default 2km)
- Dual notification via push notification and real-time WebSocket alert
- Live location sharing between victim and responder after dispatch acceptance

### Early Warning System (EWS)
- Polls USGS Earthquake API every 10 minutes for seismic events
- Polls OpenWeatherMap every 15 minutes for severe weather alerts
- Targeted alerts sent only to users within affected geographic regions
- Full-screen red alert modal for high-urgency warnings

### Geofence Danger Zone Alerts
- All active incidents become 1km-radius geofences monitored by `expo-location`
- Users receive automatic warnings when physically entering a danger zone
- Works in the background even when the app is not in the foreground

### Offline Capabilities
- BLE (Bluetooth Low Energy) mesh relay for SOS broadcast without internet
- Passive mesh scanning detects nearby SOS beacons
- Relay mechanism propagates alerts through a chain of devices
- WatermelonDB integration for offline-first data persistence
- Automatic sync when connectivity is restored

### Voice-Based SOS
- Speech-to-text transcription using AWS Transcribe Streaming
- Text-to-speech responses using AWS Polly
- Enables hands-free emergency reporting for injured or visually impaired users

---

## Tech Stack

### Mobile Application
- **React Native (Expo SDK 54)** – Cross-platform mobile framework
- **Expo Router** – File-based navigation
- **React Native Maps** – Geospatial visualization
- **expo-location** – GPS, background tracking, geofencing
- **WatermelonDB** – Offline-first database
- **react-native-ble-plx** – BLE mesh relay

### Backend
- **Bun** – High-performance JavaScript runtime
- **Express 5** – HTTP framework
- **Prisma 7** – ORM with PostgreSQL adapter
- **PostgreSQL + PostGIS** – Relational database with geospatial extensions
- **Apache Kafka (KRaft)** – Event streaming and async processing
- **Redis** – Rate limiting and caching
- **WebSocket (ws)** – Real-time bidirectional communication
- **Zod** – Runtime schema validation

### Cloud & AI Services
- **AWS RDS (PostgreSQL + PostGIS)** – Managed database
- **AWS ECS (Fargate)** – Serverless container orchestration
- **Cloudflare R2** – Object storage for media uploads
- **AWS Transcribe** – Speech-to-text
- **AWS Polly** – Text-to-speech
- **OpenAI GPT** – AI triage, translation, and chatbot
- **Expo Push Service** – Mobile push notifications
- **USGS API** – Earthquake data
- **OpenWeatherMap** – Severe weather alerts

---

## Key Technical Decisions

### Why Apache Kafka
During a mass-casualty event, thousands of SOS reports can arrive simultaneously. A synchronous architecture would collapse under this load. Kafka decouples SOS submission from all downstream processing, providing durability (messages persisted to disk), backpressure handling, consumer group scaling, and topic isolation.

### Why PostgreSQL with PostGIS
The core operations of disaster management are inherently geospatial. PostGIS provides spatial indexing that enables finding nearby volunteers within 2km in under 5ms using `ST_DWithin` queries, regardless of the total number of users in the system.

### Transactional Outbox Pattern
Every database mutation produces a corresponding event via the outbox pattern, guaranteeing that no SOS report is ever lost — even if Kafka or WebSocket delivery temporarily fails. A background poller publishes pending events every 5 seconds.

---

## Database Schema

The Prisma schema defines 14 models covering:
- Users with geospatial location tracking
- SOS reports with severity scoring and clustering
- Incidents with category, status, and geolocation
- Dispatch assignments with real-time status tracking
- Response teams and member management
- Natural disaster alerts with affected regions
- Relief centers with capacity management
- Outbox events for reliable message publishing
- Real-time timeline events for incident history

---

## API Reference

### Authentication
- `POST /api/v1/auth/signup` – Register a new citizen account
- `POST /api/v1/auth/login` – Authenticate and receive JWT

### SOS Reports
- `POST /api/v1/sos` – Submit an SOS report
- `GET /api/v1/sos/my` – List current user's reports

### Incidents
- `GET /api/v1/incidents` – List incidents (paginated, filterable)
- `GET /api/v1/incidents/nearby` – Find incidents near a location

### Dispatch
- `POST /api/v1/assignments` – Create responder assignment
- `PATCH /api/v1/assignments/:id/status` – Update assignment status

### Real-Time WebSocket Events
- `incident:update` – Incident status changes
- `EMERGENCY_ALERT` – EWS disaster warning
- `VOLUNTEER_DISPATCH` – Dispatch request to nearby volunteers
- `DISPATCH_ACCEPTED` – Volunteer accepted dispatch
- `location:update` – Responder location tracking

---

## Impact

RakshaSetu addresses a critical gap in disaster response by providing a unified platform that works even when traditional communication infrastructure is compromised. The offline BLE mesh relay ensures SOS signals can propagate through a chain of devices in network-dead zones, making it a potentially life-saving tool in real-world disaster scenarios.

---

## Future Enhancements

- AI-powered resource allocation and predictive disaster modeling
- Integration with government emergency services APIs
- Drone and autonomous vehicle coordination for search and rescue
- Advanced analytics dashboard for disaster trend analysis
- Multi-region deployment for global scalability
