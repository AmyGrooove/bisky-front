import { closeModal } from '@widgets/ModalWrapper'
import { useState } from 'react'
import { isNil } from '@shared/utils/functions'
import { useSetAnimeScore } from '@entities/animeEstimate/api/setAnimeScore'

import { ISetScoreModalProps } from '../types/ISetScoreModalProps'

const useSetScoreModal = (props: ISetScoreModalProps) => {
  const { _id, selectedScore, setScore } = props

  const [currentScore, setCurrentScore] = useState(selectedScore ?? 5)

  const isDeleteButtonDisabled = isNil(selectedScore)

  const { mutateAsync: setAnimeScore } = useSetAnimeScore()

  const setAnimeScoreClick = async (isNull = false) => {
    closeModal()

    setScore(isNull ? null : currentScore)
    await setAnimeScore({ animeID: _id, score: isNull ? 0 : currentScore })
  }

  return {
    setAnimeScoreClick,
    currentScore,
    setCurrentScore,
    isDeleteButtonDisabled,
  }
}

export { useSetScoreModal }
