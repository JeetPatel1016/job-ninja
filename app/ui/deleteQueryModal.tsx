"use client";
import {
  useSearchParams,
  usePathname,
  useRouter,
  useParams,
} from "next/navigation";
import Link from "next/link";
import { BsX } from "react-icons/bs";
import { FormEvent } from "react";

export default function DeleteModal() {
  const searchParams = useSearchParams();
  const queryID = searchParams.get("deleteQuery");
  const pathname = usePathname();
  const { id: thisPageID } = useParams();
  const router = useRouter();
  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`/api/queries/${queryID}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (thisPageID === queryID) router.push("/");
      else router.back();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {queryID && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-slate-700/80 w-[500px] rounded-xl m-auto p-4 text-slate-300">
            <div className="flex items-center justify-between mb-8 border-b border-gray-600 -mx-4 px-4 pb-4">
              <h1 className="text-xl font-medium text-white">
                Delete Search Query?
              </h1>
            </div>
            <p className="mt-4">This will delete your search query.</p>
            <p className="mb-4 text-slate-400 text-sm">
              Your job postings will be saved.
            </p>
            <form
              onSubmit={submitHandler}
              className="flex items-center justify-end gap-4"
            >
              <Link href={pathname} className="inline-block text-center">
                Cancel
              </Link>
              <button
                type="submit"
                className="p-2 my-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white"
              >
                Delete
              </button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}
