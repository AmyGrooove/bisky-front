const getVideoUrl = (src?: string, isBack = true) => {
  const newSrc =
    src && src.includes("youtu") ? src.replace("https://youtu.be/", "") : ""

  return isBack ? "https://i.ytimg.com/vi/" + newSrc + "/default.jpg" : newSrc
}

export { getVideoUrl }
