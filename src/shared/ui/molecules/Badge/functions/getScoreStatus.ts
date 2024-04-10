const getScoreStatus = (score: string | number) => {
  const scoreNumber = Number(score)

  return isNaN(scoreNumber) || scoreNumber < 5
    ? "low"
    : scoreNumber < 8
      ? "normal"
      : "high"
}

export { getScoreStatus }
