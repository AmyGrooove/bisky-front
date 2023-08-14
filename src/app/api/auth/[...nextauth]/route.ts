import NextAuth from "next-auth"

import { authOptions } from "@/01-shared/libs/next-auth"

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
