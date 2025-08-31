import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const chat = await prisma.chat.findUnique({
    where: { id: params.id },
    include: { messages: { include: { sender: { select: { id: true, name: true } } } } },
  });

  if (!chat) return NextResponse.json({ error: "Chat not found" }, { status: 404 });
  return NextResponse.json(chat);
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { senderId, text } = await req.json();

  const message = await prisma.message.create({
    data: { chatId: params.id, senderId, text },
  });

  return NextResponse.json(message);
}
