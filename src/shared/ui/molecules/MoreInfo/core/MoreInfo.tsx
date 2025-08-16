import { TextSelectIcon } from '@shared/icons'
import { IMoreInfoProps } from '../types/IMoreInfoProps'
import { Text } from '@shared/ui/atoms/Text'
import { useMoreInfo } from './useMoreInfo'
import st from './MoreInfo.module.scss'
import { cn } from '@shared/utils/functions'
import { setModal } from '@widgets/ModalWrapper'

const MoreInfo = (props: IMoreInfoProps) => {
  const { children, label, className, variant } = useMoreInfo(props)

  return (
    <button
      className={cn(st.root, st[`root_${variant}`], className)}
      onClick={() => setModal(children)}
    >
      <TextSelectIcon className={st.icon} />
      <Text className={st.label}>{label}</Text>
    </button>
  )
}

export { MoreInfo }
