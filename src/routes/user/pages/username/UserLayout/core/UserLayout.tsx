import { IUserLayoutProps } from '../types/IUserLayoutProps'
import { notFound } from 'next/navigation'
import { getProfile } from '@entities/profile/api/getProfile'

const UserLayout = async (props: IUserLayoutProps) => {
  const { params, children } = props
  const { username } = await params

  try {
    const userData = await getProfile(username, true)

    if (!userData) throw new Error()
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export { UserLayout }
