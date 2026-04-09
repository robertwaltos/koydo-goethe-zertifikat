import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "goethe-zertifikat", message: "Dashboard endpoint — connect to Supabase for live data", sections: ["Lesen","Hören","Schreiben","Sprechen"] });
}
