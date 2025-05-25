// src/types/Job.ts
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;        // e.g., Full-time, Part-time
  description: string;
  postedAt: string;
  salary?: string;     // Optional, since you're using it in JobCard
}
