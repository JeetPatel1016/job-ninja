import { HiCheck, HiClock } from "react-icons/hi";
import clsx from "clsx";

export default function ApplyStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": status === "pending",
          "bg-green-500 text-white": status === "applied",
        }
      )}
    >
      {status === "pending" ? (
        <>
          Pending
          <HiClock className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === "applied" ? (
        <>
          Paid
          <HiCheck className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
