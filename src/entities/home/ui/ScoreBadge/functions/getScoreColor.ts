const getScoreColor = (score: number) => {
  if (score < 5) return 'lowScore'
  else if (score < 8) return 'mediumScore'
  else return 'highScore'
}

export { getScoreColor }
