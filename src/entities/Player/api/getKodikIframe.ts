"use server"

const getKodikIframe = async (
  animeShikiId: number,
): Promise<Record<string, any>> => {
  const result = await fetch(
    `https://kodikapi.com/search?token=030263fccccfcf8a48373bc496c1f762&shikimori_id=${animeShikiId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: { revalidate: 10000 },
    },
  )

  if (!result.ok)
    throw new Error(`Failed to get kodik iframe: ${result.statusText}`)

  return result.json()
}

export { getKodikIframe }
