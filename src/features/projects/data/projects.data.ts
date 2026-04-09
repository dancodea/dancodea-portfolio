import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    slug: "lumina-analytics",
    title: "Lumina Analytics",
    summary: "Real-time data visualization platform for enterprise logistics.",
    description: "Real-time data visualization platform for enterprise logistics with low-latency updates.",
    tags: ["REACT", "D3.JS"],
    featured: true,
  },
  {
    slug: "veloce-commerce",
    title: "Veloce Commerce",
    summary: "High-performance headless e-commerce solution.",
    description: "High-performance headless e-commerce solution with sub-second page loads.",
    tags: ["NEXT.JS", "STRIPE"],
    featured: true,
  },
  {
    slug: "flow-engine",
    title: "Flow Engine",
    summary: "Distributed task queue and management system.",
    description: "Distributed task queue and management system handling millions of daily jobs.",
    tags: ["NODE.JS", "REDIS"],
    featured: true,
  },
  {
    slug: "helix-core",
    title: "Helix Core",
    summary: "Systems programming with Rust and WebGL.",
    description: "Systems programming with Rust and WebGL for high-performance computing.",
    tags: ["RUST", "WEBGL"],
    featured: true,
  },
  {
    slug: "nexus-api",
    title: "Nexus API",
    summary: "GraphQL API infrastructure on AWS.",
    description: "GraphQL API infrastructure built on AWS for scalable data access.",
    tags: ["GRAPHQL", "AWS"],
    featured: true,
  },
  {
    slug: "aura-wallet",
    title: "Aura Wallet",
    summary: "iOS finance application with Swift.",
    description: "iOS finance application built with Swift and UIKit for seamless payments.",
    tags: ["SWIFT", "UIKIT"],
    featured: true,
  },
];
