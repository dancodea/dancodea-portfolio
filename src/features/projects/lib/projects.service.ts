import { PROJECTS } from "../data/projects.data";
import type { Project } from "@/types/project";

export async function listProjects(): Promise<Project[]> {
  return PROJECTS.slice().sort((a, b) => {
    const aFeatured = a.featured ? 1 : 0;
    const bFeatured = b.featured ? 1 : 0;
    if (aFeatured !== bFeatured) return bFeatured - aFeatured;
    return a.title.localeCompare(b.title);
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
