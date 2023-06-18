class GraphQLClient {
  private api_url: string
  private access_token: string

  constructor(api_url: string, access_token: string) {
    this.api_url = api_url
    this.access_token = access_token
  }

  public makeRequest = (query: string) => {
    return fetch(this.api_url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        // authorization: this.access_token,
      },
      body: JSON.stringify({ query: query }),
    })
  }
}

const graphqlClient = new GraphQLClient(
  "https://bisky-back.vercel.app/graphql",
  "",
)

export default graphqlClient
