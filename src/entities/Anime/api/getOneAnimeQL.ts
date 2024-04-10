"use server"

import { cookies } from "next/headers"

import { API_URL } from "@shared/constants"

import { IAnimeFullModel } from "../types/IAnimeFullModel"

const getOneAnimeQL = async (animeId: string): Promise<IAnimeFullModel> => {
  const result = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + (cookies().get("access-token")?.value ?? ""),
    },
    body: JSON.stringify({
      query: `{
        getAnimes(animeQuery: { filter: { _id_ID: "${animeId}" } }) {
          _id
          dates {
            releasedOn
            airedOn
          }
          description {
            en
            ru
          }
          episodes {
            airedCount
            averageDuration
            count
            lastEpisodeAiredDate
            nextEpisodeAiredDate
            singleEpisodes {
              airedOn
              duration
              name
            }
          }
          franchise {
            _id
            name {
              en
              ru
            }
          }
          genres {
            _id
            name {
              en
              ru
            }
          }
          kind
          labels {
            en
            ru
            synonyms
          }
          otherPlatforms {
            platform {
              _id
              name {
                en
                ru
              }
              logo
            }
            url
          }
          poster
          rating
          related {
            relation {
              en
              ru
            }
            base {
              _id
              poster
              labels {
                en
                ru
              }
              userData {
                score
                animeStatus
              }
              usersList {
                generalCount
                addedCount
              }
              score {
                averageScore
              }
              status
              episodes {
                airedCount
              }
            }
          }
          score {
            averageScore
            count
          }
          screenshots
          status
          studios {
            _id
            name
            logo
          }
          updateDate
          userData {
            watchedSeries
            score
            animeStatus
          }
          usersList {
            addedCount
            completedCount
            droppedCount
            generalCount
            watchingCount
          }
          videos {
            name
            url
          }
        }
      }`,
    }),
    next: { revalidate: 30 },
  })

  if (!result.ok) {
    throw new Error(`Failed to get anime: ${result.statusText}`)
  }

  return (await result.json()).data.getAnimes[0]
}

export { getOneAnimeQL }
