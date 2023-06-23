import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      return token?.user?.role === "user"
    },
  },
})

export const config = { matcher: ["/u/:path/edit"] }
