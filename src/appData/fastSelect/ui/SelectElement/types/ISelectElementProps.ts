import { IAnimeSimpleModel } from "@entities/Anime"

interface ISelectElementProps {
  animeData?: IAnimeSimpleModel
  side: "left" | "right"

  onClick?: () => void
}

export type { ISelectElementProps }
