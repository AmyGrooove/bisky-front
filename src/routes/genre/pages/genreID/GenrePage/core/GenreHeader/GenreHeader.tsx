import { Text } from '@shared/ui/atoms/Text'
import { cn, isNil } from '@shared/utils/functions'

import { IGenreHeaderProps } from '../../types/IGenreHeaderProps'

import { useGenreHeader } from './useGenreHeader'
import st from './GenreHeader.module.scss'

const GenreHeader = (props: IGenreHeaderProps) => {
  const { description, name } = useGenreHeader(props)

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

export { GenreHeader }
