import { Area } from 'react-easy-crop'

const MIME_TYPE = 'image/png' as const
const FILE_NAME = 'crop.png' as const

const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    const isLocal = src.startsWith('blob:') || src.startsWith('data:')
    if (!isLocal) img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('Failed to load image'))
    img.src = src
  })

const canvasToBlob = (canvas: HTMLCanvasElement) =>
  new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) return reject(new Error('Canvas is empty or tainted (CORS).'))
      resolve(blob)
    }, MIME_TYPE)
  })

const getCroppedImage = async (
  imageSrc: string,
  croppedAreaPixels: Area,
): Promise<FormData> => {
  const img = await loadImage(imageSrc)

  const dpr =
    typeof window !== 'undefined' && window.devicePixelRatio
      ? window.devicePixelRatio
      : 1

  const { width, height, x, y } = croppedAreaPixels

  const canvas = document.createElement('canvas')
  canvas.width = Math.max(1, Math.round(width * dpr))
  canvas.height = Math.max(1, Math.round(height * dpr))

  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('2D context not available')

  ctx.imageSmoothingQuality = 'high'
  ctx.scale(dpr, dpr)
  ctx.drawImage(img, x, y, width, height, 0, 0, width, height)

  const blob = await canvasToBlob(canvas)
  const file = new File([blob], FILE_NAME, { type: MIME_TYPE })

  const formData = new FormData()
  formData.append('file', file, FILE_NAME)

  return formData
}

export { getCroppedImage }
