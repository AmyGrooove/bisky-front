import { ChangeEvent, DragEvent, useCallback, useState } from 'react'

import { IUploadFieldProps } from '../types/IUploadFieldProps'

const useUploadField = (props: IUploadFieldProps) => {
  const { onChange, className, accept, variant = 'big' } = props

  const [isDraggable, setIsDraggable] = useState(false)

  const readFile = useCallback(
    (file: File) =>
      new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.readAsDataURL(file)
      }),
    [],
  )

  const handleFile = useCallback(
    async (file: File) => {
      const result = await readFile(file)
      onChange(result)
    },
    [onChange, readFile],
  )

  const uploadImage = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
        await handleFile(file)
        event.target.value = ''
      }
    },
    [handleFile],
  )

  const onDragOver = useCallback((event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDraggable(true)
  }, [])

  const onDragLeave = useCallback((event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDraggable(false)
  }, [])

  const onDrop = useCallback(
    async (event: DragEvent<HTMLLabelElement>) => {
      event.preventDefault()
      setIsDraggable(false)
      const file = event.dataTransfer.files?.[0]
      if (file) {
        await handleFile(file)
      }
    },
    [handleFile],
  )

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
