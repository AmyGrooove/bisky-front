const getScoreStatus = (score: string) => {
  const scoreNumber = Number(score)

  return isNaN(scoreNumber) || scoreNumber < 6
    ? "low"
    : scoreNumber < 8.5
      ? "medium"
      : "high"
}

export { getScoreStatus }
