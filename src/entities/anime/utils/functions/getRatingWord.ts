const getRatingWord = (count: number) => {
  const cases = [2, 0, 1, 1, 1, 2]
  const titles = ['оценка', 'оценки', 'оценок']

  return `${count} ${
    titles[
      count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]
    ]
  }`
}

export { getRatingWord }
