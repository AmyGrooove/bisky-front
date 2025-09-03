import { useCallback, useState } from 'react'
import { Area } from 'react-easy-crop'
import { isNil } from '@shared/utils/functions'

import { ICropImageProps } from '../types/ICropImageProps'
import { getCroppedImage } from '../functions/getCroppedImage'

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
    if (isNil(value) || isNil(croppedAreaPixels)) return

    const croppedImage = await getCroppedImage(value, croppedAreaPixels)
    console.log('file =', croppedImage.get('file'))
    for (const [k, v] of croppedImage.entries()) {
      console.log(k, v instanceof File ? `${v.name} (${v.type}) ${v.size}B` : v)
    }
    if (!isNil(croppedImage)) await uploadFunction(croppedImage)

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
