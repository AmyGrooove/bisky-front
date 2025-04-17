import { StarSlider } from '@shared/ui/atoms/StarSlider'
import { Button } from '@shared/ui/molecules/Button'
import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { getScoreColor } from '@entities/animeEstimate/utils'

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
      <div className={st.labelWrapper}>
        <Text weight="700" className={st.label}>
          {!isDeleteButtonDisabled ? 'Изменить оценку на' : 'Оценить на'}
        </Text>
        <Text
          weight="700"
          className={cn(
            st.scoreText,
            st[`scoreText_${getScoreColor(currentScore)}`],
          )}
        >
          {currentScore}
        </Text>
      </div>
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
          {!isDeleteButtonDisabled ? 'Изменить оценку' : 'Поставить оценку'}
        </Button>
      </div>
    </div>
  )
}

export { SetScoreModal }
