"use client";

import { useRouter } from "next/navigation";
import { HiOutlineExternalLink, HiTrash } from "react-icons/hi";

export function ViewJob({ id }: { id: string }) {
  const router = useRouter();
  return (
    <>
      <button
        className="transition rounded-md p-2 border border-blue-500 bg-blue-600 hover:bg-blue-600/80"
        onClick={() => {
          router.push("/job/" + id);
        }}
      >
        <span className="sr-only">View</span>
        <HiOutlineExternalLink className="text-blue-100" size={18} />
      </button>
    </>
  );
}
export function DeleteJob({ id }: { id: string }) {
  return (
    <>
      <button className="transition rounded-md p-2 border border-rose-400 bg-rose-500 hover:bg-rose-600">
        <span className="sr-only">Delete</span>
        <HiTrash className="text-rose-100" size={18} />
      </button>
    </>
  );
}
