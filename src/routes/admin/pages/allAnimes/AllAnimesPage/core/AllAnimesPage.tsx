'use client'

import { cn, isNil } from '@shared/utils/functions'
import { useAllAnimesPage } from './useAllAnimesPage'
import st from './AllAnimesPage.module.scss'
import { Button } from '@shared/ui/molecules/Button'

const AllAnimesPage = () => {
  const {
    allAnimes,
    animesToDelete,
    validate,
    addAnimeToDeleteList,
    addAnimeToTrustList,
    animesToTrust,
  } = useAllAnimesPage()

  return (
    <div className={st.root}>
      {allAnimes.map(({ shikiID, poster }) => (
        <div
          key={shikiID}
          onClick={() => addAnimeToDeleteList(shikiID)}
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
            <img src={poster} className={st.poster} />
          )}
        </div>
      ))}
      <div className={st.panel}>
        <div
          className={st.panelText}
        >{`delete count: ${animesToDelete.length}`}</div>
        <div
          className={st.panelText}
        >{`trust count: ${animesToTrust.length}`}</div>
        <Button onClick={validate}>VALIDATE</Button>
      </div>
    </div>
  )
}

export { AllAnimesPage }
