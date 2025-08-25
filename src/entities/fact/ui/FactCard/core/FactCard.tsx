'use client'

import { cn, isNil } from '@shared/utils/functions'
import { Button } from '@shared/ui/molecules/Button'
import { FlagIcon, LinkIcon } from '@shared/icons'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'
import Link from 'next/link'
import { AuthorBadge } from '@entities/profile/ui/AuthorBadge'

import { IFactCardProps } from '../types/IFactCardProps'

import st from './FactCard.module.scss'
import { useFactCard } from './useFactCard'

const FactCard = (props: IFactCardProps) => {
  const { text, sourceLink, author, className, variant } = useFactCard(props)

  return (
    <div className={cn(st.root, className, st[`root_${variant}`])}>
      <div className={st.leftSide}>
        <PlaceholderImage
          className={st.image}
          src="/images/biskyLook.png"
          sizes={[120, 120]}
        />
        <Text className={st.text}>{text}</Text>
      </div>
      <div className={st.tools}>
        <Button
          className={st.reportButton}
          variant={variant}
          Icon={FlagIcon}
          onClick={() => alert('В разработке')}
        />
        <div className={st.sourceWrapper}>
          {!isNil(sourceLink) && (
            <Link
              href={sourceLink}
              target="_blank"
              className={st.sourceLinkWrapper}
            >
              <LinkIcon className={st.sourceIcon} />
              <Text className={st.sourceText}>Источник</Text>
            </Link>
          )}
          {!isNil(author) && (
            <AuthorBadge
              userData={author}
              variant={variant === 'big' ? 'medium' : 'small'}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export { FactCard }
