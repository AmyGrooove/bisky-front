import { memo } from 'react'
import { Text } from '@shared/ui/atoms/Text'
import { BigButton } from '@shared/ui/molecules/BigButton'
import { CrownIcon } from '@shared/icons'
import Link from 'next/link'
import { closeModal } from '@widgets/ModalWrapper'

import st from './AniJudgeErrorModal.module.scss'

const AniJudgeErrorModal = memo(() => {
  return (
    <div className={st.root}>
      <Text weight="700" className={st.label}>
        Необходимо 1 или более аниме в списке просмотренного
      </Text>
      <Link href="/aniBattle">
        <BigButton
          onClick={() => closeModal()}
          className={st.button}
          variant="big"
          Icon={CrownIcon}
        >
          АниБаттл
        </BigButton>
      </Link>
    </div>
  )
})

AniJudgeErrorModal.displayName = 'AniJudgeErrorModal'

export { AniJudgeErrorModal }
