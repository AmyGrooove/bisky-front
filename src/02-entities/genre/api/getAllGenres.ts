import { graphqlClient } from "@/shared/libs/graphql"

const getAllGenres = async () => {
  const { data } = await graphqlClient.makeRequest(`
    query GetAllGenres {
      getAllGenres {
        linkId {
          anime
          manga
        }
        name {
          en
          ru
        }
      }
    }
  `)

  if (!data) {
    return null
  }

  const allGenres = data.getAllGenres

  return allGenres
}

export { getAllGenres }
