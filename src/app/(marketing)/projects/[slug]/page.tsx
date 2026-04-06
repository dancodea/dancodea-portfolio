import { getAllProjectSlugs, getProjectBySlug } from "@/features/projects/lib/projects.service";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  await getProjectBySlug(slug);
  return null;
}
