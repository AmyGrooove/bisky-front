import { memo } from 'react'
import { Text } from '@shared/ui/atoms/Text'
import { BigButton } from '@shared/ui/molecules/BigButton'
import { DonutIcon } from '@shared/icons'
import Link from 'next/link'
import { closeModal } from '@widgets/ModalWrapper'

import st from './AniBattleErrorModal.module.scss'

const AniBattleErrorModal = memo(() => {
  return (
    <div className={st.root}>
      <Text weight="700" className={st.label}>
        Необходимо 2 или более аниме в любом из списков
      </Text>
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
    </div>
  )
})

AniBattleErrorModal.displayName = 'AniBattleErrorModal'

export { AniBattleErrorModal }
