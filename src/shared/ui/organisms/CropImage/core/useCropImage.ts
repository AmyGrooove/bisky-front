import { useCallback, useState } from 'react'
import { Area } from 'react-easy-crop'

import { ICropImageProps } from '../types/ICropImageProps'
import { getCroppedImage } from '../utils/getCroppedImage'

const useCropImage = (props: ICropImageProps) => {
  const {
    value,
    uploadFunction,
    aspect = 1,
    closeFunction,
    pointClassName,
  } = props

  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState({ x: 0, y: 0 })

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

  const resetImage = () => {
    setZoom(1)
    setCrop({ x: 0, y: 0 })
    setCroppedAreaPixels(null)
    closeFunction()
  }

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const changeImageInServer = async () => {
    if (!value || !croppedAreaPixels) return

    const croppedImage = await getCroppedImage(value, croppedAreaPixels)
    if (croppedImage) await uploadFunction(croppedImage)

    resetImage()
  }

  return {
    value,
    crop,
    zoom,
    setCrop,
    setZoom,
    onCropComplete,
    changeImageInServer,
    resetImage,
    aspect,
    pointClassName,
  }
}

export { useCropImage }
