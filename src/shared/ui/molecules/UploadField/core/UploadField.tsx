import { UploadIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import st from './UploadField.module.scss'
import { cn } from '@shared/utils/functions'
import { useUploadField } from './useUploadField'
import { IUploadFieldProps } from '../types/IUploadFieldProps'

const UploadField = (props: IUploadFieldProps) => {
  const {
    className,
    uploadImage,
    onDragOver,
    onDragLeave,
    onDrop,
    isDraggable,
    accept,
  } = useUploadField(props)

  return (
    <label
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={cn(st.root, className, { [st.root_drag]: isDraggable })}
    >
      <input
        value=""
        type="file"
        hidden
        accept={accept}
        onChange={uploadImage}
      />
      <UploadIcon className={st.icon} isCustomColor />
      <div className={st.textWrapper}>
        <Text
          weight="700"
          isCustomColor
          className={cn(st.text, st.text_select)}
        >
          Выберите
        </Text>
        <Text className={cn(st.text, st.text_desktop)}>
          или перетащите файл сюда
        </Text>
        <Text className={cn(st.text, st.text_mobile)}>файл</Text>
      </div>
    </label>
  )
}

export { UploadField }
