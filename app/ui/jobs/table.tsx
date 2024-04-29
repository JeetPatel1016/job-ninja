import Image from "next/image";
import ApplyStatus from "@/app/ui/jobs/status";
import { DeleteJob, ViewJob } from "@/app/ui/jobs/buttons";
import { listing } from "@/app/lib/jobListings";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";

export default async function JobListing({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const listings = listing;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block w-full align-middle">
        <table className="hidden min-w-full overflow-hidden rounded-xl md:table">
          <thead className="bg-slate-700 text-left font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium">
                Job Title
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Company
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Location
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Pay
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Posting Date
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-600/20">
            {listings?.map((listing) => (
              <tr
                key={listing.id}
                className="w-full py-3 text-sm last-of-type:border-none"
              >
                <td className="whitespace-nowrap py-3 pl-4 pr-3">
                  <p className="font-semibold">{listing.title}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {listing.company}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {listing.location}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {formatCurrency(listing.pay_min)}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {formatDateToLocal(listing.date_posted)}
                </td>
                <td className="whitespace-nowrap py-3 pl-3 pr-3">
                  <div className="flex gap-3">
                    <ViewJob id={listing.id} />
                    <DeleteJob id={listing.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
