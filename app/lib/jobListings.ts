import { JobPosting } from "./definitions";

export const listing: JobPosting[] = [
  {
    id: "12354",
    title: "Software Engineer - Frontend",
    company: "Company A",
    description: "Test",
    currency: "CAD",
    location: "Toronto",
    pay_interval: "yearly",
    pay_min: 110000,
    pay_max: 130000,
    date_posted: "2024-03-05",
    is_remote: true,
    job_link: "https://www.glassdoor.com/",
  },
  {
    id: "78123",
    title: "Software Engineer - Backend",
    company: "Company B",
    description: "Testing",
    currency: "CAD",
    location: "Kitchner",
    pay_interval: "monthly",
    pay_min: 35,
    pay_max: 45,
    date_posted: "2024-04-05",
    is_remote: true,
    job_link: "https://www.glassdoor.com/",
  },
];
