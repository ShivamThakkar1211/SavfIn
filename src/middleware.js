import { NextResponse } from 'next/server'
 

export function middleware(request) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail' 
  const isADmin = path === '/adminLogin'

  const token = request.cookies.get('token')?.value || ''
  const tokenNew = request.cookies.get('tokenData')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
  if(isADmin && tokenNew){
    return NextResponse.redirect(new URL('/admin',request.nextUrl))
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/services',
    '/login',
    '/signup',
    '/verifyemail',
    '/admin',
    // '/adminLogin'
  ]
}