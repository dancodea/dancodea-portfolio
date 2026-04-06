function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const serverEnv = {
  RESEND_API_KEY: requireEnv("RESEND_API_KEY"),
  CONTACT_TO_EMAIL: requireEnv("CONTACT_TO_EMAIL"),
  CONTACT_FROM_EMAIL: requireEnv("CONTACT_FROM_EMAIL"),
};
