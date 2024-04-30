"use client";
import { usePathname, useRouter } from "next/navigation";
import { BiChevronLeft } from "react-icons/bi";

export default function JobPage({ params }: { params: { id: string } }) {
  const jobID = params.id;
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.back();
        }}
        className="inline-flex text-sm items-center gap-1 text-slate-400 hover:text-white transition"
      >
        <BiChevronLeft />
        <span>Back to Dashboard</span>
      </button>
      <div className="px-4 mt-4 flex items-center justify-between">
        <div className="flex flex-col text-slate-300">
          <h3 className="text-lg font-medium">PostGrid LLC</h3>
          <h2 className="text-3xl font-semibold text-white">
            NodeJS Developer
          </h2>
          <span className="mt-2">
            <span className="px-2 py-1 bg-blue-700 text-white rounded-full">
              Remote
            </span>
          </span>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-xl">Pay Range</h2>
          <p className="text-3xl text-white font-semibold">$45 - $55 CAD</p>
          <span className="mt-2">
            <span className="px-2 py-1 bg-green-700 text-white rounded-full">
              Hourly
            </span>
          </span>
        </div>
      </div>
      <div className="mt-8 px-4">
        <p className="whitespace-break-spaces">
          ***MUST BE A CANADIAN CITIZEN OR A CANADIAN PERMANENT RESIDENT OR TO
          APPLY.*** Junior Developer Position 1. Technical Skills & Tools:
          Proficient in React, Express.js, Node.js, JavaScript, CSS, HTML5, and
          Git, which are all are . Ideally uses Microsoft VS Code to develop,
          and has a solid understanding of Photoshop for design purposes. Some
          knowledge of CI/CD practices and a DevOps approach is of benefit as
          well. 2. Modular Development & API Integration: Proficient in
          developing modular code with micro-functions, ensuring scalability and
          maintainability. Well versed in connecting to external APIs and
          seamlessly swapping in and out components of modular code.
          Understanding of API integration best practices and the ability to
          effectively utilize external resources in development projects. 3.
          Version Control & Testing: Well versed in GitHub and understands
          version control workflow. Experience in setting up and writing unit
          tests to prevent bugs. 4. Problem Solving & Critical Thinking: Solid
          understanding of algorithms and data structures, alongside the ability
          to use critical thinking to solve coding issues and debug effectively.
          The ability to pay meticulous attention to detail, and look at the big
          picture when solving problems or creating functions. Should have an
          understand of how to use large-language models for problem solving and
          research. 5. Teamwork & Communication: Can work effectively in a team,
          communicate ideas clearly and accepts feedback constructively.
          Demonstrates persistence, curiosity, and a mindset that embraces
          continuous learning and adaptation to new technologies and trends.
          Demonstrates good time management skills and the ability to work
          independently, taking initiative where needed. 6. UX/Design
          Principles: An understanding of user experience design and the ability
          to use tools like Photoshop for design work. Job Type: Permanent Pay:
          From $50,000.00 per year Benefits: Dental care Extended health care
          Paid time off Flexible Language Requirement: French not required
          Schedule: 8 hour shift Experience: React, Express.js, Node.js,
          JavaScript, CSS, HTML5, Git.: 1 year (required) Work Location: Remote
        </p>
      </div>
      <button className="mx-4 mt-4 transition bg-blue-600 hover:bg-blue-600/80 rounded-md px-4 py-2">
        Open Posting Link
      </button>
    </>
  );
}
