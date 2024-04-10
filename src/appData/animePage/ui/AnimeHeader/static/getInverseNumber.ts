const getInverseNumber = (value: number) =>
  ({
    0: 9,
    1: 8,
    2: 7,
    3: 6,
    4: 5,
    5: 4,
    6: 3,
    7: 2,
    8: 1,
    9: 0,
  })[value] ?? 0

export { getInverseNumber }
