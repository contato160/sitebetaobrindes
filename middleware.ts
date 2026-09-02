import { NextRequest, NextResponse } from "next/server";
import { NEGOCIO } from "./lib/negocio";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  if (host.startsWith("www.")) {
    const url = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      `https://${NEGOCIO.dominio}`
    );
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
