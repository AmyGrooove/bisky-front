class GraphQLClient {
  private api_url: string
  private access_token: string

  constructor(api_url: string, access_token: string) {
    this.api_url = api_url
    this.access_token = access_token
  }

  public makeRequest = async (query: string) => {
    const res = await fetch(this.api_url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        // authorization: this.access_token,
      },
      body: JSON.stringify({ query: query }),
      next: { revalidate: 10 },
    })

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return res.json()
  }
}

const graphqlClient = new GraphQLClient(
  "https://bisky-back.vercel.app/graphql",
  "",
)

export default graphqlClient
