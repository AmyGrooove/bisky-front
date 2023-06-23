import { getServerSession } from "next-auth"

import { authOptions } from "@/lib"
import { getAccount } from "@/services/auth"

import SignOutButton from "./SignOutButton"

const Page = async ({ params: { name } }: { params: { name: string } }) => {
  const session = await getServerSession(authOptions)

  const account = await getAccount(session?.accessToken!)
  console.log(account)

  return (
    <div>
      <SignOutButton />
      {session?.accessToken}
    </div>
  )
}

export default Page
