import Link from "next/link"

import { AnimesListData } from "@shared/ui/molecules"
import { Text } from "@shared/ui/atoms"

import { IUserAnimeStatsProps } from "../types/IUserAnimeStatsProps"

import st from "./UserAnimeStats.module.scss"

const UserAnimeStats = (props: IUserAnimeStatsProps) => {
  const { userData } = props

  return (
    <div className={st.root}>
      <Link href={"/profile/" + userData.username + "/animeList"}>
        <Text size="32" weight="700" isDefaultColor={false} className={st.link}>
          Список аниме
        </Text>
      </Link>
      <AnimesListData animeList={userData.animeList} />
    </div>
  )
}

export { UserAnimeStats }
