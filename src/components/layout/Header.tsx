'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/config/nav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-3 lg:px-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-gray-900 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/20 dark:text-white dark:hover:text-gray-300"
        >
          Dancodea
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gray-900 transition-all duration-200 dark:bg-white ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <MobileNav />
          </div>

          <ThemeToggle />

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#28a745]/60 bg-white px-2.5 py-1 text-xs font-semibold text-[#28a745] transition-all duration-200 hover:bg-[#28a745]/5 dark:border-[#28a745]/60 dark:bg-gray-950 dark:text-[#34ce57] dark:hover:bg-[#28a745]/10">
            <span className="h-1.5 w-1.5 rounded-full bg-[#28a745] dark:bg-[#34ce57]" />Available
          </span>
        </div>
      </div>
    </header>
  );
}
