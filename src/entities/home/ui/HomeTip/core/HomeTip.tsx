import { cn } from '@shared/utils/functions'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'
import Link from 'next/link'

import { IHomeTipProps } from '../types/IHomeTipProps'

import st from './HomeTip.module.scss'
import { useHomeTip } from './useHomeTip'

const HomeTip = (props: IHomeTipProps) => {
  const { variant, className, currentData } = useHomeTip(props)

  return (
    <div className={cn(st.root, st[`root_${variant}`], className)}>
      <div className={st.leftSide}>
        <div className={st.mainWrapper}>
          <div className={st.titleWrapper}>
            <currentData.Icon className={st.icon} />
            <Text weight="700" className={st.title}>
              {currentData.title}
            </Text>
          </div>
          <Link href={currentData.href} className={st.button}>
            <Text weight="700" className={st.buttonText}>
              {currentData.buttonText}
            </Text>
          </Link>
        </div>
        <div className={st.descriptionWrapper}>
          {currentData.descriptions.map((description) => (
            <Text className={st.description} key={description}>
              {description}
            </Text>
          ))}
        </div>
      </div>
      {variant === 'big' && (
        <div className={st.imageWrapper}>
          <PlaceholderImage
            className={st.image}
            src={currentData.image}
            sizes={[700, 400]}
            alt={currentData.title}
          />
        </div>
      )}
    </div>
  )
}

export { HomeTip }
