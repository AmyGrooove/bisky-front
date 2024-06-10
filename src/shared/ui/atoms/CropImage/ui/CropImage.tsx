"use client"

import Cropper from "react-easy-crop"

import { ImgIcon, UploadIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { Button } from "@shared/ui/molecules"

import { ICropImageProps } from "../types/ICropImageProps"
import { PlaceholderImage } from "../../PlaceholderImage"

import st from "./CropImage.module.scss"
import { useCropImage } from "./useCropImage"

const CropImage = (props: ICropImageProps) => {
  const {
    imgLink,
    width,
    height,
    className,
    imageClassName,
    pointClassName,
    aspect = 1,
  } = props

  const {
    uploadImage,
    imageSrc,
    crop,
    zoom,
    setCrop,
    setZoom,
    onCropComplete,
    changeImageInServer,
    resetImg,
  } = useCropImage(props)

  return (
    <div className={cn(st.root, className)}>
      <label className={cn(st.uploadWrapper, imageClassName)}>
        <div className={st.uploadIconWrapper}>
          <UploadIcon className={st.uploadIcon} />
        </div>
        <PlaceholderImage
          width={width}
          height={height}
          src={imgLink + "?" + Date.now().toString()}
          alt=""
          imageClassName={st.imageWrapper}
          quality={100}
          unoptimized
        />
        <input
          type="file"
          hidden
          accept=".png, .jpg, .jpeg .webp"
          onChange={uploadImage}
        />
      </label>
      {imageSrc && (
        <dialog className={st.cropWrapper}>
          <Cropper
            image={imageSrc}
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
            <ImgIcon className={cn(st.imgIcon, st.imgIcon_small)} />
            <input
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={zoom}
              onChange={(event) => setZoom(Number(event.target.value))}
              className={st.cropRange}
            />
            <ImgIcon className={cn(st.imgIcon, st.imgIcon_big)} />
          </div>
          <div className={st.buttonWrapper}>
            <Button onClick={resetImg}>Назад</Button>
            <Button onClick={changeImageInServer} className={st.applyButton}>
              Применить
            </Button>
          </div>
        </dialog>
      )}
    </div>
  )
}

export { CropImage }
