import { memo } from 'react'
import { Text } from '@shared/ui/atoms/Text'
import { BigButton } from '@shared/ui/molecules/BigButton'
import { CrownIcon, DonutIcon } from '@shared/icons'
import Link from 'next/link'
import { closeModal } from '@widgets/ModalWrapper'

import st from './AniPickEndModal.module.scss'

const AniPickEndModal = memo(() => {
  return (
    <div className={st.root}>
      <div className={st.labelWrapper}>
        <Text weight="700" className={st.label}>
          Список окончен
        </Text>
        <Text weight="700" className={st.label}>
          Можете создать новый или начать просмотр
        </Text>
      </div>
      <div className={st.buttonsWrapper}>
        <Link href="/aniPick">
          <BigButton
            onClick={() => closeModal()}
            className={st.button}
            variant="big"
            Icon={<DonutIcon />}
          >
            АниПик
          </BigButton>
        </Link>
        <Link href="/aniBattle">
          <BigButton
            onClick={() => closeModal()}
            className={st.button}
            variant="big"
            Icon={<CrownIcon />}
          >
            АниБаттл
          </BigButton>
        </Link>
      </div>
    </div>
  )
})

AniPickEndModal.displayName = 'AniPickEndModal'

export { AniPickEndModal }
