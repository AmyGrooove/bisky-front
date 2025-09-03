import { cn } from '@shared/utils/functions'
import Cropper from 'react-easy-crop'
import { ImageIcon } from '@shared/icons'
import { Button } from '@shared/ui/molecules/Button'

import { ICropImageProps } from '../types/ICropImageProps'

import { useCropImage } from './useCropImage'
import st from './CropImage.module.scss'

const CropImage = (props: ICropImageProps) => {
  const {
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
  } = useCropImage(props)

  return (
    <div className={st.root}>
      <Cropper
        image={value}
        crop={crop}
        zoom={zoom}
        aspect={aspect}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        classes={{
          cropAreaClassName: cn(st.cropBox, pointClassName),
          containerClassName: st.cropMain,
        }}
        onCropComplete={onCropComplete}
      />
      <div className={st.cropRangeWrapper}>
        <ImageIcon className={st.iconSmall} />
        <input
          type="range"
          min="1"
          max="3"
          step="0.1"
          value={zoom}
          onChange={(event) => setZoom(Number(event.target.value))}
          className={st.cropRange}
        />
        <ImageIcon className={st.iconBig} />
      </div>
      <div className={st.buttonWrapper}>
        <Button
          variant="big"
          onClick={resetImage}
          className={cn(st.button, st.button_delete)}
        >
          Назад
        </Button>
        <Button
          variant="big"
          onClick={changeImageInServer}
          className={cn(st.button, st.button_set)}
        >
          Применить
        </Button>
      </div>
    </div>
  )
}

export { CropImage }
