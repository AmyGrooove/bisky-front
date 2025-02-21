import { LOCAL_STORAGE_KEYS } from '@shared/static'
import { $modal, setModal } from '@widgets/ModalWrapper'
import { useEffect } from 'react'
import { IAdultWarningProps } from '../types/IAdultWarningProps'
import { AdultModal } from './AdultModal/AdultModal'
import { useUnit } from 'effector-react'
import { useFirstRender } from '@shared/utils/hooks/useFirstRender'

const useAdultWarning = (props: IAdultWarningProps) => {
  const { isCheckEnabled } = props

  const modal = useUnit($modal)

  const isFirstRender = useFirstRender()

  useEffect(() => {
    if (!isCheckEnabled) return

    const isAdult = localStorage.getItem(LOCAL_STORAGE_KEYS.IS_ADULT)

    if (isAdult !== 'true') setModal(<AdultModal />)
  }, [isCheckEnabled])

  useEffect(() => {
    if (!isCheckEnabled || isFirstRender) return

    const isAdult = localStorage.getItem(LOCAL_STORAGE_KEYS.IS_ADULT)

    if (isAdult !== 'true' && modal === null)
      localStorage.setItem(LOCAL_STORAGE_KEYS.IS_ADULT, 'true')
  }, [modal])
}

export { useAdultWarning }
