import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const district = searchParams.get("district");

  const jobs = await prisma.job.findMany({
    where: district ? { location: district } : {},
    include: { worker: { select: { id: true, name: true, role: true } } },
  });

  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  const { workerId, title, category, description, price, unit, location } = await req.json();

  const job = await prisma.job.create({
    data: { workerId, title, category, description, price, unit, location },
  });

  return NextResponse.json(job);
}
