// src/types/Job.ts
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  postedAt: string;
  salary?: string; // Optional
}
