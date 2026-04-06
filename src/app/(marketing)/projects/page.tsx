import { listProjects } from "@/features/projects/lib/projects.service";

export default async function ProjectsIndexPage() {
  await listProjects();
  return null;
}
