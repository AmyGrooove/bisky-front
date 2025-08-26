import { closeModal } from '@widgets/ModalWrapper'
import { useDeleteAnimeUserReaction } from '@entities/anime/api/deleteAnimeUserReaction'
import { useSetAnimeUserStatus } from '@entities/anime/api/setAnimeUserStatus'
import { ESTIMATE_DATA } from '@entities/anime/static/ESTIMATE_DATA'

import { IAddInListModalProps } from '../types/IAddInListModalProps'

const useAddInListModal = (props: IAddInListModalProps) => {
  const {
    animeID,
    selectedListStatus = 'noSelected',
    setStatus,
    excludedListStatuses = [],
  } = props

  const { mutateAsync: setAnimeUserStatus } = useSetAnimeUserStatus()
  const { mutateAsync: deleteAnimeUserReaction } = useDeleteAnimeUserReaction()

  const filteredStatuses = (
    Object.keys(ESTIMATE_DATA) as (keyof typeof ESTIMATE_DATA)[]
  ).filter(
    (key) => !excludedListStatuses.includes(key) && selectedListStatus !== key,
  )

  const currentStatusData = ['noSelected', 'delete'].includes(
    selectedListStatus,
  )
    ? null
    : ESTIMATE_DATA[selectedListStatus]

  const addAnimeInList = async (newStatus: keyof typeof ESTIMATE_DATA) => {
    closeModal()

    setStatus(newStatus === 'delete' ? 'noSelected' : newStatus)
    if (newStatus === 'noSelected' || newStatus === 'delete')
      await deleteAnimeUserReaction({ animeID })
    else await setAnimeUserStatus({ animeID, body: { status: newStatus } })
  }

  return {
    filteredStatuses,
    addAnimeInList,
    selectedListStatus,
    currentStatusData,
  }
}

export { useAddInListModal }
