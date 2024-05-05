import st from "./PlayerModule.module.scss"

const PlayerModule = async () => {
  const result = await (
    await fetch(
      "https://kodikapi.com/search?token=030263fccccfcf8a48373bc496c1f762&shikimori_id=2904",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    )
  ).json()

  return (
    <>
      {/* <iframe
        className={st.root}
        src={result.results[0].link}
        width="auto"
        height="auto"
      /> */}

      <div
        style={{
          width: "100%",
          height: "562px",
          backgroundColor: "var(--dark-100)",
        }}
      />
    </>
  )
}

export { PlayerModule }
