"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { BsX } from "react-icons/bs";
import { FormEvent } from "react";

export default function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("newQuery");
  const pathname = usePathname();
  const router = useRouter();
  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/queries", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const {
        message: { id },
      } = data;
      router.push(`/c/${id}`);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-slate-700/80 w-[500px] rounded-xl m-auto p-4 text-slate-300">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-xl font-medium text-white">New Job Search</h1>
              <Link
                href={pathname}
                className="transition text-slate-300 hover:text-red-400"
              >
                <BsX size={32} />
              </Link>
            </div>
            <form onSubmit={submitHandler} className="flex flex-col">
              <label htmlFor="jobTitle" className="text-sm mb-1">
                Job Title
              </label>
              <input
                className="bg-slate-600/75 focus:bg-slate-500/60 transition-colors p-2 rounded-md mb-4"
                type="text"
                name="title"
                id="title"
              />
              <label htmlFor="jobLocation" className="text-sm mb-1">
                Location
              </label>
              <input
                className="bg-slate-600/75 focus:bg-slate-500/60 transition-colors p-2 rounded-md mb-4"
                type="text"
                name="location"
                id="location"
              />
              <fieldset>
                <legend className="text-sm mb-1">Job Boards</legend>
                <div className="flex overflow-hidden items-center w-full text-sm font-medium gap-3 text-white mb-4">
                  <div className="w-full border-gray-200 bg-slate-600/50 rounded-lg overflow-hidden">
                    <input
                      id="indeed"
                      type="checkbox"
                      value="indeed"
                      name="sites"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="indeed"
                      className="transition w-full inline-block px-4 py-3 text-sm font-medium text-gray-300 peer-checked:bg-green-600 peer-checked:text-white"
                    >
                      Indeed
                    </label>
                  </div>
                  <div className="w-full border-gray-200 bg-slate-600/50 rounded-lg overflow-hidden">
                    <input
                      id="glassdoor"
                      type="checkbox"
                      value="glassdoor"
                      name="sites"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="glassdoor"
                      className="transition w-full inline-block px-4 py-3 text-sm font-medium text-gray-300 peer-checked:bg-green-600 peer-checked:text-white"
                    >
                      GlassDoor
                    </label>
                  </div>
                  <div className="w-full border-gray-200 bg-slate-600/50 rounded-lg overflow-hidden">
                    <input
                      id="ziprecruiter"
                      type="checkbox"
                      value="ziprecruiter"
                      name="sites"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="ziprecruiter"
                      className="transition w-full inline-block px-4 py-3 text-sm font-medium text-gray-300 peer-checked:bg-green-600 peer-checked:text-white"
                    >
                      ZipRecruiter
                    </label>
                  </div>
                </div>
              </fieldset>
              <button
                type="submit"
                className="p-2 my-1 rounded-lg bg-blue-600 text-white"
              >
                Search
              </button>
              <Link href={pathname} className="p-2 inline-block text-center">
                Cancel
              </Link>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}
