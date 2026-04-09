import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "goethe-zertifikat", message: "Questions endpoint — connect to Supabase for question bank", categories: ["Lesen","Hören","Schreiben","Sprechen"] });
}
