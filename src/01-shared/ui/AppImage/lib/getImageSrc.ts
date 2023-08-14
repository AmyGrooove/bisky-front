import { SHKIMORI_URL } from "@/shared/data"

const getImageSrc = (
  src: string,
  imageType: "poster" | "screenshot",
  errorGet = false,
) => {
  switch (imageType) {
    case "poster":
      return SHKIMORI_URL + "/system/animes/original/" + src + ".jpg"
    case "screenshot":
      return SHKIMORI_URL + "/system/screenshots/original/" + src + ".jpg"
    default:
      return src
  }
}

export { getImageSrc }
