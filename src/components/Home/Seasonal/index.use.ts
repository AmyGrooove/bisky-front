const useSeasonal = () => {
  const getRating = (score: number) => {
    switch (true) {
    case score >= 7:
      return 'score_high'
    case score >= 5:
      return 'score_meduim'
    default:
      return 'score_low'
    }
  }

  return { getRating }
}

export default useSeasonal
