import prisma from "@/app/lib/prisma";
import { BackButton } from "@/app/ui/jobs/buttons";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

export default async function JobPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const jobDesc = await prisma.jobPosting.findUnique({ where: { id } });
  return (
    <>
      <BackButton className="inline-flex text-sm items-center gap-1 text-slate-400 hover:text-white transition">
        <BiChevronLeft />
        <span>Back to Dashboard</span>
      </BackButton>
      <div className="px-4 mt-4 flex items-center justify-between">
        <div className="flex flex-col text-slate-300">
          <h3 className="text-lg font-medium">{jobDesc?.company}</h3>
          <h2 className="text-3xl font-semibold text-white">
            {jobDesc?.title}
          </h2>
          <span className="mt-2">
            <span className="px-2 py-1 bg-blue-700 text-white rounded-full">
              {jobDesc?.location}
            </span>
          </span>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-xl">Pay Range</h2>
          <p className="text-3xl text-white font-semibold">
            {jobDesc?.pay_min} - {jobDesc?.pay_max} {jobDesc?.currency || "CAD"}
          </p>
          <span className="mt-2">
            <span className="px-2 py-1 bg-green-700 text-white rounded-full capitalize">
              {jobDesc?.pay_interval}
            </span>
          </span>
        </div>
      </div>
      <div className="mt-8 mb-4 px-4">
        <p className="whitespace-break-spaces">{jobDesc?.description}</p>
      </div>
      <Link
        href={jobDesc?.job_link as string}
        target="_blank"
        className="mx-4 transition bg-blue-600 hover:bg-blue-600/80 rounded-md px-4 py-2"
      >
        Open Posting Link
      </Link>
    </>
  );
}
