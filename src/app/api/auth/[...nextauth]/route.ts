import NextAuth from "next-auth/next"
import { NextRequest } from "next/server"

import { authOptions } from "@entities/Auth/static/authOptions"

interface RouteHandlerContext {
  params: Promise<{ nextauth: string[] }>
}

const handler = async (req: NextRequest, context: RouteHandlerContext) => {
  const resolvedContext = { params: await context.params }

  return NextAuth(req, resolvedContext, authOptions)
}

export { handler as GET, handler as POST }
