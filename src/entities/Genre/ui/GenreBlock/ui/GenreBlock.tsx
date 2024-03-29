import Link from "next/link"

import { Text } from "@shared/ui/atoms/Text"
import { cn } from "@shared/utils/functions"
import { PlaceholderImage } from "@shared/ui/atoms/PlaceholderImage"

import { IGenreBlock } from "../types/IGenreBlockProps"

import st from "./GenreBlock.module.scss"

const GenreBlock = (props: IGenreBlock) => {
  const { posters, title, description, className, ...otherProps } = props

  return (
    <Link {...otherProps} className={cn(st.root, className)}>
      <Text size="24" weight="700">
        {title}
      </Text>
      <Text className={st.description}>{description}</Text>
      <div className={st.backgroundPosters}>
        {posters.map((path) => (
          <PlaceholderImage
            key={path}
            src={path ?? ""}
            width={126}
            height={202}
            className={st.poster}
            imageClassName={st.posterImage}
            alt=""
          />
        ))}
      </div>
    </Link>
  )
}

export { GenreBlock }
