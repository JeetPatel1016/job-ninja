import Image from "next/image";
import JobListing from "./ui/jobs/table";

export default function Home() {
  return (
    <main className="h-[75%] flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-2">Welcome to Job Ninja</h1>
      <p className="text-xl text-slate-300/80">
        To get started, create new search query
      </p>
    </main>
  );
}
