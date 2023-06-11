import { SHKIMORI_URL } from "@/constants"

const getImageSrc = (
  src: string,
  imageType: "poster" | "screenshot" | "search" | "vector" = "vector",
  errorGet = false,
) => {
  switch (imageType) {
    case "poster":
    case "search":
      return (
        SHKIMORI_URL +
        "/system/animes/original/" +
        src +
        (errorGet ? ".JPG" : ".jpg")
      )
    case "screenshot":
      return (
        SHKIMORI_URL +
        "/system/screenshots/original/" +
        src +
        (errorGet ? ".JPG" : ".jpg")
      )
    default:
      return src
  }
}

export { getImageSrc }