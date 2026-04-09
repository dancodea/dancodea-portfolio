import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/features/projects/data/projects.data";

export function FeaturedProjects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="w-full bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            A selection of recent works focusing on technical complexity and user-centric design.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
