import { validateContactPayload } from "@/features/contact/lib/contact.validation";
import { sendContactEmail } from "@/server/email/contact-email.service";

export async function POST(req: Request): Promise<Response> {
  try {
    const json = (await req.json()) as unknown;
    const payload = validateContactPayload(json);
    await sendContactEmail(payload);

    return Response.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Contact submission failed";
    return Response.json({ ok: false, error: message }, { status: 400 });
  }
}
