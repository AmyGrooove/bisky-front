import { notFound } from "next/navigation"

import { hasOnlyDigits } from "@/01-shared/utils"
import { getOneAnimeInfo } from "@/02-entities/anime"
import {
  Description,
  Head,
  Lists,
  Related,
  Scores,
  Screenshots,
  Video,
  Watching,
} from "@/05-pages/anime/[id]"

import styles from "./page.module.scss"

// export const revalidate = 0;

// export async function generateStaticParams() {
//   const res = await fetch("http://localhost:3000/api/shop");

//   const products: IProduct[] = await getProductsData();

//   return products?.map(({ id }) => ({
//     id,
//   }));
// }

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  if (!hasOnlyDigits(id)) {
    return notFound()
  }

  const animeId = parseInt(id)
  const animeInfo = await getOneAnimeInfo(animeId)

  if (!animeInfo) {
    return notFound()
  }

  return (
    <div className={styles.anime}>
      <Head animeId={animeId} />
      <div className={styles.anime__content}>
        <Description
          description={animeInfo.description}
          genres={animeInfo.genres}
          studios={animeInfo.studios}
        />
        <Watching animeId={animeInfo.id} labels={animeInfo.labels} />
        <div className={styles.anime__group}>
          <Scores scores={animeInfo.anotherScores[0]} />
          <Lists />
        </div>
        <Related animes={animeInfo.franchise?.animes ?? []} />
        <Screenshots screenshots={animeInfo.screenshots} />
        <Video animeId={animeId} />
      </div>
    </div>
  )
}

export default Page
