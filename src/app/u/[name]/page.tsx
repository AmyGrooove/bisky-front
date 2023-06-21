import { getServerSession } from "next-auth"

import { authOptions } from "@/lib"

import Head from "./Head"
import Settings from "./Settings"

const Page = async ({ params: { name } }: { params: { name: string } }) => {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <div>
      <Head userId={Number(session?.user.id)} />
      {name}
      <Settings />
    </div>
  )
}

export default Page
