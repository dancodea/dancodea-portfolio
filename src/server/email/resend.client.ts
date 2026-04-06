import { serverEnv } from "@/server/env/server-env";

type ResendSendEmailPayload = {
  from: string;
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  reply_to?: string;
};

type ResendSendEmailResponse = {
  id?: string;
  error?: { message: string };
};

export async function resendSendEmail(
  payload: ResendSendEmailPayload,
): Promise<ResendSendEmailResponse> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serverEnv.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => ({}))) as ResendSendEmailResponse;

  if (!res.ok) {
    const message = data?.error?.message ?? `Resend request failed (${res.status})`;
    return { error: { message } };
  }

  return data;
}
