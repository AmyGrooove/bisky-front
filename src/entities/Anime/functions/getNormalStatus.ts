import { EStatus } from "../enums/EStatus"

const getNormalStatus = (status: keyof typeof EStatus) =>
  ({
    anons: "анонсировано",
    ongoing: "выходит",
    released: "вышел",
  })[status]

export { getNormalStatus }
