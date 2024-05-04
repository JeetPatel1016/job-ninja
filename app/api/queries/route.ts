import prisma from "@/app/lib/prisma";
import { SearchQuery } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: Omit<SearchQuery, "id" | "createdAt" | "updatedAt">;
}

export async function GET(req: NextRequest) {
  const queries = await prisma.searchQuery.findMany();
  return NextResponse.json({ message: queries });
}

export async function POST(req: Request, context: any) {
  const data = await req.formData();
  const title = data.get("title") as string;
  const location = data.get("location") as string;
  const sites = data.getAll("sites").join(",") as string;

  const query = await prisma.searchQuery.create({
    data: {
      title: title,
      location: location,
      sites: sites,
    },
  });
  return NextResponse.json({ message: query });
}
