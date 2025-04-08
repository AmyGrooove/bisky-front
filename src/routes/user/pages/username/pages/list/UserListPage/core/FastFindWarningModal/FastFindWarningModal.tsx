import { CrownIcon, DonutIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { BigButton } from '@shared/ui/molecules/BigButton'
import Link from 'next/link'
import { closeModal } from '@widgets/ModalWrapper'

import st from './FastFindWarningModal.module.scss'

const FastFindWarningModal = () => {
  return (
    <div className={st.root}>
      <Text weight="700" className={st.label}>
        Список окончен
      </Text>
      <div className={st.buttons}>
        <Link href="/fastFind">
          <BigButton
            variant="big"
            Icon={DonutIcon}
            onClick={() => closeModal()}
          >
            Новый список
          </BigButton>
        </Link>
        <Link href="/fastSelect">
          <BigButton
            variant="big"
            Icon={CrownIcon}
            onClick={() => closeModal()}
          >
            Быстрый выбор
          </BigButton>
        </Link>
      </div>
    </div>
  )
}

export { FastFindWarningModal }
