import Image from "next/image";
import JobListing from "./ui/jobs/table";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl text-slate-400">
        <span className="font-semibold mr-2 text-white">NodeJS Developer</span>⋅
        Job Search
      </h1>
      <JobListing query="nodejs" currentPage={1} />
    </main>
  );
}
