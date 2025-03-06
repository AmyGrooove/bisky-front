'use client'

import { CrownIcon } from '@shared/icons'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import st from './FastStarPage.module.scss'
import { useFastStarPage } from './useFastStarPage'
import { FastStarLoading } from '@routes/fastStar/FastStarLoading'

const FastStarPage = () => {
  const { currentAnime, isLoading, isError } = useFastStarPage()

  if (isLoading || isError) return <FastStarLoading />

  return (
    <>
      <SectionLabel className={st.sectionLabel} Icon={CrownIcon}>
        Быстрый выбор
      </SectionLabel>
      <div className={st.root}>
        <div className={st.main}>
          <div className={st.final}>
            <PlaceholderImage
              src={currentAnime.poster}
              className={st.background}
              sizes={[700, 300]}
            />
          </div>
        </div>
        <div className={st.mobileControl}></div>
      </div>
    </>
  )
}

export { FastStarPage }
