import Link from "next/link"

import { PlaceholderImage, WatchStatus } from "@shared/ui/atoms"
import { Button } from "@shared/ui/molecules"
import { BackIcon, CrossIcon, StarIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { TListStatus } from "@entities/AnimeEstimate"
import { maxFastFind } from "@appData/fastFind"

import { watchStatuses } from "../static/watchStatuses"
import { ISelectionBlockProps } from "../types/ISelectionBlockProps"
import { TFastFindStatuses } from "../types/TFastFindStatuses"

import st from "./SelectionBlock.module.scss"
import { StatusIcon } from "./StatusIcon/StatusIcon"
import { useSelectionBlock } from "./useSelectionBlock"

const SelectionBlock = (props: ISelectionBlockProps) => {
  const {
    chooseStatus,
    posterStatus,
    previousAnimeStatuses,
    goBack,
    isChangingAnime,
    currentAnime,
    fastFindCount,
  } = useSelectionBlock(props)

  return (
    <div className={st.root}>
      <div className={st.menu}>
        {watchStatuses.map((item) => (
          <WatchStatus
            disabled={isChangingAnime}
            key={item}
            status={item}
            onClick={() => chooseStatus(item as TFastFindStatuses)}
          />
        ))}
      </div>
      <div className={st.posterWrapper}>
        <StatusIcon selectedStatus={posterStatus} />
        <PlaceholderImage
          width={220}
          height={330}
          src={currentAnime?.poster ?? null}
          alt=""
          imageClassName={st.posterImage}
          className={st.poster}
        />
        {!!previousAnimeStatuses[maxFastFind - fastFindCount] && (
          <WatchStatus
            status={
              previousAnimeStatuses[maxFastFind - fastFindCount] as TListStatus
            }
            className={st.addedStatus}
          />
        )}
      </div>
      <div className={st.select}>
        <Button
          onClick={goBack}
          disabled={fastFindCount === maxFastFind || isChangingAnime}
          leftIcon={<BackIcon />}
          className={st.selectButton}
          textProps={{ className: st.selectText }}
        />
        <Button
          disabled={isChangingAnime}
          onClick={() => chooseStatus("skipped")}
          className={cn(st.selectButton, st.selectButton_main)}
          leftIcon={
            <CrossIcon
              className={cn(
                st.mainSelectButtonIcon,
                st.mainSelectButtonIcon_negative,
              )}
            />
          }
        />
        <Button
          disabled={isChangingAnime}
          onClick={() => chooseStatus("added")}
          className={cn(st.selectButton, st.selectButton_main)}
          leftIcon={
            <StarIcon variant="filled" className={st.mainSelectButtonIcon} />
          }
        />
        <Button
          className={cn(st.selectButton, st.selectButton_noActive)}
          textProps={{ className: st.selectText }}
        >
          {String(fastFindCount)}
        </Button>
      </div>
      <Link
        href={`/anime/${currentAnime?._id}`}
        className={st.watchNowButton}
        target="_blank"
      >
        <Button className={st.watchNowButton}>Смотреть сейчас</Button>
      </Link>
    </div>
  )
}

export { SelectionBlock }
