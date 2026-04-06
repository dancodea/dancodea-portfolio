export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactSubmissionResult =
  | { ok: true }
  | { ok: false; error: string };
