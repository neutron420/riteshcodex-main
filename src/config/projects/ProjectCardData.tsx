import NextJs from '@/components/icons/tech/NextJS';
import TailwindCss from '@/components/icons/tech/TailwindCss';
import TypeScript from '@/components/icons/tech/TypeScript';
import Bun from '@/components/icons/tech/Bun';
import ExpressJs from '@/components/icons/tech/ExpressJs';
import PostgreSQL from '@/components/icons/tech/PostgreSQL';
import Redis from '@/components/icons/tech/Redis';
import AWS from '@/components/icons/tech/AWS';
import Flutter from '@/components/icons/tech/Flutter';
import { NodeJs } from '@/lib/techIcons';
import { Python } from '@/components/icons/tech/Python';
import FastAPI from '@/components/icons/tech/FastAPI';
import Discord from '@/components/icons/tech/Discord';
import Kubernetes from '@/components/icons/tech/Kubernetes';
import Prometheus from '@/components/icons/tech/Prometheus';
import Grafana from '@/components/icons/tech/Grafana';
import Docker from '@/components/icons/tech/Docker';
import Terraform from '@/components/icons/tech/Terraform';
import Go from '@/components/icons/tech/Go';
import Cloudflare from '@/components/icons/tech/Cloudflare';
import OpenTelemetry from '@/components/icons/tech/OpenTelemetry';
import Kafka from '@/components/icons/tech/Kafka';
import RabbitMQ from '@/components/icons/tech/RabbitMQ';

export const ProjectCardData = [
  {
    id: 1,
    title: 'Devix',
    subheading: 'Engineering Knowledge Sharing Platform',
    img: {
      src: '/projects/project2.avif',
      alt: 'Devix platform screenshot',
      width: 1920,
      height: 1080,
    },
    description:
      'Devix is a production-grade, modular monolith backend architected for a developer-centric knowledge sharing and collaboration platform. Built with Go, GORM, and PostgreSQL, it implements Clean Architecture principles with isolated domain modules. Features include JWT authentication with refresh token rotation and Argon2id hashing, real-time WebSocket event broadcasting via Gorilla WebSocket, Cloudflare R2 media storage, and GORM Auto-Migration for schema management. The modular monolith design enables future migration to microservices.',
    links: {
      website: 'https://devix-frontend.vercel.app/',
      github: 'https://github.com/neutron420/Devix',
      details: '/projects/devix',
    },
    technologies: [
      {
        name: 'Go',
        icon: <Go />,
        href: 'https://go.dev/',
      },
      {
        name: 'PostgreSQL',
        icon: <PostgreSQL />,
        href: 'https://www.postgresql.org/',
      },
      {
        name: 'Cloudflare',
        icon: <Cloudflare />,
        href: 'https://www.cloudflare.com/',
      },
      {
        name: 'Docker',
        icon: <Docker />,
        href: 'https://www.docker.com/',
      },
    ],
    isWorking: true,
    isBulding: true,
    details: true,
    projectDetailsPageSlug: '/projects/devix',
  },
  {
    id: 2,
    title: 'RakshaSetu',
    subheading: 'Disaster Management Platform',
    img: {
      src: '/projects/project1.avif',
      width: 1920,
      height: 1080,
    },
    description:
      'RakshaSetu is a full-stack, real-time disaster management and citizen safety platform. It combines a React Native mobile application with a high-performance Bun.js backend to provide end-to-end emergency response capabilities — from SOS reporting and AI-powered triage to volunteer dispatch and crowd-sourced danger mapping. Features include real-time SOS with AI severity scoring, automated volunteer dispatch via geospatial proximity, early warning system integrating USGS earthquake data and OpenWeatherMap alerts, geofence-based danger zone alerts, offline-capable BLE mesh relay for SOS broadcast without internet, and AI-powered chatbot for emergency guidance.',
    links: {
      website: 'https://github.com/neutron420/RakshaSetu',
      github: 'https://github.com/neutron420/RakshaSetu',
      details: '/projects/rakshasetu',
    },
    technologies: [
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Bun',
        icon: <Bun />,
        href: 'https://bun.sh/',
      },
      {
        name: 'Express.js',
        icon: <ExpressJs />,
        href: 'https://expressjs.com/',
      },
      {
        name: 'PostgreSQL',
        icon: <PostgreSQL />,
        href: 'https://www.postgresql.org/',
      },
      {
        name: 'Redis',
        icon: <Redis />,
        href: 'https://redis.io/',
      },
      {
        name: 'AWS',
        icon: <AWS />,
        href: 'https://aws.amazon.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/rakshasetu',
  },
  {
    id: 3,
    title: 'Nudge',
    subheading: 'Smart Schedule & Habit Companion',
    img: {
      src: '/projects/project3.avif',
      alt: 'Nudge Flutter app screenshot',
      width: 1920,
      height: 1080,
    },
    description:
      'Nudge is a full-stack reminder and habit tracking platform built with Flutter and Node.js. It keeps users on track with recurring events, color-coded categories, powerful search, a habit tracker with streaks, and real-time push notifications via Firebase Cloud Messaging. The backend uses TypeScript, Express, Prisma, PostgreSQL, and Redis with a Turborepo monorepo architecture for scalable development.',
    links: {
      website: 'https://github.com/neutron420/Nudge',
      github: 'https://github.com/neutron420/Nudge',
      details: '/projects/nudge',
    },
    technologies: [
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Flutter',
        icon: <Flutter />,
        href: 'https://flutter.dev/',
      },
      {
        name: 'Express.js',
        icon: <ExpressJs />,
        href: 'https://expressjs.com/',
      },
      {
        name: 'PostgreSQL',
        icon: <PostgreSQL />,
        href: 'https://www.postgresql.org/',
      },
      {
        name: 'Redis',
        icon: <Redis />,
        href: 'https://redis.io/',
      },
      {
        name: 'Node.js',
        icon: <NodeJs />,
        href: 'https://nodejs.org/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/nudge',
  },
  {
    id: 4,
    title: 'SRE-Devops Copilot',
    subheading: 'AI-Powered SRE Discord Bot',
    img: {
      src: '/projects/project1.avif',
      alt: 'SRE-Devops Copilot screenshot',
      width: 1920,
      height: 1080,
    },
    description:
      'An intelligent, enterprise-ready, AI-powered Site Reliability Engineering (SRE) assistant designed for Discord. It allows multiple organizations to securely register, monitor, and troubleshoot their independent Kubernetes clusters and Prometheus metric endpoints. Features include multi-tenant cluster registration with AES-256 encrypted kubeconfigs, agentic incident diagnostics via LangGraph with Gemini 2.5 Flash, proactive health monitoring alerts, interactive log tail and search, and runbook RAG using ChromaDB.',
    links: {
      website: 'https://sre-dev.vercel.app/',
      github: 'https://github.com/neutron420/SRE-Devops',
      details: '/projects/sre-devops',
    },
    technologies: [
      {
        name: 'Python',
        icon: <Python />,
        href: 'https://www.python.org/',
      },
      {
        name: 'FastAPI',
        icon: <FastAPI />,
        href: 'https://fastapi.tiangolo.com/',
      },
      {
        name: 'Discord',
        icon: <Discord />,
        href: 'https://discord.com/developers/docs',
      },
      {
        name: 'Kubernetes',
        icon: <Kubernetes />,
        href: 'https://kubernetes.io/',
      },
      {
        name: 'Prometheus',
        icon: <Prometheus />,
        href: 'https://prometheus.io/',
      },
      {
        name: 'Grafana',
        icon: <Grafana />,
        href: 'https://grafana.com/',
      },
      {
        name: 'PostgreSQL',
        icon: <PostgreSQL />,
        href: 'https://www.postgresql.org/',
      },
      {
        name: 'Docker',
        icon: <Docker />,
        href: 'https://www.docker.com/',
      },
      {
        name: 'Terraform',
        icon: <Terraform />,
        href: 'https://www.terraform.io/',
      },
      {
        name: 'AWS',
        icon: <AWS />,
        href: 'https://aws.amazon.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/sre-devops',
  },
  {
    id: 5,
    title: 'Limiter.io',
    subheading: 'Distributed API Rate Limiting Platform',
    img: {
      src: '/projects/project4.avif',
      width: 1920,
      height: 1080,
    },
    description:
      'A production-grade, highly scalable distributed API Rate Limiting Platform built in Go and Next.js, inspired by Cloudflare Rate Limiting and Upstash. Enforces fine-grained API throttling at sub-millisecond speeds using 5 algorithmic engines — Token Bucket, Fixed Window, Sliding Window Counter, Sliding Window Log, and Leaky Bucket. Features include multi-tenant team collaboration with RBAC, WebAuthn/SSO enterprise security, real-time analytics with P95/P99 percentiles, Kafka-based async analytics pipeline, and OpenTelemetry distributed tracing.',
    links: {
      website: 'https://neutrondev.in/',
      github: 'https://github.com/neutron420/Limiter.io',
      details: '/projects/limiter-io',
    },
    technologies: [
      {
        name: 'Go',
        icon: <Go />,
        href: 'https://go.dev/',
      },
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://www.typescriptlang.org/',
      },
      {
        name: 'PostgreSQL',
        icon: <PostgreSQL />,
        href: 'https://www.postgresql.org/',
      },
      {
        name: 'Redis',
        icon: <Redis />,
        href: 'https://redis.io/',
      },
      {
        name: 'Kafka',
        icon: <Kafka />,
        href: 'https://kafka.apache.org/',
      },
      {
        name: 'Docker',
        icon: <Docker />,
        href: 'https://www.docker.com/',
      },
      {
        name: 'Kubernetes',
        icon: <Kubernetes />,
        href: 'https://kubernetes.io/',
      },
      {
        name: 'OpenTelemetry',
        icon: <OpenTelemetry />,
        href: 'https://opentelemetry.io/',
      },
      {
        name: 'Cloudflare',
        icon: <Cloudflare />,
        href: 'https://www.cloudflare.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/limiter-io',
  },
  {
    id: 6,
    title: 'StackAudit',
    subheading: 'Backend Health & Security Audit Tool',
    img: {
      src: '/projects/trackhatke.avif',
      alt: 'StackAudit terminal UI screenshot',
      width: 1920,
      height: 1080,
    },
    description:
      'A high-performance, developer-first CLI tool that audits your backend project\'s health, security, and infrastructure readiness in seconds. Runs entirely locally ensuring your secrets never leave your machine. Features include secrets exposure scanning, Docker container auditing, Kubernetes manifest validation, ports and sockets sweeping, extensible YAML plugins, and an interactive web TUI for visualizing audit results.',
    links: {
      website: 'https://audit-one-livid.vercel.app/',
      github: 'https://github.com/neutron420/StackAudit',
      details: '/projects/stackaudit',
    },
    technologies: [
      {
        name: 'Go',
        icon: <Go />,
        href: 'https://go.dev/',
      },
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://www.typescriptlang.org/',
      },
      {
        name: 'TailwindCSS',
        icon: <TailwindCss />,
        href: 'https://tailwindcss.com/',
      },
      {
        name: 'Docker',
        icon: <Docker />,
        href: 'https://www.docker.com/',
      },
      {
        name: 'Kubernetes',
        icon: <Kubernetes />,
        href: 'https://kubernetes.io/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/stackaudit',
  },
  {
    id: 7,
    title: 'Q-flow (Lineo)',
    subheading: 'Enterprise Queue Orchestration Hub',
    img: {
      src: '/projects/tccommit.avif',
      alt: 'Lineo queue management dashboard screenshot',
      width: 1920,
      height: 1080,
    },
    description:
      'An enterprise multi-tenant queue orchestration and performance hub solving the five critical failures of traditional queue management systems: travel blind spot, offline failure, no-show revenue leak, crowding paradox, and static slot allocation. Features proactive geofencing with Haversine distance validation, offline-first resilience via IndexedDB token cache, intelligent slot re-balancing with auto-cancellation, virtual waiting room with real-time WebSocket fan-out, and staff manual override capabilities.',
    links: {
      website: 'https://lineo-five.vercel.app/',
      github: 'https://github.com/neutron420/Q-flow',
      details: '/projects/lineo',
    },
    technologies: [
      {
        name: 'Go',
        icon: <Go />,
        href: 'https://go.dev/',
      },
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'PostgreSQL',
        icon: <PostgreSQL />,
        href: 'https://www.postgresql.org/',
      },
      {
        name: 'Redis',
        icon: <Redis />,
        href: 'https://redis.io/',
      },
      {
        name: 'RabbitMQ',
        icon: <RabbitMQ />,
        href: 'https://www.rabbitmq.com/',
      },
      {
        name: 'Docker',
        icon: <Docker />,
        href: 'https://www.docker.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/lineo',
  },
];
