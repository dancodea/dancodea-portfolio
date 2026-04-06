import { serverEnv } from "@/server/env/server-env";
import { resendSendEmail } from "@/server/email/resend.client";
import type { ContactPayload } from "@/types/contact";

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const subject = `Portfolio contact from ${payload.name}`;

  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    "",
    payload.message,
  ].join("\n");

  const result = await resendSendEmail({
    from: serverEnv.CONTACT_FROM_EMAIL,
    to: serverEnv.CONTACT_TO_EMAIL,
    subject,
    text,
    reply_to: payload.email,
  });

  if (result.error?.message) {
    throw new Error(result.error.message);
  }
}
