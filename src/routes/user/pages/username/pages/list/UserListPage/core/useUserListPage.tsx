import { setModal } from '@widgets/ModalWrapper'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { FastFindWarningModal } from './FastFindWarningModal/FastFindWarningModal'
import { FastSelectWarningModal } from './FastSelectWarningModal/FastSelectWarningModal'
import { FastStarWarningModal } from './FastStarWarningModal/FastStarWarningModal'

const useUserListPage = () => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const isFastFindModal = searchParams.get('fastFind') === 'true'
  const isFastSelectModal = searchParams.get('fastSelect') === 'true'
  const isFastStarModal = searchParams.get('fastStar') === 'true'

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    let shouldUpdateUrl = false

    if (isFastFindModal) {
      setModal(<FastFindWarningModal />)
      newSearchParams.delete('fastFind')
      shouldUpdateUrl = true
    }

    if (isFastSelectModal) {
      setModal(<FastSelectWarningModal />)
      newSearchParams.delete('fastSelect')
      shouldUpdateUrl = true
    }

    if (isFastStarModal) {
      setModal(<FastStarWarningModal />)
      newSearchParams.delete('fastStar')
      shouldUpdateUrl = true
    }

    if (shouldUpdateUrl) {
      const newQuery = newSearchParams.toString()
      const newUrl = window.location.pathname + (newQuery ? `?${newQuery}` : '')
      replace(newUrl)
    }
  }, [isFastFindModal, isFastSelectModal])
}

export { useUserListPage }
