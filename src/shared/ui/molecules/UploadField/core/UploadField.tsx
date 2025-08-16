import { forwardRef } from 'react'
import { Text } from '@shared/ui/atoms/Text'
import { cn } from '@shared/utils/functions'
import { CloudUploadIcon } from '@shared/icons'

import { IUploadFieldProps } from '../types/IUploadFieldProps'

import st from './UploadField.module.scss'
import { useUploadField } from './useUploadField'

const UploadField = forwardRef<HTMLInputElement, IUploadFieldProps>(
  (props, ref) => {
    const {
      className,
      uploadImage,
      onDragOver,
      onDragLeave,
      onDrop,
      isDraggable,
      accept,
      variant,
    } = useUploadField(props)

    return (
      <label
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={cn(st.root, className, st[`root_${variant}`], {
          [st.root_drag]: isDraggable,
        })}
      >
        <input
          ref={ref}
          type="file"
          hidden
          accept={accept}
          onChange={uploadImage}
        />
        <CloudUploadIcon className={st.icon} />
        {variant !== 'mini' && (
          <div className={st.textWrapper}>
            <Text weight="700" className={cn(st.text, st.text_select)}>
              Выберите
            </Text>
            <Text className={st.text}>
              {variant === 'big' ? 'или перетащите файл сюда' : 'файл'}
            </Text>
          </div>
        )}
      </label>
    )
  },
)

export { UploadField }
