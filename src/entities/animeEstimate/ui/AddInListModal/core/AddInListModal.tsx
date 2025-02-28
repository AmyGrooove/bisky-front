import { BigButton } from '@shared/ui/molecules/BigButton'
import { getEstimateColor } from '@entities/animeEstimate/utils'

import { IAddInListModalProps } from '../types/IAddInListModalProps'
import { listStatusButtons } from '../static/listStatusButtons'

import st from './AddInListModal.module.scss'
import { useAddInListModal } from './useAddInListModal'

const AddInListModal = (props: IAddInListModalProps) => {
  const { selectedListStatus, addAnimeInList, excludedListStatuses } =
    useAddInListModal(props)

  return (
    <div className={st.root}>
      {listStatusButtons(selectedListStatus)
        .filter(
          (statusButton) => !excludedListStatuses.includes(statusButton.status),
        )
        .map(({ text, Icon, status }) => (
          <BigButton
            variant="big"
            key={text}
            Icon={Icon}
            className={st[`button_${getEstimateColor(status)}`]}
            isCustomColor
            onClick={() => addAnimeInList(status)}
          >
            {text}
          </BigButton>
        ))}
    </div>
  )
}

export { AddInListModal }
