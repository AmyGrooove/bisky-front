import { notFound } from 'next/navigation'
import { getProfile } from '@entities/profile/api/getProfile'

import { IUserLayoutProps } from '../types/IUserLayoutProps'

const UserLayout = async (props: IUserLayoutProps) => {
  const { params, children } = props
  const { username } = await params

  try {
    const userData = await getProfile(username)

    if (!userData) throw new Error()
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export { UserLayout }
