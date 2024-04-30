// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type SearchQuery = {
  id: string;
  title: string;
  location: string;
  sites: string;
};

export type JobPosting = {
  id: string;
  title: string;
  company: string;
  location: string | null;
  pay_interval: string;
  pay_min: number;
  pay_max: number;
  currency?: string;
  description: string;
  date_posted: string;
  is_remote: boolean;
  job_link: string;
};
