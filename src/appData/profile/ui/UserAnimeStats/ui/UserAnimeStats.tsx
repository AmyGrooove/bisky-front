import Link from "next/link"

import { AnimesListData } from "@shared/ui/molecules"
import { Text } from "@shared/ui/atoms"

import { IUserAnimeStatsProps } from "../types/IUserAnimeStatsProps"
import { UsersSubscriptions } from "../../UsersSubscriptions"

import st from "./UserAnimeStats.module.scss"

const UserAnimeStats = (props: IUserAnimeStatsProps) => {
  const { userData } = props

  return (
    <div className={st.root}>
      <div className={st.leftSide}>
        <div className={st.userAnimeList}>
          <Link href={"/profile/" + userData.username + "/animeList"}>
            <Text
              size="32"
              weight="700"
              isDefaultColor={false}
              className={st.link}
            >
              Список аниме
            </Text>
          </Link>
          <AnimesListData animeList={userData.animeList} />
        </div>
      </div>
      <div className={st.rightSide}>
        <UsersSubscriptions userData={userData} />
      </div>
    </div>
  )
}

export { UserAnimeStats }
