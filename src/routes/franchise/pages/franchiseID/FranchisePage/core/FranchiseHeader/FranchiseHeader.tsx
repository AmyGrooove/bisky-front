import { Text } from '@shared/ui/atoms/Text'
import { IFranchiseSectionProps } from '../../types/IFranchiseSectionProps'
import { useFranchiseHeader } from './useFranchiseHeader'
import st from './FranchiseHeader.module.scss'
import { cn, isNil } from '@shared/utils/functions'

const FranchiseHeader = (props: IFranchiseSectionProps) => {
  const { description, name, shikiID } = useFranchiseHeader(props)

  return (
    <div className={cn(st.root, { [st.root_mobile]: isNil(description) })}>
      <Text className={st.name} weight="700">
        {name ?? shikiID ?? 'Франшиза'}
      </Text>
      {!isNil(description) && (
        <Text className={st.description}>{description}</Text>
      )}
    </div>
  )
}

export { FranchiseHeader }
