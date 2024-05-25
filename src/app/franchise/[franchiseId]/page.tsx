import {
  IFranchisePageProps,
  franchisePageStyles as st,
} from "@appData/franchise"
import { getCurrentFranchiseData } from "@appData/franchise/api"
import { AnimeCard } from "@entities/Anime"

const FranchisePage = async (props: IFranchisePageProps) => {
  const {
    params: { franchiseId },
  } = props

  const franchiseData = await getCurrentFranchiseData({ franchiseId })

  console.log(franchiseData)

  return (
    <div className={st.root}>
      {franchiseData.relatedWorks.map((item) => (
        <AnimeCard key={item._id} anime={item} />
      ))}
    </div>
  )
}

export default FranchisePage
