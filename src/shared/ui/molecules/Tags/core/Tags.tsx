import { ForwardedRef, forwardRef } from 'react'
import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { CrossIcon } from '@shared/icons'

import { ITagsProps, TTagsComponent } from '../types/ITagsProps'

import { useTags } from './useTags'
import st from './Tags.module.scss'

const TagsInner = <T extends string>(
  props: ITagsProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { removeTag, items, variant, className } = useTags(props)

  return (
    <div ref={ref} className={cn(st.root, st[`root_${variant}`], className)}>
      {[...items].map((tag) => (
        <button
          type="button"
          aria-label={`Remove ${tag}`}
          onClick={() => removeTag(tag)}
          key={tag}
          className={st.tag}
        >
          <CrossIcon className={st.icon} />
          <Text className={st.text}>{tag}</Text>
        </button>
      ))}
    </div>
  )
}

const Tags = forwardRef(TagsInner) as TTagsComponent

Tags.displayName = 'Tags'

export { Tags }
