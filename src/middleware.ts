import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const checkIsMobile = (req: NextRequest) => {
  const ua = req.headers.get('user-agent') || ''
  return /Mobile|Android|iPhone|iPad|iPod/i.test(ua)
}

const config = { matcher: ['/((?!_next|.*\\..*).*)'] }

const middleware = (req: NextRequest) => {
  const isMobile = checkIsMobile(req)

  const res = NextResponse.next()
  res.cookies.set('isMobile', isMobile ? '1' : '0', {
    path: '/',
    maxAge: 60 * 10,
  })
  return res
}

export { config }
export default middleware
