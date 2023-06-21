import { notFound } from "next/navigation"

import { getOneAnimeInfo } from "@/services"
import { hasOnlyDigits } from "@/utils"

import Description from "./Description"
import Head from "./Head"
import Lists from "./Lists"
import PlayerBlock from "./PlayerBlock"
import RatingBlock from "./RatingBlock"
import Related from "./Related"
import Screenshots from "./Screenshots"
import Video from "./Video"
import styles from "./index.module.scss"

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

  // const { data: findAnimeId } = await graphqlClient.makeRequest(`
  //   query getOneAnimeId {
  //     getOneAnime(id: ${animeId}) {
  //       id
  //     }
  //   }
  // `)

  if (!animeInfo) {
    return notFound()
  }

  return (
    <div className={styles.anime}>
      <Head animeId={animeId} />
      <div className={styles.anime__content}>
        <Description description={animeInfo.description} />
        <PlayerBlock />
        <div className={styles.anime__group}>
          <RatingBlock scores={animeInfo.anotherScores[0]} />
          <Lists />
        </div>
        <Related />
        <Screenshots animeId={animeId} />
        <Video />
      </div>
    </div>
  )
}

export default Page
