import { BlocksIcon } from '@shared/icons'
import { isNil } from '@shared/utils/functions'
import { successToast, errorToast } from '@shared/utils/toast'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useOAuthProvider = () => {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const cleanOAuthParams = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('oauthSuccess')
    params.delete('oauthFail')
    const newParams = params.toString()
    replace(`${pathname}?${newParams}`)
  }

  useEffect(() => {
    const successOAuth = searchParams.get('oauthSuccess')
    const errorOAuth = searchParams.get('oauthFail')

    if (!isNil(successOAuth)) {
      successToast({ message: successOAuth, Icon: <BlocksIcon /> })
      cleanOAuthParams()
    }

    if (!isNil(errorOAuth)) {
      errorToast({ message: errorOAuth })
      cleanOAuthParams()
    }
  }, [searchParams])
}

export { useOAuthProvider }
