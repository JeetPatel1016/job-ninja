import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import { prisma } from "@/app/lib/prisma";
import { usePathname } from "next/navigation";
import { headers } from "next/headers";

export default async function Sidebar() {
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get("x-url") || "";
  const queryID = header_url.split("/").slice(-1)[0];
  const queries = await prisma.searchQuery.findMany();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 gap-3">
      {/* New Button */}
      <Link
        href="/?newQuery=true"
        className="w-full flex items-center gap-4 rounded-md transition bg-blue-600 hover:bg-blue-600/80 px-4 py-3"
      >
        <FaPlus size={16} />
        New Search Thread
      </Link>
      {/* History */}
      <ul className="hidden h-auto w-full grow rounded-md bg-slate-700 md:block p-2">
        {queries.map((searchQuery) => {
          return (
            <li
              key={searchQuery.id}
              className={`transition p-2 hover:bg-slate-600 rounded cursor-pointer flex justify-between ${
                searchQuery.id === queryID ? "activeLink" : ""
              }`}
            >
              <Link
                href={`/c/${searchQuery.id}`}
                className="text-ellipsis truncate w-[80%]"
              >
                {searchQuery.title}
              </Link>
              <Link
                href={`/?deleteQuery=${searchQuery.id}`}
                className="transition p-1 rounded-sm hover:text-rose-400"
              >
                <FaTrashAlt />
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Logout Button */}
      {/* <form>
        <button className="transition-colors flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-slate-700 hover:bg-rose-500/70 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form> */}
    </div>
  );
}
