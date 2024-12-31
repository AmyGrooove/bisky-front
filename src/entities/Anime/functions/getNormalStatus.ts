import { TStatus } from "../types/TStatus"

const getNormalStatus = (status: TStatus) =>
  ({
    anons: "анонсировано",
    ongoing: "выходит",
    released: "вышел",
  })[status]

export { getNormalStatus }
