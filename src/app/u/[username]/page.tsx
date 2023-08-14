import { getServerSession } from "next-auth"

import { authOptions } from "@/01-shared/libs/next-auth"
import { getUserProfile } from "@/02-entities/user"
import { Head } from "@/05-pages/u/[username]"

const Page = async ({
  params: { username },
}: {
  params: { username: string }
}) => {
  const session = await getServerSession(authOptions)
  const sessionUsername: string = session?.user.username ?? ""

  const user = await getUserProfile(username)

  return (
    <div>
      <Head username={user.username} image={user.image ?? ""} />
    </div>
  )
}

export default Page
