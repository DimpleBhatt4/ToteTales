import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const token = cookies().get("token")?.value;

    if (!token) {
      return NextResponse.json({ isAuthenticated: false });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    return NextResponse.json({ isAuthenticated: true, userId: decoded.id });
  } catch (error) {
    return NextResponse.json({ isAuthenticated: false });
  }
}
