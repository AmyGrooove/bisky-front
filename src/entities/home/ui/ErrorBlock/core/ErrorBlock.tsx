import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'
import { isNil } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import { IErrorBlockProps } from '../types/IErrorBlockProps'

import { useErrorBlock } from './useErrorBlock'
import st from './ErrorBlock.module.scss'

const ErrorBlock = memo(
  forwardRef<HTMLDivElement, IErrorBlockProps>((props, ref) => {
    const { error } = useErrorBlock(props)

    if (isNil(error)) return null

    return (
      <div className={st.root} ref={ref}>
        <PlaceholderImage
          src="/images/biskySmallCry.png"
          className={st.image}
          sizes={[152, 152]}
        />
        <Text weight="700" className={st.label}>
          Произошла ошибка
        </Text>
        <Text className={st.description}>{error.message}</Text>
      </div>
    )
  }),
)

ErrorBlock.displayName = 'ErrorBlock'

export { ErrorBlock }
