import { ChangeEvent, DragEvent, useState } from 'react'

import { IUploadFieldProps } from '../types/IUploadFieldProps'

const useUploadField = (props: IUploadFieldProps) => {
  const { onChange, className, accept } = props

  const [isDraggable, setIsDraggable] = useState(false)

  const handleFile = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => onChange(reader.result as string)
    reader.readAsDataURL(file)
  }

  const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      handleFile(event.target.files[0])
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

  const onDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      handleFile(event.dataTransfer.files[0])
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
  }
}

export { useUploadField }
