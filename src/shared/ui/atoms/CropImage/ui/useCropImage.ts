import { ChangeEvent, useCallback, useState } from "react"
import { Area } from "react-easy-crop"

import { ICropImageProps } from "../types/ICropImageProps"

const useCropImage = (props: ICropImageProps) => {
  const { uploadFunction } = props

  const [imageSrc, setImageSrc] = useState<string | null>(null)

  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState({ x: 0, y: 0 })

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

  const resetImg = () => {
    setImageSrc(null)
    setZoom(1)
    setCrop({ x: 0, y: 0 })
    setCroppedAreaPixels(null)
  }

  const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onload = () => setImageSrc(reader.result as string)

      reader.readAsDataURL(file)
    }
  }

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const changeImageInServer = async () => {
    if (!imageSrc || !croppedAreaPixels) return

    const image = new Image()
    image.src = imageSrc
    image.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = croppedAreaPixels.width
      canvas.height = croppedAreaPixels.height
      const ctx = canvas.getContext("2d")

      if (!ctx) return

      ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
      )

      canvas.toBlob(async (blob) => {
        if (!blob || !uploadFunction) return

        const file = new File([blob], "croppedImage.png", { type: "image/png" })

        const formData = new FormData()
        formData.append("file", file)

        await uploadFunction(formData)
      }, "image/png")
    }

    resetImg()
  }

  return {
    uploadImage,
    imageSrc,
    crop,
    zoom,
    setCrop,
    setZoom,
    onCropComplete,
    changeImageInServer,
    resetImg,
  }
}

export { useCropImage }
