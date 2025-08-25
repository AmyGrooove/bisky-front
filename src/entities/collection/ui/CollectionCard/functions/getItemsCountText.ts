const getItemsCountText = (count: number) => {
  const absCount = Math.abs(count) % 100
  const lastDigit = absCount % 10

  if (absCount > 10 && absCount < 20) {
    return `${count} тайтлов`
  }

  if (lastDigit > 1 && lastDigit < 5) {
    return `${count} тайтла`
  }

  if (lastDigit === 1) {
    return `${count} тайтл`
  }

  return `${count} тайтлов`
}

export { getItemsCountText }
