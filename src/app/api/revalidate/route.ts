import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
  const tags = request.nextUrl.searchParams.getAll('tag')

  tags.forEach((tag) => {
    if (tag) revalidateTag(tag)
  })

  return NextResponse.json({ revalidated: true, now: Date.now(), tags })
}
