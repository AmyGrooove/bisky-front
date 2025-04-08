import { StarSlider } from '@shared/ui/atoms/StarSlider'
import { Button } from '@shared/ui/molecules/Button'
import { cn } from '@shared/utils/functions'

import { ISetScoreModalProps } from '../types/ISetScoreModalProps'

import st from './SetScoreModal.module.scss'
import { useSetScoreModal } from './useSetScoreModal'

const SetScoreModal = (props: ISetScoreModalProps) => {
  const {
    setAnimeScoreClick,
    currentScore,
    setCurrentScore,
    isDeleteButtonDisabled,
  } = useSetScoreModal(props)

  return (
    <div className={st.root}>
      <StarSlider
        currentStar={currentScore}
        setCurrentStart={setCurrentScore}
      />
      <div className={st.buttonsWrapper}>
        <Button
          isCustomColor
          isDisabled={isDeleteButtonDisabled}
          onClick={() => setAnimeScoreClick(true)}
          variant="big"
          className={cn(st.button, st.button_delete)}
        >
          Удалить оценку
        </Button>
        <Button
          isCustomColor
          onClick={() => setAnimeScoreClick()}
          variant="big"
          className={cn(st.button, st.button_set)}
        >
          Поставить оценку
        </Button>
      </div>
    </div>
  )
}

export { SetScoreModal }
