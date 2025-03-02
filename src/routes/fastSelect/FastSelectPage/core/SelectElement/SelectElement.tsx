import { cn } from '@shared/utils/functions'
import st from './SelectElement.module.scss'
import { Button } from '@shared/ui/molecules/Button'
import { InfoIcon } from '@shared/icons'
import { setModal } from '@widgets/ModalWrapper'
import { MiniAnimeInfoModal } from '@entities/anime/ui/MiniAnimeInfoModal'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'
import { useSelectElement } from './useSelectElement'
import { ISelectElementProps } from '../../types/ISelectElementProps'

const SelectElement = (props: ISelectElementProps) => {
  const { side, poster, label, selectThis, _id } = useSelectElement(props)

  return (
    <div className={cn(st.root, st[`root_${side}`])}>
      <Button
        onClick={() => setModal(<MiniAnimeInfoModal animeID={_id} />)}
        Icon={InfoIcon}
        className={cn(st.infoButton, st[`infoButton_${side}`])}
        variant="big"
      />
      <PlaceholderImage src={poster} className={st.poster} sizes={[220, 180]} />
      <Text weight="700" className={st.label} maxLines={2}>
        {label}
      </Text>
      <Button variant="big" onClick={selectThis} className={st.choiceButton}>
        Выбрать
      </Button>
      <PlaceholderImage
        src={poster}
        className={st.background}
        sizes={[700, 300]}
      />
    </div>
  )
}

export { SelectElement }
