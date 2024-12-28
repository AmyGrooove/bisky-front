import Link from "next/link"

import { cn } from "@shared/utils/functions"
import { PlaceholderImage, Text } from "@shared/ui/atoms"
import { Button } from "@shared/ui/molecules"
import { InfoIcon } from "@shared/icons"

import { ISelectElementProps } from "../types/ISelectElementProps"

import st from "./SelectElement.module.scss"
import { useSelectElement } from "./useSelectElement"

const SelectElement = (props: ISelectElementProps) => {
  const { side, animeData, onClick } = useSelectElement(props)

  return (
    <div className={cn(st.root, st["root_" + side])}>
      <Link href={"/anime/" + animeData?._id} target="_blank">
        <Button
          leftIcon={<InfoIcon />}
          className={cn(st.infoButton, st["infoButton_" + side])}
        />
      </Link>
      <PlaceholderImage
        width={220}
        height={330}
        src={animeData?.poster ?? null}
        alt=""
        className={st.poster}
        imageClassName={st.posterImage}
      />
      <Text weight="700" size="20" className={st.label}>
        {animeData?.labels?.ru ?? animeData?.labels?.en ?? ""}
      </Text>
      <Button onClick={onClick} className={st.choiceButton}>
        Выбрать
      </Button>
      <PlaceholderImage
        fill
        src={
          animeData?.screenshots.length !== 0
            ? (animeData?.screenshots[0] ?? null)
            : (animeData?.poster ?? null)
        }
        alt=""
        className={st.background}
        imageClassName={st.backgroundImage}
      />
    </div>
  )
}

export { SelectElement }
