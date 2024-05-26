import Link from "next/link"

import { getCurrentUserData } from "@appData/profile/api"
import {
  animeListPageStyles as st,
  IAnimeListPageProps,
  getNormalWatchStatus,
} from "@appData/profile/subpages/animeList"
import { AnimeCard } from "@entities/Anime"
import { PlaceholderImage, Text } from "@shared/ui/atoms"
import { AnimesListData } from "@shared/ui/molecules"

const AnimeListPage = async (props: IAnimeListPageProps) => {
  const {
    params: { username },
  } = props

  const userData = await getCurrentUserData({ username })

  return (
    <div className={st.root}>
      <div className={st.header}>
        <Text weight="700" size="20">
          Список аниме
        </Text>
        <div className={st.userData}>
          <Link href={"/profile/" + userData.username} className={st.username}>
            <PlaceholderImage
              width={300}
              height={300}
              src={userData.avatar ?? ""}
              alt=""
              className={st.avatar}
              imageClassName={st.avatarImage}
              quality={100}
              unoptimized
            />
            <Text weight="700" size="32">
              {userData.username}
            </Text>
          </Link>
          <AnimesListData animeList={userData.animeList} />
        </div>
      </div>
      <div className={st.animes}>
        {userData.animeEstimates.map((item) => (
          <div key={item.base._id}>
            <AnimeCard anime={item.base} />
            <Text
              isDefaultColor={false}
              className={st["status_" + item.status]}
            >
              {getNormalWatchStatus(item.status)}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimeListPage
