import { BigButton } from '@shared/ui/molecules/BigButton'
import { getEstimateColor } from '@entities/animeEstimate/utils'

import { IAddInListModalProps } from '../types/IAddInListModalProps'
import { listStatusButtons } from '../static/listStatusButtons'

import st from './AddInListModal.module.scss'
import { useAddInListModal } from './useAddInListModal'



const AddInListModal = (props: IAddInListModalProps) => {
  const { selectedListStatus, addAnimeInList } = useAddInListModal(props)

  return (
    <div className={st.root}>
      {listStatusButtons(selectedListStatus).map((item) => (
        <BigButton
          variant="big"
          key={item.text}
          icon={item.icon}
          className={st[`button_${getEstimateColor(item.status)}`]}
          isCustomColor
          onClick={() => addAnimeInList(item.status)}
        >
          {item.text}
        </BigButton>
      ))}
    </div>
  )
}

export { AddInListModal }
