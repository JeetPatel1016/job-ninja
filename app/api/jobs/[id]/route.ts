import prisma from "@/app/lib/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export function GET(req: NextApiRequest) {
  return Response.json({ message: "Hello from Next.js" });
}

export async function DELETE(req: NextApiRequest, context: any) {
  const {
    params: { id },
  } = context;

  const job = await prisma.jobPosting.update({
    where: { id },
    data: { deletedAt: new Date() },
  });

  return NextResponse.json({ message: "Deleted Job" });
}
