"use client";

import { useActionState } from "react";
import type { ContactSubmissionResult } from "@/types/contact";
import { submitContact } from "@/features/contact/actions";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactSubmissionResult | null, FormData>(
    submitContact,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="space-y-1">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
        />
      </div>

      {state && !state.ok && state.error && (
        <p className="text-sm text-red-600 dark:text-red-400">{state.error}</p>
      )}

      {state?.ok && (
        <p className="text-sm text-green-600 dark:text-green-400">Message sent successfully!</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center rounded-full bg-purple-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-200 hover:bg-purple-600 hover:shadow-xl hover:shadow-purple-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
