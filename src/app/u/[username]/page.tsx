import { getServerSession } from "next-auth"

import { Head, SettingsButton } from "@/components/pages/u/username"
import { authOptions } from "@/utils"

const Page = async ({
  params: { username },
}: {
  params: { username: string }
}) => {
  const session = await getServerSession(authOptions)

  // const data: any = await getUserProfile(session?.user?.username!)
  // console.log(data)

  return (
    <div>
      <Head username={session?.user?.username!} />
      {username}
      <SettingsButton username={session?.user?.username!} />
      {/* {data.username} */}
    </div>
  )
}

export default Page
