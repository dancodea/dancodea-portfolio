import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  readonly project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-lg hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider dark:text-gray-500">
            {project.tags?.[0] || "Project"}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-purple-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-sm font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
        >
          View Case Study<span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
