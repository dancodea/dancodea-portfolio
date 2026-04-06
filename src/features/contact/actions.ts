"use server";

import type { ContactSubmissionResult } from "@/types/contact";
import { validateContactPayload } from "@/features/contact/lib/contact.validation";
import { sendContactEmail } from "@/server/email/contact-email.service";

export async function submitContact(
  _prevState: ContactSubmissionResult | null,
  formData: FormData,
): Promise<ContactSubmissionResult> {
  try {
    const payload = validateContactPayload({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    await sendContactEmail(payload);

    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Contact submission failed";
    return { ok: false, error: message };
  }
}
