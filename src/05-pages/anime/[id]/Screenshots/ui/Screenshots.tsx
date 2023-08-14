import { Fancybox } from "@/01-shared/libs/fancybox"
import { AppImage } from "@/01-shared/ui/AppImage"
import { Carousel } from "@/03-features/Carousel"

interface IScreenshots {
  screenshots: string[]
}

const Screenshots = async ({ screenshots }: IScreenshots) => {
  if (screenshots.length === 0) {
    return null
  }

  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
        groupAll: true,
      }}
    >
      <Carousel
        label="Кадры"
        labelButtons
        centeredSlides
        loop
        spaceBetween={20}
        slides={screenshots.map((item) => (
          <a
            key={item}
            data-fancybox="screenshots"
            href={`https://shikimori.me/system/screenshots/original/${item}.jpg`}
          >
            <AppImage
              src={item}
              width={600}
              height={330}
              imageType="screenshot"
            />
          </a>
        ))}
        keys={screenshots.map((item) => item)}
      />
    </Fancybox>
  )
}

export { Screenshots }
