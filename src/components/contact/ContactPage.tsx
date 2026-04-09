import { ContactForm } from "@/components/contact/ContactForm";
import { DirectChannels, ConnectSocially } from "@/components/contact/ContactInfo";

export function ContactPage() {
  return (
    <section className="w-full bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Let's Talk</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <DirectChannels />
            <ConnectSocially />
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:justify-end">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider dark:text-gray-500">
                Workspace Image
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
