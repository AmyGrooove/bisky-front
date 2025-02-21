'use client'

import { ChevronLeftIcon } from '@shared/icons'
import st from './BackButton.module.scss'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const { back } = useRouter()

  return (
    <button className={st.root} onClick={back}>
      <ChevronLeftIcon className={st.icon} />
    </button>
  )
}

export { BackButton }
