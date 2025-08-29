import { memo } from 'react'
import { Text } from '@shared/ui/atoms/Text'
import { cn, isNil } from '@shared/utils/functions'

import { EstimateButton } from '../../EstimateButton'
import { IAddInListModalProps } from '../types/IAddInListModalProps'

import st from './AddInListModal.module.scss'
import { useAddInListModal } from './useAddInListModal'

const AddInListModal = memo((props: IAddInListModalProps) => {
  const {
    filteredStatuses,
    addAnimeInList,
    currentStatusData,
    selectedListStatus,
  } = useAddInListModal(props)

  return (
    <div className={st.root}>
      {!isNil(currentStatusData) && (
        <div className={st.titleWrapper}>
          <Text className={st.title}>Текущий статус:</Text>
          <Text
            className={cn(st.title, st[`title_${selectedListStatus}`])}
            weight="700"
          >
            {currentStatusData.currentLabel}
          </Text>
        </div>
      )}
      <div className={st.buttonsWrapper}>
        {filteredStatuses.map((status) => (
          <EstimateButton
            key={status}
            onClick={() => addAnimeInList(status)}
            listStatus={status}
          />
        ))}
      </div>
    </div>
  )
})

AddInListModal.displayName = 'AddInListModal'

export { AddInListModal }
