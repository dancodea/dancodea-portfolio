import type { ContactPayload } from "@/types/contact";

export function validateContactPayload(input: unknown): ContactPayload {
  if (!input || typeof input !== "object") {
    throw new Error("Invalid payload");
  }

  const record = input as Record<string, unknown>;

  const name = record.name;
  const email = record.email;
  const message = record.message;

  if (typeof name !== "string" || name.trim().length === 0) {
    throw new Error("Name is required");
  }

  if (typeof email !== "string" || email.trim().length === 0) {
    throw new Error("Email is required");
  }

  if (typeof message !== "string" || message.trim().length === 0) {
    throw new Error("Message is required");
  }

  return {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };
}
