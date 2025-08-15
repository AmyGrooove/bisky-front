import { ChangeEvent, DragEvent, useState } from 'react'

import { IUploadFieldProps } from '../types/IUploadFieldProps'

const useUploadField = (props: IUploadFieldProps) => {
  const { onChange, className, accept, variant = 'big' } = props

  const [isDraggable, setIsDraggable] = useState(false)

  const readFile = (file: File) =>
    new Promise<string>((resolve) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.readAsDataURL(file)
    })

  const handleFile = async (file: File) => {
    const result = await readFile(file)
    onChange(result)
  }

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      await handleFile(file)
      event.target.value = ''
    }
  }

  const onDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDraggable(true)
  }

  const onDragLeave = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDraggable(false)
  }

  const onDrop = async (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDraggable(false)
    const file = event.dataTransfer.files?.[0]
    if (file) {
      await handleFile(file)
    }
  }

  return {
    className,
    uploadImage,
    onDragOver,
    onDragLeave,
    onDrop,
    isDraggable,
    accept,
    variant,
  }
}

export { useUploadField }
