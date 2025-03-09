import { Area } from 'react-easy-crop'

const getCroppedImage = (
  imageSrc: string,
  croppedAreaPixels: Area,
): Promise<FormData> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.src = imageSrc

    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = croppedAreaPixels.width
      canvas.height = croppedAreaPixels.height
      const ctx = canvas.getContext('2d')

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
        if (!blob) return

        const file = new File([blob], 'croppedImage.png', {
          type: 'image/png',
        })

        const formData = new FormData()
        formData.append('file', file)

        resolve(formData)
      }, 'image/png')
    }

    image.onerror = (error) => reject(error)
  })

export { getCroppedImage }
