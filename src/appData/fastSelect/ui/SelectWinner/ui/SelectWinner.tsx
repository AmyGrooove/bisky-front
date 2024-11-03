import Link from "next/link"

import { PlaceholderImage, Text } from "@shared/ui/atoms"
import { Button } from "@shared/ui/molecules"

import { ISelectWinnerProps } from "../types/ISelectWinnerProps"

import st from "./SelectWinner.module.scss"
import { useSelectWinner } from "./useSelectWinner"

const SelectWinner = (props: ISelectWinnerProps) => {
  const { animeData } = useSelectWinner(props)

  return (
    <div className={st.root}>
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
      <Link href={"/anime/" + animeData._id}>
        <Button className={st.choiceButton}>Начать просмотр</Button>
      </Link>
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

export { SelectWinner }
