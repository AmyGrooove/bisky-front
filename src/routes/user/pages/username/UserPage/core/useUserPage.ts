import { useSession } from '@entities/auth/hooks/useSession'
import { useGetProfile } from '@entities/profile/api/getProfile'
import { BlocksIcon } from '@shared/icons'
import { isNil } from '@shared/utils/functions'
import { errorToast, successToast } from '@shared/utils/toast'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { useEffect, useMemo } from 'react'

const useUserPage = () => {
  const searchParams = useSearchParams()
  const { username } = useParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const oauthSuccessText = searchParams.get('oauthSuccess')
  const oauthFailText = searchParams.get('oauthFail')

  const { user } = useSession()
  const { data, isLoading } = useGetProfile(String(username))

  const isCurrentUser = useMemo(() => username === user?.username, [])

  useEffect(() => {
    if (isCurrentUser && username !== user?.username)
      replace(`/user/${user?.username}`)
  }, [username, user, isCurrentUser])

  useEffect(() => {
    if (!isNil(oauthSuccessText)) {
      successToast({ message: oauthSuccessText, Icon: BlocksIcon })
      replace(pathname, { scroll: false })
    }

    if (!isNil(oauthFailText)) {
      errorToast({ message: oauthFailText })
      replace(pathname, { scroll: false })
    }
  }, [oauthSuccessText, oauthFailText])

  return { data, isLoading }
}

export { useUserPage }
