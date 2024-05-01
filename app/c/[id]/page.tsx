import Image from "next/image";
import JobListing from "@/app/ui/jobs/table";
import prisma from "@/app/lib/prisma";
import { FcBrokenLink } from "react-icons/fc";
import { sora } from "@/app/ui/fonts";
import Link from "next/link";

export default async function SearchQuery({
  params,
}: {
  params: { id: string };
}) {
  const searchQuery = await prisma.searchQuery.findUnique({
    where: { id: params.id },
    include: { jobs: true },
  });
  return (
    <main>
      {searchQuery ? (
        <>
          <div className="flex items-center">
            <h1 className="text-2xl text-slate-400">
              <span className="font-semibold mr-2 text-white">
                {searchQuery?.title}
              </span>
              ⋅ Job Search
            </h1>
            <button className="py-2 px-4 bg-blue-600 rounded-md ml-auto">
              Scrap more Jobs
            </button>
          </div>
          {searchQuery.jobs.length ? (
            "1"
          ) : (
            <>
              <p className="mt-4 text-xl text-slate-300">No Job Postings</p>
            </>
          )}
          {/* <JobListing query="nodejs" currentPage={1} /> */}
        </>
      ) : (
        <div className="flex flex-col items-center justify-between">
          <FcBrokenLink size={152} className="-rotate-45 mb-10" />
          <h3 className={` text-5xl ${sora.className} mb-2`}>Oops!</h3>
          <p className="text-2xl text-gray-400 mb-5">
            We are unable to find your page
          </p>
          <Link
            href={"/"}
            className="px-4 py-2 w-36 bg-blue-600 text-center rounded"
          >
            Back to home
          </Link>
        </div>
      )}
    </main>
  );
}
