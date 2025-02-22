import { closeModal } from '@widgets/ModalWrapper'
import { setAnimeScore } from '@entities/animeEstimate/api'

import { ISetScoreModalProps } from '../types/ISetScoreModalProps'
import { useState } from 'react'
import { isNil } from '@shared/utils/functions'

const useSetScoreModal = (props: ISetScoreModalProps) => {
  const { _id, selectedScore, setScore } = props

  const [currentScore, setCurrentScore] = useState(selectedScore ?? 5)

  const isDeleteButtonDisabled = isNil(selectedScore)

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
