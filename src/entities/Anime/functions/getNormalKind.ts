import { EKind } from "../enums/EKind"

const getNormalKind = (kind: keyof typeof EKind) =>
  ({
    tv: "сериал",
    movie: "фильм",
    ova: "OVA",
    ona: "ONA",
    special: "спец-выпуск",
    music: "музыка",
    tv_special: "спец-выпуск",
    none: "null",
    pv: "промо",
    cm: "промо",
  })[kind]

export { getNormalKind }
