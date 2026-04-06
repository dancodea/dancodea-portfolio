export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description?: string;
  tags?: string[];
  featured?: boolean;
  links?: ProjectLink[];
  startDate?: string;
  endDate?: string;
};
