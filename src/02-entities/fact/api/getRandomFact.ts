import { graphqlClient } from "@/shared/libs/graphql"

const getRandomFact = async () => {
  const { data } = await graphqlClient.makeRequest(`
    query GetRandomFact {
      getRandomFact
    }
  `)

  if (!data) {
    return null
  }

  const randomFact = data.getRandomFact

  return randomFact
}

export { getRandomFact }
