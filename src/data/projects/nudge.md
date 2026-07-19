---
title: "Nudge - Smart Schedule & Habit Companion"
description: "A full-stack reminder and habit tracking platform with recurring events, color-coded categories, habit streaks, and real-time push notifications."
image: "/projects/project3.avif"
technologies:
  - TypeScript
  - Flutter
  - Express.js
  - PostgreSQL
  - Redis
  - Node.js
github: "https://github.com/neutron420/Nudge"
live: "https://github.com/neutron420/Nudge"
timeline: "Ongoing"
role: "Full Stack Developer"
team: "Solo Project"
status: "completed"
featured: true
challenges:
  - Designing a resilient reminder scheduler with row-locking (SKIP LOCKED) and exponential-backoff retries
  - Building a recurring event system that auto-generates future instances with a daily background job
  - Implementing Google Calendar sync with OAuth across different Google accounts
  - Managing cross-platform push notifications with Firebase Cloud Messaging
  - Architecting a Turborepo monorepo with shared packages for scalability
learnings:
  - Event-driven scheduling with node-cron and PostgreSQL row-level locking
  - Building offline-first mobile applications with Flutter and local state management
  - Monorepo architecture with Turborepo for shared code across frontend and backend
  - Push notification lifecycle management from device registration to delivery
  - JWT access/refresh token rotation for secure authentication
isPublished: true
---

<Technology name="TypeScript" /> <Technology name="Flutter" /> <Technology name="Express.js" /> <Technology name="PostgreSQL" /> <Technology name="Redis" /> <Technology name="Node.js" />

## Overview

**Nudge** is a full-stack reminder and habit tracking platform that keeps you on track with recurring events, color-coded categories, powerful search, a habit tracker with streaks, and real-time push notifications — all wrapped in a clean, animated Flutter experience.

The platform combines a Flutter mobile frontend with a Node.js/Express backend, using TypeScript throughout for type safety. The entire codebase is organized as a Turborepo monorepo with shared packages for database access and UI components.

---

## Architecture

The system follows a classic client-server architecture with a mobile-first approach:

```
Flutter App (Android/iOS)  <-->  Express API (Node.js + TypeScript)  <-->  PostgreSQL (Neon)
                                           |
                                     Firebase Admin
                                           |
                                  Firebase Cloud Messaging
```

A node-cron scheduler runs every minute to claim and dispatch due reminders using PostgreSQL's `SELECT ... FOR UPDATE SKIP LOCKED` for safe concurrent processing.

---

## Core Features

### Recurring Events
- Create events that repeat daily, weekly, monthly, or yearly
- Auto-generates future instances with a daily background job
- Cascading deletes across entire series
- Edit/delete individual events or whole series

### Categories & Tags
- Color-coded categories for visual organization
- Assign multiple categories to any event
- Colorful badges across calendar and detail screens

### Search & Filtering
- Instant search by event title with debounced input
- Filter by status (Active, Completed, Cancelled), event type, and category

### Habit Tracker
- Build daily or weekly habits
- One-tap check-in with streak tracking
- Dedicated habits screen and dashboard widget
- Optimistic UI updates for instant feedback

### Real Push Notifications
- Powered by Firebase Cloud Messaging
- Resilient scheduler with row-locking (SKIP LOCKED)
- Exponential-backoff retries with stale-lock recovery
- Deep-link navigation from notification tap
- Console simulator mode for local development

### Authentication
- Email/password registration and login
- Google Sign-In (OAuth)
- JWT access + refresh token rotation
- Session management with secure password hashing

### Google Calendar Sync
- Connect a Google account (even different from login)
- Bidirectional sync with Google Calendar
- OAuth-based authentication

---

## Tech Stack

### Mobile Frontend
- **Flutter** – Cross-platform UI framework
- **Dart** – Programming language
- **Firebase Messaging** – Push notifications
- **google_sign_in** – OAuth authentication
- **flutter_animate** – Micro-animations
- **iconsax** – Icon library

### Backend
- **Node.js + Express** – REST API
- **TypeScript** – Type safety
- **Prisma ORM** – Database access
- **PostgreSQL (Neon)** – Database
- **Redis** – Rate limiting
- **Firebase Admin** – FCM dispatch
- **Zod** – Request validation
- **Jose** – JWT handling
- **node-cron** – Task scheduling

### Monorepo Tooling
- **Turborepo** – Build orchestration
- **npm workspaces** – Package management
- **Vitest** – Testing
- **ESLint + Prettier** – Code quality

---

## Key Technical Decisions

### Why PostgreSQL SKIP LOCKED for Reminder Dispatch
The reminder scheduler runs every minute and claims due reminders. Using `SELECT ... FOR UPDATE SKIP LOCKED` ensures that multiple scheduler instances (if scaled horizontally) never process the same reminder twice. This pattern provides safe concurrent processing without complex distributed locking.

### Why Turborepo Monorepo
The project has three distinct packages (backend, database, and shared UI) that share TypeScript configurations and lint rules. Turborepo provides efficient build caching, parallel task execution, and dependency graph awareness across all packages.

### Recurring Event Implementation
Rather than generating all future instances upfront (which would be infinite for open-ended series), a daily cron job generates instances approximately 30 days ahead. This keeps the database lean while ensuring users always see upcoming events.

---

## Database Schema

The Prisma schema defines models for:
- **User** – Accounts, auth providers, timezone
- **Event** – With recurrence fields (frequency, interval, end date, parent event self-relation)
- **Reminder** – Scheduled offsets, retry state, locking columns
- **Category / EventCategory** – Categories with many-to-many join
- **Habit / HabitLog** – Habits with daily check-ins (unique per day)
- **DeviceToken / NotificationLog** – FCM tokens and delivery audit
- **Session / AuthAccount** – Refresh tokens and OAuth links

---

## API Reference

Base path: `/api/v1`

### Authentication
- `POST /auth/register` – Register new user
- `POST /auth/login` – Login with email/password
- `POST /auth/google` – Google Sign-In
- `POST /auth/refresh` – Refresh JWT token
- `GET /auth/me` – Get current user

### Events
- `POST /events` – Create event
- `GET /events` – List events (search, filters, pagination)
- `GET /events/:id` – Get event details
- `PATCH /events/:id` – Update event
- `DELETE /events/:id` – Delete event

### Habits
- `POST /habits` – Create habit
- `GET /habits` – List habits
- `PATCH /habits/:id` – Update habit
- `POST /habits/:id/check-in` – Check in for today
- `GET /habits/:id/streak` – Get streak data

### Notifications
- `PUT /notifications/device-token` – Register device token
- `GET /notifications/history` – View notification history
- `GET /notifications/health` – Check scheduler health

### Dashboard
- `GET /dashboard/summary` – Daily/weekly summary
- `GET /dashboard/analytics` – Habit completion analytics

---

## How Notifications Work

When a user creates an event with reminders, `Reminder` rows are scheduled at chosen offsets. A `node-cron` job runs every minute and:

1. Recovers stale locks from crashed scheduler instances
2. Claims due reminders using `SELECT ... FOR UPDATE SKIP LOCKED`
3. Dispatches via Firebase Admin to all active device tokens
4. Retries failures with exponential backoff and deactivates dead tokens
5. A daily job tops up open-ended recurring series approximately 30 days ahead

On the device: background/closed state shows system tray notifications; foreground shows themed in-app banners; tapping deep-links to the specific event.

---

## Impact

Nudge provides a production-ready reminder and habit tracking solution with a focus on reliability and user experience. The notification scheduler is built to handle scale with PostgreSQL row-level locking, and the Flutter frontend delivers a smooth, animated experience across both Android and iOS platforms.

---

## Future Enhancements

- Collaborative shared events and group habits
- Widget support for Android and iOS home screens
- Advanced analytics dashboard with habit trends
- Calendar integration with additional providers
- Dark mode with custom theme support
