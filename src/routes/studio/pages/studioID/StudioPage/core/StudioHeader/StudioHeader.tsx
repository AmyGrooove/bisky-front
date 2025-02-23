import { Text } from '@shared/ui/atoms/Text'
import { IStudioSectionProps } from '../../types/IStudioSectionProps'
import { useStudioHeader } from './useStudioHeader'
import st from './StudioHeader.module.scss'
import { cn, isNil } from '@shared/utils/functions'

const StudioHeader = (props: IStudioSectionProps) => {
  const { description, name } = useStudioHeader(props)

  return (
    <div className={cn(st.root, { [st.root_mobile]: isNil(description) })}>
      <Text className={st.name} weight="700">
        {name}
      </Text>
      {!isNil(description) && (
        <Text className={st.description}>{description}</Text>
      )}
    </div>
  )
}

export { StudioHeader }
