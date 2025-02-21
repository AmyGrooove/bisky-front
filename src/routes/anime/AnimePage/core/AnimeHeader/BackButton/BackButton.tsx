'use client'

import { ChevronLeftIcon } from '@shared/icons'
import st from './BackButton.module.scss'
import { useBackButton } from './useBackButton'

const BackButton = () => {
  const { goBack } = useBackButton()

  return (
    <button className={st.root} onClick={goBack}>
      <ChevronLeftIcon className={st.icon} />
    </button>
  )
}

export { BackButton }
