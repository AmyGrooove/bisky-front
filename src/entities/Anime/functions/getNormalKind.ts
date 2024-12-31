import { TKind } from "../types/TKind"

const getNormalKind = (kind: TKind) =>
  ({
    tv: "сериал",
    movie: "фильм",
    ova: "OVA",
    ona: "ONA",
    special: "спец-выпуск",
    music: "прочее",
    tv_special: "спец-выпуск",
    none: "прочее",
    pv: "прочее",
    cm: "прочее",
  })[kind]

export { getNormalKind }
