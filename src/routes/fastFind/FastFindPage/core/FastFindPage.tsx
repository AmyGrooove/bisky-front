'use client'

import { MiniAnimeInfoModal } from '@entities/anime/ui/MiniAnimeInfoModal'
import { GlassButton } from '@shared/ui/molecules/GlassButton'
import {
  CassetteTapeIcon,
  CrossIcon,
  DonutIcon,
  EyeIcon,
  MoveLeftIcon,
} from '@shared/icons'
import { Button } from '@shared/ui/molecules/Button'
import Link from 'next/link'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { setModal } from '@widgets/ModalWrapper'
import { AddInListModal } from '@entities/animeEstimate/ui/AddInListModal'
import { isNil } from '@shared/utils/functions'

import { FastFindLoading } from '../../FastFindLoading'

import { ChangingStatus } from './ChangingStatus/ChangingStatus'
import { useFastFindPage } from './useFastFindPage'
import st from './FastFindPage.module.scss'

const FastFindPage = () => {
  const {
    data,
    isFastFindFullLoading,
    isMiniInfoLoading,
    currentAnimeHref,
    animesCount,
    isBackButtonDisabled,
    selectedStatus,
    setAnimeEstimateHandler,
    goBack,
    previousListStatus,
  } = useFastFindPage()

  if (isFastFindFullLoading) return <FastFindLoading />

  return (
    <>
      <SectionLabel className={st.sectionLabel} Icon={DonutIcon}>
        Быстрый поиск
      </SectionLabel>
      <div className={st.root}>
        <MiniAnimeInfoModal
          data={data}
          className={st.info}
          isModal={false}
          isLoading={isMiniInfoLoading}
        />
        <div className={st.rightSide}>
          <GlassButton
            variant="big"
            onClick={(event) => {
              event.preventDefault()
              if (isNil(data)) return

              setModal(
                <AddInListModal
                  _id={data._id}
                  setStatus={(value) => setAnimeEstimateHandler(value)}
                  excludedListStatuses={['added', 'watching']}
                />,
              )
            }}
            className={st.desktopCassette}
          >
            {CassetteTapeIcon}
          </GlassButton>
          <ChangingStatus
            animeData={data}
            selectedStatus={selectedStatus}
            posterHref={data?.poster ?? null}
            selectedPreviousStatus={previousListStatus}
          />
          <div className={st.buttons}>
            <GlassButton
              onClick={goBack}
              className={st.leftButton}
              isDisabled={isBackButtonDisabled || isMiniInfoLoading}
            >
              {MoveLeftIcon}
            </GlassButton>
            <GlassButton
              variant="big"
              onClick={() => setAnimeEstimateHandler('skipped')}
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
          <div className={st.mobileCassette}>
            <GlassButton
              variant="small"
              onClick={(event) => {
                event.preventDefault()
                if (isNil(data)) return

                setModal(
                  <AddInListModal
                    _id={data._id}
                    setStatus={(value) => setAnimeEstimateHandler(value)}
                    excludedListStatuses={['added', 'watching']}
                  />,
                )
              }}
            >
              {CassetteTapeIcon}
            </GlassButton>
          </div>
        </div>
      </div>
    </>
  )
}

export { FastFindPage }
