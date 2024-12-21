import Link from "next/link"

import { getCurrentUserData } from "@appData/profile/api"
import {
  animeListPageStyles as st,
  IAnimeListPageProps,
  UserAnimeList,
} from "@appData/profile/subpages/animeList"
import { PlaceholderImage, Text } from "@shared/ui/atoms"
import { AnimesListData } from "@shared/ui/molecules"

const AnimeListPage = async (props: IAnimeListPageProps) => {
  const { username } = await props.params

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
              src={
                userData.avatar
                  ? `${userData.avatar}?${Date.now().toString()}`
                  : ""
              }
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
      <UserAnimeList username={userData.username} />
    </div>
  )
}

export default AnimeListPage
