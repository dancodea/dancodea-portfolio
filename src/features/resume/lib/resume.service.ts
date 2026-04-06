export type ResumeSection = {
  id: string;
  title: string;
  items: Array<{ label: string; value: string }>;
};

export async function getResumeSections(): Promise<ResumeSection[]> {
  return [];
}
