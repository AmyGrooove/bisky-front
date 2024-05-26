import { Skeleton } from "@shared/ui/atoms"

import st from "./UserAnimeListLoading.module.scss"

const UserAnimeListLoading = () => {
  return (
    <div className={st.root}>
      {[...Array(40)].map((_, index) => (
        <Skeleton key={index + "UserAnimeListLoading"} templates="posterCard" />
      ))}
    </div>
  )
}

export { UserAnimeListLoading }
