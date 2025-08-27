import { forwardRef } from 'react'
import { TextSelectIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { cn } from '@shared/utils/functions'
import { setModal } from '@widgets/ModalWrapper'

import { IMoreInfoProps } from '../types/IMoreInfoProps'

import { useMoreInfo } from './useMoreInfo'
import st from './MoreInfo.module.scss'

const MoreInfo = forwardRef<HTMLButtonElement, IMoreInfoProps>((props, ref) => {
  const { children, label, className, variant } = useMoreInfo(props)

  return (
    <button
      ref={ref}
      type="button"
      className={cn(st.root, st[`root_${variant}`], className)}
      onClick={() => setModal(children)}
    >
      <TextSelectIcon className={st.icon} />
      <Text className={st.label}>{label}</Text>
    </button>
  )
})

export { MoreInfo }
