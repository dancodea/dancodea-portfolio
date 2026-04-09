import Link from "next/link";

export function HomeBanner() {
  return (
    <section className="flex min-h-[calc(100vh-3rem)] flex-col items-center justify-center px-4 py-16 text-center">
      <span className="mb-6 inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
        Full-Stack Developer
      </span>

      <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
        Crafting digital{" "}
        <span className="text-purple-500 dark:text-purple-400">masterpieces.</span>
      </h1>

      <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
        A digital curator blending architectural precision with aesthetic soul to build high-performance, scalable web experiences.
      </p>

      <div className="flex items-center gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full bg-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-200 hover:bg-purple-600 hover:shadow-xl hover:shadow-purple-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
