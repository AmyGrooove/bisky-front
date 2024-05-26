"use client"

import {
  ErrorPage,
  FastSelectLoadingBlock,
  MinimumAnimeError,
  useFastSelectPage,
} from "@appData/fastSelect"
import {
  fastSelectPageStyles as st,
  SelectElement,
  SelectWinner,
} from "@appData/fastSelect"
import { BackIcon } from "@shared/icons"
import { Text } from "@shared/ui/atoms"
import { Button } from "@shared/ui/molecules"

const FastSelectPage = () => {
  const {
    isSessionValid,
    isLoading,
    isError,
    currentPair,
    selectChoice,
    goBack,
    winner,
    animesCount,
    nextArrayNumber,
  } = useFastSelectPage()

  return !isSessionValid ? (
    <ErrorPage />
  ) : isLoading ? (
    <FastSelectLoadingBlock />
  ) : isError ? (
    <MinimumAnimeError />
  ) : (
    <div className={st.root}>
      {winner ? (
        <div className={st.winner}>
          <SelectWinner animeData={winner.animeData} />
        </div>
      ) : (
        <div className={st.main}>
          <SelectElement
            animeData={currentPair?.choice1?.animeData}
            side="left"
            onClick={() => selectChoice("first")}
          />
          <SelectElement
            animeData={currentPair?.choice2?.animeData}
            side="right"
            onClick={() => selectChoice("second")}
          />
          <div className={st.divider} />
          <Text className={st.versus} weight="700" size="32">
            VS
          </Text>
        </div>
      )}
      <div className={st.bottom}>
        {!winner && (
          <Text className={st.count} weight="700" size="32">
            {nextArrayNumber - 1 + "/" + (animesCount - 2)}
          </Text>
        )}
        <Button
          leftIcon={<BackIcon />}
          onClick={goBack}
          disabled={nextArrayNumber === 2}
        />
      </div>
    </div>
  )
}

export default FastSelectPage
