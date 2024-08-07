import { auth } from "@/auth"




export const config = {
  matcher: ["/((?!api|_next/static|_next/image?|favicon.ico|imageLogin.webp).*)"],
}
 

export default auth((req) => {

  if(req.auth && (req.nextUrl.pathname == "/login" || req.nextUrl.pathname == "/register"  )){
    const newUrl = new URL("/",req.nextUrl.origin)
    return Response.redirect(newUrl)
  }

  if (!req.auth && (req.nextUrl.pathname !== "/login" && req.nextUrl.pathname !== "/register"  ) ) {
    const newUrl = new URL("/login" , req.nextUrl.origin)
   
    return Response.redirect(newUrl)
  }

})
