'use client'

import st from './FastFindPage.module.scss'
import { useFastFindPage } from './useFastFindPage'
import { FastFindLoading } from '../../FastFindLoading'
import { MiniAnimeInfoModal } from '@entities/anime/ui/MiniAnimeInfoModal'
import { GlassButton } from '@shared/ui/molecules/GlassButton'
import {
  CassetteTapeIcon,
  CrossIcon,
  EyeIcon,
  MoveLeftIcon,
} from '@shared/icons'
import { Button } from '@shared/ui/molecules/Button'
import Link from 'next/link'
import { ChangingStatus } from './ChangingStatus/ChangingStatus'

const FastFindPage = () => {
  const {
    data,
    isFastFindLoading,
    isMiniInfoLoading,
    currentAnimeHref,
    animesCount,
    isBackButtonDisabled,
    selectedStatus,
    addAnimeToSkipHandler,
    setAnimeEstimateHandler,
  } = useFastFindPage()

  if (isFastFindLoading) return <FastFindLoading />

  return (
    <>
      <div className={st.root}>
        <MiniAnimeInfoModal
          data={data}
          className={st.info}
          isModal={false}
          isLoading={isMiniInfoLoading}
        />
        <div className={st.rightSide}>
          <GlassButton variant="big" onClick={() => {}}>
            {CassetteTapeIcon}
          </GlassButton>
          <ChangingStatus
            selectedStatus={selectedStatus}
            posterHref={data?.poster ?? null}
          />
          <div className={st.buttons}>
            <GlassButton
              onClick={() => {}}
              className={st.leftButton}
              isDisabled={isBackButtonDisabled || isMiniInfoLoading}
            >
              {MoveLeftIcon}
            </GlassButton>
            <GlassButton
              variant="big"
              onClick={addAnimeToSkipHandler}
              className={st.leftButton}
              isDisabled={isMiniInfoLoading}
            >
              {CrossIcon}
            </GlassButton>
            <GlassButton
              variant="big"
              onClick={() => setAnimeEstimateHandler('added')}
              isDisabled={isMiniInfoLoading}
            >
              {EyeIcon}
            </GlassButton>
            <GlassButton onClick={() => {}} className={st.count}>
              {animesCount}
            </GlassButton>
          </div>
          <Link href={currentAnimeHref} className={st.watchNow}>
            <Button onClick={() => {}} variant="big" className={st.watchNow}>
              Смотреть сейчас
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export { FastFindPage }
