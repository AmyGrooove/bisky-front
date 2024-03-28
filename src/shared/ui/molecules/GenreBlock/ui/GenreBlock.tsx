import Link from "next/link"
import Image from "next/image"

import { Text } from "@shared/ui/atoms/Text"
import { cn } from "@shared/utils/functions"

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
          <Image
            key={path}
            src={path ?? ""}
            width={126}
            height={202}
            className={st.poster}
            alt=""
          />
        ))}
      </div>
    </Link>
  )
}

export { GenreBlock }
