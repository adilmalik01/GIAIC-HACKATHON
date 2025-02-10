import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);

  console.log("middleware file is runing")

  const token = await getToken({ req: request, secret: "12345" });

  const isAdmin = token?.isAdmin === true;

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/profile") && isAdmin) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (pathname.startsWith("/dashboard") && !isAdmin) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (pathname === "/login" || pathname === "/signup") {
    if (token) {
      return NextResponse.redirect(new URL(isAdmin ? "/dashboard" : "/profile", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/profile", "/dashboard/:path*"],
};
