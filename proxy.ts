import { NextRequest, NextResponse } from 'next/server'

export default function Proxy() {
  console.log('영화 페이지 접근')
  return NextResponse.next()
}

export const config = {
  matcher: ['/movies/:path*']
}
