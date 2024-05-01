"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineExternalLink, HiTrash } from "react-icons/hi";

export function ViewJob({ id }: { id: string }) {
  return (
    <>
      <Link
        className="transition rounded-md p-2 border border-blue-500 bg-blue-600 hover:bg-blue-600/80"
        href={`/job/${id}`}
      >
        <span className="sr-only">View</span>
        <HiOutlineExternalLink className="text-blue-100" size={18} />
      </Link>
    </>
  );
}
export function DeleteJob({ id }: { id: string }) {
  const router = useRouter();
  const removeJobPosting = async () => {
    try {
      const response = await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response) {
        const data = await response.json();
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      type="submit"
      className="transition rounded-md p-2 border border-rose-400 bg-rose-500 hover:bg-rose-600"
      onClick={removeJobPosting}
    >
      <HiTrash className="text-rose-100" size={18} />
    </button>
  );
}
export function BackButton({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  const router = useRouter();
  return (
    <button
      className={className}
      onClick={() => {
        router.back();
      }}
    >
      {children}
    </button>
  );
}
