import AnimePosterCard from "@/components/Common/AnimePosterCard"
import { ICAnimePoster } from "@/types"
import styles from "./index.module.scss"
import { cl } from "@/utils"

const animePosters: ICAnimePoster[] = [
  {
    shiki_id: 3,
    labels: [
      "Ребёнок идолаРебёнокидолаРебёнок идола Ребёнок идолаРебёнок идолаРебёнок идолаРебёнок идолаРебёнок идолаРебёнок идолаРебёнок идола",
      "Koori Zokusei Danshi to Cool na Douryou Joshi",
    ],
    poster: "52034",
    kind: "tv",
    scores: [8, 9, 7],
    status: "anons",
    episodes: {
      count: 12,
      aired: 6,
      duration: 30,
      next_episode_at: new Date("2023-06-15"),
    },
    dates: {
      aired_on: new Date("2023-05-01"),
      released_on: null,
    },
    rating: "pg_13",
  },
  {
    shiki_id: 1,
    labels: ["Ребёнок идола", "Koori Zokusei Danshi to Cool na Douryou Joshi"],
    poster: "52034",
    kind: "tv",
    scores: [8, 9, 7],
    status: "ongoing",
    episodes: {
      count: 12,
      aired: 6,
      duration: 30,
      next_episode_at: new Date("2023-06-15"),
    },
    dates: {
      aired_on: new Date("2023-05-01"),
      released_on: null,
    },
    rating: "pg_13",
  },
  {
    shiki_id: 2,
    labels: ["Ребёнок идола", "Slice of Life"],
    poster: "52034",
    kind: "movie",
    scores: [7, 8, 7, 9],
    status: "released",
    episodes: {
      count: 1,
      aired: 1,
      duration: 120,
      next_episode_at: null,
    },
    dates: {
      aired_on: new Date("2022-12-10"),
      released_on: new Date("2023-01-05"),
    },
    rating: "pg",
  },
  {
    shiki_id: 2,
    labels: ["Ребёнок идола", "Slice of Life"],
    poster: "52034",
    kind: "movie",
    scores: [7, 8, 7, 9],
    status: "new_episode",
    episodes: {
      count: 1,
      aired: 1,
      duration: 120,
      next_episode_at: null,
    },
    dates: {
      aired_on: new Date("2022-12-10"),
      released_on: new Date("2023-01-05"),
    },
    rating: "pg",
  },
  {
    shiki_id: 2,
    labels: ["Ребёнок идола", "Slice of Life"],
    poster: "52034",
    kind: "movie",
    scores: [7, 8, 7, 9],
    status: "watching",
    episodes: {
      count: 1,
      aired: 1,
      duration: 120,
      next_episode_at: null,
    },
    dates: {
      aired_on: new Date("2022-12-10"),
      released_on: new Date("2023-01-05"),
    },
    rating: "pg",
  },
  {
    shiki_id: 2,
    labels: ["Ребёнок идола", "Slice of Life"],
    poster: "52034",
    kind: "movie",
    scores: [7, 8, 7, 9],
    status: "watching_plus_one",
    episodes: {
      count: 1,
      aired: 1,
      duration: 120,
      next_episode_at: null,
    },
    dates: {
      aired_on: new Date("2022-12-10"),
      released_on: new Date("2023-01-05"),
    },
    rating: "pg",
  },
]

const Page = () => {
  return (
    <>
      <div className={cl(styles.table)}>
        {animePosters.map((anime, index) => (
          <AnimePosterCard
            key={index}
            badge="anons"
            isAdded={true}
            anime={anime}
          />
        ))}
      </div>
      <div className={cl(styles.table)}>
        {animePosters.map((anime, index) => (
          <AnimePosterCard
            key={index}
            badge="anons"
            isAdded={false}
            anime={anime}
          />
        ))}
      </div>
    </>
  )
}

export default Page
