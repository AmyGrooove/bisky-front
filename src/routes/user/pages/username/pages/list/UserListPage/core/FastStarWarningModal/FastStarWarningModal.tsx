import { DonutIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { BigButton } from '@shared/ui/molecules/BigButton'
import Link from 'next/link'
import { closeModal } from '@widgets/ModalWrapper'

import st from './FastStarWarningModal.module.scss'

const FastStarWarningModal = () => {
  return (
    <div className={st.root}>
      <Text weight="700" className={st.label}>
        Смотрите еще аниме, чтобы их оценить
      </Text>
      <Link href="/fastFind">
        <BigButton variant="big" Icon={DonutIcon} onClick={() => closeModal()}>
          Быстрый поиск
        </BigButton>
      </Link>
    </div>
  )
}

export { FastStarWarningModal }
