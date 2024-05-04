import prisma from "@/app/lib/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(req: NextApiRequest, context: any) {
  const {
    params: { id },
  } = context;

  const query = await prisma.searchQuery.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Deleted Job" });
}