import { SignOutButton } from "@/05-pages/u/[username]/edit"

const Page = async ({ params: { name } }: { params: { name: string } }) => {
  // const session = await getServerSession(authOptions)
  // const account = await getAccount(session?.accessToken!)
  // console.log(account)

  return (
    <div>
      <SignOutButton />
      {/* {session?.accessToken} */}
    </div>
  )
}

export default Page
