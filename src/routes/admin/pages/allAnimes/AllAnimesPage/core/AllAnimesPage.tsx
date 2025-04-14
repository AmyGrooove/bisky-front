'use client'

import { cn, isNil } from '@shared/utils/functions'
import Image from 'next/image'

import { useAllAnimesPage } from './useAllAnimesPage'
import st from './AllAnimesPage.module.scss'

const AllAnimesPage = () => {
  const {
    allAnimes,
    animesToDelete,
    validate,
    addAnimeToDeleteList,
    addAnimeToTrustList,
    animesToTrust,
    goToAnime,
  } = useAllAnimesPage()

  return (
    <div className={st.root}>
      {allAnimes.map(({ _id, shikiID, poster, status, label }) => (
        <div
          key={shikiID}
          onClick={() => addAnimeToDeleteList(shikiID)}
          onMouseDown={(event) => goToAnime(event, _id)}
          onContextMenu={(event) => {
            event.preventDefault()
            addAnimeToTrustList(shikiID)
          }}
          className={cn(st.anime, {
            [st.anime_skipped]: animesToDelete.includes(String(shikiID)),
            [st.anime_trust]: animesToTrust.includes(String(shikiID)),
          })}
        >
          {isNil(poster) ? (
            <div className={st.poster} />
          ) : (
            <Image
              width={200}
              height={300}
              alt={String(shikiID)}
              src={poster}
              className={st.poster}
            />
          )}
          <div className={st.animeInfo}>
            <div className={cn(st.text, st[`text_${status}`])}>{status}</div>
            <div className={st.text}>{label}</div>
          </div>
        </div>
      ))}
      <div className={st.panel}>
        <div
          className={st.panelText}
        >{`delete count: ${animesToDelete.length}`}</div>
        <div
          className={st.panelText}
        >{`trust count: ${animesToTrust.length}`}</div>
        <button onClick={validate}>VALIDATE</button>
      </div>
    </div>
  )
}

export { AllAnimesPage }
