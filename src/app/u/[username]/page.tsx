import { getServerSession } from "next-auth"

import { authOptions } from "@/lib"

import Head from "./Head"
import SettingsButton from "./SettingsButton"

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
